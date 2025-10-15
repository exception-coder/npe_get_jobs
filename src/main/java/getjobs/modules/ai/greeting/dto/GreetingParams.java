package getjobs.modules.ai.greeting.dto;

import lombok.Data;

@Data
public class GreetingParams {
    private String tone;          // formal | brief | platform | english
    private int maxChars = 80;    // 60~90
    private boolean showWeakness; // 是否带1个可控改进点
    private String outputMode = "text"; // text | json
}