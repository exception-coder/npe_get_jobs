/**
 * Access 日志基础设施模块
 * <p>
 * 该模块提供了按秒级聚合同一 IP 请求的访问日志功能，用于记录和分析 HTTP 请求。
 * </p>
 *
 * <h2>核心组件</h2>
 * <ul>
 * <li><b>AccessLogInterceptor</b>：访问日志拦截器，负责捕获 HTTP 请求信息</li>
 * <li><b>AccessLogService</b>：访问日志服务，负责聚合同一秒内同一 IP 的请求并输出日志</li>
 * <li><b>AccessLogConfig</b>：访问日志配置类，注册拦截器并配置拦截路径</li>
 * <li><b>AccessLogRecord</b>：访问日志记录数据类，存储同一秒内同一 IP 的请求信息</li>
 * </ul>
 *
 * <h2>主要功能</h2>
 * <ul>
 * <li>按秒级时间戳和 IP 地址聚合请求</li>
 * <li>记录请求方法 + 请求路径的 KV 集合</li>
 * <li>统计同一秒内的请求次数</li>
 * <li>每秒自动输出日志并清空缓存</li>
 * </ul>
 *
 * <h2>日志输出格式</h2>
 * <pre>{@code
 * ACCESS_LOG - IP: 192.168.1.1 | Timestamp: 1704067200 | Count: 5 | Requests: {GET:/api/users, POST:/api/auth/login, GET:/api/products}
 * }</pre>
 *
 * <h2>配置示例</h2>
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
 * <h2>使用方式</h2>
 * <p>
 * 模块会自动注册拦截器并开始记录访问日志。无需额外代码，只需在配置文件中启用即可。
 * </p>
 *
 * <h2>注意事项</h2>
 * <ul>
 * <li>同一秒内同一 IP 的请求会被合并为一个记录</li>
 * <li>Requests 字段包含该秒内所有不同的请求方法+路径组合</li>
 * <li>Count 字段表示该秒内的总请求次数</li>
 * <li>日志输出频率为每秒一次，输出上一秒的日志记录</li>
 * <li>应用关闭时会自动输出所有剩余的日志记录</li>
 * </ul>
 *
 * @author getjobs
 * @since 2025-01-XX
 */
package getjobs.common.infrastructure.accesslog;

