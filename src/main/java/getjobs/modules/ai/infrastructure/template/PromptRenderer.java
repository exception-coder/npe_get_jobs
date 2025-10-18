package getjobs.modules.ai.infrastructure.template;

import com.samskivert.mustache.Mustache;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class PromptRenderer {
    private final Mustache.Compiler compiler = Mustache.compiler();

    public String render(String raw, Map<String, Object> vars) {
        return compiler.defaultValue("").compile(raw).execute(vars);
    }
}
