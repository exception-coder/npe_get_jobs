package getjobs.infrastructure.ai.enums;

/**
 * AI 平台枚举
 */
public enum AiPlatform {
    /**
     * OpenAI
     */
    OPENAI,
    /**
     * Deepseek
     */
    DEEPSEEK,
    /**
     * 阿里云千问
     */
    QWEN;


    public static final String OPENAI_BEAN_NAME = "chatgptAiChatModel";
    public static final String DEEPSEEK_BEAN_NAME = "deepseekChatModel";
    public static final String QWEN_BEAN_NAME = "qwenChatModel";

    public String getModelBeanName() {
        switch (this) {
            case OPENAI:
                return OPENAI_BEAN_NAME;
            case DEEPSEEK:
                return DEEPSEEK_BEAN_NAME;
            case QWEN:
                return QWEN_BEAN_NAME;
            default:
                throw new IllegalArgumentException("Unsupported AI platform: " + this);
        }
    }
}
