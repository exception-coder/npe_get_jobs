package getjobs.modules.ai.company.assembler;

import getjobs.infrastructure.ai.llm.LlmMessage;
import getjobs.modules.ai.infrastructure.template.PromptRenderer;
import getjobs.modules.ai.infrastructure.template.PromptTemplate;
import getjobs.modules.ai.infrastructure.template.TemplateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * 公司评估提示词组装器：将模板与公司信息组装成 LLM 消息列表。
 */
@Component
@RequiredArgsConstructor
public class CompanyEvaluationPromptAssembler {

    private final TemplateRepository templateRepository;
    private final PromptRenderer renderer;

    /**
     * 组装公司评估的提示词消息列表
     */
    public List<LlmMessage> assemble(String templateId, String companyInfo) {
        Map<String, Object> variables = new LinkedHashMap<>();
        variables.put(CompanyPromptVariables.COMPANY_INFO, companyInfo != null ? companyInfo : "");

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
