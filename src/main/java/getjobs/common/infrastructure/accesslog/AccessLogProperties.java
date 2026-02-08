package getjobs.common.infrastructure.accesslog;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Access 日志配置属性
 * <p>
 * 通过 application.yml 中的 access.log.* 进行配置：
 * </p>
 *
 * <pre>{@code
 * access:
 *   log:
 *     enabled: true                    # 是否启用（默认 true）
 *     include-patterns:                 # 需要记录的路径（Ant 路径模式）
 *       - /api/**
 *     exclude-patterns:                # 排除的路径（Ant 路径模式）
 *       - /api/auth/**
 *       - /actuator/**
 *       - /error
 *       - /favicon.ico
 *     log-level: INFO                  # 日志级别（默认 INFO）
 * }</pre>
 *
 * @author getjobs
 * @since 2025-01-XX
 */
@Data
@ConfigurationProperties(prefix = "access.log")
public class AccessLogProperties {

    /**
     * 是否启用 Access 日志
     * <p>
     * 默认值：true
     * </p>
     */
    private boolean enabled = true;

    /**
     * 需要记录的路径模式列表（Ant 路径模式）
     * <p>
     * 默认值：["/**"]（记录所有路径）
     * </p>
     */
    private List<String> includePatterns = new ArrayList<>(Arrays.asList("/**"));

    /**
     * 排除的路径模式列表（Ant 路径模式）
     * <p>
     * 默认值：["/actuator/**", "/error", "/favicon.ico", "/static/**", "/assets/**"]
     * </p>
     */
    private List<String> excludePatterns = new ArrayList<>(Arrays.asList(
            "/actuator/**", // Spring Boot Actuator 端点
            "/error", // 错误处理端点
            "/favicon.ico", // 网站图标
            "/static/**", // 静态资源目录
            "/assets/**" // 前端资源目录
    ));

    /**
     * 日志级别
     * <p>
     * 默认值：INFO
     * </p>
     */
    private String logLevel = "INFO";
}
