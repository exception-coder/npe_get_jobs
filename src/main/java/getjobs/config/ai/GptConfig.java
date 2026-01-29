package getjobs.config.ai;

import getjobs.modules.ai.common.enums.AiPlatform;
import jakarta.annotation.PostConstruct;
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
 * GPT配置类
 */
@Slf4j
@Configuration
public class GptConfig {

    @Value("${spring.ai.openai.api-key}")
    private String apiKey;

    @Value("${spring.ai.openai.base-url:https://api.openai.com}")
    private String baseUrl;

    @Value("${spring.ai.openai.chat.options.model}")
    private String model;

    @Value("${spring.ai.openai.chat.options.temperature:0.7}")
    private Double temperature;

    @Value("${spring.ai.openai.chat.options.max-tokens:2000}")
    private Integer maxTokens;

    @Value("${proxy.host:}")
    private String proxyHost;

    @Value("${proxy.port:0}")
    private int proxyPort;

    @PostConstruct
    public void init() {
        log.info("OpenAI配置信息:");
        log.info("API基础URL: {}", baseUrl);
        log.info("默认模型: {}", model);

        if (proxyHost != null && !proxyHost.isEmpty() && proxyPort > 0) {
            log.info("代理已配置 - 主机: {}, 端口: {}", proxyHost, proxyPort);

            // 调用非流式响应默认使用的实现是 jdk.internal.net.http.HttpClientImpl
            // 设置全局HTTP代理
            if (isProxyAvailable(proxyHost, proxyPort)) {
                log.info("全局HTTP代理 http.proxyHost: {}", proxyHost);
                log.info("全局HTTP代理 http.proxyPort: {}", String.valueOf(proxyPort));
                log.info("全局HTTP代理 https.proxyHost: {}", proxyHost);
                log.info("全局HTTP代理 https.proxyPort: {}", String.valueOf(proxyPort));
                log.info("已设置全局HTTP代理");
            } else {
                log.warn("无法连接到代理 - 主机: {}, 端口: {}，全局HTTP代理设置已跳过", proxyHost, proxyPort);
            }
        } else {
            log.warn("未配置代理或代理配置不完整。如果您在中国大陆，可能需要配置代理才能访问OpenAI API。");
            log.warn("当前代理配置: 主机: {}, 端口: {}", proxyHost, proxyPort);
        }
    }

    /**
     * 配置OpenAiApi
     * <p>
     * 使用基础设施层的 WebClient.Builder，继承全局配置（代理、SSL、超时等）。
     * </p>
     *
     * @param webClientBuilder 基础设施层的 WebClient.Builder
     * @return OpenAiApi 实例
     */
    @Bean
    public OpenAiApi openAiApi(@Qualifier("webClientBuilderDefault") WebClient.Builder webClientBuilder) {
        // 使用基础设施层的 WebClient.Builder，继承全局配置
        // 注意：使用 clone() 避免污染全局配置
        WebClient.Builder builder = webClientBuilder.clone();

        log.info("创建OpenAiApi，基础URL: {}", baseUrl);
        log.info("使用基础设施层的 WebClient.Builder（已包含代理、SSL、超时等配置）");

        return OpenAiApi.builder()
                .apiKey(apiKey)
                .baseUrl(baseUrl)
                .webClientBuilder(builder)
                .build();
    }

    /**
     * 测试代理是否可用
     * 
     * @param host 代理主机
     * @param port 代理端口
     * @return 代理是否可用
     */
    private boolean isProxyAvailable(String host, int port) {
        try (java.net.Socket socket = new java.net.Socket()) {
            socket.connect(new java.net.InetSocketAddress(host, port), 3000); // 3秒超时
            return true;
        } catch (Exception e) {
            log.error("代理连接测试失败: {}", e.getMessage());
            return false;
        }
    }

    /**
     * 配置ChatModel
     *
     */
    @Bean(AiPlatform.OPENAI_BEAN_NAME)
    public ChatModel openAiChatModel(OpenAiApi openAiApi) {
        OpenAiChatOptions options = OpenAiChatOptions.builder()
                .model(model)
                .temperature(temperature)
                .maxTokens(maxTokens)
                .build();

        log.info("创建ChatModel，模型: {}, 温度: {}, 最大Token: {}", model, temperature, maxTokens);
        return OpenAiChatModel.builder()
                .openAiApi(openAiApi)
                .defaultOptions(options)
                .build();
    }

    /**
     * 配置StreamingChatModel
     */
    @Bean
    public StreamingChatModel openAiStreamingChatModel(OpenAiApi openAiApi) {
        OpenAiChatOptions options = OpenAiChatOptions.builder()
                .model(model)
                .temperature(temperature)
                .maxTokens(maxTokens)
                .build();

        log.info("创建StreamingChatModel，模型: {}, 温度: {}, 最大Token: {}", model, temperature, maxTokens);
        return OpenAiChatModel.builder()
                .openAiApi(openAiApi)
                .defaultOptions(options)
                .build();
    }
}
