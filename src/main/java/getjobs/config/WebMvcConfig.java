package getjobs.config;

import org.springframework.core.annotation.Order;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.lang.NonNull;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;

import java.io.IOException;

/**
 * Web MVC 配置类
 * 用于处理单页应用（SPA）的路由问题
 * 
 * 当用户访问前端路由（如 /sasl/form）时，会重定向到 index.html，
 * 让前端路由来处理页面跳转
 * 
 * 处理逻辑：
 * 1. API 路径（/api/**）由 Spring MVC 的 Controller 处理
 * 2. Actuator 路径（/actuator/**）由 Spring Boot Actuator 处理
 * 3. Admin 路径（/admin/**）由 Spring Boot Admin Server 处理
 * 4. 静态资源（如 /assets/**, /favicon.ico 等）正常返回
 * 5. 其他路径（如 /sasl/form）返回 index.html，让前端路由处理
 */
@Configuration
@Order(100) // 设置较低的优先级，确保在 Spring Boot Admin 配置之后执行
public class WebMvcConfig implements WebMvcConfigurer {

    /**
     * 配置静态资源处理器
     * 将静态资源映射到 classpath:/dist/ 目录
     * 对于不存在的资源路径（非 API），返回 index.html 让前端路由处理
     * 
     * 注意：排除 /api/**、/actuator/**、/admin/** 路径，让对应的处理器处理
     */
    @Override
    public void addResourceHandlers(@NonNull ResourceHandlerRegistry registry) {
        // 先配置排除路径的处理器（优先级更高）
        // 这些路径会被排除，不会由静态资源处理器处理

        // 配置前端静态资源处理器（排除特定路径）
        registry.addResourceHandler("/**")
                .addResourceLocations("classpath:/dist/")
                .resourceChain(false)
                .addResolver(new PathResourceResolver() {
                    @Override
                    protected Resource getResource(@NonNull String resourcePath, @NonNull Resource location)
                            throws IOException {
                        // 统一转换为小写进行比较，处理路径大小写问题
                        // resourcePath 不包含前导斜杠，例如访问 /admin 时，resourcePath 是 "admin"
                        String lowerPath = resourcePath.toLowerCase().trim();

                        // 如果是 API 路径，返回 null，让 Spring MVC 的 Controller 处理
                        if (lowerPath.startsWith("api/") || lowerPath.equals("api")) {
                            return null;
                        }

                        // 如果是 Actuator 路径，返回 null，让 Spring Boot Actuator 处理
                        if (lowerPath.startsWith("actuator/") || lowerPath.equals("actuator")) {
                            return null;
                        }

                        // 如果是 Admin 路径，返回 null，让 Spring Boot Admin Server 处理
                        // 处理 admin、admin/、admin/xxx、admin/assets/xxx 等情况
                        // 注意：resourcePath 不包含前导斜杠，所以直接检查 "admin"
                        if (lowerPath.startsWith("admin")) {
                            return null;
                        }

                        // 尝试获取请求的资源
                        Resource requestedResource = location.createRelative(resourcePath);

                        // 如果请求的资源存在且可读，直接返回
                        if (requestedResource.exists() && requestedResource.isReadable()) {
                            return requestedResource;
                        }

                        // 其他情况（前端路由路径）返回 index.html，让前端路由处理
                        return new ClassPathResource("/dist/index.html");
                    }
                });
    }

    /**
     * 配置视图控制器
     * 根路径重定向到 index.html
     */
    @Override
    public void addViewControllers(@NonNull ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("forward:/index.html");
    }
}
