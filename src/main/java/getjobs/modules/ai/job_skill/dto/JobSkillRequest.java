package getjobs.modules.ai.job_skill.dto;

import lombok.Data;

import java.util.List;

/**
 * 岗位技能分析请求
 */
@Data
public class JobSkillRequest {
    /**
     * 岗位名称（必填）
     */
    private String jobTitle;

    /**
     * 工作年限（必填，可自然语言表达）
     */
    private String experienceYears;

    /**
     * 个人优势列表（可为空）
     */
    private List<String> personalStrengths;
}
