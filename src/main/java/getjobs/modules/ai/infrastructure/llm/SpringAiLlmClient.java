package getjobs.modules.ai.infrastructure.llm;

import getjobs.modules.ai.common.enums.AiPlatform;
import org.springframework.ai.chat.messages.AssistantMessage;
import org.springframework.ai.chat.messages.Message;
import org.springframework.ai.chat.messages.SystemMessage;
import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.openai.OpenAiChatOptions;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.util.List;

@Component
public class SpringAiLlmClient implements LlmClient {

    private final ChatModel chatModel;

    public SpringAiLlmClient(@Qualifier(AiPlatform.DEEPSEEK_BEAN_NAME) ChatModel chatModel) {
        this.chatModel = chatModel;
    }

    @Override
    public String chat(List<LlmMessage> messages) {
        return chat(messages, null);
    }

    @Override
    public String chat(List<LlmMessage> messages, String modelOverride) {
        var springMsgs = messages.stream().<Message>map(m -> switch (m.role()) {
            case "system" -> new SystemMessage(m.content());
            case "assistant" -> new AssistantMessage(m.content());
            default -> new UserMessage(m.content());
        }).toList();
        Prompt prompt = StringUtils.hasText(modelOverride)
                ? new Prompt(springMsgs, OpenAiChatOptions.builder().model(modelOverride).build())
                : new Prompt(springMsgs);
        var resp = chatModel.call(prompt);
        return resp.getResult().getOutput().getText();
    }
}
