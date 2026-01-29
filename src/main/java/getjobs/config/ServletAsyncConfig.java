package getjobs.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.web.servlet.ServletContextInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;

import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRegistration;

/**
 * Servlet 异步支持配置
 * <p>
 * 确保 DispatcherServlet 和所有过滤器都支持异步请求
 * </p>
 */
@Slf4j
@Configuration
public class ServletAsyncConfig {

    /**
     * 配置 ServletContext 以启用异步支持
     * 使用最高优先级，确保在所有其他初始化器之前执行
     */
    @Bean
    @Order(Ordered.HIGHEST_PRECEDENCE)
    public ServletContextInitializer servletContextInitializer() {
        return servletContext -> {
            log.info("配置 ServletContext 异步支持...");

            // 设置异步支持
            servletContext.setRequestCharacterEncoding("UTF-8");
            servletContext.setResponseCharacterEncoding("UTF-8");
            // 获取 DispatcherServlet 的注册信息并启用异步支持
            ServletRegistration.Dynamic dispatcher = (ServletRegistration.Dynamic) servletContext
                    .getServletRegistration("dispatcherServlet");
            if (dispatcher != null) {
                dispatcher.setAsyncSupported(true);
                log.info("✓ DispatcherServlet 异步支持已启用");
            } else {
                log.warn("⚠ 未找到 DispatcherServlet 注册信息");
            }
        };
    }

    /**
     * 延迟配置过滤器异步支持
     * 这个方法会在所有过滤器注册之后执行
     */
    @Bean
    @Order(Ordered.LOWEST_PRECEDENCE)
    public ServletContextInitializer filterAsyncSupportInitializer() {
        return new ServletContextInitializer() {
            @Override
            public void onStartup(ServletContext servletContext) throws ServletException {
                log.info("配置过滤器异步支持...");

                final int[] successCount = { 0 };
                final int[] failCount = { 0 };

                // 确保所有已注册的过滤器都支持异步
                servletContext.getFilterRegistrations().values().forEach(registration -> {
                    if (registration instanceof jakarta.servlet.FilterRegistration.Dynamic) {
                        try {
                            ((jakarta.servlet.FilterRegistration.Dynamic) registration).setAsyncSupported(true);
                            successCount[0]++;
                        } catch (IllegalStateException e) {
                            // 如果过滤器已经初始化，无法修改，忽略这个错误
                            // 这通常发生在 Spring Security 自动注册的过滤器上
                            failCount[0]++;
                            log.debug("无法为过滤器 {} 启用异步支持（已初始化）: {}",
                                    registration.getName(), e.getMessage());
                        }
                    }
                });

                log.info("过滤器异步支持配置完成: 成功 {} 个, 失败 {} 个", successCount[0], failCount[0]);
            }
        };
    }
}
