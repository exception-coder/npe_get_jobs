package getjobs.modules.ai.greeting.validate;

import lombok.Data;

import java.util.List;

@Data
public class OutputContract {
    private int maxChars;
    private List<String> mustCoverKeywords; // 至少覆盖2个
    private boolean jsonMode;               // 若需要返回JSON结构
    private String jsonSchema;              // networknt/json-schema 可校验
}