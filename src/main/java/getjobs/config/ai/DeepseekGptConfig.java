package getjobs.config.ai;

import getjobs.modules.ai.common.enums.AiPlatform;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.model.StreamingChatModel;
import org.springframework.ai.openai.OpenAiChatModel;
import org.springframework.ai.openai.OpenAiChatOptions;
import org.springframework.ai.openai.api.OpenAiApi;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * GPT配置类
 * 使用 @RefreshScope 支持动态配置刷新
 * 
 * 注意：@RefreshScope 必须同时标注在 Configuration 类和 Bean 方法上
 * - Configuration 类上的 @RefreshScope：确保 @Value 字段在刷新时重新绑定
 * - Bean 方法上的 @RefreshScope：确保 Bean 实例在刷新时重新创建
 */
@Configuration
@RefreshScope
public class DeepseekGptConfig {

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
        // 每次重新创建 OpenAiApi，确保使用最新配置
        OpenAiApi api = OpenAiApi.builder()
                .apiKey(apiKey)
                .baseUrl(baseUrl)
                .build();

        OpenAiChatOptions options = OpenAiChatOptions.builder()
                .model(model)
                .temperature(temperature)
                .maxTokens(maxTokens)
                .build();

        return new OpenAiChatModel(api, options);
    }

    /**
     * 配置StreamingChatModel
     * 
     * @RefreshScope 确保配置更新后，该 Bean 会重新创建并读取最新配置
     * 
     *               注意：不通过参数注入 deepseekAiApi，而是每次重新创建，
     *               因为 @RefreshScope Bean 之间的依赖注入不会触发级联更新
     */
    @Bean("deepseekStreamingChatModel")
    @RefreshScope
    @SuppressWarnings("deprecation")
    public StreamingChatModel deepseekStreamingChatModel() {
        // 每次重新创建 OpenAiApi，确保使用最新配置
        OpenAiApi api = OpenAiApi.builder()
                .apiKey(apiKey)
                .baseUrl(baseUrl)
                .build();

        OpenAiChatOptions options = OpenAiChatOptions.builder()
                .model(model)
                .temperature(temperature)
                .maxTokens(maxTokens)
                .build();

        return new OpenAiChatModel(api, options);
    }
}
