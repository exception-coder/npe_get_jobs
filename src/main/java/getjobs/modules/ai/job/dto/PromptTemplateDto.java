package getjobs.modules.ai.job.dto;

import getjobs.modules.ai.config.AiPromptProperties;
import lombok.Data;

import java.util.Map;

@Data
public class PromptTemplateDto {
    private String name;
    private String template;
    private String description;
    private Map<String, AiPromptProperties.Placeholder> placeholders;
}
