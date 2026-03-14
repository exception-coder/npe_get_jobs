package getjobs.modules.ai.company.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * 分页列表中的单条评估记录（含解析后的结果）
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompanyEvaluationListItem {

    private Long id;
    @JsonProperty("company_info")
    private String companyInfo;
    @JsonProperty("result")
    private CompanyEvaluationResult result;
    @JsonProperty("created_at")
    private LocalDateTime createdAt;
}
