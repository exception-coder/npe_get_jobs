package getjobs.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import getjobs.common.dto.UserProfileDTO;
import getjobs.modules.ai.common.enums.AiPlatform;
import getjobs.repository.UserProfileRepository;
import getjobs.repository.entity.UserProfile;
import getjobs.modules.ai.job_skill.service.JobSkillAnalysisAsyncService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * 公共配置控制器
 * 用于管理系统级别的公共配置
 */
@Slf4j
@RestController
@RequestMapping("/api/common/config")
@RequiredArgsConstructor
public class CommonConfigController {

    private final UserProfileRepository userProfileRepository;
    private final ObjectMapper objectMapper;
    private final JobSkillAnalysisAsyncService jobSkillAnalysisAsyncService;

    /**
     * 新增或更新公共配置
     * 
     * @param configData 配置数据（键值对形式）
     * @return 保存结果
     */
    @PostMapping("/save")
    @Transactional
    public ResponseEntity<Map<String, Object>> saveCommonConfig(@RequestBody Map<String, Object> configData) {
        Map<String, Object> response = new HashMap<>();

        try {
            // 验证配置数据
            if (configData == null || configData.isEmpty()) {
                response.put("success", false);
                response.put("message", "配置数据不能为空");
                return ResponseEntity.badRequest().body(response);
            }

            // 获取或创建 UserProfile（假设系统中只有一个配置记录）
            UserProfile userProfile = userProfileRepository.findAll().stream()
                    .findFirst()
                    .orElse(new UserProfile());

            // 从 configData 中提取并更新字段

            // 黑名单配置
            if (configData.containsKey("jobBlacklistKeywords")) {
                userProfile.setPositionBlacklist(convertToList(configData.get("jobBlacklistKeywords")));
            }
            if (configData.containsKey("companyBlacklistKeywords")) {
                userProfile.setCompanyBlacklist(convertToList(configData.get("companyBlacklistKeywords")));
            }

            // 新版候选人基本信息（优先使用新字段）
            if (configData.containsKey("jobTitle")) {
                String jobTitle = String.valueOf(configData.get("jobTitle"));
                userProfile.setJobTitle(jobTitle);
                // 同时更新旧字段以兼容
                userProfile.setRole(jobTitle);
            }
            if (configData.containsKey("skills")) {
                List<String> skills = convertToList(configData.get("skills"));
                userProfile.setSkills(skills);
                // 同时更新旧字段以兼容
                userProfile.setCoreStack(skills);
            }
            if (configData.containsKey("yearsOfExperience")) {
                userProfile.setYearsOfExperience(String.valueOf(configData.get("yearsOfExperience")));
            }
            if (configData.containsKey("careerIntent")) {
                userProfile.setCareerIntent(String.valueOf(configData.get("careerIntent")));
            }
            if (configData.containsKey("domainExperience")) {
                userProfile.setDomainExperience(String.valueOf(configData.get("domainExperience")));
            }
            if (configData.containsKey("location")) {
                userProfile.setLocation(String.valueOf(configData.get("location")));
            }
            if (configData.containsKey("tone")) {
                userProfile.setTone(String.valueOf(configData.get("tone")));
            }
            if (configData.containsKey("language")) {
                userProfile.setLanguage(String.valueOf(configData.get("language")));
            }
            if (configData.containsKey("highlights")) {
                userProfile.setHighlights(convertToList(configData.get("highlights")));
            }
            if (configData.containsKey("maxChars")) {
                Object maxCharsValue = configData.get("maxChars");
                if (maxCharsValue instanceof Number) {
                    userProfile.setMaxChars(((Number) maxCharsValue).intValue());
                } else if (maxCharsValue instanceof String) {
                    try {
                        userProfile.setMaxChars(Integer.parseInt((String) maxCharsValue));
                    } catch (NumberFormatException e) {
                        // 忽略无效值
                    }
                }
            }
            if (configData.containsKey("dedupeKeywords")) {
                userProfile.setDedupeKeywords(convertToList(configData.get("dedupeKeywords")));
            }

            // 旧版候选人基本信息（保留兼容，但优先使用新字段）
            if (configData.containsKey("role") && !configData.containsKey("jobTitle")) {
                userProfile.setRole(String.valueOf(configData.get("role")));
            }
            if (configData.containsKey("years")) {
                Object yearsValue = configData.get("years");
                if (yearsValue instanceof Number) {
                    userProfile.setYears(((Number) yearsValue).intValue());
                } else if (yearsValue instanceof String) {
                    try {
                        userProfile.setYears(Integer.parseInt((String) yearsValue));
                    } catch (NumberFormatException e) {
                        // 忽略无效的年限值
                    }
                }
            }
            if (configData.containsKey("domains")) {
                userProfile.setDomains(convertToList(configData.get("domains")));
            }
            if (configData.containsKey("coreStack") && !configData.containsKey("skills")) {
                userProfile.setCoreStack(convertToList(configData.get("coreStack")));
            }
            if (configData.containsKey("achievements")) {
                userProfile.setAchievements(convertToList(configData.get("achievements")));
            }
            if (configData.containsKey("strengths")) {
                userProfile.setStrengths(convertToList(configData.get("strengths")));
            }
            if (configData.containsKey("improvements")) {
                userProfile.setImprovements(convertToList(configData.get("improvements")));
            }
            if (configData.containsKey("availability")) {
                userProfile.setAvailability(String.valueOf(configData.get("availability")));
            }

            // 复杂对象（Map 类型）
            if (configData.containsKey("scale")) {
                userProfile.setScale(convertToMap(configData.get("scale")));
            }
            if (configData.containsKey("links")) {
                userProfile.setLinks(convertToMap(configData.get("links")));
            }

            // AI平台配置（JSON格式）
            if (configData.containsKey("aiPlatformConfigs")) {
                userProfile.setAiPlatformConfigs(convertToMap(configData.get("aiPlatformConfigs")));
            }

            // 简历和打招呼配置
            if (configData.containsKey("sayHi") || configData.containsKey("sayHiContent")) {
                // 兼容旧字段 sayHi 和新字段 sayHiContent
                String sayHi = String.valueOf(configData.getOrDefault("sayHiContent", configData.get("sayHi")));
                userProfile.setSayHi(sayHi);
            }
            if (configData.containsKey("resumeImagePath")) {
                userProfile.setResumeImagePath(String.valueOf(configData.get("resumeImagePath")));
            }

            // AI智能功能配置
            if (configData.containsKey("enableAIGreeting")) {
                userProfile.setEnableAIGreeting(convertToBoolean(configData.get("enableAIGreeting")));
            }
            if (configData.containsKey("enableAIJobMatch") || configData.containsKey("enableAIJobMatchDetection")) {
                // 兼容旧字段 enableAIJobMatchDetection 和新字段 enableAIJobMatch
                Object value = configData.getOrDefault("enableAIJobMatch",
                        configData.get("enableAIJobMatchDetection"));
                userProfile.setEnableAIJobMatchDetection(convertToBoolean(value));
            }

            // 功能开关配置
            if (configData.containsKey("recommendJobs")) {
                userProfile.setRecommendJobs(convertToBoolean(configData.get("recommendJobs")));
            }
            if (configData.containsKey("sendImgResume")) {
                userProfile.setSendImgResume(convertToBoolean(configData.get("sendImgResume")));
            }
            if (configData.containsKey("filterDeadHR")) {
                userProfile.setFilterDeadHR(convertToBoolean(configData.get("filterDeadHR")));
            }
            if (configData.containsKey("hrStatusKeywords")) {
                userProfile.setHrStatusKeywords(convertToList(configData.get("hrStatusKeywords")));
            }

            // 薪资期望配置
            if (configData.containsKey("minSalary")) {
                Object minSalaryValue = configData.get("minSalary");
                if (minSalaryValue instanceof Number) {
                    userProfile.setMinSalary(((Number) minSalaryValue).intValue());
                } else if (minSalaryValue instanceof String) {
                    try {
                        userProfile.setMinSalary(Integer.parseInt((String) minSalaryValue));
                    } catch (NumberFormatException e) {
                        // 忽略无效值
                    }
                }
            }
            if (configData.containsKey("maxSalary")) {
                Object maxSalaryValue = configData.get("maxSalary");
                if (maxSalaryValue instanceof Number) {
                    userProfile.setMaxSalary(((Number) maxSalaryValue).intValue());
                } else if (maxSalaryValue instanceof String) {
                    try {
                        userProfile.setMaxSalary(Integer.parseInt((String) maxSalaryValue));
                    } catch (NumberFormatException e) {
                        // 忽略无效值
                    }
                }
            }

            // 保存到数据库
            UserProfile saved = userProfileRepository.save(userProfile);

            // 异步调用 AI 分析岗位技能（不阻塞主流程）
            jobSkillAnalysisAsyncService.analyzeJobSkillAsync(saved.getId());

            response.put("success", true);
            response.put("message", "公共配置保存成功");
            response.put("timestamp", LocalDateTime.now());
            response.put("profileId", saved.getId());

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            response.put("success", false);
            response.put("message", "保存配置失败: " + e.getMessage());
            return ResponseEntity.internalServerError().body(response);
        }
    }

    /**
     * 获取公共配置（包含所有前端需要的数据）
     * 
     * @return 配置数据 DTO 和 AI 平台列表
     */
    @GetMapping("/get")
    public ResponseEntity<Map<String, Object>> getCommonConfig() {
        Map<String, Object> response = new HashMap<>();

        try {
            // 获取 UserProfile（假设系统中只有一个配置记录）
            UserProfile userProfile = userProfileRepository.findAll().stream()
                    .findFirst()
                    .orElse(null);

            if (userProfile == null) {
                response.put("success", true);
                response.put("message", "暂无配置数据");
                response.put("data", null);
                // 即使没有配置数据，也返回 AI 平台列表
                response.put("aiPlatforms", getAiPlatformsList());
                return ResponseEntity.ok(response);
            }

            // 转换为 DTO
            UserProfileDTO dto = convertToDTO(userProfile);

            response.put("success", true);
            response.put("message", "获取配置成功");
            response.put("data", dto);
            // 添加 AI 平台列表
            response.put("aiPlatforms", getAiPlatformsList());
            response.put("timestamp", LocalDateTime.now());

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            response.put("success", false);
            response.put("message", "获取配置失败: " + e.getMessage());
            return ResponseEntity.internalServerError().body(response);
        }
    }

    /**
     * 获取支持的AI平台列表（保留用于向后兼容）
     * 
     * @return AI平台枚举列表
     * @deprecated 建议使用 /api/common/config/get 接口获取所有配置数据
     */
    @GetMapping("/ai-platforms")
    @Deprecated
    public ResponseEntity<Map<String, Object>> getAiPlatforms() {
        Map<String, Object> response = new HashMap<>();

        try {
            List<Map<String, String>> platforms = getAiPlatformsList();

            response.put("success", true);
            response.put("message", "获取AI平台列表成功");
            response.put("data", platforms);
            response.put("timestamp", LocalDateTime.now());

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            response.put("success", false);
            response.put("message", "获取AI平台列表失败: " + e.getMessage());
            return ResponseEntity.internalServerError().body(response);
        }
    }

    /**
     * 获取AI平台列表（内部方法）
     * 
     * @return AI平台列表
     */
    private List<Map<String, String>> getAiPlatformsList() {
        return Arrays.stream(AiPlatform.values())
                .map(platform -> {
                    Map<String, String> platformInfo = new HashMap<>();
                    platformInfo.put("value", platform.name().toLowerCase());
                    platformInfo.put("label", getPlatformLabel(platform));
                    return platformInfo;
                })
                .collect(Collectors.toList());
    }

    /**
     * 获取AI平台的显示标签
     * 
     * @param platform AI平台枚举
     * @return 显示标签
     */
    private String getPlatformLabel(AiPlatform platform) {
        switch (platform) {
            case OPENAI:
                return "OpenAI (ChatGPT)";
            case DEEPSEEK:
                return "Deepseek";
            default:
                return platform.name();
        }
    }

    /**
     * 转换为字符串列表
     * 支持以下格式：
     * 1. List 类型直接返回
     * 2. String 类型按逗号分隔
     * 3. 其他类型尝试用 ObjectMapper 转换
     */
    @SuppressWarnings("unchecked")
    private List<String> convertToList(Object value) {
        if (value == null)
            return null;

        // 如果已经是 List，直接返回
        if (value instanceof List) {
            return (List<String>) value;
        }

        // 如果是字符串，按逗号分隔
        if (value instanceof String) {
            String strValue = (String) value;
            if (strValue.trim().isEmpty()) {
                return List.of();
            }
            return Arrays.stream(strValue.split(","))
                    .map(String::trim)
                    .filter(s -> !s.isEmpty())
                    .collect(Collectors.toList());
        }

        // 其他类型尝试用 ObjectMapper 转换
        return objectMapper.convertValue(value, List.class);
    }

    /**
     * 转换为 Map<String, String>
     * 支持以下格式：
     * 1. Map 类型直接返回
     * 2. 其他类型尝试用 ObjectMapper 转换
     */
    @SuppressWarnings("unchecked")
    private Map<String, String> convertToMap(Object value) {
        if (value == null)
            return null;

        // 如果已经是 Map，直接返回
        if (value instanceof Map) {
            return (Map<String, String>) value;
        }

        // 其他类型尝试用 ObjectMapper 转换
        return objectMapper.convertValue(value, Map.class);
    }

    /**
     * 将 UserProfile 实体转换为 DTO
     * 
     * @param userProfile 用户求职信息实体
     * @return UserProfileDTO
     */
    private UserProfileDTO convertToDTO(UserProfile userProfile) {
        UserProfileDTO dto = new UserProfileDTO();
        dto.setId(userProfile.getId());

        // 旧版字段（保留兼容）
        dto.setRole(userProfile.getRole());
        dto.setYears(userProfile.getYears());
        dto.setDomains(userProfile.getDomains());
        dto.setCoreStack(userProfile.getCoreStack());
        dto.setScale(userProfile.getScale());
        dto.setAchievements(userProfile.getAchievements());
        dto.setStrengths(userProfile.getStrengths());
        dto.setImprovements(userProfile.getImprovements());
        dto.setAvailability(userProfile.getAvailability());
        dto.setLinks(userProfile.getLinks());

        // 新版候选人信息字段
        dto.setJobTitle(userProfile.getJobTitle());
        dto.setSkills(userProfile.getSkills());
        dto.setYearsOfExperience(userProfile.getYearsOfExperience());
        dto.setCareerIntent(userProfile.getCareerIntent());
        dto.setDomainExperience(userProfile.getDomainExperience());
        dto.setLocation(userProfile.getLocation());
        dto.setTone(userProfile.getTone());
        dto.setLanguage(userProfile.getLanguage());
        dto.setHighlights(userProfile.getHighlights());
        dto.setMaxChars(userProfile.getMaxChars());
        dto.setDedupeKeywords(userProfile.getDedupeKeywords());

        // 黑名单配置
        dto.setJobBlacklistKeywords(userProfile.getPositionBlacklist());
        dto.setCompanyBlacklistKeywords(userProfile.getCompanyBlacklist());

        // AI平台配置
        dto.setAiPlatformConfigs(userProfile.getAiPlatformConfigs());

        // 简历和打招呼配置
        dto.setSayHi(userProfile.getSayHi());
        dto.setResumeImagePath(userProfile.getResumeImagePath());
        dto.setSendImgResume(userProfile.getSendImgResume());

        // AI智能功能配置
        dto.setEnableAIGreeting(userProfile.getEnableAIGreeting());
        dto.setEnableAIJobMatchDetection(userProfile.getEnableAIJobMatchDetection());

        // 功能开关配置
        dto.setRecommendJobs(userProfile.getRecommendJobs());
        dto.setFilterDeadHR(userProfile.getFilterDeadHR());
        dto.setHrStatusKeywords(userProfile.getHrStatusKeywords());

        // AI分析结果
        dto.setAiInferredJobTitle(userProfile.getAiInferredJobTitle());
        dto.setAiJobLevel(userProfile.getAiJobLevel());
        dto.setAiTechStack(userProfile.getAiTechStack());
        dto.setAiHotIndustries(userProfile.getAiHotIndustries());
        dto.setAiRelatedDomains(userProfile.getAiRelatedDomains());
        dto.setAiGreetingMessage(userProfile.getAiGreetingMessage());

        // 薪资期望配置
        dto.setMinSalary(userProfile.getMinSalary());
        dto.setMaxSalary(userProfile.getMaxSalary());

        return dto;
    }

    /**
     * 转换为布尔值
     * 支持以下格式：
     * 1. Boolean 类型直接返回
     * 2. String 类型转换（"true", "1", "yes" 等）
     * 3. Number 类型转换（非0为true）
     */
    private Boolean convertToBoolean(Object value) {
        if (value == null)
            return null;

        // 如果已经是 Boolean，直接返回
        if (value instanceof Boolean) {
            return (Boolean) value;
        }

        // 如果是字符串，进行转换
        if (value instanceof String) {
            String strValue = ((String) value).trim().toLowerCase();
            return "true".equals(strValue) || "1".equals(strValue) || "yes".equals(strValue);
        }

        // 如果是数字，非0为true
        if (value instanceof Number) {
            return ((Number) value).intValue() != 0;
        }

        return false;
    }

}
