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

    /**
     * 置信度标识（可选）
     * <p>
     * 用于标识匹配结果的置信度：
     * - "high": 基于完整职位描述的高置信度匹配
     * - "low": 基于职位名称推断的低置信度匹配
     * </p>
     */
    @JsonProperty("confidence")
    private String confidence;

    /**
     * 构造函数（用于向后兼容，不包含 confidence）
     */
    public JobMatchResult(boolean matched, String reason) {
        this.matched = matched;
        this.reason = reason;
        this.confidence = "high"; // 默认高置信度
    }
}
