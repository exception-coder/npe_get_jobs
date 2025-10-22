package getjobs.service;

import getjobs.common.dto.ConfigDTO;
import getjobs.repository.UserProfileRepository;
import getjobs.repository.entity.ConfigEntity;
import getjobs.repository.entity.UserProfile;
import lombok.extern.slf4j.Slf4j;

/**
 * 招聘服务抽象基类
 * 提供通用的配置转换逻辑
 * 
 * @author getjobs
 */
@Slf4j
public abstract class AbstractRecruitmentService implements RecruitmentService {

    protected final ConfigService configService;
    protected final UserProfileRepository userProfileRepository;

    protected AbstractRecruitmentService(ConfigService configService,
            UserProfileRepository userProfileRepository) {
        this.configService = configService;
        this.userProfileRepository = userProfileRepository;
    }

    /**
     * 将ConfigEntity转换为ConfigDTO
     * 使用反射创建ConfigDTO实例，因为构造函数是私有的
     * 
     * @param entity ConfigEntity实体
     * @return ConfigDTO对象
     */
    protected ConfigDTO convertConfigEntityToDTO(ConfigEntity entity) {
        try {
            // 通过反射创建ConfigDTO实例
            java.lang.reflect.Constructor<ConfigDTO> constructor = ConfigDTO.class.getDeclaredConstructor();
            constructor.setAccessible(true);
            ConfigDTO dto = constructor.newInstance();

            // 从 UserProfile 获取已迁移的字段
            UserProfile userProfile = userProfileRepository.findAll().stream()
                    .findFirst()
                    .orElse(null);

            if (userProfile != null) {
                // 已迁移到 UserProfile 的字段
                dto.setSayHi(userProfile.getSayHi() != null ? userProfile.getSayHi() : "");

                // Boolean类型，默认为false
                dto.setEnableAIJobMatchDetection(
                        userProfile.getEnableAIJobMatchDetection() != null
                                ? userProfile.getEnableAIJobMatchDetection()
                                : false);
                dto.setEnableAIGreeting(
                        userProfile.getEnableAIGreeting() != null
                                ? userProfile.getEnableAIGreeting()
                                : false);
                dto.setSendImgResume(
                        userProfile.getSendImgResume() != null
                                ? userProfile.getSendImgResume()
                                : false);
                dto.setRecommendJobs(
                        userProfile.getRecommendJobs() != null
                                ? userProfile.getRecommendJobs()
                                : false);
                dto.setFilterDeadHR(
                        userProfile.getFilterDeadHR() != null
                                ? userProfile.getFilterDeadHR()
                                : false);

                // String类型，默认为空字符串
                dto.setResumeImagePath(
                        userProfile.getResumeImagePath() != null
                                ? userProfile.getResumeImagePath()
                                : "");

                // HR状态过滤关键词 - List类型，默认为空列表
                if (userProfile.getHrStatusKeywords() != null && !userProfile.getHrStatusKeywords().isEmpty()) {
                    dto.setDeadStatus(userProfile.getHrStatusKeywords());
                    dto.setBossHrStatusKeywords(String.join(",", userProfile.getHrStatusKeywords()));
                } else {
                    dto.setDeadStatus(new java.util.ArrayList<>());
                    dto.setBossHrStatusKeywords("");
                }
            } else {
                // UserProfile不存在时，设置所有字段的默认值
                dto.setSayHi("");
                dto.setEnableAIJobMatchDetection(false);
                dto.setEnableAIGreeting(false);
                dto.setSendImgResume(false);
                dto.setRecommendJobs(false);
                dto.setFilterDeadHR(false);
                dto.setResumeImagePath("");
                dto.setDeadStatus(new java.util.ArrayList<>());
                dto.setBossHrStatusKeywords("");
            }

            // 基础字段映射（从 ConfigEntity 获取）
            // Boolean类型，默认为false
            dto.setKeyFilter(entity.getKeyFilter() != null ? entity.getKeyFilter() : false);
            dto.setCheckStateOwned(entity.getCheckStateOwned() != null ? entity.getCheckStateOwned() : false);

            // String类型，默认为空字符串
            dto.setResumeContent(entity.getResumeContent() != null ? entity.getResumeContent() : "");
            dto.setWaitTime(entity.getWaitTime() != null ? entity.getWaitTime() : "");
            dto.setPlatformType(entity.getPlatformType() != null ? entity.getPlatformType() : "");

            // 列表字段转换为逗号分隔的字符串，默认为空字符串
            dto.setKeywords(
                    entity.getKeywords() != null && !entity.getKeywords().isEmpty()
                            ? String.join(",", entity.getKeywords())
                            : "");
            dto.setCityCode(
                    entity.getCityCode() != null && !entity.getCityCode().isEmpty()
                            ? String.join(",", entity.getCityCode())
                            : "");
            dto.setIndustry(
                    entity.getIndustry() != null && !entity.getIndustry().isEmpty()
                            ? String.join(",", entity.getIndustry())
                            : "");
            dto.setExperience(
                    entity.getExperience() != null && !entity.getExperience().isEmpty()
                            ? String.join(",", entity.getExperience())
                            : "");
            dto.setDegree(
                    entity.getDegree() != null && !entity.getDegree().isEmpty()
                            ? String.join(",", entity.getDegree())
                            : "");
            dto.setScale(
                    entity.getScale() != null && !entity.getScale().isEmpty()
                            ? String.join(",", entity.getScale())
                            : "");
            dto.setStage(
                    entity.getStage() != null && !entity.getStage().isEmpty()
                            ? String.join(",", entity.getStage())
                            : "");

            // 期望薪资处理 - Integer类型可以保持null（业务上可能需要区分"未设置"和"0"）
            if (entity.getExpectedSalary() != null && entity.getExpectedSalary().size() >= 2) {
                dto.setMinSalary(entity.getExpectedSalary().get(0));
                dto.setMaxSalary(entity.getExpectedSalary().get(1));
            }

            // 其他字段
            // Map类型，默认为空Map
            dto.setCustomCityCode(
                    entity.getCustomCityCode() != null
                            ? entity.getCustomCityCode()
                            : new java.util.HashMap<>());
            // String类型，默认为空字符串
            dto.setJobType(entity.getJobType() != null ? entity.getJobType() : "");
            dto.setSalary(entity.getSalary() != null ? entity.getSalary() : "");
            dto.setExpectedPosition(entity.getExpectedPosition() != null ? entity.getExpectedPosition() : "");

            // 平台特定字段（子类可以重写此方法添加额外字段）
            populatePlatformSpecificFields(dto, entity);

            return dto;
        } catch (Exception e) {
            log.error("ConfigEntity转换为ConfigDTO失败", e);
            // 如果转换失败，返回ConfigDTO的单例实例作为备用
            return ConfigDTO.getInstance();
        }
    }

    /**
     * 填充平台特定字段
     * 子类可以重写此方法来添加平台特定的字段映射
     * 
     * @param dto    ConfigDTO对象
     * @param entity ConfigEntity实体
     */
    protected void populatePlatformSpecificFields(ConfigDTO dto, ConfigEntity entity) {
        // 默认实现为空，子类可以根据需要重写
    }
}
