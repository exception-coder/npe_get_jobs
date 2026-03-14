package getjobs.modules.ai.company.assembler;

import getjobs.modules.ai.infrastructure.llm.LlmMessage;
import getjobs.modules.ai.infrastructure.template.PromptRenderer;
import getjobs.modules.ai.infrastructure.template.PromptTemplate;
import getjobs.modules.ai.infrastructure.template.TemplateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 公司评估提示词组装器
 * <p>
 * 将公司评估模板与公司信息组装成 LLM 消息列表。
 * </p>
 */
@Component
@RequiredArgsConstructor
public class CompanyEvaluationPromptAssembler {

    private final TemplateRepository templateRepository;
    private final PromptRenderer renderer;

    /**
     * 组装公司评估的提示词消息列表
     *
     * @param templateId  模板 ID（例如 "company-evaluation-v1"）
     * @param companyInfo 公司信息文本
     * @return LLM 消息列表
     */
    public List<LlmMessage> assemble(String templateId, String companyInfo) {
        Map<String, Object> variables = new HashMap<>();
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
