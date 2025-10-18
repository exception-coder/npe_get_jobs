package getjobs.modules.ai.infrastructure.llm;

import java.util.List;

public interface LlmClient {
    String chat(List<LlmMessage> messages);
}
