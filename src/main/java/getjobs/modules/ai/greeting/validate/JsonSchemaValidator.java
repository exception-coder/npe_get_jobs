package getjobs.modules.ai.greeting.validate;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;

/**
 * 极简占位：仅校验 JSON 可解析与包含关键字段。
 * 若要正式 Schema 校验，可引入 networknt/json-schema。
 */
@Component
public class JsonSchemaValidator {

    private final ObjectMapper mapper = new ObjectMapper();

    public void checkBasic(String json) {
        try {
            JsonNode n = mapper.readTree(json);
            if (!n.has("greeting")) throw new IllegalArgumentException("missing 'greeting'");
        } catch (Exception e) {
            throw new IllegalArgumentException("invalid json: " + e.getMessage(), e);
        }
    }
}
