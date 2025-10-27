package getjobs.common.dto;

import lombok.Data;

import java.util.List;
import java.util.Map;

/**
 * 用户求职信息 DTO
 * 用于公共配置接口的数据传输
 */
@Data
public class UserProfileDTO {

    /**
     * 配置ID
     */
    private Long id;

    /**
     * 职位角色（保留旧字段兼容）
     */
    private String role;

    /**
     * 工作年限（保留旧字段兼容）
     */
    private Integer years;

    /**
     * 领域列表（保留旧字段兼容）
     */
    private List<String> domains;

    /**
     * 核心技术栈列表（保留旧字段兼容）
     */
    private List<String> coreStack;

    /**
     * 职位名称（新版候选人信息字段）
     */
    private String jobTitle;

    /**
     * 核心技能列表（新版候选人信息字段）
     */
    private List<String> skills;

    /**
     * 工作年限（新版候选人信息字段，如："3-5年"、"高级"等）
     */
    private String yearsOfExperience;

    /**
     * 职业意向（新版候选人信息字段）
     */
    private String careerIntent;

    /**
     * 领域经验（新版候选人信息字段）
     */
    private String domainExperience;

    /**
     * 期望地点（新版候选人信息字段）
     */
    private String location;

    /**
     * 沟通语气（新版候选人信息字段）
     */
    private String tone;

    /**
     * 语言（新版候选人信息字段）
     */
    private String language;

    /**
     * 个人亮点列表（新版候选人信息字段）
     */
    private List<String> highlights;

    /**
     * AI生成招呼语的最大字符数（新版候选人信息字段）
     */
    private Integer maxChars;

    /**
     * 去重关键词列表（新版候选人信息字段）
     */
    private List<String> dedupeKeywords;

    /**
     * 规模指标（包含qps_peak、sla等）
     */
    private Map<String, String> scale;

    /**
     * 成就列表
     */
    private List<String> achievements;

    /**
     * 优势列表
     */
    private List<String> strengths;

    /**
     * 改进项列表
     */
    private List<String> improvements;

    /**
     * 到岗时间
     */
    private String availability;

    /**
     * 链接信息（包含github、portfolio等）
     */
    private Map<String, String> links;

    /**
     * 岗位黑名单关键词
     */
    private List<String> jobBlacklistKeywords;

    /**
     * 公司黑名单关键词
     */
    private List<String> companyBlacklistKeywords;

    /**
     * AI平台配置（key为平台名，value为API密钥）
     */
    private Map<String, String> aiPlatformConfigs;

    /**
     * 打招呼内容
     */
    private String sayHi;

    /**
     * 简历图片路径
     */
    private String resumeImagePath;

    /**
     * 是否发送图片简历
     */
    private Boolean sendImgResume;

    /**
     * 启用AI智能打招呼
     */
    private Boolean enableAIGreeting;

    /**
     * 启用AI职位匹配检测
     */
    private Boolean enableAIJobMatchDetection;

    /**
     * 推荐职位
     */
    private Boolean recommendJobs;

    /**
     * 过滤不活跃HR（全局功能开关）
     */
    private Boolean filterDeadHR;

    /**
     * HR过滤状态关键词列表（全局功能开关）
     */
    private List<String> hrStatusKeywords;

    /**
     * AI分析结果：推断的岗位名称
     */
    private String aiInferredJobTitle;

    /**
     * AI分析结果：岗位级别
     */
    private String aiJobLevel;

    /**
     * AI分析结果：技术栈列表
     */
    private List<String> aiTechStack;

    /**
     * AI分析结果：热门行业领域
     */
    private List<String> aiHotIndustries;

    /**
     * AI分析结果：相关领域
     */
    private List<String> aiRelatedDomains;

    /**
     * AI分析结果：打招呼消息
     */
    private String aiGreetingMessage;
}
