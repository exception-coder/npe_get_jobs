package getjobs.modules.ai.job_skill.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import getjobs.modules.ai.infrastructure.llm.LlmClient;
import getjobs.modules.ai.job_skill.assembler.JobSkillPromptAssembler;
import getjobs.modules.ai.job_skill.dto.JobSkillRequest;
import getjobs.modules.ai.job_skill.dto.JobSkillResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

/**
 * 岗位技能分析服务
 * <p>
 * 根据岗位名称和工作年限分析市场主流技术栈、热门行业领域、常见相关领域，
 * 并根据结果生成岗位匹配打招呼语句。
 * </p>
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class JobSkillService {

    private static final String DEFAULT_TEMPLATE_ID = "job-skill-prompt-v1";

    private final JobSkillPromptAssembler assembler;
    private final LlmClient llmClient;
    private final ObjectMapper objectMapper;

    /**
     * 分析岗位技能并生成打招呼消息
     *
     * @param request 岗位技能分析请求
     * @return 岗位技能分析响应
     */
    public JobSkillResponse analyze(JobSkillRequest request) {
        return analyze(request, DEFAULT_TEMPLATE_ID);
    }

    /**
     * 分析岗位技能并生成打招呼消息（可指定模板 ID）
     *
     * @param request    岗位技能分析请求
     * @param templateId 提示词模板 ID
     * @return 岗位技能分析响应
     */
    public JobSkillResponse analyze(JobSkillRequest request, String templateId) {
        var messages = assembler.assemble(templateId, request);
        String rawResponse = llmClient.chat(messages).trim();

        log.debug("Raw AI response: {}", rawResponse);

        JobSkillResponse result = parseJobSkillResponse(rawResponse);
        log.info("Job skill analysis completed - template={}, jobTitle={}, inferredTitle={}",
                templateId, request.getJobTitle(), result.getInferredJobTitle());
        return result;
    }

    /**
     * 从 AI 模型的响应内容中解析岗位技能分析结果
     *
     * @param content AI 模型返回的原始文本内容
     * @return 解析出的岗位技能分析结果
     * @throws IllegalStateException 如果响应内容为 null 或无法解析
     */
    private JobSkillResponse parseJobSkillResponse(String content) {
        if (content == null) {
            throw new IllegalStateException("AI response content is null");
        }

        String normalized = content.trim();

        // 尝试解析 JSON 格式
        try {
            return objectMapper.readValue(normalized, JobSkillResponse.class);
        } catch (Exception e) {
            log.error("Failed to parse AI response as JSON: {}", e.getMessage());
            throw new IllegalStateException("Unable to parse job skill response from AI: " + content, e);
        }
    }
}
