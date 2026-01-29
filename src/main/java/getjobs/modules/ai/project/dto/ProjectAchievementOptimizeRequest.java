package getjobs.modules.ai.project.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * 项目业绩优化请求
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class ProjectAchievementOptimizeRequest extends BaseProjectOptimizeRequest {
    /**
     * 原始项目业绩描述内容
     */
    private String projectAchievement;
}

