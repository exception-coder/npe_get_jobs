package getjobs.infrastructure.ai.config;

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

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import java.io.IOException;
import java.net.URI;
import java.nio.charset.StandardCharsets;

/**
 * Deepseek API 专用 HTTP 客户端配置。
 * <p>
 * 单独定义便于后期维护与扩展：代理、超时、SSL、请求/响应日志（wiretap）等均可在此统一配置。
 * </p>
 * <p>
 * 启用完整 HTTP 请求/响应日志（含 body）：在 application.yml 中设置
 * {@code logging.level.DeepseekApiHttp=DEBUG}。
 * </p>
 */
@Slf4j
@Configuration
public class DeepseekApiHttpClientConfig {

    /** wiretap / 拦截器使用的 logger 名，设为 DEBUG 可打印完整 HTTP 请求/响应（含 body） */
    public static final String DEEPSEEK_HTTP_LOGGER = "DeepseekApiHttp";

    private static final Logger HTTP_LOG = LoggerFactory.getLogger(DEEPSEEK_HTTP_LOGGER);

    /**
     * 供 Deepseek OpenAiApi 使用的 WebClient.Builder。
     * 当前包含 wiretap 便于 debug；后续可在此统一增加代理、超时等。
     */
    @Bean(name = "deepseekApiWebClientBuilder")
    public WebClient.Builder deepseekApiWebClientBuilder() {
        // wiretap：将请求/响应数据复制到指定 logger
        // - LogLevel.DEBUG：wiretap 的触发级别，需在 yml 中设置 logging.level.DeepseekApiHttp=DEBUG 才会实际输出
        // - AdvancedByteBufFormat.TEXTUAL：内容以可读文本格式输出（而非十六进制），便于查看 JSON 请求体/响应体
        HttpClient httpClient = HttpClient.create()
                .wiretap(DEEPSEEK_HTTP_LOGGER, LogLevel.DEBUG, AdvancedByteBufFormat.TEXTUAL);
        WebClient.Builder builder = WebClient.builder()
                .clientConnector(new ReactorClientHttpConnector(httpClient));
        log.debug("Deepseek API WebClient.Builder 已创建（含 wiretap，logger={}）", DEEPSEEK_HTTP_LOGGER);
        return builder;
    }

    /**
     * 供 Deepseek OpenAiApi 同步调用（RestClient）使用的 Builder。
     * 包含请求/响应日志拦截器，与 wiretap 使用同一 logger（{@code DeepseekApiHttp}）。
     * 启用日志：在 application.yml 中设置 {@code logging.level.DeepseekApiHttp=DEBUG}。
     */
    @Bean(name = "deepseekApiRestClientBuilder")
    public RestClient.Builder deepseekApiRestClientBuilder() {
        RestClient.Builder builder = RestClient.builder()
                .requestInterceptor(new DeepseekHttpLoggingInterceptor());
        log.debug("Deepseek API RestClient.Builder 已创建（含日志拦截器，logger={}）", DEEPSEEK_HTTP_LOGGER);
        return builder;
    }

    /**
     * 拦截器：注入 enable_search 并打印请求日志。
     * Spring AI 的 OpenAI 兼容层不会序列化子类扩展字段，因此在 body 发出前通过 Jackson 注入该字段。
     * 注意：修改 body 后必须同步更新 Content-Length，否则服务端按旧长度截断读取导致 JSON EOF 错误。
     */
    private static class DeepseekHttpLoggingInterceptor implements ClientHttpRequestInterceptor {

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

        /**
         * 若 body 是 JSON object 且不含 enable_search，通过 Jackson 注入 enable_search:true。
         */
        private static byte[] injectEnableSearch(byte[] body) throws IOException {
            if (body == null || body.length == 0) return body;
            JsonNode node = MAPPER.readTree(body);
            if (!node.isObject() || node.has("enable_search")) return body;
            ((ObjectNode) node).put("enable_search", true);
            return MAPPER.writeValueAsBytes(node);
        }
    }

    /** 覆盖 Content-Length header，使其与修改后的 body 长度一致。 */
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
