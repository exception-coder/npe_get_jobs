package getjobs.modules.ai.infrastructure.llm;

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
