package getjobs.infrastructure.ai.llm;

/**
 * LLM 消息 DTO（与具体实现解耦，供应用层组包使用）。
 */
public record LlmMessage(String role, String content) {
    public static LlmMessage system(String c) {
        return new LlmMessage("system", c);
    }

    public static LlmMessage user(String c) {
        return new LlmMessage("user", c);
    }

    public static LlmMessage assistant(String c) {
        return new LlmMessage("assistant", c);
    }
}
