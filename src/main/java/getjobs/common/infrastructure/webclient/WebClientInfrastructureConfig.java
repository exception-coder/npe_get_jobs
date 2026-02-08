package getjobs.common.infrastructure.webclient;

import io.netty.handler.ssl.SslContextBuilder;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.netty.http.client.HttpClient;
import reactor.netty.transport.ProxyProvider;

import java.time.Duration;

/**
 * WebClient 基础设施配置
 * <p>
 * 提供全局的 WebClient.Builder 基础配置，供各个模块使用。
 * 包含代理、SSL、超时等通用配置。
 * </p>
 *
 * <h2>配置说明</h2>
 * 
 * <pre>{@code
 * # 代理配置（可选）
 * proxy:
 *   host: 127.0.0.1
 *   port: 7890
 * 
 * # WebClient 基础配置
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
@Slf4j
@Configuration
@RequiredArgsConstructor
@EnableConfigurationProperties({ WebClientProperties.class, ProxyProperties.class })
public class WebClientInfrastructureConfig {

    private final WebClientProperties webClientProperties;
    private final ProxyProperties proxyProperties;

    /**
     * 创建基础的 WebClient.Builder
     * <p>
     * 提供全局的基础配置，包括：
     * - 代理配置（如果配置了）
     * - SSL/TLS 配置
     * - 超时配置
     * - 重定向配置
     * - 压缩配置
     * </p>
     *
     * @return WebClient.Builder 实例
     */
    @Bean(name = "webClientBuilder")
    public WebClient.Builder webClientBuilder() {
        HttpClient httpClient = createHttpClient();

        WebClient.Builder builder = WebClient.builder()
                .clientConnector(new ReactorClientHttpConnector(httpClient));

        log.info("WebClient 基础设施配置已初始化");
        log.debug("响应超时: {}ms, 连接超时: {}ms, 读取超时: {}s, 写入超时: {}s",
                webClientProperties.getResponseTimeout(),
                webClientProperties.getConnectTimeout(),
                webClientProperties.getReadTimeout(),
                webClientProperties.getWriteTimeout());
        log.debug("跟随重定向: {}, 压缩: {}", webClientProperties.isFollowRedirect(), webClientProperties.isCompress());

        return builder;
    }

    /**
     * 使用 WebClient 默认 HttpClient 的构造器
     * <p>
     * 便于与自定义 HttpClient（代理/超时/SSL 设置）进行对比排查。
     * 不做任何 Reactor Netty 自定义配置，直接返回原生 WebClient.builder()。
     * </p>
     */
    @Bean(name = "webClientBuilderDefault")
    @Primary
    public WebClient.Builder webClientBuilderDefault() {
        log.info("WebClient 默认配置已初始化（未使用自定义 HttpClient）");
        return WebClient.builder();
    }

    /**
     * 创建 HttpClient
     * <p>
     * 根据配置创建 HttpClient，包括代理、SSL、超时等配置。
     * </p>
     *
     * @return HttpClient 实例
     */
    private HttpClient createHttpClient() {
        HttpClient httpClient = HttpClient.create();

        // 配置代理（如果配置了）
        if (proxyProperties.isConfigured()) {
            log.info("WebClient 使用代理: {}:{}", proxyProperties.getHost(), proxyProperties.getPort());
            httpClient = httpClient.proxy(proxy -> proxy
                    .type(ProxyProvider.Proxy.HTTP)
                    .host(proxyProperties.getHost())
                    .port(proxyProperties.getPort()));
        }

        // 配置超时
        httpClient = httpClient
                .responseTimeout(Duration.ofMillis(webClientProperties.getResponseTimeout()))
                .option(io.netty.channel.ChannelOption.CONNECT_TIMEOUT_MILLIS, webClientProperties.getConnectTimeout())
                .option(io.netty.channel.ChannelOption.SO_KEEPALIVE, true)
                .doOnConnected(conn -> {
                    conn.addHandlerLast(
                            new io.netty.handler.timeout.ReadTimeoutHandler(webClientProperties.getReadTimeout()));
                    conn.addHandlerLast(
                            new io.netty.handler.timeout.WriteTimeoutHandler(webClientProperties.getWriteTimeout()));
                });

        // 配置重定向
        if (webClientProperties.isFollowRedirect()) {
            httpClient = httpClient.followRedirect(true);
        }

        // 配置压缩
        if (webClientProperties.isCompress()) {
            httpClient = httpClient.compress(true);
        }

        // 配置 SSL/TLS
        try {
            httpClient = httpClient.secure(ssl -> {
                try {
                    ssl.sslContext(SslContextBuilder.forClient()
                            .protocols("TLSv1.3", "TLSv1.2")
                            .build());
                } catch (Exception e) {
                    log.warn("SSL 上下文构建失败: {}", e.getMessage());
                }
            });
        } catch (Exception e) {
            log.warn("SSL 配置失败，将使用默认配置: {}", e.getMessage());
        }

        return httpClient;
    }
}
