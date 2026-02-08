package getjobs.modules.integration.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

/**
 * 第三方接口集成配置
 * 支持动态刷新配置
 */
@Data
@Component
@RefreshScope
@ConfigurationProperties(prefix = "integration")
public class IntegrationProperties {

    /**
     * 是否启用第三方接口调用
     */
    private Boolean enabled = true;

    /**
     * 全局超时时间（毫秒）
     */
    private Integer timeout = 30000;

    /**
     * 全局重试次数
     */
    private Integer retryTimes = 3;

    /**
     * 第三方服务配置
     * key: 服务名称
     * value: 服务配置
     */
    private Map<String, ThirdPartyServiceConfig> services = new HashMap<>();

    @Data
    public static class ThirdPartyServiceConfig {
        /**
         * 服务名称
         */
        private String name;

        /**
         * 基础URL
         */
        private String baseUrl;

        /**
         * API Key
         */
        private String apiKey;

        /**
         * Secret Key
         */
        private String secretKey;

        /**
         * 超时时间（毫秒）
         */
        private Integer timeout;

        /**
         * 重试次数
         */
        private Integer retryTimes;

        /**
         * 是否启用
         */
        private Boolean enabled = true;

        /**
         * 额外配置
         */
        private Map<String, String> extra = new HashMap<>();
    }
}
