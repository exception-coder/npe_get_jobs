package getjobs.infrastructure.ai.llm;

import getjobs.infrastructure.ai.config.DeepseekChatOptions;
import getjobs.infrastructure.ai.enums.AiPlatform;
import getjobs.infrastructure.ai.factory.ChatModelFactory;
import org.springframework.ai.chat.messages.AssistantMessage;
import org.springframework.ai.chat.messages.Message;
import org.springframework.ai.chat.messages.SystemMessage;
import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.openai.OpenAiChatOptions;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.util.List;

/**
 * 基于 Spring AI ChatModel 的 LLM 客户端实现。
 * 通过 {@link ChatModelFactory} 按平台选择 ChatModel，默认平台为 {@link AiPlatform#DEEPSEEK}。
 */
@Component
public class SpringAiLlmClient implements LlmClient {

    private static final AiPlatform DEFAULT_PLATFORM = AiPlatform.DEEPSEEK;

    private final ChatModelFactory chatModelFactory;

    public SpringAiLlmClient(ChatModelFactory chatModelFactory) {
        this.chatModelFactory = chatModelFactory;
    }

    @Override
    public String chat(List<LlmMessage> messages) {
        return chat(DEFAULT_PLATFORM, messages, null, null);
    }

    @Override
    public String chat(List<LlmMessage> messages, String modelOverride) {
        return chat(DEFAULT_PLATFORM, messages, modelOverride, null);
    }

    @Override
    public String chat(List<LlmMessage> messages, String modelOverride, Double temperature) {
        return chat(DEFAULT_PLATFORM, messages, modelOverride, temperature);
    }

    @Override
    public String chat(AiPlatform platform, List<LlmMessage> messages, String modelOverride, Double temperature) {
        if (platform == null) platform = DEFAULT_PLATFORM;
        ChatModel chatModel = chatModelFactory.getChatModel(platform);
        if (chatModel == null) {
            throw new IllegalArgumentException("No ChatModel registered for platform: " + platform);
        }

        var springMsgs = messages.stream().<Message>map(m -> switch (m.role()) {
            case "system" -> new SystemMessage(m.content());
            case "assistant" -> new AssistantMessage(m.content());
            default -> new UserMessage(m.content());
        }).toList();

        Prompt prompt = buildPrompt(platform, springMsgs, modelOverride, temperature);
        var resp = chatModel.call(prompt);
        return resp.getResult().getOutput().getText();
    }

    /**
     * 根据平台构建 Prompt：Deepseek/Qwen 使用 DeepseekChatOptions（含 enable_search），
     * OpenAI 使用标准 OpenAiChatOptions。无自定义参数时使用默认 Bean 配置。
     */
    private static Prompt buildPrompt(AiPlatform platform, List<Message> messages,
                                      String modelOverride, Double temperature) {
        boolean hasOverride = StringUtils.hasText(modelOverride) || temperature != null;
        if (!hasOverride) {
            return new Prompt(messages);
        }
        return switch (platform) {
            case DEEPSEEK, QWEN -> {
                DeepseekChatOptions.DeepseekBuilder builder = DeepseekChatOptions.deepseekBuilder().enableSearch(true);
                if (StringUtils.hasText(modelOverride)) builder.model(modelOverride);
                if (temperature != null) builder.temperature(temperature);
                yield new Prompt(messages, builder.build());
            }
            case OPENAI -> {
                OpenAiChatOptions.Builder builder = OpenAiChatOptions.builder();
                if (StringUtils.hasText(modelOverride)) builder.model(modelOverride);
                if (temperature != null) builder.temperature(temperature);
                yield new Prompt(messages, builder.build());
            }
        };
    }
}
