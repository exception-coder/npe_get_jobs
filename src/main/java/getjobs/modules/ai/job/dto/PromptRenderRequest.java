package getjobs.modules.ai.job.dto;

import lombok.Data;
import java.util.Map;

@Data
public class PromptRenderRequest {
    private String name;
    private Map<String, String> variables;
}
