package getjobs.modules.ai.company.assembler;

import getjobs.infrastructure.ai.llm.LlmMessage;
import getjobs.infrastructure.ai.template.PromptRenderer;
import getjobs.infrastructure.ai.template.PromptTemplate;
import getjobs.infrastructure.ai.template.TemplateRepository;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

/**
 * 公司评估提示词组装器：将模板与公司信息组装成 LLM 消息列表。
 */
@Component
@RequiredArgsConstructor
public class CompanyEvaluationPromptAssembler {

    private final TemplateRepository templateRepository;
    private final PromptRenderer renderer;

    /** 用户自定义扣分规则（存内存，通过 API 读写） */
    @Getter
    private List<String> extraDeductions = new ArrayList<>();

    /** 用户自定义加分规则（存内存，通过 API 读写） */
    @Getter
    private List<String> extraBonuses = new ArrayList<>();

    public void setExtraDeductions(List<String> rules) {
        this.extraDeductions = rules != null ? new ArrayList<>(rules) : new ArrayList<>();
    }

    public void setExtraBonuses(List<String> rules) {
        this.extraBonuses = rules != null ? new ArrayList<>(rules) : new ArrayList<>();
    }

    /**
     * 组装公司评估的提示词消息列表
     */
    public List<LlmMessage> assemble(String templateId, String companyInfo) {
        Map<String, Object> variables = new LinkedHashMap<>();
        variables.put(CompanyPromptVariables.COMPANY_INFO, companyInfo != null ? companyInfo : "");
        variables.put(CompanyPromptVariables.EXTRA_DEDUCTIONS, formatRules(extraDeductions));
        variables.put(CompanyPromptVariables.EXTRA_BONUSES, formatRules(extraBonuses));

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

    private String formatRules(List<String> rules) {
        if (rules == null || rules.isEmpty()) {
            return "";
        }
        return IntStream.range(0, rules.size())
                .mapToObj(i -> "- " + rules.get(i))
                .collect(Collectors.joining("\n"));
    }
}
