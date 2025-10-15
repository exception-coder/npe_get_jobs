package getjobs.modules.ai.greeting.llm;

import java.util.List;

public interface LlmClient {
    String chat(List<LlmMessage> messages);
}
