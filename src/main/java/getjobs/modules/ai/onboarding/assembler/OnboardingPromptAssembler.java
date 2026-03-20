package getjobs.modules.ai.onboarding.assembler;

import getjobs.infrastructure.ai.llm.LlmMessage;
import getjobs.infrastructure.ai.template.PromptRenderer;
import getjobs.infrastructure.ai.template.PromptTemplate;
import getjobs.infrastructure.ai.template.TemplateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * 入职引导提示词组装器：将模板与求职描述组装成 LLM 消息列表。
 */
@Component
@RequiredArgsConstructor
public class OnboardingPromptAssembler {

    private final TemplateRepository templateRepository;
    private final PromptRenderer renderer;

    /**
     * 组装求职信息解析的提示词消息列表
     */
    public List<LlmMessage> assemble(String templateId, String description) {
        Map<String, Object> variables = new LinkedHashMap<>();
        variables.put(OnboardingPromptVariables.DESCRIPTION, description != null ? description : "");

        PromptTemplate template = templateRepository.get(templateId);
        List<LlmMessage> messages = new ArrayList<>();

        for (PromptTemplate.Segment segment : template.getSegments()) {
            String content = renderer.render(segment.getContent(), variables);
            switch (segment.getType()) {
                case SYSTEM -> messages.add(LlmMessage.system(content));
                case GUIDELINES -> messages.add(LlmMessage.system(content));
                case USER -> messages.add(LlmMessage.user(content));
                case FEW_SHOTS -> messages.add(LlmMessage.user(content));
            }
        }
        return messages;
    }
}
