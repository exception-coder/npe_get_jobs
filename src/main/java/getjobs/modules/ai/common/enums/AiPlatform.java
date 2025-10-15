package getjobs.modules.ai.common.enums;

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
    DEEPSEEK;


    public static final String OPENAI_BEAN_NAME = "chatgptAiChatModel";
    public static final String DEEPSEEK_BEAN_NAME = "deepseekChatModel";

    public String getModelBeanName() {
        switch (this) {
            case OPENAI:
                return OPENAI_BEAN_NAME;
            case DEEPSEEK:
                return DEEPSEEK_BEAN_NAME;
            default:
                // Or handle as per application's error handling strategy
                throw new IllegalArgumentException("Unsupported AI platform: " + this);
        }
    }
}
