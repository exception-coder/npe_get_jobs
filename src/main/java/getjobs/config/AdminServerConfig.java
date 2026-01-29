package getjobs.config;

import de.codecentric.boot.admin.server.config.AdminServerProperties;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

/**
 * Spring Boot Admin Server 配置类
 * <p>
 * 配置 Admin Server 的路径和安全性
 * </p>
 */
@Slf4j
@Configuration
@EnableWebSecurity
public class AdminServerConfig {

    private final String adminContextPath;

    @Value("${spring.boot.admin.username:admin}")
    private String adminUsername;

    @Value("${spring.boot.admin.password:admin}")
    private String adminPassword;

    public AdminServerConfig(
            AdminServerProperties adminServerProperties,
            @Value("${spring.boot.admin.context-path:/admin}") String contextPath) {
        // 优先使用配置文件中明确配置的值，如果为空则使用默认值 /admin
        String configPath = adminServerProperties.getContextPath();
        this.adminContextPath = (configPath != null && !configPath.trim().isEmpty())
                ? configPath
                : (contextPath != null && !contextPath.trim().isEmpty() ? contextPath : "/admin");

        log.info("Spring Boot Admin Server 上下文路径: {}", this.adminContextPath);
        log.info("  从 AdminServerProperties 获取: {}", configPath);
        log.info("  从配置文件获取: {}", contextPath);
    }

    /**
     * 配置密码编码器
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    /**
     * 配置用户详情服务（内存用户）
     * 用户名和密码可以从配置文件中读取
     */
    @Bean
    public UserDetailsService userDetailsService(PasswordEncoder passwordEncoder) {
        UserDetails admin = User.builder()
                .username(adminUsername)
                .password(passwordEncoder.encode(adminPassword))
                .roles("ADMIN")
                .build();

        log.info("Spring Boot Admin Server 用户配置完成");
        log.info("  用户名: {}", adminUsername);
        log.info("  密码: {} (已加密)", adminPassword);

        return new InMemoryUserDetailsManager(admin);
    }

    /**
     * 配置 Spring Security，保护 Admin Server
     * 使用 Order(1) 确保这个安全配置优先于其他安全配置
     */
    @Bean
    @Order(1)
    public SecurityFilterChain adminSecurityFilterChain(HttpSecurity http) throws Exception {
        SavedRequestAwareAuthenticationSuccessHandler successHandler = new SavedRequestAwareAuthenticationSuccessHandler();
        successHandler.setTargetUrlParameter("redirectTo");
        successHandler.setDefaultTargetUrl(this.adminContextPath + "/");

        http
                .securityMatcher(this.adminContextPath + "/**")
                // 启用异步支持（Spring Boot Admin Server 需要异步请求处理）
                .requestCache(requestCache -> requestCache.disable()) // 禁用请求缓存以支持异步
                .authorizeHttpRequests(authorize -> authorize
                        // 允许访问静态资源（CSS、JS、图片等）
                        .requestMatchers(this.adminContextPath + "/assets/**").permitAll()
                        // 允许访问登录页面
                        .requestMatchers(this.adminContextPath + "/login").permitAll()
                        // 允许访问登录 API（Spring Security 内部使用）
                        .requestMatchers(this.adminContextPath + "/login.html").permitAll()
                        // 允许 Admin Client 注册（不需要认证，但需要 CSRF 豁免）
                        .requestMatchers(this.adminContextPath + "/instances").permitAll()
                        // 其他所有请求需要认证
                        .anyRequest().authenticated())
                .formLogin(form -> form
                        .loginPage(this.adminContextPath + "/login")
                        .loginProcessingUrl(this.adminContextPath + "/login")
                        .successHandler(successHandler)
                        .failureUrl(this.adminContextPath + "/login?error"))
                .logout(logout -> logout
                        .logoutUrl(this.adminContextPath + "/logout")
                        .logoutSuccessUrl(this.adminContextPath + "/login?logout"))
                .httpBasic(httpBasic -> {
                }) // 启用 HTTP Basic 认证
                .csrf(csrf -> csrf
                        .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                        .ignoringRequestMatchers(
                                // 允许 Admin Client 注册和注销（不需要 CSRF）
                                new AntPathRequestMatcher(this.adminContextPath + "/instances",
                                        HttpMethod.POST.toString()),
                                new AntPathRequestMatcher(this.adminContextPath + "/instances/*",
                                        HttpMethod.DELETE.toString()),
                                new AntPathRequestMatcher(this.adminContextPath + "/actuator/**"),
                                // 允许访问 applications API（GET 请求通常不需要 CSRF，但为了安全起见也排除）
                                new AntPathRequestMatcher(this.adminContextPath + "/applications",
                                        HttpMethod.GET.toString()),
                                new AntPathRequestMatcher(this.adminContextPath + "/applications/**",
                                        HttpMethod.GET.toString())))
                // 启用异步支持
                .sessionManagement(session -> session
                        .sessionCreationPolicy(
                                org.springframework.security.config.http.SessionCreationPolicy.IF_REQUIRED));

        log.info("Spring Boot Admin Server 安全配置完成");
        log.info("  保护路径: {}**", adminContextPath);
        log.info("  登录页面: {}/login", adminContextPath);

        return http.build();
    }

    /**
     * 配置其他路径的安全（允许访问，不受 Spring Security 保护）
     * 这样可以确保只有 Admin Server 需要认证，其他路径（如 API、前端）不受影响
     */
    @Bean
    @Order(2)
    public SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(authorize -> authorize
                        .anyRequest().permitAll())
                .csrf(csrf -> csrf.disable())
                // 确保支持异步请求
                .sessionManagement(session -> session
                        .sessionCreationPolicy(
                                org.springframework.security.config.http.SessionCreationPolicy.IF_REQUIRED));

        log.info("其他路径安全配置完成（允许所有访问）");

        return http.build();
    }
}
