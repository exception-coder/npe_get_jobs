package getjobs.modules.ai.company.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import getjobs.modules.ai.company.assembler.CompanyEvaluationPromptAssembler;
import getjobs.modules.ai.company.dto.CompanyEvaluationEvaluateResponse;
import getjobs.modules.ai.company.dto.CompanyEvaluationResult;
import getjobs.modules.ai.company.dto.RecommendationCode;
import getjobs.infrastructure.ai.enums.AiPlatform;
import getjobs.infrastructure.ai.llm.LlmClient;
import getjobs.infrastructure.ai.llm.LlmMessage;
import getjobs.repository.CompanyEvaluationRepository;
import getjobs.repository.entity.CompanyEvaluationEntity;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Optional;
import java.util.regex.Pattern;

/**
 * 公司求职风险评估 AI 服务
 * <p>
 * 按 company-evaluation-v1 提示词：AI 直接返回 company_name、pay_risk、company_type、risk_score、reason，
 * 服务仅做派生字段（total_score、推荐等级、safe_to_apply）并入库。
 * </p>
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class CompanyEvaluationAiService {

    private static final String DEFAULT_TEMPLATE_ID = "company-evaluation-v1";
    private static final Pattern JSON_BLOCK_PATTERN = Pattern.compile("(?s)```(?:json)?\\s*([\\s\\S]*?)```");

    private final CompanyEvaluationPromptAssembler assembler;
    private final LlmClient llmClient;
    private final ObjectMapper objectMapper;
    private final CompanyEvaluationRepository companyEvaluationRepository;

    /**
     * 根据公司信息进行质量评估（使用默认模板）
     */
    public CompanyEvaluationEvaluateResponse evaluate(String companyInfo) {
        return evaluate(companyInfo, DEFAULT_TEMPLATE_ID, null);
    }

    public CompanyEvaluationEvaluateResponse evaluate(String companyInfo, String templateId, String modelOverride) {
        return evaluate(companyInfo, templateId, modelOverride, null);
    }

    /**
     * 根据公司信息进行求职风险评估，支持指定模板、模型与平台。
     * 命中缓存时直接返回缓存结果与记录 ID；否则调 AI、派生字段、入库后返回。
     *
     * @param companyInfo   公司信息文本
     * @param templateId    提示词模板 ID
     * @param modelOverride 本次使用的模型（如 deepseek-reasoner），null 时用默认配置
     * @param platform      AI 平台，null 时使用默认平台（DEEPSEEK）
     * @return 含 recordId 与 result 的响应（新评估会写入库并返回 recordId）
     */
    public CompanyEvaluationEvaluateResponse evaluate(String companyInfo, String templateId, String modelOverride, AiPlatform platform) {
        String normalizedInput = companyInfo != null ? companyInfo.trim() : "";
        if (!StringUtils.hasText(normalizedInput)) {
            throw new IllegalArgumentException("公司信息不能为空");
        }

        Optional<CompanyEvaluationEntity> cached = companyEvaluationRepository
                .findFirstByCompanyInfoAndIsDeletedFalseOrderByCreatedAtDesc(normalizedInput);
        if (cached.isPresent()) {
            CompanyEvaluationResult fromDb = deserializeResult(cached.get().getResultJson());
            log.info("Company evaluation cache hit - companyInfo length={}", normalizedInput.length());
            return new CompanyEvaluationEvaluateResponse(cached.get().getId(), fromDb);
        }

        List<LlmMessage> messages = assembler.assemble(templateId, normalizedInput);
        String rawResponse = llmClient.chat(platform, messages, modelOverride, 0.0).trim();

        CompanyEvaluationResult result = parseEvaluationResult(rawResponse);
        fillDerivedFromRiskScore(result);
        normalizeRecommendationCode(result);

        CompanyEvaluationEntity saved = saveResult(normalizedInput, result);
        Long recordId = saved != null ? saved.getId() : null;
        if (saved != null) {
            log.info("Company evaluation saved - recordId={}, company={}, riskScore={}", recordId, result.getCompanyName(), result.getRiskScore());
        } else {
            log.warn("Company evaluation result not persisted - companyInfo length={}", normalizedInput.length());
        }
        log.info("Company evaluation - template={}, company={}, totalScore={}, riskScore={}, recommendation={}",
                templateId, result.getCompanyName(), result.getTotalScore(), result.getRiskScore(), result.getRecommendationLevel());
        log.debug("Raw AI response: {}", rawResponse);

        return new CompanyEvaluationEvaluateResponse(recordId, result);
    }

    /**
     * 按提示词返回的 risk_score(0-10) 派生 total_score、推荐等级、safe_to_apply
     */
    private void fillDerivedFromRiskScore(CompanyEvaluationResult result) {
        Integer riskScore = result.getRiskScore();
        if (riskScore == null) {
            return;
        }
        int totalScore = Math.max(0, Math.min(100, riskScore * 10));
        result.setTotalScore(totalScore);
        result.setSafeToApply(riskScore >= 5);
        RecommendationCode code = scoreToRecommendation(totalScore);
        result.setRecommendationCode(code.name());
        result.setRecommendationLevel(recommendationLevelLabel(code));
    }

    private static RecommendationCode scoreToRecommendation(int totalScore) {
        if (totalScore >= 85) return RecommendationCode.STRONGLY_RECOMMENDED;
        if (totalScore >= 70) return RecommendationCode.RECOMMENDED;
        if (totalScore >= 55) return RecommendationCode.CAUTIOUS;
        return RecommendationCode.NOT_RECOMMENDED;
    }

    private static String recommendationLevelLabel(RecommendationCode code) {
        return switch (code) {
            case STRONGLY_RECOMMENDED -> "强烈推荐";
            case RECOMMENDED -> "可以投递";
            case CAUTIOUS -> "谨慎投递";
            case NOT_RECOMMENDED -> "不建议";
        };
    }

    private CompanyEvaluationResult deserializeResult(String resultJson) {
        try {
            return objectMapper.readValue(resultJson, CompanyEvaluationResult.class);
        } catch (Exception e) {
            log.error("Failed to deserialize cached company evaluation: {}", e.getMessage());
            throw new IllegalStateException("Cached evaluation data invalid: " + e.getMessage(), e);
        }
    }

    /**
     * 将评估结果写入库
     *
     * @return 保存后的实体（含 id），失败时返回 null
     */
    private CompanyEvaluationEntity saveResult(String companyInfo, CompanyEvaluationResult result) {
        try {
            String json = objectMapper.writeValueAsString(result);
            CompanyEvaluationEntity entity = new CompanyEvaluationEntity();
            entity.setCompanyInfo(companyInfo);
            entity.setResultJson(json);
            return companyEvaluationRepository.save(entity);
        } catch (Exception e) {
            log.error("Failed to save company evaluation: {}", e.getMessage());
            return null;
        }
    }

    /**
     * 从 AI 响应中解析公司评估结果。
     * 支持纯 JSON 或被 ```json ... ``` 包裹的内容。
     */
    private CompanyEvaluationResult parseEvaluationResult(String content) {
        if (!StringUtils.hasText(content)) {
            throw new IllegalStateException("AI response content is null or empty");
        }
        String normalized = extractJson(content.trim());
        try {
            return objectMapper.readValue(normalized, CompanyEvaluationResult.class);
        } catch (Exception e) {
            log.error("Failed to parse company evaluation JSON: {}", e.getMessage());
            throw new IllegalStateException("Unable to parse company evaluation result from AI response: " + content, e);
        }
    }

    /**
     * 若响应被 markdown 代码块包裹，提取其中的 JSON；否则返回原串。
     */
    private String extractJson(String content) {
        var matcher = JSON_BLOCK_PATTERN.matcher(content);
        if (matcher.find()) {
            return matcher.group(1).trim();
        }
        return content;
    }

    /**
     * 校验并规范化 recommendation_code，非法时置为 RECOMMENDED 并记录日志。
     */
    private void normalizeRecommendationCode(CompanyEvaluationResult result) {
        String code = result.getRecommendationCode();
        if (!StringUtils.hasText(code)) {
            result.setRecommendationCode(RecommendationCode.RECOMMENDED.name());
            log.warn("Company evaluation missing recommendation_code, defaulting to RECOMMENDED");
            return;
        }
        try {
            RecommendationCode.valueOf(code.trim().toUpperCase());
            // 已是合法枚举，可选：统一为大写
            result.setRecommendationCode(code.trim().toUpperCase());
        } catch (IllegalArgumentException e) {
            result.setRecommendationCode(RecommendationCode.RECOMMENDED.name());
            log.warn("Company evaluation invalid recommendation_code '{}', defaulting to RECOMMENDED", code);
        }
    }
}
