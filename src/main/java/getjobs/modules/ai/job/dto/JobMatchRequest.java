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
     * 职位描述
     */
    private String jobDescription;
}
