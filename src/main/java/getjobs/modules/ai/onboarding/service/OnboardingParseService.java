package getjobs.modules.ai.onboarding.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import getjobs.infrastructure.ai.llm.LlmClient;
import getjobs.infrastructure.ai.llm.LlmMessage;
import getjobs.modules.ai.onboarding.assembler.OnboardingPromptAssembler;
import getjobs.modules.ai.onboarding.dto.OnboardingParseResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Slf4j
@Service
@RequiredArgsConstructor
public class OnboardingParseService {

    private static final String DEFAULT_TEMPLATE_ID = "onboarding-parse-v1";
    private static final Pattern JSON_BLOCK = Pattern.compile("```(?:json)?\\s*([\\s\\S]*?)```");

    private final OnboardingPromptAssembler assembler;
    private final LlmClient llmClient;
    private final ObjectMapper objectMapper;

    public OnboardingParseResponse parse(String description) {
        return parse(description, DEFAULT_TEMPLATE_ID, null);
    }

    public OnboardingParseResponse parse(String description, String templateId, String modelOverride) {
        List<LlmMessage> messages = assembler.assemble(templateId, description);
        String raw = llmClient.chat(messages).trim();
        log.debug("[Onboarding] AI raw response: {}", raw);
        return parseJson(raw);
    }

    private OnboardingParseResponse parseJson(String raw) {
        // 优先尝试提取 markdown 代码块中的 JSON
        Matcher matcher = JSON_BLOCK.matcher(raw);
        String json = matcher.find() ? matcher.group(1).trim() : raw;

        try {
            return objectMapper.readValue(json, OnboardingParseResponse.class);
        } catch (Exception e) {
            log.error("[Onboarding] Failed to parse AI response as JSON: {}", raw, e);
            throw new IllegalStateException("AI 返回格式异常，无法解析求职信息", e);
        }
    }
}
