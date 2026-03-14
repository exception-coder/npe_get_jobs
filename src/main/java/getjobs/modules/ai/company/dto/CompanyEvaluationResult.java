package getjobs.modules.ai.company.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * 公司质量评估结果
 * <p>
 * 对应 AI 返回的 JSON 结构（类型识别、风险标识、8 维度评分、投递建议）。
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompanyEvaluationResult {

    @JsonProperty("company_name")
    private String companyName;

    @JsonProperty("evaluation_time")
    private String evaluationTime;

    @JsonProperty("company_type")
    private String companyType;

    @JsonProperty("safe_to_apply")
    private Boolean safeToApply;

    @JsonProperty("risk_flags")
    private RiskFlags riskFlags;

    @JsonProperty("dimension_scores")
    private DimensionScores dimensionScores;

    @JsonProperty("total_score")
    private Integer totalScore;

    @JsonProperty("recommendation_level")
    private String recommendationLevel;

    @JsonProperty("recommendation_code")
    private String recommendationCode;

    @JsonProperty("main_advantages")
    private List<String> mainAdvantages;

    @JsonProperty("main_risks")
    private List<String> mainRisks;

    @JsonProperty("delivery_advice")
    private String deliveryAdvice;

    @JsonProperty("summary")
    private String summary;

    @JsonProperty("raw_company_info")
    private String rawCompanyInfo;
}
