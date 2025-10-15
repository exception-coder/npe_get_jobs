package getjobs.config.ai;

import getjobs.modules.ai.common.enums.AiPlatform;
import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.model.StreamingChatModel;
import org.springframework.ai.openai.OpenAiChatModel;
import org.springframework.ai.openai.OpenAiChatOptions;
import org.springframework.ai.openai.api.OpenAiApi;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.netty.http.client.HttpClient;
import reactor.netty.transport.ProxyProvider;

import java.time.Duration;

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
    
    @Value("${spring.ai.openai.connect-timeout:60000}")
    private int connectTimeout;
    
    @Value("${spring.ai.openai.response-timeout:120000}")
    private int responseTimeout;
    
    @PostConstruct
    public void init() {
        log.info("OpenAI配置信息:");
        log.info("API基础URL: {}", baseUrl);
        log.info("默认模型: {}", model);
        log.info("连接超时: {}ms, 响应超时: {}ms", connectTimeout, responseTimeout);
        
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
     */
    @Bean
    public OpenAiApi openAiApi() {
        WebClient.Builder webClientBuilder = WebClient.builder();

        if (proxyHost != null && !proxyHost.isEmpty() && proxyPort > 0) {
            if (isProxyAvailable(proxyHost, proxyPort)) {
                log.info("使用代理创建WebClient - 主机: {}, 端口: {}", proxyHost, proxyPort);
                HttpClient httpClient = HttpClient.create()
                    .proxy(proxy -> proxy
                        .type(ProxyProvider.Proxy.HTTP)
                        .host(proxyHost)
                        .port(proxyPort))
                    .responseTimeout(Duration.ofMillis(responseTimeout))
                    .option(io.netty.channel.ChannelOption.CONNECT_TIMEOUT_MILLIS, connectTimeout)
                    .option(io.netty.channel.ChannelOption.SO_KEEPALIVE, true);

                webClientBuilder = webClientBuilder.clone()
                    .clientConnector(new ReactorClientHttpConnector(httpClient));
            } else {
                log.warn("无法连接到代理 - 主机: {}, 端口: {}，将直接连接OpenAI API", proxyHost, proxyPort);
            }
        } else {
            log.warn("创建WebClient时未使用代理，这可能导致在中国大陆无法连接到OpenAI API");
        }

        // 即使不使用代理，也添加超时配置
        HttpClient httpClient = HttpClient.create()
            .responseTimeout(Duration.ofMillis(responseTimeout))
            .option(io.netty.channel.ChannelOption.CONNECT_TIMEOUT_MILLIS, connectTimeout)
            .option(io.netty.channel.ChannelOption.SO_KEEPALIVE, true);
        
        webClientBuilder = webClientBuilder.clone()
            .clientConnector(new ReactorClientHttpConnector(httpClient));

        log.info("创建OpenAiApi，基础URL: {}", baseUrl);
        return OpenAiApi.builder()
            .apiKey(apiKey)
            .baseUrl(baseUrl)
            .webClientBuilder(webClientBuilder)
            .build();
    }

    /**
     * 测试代理是否可用
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
        ChatModel chatModel = new OpenAiChatModel(openAiApi, options);
        return chatModel;
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
        return new OpenAiChatModel(openAiApi, options);
    }
}
