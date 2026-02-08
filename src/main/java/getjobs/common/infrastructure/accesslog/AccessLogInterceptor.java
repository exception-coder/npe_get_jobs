package getjobs.common.infrastructure.accesslog;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

/**
 * Access 日志拦截器
 * <p>
 * 负责捕获 HTTP 请求信息，并记录到 {@link AccessLogService}。
 * </p>
 *
 * <h2>记录内容</h2>
 * <ul>
 * <li>客户端 IP 地址</li>
 * <li>请求方法（GET、POST、PUT、DELETE 等）</li>
 * <li>请求路径</li>
 * </ul>
 *
 * <h2>处理流程</h2>
 * <ol>
 * <li>从请求中提取客户端 IP 地址</li>
 * <li>获取请求方法和路径</li>
 * <li>调用 {@link AccessLogService#recordRequest(String, String, String)} 记录请求</li>
 * <li>继续处理请求（不会中断请求流程）</li>
 * </ol>
 *
 * @author getjobs
 * @since 2025-01-XX
 */
@Slf4j
@Component
@RequiredArgsConstructor
public class AccessLogInterceptor implements HandlerInterceptor {

    private final AccessLogService accessLogService;

    @Override
    public boolean preHandle(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull Object handler) {

        try {
            // 1. 获取客户端 IP 地址
            String clientIp = getClientIp(request);

            // 2. 获取请求方法和路径
            String method = request.getMethod();
            String path = request.getRequestURI();

            // 3. 记录请求
            accessLogService.recordRequest(clientIp, method, path);

        } catch (Exception e) {
            // 记录请求失败不应该影响正常请求处理
            log.error("记录 Access 日志失败: {}", e.getMessage(), e);
        }

        // 继续处理请求
        return true;
    }

    /**
     * 获取客户端 IP 地址
     * <p>
     * 支持从以下请求头获取：
     * <ol>
     * <li>X-Forwarded-For（代理服务器转发）</li>
     * <li>X-Real-IP（Nginx 等反向代理）</li>
     * <li>Proxy-Client-IP（代理客户端 IP）</li>
     * <li>WL-Proxy-Client-IP（WebLogic 代理）</li>
     * <li>request.getRemoteAddr()（直接连接）</li>
     * </ol>
     * </p>
     *
     * @param request HTTP 请求
     * @return 客户端 IP 地址
     */
    private String getClientIp(HttpServletRequest request) {
        String ip = request.getHeader("X-Forwarded-For");
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("X-Real-IP");
        }
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("Proxy-Client-IP");
        }
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
        }
        // 处理 X-Forwarded-For 可能包含多个 IP 的情况（取第一个）
        if (ip != null && ip.contains(",")) {
            ip = ip.split(",")[0].trim();
        }
        return ip;
    }
}

