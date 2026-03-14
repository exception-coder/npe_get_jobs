package getjobs.modules.ai.company.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 公司评估接口请求体（参数为企业名称）
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompanyEvaluationRequest {

    /**
     * 企业名称，作为公司信息传入评估（也可传入更长的公司描述文本）
     */
    private String companyName;
}
