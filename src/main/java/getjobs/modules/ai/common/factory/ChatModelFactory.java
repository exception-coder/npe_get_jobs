package getjobs.modules.ai.common.factory;

import getjobs.modules.ai.common.enums.AiPlatform;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class ChatModelFactory {

    private final Map<AiPlatform, ChatModel> chatModelMap = new ConcurrentHashMap<>();

    public ChatModelFactory(Map<String, ChatModel> chatModels) {
        for (AiPlatform platform : AiPlatform.values()) {
            ChatModel chatModel = chatModels.get(platform.getModelBeanName());
            if (chatModel != null) {
                chatModelMap.put(platform, chatModel);

            }
        }
    }

    public ChatModel getChatModel(AiPlatform platform) {
        return chatModelMap.get(platform);
    }
}
