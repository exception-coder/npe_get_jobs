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
                dto.setSayHi(userProfile.getSayHi());
                dto.setEnableAIJobMatchDetection(userProfile.getEnableAIJobMatchDetection());
                dto.setEnableAIGreeting(userProfile.getEnableAIGreeting());
                dto.setSendImgResume(userProfile.getSendImgResume());
                dto.setResumeImagePath(userProfile.getResumeImagePath());
                dto.setRecommendJobs(userProfile.getRecommendJobs());
            }

            // 基础字段映射（从 ConfigEntity 获取）
            dto.setFilterDeadHR(entity.getFilterDeadHR());
            dto.setKeyFilter(entity.getKeyFilter());
            dto.setCheckStateOwned(entity.getCheckStateOwned());
            dto.setResumeContent(entity.getResumeContent());
            dto.setWaitTime(entity.getWaitTime());
            dto.setPlatformType(entity.getPlatformType());

            // 列表字段转换为逗号分隔的字符串
            if (entity.getKeywords() != null) {
                dto.setKeywords(String.join(",", entity.getKeywords()));
            }
            if (entity.getCityCode() != null) {
                dto.setCityCode(String.join(",", entity.getCityCode()));
            }
            if (entity.getIndustry() != null) {
                dto.setIndustry(String.join(",", entity.getIndustry()));
            }
            if (entity.getExperience() != null) {
                dto.setExperience(String.join(",", entity.getExperience()));
            }
            if (entity.getDegree() != null) {
                dto.setDegree(String.join(",", entity.getDegree()));
            }
            if (entity.getScale() != null) {
                dto.setScale(String.join(",", entity.getScale()));
            }
            if (entity.getStage() != null) {
                dto.setStage(String.join(",", entity.getStage()));
            }
            if (entity.getDeadStatus() != null) {
                dto.setDeadStatus(entity.getDeadStatus());
            }

            // 期望薪资处理
            if (entity.getExpectedSalary() != null && entity.getExpectedSalary().size() >= 2) {
                dto.setMinSalary(entity.getExpectedSalary().get(0));
                dto.setMaxSalary(entity.getExpectedSalary().get(1));
            }

            // 其他字段
            dto.setCustomCityCode(entity.getCustomCityCode());
            dto.setJobType(entity.getJobType());
            dto.setSalary(entity.getSalary());
            dto.setExpectedPosition(entity.getExpectedPosition());

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
