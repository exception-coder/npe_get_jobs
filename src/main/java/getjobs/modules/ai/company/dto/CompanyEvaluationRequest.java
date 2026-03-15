package getjobs.modules.ai.company.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 公司评估接口请求体（参数为企业名称，可选模型）
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompanyEvaluationRequest {

    /**
     * 企业名称，作为公司信息传入评估（也可传入更长的公司描述文本）
     */
    private String companyName;

    /**
     * 本次调用使用的模型名（如 deepseek-chat、deepseek-reasoner）。未传或为空时使用默认配置模型。
     */
    private String model;

    /**
     * AI 平台（DEEPSEEK / QWEN / OPENAI）。未传或为空时使用默认平台（DEEPSEEK）。
     */
    private String platform;
}
