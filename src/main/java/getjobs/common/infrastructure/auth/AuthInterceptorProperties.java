package getjobs.common.infrastructure.auth;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * 认证拦截器配置属性
 * <p>
 * 通过 application.yml 中的 auth.interceptor.* 进行配置：
 * </p>
 *
 * <pre>{@code
 * auth:
 *   interceptor:
 *     enabled: true                    # 是否启用（默认 true）
 *     include-patterns:                 # 需要拦截的路径（Ant 路径模式）
 *       - /api/**
 *     exclude-patterns:                # 排除的路径（Ant 路径模式）
 *       - /api/auth/**
 *       - /actuator/**
 *       - /error
 *       - /favicon.ico
 *     token-cookie-name: token         # Cookie 中的 Token 名称（默认 token）
 * }</pre>
 *
 * @author getjobs
 * @since 2025-01-XX
 */
@Data
@ConfigurationProperties(prefix = "auth.interceptor")
public class AuthInterceptorProperties {

    /**
     * 是否启用认证拦截器
     * <p>
     * 默认值：true
     * </p>
     */
    private boolean enabled = true;

    /**
     * 需要拦截的路径模式列表（Ant 路径模式）
     * <p>
     * 默认值：["/api/**"]
     * </p>
     */
    private List<String> includePatterns = new ArrayList<>(Arrays.asList("/api/**"));

    /**
     * 排除的路径模式列表（Ant 路径模式）
     * <p>
     * 默认值：["/api/auth/**", "/actuator/**", "/error", "/favicon.ico"]
     * </p>
     */
    private List<String> excludePatterns = new ArrayList<>(Arrays.asList(
            "/api/auth/**", // 认证相关接口
            "/actuator/**", // Spring Boot Actuator 端点
            "/error", // 错误处理端点
            "/favicon.ico" // 网站图标
    ));

    /**
     * Cookie 中的 Token 名称
     * <p>
     * 默认值：token
     * </p>
     */
    private String tokenCookieName = "token";

    /**
     * 是否启用自动刷新 Token（混合方案的后端兜底）
     * <p>
     * 当 Access Token 过期时，如果前端未刷新，后端会自动尝试刷新。
     * 默认值：true（启用，作为兜底方案）
     * </p>
     */
    private boolean autoRefreshEnabled = true;
}
