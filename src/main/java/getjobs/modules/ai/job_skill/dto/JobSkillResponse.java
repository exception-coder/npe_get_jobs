package getjobs.modules.ai.job_skill.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * 岗位技能分析响应
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobSkillResponse {
    /**
     * 推断的岗位名称
     */
    @JsonProperty("inferred_job_title")
    private String inferredJobTitle;

    /**
     * 岗位级别
     */
    @JsonProperty("job_level")
    private String jobLevel;

    /**
     * 工作年限范围
     */
    @JsonProperty("experience_range")
    private String experienceRange;

    /**
     * 技术栈列表
     */
    @JsonProperty("tech_stack")
    private List<String> techStack;

    /**
     * 热门行业领域
     */
    @JsonProperty("hot_industries")
    private List<String> hotIndustries;

    /**
     * 相关领域
     */
    @JsonProperty("related_domains")
    private List<String> relatedDomains;

    /**
     * 打招呼消息
     */
    @JsonProperty("greeting_message")
    private String greetingMessage;
}
