package getjobs.common.infrastructure.auth;

/**
 * 认证上下文常量定义
 * <p>
 * 用于在 RequestContextHolder 中存储和获取认证相关的信息。
 * 这些常量定义了存储在请求上下文中的键名。
 * </p>
 *
 * @author getjobs
 * @since 2025-01-XX
 */
public final class AuthContextHolder {

    /**
     * 私有构造函数，防止实例化
     */
    private AuthContextHolder() {
        throw new UnsupportedOperationException("Utility class cannot be instantiated");
    }

    /**
     * 用户名键
     * <p>
     * 存储从 JWT 中解析出的用户名（subject）
     * </p>
     */
    public static final String KEY_USERNAME = "AUTH_USERNAME";

    /**
     * 用户角色列表键
     * <p>
     * 存储从 JWT 中解析出的角色编码列表（List&lt;String&gt;）
     * </p>
     */
    public static final String KEY_ROLES = "AUTH_ROLES";

    /**
     * 用户权限列表键
     * <p>
     * 存储从 JWT 中解析出的权限编码列表（List&lt;String&gt;）
     * </p>
     */
    public static final String KEY_PERMISSIONS = "AUTH_PERMISSIONS";

    /**
     * 原始 JWT Token 键
     * <p>
     * 存储从请求中提取的原始 JWT Token 字符串
     * </p>
     */
    public static final String KEY_TOKEN = "AUTH_TOKEN";

    /**
     * 认证状态键
     * <p>
     * 存储认证是否成功（Boolean）
     * </p>
     */
    public static final String KEY_AUTHENTICATED = "AUTH_AUTHENTICATED";

    /**
     * 认证错误信息键
     * <p>
     * 存储认证失败时的错误信息（String）
     * </p>
     */
    public static final String KEY_AUTH_ERROR = "AUTH_ERROR";
}


