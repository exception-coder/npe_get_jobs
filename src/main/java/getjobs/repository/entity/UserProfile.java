package getjobs.repository.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Map;

/**
 * 用户求职信息实体
 * 
 * @author getjobs
 */
@Getter
@Setter
@Entity
@Table(name = "user_profile")
public class UserProfile extends BaseEntity {

    /**
     * 职位角色（保留旧字段兼容）
     */
    @Column(length = 100)
    private String role;

    /**
     * 工作年限（保留旧字段兼容）
     */
    @Column
    private Integer years;

    /**
     * 领域列表（以JSON格式存储）（保留旧字段兼容）
     */
    @Column(columnDefinition = "TEXT")
    @Convert(converter = JsonListStringConverter.class)
    private List<String> domains;

    /**
     * 核心技术栈列表（以JSON格式存储）（保留旧字段兼容）
     */
    @Column(name = "core_stack", columnDefinition = "TEXT")
    @Convert(converter = JsonListStringConverter.class)
    private List<String> coreStack;

    /**
     * 职位名称（新版候选人信息字段）
     */
    @Column(name = "job_title", length = 100)
    private String jobTitle;

    /**
     * 核心技能列表（新版候选人信息字段，以JSON格式存储）
     */
    @Column(columnDefinition = "TEXT")
    @Convert(converter = JsonListStringConverter.class)
    private List<String> skills;

    /**
     * 工作年限（新版候选人信息字段，如："3-5年"、"高级"等）
     */
    @Column(name = "years_of_experience", length = 50)
    private String yearsOfExperience;

    /**
     * 职业意向（新版候选人信息字段）
     */
    @Column(name = "career_intent", columnDefinition = "TEXT")
    private String careerIntent;

    /**
     * 领域经验（新版候选人信息字段，如："跨境电商"、"金融科技"等）
     */
    @Column(name = "domain_experience", length = 100)
    private String domainExperience;

    /**
     * 期望地点（新版候选人信息字段）
     */
    @Column(length = 200)
    private String location;

    /**
     * 沟通语气（新版候选人信息字段，如："礼貌亲切"、"专业克制"等）
     */
    @Column(length = 50)
    private String tone;

    /**
     * 语言（新版候选人信息字段，如："zh_CN"、"en_US"）
     */
    @Column(length = 20)
    private String language;

    /**
     * 个人亮点列表（新版候选人信息字段，以JSON格式存储）
     */
    @Column(columnDefinition = "TEXT")
    @Convert(converter = JsonListStringConverter.class)
    private List<String> highlights;

    /**
     * AI生成招呼语的最大字符数（新版候选人信息字段）
     */
    @Column(name = "max_chars")
    private Integer maxChars;

    /**
     * 去重关键词列表（新版候选人信息字段，以JSON格式存储）
     */
    @Column(name = "dedupe_keywords", columnDefinition = "TEXT")
    @Convert(converter = JsonListStringConverter.class)
    private List<String> dedupeKeywords;

    /**
     * 规模指标（以JSON格式存储，包含qps_peak、sla等）
     */
    @Column(columnDefinition = "TEXT")
    @Convert(converter = JsonMapStringConverter.class)
    private Map<String, String> scale;

    /**
     * 成就列表（以JSON格式存储）
     */
    @Column(columnDefinition = "TEXT")
    @Convert(converter = JsonListStringConverter.class)
    private List<String> achievements;

    /**
     * 优势列表（以JSON格式存储）
     */
    @Column(columnDefinition = "TEXT")
    @Convert(converter = JsonListStringConverter.class)
    private List<String> strengths;

    /**
     * 改进项列表（以JSON格式存储）
     */
    @Column(columnDefinition = "TEXT")
    @Convert(converter = JsonListStringConverter.class)
    private List<String> improvements;

    /**
     * 到岗时间
     */
    @Column(length = 50)
    private String availability;

    /**
     * 链接信息（以JSON格式存储，包含github、portfolio等）
     */
    @Column(columnDefinition = "TEXT")
    @Convert(converter = JsonMapStringConverter.class)
    private Map<String, String> links;

    /**
     * 岗位黑名单（以JSON格式存储）
     */
    @Column(name = "position_blacklist", columnDefinition = "TEXT")
    @Convert(converter = JsonListStringConverter.class)
    private List<String> positionBlacklist;

    /**
     * 公司黑名单（以JSON格式存储）
     */
    @Column(name = "company_blacklist", columnDefinition = "TEXT")
    @Convert(converter = JsonListStringConverter.class)
    private List<String> companyBlacklist;

    /**
     * AI平台配置（以JSON格式存储，key为平台名，value为API密钥）
     */
    @Column(name = "ai_platform_configs", columnDefinition = "TEXT")
    @Convert(converter = JsonMapStringConverter.class)
    private Map<String, String> aiPlatformConfigs;

    /**
     * 打招呼内容
     */
    @Column(name = "say_hi", columnDefinition = "TEXT")
    private String sayHi;

    /**
     * 简历图片路径
     */
    @Column(name = "resume_image_path")
    private String resumeImagePath;

    /**
     * 是否发送图片简历
     */
    @Column(name = "send_img_resume")
    private Boolean sendImgResume;

    /**
     * 启用AI智能打招呼
     */
    @Column(name = "enable_ai_greeting")
    private Boolean enableAIGreeting;

    /**
     * 启用AI职位匹配检测
     */
    @Column(name = "enable_ai_job_match_detection")
    private Boolean enableAIJobMatchDetection;

    /**
     * 推荐职位
     */
    @Column(name = "recommend_jobs")
    private Boolean recommendJobs;

    /**
     * 过滤不活跃HR（全局功能开关）
     */
    @Column(name = "filter_dead_hr")
    private Boolean filterDeadHR;

    /**
     * HR过滤状态关键词列表（全局功能开关，以JSON格式存储）
     */
    @Column(name = "hr_status_keywords", columnDefinition = "TEXT")
    @Convert(converter = JsonListStringConverter.class)
    private List<String> hrStatusKeywords;
}
