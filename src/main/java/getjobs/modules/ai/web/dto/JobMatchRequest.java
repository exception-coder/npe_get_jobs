package getjobs.modules.ai.web.dto;

import lombok.Data;

/**
 * 职位匹配请求
 * <p>
 * 用于请求 AI 评估候选人简历与职位描述的匹配度。
 * </p>
 */
@Data
public class JobMatchRequest {

    /**
     * 候选人的简历或个人简介文本
     */
    private String myJd;

    /**
     * 招聘网站上的职位描述文本（可选）
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
