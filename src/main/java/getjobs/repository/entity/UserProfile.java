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
     * 职位角色
     */
    @Column(nullable = false, length = 100)
    private String role;

    /**
     * 工作年限
     */
    @Column(nullable = false)
    private Integer years;

    /**
     * 领域列表（以JSON格式存储）
     */
    @Column(columnDefinition = "TEXT")
    @Convert(converter = JsonListStringConverter.class)
    private List<String> domains;

    /**
     * 核心技术栈列表（以JSON格式存储）
     */
    @Column(name = "core_stack", columnDefinition = "TEXT")
    @Convert(converter = JsonListStringConverter.class)
    private List<String> coreStack;

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
}
