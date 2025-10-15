package getjobs.modules.ai.greeting.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class GreetingResponse {
    private String greeting;           // 产出的一句话
    private List<String> usedKeywords; // 实际覆盖到的关键词
    private String fitReason;          // 12字内贴合概括（可选）
    private String tone;
    private int length;
}