package getjobs.modules.ai.infrastructure.template;

import lombok.Data;

import java.util.List;

@Data
public class PromptTemplate {
    private String id;
    private String description;
    private List<Segment> segments;

    @Data
    public static class Segment {
        private PromptSegmentType type;
        private String content;
    }
}
