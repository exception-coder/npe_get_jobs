package getjobs.modules.ai.job.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import getjobs.modules.ai.job.assembler.JobPromptAssembler;
import getjobs.modules.ai.job.dto.JobMatchResult;
import getjobs.modules.ai.infrastructure.llm.LlmClient;
import getjobs.modules.ai.infrastructure.llm.LlmMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Locale;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 职位匹配 AI 服务
 * <p>
 * 该服务使用 AI 模型来评估候选人的简历（或个人简介）与职位描述（JD）的匹配度。
 * 使用新的提示词架构，通过 {@link JobPromptAssembler} 组装提示词，
 * 调用 {@link LlmClient} 与 LLM 交互，并解析返回结果得出匹配度。
 * </p>
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class JobMatchAiService {

    private static final Pattern BOOLEAN_PATTERN = Pattern.compile("\\b(true|false)\\b", Pattern.CASE_INSENSITIVE);
    private static final String DEFAULT_TEMPLATE_ID = "job-match-v1";
    private static final String DEFAULT_TITLE_TEMPLATE_ID = "job-match-by-title-v1";
    /**
     * 职位描述的最小有效长度阈值（字符数）
     * 低于此长度将视为无效，使用职位名称进行推断匹配
     */
    private static final int MIN_JD_LENGTH = 50;

    private final JobPromptAssembler assembler;
    private final LlmClient llmClient;
    private final ObjectMapper objectMapper;

    /**
     * 判断候选人的简历是否与职位描述匹配（返回详细结果）。
     *
     * @param myJd           候选人的简历或个人简介文本。
     * @param jobDescription 招聘网站上的职位描述文本。
     * @return 匹配结果，包含是否匹配和判定原因。
     */
    public JobMatchResult matchWithReason(String myJd, String jobDescription) {
        return matchWithReason(myJd, jobDescription, DEFAULT_TEMPLATE_ID);
    }

    /**
     * 判断候选人的简历是否与职位描述匹配（返回详细结果，可指定模板 ID）。
     *
     * @param myJd           候选人的简历或个人简介文本。
     * @param jobDescription 招聘网站上的职位描述文本。
     * @param templateId     提示词模板 ID（例如 "job-match-v1"）。
     * @return 匹配结果，包含是否匹配和判定原因。
     */
    public JobMatchResult matchWithReason(String myJd, String jobDescription, String templateId) {
        List<LlmMessage> messages = assembler.assemble(templateId, myJd, jobDescription);
        String rawResponse = llmClient.chat(messages).trim();

        JobMatchResult result = parseJobMatchResult(rawResponse);
        log.info("Job match evaluation - template={}, matched={}, reason={}",
                templateId, result.isMatched(), result.getReason());
        log.debug("Raw AI response: {}", rawResponse);
        return result;
    }

    /**
     * 基于职位名称进行推断性匹配（返回详细结果）
     * <p>
     * 当职位描述缺失或过短时，使用职位名称进行推断性匹配。
     * 匹配结果会标记为低置信度（confidence="low"）。
     * </p>
     *
     * @param myJd     候选人的简历或个人简介文本
     * @param jobTitle 职位名称
     * @return 匹配结果，包含是否匹配、判定原因和置信度
     */
    public JobMatchResult matchByTitle(String myJd, String jobTitle) {
        return matchByTitle(myJd, jobTitle, DEFAULT_TITLE_TEMPLATE_ID);
    }

    /**
     * 基于职位名称进行推断性匹配（返回详细结果，可指定模板 ID）
     *
     * @param myJd       候选人的简历或个人简介文本
     * @param jobTitle   职位名称
     * @param templateId 提示词模板 ID（例如 "job-match-by-title-v1"）
     * @return 匹配结果，包含是否匹配、判定原因和置信度
     */
    public JobMatchResult matchByTitle(String myJd, String jobTitle, String templateId) {
        List<LlmMessage> messages = assembler.assembleByTitle(templateId, myJd, jobTitle);
        String rawResponse = llmClient.chat(messages).trim();

        JobMatchResult result = parseJobMatchResult(rawResponse);
        log.info("Job match by title evaluation - template={}, matched={}, confidence={}, reason={}",
                templateId, result.isMatched(), result.getConfidence(), result.getReason());
        log.debug("Raw AI response: {}", rawResponse);
        return result;
    }

    /**
     * 智能匹配：根据是否有职位描述自动选择匹配策略
     * <p>
     * 策略：
     * 1. 如果职位描述存在且长度 >= MIN_JD_LENGTH，使用完整描述匹配（高置信度）
     * 2. 如果职位描述缺失或过短，但职位名称存在，使用职位名称推断匹配（低置信度）
     * 3. 如果两者都缺失，抛出异常
     * </p>
     *
     * @param myJd           候选人的简历或个人简介文本
     * @param jobDescription 职位描述（可为空）
     * @param jobTitle       职位名称（可为空）
     * @return 匹配结果，包含是否匹配、判定原因和置信度
     * @throws IllegalArgumentException 如果职位描述和职位名称都为空
     */
    public JobMatchResult smartMatch(String myJd, String jobDescription, String jobTitle) {
        return smartMatch(myJd, jobDescription, jobTitle, DEFAULT_TEMPLATE_ID, DEFAULT_TITLE_TEMPLATE_ID);
    }

    /**
     * 智能匹配：根据是否有职位描述自动选择匹配策略（可指定模板 ID）
     *
     * @param myJd                 候选人的简历或个人简介文本
     * @param jobDescription       职位描述（可为空）
     * @param jobTitle             职位名称（可为空）
     * @param fullMatchTemplateId  完整匹配模板 ID
     * @param titleMatchTemplateId 职位名称匹配模板 ID
     * @return 匹配结果，包含是否匹配、判定原因和置信度
     * @throws IllegalArgumentException 如果职位描述和职位名称都为空
     */
    public JobMatchResult smartMatch(String myJd, String jobDescription, String jobTitle,
            String fullMatchTemplateId, String titleMatchTemplateId) {
        // 判断是否有有效的职位描述
        boolean hasValidJd = StringUtils.hasText(jobDescription)
                && jobDescription.trim().length() >= MIN_JD_LENGTH;

        if (hasValidJd) {
            // 使用完整职位描述匹配
            log.debug("Using full job description match - JD length: {}", jobDescription.length());
            return matchWithReason(myJd, jobDescription, fullMatchTemplateId);
        } else if (StringUtils.hasText(jobTitle)) {
            // 使用职位名称推断匹配
            log.debug("Using job title inference match - JD length: {}, title: {}",
                    jobDescription != null ? jobDescription.length() : 0, jobTitle);
            return matchByTitle(myJd, jobTitle, titleMatchTemplateId);
        } else {
            throw new IllegalArgumentException(
                    "Both jobDescription and jobTitle are empty. At least one must be provided.");
        }
    }

    /**
     * 判断候选人的简历是否与职位描述匹配。
     *
     * @param myJd           候选人的简历或个人简介文本。
     * @param jobDescription 招聘网站上的职位描述文本。
     * @return 如果 AI 模型认为匹配，则返回 {@code true}；否则返回 {@code false}。
     * @deprecated 建议使用 {@link #matchWithReason(String, String)} 以获取判定原因
     */
    @Deprecated
    public boolean isMatch(String myJd, String jobDescription) {
        return matchWithReason(myJd, jobDescription).isMatched();
    }

    /**
     * 判断候选人的简历是否与职位描述匹配（可指定模板 ID）。
     *
     * @param myJd           候选人的简历或个人简介文本。
     * @param jobDescription 招聘网站上的职位描述文本。
     * @param templateId     提示词模板 ID（例如 "job-match-v1"）。
     * @return 如果 AI 模型认为匹配，则返回 {@code true}；否则返回 {@code false}。
     * @deprecated 建议使用 {@link #matchWithReason(String, String, String)} 以获取判定原因
     */
    @Deprecated
    public boolean isMatch(String myJd, String jobDescription, String templateId) {
        return matchWithReason(myJd, jobDescription, templateId).isMatched();
    }

    /**
     * 从 AI 模型的响应内容中解析职位匹配结果。
     * <p>
     * AI 模型被期望返回 JSON 格式的匹配结果，包含 matched 和 reason 字段。
     * 此方法会尝试解析 JSON，如果失败则尝试兼容旧的布尔值格式。
     * </p>
     *
     * @param content AI 模型返回的原始文本内容。
     * @return 解析出的职位匹配结果。
     * @throws IllegalStateException 如果响应内容为 null 或无法解析。
     */
    private JobMatchResult parseJobMatchResult(String content) {
        if (content == null) {
            throw new IllegalStateException("AI response content is null");
        }

        String normalized = content.trim();

        // 尝试解析 JSON 格式（新格式）
        try {
            JobMatchResult result = objectMapper.readValue(normalized, JobMatchResult.class);
            // 如果解析出的结果没有 confidence 字段，默认设置为 "high"
            if (result.getConfidence() == null) {
                result.setConfidence("high");
            }
            return result;
        } catch (Exception e) {
            log.debug("Failed to parse as JSON, trying legacy boolean format. Error: {}", e.getMessage());
        }

        // 兼容旧的布尔值格式（向后兼容）
        Matcher matcher = BOOLEAN_PATTERN.matcher(normalized);
        if (matcher.find()) {
            boolean matched = Boolean.parseBoolean(matcher.group(1).toLowerCase(Locale.ROOT));
            return new JobMatchResult(matched, "使用旧格式返回，无详细原因", "high");
        }

        throw new IllegalStateException("Unable to parse job match result from AI response: " + content);
    }
}
