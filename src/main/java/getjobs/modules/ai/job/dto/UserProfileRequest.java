package getjobs.modules.ai.job.dto;

import lombok.Data;

import java.util.List;
import java.util.Map;

/**
 * 用户求职信息请求DTO
 * 
 * @author getjobs
 */
@Data
public class UserProfileRequest {

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
     * 岗位黑名单
     */
    private List<String> positionBlacklist;

    /**
     * 公司黑名单
     */
    private List<String> companyBlacklist;
}

