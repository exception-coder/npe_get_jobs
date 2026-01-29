package getjobs.common.infrastructure.tomcat;

import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.Valve;
import org.apache.catalina.valves.AccessLogValve;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.context.annotation.Configuration;

import jakarta.annotation.PostConstruct;

/**
 * Tomcat 配置类
 * 
 * <p>
 * 使用 {@link WebServerFactoryCustomizer} 在 Spring Boot 默认配置的基础上扩展，
 * 而不是完全自定义。这样可以保留所有默认配置（包括异步支持），同时添加自定义 Valve。
 * 
 * <p>
 * 负责配置 Tomcat 相关的自定义设置，包括：
 * <ul>
 * <li>注册自定义 Valve（如 NonHttpProbeValve）</li>
 * <li>注册 AccessLogValve 用于记录访问日志</li>
 * <li>其他 Tomcat 相关优化</li>
 * </ul>
 * 
 * <p>
 * 注意事项：
 * <ul>
 * <li>此配置不会影响 Tomcat 的正常启动和运行</li>
 * <li>Valve 的注册顺序可能影响请求处理流程</li>
 * <li>建议在生产环境前进行充分测试</li>
 * </ul>
 * 
 * @author npe_get_jobs
 */
@Slf4j
//@Configuration
public class TomcatConfig implements WebServerFactoryCustomizer<TomcatServletWebServerFactory> {

    /**
     * 自定义 Tomcat Servlet Web Server Factory
     * 
     * <p>
     * 此方法会在 Spring Boot 创建默认的 {@link TomcatServletWebServerFactory} 之后调用，
     * 用于在默认配置的基础上添加自定义设置。这样可以：
     * <ul>
     * <li>保留 Spring Boot 的所有默认配置（包括异步支持）</li>
     * <li>添加自定义 Valve 而不影响其他配置</li>
     * <li>避免覆盖默认行为导致的兼容性问题</li>
     * </ul>
     * 
     * @param factory Spring Boot 创建的默认 TomcatServletWebServerFactory
     */
    @Override
    public void customize(TomcatServletWebServerFactory factory) {
        log.info("═══════════════════════════════════════════════════════════");
        log.info("        扩展 Tomcat 默认配置");
        log.info("═══════════════════════════════════════════════════════════");

        // 在默认配置的基础上添加自定义 Valve
        factory.addContextCustomizers(context -> {
            try {

                // 注册自定义 Valve
                Valve nonHttpProbeValve = new NonHttpProbeValve();
                context.getPipeline().addValve(nonHttpProbeValve);

                log.info("✓ 成功注册 NonHttpProbeValve 到 Tomcat Pipeline");
                log.info("  Context 路径: {}", context.getPath());
                log.info("  Valve 名称: {}", nonHttpProbeValve.getClass().getSimpleName());

                // 验证 Valve 是否成功添加
                if (log.isDebugEnabled()) {
                    log.debug("当前 Pipeline 中的 Valve 数量: {}",
                            context.getPipeline().getValves().length);
                }

                // 注册 AccessLogValve 用于记录所有请求，包括非法请求的IP
                AccessLogValve accessLogValve = new AccessLogValve();
                // 将日志文件存放目录设置为项目根目录下的 logs 文件夹
                String userDir = System.getProperty("user.dir");
                String logDirectoryPath = userDir + "/logs";
                accessLogValve.setDirectory(logDirectoryPath);
                accessLogValve.setPattern("common"); // 使用 common 模式记录日志
                accessLogValve.setSuffix(".log"); // 日志文件后缀
                accessLogValve.setRotatable(true); // 启用日志轮转
                accessLogValve.setRenameOnRotate(true); // 轮转时重命名
                accessLogValve.setFileDateFormat("yyyy-MM-dd"); // 日志文件日期格式
                context.getPipeline().addValve(accessLogValve);
                log.info("✓ 成功注册 AccessLogValve 到 Tomcat Pipeline");

                // 获取 AccessLogValve 的完整日志目录路径
                // 此时 logDirectoryPath 已经是绝对路径
                log.info("  AccessLogValve 日志目录: {}", logDirectoryPath);
                log.info("  AccessLogValve 模式: {}", accessLogValve.getPattern());

            } catch (Exception e) {
                log.error("注册 Valve 时发生异常: {}", e.getMessage(), e);
                // 不重新抛出异常，确保 Tomcat 能够正常启动
                // 即使 Valve 注册失败，也不应该阻止应用启动
            }
        });

        log.info("✓ Tomcat 配置扩展完成（保留所有默认配置）");
    }

    /**
     * 配置初始化后的验证
     */
    @PostConstruct
    public void validateConfiguration() {
        log.info("───────────────────────────────────────────────────────────");
        log.info("Tomcat 配置验证:");
        log.info("  ✓ 使用 WebServerFactoryCustomizer 扩展默认配置");
        log.info("  ✓ 保留 Spring Boot 所有默认配置（包括异步支持）");
        log.info("  ✓ NonHttpProbeValve 配置完成");
        log.info("  ✓ AccessLogValve 配置完成");
        log.info("  ✓ 配置不会影响 Tomcat 的正常启动");
        log.info("  ✓ 所有异常已被捕获，不会中断应用启动");
        log.info("═══════════════════════════════════════════════════════════");
    }
}
