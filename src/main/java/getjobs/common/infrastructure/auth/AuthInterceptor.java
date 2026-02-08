package getjobs.common.infrastructure.auth;

import com.auth0.jwt.interfaces.DecodedJWT;
import getjobs.modules.auth.config.JwtProperties;
import getjobs.modules.auth.domain.User;
import getjobs.modules.auth.dto.UserInfoDTO;
import getjobs.modules.auth.service.AuthService;
import getjobs.modules.auth.service.JwtTokenService;
import getjobs.modules.auth.service.RefreshTokenService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.HandlerInterceptor;

import java.time.Duration;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.locks.ReentrantLock;

/**
 * 认证拦截器
 * <p>
 * 负责预处理和验证 JWT 信息，支持从 Cookie 或请求头中获取 Token。
 * 验证成功后，将用户信息存储到 RequestContextHolder 中，供后续业务逻辑使用。
 * </p>
 *
 * <h2>Token 获取优先级</h2>
 * <ol>
 * <li>请求头：Authorization: Bearer {token}</li>
 * <li>请求头：X-Auth-Token: {token}</li>
 * <li>Cookie：token（可通过配置自定义名称）</li>
 * </ol>
 *
 * <h2>处理流程</h2>
 * <ol>
 * <li>从请求中提取 JWT Token</li>
 * <li>验证 Token 的有效性（签名、过期时间等）</li>
 * <li>解析 Token 中的用户信息（用户名、角色、权限）</li>
 * <li>将解析结果存储到 RequestContextHolder</li>
 * <li>继续处理请求（不会中断请求流程）</li>
 * </ol>
 *
 * <p>
 * <b>注意</b>：此拦截器不会拒绝未认证的请求，而是将认证状态存储到上下文中。
 * 具体的权限控制应由业务层或使用 {@link AuthInterceptorConfig} 配置的路径规则来处理。
 * </p>
 *
 * @author getjobs
 * @since 2025-01-XX
 */
@Slf4j
@Component
@RequiredArgsConstructor
public class AuthInterceptor implements HandlerInterceptor {

    /**
     * Authorization 请求头前缀
     */
    private static final String AUTHORIZATION_HEADER = "Authorization";
    private static final String BEARER_PREFIX = "Bearer ";

    /**
     * 自定义 Token 请求头名称
     */
    private static final String X_AUTH_TOKEN_HEADER = "X-Auth-Token";

    /**
     * Refresh Token Cookie 名称
     */
    private static final String REFRESH_TOKEN_COOKIE_NAME = "refresh_token";

    /**
     * 响应头：标识 Token 是否被自动刷新
     */
    private static final String X_TOKEN_REFRESHED_HEADER = "X-Token-Refreshed";

    /**
     * 用于处理并发刷新的锁（按用户名分组）
     */
    private static final ConcurrentHashMap<String, ReentrantLock> refreshLocks = new ConcurrentHashMap<>();

    private final JwtTokenService jwtTokenService;
    private final RefreshTokenService refreshTokenService;
    private final AuthService authService;
    private final JwtProperties jwtProperties;
    private final AuthInterceptorProperties properties;

    /**
     * 从请求中提取 Token 的 Cookie 名称
     * <p>
     * 从配置 {@code auth.interceptor.token-cookie-name} 中读取，默认值为 "token"
     * </p>
     */
    private String getTokenCookieName() {
        return properties.getTokenCookieName();
    }

    @Override
    public boolean preHandle(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull Object handler) {

        // 排除刷新接口，避免循环
        if (request.getRequestURI().endsWith("/api/auth/refresh")) {
            return true;
        }

        try {
            // 1. 从请求中提取 Token
            String token = extractToken(request);

            if (!StringUtils.hasText(token)) {
                // 没有 Token，标记为未认证
                setUnauthenticated();
                log.debug("请求中未找到 JWT Token: {}", request.getRequestURI());
                return true; // 继续处理请求
            }

            // 2. 尝试验证并解析 Token
            DecodedJWT decodedJWT = null;
            boolean tokenRefreshed = false;

            try {
                decodedJWT = jwtTokenService.verifyToken(token);
            } catch (com.auth0.jwt.exceptions.TokenExpiredException e) {
                // Token 已过期，尝试自动刷新（混合方案的后端兜底）
                if (properties.isAutoRefreshEnabled()) {
                    log.debug("Access Token 已过期，尝试后端自动刷新（兜底）: {}", request.getRequestURI());
                    String newToken = attemptAutoRefresh(request, response);
                    if (newToken != null) {
                        // 刷新成功，使用新 token 重新验证
                        token = newToken;
                        decodedJWT = jwtTokenService.verifyToken(newToken);
                        tokenRefreshed = true;
                        log.debug("Token 后端自动刷新成功（兜底）");
                    } else {
                        // 刷新失败，可能是前端已处理或 refresh token 无效
                        log.debug("后端自动刷新失败，可能前端已处理或 refresh token 无效");
                        handleAuthError("Token 已过期且后端刷新失败", e);
                        return true;
                    }
                } else {
                    // 自动刷新未启用
                    handleAuthError("JWT 验证失败: " + e.getMessage(), e);
                    log.warn("JWT 验证失败: {}", e.getMessage());
                    return true;
                }
            } catch (com.auth0.jwt.exceptions.JWTVerificationException e) {
                // 其他验证错误（签名错误等），不尝试刷新
                handleAuthError("JWT 验证失败: " + e.getMessage(), e);
                log.warn("JWT 验证失败: {}", e.getMessage());
                return true;
            }

            // 3. 提取用户信息
            String username = decodedJWT.getSubject();
            List<String> roles = extractListClaim(decodedJWT, "roles");
            List<String> permissions = extractListClaim(decodedJWT, "permissions");

            // 4. 存储到 RequestContextHolder
            AuthContext.setAttribute(AuthContextHolder.KEY_USERNAME, username);
            AuthContext.setAttribute(AuthContextHolder.KEY_ROLES, roles);
            AuthContext.setAttribute(AuthContextHolder.KEY_PERMISSIONS, permissions);
            AuthContext.setAttribute(AuthContextHolder.KEY_TOKEN, token);
            AuthContext.setAttribute(AuthContextHolder.KEY_AUTHENTICATED, true);
            AuthContext.setAttribute(AuthContextHolder.KEY_AUTH_ERROR, null);

            // 5. 如果 token 被刷新，添加响应头通知前端
            if (tokenRefreshed) {
                response.setHeader(X_TOKEN_REFRESHED_HEADER, "true");
            }

            log.debug("JWT 认证成功: username={}, roles={}, permissions={}, tokenRefreshed={}",
                    username, roles, permissions, tokenRefreshed);

        } catch (Exception e) {
            // 其他异常
            handleAuthError("认证处理异常: " + e.getMessage(), e);
            log.error("认证处理异常", e);
        }

        // 无论认证成功与否，都继续处理请求
        // 具体的权限控制应由业务层处理
        return true;
    }

    /**
     * 从请求中提取 JWT Token
     * <p>
     * 优先级：
     * 1. Authorization: Bearer {token}
     * 2. X-Auth-Token: {token}
     * 3. Cookie: token
     * </p>
     *
     * @param request HTTP 请求
     * @return JWT Token 字符串，如果未找到则返回 null
     */
    private String extractToken(HttpServletRequest request) {
        // 1. 从 Authorization 请求头获取
        String authHeader = request.getHeader(AUTHORIZATION_HEADER);
        if (StringUtils.hasText(authHeader) && authHeader.startsWith(BEARER_PREFIX)) {
            String token = authHeader.substring(BEARER_PREFIX.length()).trim();
            if (StringUtils.hasText(token)) {
                log.debug("从 Authorization 请求头获取 Token");
                return token;
            }
        }

        // 2. 从 X-Auth-Token 请求头获取
        String xAuthToken = request.getHeader(X_AUTH_TOKEN_HEADER);
        if (StringUtils.hasText(xAuthToken)) {
            log.debug("从 X-Auth-Token 请求头获取 Token");
            return xAuthToken.trim();
        }

        // 3. 从 Cookie 获取
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            String cookieName = getTokenCookieName();
            Optional<Cookie> tokenCookie = Arrays.stream(cookies)
                    .filter(cookie -> cookieName.equals(cookie.getName()))
                    .findFirst();

            if (tokenCookie.isPresent()) {
                String token = tokenCookie.get().getValue();
                if (StringUtils.hasText(token)) {
                    log.debug("从 Cookie 获取 Token: {}", cookieName);
                    return token;
                }
            }
        }

        return null;
    }

    /**
     * 从 JWT Claims 中提取列表类型的 Claim
     *
     * @param decodedJWT 解码后的 JWT
     * @param claimName  Claim 名称
     * @return 字符串列表，如果不存在或类型不匹配则返回空列表
     */
    @SuppressWarnings("unchecked")
    private List<String> extractListClaim(DecodedJWT decodedJWT, String claimName) {
        try {
            Object claim = decodedJWT.getClaim(claimName).as(Object.class);
            if (claim instanceof List) {
                return (List<String>) claim;
            }
        } catch (Exception e) {
            log.warn("无法解析 JWT Claim '{}': {}", claimName, e.getMessage());
        }
        return Collections.emptyList();
    }

    /**
     * 处理认证错误
     *
     * @param errorMessage 错误消息
     * @param exception    异常对象
     */
    private void handleAuthError(String errorMessage, Exception exception) {
        setUnauthenticated();
        AuthContext.setAttribute(AuthContextHolder.KEY_AUTH_ERROR, errorMessage);
    }

    /**
     * 设置未认证状态
     */
    private void setUnauthenticated() {
        AuthContext.setAttribute(AuthContextHolder.KEY_USERNAME, null);
        AuthContext.setAttribute(AuthContextHolder.KEY_ROLES, null);
        AuthContext.setAttribute(AuthContextHolder.KEY_PERMISSIONS, null);
        AuthContext.setAttribute(AuthContextHolder.KEY_TOKEN, null);
        AuthContext.setAttribute(AuthContextHolder.KEY_AUTHENTICATED, false);
    }

    /**
     * 尝试自动刷新 Token（混合方案的后端兜底）
     * <p>
     * 当 Access Token 过期时，如果前端未刷新，后端会自动尝试刷新。
     * 这作为兜底方案，主要刷新逻辑应该在前端实现。
     * </p>
     *
     * @param request  HTTP 请求
     * @param response HTTP 响应
     * @return 新的 Access Token，如果刷新失败则返回 null
     */
    private String attemptAutoRefresh(HttpServletRequest request, HttpServletResponse response) {
        // 1. 从 cookie 中获取 refresh token
        String refreshToken = extractRefreshToken(request);
        if (!StringUtils.hasText(refreshToken)) {
            log.debug("未找到 Refresh Token，无法自动刷新");
            return null;
        }

        // 2. 验证 refresh token
        DecodedJWT decodedJWT;
        try {
            decodedJWT = jwtTokenService.verifyRefreshToken(refreshToken);
        } catch (Exception e) {
            log.debug("Refresh Token 验证失败: {}", e.getMessage());
            return null;
        }

        String username = decodedJWT.getSubject();

        // 3. 获取刷新锁（避免并发刷新）
        ReentrantLock lock = refreshLocks.computeIfAbsent(username, k -> new ReentrantLock());
        lock.lock();
        try {
            // 再次检查 refresh token 是否有效（可能已被其他线程刷新）
            getjobs.modules.auth.domain.RefreshToken refreshTokenEntity = refreshTokenService
                    .validateToken(refreshToken);
            if (refreshTokenEntity == null) {
                log.debug("Refresh Token 无效或已被撤销");
                return null;
            }

            // 4. 查询用户信息
            User user = authService.getUserByUsername(username, "SECRET_QUERY_KEY_2024");
            if (!user.getEnabled() || user.getLocked()) {
                log.debug("用户账号已被禁用或锁定: {}", username);
                return null;
            }

            // 5. 生成新的 token
            UserInfoDTO userInfo = authService.buildUserInfoDTO(user);
            String newAccessToken = jwtTokenService.generateAccessToken(userInfo);
            String newRefreshToken = jwtTokenService.generateRefreshToken(username);

            // 6. Token 轮换
            String clientIp = getClientIp(request);
            String userAgent = request.getHeader("User-Agent");
            refreshTokenService.rotateToken(refreshToken, newRefreshToken, username, clientIp, userAgent);

            // 7. 更新响应中的 Cookie
            updateCookiesInResponse(response, newAccessToken, newRefreshToken);

            log.info("Token 后端自动刷新成功（兜底）: username={}", username);
            return newAccessToken;

        } catch (Exception e) {
            log.error("后端自动刷新 Token 失败: username={}", username, e);
            return null;
        } finally {
            lock.unlock();
            // 清理不再使用的锁
            if (!lock.hasQueuedThreads()) {
                refreshLocks.remove(username);
            }
        }
    }

    /**
     * 更新响应中的 Cookie
     */
    private void updateCookiesInResponse(HttpServletResponse response, String accessToken, String refreshToken) {
        // Access Token 不设置 httpOnly，允许前端读取以判断过期时间
        ResponseCookie accessTokenCookie = ResponseCookie.from(properties.getTokenCookieName(), accessToken)
                .httpOnly(false) // 允许前端 JavaScript 读取，用于判断过期时间
                .secure(false)
                .path("/")
                .maxAge(Duration.ofSeconds(jwtProperties.getExpirationSeconds()))
                .sameSite("Lax")
                .build();

        ResponseCookie refreshTokenCookie = ResponseCookie.from(REFRESH_TOKEN_COOKIE_NAME, refreshToken)
                .httpOnly(true)
                .secure(false)
                .path("/")
                .maxAge(Duration.ofSeconds(jwtProperties.getRefreshExpirationSeconds()))
                .sameSite("Lax")
                .build();

        response.addHeader(HttpHeaders.SET_COOKIE, accessTokenCookie.toString());
        response.addHeader(HttpHeaders.SET_COOKIE, refreshTokenCookie.toString());
    }

    /**
     * 从请求中提取 Refresh Token（从 cookie 中）
     */
    private String extractRefreshToken(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            Optional<Cookie> refreshTokenCookie = Arrays.stream(cookies)
                    .filter(cookie -> REFRESH_TOKEN_COOKIE_NAME.equals(cookie.getName()))
                    .findFirst();

            if (refreshTokenCookie.isPresent()) {
                String token = refreshTokenCookie.get().getValue();
                if (StringUtils.hasText(token)) {
                    return token;
                }
            }
        }
        return null;
    }

    /**
     * 获取客户端 IP 地址
     */
    private String getClientIp(HttpServletRequest request) {
        String ip = request.getHeader("X-Forwarded-For");
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("X-Real-IP");
        }
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("Proxy-Client-IP");
        }
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
        }
        if (ip != null && ip.contains(",")) {
            ip = ip.split(",")[0].trim();
        }
        return ip;
    }
}
