package getjobs.service;

import getjobs.common.dto.ConfigDTO;
import getjobs.modules.ai.job.dto.JobMatchResult;
import getjobs.modules.ai.job.service.JobMatchAiService;
import getjobs.modules.boss.dto.JobDTO;
import getjobs.repository.UserProfileRepository;
import getjobs.repository.entity.UserProfile;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

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

    public JobFilterService(JobMatchAiService jobMatchAiService,
            UserProfileRepository userProfileRepository,
            @Lazy RecruitmentServiceFactory recruitmentServiceFactory,
            SalaryFilterService salaryFilterService) {
        this.jobMatchAiService = jobMatchAiService;
        this.userProfileRepository = userProfileRepository;
        this.recruitmentServiceFactory = recruitmentServiceFactory;
        this.salaryFilterService = salaryFilterService;
    }

    public List<JobDTO> filterJobs(List<JobDTO> jobDTOS, ConfigDTO config) {
        return filterJobs(jobDTOS, config, true);
    }

    public List<JobDTO> filterJobs(List<JobDTO> jobDTOS, ConfigDTO config, boolean salaryExpected) {
        log.info("开始Boss直聘岗位过滤，原始岗位数量: {}", jobDTOS.size());
        List<JobDTO> filteredJobDTOS = jobDTOS.stream()
                .map(job -> {
                    String filterReason = getFilterReason(job, config, salaryExpected);
                    job.setFilterReason(filterReason);
                    return job;
                })
                .collect(Collectors.toList());

        log.info("Boss直聘岗位过滤完成，过滤后岗位数量: {}", filteredJobDTOS.size());
        return filteredJobDTOS;
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
                // return "AI岗位匹配失败，职位要求为空";
                return null;
            }
            if (ObjectUtils.isNotEmpty(myJd)) {
                JobMatchResult matchResult = jobMatchAiService.matchWithReason(myJd, job.getJobDescription());
                if (!matchResult.isMatched()) {
                    return "AI岗位匹配度低于阈值: " + matchResult.getReason();
                }
            } else {
                // return "AI岗位匹配失败，请补充用户职位角色信息";
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

}
