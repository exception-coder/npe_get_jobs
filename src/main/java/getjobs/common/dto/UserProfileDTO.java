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
     * 职位角色
     */
    private String role;

    /**
     * 工作年限
     */
    private Integer years;

    /**
     * 领域列表
     */
    private List<String> domains;

    /**
     * 核心技术栈列表
     */
    private List<String> coreStack;

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
}
