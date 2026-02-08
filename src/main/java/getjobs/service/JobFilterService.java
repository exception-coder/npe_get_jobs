package getjobs.service;

import getjobs.common.dto.ConfigDTO;
import getjobs.common.enums.JobStatusEnum;
import getjobs.modules.ai.job.dto.JobMatchResult;
import getjobs.modules.ai.job.service.JobMatchAiService;
import getjobs.modules.boss.dto.JobDTO;
import getjobs.repository.JobRepository;
import getjobs.repository.UserProfileRepository;
import getjobs.repository.entity.JobEntity;
import getjobs.repository.entity.UserProfile;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Service
public class JobFilterService {

    private Set<String> blackRecruiters = new HashSet<>();

    private final JobMatchAiService jobMatchAiService;

    private final UserProfileRepository userProfileRepository;

    private final RecruitmentServiceFactory recruitmentServiceFactory;

    private final SalaryFilterService salaryFilterService;

    private final JobRepository jobRepository;

    public JobFilterService(JobMatchAiService jobMatchAiService,
            UserProfileRepository userProfileRepository,
            @Lazy RecruitmentServiceFactory recruitmentServiceFactory,
            SalaryFilterService salaryFilterService,
            JobRepository jobRepository) {
        this.jobMatchAiService = jobMatchAiService;
        this.userProfileRepository = userProfileRepository;
        this.recruitmentServiceFactory = recruitmentServiceFactory;
        this.salaryFilterService = salaryFilterService;
        this.jobRepository = jobRepository;
    }

    public List<JobDTO> filterJobs(List<JobDTO> jobDTOS, ConfigDTO config) {
        return filterJobs(jobDTOS, config, true);
    }

    /**
     * 过滤职位并直接更新数据库记录
     * 
     * @param jobDTOS        职位列表
     * @param config         配置信息
     * @param salaryExpected 是否检查薪资
     * @return 过滤后的职位列表（通过过滤的职位）
     */
    @Transactional
    public List<JobDTO> filterJobs(List<JobDTO> jobDTOS, ConfigDTO config, boolean salaryExpected) {
        log.info("开始Boss直聘岗位过滤，原始岗位数量: {}", jobDTOS.size());

        // 预先加载所有需要的JobEntity，建立映射关系
        List<String> allJobIds = jobDTOS.stream()
                .map(JobDTO::getEncryptJobId)
                .filter(Objects::nonNull)
                .collect(Collectors.toList());

        Map<String, JobEntity> jobEntityMap = new HashMap<>();
        if (!allJobIds.isEmpty()) {
            List<JobEntity> entities = jobRepository.findAllByEncryptJobIdIn(allJobIds);
            jobEntityMap = entities.stream()
                    .collect(Collectors.toMap(JobEntity::getEncryptJobId, entity -> entity));
        }

        // 用于收集通过过滤的职位
        List<JobDTO> passedJobs = new ArrayList<>();
        List<JobEntity> entitiesToUpdate = new ArrayList<>();

        // 执行过滤逻辑，并直接更新对应的JobEntity
        for (JobDTO job : jobDTOS) {
            JobEntity entity = jobEntityMap.get(job.getEncryptJobId());
            if (entity == null) {
                log.warn("未找到职位实体: {}", job.getEncryptJobId());
                continue;
            }

            // 获取过滤原因（会在内部进行AI匹配并立即更新数据库）⭐
            String filterReason = getFilterReason(job, config, salaryExpected);
            job.setFilterReason(filterReason);

            // 更新JobEntity的状态和过滤原因
            if (filterReason == null) {
                // 通过过滤
                entity.setStatus(JobStatusEnum.PENDING.getCode());
                entity.setFilterReason(null);
                passedJobs.add(job);
            } else {
                // 被过滤
                entity.setStatus(JobStatusEnum.FILTERED.getCode());
                entity.setFilterReason(filterReason);
            }

            // 注意：AI匹配结果已在getFilterReason()中实时更新到数据库，这里只需更新状态
            entitiesToUpdate.add(entity);
        }

        // 批量保存到数据库
        if (!entitiesToUpdate.isEmpty()) {
            jobRepository.saveAll(entitiesToUpdate);
            log.info("成功更新 {} 个职位记录到数据库", entitiesToUpdate.size());
        }

        log.info("Boss直聘岗位过滤完成，通过过滤: {} 个，被过滤: {} 个",
                passedJobs.size(), jobDTOS.size() - passedJobs.size());

        return passedJobs;
    }

    /**
     * 获取职位过滤原因
     *
     * @param job            职位信息
     * @param config         配置信息
     * @param salaryExpected 是否检查薪资
     * @return 过滤原因，null表示通过过滤
     */
    private String getFilterReason(JobDTO job, ConfigDTO config, boolean salaryExpected) {
        // 检查岗位黑名单
        if (isJobInBlacklist(job)) {
            return "岗位名称包含黑名单关键词";
        }

        // 检查公司黑名单
        if (isCompanyInBlacklist(job)) {
            return "公司名称包含黑名单关键词";
        }

        // 检查招聘者黑名单
        if (isRecruiterInBlacklist(job)) {
            return "招聘者包含黑名单关键词";
        }

        if (salaryExpected) {
            // 检查薪资
            if (!salaryFilterService.isSalaryExpected(job, config)) {
                return "薪资不符合预期范围";
            }
        }

        // 检测HR活跃状态
        if (config.getDeadStatus() != null && !config.getDeadStatus().isEmpty()) {
            if (config.getDeadStatus().contains(job.getHrActiveTime())) {
                return "HR活跃状态已被过滤-" + job.getHrActiveTime();
            }
        }

        // 根据不同平台使用不同的城市过滤逻辑
        String cityFilterReason = filterByCity(job, config);
        if (cityFilterReason != null) {
            return cityFilterReason;
        }

        // AI岗位匹配度过滤
        if (config.getEnableAIJobMatchDetection()) {
            String myJd = userProfileRepository.findAll().stream()
                    .findFirst()
                    .map(profile -> profile.getRole())
                    .orElse(null);
            String jobDescription = job.getJobDescription();

            if (ObjectUtils.isEmpty(jobDescription)) {
                // 职位描述为空，记录AI匹配结果但不过滤
                job.setAiMatched(null);
                job.setAiMatchScore("N/A");
                job.setAiMatchReason("职位要求为空，无法进行AI匹配");
                // 立即更新数据库
                updateJobAIResult(job);
                return null;
            }

            if (ObjectUtils.isNotEmpty(myJd)) {
                JobMatchResult matchResult = jobMatchAiService.matchWithReason(myJd, job.getJobDescription());

                // 记录AI匹配结果到职位对象
                job.setAiMatched(matchResult.isMatched());
                job.setAiMatchScore(matchResult.getConfidence() != null ? matchResult.getConfidence() : "high");
                job.setAiMatchReason(matchResult.getReason());

                // 立即更新数据库 ⭐
                updateJobAIResult(job);

                if (!matchResult.isMatched()) {
                    return "AI岗位匹配度低于阈值: " + matchResult.getReason();
                }
            } else {
                // 用户未配置职位角色，记录AI匹配结果但不过滤
                job.setAiMatched(null);
                job.setAiMatchScore("N/A");
                job.setAiMatchReason("用户未配置职位角色信息，无法进行AI匹配");
                // 立即更新数据库
                updateJobAIResult(job);
                return null;
            }
        }

        return null; // 通过所有过滤条件
    }

    /**
     * 检查岗位是否在黑名单中
     */
    private boolean isJobInBlacklist(JobDTO jobDTO) {
        List<String> positionBlacklist = userProfileRepository.findAll().stream()
                .findFirst()
                .map(UserProfile::getPositionBlacklist)
                .orElse(Collections.emptyList());

        if (positionBlacklist.isEmpty()) {
            return false;
        }

        return positionBlacklist.stream()
                .anyMatch(blackJob -> jobDTO.getJobName().contains(blackJob));
    }

    /**
     * 检查公司是否在黑名单中
     */
    private boolean isCompanyInBlacklist(JobDTO jobDTO) {
        List<String> companyBlacklist = userProfileRepository.findAll().stream()
                .findFirst()
                .map(profile -> profile.getCompanyBlacklist())
                .orElse(Collections.emptyList());

        if (companyBlacklist == null || companyBlacklist.isEmpty()) {
            return false;
        }

        return companyBlacklist.stream()
                .anyMatch(blackCompany -> jobDTO.getCompanyName().contains(blackCompany));
    }

    /**
     * 检查招聘者是否在黑名单中
     */
    private boolean isRecruiterInBlacklist(JobDTO jobDTO) {
        return blackRecruiters.stream()
                .anyMatch(blackRecruiter -> jobDTO.getRecruiter() != null
                        && jobDTO.getRecruiter().contains(blackRecruiter));
    }

    /**
     * 根据不同平台使用不同的城市过滤逻辑
     * 通过工厂模式获取对应平台的实现，调用平台特定的城市过滤方法
     *
     * @param job    职位信息
     * @param config 配置信息
     * @return 过滤原因，null表示通过过滤
     */
    private String filterByCity(JobDTO job, ConfigDTO config) {
        List<String> allowedCityCodes = config.getCityCodeCodes();
        if (allowedCityCodes == null || allowedCityCodes.isEmpty()) {
            return null; // 如果未配置城市过滤，则默认通过
        }

        // 获取平台类型
        String platformType = config.getPlatformType();
        if (platformType == null || platformType.isEmpty()) {
            log.warn("平台类型未配置，使用默认城市过滤逻辑");
            return defaultCityFilter(job, allowedCityCodes);
        }

        try {
            // 通过工厂获取对应平台的服务实现
            RecruitmentService recruitmentService = recruitmentServiceFactory.getService(platformType);
            // 调用平台特定的城市过滤方法
            return recruitmentService.filterByCity(job, allowedCityCodes);
        } catch (Exception e) {
            log.error("获取平台服务失败: {}, 使用默认城市过滤逻辑", platformType, e);
            return defaultCityFilter(job, allowedCityCodes);
        }
    }

    /**
     * 默认城市过滤逻辑（作为备用方案）
     */
    private String defaultCityFilter(JobDTO job, List<String> allowedCityCodes) {
        if (job.getCityCode() == null) {
            return null;
        }

        if (!allowedCityCodes.contains(String.valueOf(job.getCityCode()))) {
            return "城市代码不符合要求-" + job.getCityCode();
        }
        return null;
    }

    /**
     * 立即更新职位的AI匹配结果到数据库
     * 
     * @param job 职位DTO（包含AI匹配结果）
     */
    private void updateJobAIResult(JobDTO job) {
        if (job.getEncryptJobId() == null) {
            log.warn("职位ID为空，无法更新AI匹配结果");
            return;
        }

        try {
            JobEntity entity = jobRepository.findByEncryptJobId(job.getEncryptJobId());
            if (entity != null) {
                entity.setAiMatched(job.getAiMatched());
                entity.setAiMatchScore(job.getAiMatchScore());
                entity.setAiMatchReason(job.getAiMatchReason());
                jobRepository.save(entity);
                log.debug("已更新职位 {} 的AI匹配结果到数据库", job.getEncryptJobId());
            } else {
                log.warn("未找到职位实体: {}", job.getEncryptJobId());
            }
        } catch (Exception e) {
            log.error("更新职位AI匹配结果失败: {}", job.getEncryptJobId(), e);
        }
    }

}
