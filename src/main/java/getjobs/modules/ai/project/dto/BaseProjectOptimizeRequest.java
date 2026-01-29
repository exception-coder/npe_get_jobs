package getjobs.modules.ai.project.dto;

import lombok.Data;

import java.util.List;

/**
 * 项目优化通用请求参数
 */
@Data
public class BaseProjectOptimizeRequest {
    /**
     * 简历摘要
     */
    private String resumeSummary;
    /**
     * 工作年限描述（可使用自然语言，如“3年”或“5-8年”）
     */
    private String experienceYears;
    /**
     * 目标职位
     */
    private String targetPosition;
    /**
     * 核心技能列表
     */
    private List<String> skills;
}
