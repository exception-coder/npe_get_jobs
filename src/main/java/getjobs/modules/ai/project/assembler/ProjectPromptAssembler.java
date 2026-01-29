package getjobs.modules.ai.project.assembler;

import getjobs.modules.ai.infrastructure.llm.LlmMessage;
import getjobs.modules.ai.infrastructure.template.PromptRenderer;
import getjobs.modules.ai.infrastructure.template.PromptTemplate;
import getjobs.modules.ai.infrastructure.template.TemplateRepository;
import getjobs.modules.ai.project.dto.BaseProjectOptimizeRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 项目优化提示词组装器
 */
@Component
@RequiredArgsConstructor
public class ProjectPromptAssembler {

    private final TemplateRepository templateRepository;
    private final PromptRenderer renderer;

    /**
     * 组装项目优化的提示词消息列表
     *
     * @param templateId 模板 ID
     * @param request    公共请求参数
     * @param content    原始待优化内容
     * @return LLM 消息列表
     */
    public List<LlmMessage> assemble(String templateId, BaseProjectOptimizeRequest request, String content) {
        Map<String, Object> variables = new HashMap<>();
        variables.put(ProjectPromptVariables.RESUME_SUMMARY, defaultString(request.getResumeSummary()));
        variables.put(ProjectPromptVariables.EXPERIENCE_YEARS, defaultString(request.getExperienceYears()));
        variables.put(ProjectPromptVariables.TARGET_POSITION, defaultString(request.getTargetPosition()));
        variables.put(ProjectPromptVariables.SKILLS, formatSkills(request.getSkills()));
        variables.put(ProjectPromptVariables.PROJECT_CONTENT, defaultString(content));

        PromptTemplate template = templateRepository.get(templateId);
        List<LlmMessage> messages = new ArrayList<>();

        for (PromptTemplate.Segment segment : template.getSegments()) {
            String rendered = renderer.render(segment.getContent(), variables);
            switch (segment.getType()) {
                case SYSTEM, GUIDELINES -> messages.add(LlmMessage.system(rendered));
                case USER, FEW_SHOTS -> messages.add(LlmMessage.user(rendered));
            }
        }

        return messages;
    }

    private String defaultString(String value) {
        return StringUtils.hasText(value) ? value.trim() : "";
    }

    private String formatSkills(List<String> skills) {
        if (CollectionUtils.isEmpty(skills)) {
            return "";
        }
        return String.join("、", skills);
    }
}

