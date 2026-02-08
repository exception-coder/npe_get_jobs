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
 * 增强版认证拦截器 - 支持自动刷新 Token
 * <p>
 * 在原有 {@link AuthInterceptor} 的基础上，增加了自动刷新功能：
 * <ul>
 * <li>检测到 Access Token 过期时，自动使用 Refresh Token 刷新</li>
 * <li>处理并发刷新问题（使用锁机制）</li>
 * <li>刷新成功后更新响应中的 Cookie</li>
 * </ul>
 * </p>
 *
 * <h2>使用建议</h2>
 * <p>
 * <b>推荐使用前端拦截器自动刷新</b>，此实现作为备选方案。
 * 如果使用此拦截器，建议：
 * </p>
 * <ul>
 * <li>在配置中启用：设置 {@code auth.interceptor.auto-refresh-enabled=true}</li>
 * <li>排除刷新接口：避免循环刷新</li>
 * <li>监控刷新频率：避免频繁刷新影响性能</li>
 * </ul>
 *
 * @author getjobs
 * @see AuthInterceptor 基础认证拦截器
 */
@Slf4j
@Component
@RequiredArgsConstructor
public class AuthInterceptorWithAutoRefresh implements HandlerInterceptor {

    private static final String AUTHORIZATION_HEADER = "Authorization";
    private static final String BEARER_PREFIX = "Bearer ";
    private static final String X_AUTH_TOKEN_HEADER = "X-Auth-Token";
    private static final String REFRESH_TOKEN_COOKIE_NAME = "refresh_token";

    // 用于处理并发刷新的锁（按用户名分组）
    private static final ConcurrentHashMap<String, ReentrantLock> refreshLocks = new ConcurrentHashMap<>();

    private final JwtTokenService jwtTokenService;
    private final RefreshTokenService refreshTokenService;
    private final AuthService authService;
    private final JwtProperties jwtProperties;
    private final AuthInterceptorProperties properties;

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
                setUnauthenticated();
                log.debug("请求中未找到 JWT Token: {}", request.getRequestURI());
                return true;
            }

            // 2. 尝试验证 Token
            DecodedJWT decodedJWT = null;
            try {
                decodedJWT = jwtTokenService.verifyToken(token);
            } catch (com.auth0.jwt.exceptions.TokenExpiredException e) {
                // Token 已过期，尝试自动刷新
                log.debug("Access Token 已过期，尝试自动刷新: {}", request.getRequestURI());
                String newToken = attemptAutoRefresh(request, response);
                if (newToken != null) {
                    // 刷新成功，使用新 token 重新验证
                    token = newToken;
                    decodedJWT = jwtTokenService.verifyToken(newToken);
                    log.debug("Token 自动刷新成功");
                } else {
                    // 刷新失败
                    handleAuthError("Token 已过期且刷新失败", e);
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

            log.debug("JWT 认证成功: username={}, roles={}, permissions={}", username, roles, permissions);

        } catch (Exception e) {
            handleAuthError("认证处理异常: " + e.getMessage(), e);
            log.error("认证处理异常", e);
        }

        return true;
    }

    /**
     * 尝试自动刷新 Token
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
            getjobs.modules.auth.domain.RefreshToken refreshTokenEntity = refreshTokenService.validateToken(refreshToken);
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

            log.info("Token 自动刷新成功: username={}", username);
            return newAccessToken;

        } catch (Exception e) {
            log.error("自动刷新 Token 失败: username={}", username, e);
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
        ResponseCookie accessTokenCookie = ResponseCookie.from("token", accessToken)
                .httpOnly(true)
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
     * 从请求中提取 JWT Token
     */
    private String extractToken(HttpServletRequest request) {
        // 1. 从 Authorization 请求头获取
        String authHeader = request.getHeader(AUTHORIZATION_HEADER);
        if (StringUtils.hasText(authHeader) && authHeader.startsWith(BEARER_PREFIX)) {
            String token = authHeader.substring(BEARER_PREFIX.length()).trim();
            if (StringUtils.hasText(token)) {
                return token;
            }
        }

        // 2. 从 X-Auth-Token 请求头获取
        String xAuthToken = request.getHeader(X_AUTH_TOKEN_HEADER);
        if (StringUtils.hasText(xAuthToken)) {
            return xAuthToken.trim();
        }

        // 3. 从 Cookie 获取
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            String cookieName = properties.getTokenCookieName();
            Optional<Cookie> tokenCookie = Arrays.stream(cookies)
                    .filter(cookie -> cookieName.equals(cookie.getName()))
                    .findFirst();

            if (tokenCookie.isPresent()) {
                String token = tokenCookie.get().getValue();
                if (StringUtils.hasText(token)) {
                    return token;
                }
            }
        }

        return null;
    }

    /**
     * 从 JWT Claims 中提取列表类型的 Claim
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
     * 获取客户端 IP 地址
     */
    private String getClientIp(HttpServletRequest request) {
        String ip = request.getHeader("X-Forwarded-For");
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("X-Real-IP");
        }
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
        }
        if (ip != null && ip.contains(",")) {
            ip = ip.split(",")[0].trim();
        }
        return ip;
    }

    /**
     * 处理认证错误
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
}

