package getjobs.common.infrastructure.webclient;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * WebClient 配置属性
 * <p>
 * 通过 application.yml 中的 webclient.* 进行配置：
 * </p>
 *
 * <pre>{@code
 * webclient:
 *   response-timeout: 30000  # 响应超时（毫秒）
 *   connect-timeout: 2000    # 连接超时（毫秒）
 *   read-timeout: 30         # 读取超时（秒）
 *   write-timeout: 30        # 写入超时（秒）
 *   follow-redirect: true    # 是否跟随重定向
 *   compress: true           # 是否启用压缩
 * }</pre>
 *
 * @author getjobs
 * @since 2025-12-06
 */
@Data
@ConfigurationProperties(prefix = "webclient")
public class WebClientProperties {

    /**
     * 响应超时时间（毫秒）
     * <p>
     * 默认值：30000（30秒）
     * </p>
     */
    private long responseTimeout = 30000;

    /**
     * 连接超时时间（毫秒）
     * <p>
     * 默认值：2000（2秒）
     * </p>
     */
    private int connectTimeout = 2000;

    /**
     * 读取超时时间（秒）
     * <p>
     * 默认值：30
     * </p>
     */
    private int readTimeout = 30;

    /**
     * 写入超时时间（秒）
     * <p>
     * 默认值：30
     * </p>
     */
    private int writeTimeout = 30;

    /**
     * 是否跟随重定向
     * <p>
     * 默认值：true
     * </p>
     */
    private boolean followRedirect = true;

    /**
     * 是否启用压缩
     * <p>
     * 默认值：true
     * </p>
     */
    private boolean compress = true;
}
