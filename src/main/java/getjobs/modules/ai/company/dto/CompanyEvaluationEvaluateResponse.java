package getjobs.modules.ai.company.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 企业评估接口响应：包含入库记录 ID 与评估结果
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompanyEvaluationEvaluateResponse {

    /** 入库记录主键（命中缓存或本次新写入），未入库时为 null */
    @JsonProperty("record_id")
    private Long recordId;

    @JsonProperty("result")
    private CompanyEvaluationResult result;
}
