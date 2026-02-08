package getjobs.common.infrastructure.auth;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.lang.NonNull;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

/**
 * 认证拦截器配置类
 * <p>
 * 负责注册 {@link AuthInterceptor} 并配置拦截路径。
 * 可以通过配置文件自定义拦截规则。
 * </p>
 *
 * <h2>配置示例</h2>
 * 
 * <pre>{@code
 * # 启用认证拦截器（默认启用）
 * auth:
 *   interceptor:
 *     enabled: true
 *     # 需要认证的路径（Ant 路径模式）
 *     include-patterns:
 *       - /api/**
 *     # 排除的路径（Ant 路径模式）
 *     exclude-patterns:
 *       - /api/auth/login
 *       - /api/auth/register
 *       - /actuator/**
 *       - /error
 * }</pre>
 *
 * <h2>默认配置</h2>
 * <ul>
 * <li><b>包含路径</b>：/api/**（所有 API 接口）</li>
 * <li><b>排除路径</b>：
 * <ul>
 * <li>/api/auth/**（认证相关接口）</li>
 * <li>/actuator/**（健康检查等监控端点）</li>
 * <li>/error（错误处理端点）</li>
 * <li>/favicon.ico（网站图标）</li>
 * </ul>
 * </li>
 * </ul>
 *
 * @author getjobs
 * @since 2025-01-XX
 */
@Slf4j
@Configuration
@RequiredArgsConstructor
@EnableConfigurationProperties(AuthInterceptorProperties.class)
@ConditionalOnProperty(prefix = "auth.interceptor", name = "enabled", havingValue = "true", matchIfMissing = true // 默认启用
)
public class AuthInterceptorConfig implements WebMvcConfigurer {

    private final AuthInterceptor authInterceptor;
    private final AuthInterceptorProperties properties;

    @Override
    public void addInterceptors(@NonNull InterceptorRegistry registry) {
        registry.addInterceptor(authInterceptor)
                .addPathPatterns(getIncludePatterns())
                .excludePathPatterns(getExcludePatterns());

        log.info("═══════════════════════════════════════════════════════════");
        log.info("        认证拦截器配置完成");
        log.info("═══════════════════════════════════════════════════════════");
        log.info("包含路径:");
        getIncludePatterns().forEach(pattern -> log.info("  ✓ {}", pattern));
        log.info("排除路径:");
        getExcludePatterns().forEach(pattern -> log.info("  ✗ {}", pattern));
        log.info("自动刷新: {}", properties.isAutoRefreshEnabled() ? "✓ 已启用（混合方案后端兜底）" : "✗ 已禁用");
        log.info("═══════════════════════════════════════════════════════════");
    }

    /**
     * 获取需要拦截的路径模式
     * <p>
     * 从配置文件中读取，如果未配置则使用默认值
     * </p>
     *
     * @return 路径模式列表
     */
    private List<String> getIncludePatterns() {
        return properties.getIncludePatterns();
    }

    /**
     * 获取需要排除的路径模式
     * <p>
     * 从配置文件中读取，如果未配置则使用默认值
     * </p>
     *
     * @return 路径模式列表
     */
    private List<String> getExcludePatterns() {
        return properties.getExcludePatterns();
    }

    @PostConstruct
    public void init() {
        log.info("认证拦截器配置初始化完成");
    }
}
