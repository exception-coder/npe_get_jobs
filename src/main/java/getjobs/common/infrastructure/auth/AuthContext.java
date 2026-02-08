package getjobs.common.infrastructure.auth;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import java.util.Collections;
import java.util.List;

/**
 * 认证上下文工具类
 * <p>
 * 提供便捷方法从 RequestContextHolder 中获取认证相关的信息。
 * 这些信息由 {@link AuthInterceptor} 在请求处理前设置。
 * </p>
 *
 * @author getjobs
 * @since 2025-01-XX
 */
@Slf4j
public final class AuthContext {

    /**
     * 作用域：请求级别
     */
    private static final int SCOPE = RequestAttributes.SCOPE_REQUEST;

    /**
     * 私有构造函数，防止实例化
     */
    private AuthContext() {
        throw new UnsupportedOperationException("Utility class cannot be instantiated");
    }

    /**
     * 获取当前请求对象
     *
     * @return HttpServletRequest，如果不在请求上下文中则返回 null
     */
    public static HttpServletRequest getRequest() {
        RequestAttributes attributes = RequestContextHolder.getRequestAttributes();
        if (attributes instanceof ServletRequestAttributes) {
            return ((ServletRequestAttributes) attributes).getRequest();
        }
        return null;
    }

    /**
     * 获取当前用户名
     *
     * @return 用户名，如果未认证或不存在则返回 null
     */
    public static String getUsername() {
        return getAttribute(AuthContextHolder.KEY_USERNAME, String.class);
    }

    /**
     * 获取当前用户角色列表
     *
     * @return 角色编码列表，如果未认证或不存在则返回空列表
     */
    @SuppressWarnings("unchecked")
    public static List<String> getRoles() {
        List<String> roles = getAttribute(AuthContextHolder.KEY_ROLES, List.class);
        return roles != null ? roles : Collections.emptyList();
    }

    /**
     * 获取当前用户权限列表
     *
     * @return 权限编码列表，如果未认证或不存在则返回空列表
     */
    @SuppressWarnings("unchecked")
    public static List<String> getPermissions() {
        List<String> permissions = getAttribute(AuthContextHolder.KEY_PERMISSIONS, List.class);
        return permissions != null ? permissions : Collections.emptyList();
    }

    /**
     * 获取原始 JWT Token
     *
     * @return JWT Token 字符串，如果不存在则返回 null
     */
    public static String getToken() {
        return getAttribute(AuthContextHolder.KEY_TOKEN, String.class);
    }

    /**
     * 检查当前请求是否已认证
     *
     * @return true 如果已认证，否则返回 false
     */
    public static boolean isAuthenticated() {
        Boolean authenticated = getAttribute(AuthContextHolder.KEY_AUTHENTICATED, Boolean.class);
        return Boolean.TRUE.equals(authenticated);
    }

    /**
     * 获取认证错误信息
     *
     * @return 错误信息，如果认证成功或不存在则返回 null
     */
    public static String getAuthError() {
        return getAttribute(AuthContextHolder.KEY_AUTH_ERROR, String.class);
    }

    /**
     * 检查当前用户是否拥有指定角色
     *
     * @param roleCode 角色编码
     * @return true 如果用户拥有该角色，否则返回 false
     */
    public static boolean hasRole(String roleCode) {
        if (!isAuthenticated() || roleCode == null) {
            return false;
        }
        return getRoles().contains(roleCode);
    }

    /**
     * 检查当前用户是否拥有指定权限
     *
     * @param permissionCode 权限编码
     * @return true 如果用户拥有该权限，否则返回 false
     */
    public static boolean hasPermission(String permissionCode) {
        if (!isAuthenticated() || permissionCode == null) {
            return false;
        }
        return getPermissions().contains(permissionCode);
    }

    /**
     * 检查当前用户是否拥有任意一个指定角色
     *
     * @param roleCodes 角色编码数组
     * @return true 如果用户拥有任意一个角色，否则返回 false
     */
    public static boolean hasAnyRole(String... roleCodes) {
        if (!isAuthenticated() || roleCodes == null || roleCodes.length == 0) {
            return false;
        }
        List<String> userRoles = getRoles();
        for (String roleCode : roleCodes) {
            if (userRoles.contains(roleCode)) {
                return true;
            }
        }
        return false;
    }

    /**
     * 检查当前用户是否拥有任意一个指定权限
     *
     * @param permissionCodes 权限编码数组
     * @return true 如果用户拥有任意一个权限，否则返回 false
     */
    public static boolean hasAnyPermission(String... permissionCodes) {
        if (!isAuthenticated() || permissionCodes == null || permissionCodes.length == 0) {
            return false;
        }
        List<String> userPermissions = getPermissions();
        for (String permissionCode : permissionCodes) {
            if (userPermissions.contains(permissionCode)) {
                return true;
            }
        }
        return false;
    }

    /**
     * 从 RequestContextHolder 中获取属性
     *
     * @param key   属性键
     * @param clazz 属性类型
     * @param <T>   属性类型泛型
     * @return 属性值，如果不存在则返回 null
     */
    private static <T> T getAttribute(String key, Class<T> clazz) {
        RequestAttributes attributes = RequestContextHolder.getRequestAttributes();
        if (attributes == null) {
            log.warn("RequestContextHolder 中没有请求上下文，无法获取属性: {}", key);
            return null;
        }
        Object value = attributes.getAttribute(key, SCOPE);
        if (value == null) {
            return null;
        }
        if (!clazz.isInstance(value)) {
            log.warn("属性 {} 的类型不匹配，期望: {}, 实际: {}", key, clazz.getName(), value.getClass().getName());
            return null;
        }
        return clazz.cast(value);
    }

    /**
     * 设置属性到 RequestContextHolder
     * <p>
     * 此方法主要用于拦截器内部使用，外部代码一般不需要直接调用。
     * </p>
     *
     * @param key   属性键
     * @param value 属性值
     */
    static void setAttribute(String key, Object value) {
        RequestAttributes attributes = RequestContextHolder.getRequestAttributes();
        if (attributes == null) {
            log.warn("RequestContextHolder 中没有请求上下文，无法设置属性: {}", key);
            return;
        }
        attributes.setAttribute(key, value, SCOPE);
    }
}
