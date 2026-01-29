package getjobs.modules.ai.project.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * 项目描述优化请求
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class ProjectDescriptionOptimizeRequest extends BaseProjectOptimizeRequest {
    /**
     * 原始项目描述内容
     */
    private String projectDescription;
}

