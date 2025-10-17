package getjobs.modules.ai.job.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import getjobs.modules.ai.job.assembler.JobPromptAssembler;
import getjobs.modules.ai.job.dto.JobMatchResult;
import getjobs.modules.ai.infrastructure.llm.LlmClient;
import getjobs.modules.ai.infrastructure.llm.LlmMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

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
            return objectMapper.readValue(normalized, JobMatchResult.class);
        } catch (Exception e) {
            log.debug("Failed to parse as JSON, trying legacy boolean format. Error: {}", e.getMessage());
        }

        // 兼容旧的布尔值格式（向后兼容）
        Matcher matcher = BOOLEAN_PATTERN.matcher(normalized);
        if (matcher.find()) {
            boolean matched = Boolean.parseBoolean(matcher.group(1).toLowerCase(Locale.ROOT));
            return new JobMatchResult(matched, "使用旧格式返回，无详细原因");
        }

        throw new IllegalStateException("Unable to parse job match result from AI response: " + content);
    }
}
