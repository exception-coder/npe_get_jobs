package getjobs.infrastructure.ai.llm;

/** 模型请求或输出失败，仅携带可安全展示的分类提示。 */
public class LlmResponseException extends IllegalStateException {
    public LlmResponseException(String message) {
        super(message);
    }

    public LlmResponseException(String message, Throwable cause) {
        super(message, cause);
    }
}
