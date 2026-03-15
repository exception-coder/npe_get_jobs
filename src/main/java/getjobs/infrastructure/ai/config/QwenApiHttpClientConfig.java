package getjobs.infrastructure.ai.config;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import io.netty.handler.logging.LogLevel;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpRequest;
import org.springframework.http.client.ClientHttpRequestExecution;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.web.client.RestClient;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.netty.http.client.HttpClient;
import reactor.netty.transport.logging.AdvancedByteBufFormat;

import java.io.IOException;
import java.net.URI;
import java.nio.charset.StandardCharsets;

/**
 * 阿里云千问 API 专用 HTTP 客户端配置。
 * <p>
 * 千问 enable_search 与 Deepseek 相同，Spring AI OpenAI 兼容层不序列化子类扩展字段，
 * 通过 RestClient 拦截器在请求体发出前注入该参数。
 * </p>
 * <p>
 * 启用请求日志：在 application.yml 中设置 {@code logging.level.QwenApiHttp=DEBUG}。
 * </p>
 */
@Slf4j
@Configuration
public class QwenApiHttpClientConfig {

    public static final String QWEN_HTTP_LOGGER = "QwenApiHttp";

    private static final Logger HTTP_LOG = LoggerFactory.getLogger(QWEN_HTTP_LOGGER);

    @Bean(name = "qwenApiWebClientBuilder")
    public WebClient.Builder qwenApiWebClientBuilder() {
        HttpClient httpClient = HttpClient.create()
                .wiretap(QWEN_HTTP_LOGGER, LogLevel.DEBUG, AdvancedByteBufFormat.TEXTUAL);
        WebClient.Builder builder = WebClient.builder()
                .clientConnector(new ReactorClientHttpConnector(httpClient));
        log.debug("Qwen API WebClient.Builder 已创建（含 wiretap，logger={}）", QWEN_HTTP_LOGGER);
        return builder;
    }

    @Bean(name = "qwenApiRestClientBuilder")
    public RestClient.Builder qwenApiRestClientBuilder() {
        RestClient.Builder builder = RestClient.builder()
                .requestInterceptor(new QwenHttpLoggingInterceptor());
        log.debug("Qwen API RestClient.Builder 已创建（含日志拦截器，logger={}）", QWEN_HTTP_LOGGER);
        return builder;
    }

    /**
     * 拦截器：注入 enable_search 并打印请求日志。
     * 修改 body 后同步更新 Content-Length，避免服务端截断读取。
     */
    private static class QwenHttpLoggingInterceptor implements ClientHttpRequestInterceptor {

        private static final ObjectMapper MAPPER = new ObjectMapper();

        @Override
        public ClientHttpResponse intercept(HttpRequest request, byte[] body,
                                            ClientHttpRequestExecution execution) throws IOException {
            body = injectEnableSearch(body);
            if (HTTP_LOG.isDebugEnabled()) {
                HTTP_LOG.debug("--> {} {}\nBody: {}",
                        request.getMethod(), request.getURI(),
                        new String(body, StandardCharsets.UTF_8));
            }
            return execution.execute(new ContentLengthOverridingRequest(request, body.length), body);
        }

        private static byte[] injectEnableSearch(byte[] body) throws IOException {
            if (body == null || body.length == 0) return body;
            JsonNode node = MAPPER.readTree(body);
            if (!node.isObject() || node.has("enable_search")) return body;
            ((ObjectNode) node).put("enable_search", true);
            return MAPPER.writeValueAsBytes(node);
        }
    }

    private static class ContentLengthOverridingRequest implements HttpRequest {
        private final HttpRequest delegate;
        private final HttpHeaders headers;

        ContentLengthOverridingRequest(HttpRequest delegate, int contentLength) {
            this.delegate = delegate;
            this.headers = new HttpHeaders();
            this.headers.addAll(delegate.getHeaders());
            this.headers.setContentLength(contentLength);
        }

        @Override public HttpMethod getMethod() { return delegate.getMethod(); }
        @Override public URI getURI() { return delegate.getURI(); }
        @Override public HttpHeaders getHeaders() { return headers; }
    }
}
