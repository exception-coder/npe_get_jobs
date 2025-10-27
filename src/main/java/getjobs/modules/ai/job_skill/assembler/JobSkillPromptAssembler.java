package getjobs.modules.ai.job_skill.assembler;

import getjobs.modules.ai.infrastructure.llm.LlmMessage;
import getjobs.modules.ai.infrastructure.template.PromptRenderer;
import getjobs.modules.ai.infrastructure.template.PromptTemplate;
import getjobs.modules.ai.infrastructure.template.TemplateRepository;
import getjobs.modules.ai.job_skill.dto.JobSkillRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 岗位技能分析提示词组装器
 * <p>
 * 负责将岗位技能分析的提示词模板与实际数据组装成可供 LLM 使用的消息列表。
 * </p>
 */
@Component
@RequiredArgsConstructor
public class JobSkillPromptAssembler {

    private final TemplateRepository templateRepository;
    private final PromptRenderer renderer;

    /**
     * 组装岗位技能分析的提示词消息列表
     *
     * @param templateId 模板 ID（例如 "job-skill-prompt"）
     * @param request    岗位技能分析请求
     * @return LLM 消息列表
     */
    public List<LlmMessage> assemble(String templateId, JobSkillRequest request) {
        Map<String, Object> variables = new HashMap<>();
        variables.put(JobSkillPromptVariables.JOB_TITLE, request.getJobTitle());
        variables.put(JobSkillPromptVariables.EXPERIENCE_YEARS, request.getExperienceYears());
        variables.put(JobSkillPromptVariables.PERSONAL_STRENGTHS, request.getPersonalStrengths());

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
