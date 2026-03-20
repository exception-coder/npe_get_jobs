package getjobs.modules.ai.job.assembler;

import getjobs.infrastructure.ai.llm.LlmMessage;
import getjobs.infrastructure.ai.template.PromptRenderer;
import getjobs.infrastructure.ai.template.PromptTemplate;
import getjobs.infrastructure.ai.template.TemplateRepository;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

/**
 * 职位匹配提示词组装器
 * <p>
 * 负责将职位匹配的提示词模板与实际数据组装成可供 LLM 使用的消息列表。
 * 参考 greeting 模块的 PromptAssembler 设计。
 * </p>
 */
@Component
@RequiredArgsConstructor
public class JobPromptAssembler {

    private final TemplateRepository templateRepository;
    private final PromptRenderer renderer;

    /**
     * 用户自定义补充判定规则，持久化在内存中（通过 API 读写）
     */
    @Getter
    private List<String> extraRules = new ArrayList<>();

    public void setExtraRules(List<String> rules) {
        this.extraRules = rules != null ? new ArrayList<>(rules) : new ArrayList<>();
    }

    /**
     * 组装职位匹配的提示词消息列表（基于完整职位描述）
     *
     * @param templateId 模板 ID（例如 "job-match-v1"）
     * @param myJd       候选人期望从事的工作内容
     * @param jd         职位描述
     * @return LLM 消息列表
     */
    public List<LlmMessage> assemble(String templateId, String myJd, String jd) {
        return assemble(templateId, myJd, jd, Collections.emptyList());
    }

    /**
     * 组装职位匹配的提示词消息列表（基于完整职位描述，支持用户自定义补充规则）
     *
     * @param templateId 模板 ID
     * @param myJd       候选人期望从事的工作内容
     * @param jd         职位描述
     * @param extraRules 用户补充判定规则列表（如：["Java开发技术管理岗（组长、技术负责人）也可接受"]）
     * @return LLM 消息列表
     */
    public List<LlmMessage> assemble(String templateId, String myJd, String jd, List<String> extraRules) {
        Map<String, Object> variables = new HashMap<>();
        variables.put(JobPromptVariables.MY_JD, myJd);
        variables.put(JobPromptVariables.JD, jd);
        variables.put(JobPromptVariables.EXTRA_RULES, formatExtraRules(extraRules));

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

    /**
     * 组装职位匹配的提示词消息列表（基于职位名称）
     *
     * @param templateId 模板 ID（例如 "job-match-by-title-v1"）
     * @param myJd       候选人期望从事的工作内容
     * @param jobTitle   职位名称
     * @return LLM 消息列表
     */
    public List<LlmMessage> assembleByTitle(String templateId, String myJd, String jobTitle) {
        return assembleByTitle(templateId, myJd, jobTitle, Collections.emptyList());
    }

    /**
     * 组装职位匹配的提示词消息列表（基于职位名称，支持用户自定义补充规则）
     *
     * @param templateId 模板 ID
     * @param myJd       候选人期望从事的工作内容
     * @param jobTitle   职位名称
     * @param extraRules 用户补充判定规则列表
     * @return LLM 消息列表
     */
    public List<LlmMessage> assembleByTitle(String templateId, String myJd, String jobTitle, List<String> extraRules) {
        Map<String, Object> variables = new HashMap<>();
        variables.put(JobPromptVariables.MY_JD, myJd);
        variables.put(JobPromptVariables.JOB_TITLE, jobTitle);
        variables.put(JobPromptVariables.EXTRA_RULES, formatExtraRules(extraRules));

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

    /**
     * 将规则列表格式化为有序编号文本，列表为空时返回空字符串
     */
    private String formatExtraRules(List<String> rules) {
        if (rules == null || rules.isEmpty()) {
            return "";
        }
        return IntStream.range(0, rules.size())
                .mapToObj(i -> (i + 1) + ". " + rules.get(i))
                .collect(Collectors.joining("\n"));
    }
}
