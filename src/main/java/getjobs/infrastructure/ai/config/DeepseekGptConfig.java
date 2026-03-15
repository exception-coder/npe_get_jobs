package getjobs.infrastructure.ai.config;

import getjobs.infrastructure.ai.enums.AiPlatform;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.model.StreamingChatModel;
import org.springframework.ai.openai.OpenAiChatModel;
import org.springframework.ai.openai.api.OpenAiApi;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

/**
 * GPT配置类（Deepseek）
 * 使用 @RefreshScope 支持动态配置刷新
 *
 * 注意：@RefreshScope 必须同时标注在 Configuration 类和 Bean 方法上
 * - Configuration 类上的 @RefreshScope：确保 @Value 字段在刷新时重新绑定
 * - Bean 方法上的 @RefreshScope：确保 Bean 实例在刷新时重新创建
 *
 * <p>HTTP 客户端由 {@link DeepseekApiHttpClientConfig} 单独配置并注入，便于维护与扩展（代理、超时、wiretap 等）。
 * </p>
 */
@Slf4j
@Configuration
@RefreshScope
public class DeepseekGptConfig {

        private final WebClient.Builder deepseekApiWebClientBuilder;
        private final org.springframework.web.client.RestClient.Builder deepseekApiRestClientBuilder;

        public DeepseekGptConfig(
                        @Qualifier("deepseekApiWebClientBuilder") WebClient.Builder deepseekApiWebClientBuilder,
                        @Qualifier("deepseekApiRestClientBuilder") org.springframework.web.client.RestClient.Builder deepseekApiRestClientBuilder) {
                this.deepseekApiWebClientBuilder = deepseekApiWebClientBuilder;
                this.deepseekApiRestClientBuilder = deepseekApiRestClientBuilder;
        }

        @Value("${spring.ai.deepseek.api-key}")
        private String apiKey;

        @Value("${spring.ai.deepseek.base-url:https://api.deepseek.com}")
        private String baseUrl;

        @Value("${spring.ai.deepseek.chat.options.model}")
        private String model;

        @Value("${spring.ai.deepseek.chat.options.temperature:0.7}")
        private Double temperature;

        @Value("${spring.ai.deepseek.chat.options.max-tokens:2000}")
        private Integer maxTokens;

        @Value("${spring.ai.deepseek.chat.options.enable-search:true}")
        private Boolean enableSearch;

        /**
         * 配置OpenAiApi
         *
         * @RefreshScope 使该 Bean 支持动态刷新
         */
        @Bean
        @RefreshScope
        public OpenAiApi deepseekAiApi() {
                return OpenAiApi.builder()
                                .apiKey(apiKey)
                                .baseUrl(baseUrl)
                                .build();
        }

        /**
         * 配置ChatModel
         *
         * @RefreshScope 确保配置更新后，该 Bean 会重新创建并读取最新配置
         *
         *               注意：不通过参数注入 deepseekAiApi，而是每次重新创建，
         *               因为 @RefreshScope Bean 之间的依赖注入不会触发级联更新
         */
        @Bean(AiPlatform.DEEPSEEK_BEAN_NAME)
        @RefreshScope
        public ChatModel deepseekChatModel() {
                OpenAiApi api = buildDeepseekOpenAiApi();
                DeepseekChatOptions options = DeepseekChatOptions.deepseekBuilder()
                                .model(model)
                                .temperature(temperature)
                                .maxTokens(maxTokens)
                                .enableSearch(Boolean.TRUE.equals(enableSearch))
                                .build();
                return OpenAiChatModel.builder()
                                .openAiApi(api)
                                .defaultOptions(options)
                                .build();
        }

        /**
         * 配置StreamingChatModel
         *
         * @RefreshScope 确保配置更新后，该 Bean 会重新创建并读取最新配置
         */
        @Bean("deepseekStreamingChatModel")
        @RefreshScope
        public StreamingChatModel deepseekStreamingChatModel() {
                OpenAiApi api = buildDeepseekOpenAiApi();
                DeepseekChatOptions options = DeepseekChatOptions.deepseekBuilder()
                                .model(model)
                                .temperature(temperature)
                                .maxTokens(maxTokens)
                                .enableSearch(Boolean.TRUE.equals(enableSearch))
                                .build();
                return OpenAiChatModel.builder()
                                .openAiApi(api)
                                .defaultOptions(options)
                                .build();
        }

        /**
         * 使用单独配置的 WebClient.Builder（{@link DeepseekApiHttpClientConfig}）构建 OpenAiApi，
         * 便于统一维护代理、超时、wiretap 等 HTTP 行为。
         */
        private OpenAiApi buildDeepseekOpenAiApi() {
                return OpenAiApi.builder()
                                .apiKey(apiKey)
                                .baseUrl(baseUrl)
                                .restClientBuilder(deepseekApiRestClientBuilder)
                                .webClientBuilder(deepseekApiWebClientBuilder.clone())
                                .build();
        }
}
