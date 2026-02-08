package getjobs.common.infrastructure.webclient;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * 代理配置属性
 * <p>
 * 通过 application.yml 中的 proxy.* 进行配置：
 * </p>
 *
 * <pre>{@code
 * proxy:
 *   host: 127.0.0.1  # 代理主机（可选）
 *   port: 7890       # 代理端口（可选）
 * }</pre>
 *
 * @author getjobs
 * @since 2025-12-06
 */
@Data
@ConfigurationProperties(prefix = "proxy")
public class ProxyProperties {

    /**
     * 代理主机
     * <p>
     * 默认值：空字符串（不使用代理）
     * </p>
     */
    private String host = "";

    /**
     * 代理端口
     * <p>
     * 默认值：0（不使用代理）
     * </p>
     */
    private int port = 0;

    /**
     * 检查是否配置了代理
     *
     * @return 如果配置了代理返回 true，否则返回 false
     */
    public boolean isConfigured() {
        return host != null && !host.isEmpty() && port > 0;
    }
}
