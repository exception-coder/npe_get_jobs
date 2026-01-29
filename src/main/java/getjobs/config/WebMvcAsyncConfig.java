package getjobs.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.lang.NonNull;
import org.springframework.web.servlet.config.annotation.AsyncSupportConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Web MVC 异步支持配置
 * <p>
 * 为 Spring Boot Admin Server 启用异步请求支持
 * </p>
 */
@Configuration
public class WebMvcAsyncConfig implements WebMvcConfigurer {

    /**
     * 配置异步支持
     */
    @Override
    public void configureAsyncSupport(@NonNull AsyncSupportConfigurer configurer) {
        // 设置异步请求超时时间（30秒）
        configurer.setDefaultTimeout(30000);
    }
}
