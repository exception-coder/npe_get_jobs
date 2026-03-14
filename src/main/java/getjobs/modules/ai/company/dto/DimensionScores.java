package getjobs.modules.ai.company.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 公司评估各维度得分（1-10 分）
 * <p>
 * 对应新提示词第八步：公司稳定性、股东背景、行业前景、业务稳定性、
 * 公司口碑、工作制度、薪资福利、职业稳定性。
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class DimensionScores {

    @JsonProperty("company_stability")
    private Integer companyStability;

    @JsonProperty("shareholder_background")
    private Integer shareholderBackground;

    @JsonProperty("industry_outlook")
    private Integer industryOutlook;

    @JsonProperty("business_stability")
    private Integer businessStability;

    @JsonProperty("company_reputation")
    private Integer companyReputation;

    @JsonProperty("work_system")
    private Integer workSystem;

    @JsonProperty("salary_benefits")
    private Integer salaryBenefits;

    @JsonProperty("career_stability")
    private Integer careerStability;
}
