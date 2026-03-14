package getjobs.modules.ai.company.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import getjobs.modules.ai.company.assembler.CompanyEvaluationPromptAssembler;
import getjobs.modules.ai.company.dto.CompanyEvaluationResult;
import getjobs.modules.ai.company.dto.RecommendationCode;
import getjobs.modules.ai.infrastructure.llm.LlmClient;
import getjobs.modules.ai.infrastructure.llm.LlmMessage;
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
 * 公司质量评估 AI 服务
 * <p>
 * 使用 AI 从多维度评估公司是否值得投递，返回评分、优劣势与投递建议。
 * 设计参考 {@link getjobs.modules.ai.job.service.JobMatchAiService}。
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
     *
     * @param companyInfo 公司信息文本（名称、规模、融资、行业、技术栈、口碑等）
     * @return 评估结果，包含各维度得分与投递建议
     */
    public CompanyEvaluationResult evaluate(String companyInfo) {
        return evaluate(companyInfo, DEFAULT_TEMPLATE_ID);
    }

    /**
     * 根据公司信息进行质量评估（可指定模板 ID）。
     * 先按公司信息文本查库，有记录则直接返回；否则调用 AI 并落库后返回。
     *
     * @param companyInfo 公司信息文本
     * @param templateId  提示词模板 ID（例如 "company-evaluation-v1"）
     * @return 评估结果
     */
    public CompanyEvaluationResult evaluate(String companyInfo, String templateId) {
        String normalizedInput = companyInfo != null ? companyInfo.trim() : "";
        if (!StringUtils.hasText(normalizedInput)) {
            throw new IllegalArgumentException("公司信息不能为空");
        }

        Optional<CompanyEvaluationEntity> cached = companyEvaluationRepository
                .findFirstByCompanyInfoAndIsDeletedFalseOrderByCreatedAtDesc(normalizedInput);
        if (cached.isPresent()) {
            CompanyEvaluationResult fromDb = deserializeResult(cached.get().getResultJson());
            log.info("Company evaluation cache hit - companyInfo length={}", normalizedInput.length());
            return fromDb;
        }

        List<LlmMessage> messages = assembler.assemble(templateId, normalizedInput);
        String rawResponse = llmClient.chat(messages).trim();

        CompanyEvaluationResult result = parseEvaluationResult(rawResponse);
        normalizeRecommendationCode(result);
        saveResult(normalizedInput, result);
        log.info("Company evaluation - template={}, company={}, totalScore={}, recommendation={}",
                templateId, result.getCompanyName(), result.getTotalScore(), result.getRecommendationLevel());
        log.debug("Raw AI response: {}", rawResponse);
        return result;
    }

    private CompanyEvaluationResult deserializeResult(String resultJson) {
        try {
            return objectMapper.readValue(resultJson, CompanyEvaluationResult.class);
        } catch (Exception e) {
            log.error("Failed to deserialize cached company evaluation: {}", e.getMessage());
            throw new IllegalStateException("Cached evaluation data invalid: " + e.getMessage(), e);
        }
    }

    private void saveResult(String companyInfo, CompanyEvaluationResult result) {
        try {
            String json = objectMapper.writeValueAsString(result);
            CompanyEvaluationEntity entity = new CompanyEvaluationEntity();
            entity.setCompanyInfo(companyInfo);
            entity.setResultJson(json);
            companyEvaluationRepository.save(entity);
            log.debug("Company evaluation saved for companyInfo length={}", companyInfo.length());
        } catch (Exception e) {
            log.error("Failed to save company evaluation: {}", e.getMessage());
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
