package getjobs.modules.ai.greeting.dto;

import lombok.Data;

import java.util.List;

@Data
public class GreetingRequest {
    private ProfileDTO profile;
    private String jdText;
    private List<String> jdKeywords; // 可为空
    private GreetingParams params;
}