package getjobs.infrastructure.ai.config;

import getjobs.infrastructure.ai.enums.AiPlatform;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.model.StreamingChatModel;
import org.springframework.ai.openai.OpenAiChatModel;
import org.springframework.ai.openai.OpenAiChatOptions;
import org.springframework.ai.openai.api.OpenAiApi;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

/**
 * 阿里云千问配置类。
 * <p>
 * 使用 OpenAI 兼容接口（dashscope compatible-mode），HTTP 客户端由
 * {@link QwenApiHttpClientConfig} 单独配置（含 enable_search 注入与请求日志）。
 * </p>
 */
@Slf4j
@Configuration
public class QwenGptConfig {

    private final WebClient.Builder qwenApiWebClientBuilder;
    private final org.springframework.web.client.RestClient.Builder qwenApiRestClientBuilder;

    public QwenGptConfig(
            @Qualifier("qwenApiWebClientBuilder") WebClient.Builder qwenApiWebClientBuilder,
            @Qualifier("qwenApiRestClientBuilder") org.springframework.web.client.RestClient.Builder qwenApiRestClientBuilder) {
        this.qwenApiWebClientBuilder = qwenApiWebClientBuilder;
        this.qwenApiRestClientBuilder = qwenApiRestClientBuilder;
    }

    @Value("${spring.ai.qwen.api-key:}")
    private String apiKey;

    @Value("${spring.ai.qwen.base-url:https://dashscope.aliyuncs.com/compatible-mode/v1}")
    private String baseUrl;

    @Value("${spring.ai.qwen.chat.options.model:qwen-plus}")
    private String model;

    @Value("${spring.ai.qwen.chat.options.temperature:0.7}")
    private Double temperature;

    @Value("${spring.ai.qwen.chat.options.max-tokens:8192}")
    private Integer maxTokens;

    @Bean(AiPlatform.QWEN_BEAN_NAME)
    public ChatModel qwenChatModel() {
        OpenAiApi api = buildQwenOpenAiApi();
        OpenAiChatOptions options = OpenAiChatOptions.builder()
                .model(model)
                .temperature(temperature)
                .maxTokens(maxTokens)
                .build();
        log.info("创建千问 ChatModel，model={}, temperature={}, maxTokens={}", model, temperature, maxTokens);
        return OpenAiChatModel.builder()
                .openAiApi(api)
                .defaultOptions(options)
                .build();
    }

    @Bean("qwenStreamingChatModel")
    public StreamingChatModel qwenStreamingChatModel() {
        OpenAiApi api = buildQwenOpenAiApi();
        OpenAiChatOptions options = OpenAiChatOptions.builder()
                .model(model)
                .temperature(temperature)
                .maxTokens(maxTokens)
                .build();
        log.info("创建千问 StreamingChatModel，model={}, temperature={}, maxTokens={}", model, temperature, maxTokens);
        return OpenAiChatModel.builder()
                .openAiApi(api)
                .defaultOptions(options)
                .build();
    }

    private OpenAiApi buildQwenOpenAiApi() {
        return OpenAiApi.builder()
                .apiKey(apiKey)
                .baseUrl(baseUrl)
                .restClientBuilder(qwenApiRestClientBuilder)
                .webClientBuilder(qwenApiWebClientBuilder.clone())
                .build();
    }
}
