package getjobs.modules.ai.job.assembler;

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
     * 组装职位匹配的提示词消息列表（基于完整职位描述）
     *
     * @param templateId 模板 ID（例如 "job-match-v1"）
     * @param myJd       候选人期望从事的工作内容
     * @param jd         职位描述
     * @return LLM 消息列表
     */
    public List<LlmMessage> assemble(String templateId, String myJd, String jd) {
        Map<String, Object> variables = new HashMap<>();
        variables.put(JobPromptVariables.MY_JD, myJd);
        variables.put(JobPromptVariables.JD, jd);

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
        Map<String, Object> variables = new HashMap<>();
        variables.put(JobPromptVariables.MY_JD, myJd);
        variables.put(JobPromptVariables.JOB_TITLE, jobTitle);

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
