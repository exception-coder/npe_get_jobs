package getjobs.common.dto;

import getjobs.repository.entity.ConfigEntity;
import getjobs.repository.entity.UserProfile;
import getjobs.repository.ConfigRepository;
import getjobs.repository.UserProfileRepository;
import getjobs.utils.SpringContextUtil;
import getjobs.common.enums.RecruitmentPlatformEnum;
import lombok.Data;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;

import java.util.*;
import java.util.stream.Collectors;

@Data
@Slf4j
public class ConfigDTO {

    // 文本与布尔
    private String sayHi;

    // 逗号分隔原始输入（来自表单/配置）
    private String keywords;
    private String cityCode;
    private String industry;
    private String publishTime;

    // 单/多选原始字符串（来自表单/配置）
    private String experience;
    private String jobType;
    private String salary;
    private String degree;
    private String scale;
    private String stage;
    private String companyType; // 新增：公司类型字段，用于51job的companyType参数
    private String expectedPosition;

    // 可选：自定义城市编码映射
    private Map<String, String> customCityCode;

    // 功能开关与AI
    private Boolean enableAIJobMatchDetection;
    private Boolean enableAIGreeting;
    private Boolean filterDeadHR;
    private Boolean sendImgResume;
    private Boolean keyFilter;
    private Boolean recommendJobs;
    private Boolean checkStateOwned;

    // 简历配置
    private String resumeImagePath;
    private String resumeContent;

    // 期望薪资（min/max）
    private Integer minSalary;
    private Integer maxSalary;

    // 系统
    private String waitTime;

    // 平台类型
    private String platformType;

    // 其他列表型配置
    private List<String> deadStatus;

    // HR状态过滤关键词（逗号分隔字符串，从前端表单接收）
    private String bossHrStatusKeywords;

    // ------------ 单例加载 ------------
    private static volatile ConfigDTO instance;

    private ConfigDTO() {
    }

    public static ConfigDTO getInstance() {
        if (instance == null) {
            synchronized (ConfigDTO.class) {
                if (instance == null) {
                    instance = init();
                }
            }
        }
        return instance;
    }

    @SneakyThrows
    private static ConfigDTO init() {
        // 从数据库查询ConfigEntity
        ConfigRepository configRepository = SpringContextUtil.getBean(ConfigRepository.class);
        Optional<ConfigEntity> configOpt = configRepository.getDefaultConfig();

        if (configOpt.isEmpty()) {
            // 如果数据库中没有配置，返回默认配置
            return new ConfigDTO();
        }

        // 转换为BossConfigDTO
        return convertFromEntity(configOpt.get());
    }

    @SneakyThrows
    public static synchronized void reload() {
        instance = init();
    }

    /**
     * 将ConfigEntity转换为ConfigDTO
     * 参考AbstractRecruitmentService的实现，从UserProfile获取已迁移的用户配置字段
     * 支持非Spring管理的Bean调用（通过SpringContextUtil获取Repository）
     */
    private static ConfigDTO convertFromEntity(ConfigEntity entity) {
        ConfigDTO dto = new ConfigDTO();

        try {
            // 从 UserProfile 获取已迁移的用户配置字段
            UserProfileRepository userProfileRepository = SpringContextUtil.getBean(UserProfileRepository.class);
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
                    dto.setDeadStatus(new ArrayList<>());
                    dto.setBossHrStatusKeywords("");
                }
            } else {
                // UserProfile不存在时，设置所有字段的默认值
                log.warn("UserProfile不存在，使用默认值");
                dto.setSayHi("");
                dto.setEnableAIJobMatchDetection(false);
                dto.setEnableAIGreeting(false);
                dto.setSendImgResume(false);
                dto.setRecommendJobs(false);
                dto.setFilterDeadHR(false);
                dto.setResumeImagePath("");
                dto.setDeadStatus(new ArrayList<>());
                dto.setBossHrStatusKeywords("");
            }
        } catch (Exception e) {
            log.error("从UserProfile获取用户配置失败，使用默认值", e);
        }

        // 基础字段映射（从 ConfigEntity 获取平台相关配置）
        // Boolean类型，默认为false
        dto.setKeyFilter(entity.getKeyFilter() != null ? entity.getKeyFilter() : false);
        dto.setCheckStateOwned(entity.getCheckStateOwned() != null ? entity.getCheckStateOwned() : false);

        // String类型，默认为空字符串
        dto.setResumeContent(entity.getResumeContent() != null ? entity.getResumeContent() : "");
        dto.setWaitTime(entity.getWaitTime() != null ? entity.getWaitTime() : "");
        dto.setPlatformType(entity.getPlatformType() != null ? entity.getPlatformType() : "");
        dto.setPublishTime(entity.getPublishTime() != null ? entity.getPublishTime() : "");

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
        // 注意：需要在ConfigEntity中添加companyType字段
        // dto.setCompanyType(
        // entity.getCompanyType() != null && !entity.getCompanyType().isEmpty()
        // ? String.join(",", entity.getCompanyType())
        // : ""
        // );

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
                        : new HashMap<>());
        // String类型，默认为空字符串
        dto.setJobType(entity.getJobType() != null ? entity.getJobType() : "");
        dto.setSalary(entity.getSalary() != null ? entity.getSalary() : "");
        dto.setExpectedPosition(entity.getExpectedPosition() != null ? entity.getExpectedPosition() : "");

        return dto;
    }

    // ------------ 包装/转换访问器（供业务方使用）------------

    public List<String> getKeywordsList() {
        return splitToList(keywords);
    }

    public List<String> getCityCodeCodes() {
        List<String> cities = splitToList(cityCode);
        if (cities == null)
            return Collections.emptyList();
        return cities.stream()
                .map(city -> {
                    if (customCityCode != null && customCityCode.containsKey(city)) {
                        return customCityCode.get(city);
                    }
                    return city;
                })
                .collect(Collectors.toList());
    }

    public List<String> getIndustryCodes() {
        return mapToCodes(splitToList(industry), v -> v);
    }

    public List<String> getExperienceCodes() {
        return mapToCodes(splitToList(experience), v -> v);
    }

    public List<String> getDegreeCodes() {
        return mapToCodes(splitToList(degree), v -> degree);
    }

    public List<String> getScaleCodes() {
        return mapToCodes(splitToList(scale), v -> scale);
    }

    public List<String> getStageCodes() {
        return mapToCodes(splitToList(stage), v -> stage);
    }

    public List<String> getCompanyTypeCodes() {
        return mapToCodes(splitToList(companyType), v -> companyType);
    }

    public List<Integer> getExpectedSalary() {
        List<Integer> list = new ArrayList<>();
        if (minSalary != null)
            list.add(minSalary);
        if (maxSalary != null)
            list.add(maxSalary);
        return list;
    }

    /**
     * 获取平台类型对应的枚举
     * 
     * @return 招聘平台枚举，如果platformType为空或无效则返回null
     */
    public RecruitmentPlatformEnum getPlatformTypeEnum() {
        if (platformType == null || platformType.trim().isEmpty()) {
            return null;
        }
        return RecruitmentPlatformEnum.getByCode(platformType.trim());
    }

    // ------------ 工具方法 ------------
    private List<String> splitToList(String text) {
        if (text == null || text.trim().isEmpty()) {
            return new ArrayList<>();
        }
        // 支持中文/英文逗号、竖线、空格分隔
        String[] arr = text.split("[，,|\\s]+");
        return Arrays.stream(arr)
                .map(String::trim)
                .filter(s -> !s.isEmpty())
                .collect(Collectors.toList());
    }

    private List<String> mapToCodes(List<String> src, java.util.function.Function<String, String> mapper) {
        if (src == null)
            return new ArrayList<>();
        return src.stream().map(mapper).collect(Collectors.toList());
    }
}
