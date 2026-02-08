package getjobs.modules.auth.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * JWT 配置属性
 *
 * <p>
 * 通过 application-auth.yml 中的 security.jwt.* 进行配置：
 * </p>
 *
 * <pre>
 * security:
 *   jwt:
 *     secret: "change-me-to-a-safe-secret"
 *     issuer: "npe_get_jobs"
 *     expiration-seconds: 3600
 *     admin-user:
 *       username: "admin"
 *       password: "admin123"
 *       display-name: "系统管理员"
 *       email: "admin@example.com"
 *       mobile: "13800138000"
 *       super-admin: true
 *       enabled: true
 * </pre>
 *
 * @author getjobs
 */
@Data
@Component
@ConfigurationProperties(prefix = "security.jwt")
public class JwtProperties {

    /**
     * 签名密钥（必须配置为强随机字符串）
     */
    private String secret = "change-me-in-config-please";

    /**
     * 签发方
     */
    private String issuer = "npe_get_jobs";

    /**
     * Access Token 过期时间（秒）
     * 建议设置为较短时间，如 15分钟-1小时
     */
    private long expirationSeconds = 3600;

    /**
     * Refresh Token 过期时间（秒）
     * 建议设置为较长时间，如 7-30天
     */
    private long refreshExpirationSeconds = 604800; // 默认7天

    /**
     * 初始化管理员用户配置
     * <p>
     * 用于应用启动时自动创建管理员账号
     * </p>
     */
    private AdminUserConfig adminUser = new AdminUserConfig();

    /**
     * 管理员用户配置类
     */
    @Data
    public static class AdminUserConfig {
        /**
         * 用户名（必填）
         */
        private String username;

        /**
         * 密码（必填，明文，仅用于本地开发/演示）
         */
        private String password;

        /**
         * 显示名称
         */
        private String displayName = "系统管理员";

        /**
         * 邮箱（可选）
         */
        private String email;

        /**
         * 手机号（可选）
         */
        private String mobile;

        /**
         * 是否为超级管理员
         */
        private Boolean superAdmin = true;

        /**
         * 是否启用
         */
        private Boolean enabled = true;
    }
}
