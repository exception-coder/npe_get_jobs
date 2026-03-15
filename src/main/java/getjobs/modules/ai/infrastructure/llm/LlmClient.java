package getjobs.modules.ai.infrastructure.llm;

import java.util.List;

public interface LlmClient {

    /**
     * 使用默认模型进行对话。
     */
    String chat(List<LlmMessage> messages);

    /**
     * 使用指定模型进行对话。当 modelOverride 为空时与 {@link #chat(List)} 行为一致。
     *
     * @param messages      消息列表
     * @param modelOverride 本次调用使用的模型名（如 deepseek-chat、deepseek-reasoner），可为 null 或空
     * @return 模型回复文本
     */
    default String chat(List<LlmMessage> messages, String modelOverride) {
        return chat(messages);
    }
}
