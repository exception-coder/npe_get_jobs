package getjobs.modules.ai.job.dto;

import lombok.Data;

/**
 * 职位匹配请求 DTO
 * <p>
 * 用于提交职位匹配分析请求的数据传输对象。
 * </p>
 */
@Data
public class JobMatchRequest {
    /**
     * 候选人期望从事的工作内容
     */
    private String myJd;

    /**
     * 职位描述（可选）
     */
    private String jobDescription;

    /**
     * 职位名称（当职位描述缺失时使用）
     */
    private String jobTitle;

    /**
     * 提示词模板 ID（可选，会根据是否有职位描述自动选择）
     */
    private String templateId;
}
