package getjobs.modules.ai.company.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 公司风险标识（AI 评估返回的 risk_flags）
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RiskFlags {

    @JsonProperty("is_outsourcing")
    private Boolean isOutsourcing;

    @JsonProperty("is_training_company")
    private Boolean isTrainingCompany;

    @JsonProperty("is_shell_company")
    private Boolean isShellCompany;

    @JsonProperty("is_recruitment_agency")
    private Boolean isRecruitmentAgency;

    @JsonProperty("is_fake_headhunter_job")
    private Boolean isFakeHeadhunterJob;

    @JsonProperty("is_project_based_company")
    private Boolean isProjectBasedCompany;

    @JsonProperty("is_high_turnover_company")
    private Boolean isHighTurnoverCompany;

    @JsonProperty("is_startup_high_risk")
    private Boolean isStartupHighRisk;

    @JsonProperty("is_financial_risk_company")
    private Boolean isFinancialRiskCompany;

    @JsonProperty("is_grey_industry")
    private Boolean isGreyIndustry;

    @JsonProperty("is_overwork_company")
    private Boolean isOverworkCompany;

    @JsonProperty("is_job_scam")
    private Boolean isJobScam;
}
