package getjobs.modules.ai.project.service;

import getjobs.modules.ai.infrastructure.llm.LlmClient;
import getjobs.modules.ai.project.assembler.ProjectPromptAssembler;
import getjobs.modules.ai.project.dto.BaseProjectOptimizeRequest;
import getjobs.modules.ai.project.dto.ProjectAchievementOptimizeRequest;
import getjobs.modules.ai.project.dto.ProjectDescriptionOptimizeRequest;
import getjobs.modules.ai.project.dto.ProjectOptimizeResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

/**
 * 项目优化服务
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class ProjectOptimizationService {

    private static final String DESCRIPTION_TEMPLATE_ID = "project-description-with-summary";
    private static final String ACHIEVEMENT_TEMPLATE_ID = "project-achievement-with-summary";

    private final ProjectPromptAssembler assembler;
    private final LlmClient llmClient;

    /**
     * 优化项目描述
     *
     * @param request 请求参数
     * @return 优化结果
     */
    public ProjectOptimizeResponse optimizeDescription(ProjectDescriptionOptimizeRequest request) {
        String optimized = optimize(DESCRIPTION_TEMPLATE_ID, request, request.getProjectDescription());
        return new ProjectOptimizeResponse(optimized);
    }

    /**
     * 优化项目业绩描述
     *
     * @param request 请求参数
     * @return 优化结果
     */
    public ProjectOptimizeResponse optimizeAchievement(ProjectAchievementOptimizeRequest request) {
        String optimized = optimize(ACHIEVEMENT_TEMPLATE_ID, request, request.getProjectAchievement());
        return new ProjectOptimizeResponse(optimized);
    }

    private String optimize(String templateId, BaseProjectOptimizeRequest request, String content) {
        var messages = assembler.assemble(templateId, request, content);
        String raw = llmClient.chat(messages);
        String optimized = raw != null ? raw.trim() : "";
        log.info("Project optimization completed - template={}, targetPosition={}, contentLength={}",
                templateId, request.getTargetPosition(), content != null ? content.length() : 0);
        log.debug("Project optimization raw response: {}", raw);
        return optimized;
    }
}

