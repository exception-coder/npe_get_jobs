package getjobs.modules.ai.project.web;

import getjobs.modules.ai.project.dto.ProjectAchievementOptimizeRequest;
import getjobs.modules.ai.project.dto.ProjectDescriptionOptimizeRequest;
import getjobs.modules.ai.project.dto.ProjectOptimizeResponse;
import getjobs.modules.ai.project.service.ProjectOptimizationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 项目优化控制器
 */
@RestController
@RequestMapping("/api/ai/project")
@RequiredArgsConstructor
public class ProjectOptimizationController {

    private final ProjectOptimizationService projectOptimizationService;

    /**
     * 项目描述优化
     *
     * @param request 请求参数
     * @return 优化后的内容
     */
    @PostMapping("/description/optimize")
    public ProjectOptimizeResponse optimizeDescription(@RequestBody ProjectDescriptionOptimizeRequest request) {
        return projectOptimizationService.optimizeDescription(request);
    }

    /**
     * 项目业绩优化
     *
     * @param request 请求参数
     * @return 优化后的内容
     */
    @PostMapping("/achievement/optimize")
    public ProjectOptimizeResponse optimizeAchievement(@RequestBody ProjectAchievementOptimizeRequest request) {
        return projectOptimizationService.optimizeAchievement(request);
    }
}

