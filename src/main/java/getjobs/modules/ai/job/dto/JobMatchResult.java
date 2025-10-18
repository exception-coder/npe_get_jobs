package getjobs.modules.ai.job.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 职位匹配结果
 * <p>
 * 表示 AI 模型对候选人简历与职位描述的匹配评估结果。
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobMatchResult {

    /**
     * 是否匹配
     */
    @JsonProperty("matched")
    private boolean matched;

    /**
     * 判定原因说明
     * <p>
     * 无论匹配与否，都会说明判定依据：
     * - 若匹配：说明哪些核心职责对口
     * - 若不匹配：说明主要差异点
     * </p>
     */
    @JsonProperty("reason")
    private String reason;
}
