package getjobs.modules.ai.infrastructure.template;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class PromptTemplate {
    private String id;
    private String description;
    private String model;
    private Double temperature;

    @JsonProperty("max_output_tokens")
    private Integer maxOutputTokens;

    private List<Segment> segments;

    @Data
    public static class Segment {
        private PromptSegmentType type;
        private String content;
    }
}
