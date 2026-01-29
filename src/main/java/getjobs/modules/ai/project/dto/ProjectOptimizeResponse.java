package getjobs.modules.ai.project.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * 项目优化响应
 */
@Data
@AllArgsConstructor
public class ProjectOptimizeResponse {
    /**
     * 优化后的内容
     */
    private String optimizedContent;
}

