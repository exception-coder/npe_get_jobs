package getjobs.common.infrastructure.accesslog;

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
 * Access 日志配置类
 * <p>
 * 负责注册 {@link AccessLogInterceptor} 并配置拦截路径。
 * 可以通过配置文件自定义拦截规则。
 * </p>
 *
 * <h2>配置示例</h2>
 * 
 * <pre>{@code
 * # 启用 Access 日志（默认启用）
 * access:
 *   log:
 *     enabled: true
 *     # 需要记录的路径（Ant 路径模式）
 *     include-patterns:
 *       - /api/**
 *     # 排除的路径（Ant 路径模式）
 *     exclude-patterns:
 *       - /api/auth/**
 *       - /actuator/**
 *       - /error
 *       - /favicon.ico
 *     log-level: INFO
 * }</pre>
 *
 * <h2>默认配置</h2>
 * <ul>
 * <li><b>包含路径</b>：/**（所有路径）</li>
 * <li><b>排除路径</b>：
 * <ul>
 * <li>/actuator/**（Spring Boot Actuator 端点）</li>
 * <li>/error（错误处理端点）</li>
 * <li>/favicon.ico（网站图标）</li>
 * </ul>
 * </li>
 * </ul>
 *
 * <h2>日志输出格式</h2>
 * 
 * <pre>{@code
 * ACCESS_LOG - IP: 192.168.1.1 | Timestamp: 1704067200 | Count: 5 | Requests: {GET:/api/users, POST:/api/auth/login, GET:/api/products}
 * }</pre>
 *
 * <p>
 * <b>说明</b>：
 * <ul>
 * <li>同一秒内同一 IP 的请求会被合并为一个记录</li>
 * <li>Requests 字段包含该秒内所有不同的请求方法+路径组合</li>
 * <li>Count 字段表示该秒内的总请求次数</li>
 * </ul>
 * </p>
 *
 * @author getjobs
 * @since 2025-01-XX
 */
@Slf4j
@Configuration
@RequiredArgsConstructor
@EnableConfigurationProperties(AccessLogProperties.class)
@ConditionalOnProperty(prefix = "access.log", name = "enabled", havingValue = "true", matchIfMissing = true)
public class AccessLogConfig implements WebMvcConfigurer {

    private final AccessLogInterceptor accessLogInterceptor;
    private final AccessLogProperties properties;

    @Override
    public void addInterceptors(@NonNull InterceptorRegistry registry) {
        registry.addInterceptor(accessLogInterceptor)
                .addPathPatterns(getIncludePatterns())
                .excludePathPatterns(getExcludePatterns());

        log.info("═══════════════════════════════════════════════════════════");
        log.info("        Access 日志拦截器配置完成");
        log.info("═══════════════════════════════════════════════════════════");
        log.info("包含路径:");
        getIncludePatterns().forEach(pattern -> log.info("  ✓ {}", pattern));
        log.info("排除路径:");
        getExcludePatterns().forEach(pattern -> log.info("  ✗ {}", pattern));
        log.info("日志级别: {}", properties.getLogLevel());
        log.info("═══════════════════════════════════════════════════════════");
    }

    /**
     * 获取需要记录的路径模式
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
        log.info("Access 日志配置初始化完成");
    }
}
