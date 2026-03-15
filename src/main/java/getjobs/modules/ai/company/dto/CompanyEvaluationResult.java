package getjobs.modules.ai.company.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * 公司求职风险评估结果
 * <p>
 * 支持两种 AI 输出格式：
 * 1. 简化版：company_name, pay_risk, company_type, risk_score(0-10), reason
 * 2. 旧版缓存：dimension_scores、risk_flags、total_score 等
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompanyEvaluationResult {

    @JsonProperty("company_name")
    private String companyName;

    /** 欠薪风险结论：存在欠薪风险 / 暂无证据表明欠薪风险 */
    @JsonProperty("pay_risk")
    private String payRisk;

    /** 外包属性：甲方自营 / 疑似外包 / 疑似皮包 */
    @JsonProperty("company_type")
    private String companyType;

    /** 综合风险评分 0-10，越高越靠谱（简化版 AI 直接返回） */
    @JsonProperty("risk_score")
    private Integer riskScore;

    /** 判断依据简述 */
    @JsonProperty("reason")
    private String reason;

    @JsonProperty("evaluation_time")
    private String evaluationTime;

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
