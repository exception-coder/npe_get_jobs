package getjobs.infrastructure.ai.llm;

import getjobs.infrastructure.ai.enums.AiPlatform;

import java.util.List;

/**
 * LLM 客户端端口（应用层依赖此接口，由基础设施实现）。
 */
public interface LlmClient {

    /**
     * 使用默认平台和模型进行对话。
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

    /**
     * 使用指定模型与温度进行对话。
     *
     * @param messages      消息列表
     * @param modelOverride 模型名，可为 null
     * @param temperature   采样温度，可为 null（使用默认配置）
     * @return 模型回复文本
     */
    default String chat(List<LlmMessage> messages, String modelOverride, Double temperature) {
        return chat(messages, modelOverride);
    }

    /**
     * 使用指定平台、模型与温度进行对话。
     *
     * @param platform      AI 平台，为 null 时使用默认平台
     * @param messages      消息列表
     * @param modelOverride 模型名，可为 null
     * @param temperature   采样温度，可为 null（使用默认配置）
     * @return 模型回复文本
     */
    default String chat(AiPlatform platform, List<LlmMessage> messages, String modelOverride, Double temperature) {
        return chat(messages, modelOverride, temperature);
    }
}
