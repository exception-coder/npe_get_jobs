package getjobs.modules.ai.greeting.template;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class TemplateRepository {
    private final Map<String, PromptTemplate> cache = new ConcurrentHashMap<>();

    @PostConstruct
    public void load() throws IOException {
        // 读取classpath: prompts/*.yml -> 缓存
        // 你可用 SnakeYAML 映射到 PromptTemplate
    }

    public PromptTemplate get(String id) {
        return Optional.ofNullable(cache.get(id))
                .orElseThrow(() -> new IllegalArgumentException("Template not found: " + id));
    }
}