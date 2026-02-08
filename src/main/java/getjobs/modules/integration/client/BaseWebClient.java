package getjobs.modules.integration.client;

import getjobs.modules.integration.dto.ApiResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.ClientRequest;
import org.springframework.web.reactive.function.client.ExchangeFilterFunction;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import reactor.util.retry.Retry;

import java.time.Duration;
import java.util.Map;
import java.util.function.Consumer;

/**
 * 基于 WebClient 的第三方API客户端基类
 * 提供响应式的HTTP请求方法和错误处理
 */
@Slf4j
public abstract class BaseWebClient {

    protected final WebClient webClient;
    protected final String baseUrl;
    protected final Integer retryTimes;

    /**
     * 构造函数
     * 
     * @param webClientBuilder WebClient构建器
     * @param baseUrl          基础URL
     * @param retryTimes       重试次数
     */
    public BaseWebClient(WebClient.Builder webClientBuilder, String baseUrl, Integer retryTimes) {
        this.baseUrl = baseUrl;
        this.retryTimes = retryTimes;
        // 使用 clone() 避免污染全局的 WebClient Builder
        WebClient.Builder safeBuilder = webClientBuilder.clone();
        this.webClient = safeBuilder
                .baseUrl(baseUrl)
                .filter(logRequest())
                .filter(logResponse())
                .build();

    }

    /**
     * 构造函数 - 支持自定义配置
     * 
     * @param webClientBuilder WebClient构建器
     * @param baseUrl          基础URL
     * @param retryTimes       重试次数
     * @param customizer       自定义配置
     */
    public BaseWebClient(
            WebClient.Builder webClientBuilder,
            String baseUrl,
            Integer retryTimes,
            Consumer<WebClient.Builder> customizer) {
        this.baseUrl = baseUrl;
        this.retryTimes = retryTimes;

        // 使用 clone() 避免污染全局的 WebClient Builder
        WebClient.Builder safeBuilder = webClientBuilder.clone();
        safeBuilder
                .baseUrl(baseUrl)
                .filter(logRequest())
                .filter(logResponse());

        // 应用自定义配置
        if (customizer != null) {
            customizer.accept(safeBuilder);
        }

        this.webClient = safeBuilder.build();
    }

    /**
     * GET 请求
     */
    protected <T> Mono<ApiResponse<T>> doGet(String path, Map<String, String> params, Class<T> responseType) {
        WebClient.RequestHeadersUriSpec<?> spec = webClient.get();

        String uri = buildUri(path, params);

        return spec.uri(uri)
                .retrieve()
                .bodyToMono(responseType)
                .map(ApiResponse::success)
                .retryWhen(createRetryStrategy())
                .onErrorResume(e -> {
                    log.error("GET请求失败: {}", uri, e);
                    return Mono.just(ApiResponse.error("请求失败: " + e.getMessage()));
                });
    }

    /**
     * POST 请求 - JSON Body
     */
    protected <T> Mono<ApiResponse<T>> doPost(String path, Object requestBody, Class<T> responseType) {
        return webClient.post()
                .uri(path)
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(requestBody)
                .retrieve()
                .bodyToMono(responseType)
                .map(ApiResponse::success)
                .retryWhen(createRetryStrategy())
                .onErrorResume(e -> {
                    log.error("POST请求失败: {}", path, e);
                    return Mono.just(ApiResponse.error("请求失败: " + e.getMessage()));
                });
    }

    /**
     * POST 请求 - Form Data
     */
    protected <T> Mono<ApiResponse<T>> doPostForm(String path, Map<String, String> formData, Class<T> responseType) {
        BodyInserters.FormInserter<String> formInserter = BodyInserters.fromFormData(
                formData.entrySet().iterator().next().getKey(),
                formData.entrySet().iterator().next().getValue());

        // 添加其余的表单数据
        formData.entrySet().stream().skip(1).forEach(entry -> formInserter.with(entry.getKey(), entry.getValue()));

        return webClient.post()
                .uri(path)
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .body(formInserter)
                .retrieve()
                .bodyToMono(responseType)
                .map(ApiResponse::success)
                .retryWhen(createRetryStrategy())
                .onErrorResume(e -> {
                    log.error("POST Form请求失败: {}", path, e);
                    return Mono.just(ApiResponse.error("请求失败: " + e.getMessage()));
                });
    }

    /**
     * PUT 请求
     */
    protected <T> Mono<ApiResponse<T>> doPut(String path, Object requestBody, Class<T> responseType) {
        return webClient.put()
                .uri(path)
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(requestBody)
                .retrieve()
                .bodyToMono(responseType)
                .map(ApiResponse::success)
                .retryWhen(createRetryStrategy())
                .onErrorResume(e -> {
                    log.error("PUT请求失败: {}", path, e);
                    return Mono.just(ApiResponse.error("请求失败: " + e.getMessage()));
                });
    }

    /**
     * DELETE 请求
     */
    protected <T> Mono<ApiResponse<T>> doDelete(String path, Class<T> responseType) {
        return webClient.delete()
                .uri(path)
                .retrieve()
                .bodyToMono(responseType)
                .map(ApiResponse::success)
                .retryWhen(createRetryStrategy())
                .onErrorResume(e -> {
                    log.error("DELETE请求失败: {}", path, e);
                    return Mono.just(ApiResponse.error("请求失败: " + e.getMessage()));
                });
    }

    /**
     * 构建重试策略
     * 只重试服务器错误（5xx）和网络错误，不重试客户端错误（4xx）和重定向错误（3xx）
     */
    protected Retry createRetryStrategy() {
        return Retry.fixedDelay(retryTimes, Duration.ofSeconds(1))
                .filter(throwable -> {
                    // 不重试客户端错误（4xx）和重定向错误（3xx）
                    if (throwable instanceof org.springframework.web.reactive.function.client.WebClientResponseException) {
                        org.springframework.web.reactive.function.client.WebClientResponseException ex = (org.springframework.web.reactive.function.client.WebClientResponseException) throwable;
                        int statusCode = ex.getStatusCode().value();
                        // 只重试5xx服务器错误和网络错误（statusCode == 0）
                        return statusCode >= 500 || statusCode == 0;
                    }
                    // 网络错误可以重试
                    return true;
                });
    }

    /**
     * 构建URI
     */
    protected String buildUri(String path, Map<String, String> params) {
        if (params == null || params.isEmpty()) {
            return path;
        }

        StringBuilder uri = new StringBuilder(path);
        uri.append("?");
        params.forEach((key, value) -> uri.append(key).append("=").append(value).append("&"));
        uri.deleteCharAt(uri.length() - 1);

        return uri.toString();
    }

    /**
     * 请求日志过滤器
     */
    protected ExchangeFilterFunction logRequest() {
        return ExchangeFilterFunction.ofRequestProcessor(clientRequest -> {
            log.info("Request: {} {}", clientRequest.method(), clientRequest.url());
            // 在DEBUG级别记录调用栈，帮助追踪请求来源
            if (log.isDebugEnabled()) {
                StackTraceElement[] stackTrace = Thread.currentThread().getStackTrace();
                log.debug("Request call stack (top 5):");
                for (int i = 0; i < Math.min(5, stackTrace.length); i++) {
                    log.debug("  at {}", stackTrace[i]);
                }
            }
            clientRequest.headers()
                    .forEach((name, values) -> values.forEach(value -> log.debug("{}: {}", name, value)));
            return Mono.just(clientRequest);
        });
    }

    /**
     * 响应日志过滤器
     */
    protected ExchangeFilterFunction logResponse() {
        return ExchangeFilterFunction.ofResponseProcessor(clientResponse -> {
            log.info("Response: {}", clientResponse.statusCode());
            clientResponse.headers().asHttpHeaders()
                    .forEach((name, values) -> values.forEach(value -> log.debug("{}: {}", name, value)));
            return Mono.just(clientResponse);
        });
    }

    /**
     * 添加自定义过滤器（子类可以重写）
     */
    protected ExchangeFilterFunction addCustomFilters() {
        return ExchangeFilterFunction.ofRequestProcessor(clientRequest -> {
            ClientRequest.Builder requestBuilder = ClientRequest.from(clientRequest);
            return Mono.just(requestBuilder.build());
        });
    }
}
