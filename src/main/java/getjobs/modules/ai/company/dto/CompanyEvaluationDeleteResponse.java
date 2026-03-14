package getjobs.modules.ai.company.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 评估记录删除结果
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompanyEvaluationDeleteResponse {

    @JsonProperty("deleted")
    private int deleted;
}
