package getjobs.modules.ai.infrastructure.llm;

import getjobs.modules.ai.common.enums.AiPlatform;
import org.springframework.ai.chat.messages.AssistantMessage;
import org.springframework.ai.chat.messages.Message;
import org.springframework.ai.chat.messages.SystemMessage;
import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class SpringAiLlmClient implements LlmClient {

    private final ChatModel chatModel;

    public SpringAiLlmClient(@Qualifier(AiPlatform.DEEPSEEK_BEAN_NAME) ChatModel chatModel) {
        this.chatModel = chatModel;
    }

    @Override
    public String chat(List<LlmMessage> messages) {
        var springMsgs = messages.stream().<Message>map(m -> switch (m.role()) {
            case "system" -> new SystemMessage(m.content());
            case "assistant" -> new AssistantMessage(m.content());
            default -> new UserMessage(m.content());
        }).toList();

        var resp = chatModel.call(new Prompt(springMsgs));
        return resp.getResult().getOutput().getText();
    }
}
