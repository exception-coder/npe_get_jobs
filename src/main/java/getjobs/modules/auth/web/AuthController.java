package getjobs.modules.auth.web;

import com.auth0.jwt.interfaces.DecodedJWT;
import getjobs.common.infrastructure.auth.AuthInterceptorProperties;
import getjobs.modules.auth.config.JwtProperties;
import getjobs.modules.auth.domain.User;
import getjobs.modules.auth.dto.CreateUserRequest;
import getjobs.modules.auth.dto.LoginRequest;
import getjobs.modules.auth.dto.LoginResponse;
import getjobs.modules.auth.dto.QueryUserRequest;
import getjobs.modules.auth.dto.UserInfoDTO;
import getjobs.modules.auth.service.AuthService;
import getjobs.modules.auth.service.JwtTokenService;
import getjobs.modules.auth.service.RefreshTokenService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Duration;
import java.time.Instant;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * 登录认证控制器（ddlite 模块 Web 层）
 *
 * <p>
 * 提供基于 JWT 的登录接口，前端可在此处完成账号密码登录并获取 Token。
 * </p>
 *
 * <p>
 * 接口约定：
 * </p>
 *
 * <ul>
 * <li>URL：{@code POST /api/auth/login}</li>
 * <li>请求体：{@link LoginRequest}</li>
 * <li>响应体：统一包装为 { success, message, data }</li>
 * </ul>
 *
 * @author getjobs
 */
@Slf4j
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private static final String AUTHORIZATION_HEADER = "Authorization";
    private static final String BEARER_PREFIX = "Bearer ";
    private static final String X_AUTH_TOKEN_HEADER = "X-Auth-Token";

    private final AuthService authService;
    private final JwtTokenService jwtTokenService;
    private final RefreshTokenService refreshTokenService;
    private final JwtProperties jwtProperties;
    private final AuthInterceptorProperties authInterceptorProperties;

    /**
     * 登录并获取 JWT Token
     * <p>
     * Access Token 返回在响应体中，Refresh Token 设置在 httpOnly cookie 中
     * </p>
     */
    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody LoginRequest request,
            HttpServletRequest httpRequest) {
        Map<String, Object> body = new HashMap<>();
        try {
            LoginResponse response = authService.login(request);

            // 保存 refresh token 到数据库（用于管理和撤销）
            String clientIp = getClientIp(httpRequest);
            String userAgent = httpRequest.getHeader("User-Agent");
            refreshTokenService.saveToken(response.getRefreshToken(), response.getUser().getUsername(),
                    clientIp, userAgent);

            // 设置 access token 到 cookie（不设置 httpOnly，允许前端读取以判断过期时间）
            // 注意：Access Token 是短期令牌，即使被 XSS 窃取影响也相对较小
            // 前端需要通过 JavaScript 读取它来判断是否即将过期，以便主动刷新
            ResponseCookie accessTokenCookie = ResponseCookie.from("token", response.getToken())
                    .httpOnly(false) // 允许前端 JavaScript 读取，用于判断过期时间
                    .secure(false) // 如果使用 HTTPS，设置为 true
                    .path("/") // cookie 路径
                    .maxAge(Duration.ofSeconds(jwtProperties.getExpirationSeconds())) // 过期时间
                    .sameSite("Lax") // CSRF 防护
                    .build();

            // 设置 refresh token 到 httpOnly cookie（更安全）
            ResponseCookie refreshTokenCookie = ResponseCookie.from("refresh_token", response.getRefreshToken())
                    .httpOnly(true) // 防止 XSS 攻击，refresh token 必须 httpOnly
                    .secure(false) // 如果使用 HTTPS，设置为 true
                    .path("/") // cookie 路径
                    .maxAge(Duration.ofSeconds(jwtProperties.getRefreshExpirationSeconds())) // refresh token 过期时间
                    .sameSite("Lax") // CSRF 防护
                    .build();

            // 从响应中移除 refresh token，避免在响应体中暴露（已设置在 cookie 中）
            LoginResponse safeResponse = new LoginResponse(
                    response.getToken(),
                    null, // refresh token 不返回在响应体中
                    response.getExpiresAt(),
                    response.getUser());

            body.put("success", true);
            body.put("message", "登录成功");
            body.put("data", safeResponse);

            return ResponseEntity.ok()
                    .header(HttpHeaders.SET_COOKIE, accessTokenCookie.toString())
                    .header(HttpHeaders.SET_COOKIE, refreshTokenCookie.toString())
                    .body(body);
        } catch (IllegalArgumentException ex) {
            log.warn("登录失败: {}", ex.getMessage());

            body.put("success", false);
            body.put("message", ex.getMessage());
            body.put("data", null);

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(body);
        } catch (Exception e) {
            log.error("登录异常", e);

            body.put("success", false);
            body.put("message", "登录失败，请稍后重试");
            body.put("data", null);

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(body);
        }
    }

    /**
     * 新增用户
     */
    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> createUser(@RequestBody CreateUserRequest request) {
        Map<String, Object> body = new HashMap<>();
        try {
            User user = authService.createUser(request);

            body.put("success", true);
            body.put("message", "用户创建成功");
            body.put("data", user);

            return ResponseEntity.status(HttpStatus.CREATED).body(body);
        } catch (IllegalArgumentException ex) {
            log.warn("创建用户失败: {}", ex.getMessage());

            body.put("success", false);
            body.put("message", ex.getMessage());
            body.put("data", null);

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(body);
        } catch (Exception e) {
            log.error("创建用户异常", e);

            body.put("success", false);
            body.put("message", "创建用户失败，请稍后重试");
            body.put("data", null);

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(body);
        }
    }

    /**
     * 检查 Token 有效性
     * <p>
     * 用于前端验证当前用户的登录状态。此接口不在拦截器中处理，由接口内部自行验证 token。
     * 如果 token 有效则返回认证信息，如果 token 无效或过期则返回相应的错误状态。
     * </p>
     *
     * @param request HTTP 请求对象，用于提取 token
     * @return 认证状态和用户信息
     */
    @GetMapping("/check")
    public ResponseEntity<Map<String, Object>> checkToken(HttpServletRequest request) {
        Map<String, Object> body = new HashMap<>();

        try {
            // 1. 从请求中提取 Token
            String token = extractToken(request);

            if (!StringUtils.hasText(token)) {
                body.put("success", false);
                body.put("message", "未找到 Token");
                body.put("data", null);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(body);
            }

            // 2. 验证并解析 Token
            DecodedJWT decodedJWT = jwtTokenService.verifyToken(token);

            // 3. 提取用户信息
            String username = decodedJWT.getSubject();
            List<String> roles = extractListClaim(decodedJWT, "roles");
            List<String> permissions = extractListClaim(decodedJWT, "permissions");

            // 4. 返回用户信息
            Map<String, Object> userInfo = new HashMap<>();
            userInfo.put("username", username);
            userInfo.put("roles", roles);
            userInfo.put("permissions", permissions);

            body.put("success", true);
            body.put("message", "Token 有效");
            body.put("data", userInfo);

            return ResponseEntity.ok(body);

        } catch (com.auth0.jwt.exceptions.JWTVerificationException e) {
            // Token 验证失败（签名错误、过期等）
            log.debug("Token 验证失败: {}", e.getMessage());
            body.put("success", false);
            body.put("message", "Token 无效或已过期: " + e.getMessage());
            body.put("data", null);
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(body);
        } catch (Exception e) {
            // 其他异常
            log.error("Token 检查异常", e);
            body.put("success", false);
            body.put("message", "Token 检查失败，请稍后重试");
            body.put("data", null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(body);
        }
    }

    /**
     * 刷新 Access Token
     * <p>
     * 使用 Refresh Token 刷新 Access Token，Refresh Token 从 httpOnly cookie 中获取
     * </p>
     *
     * @param request HTTP 请求对象
     * @return 新的 Access Token 和过期时间
     */
    @PostMapping("/refresh")
    public ResponseEntity<Map<String, Object>> refreshToken(HttpServletRequest request) {
        Map<String, Object> body = new HashMap<>();
        try {
            // 从 cookie 中获取 refresh token
            String refreshToken = extractRefreshToken(request);
            if (!StringUtils.hasText(refreshToken)) {
                body.put("success", false);
                body.put("message", "未找到 Refresh Token");
                body.put("data", null);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(body);
            }

            // 验证 refresh token（先验证 JWT，再验证数据库中的状态）
            DecodedJWT decodedJWT = jwtTokenService.verifyRefreshToken(refreshToken);
            String username = decodedJWT.getSubject();

            // 验证 refresh token 在数据库中是否有效（检查是否被撤销）
            getjobs.modules.auth.domain.RefreshToken refreshTokenEntity = refreshTokenService
                    .validateToken(refreshToken);
            if (refreshTokenEntity == null) {
                throw new IllegalArgumentException("Refresh Token 无效或已被撤销");
            }

            // 查询用户信息以生成新的 access token
            getjobs.modules.auth.domain.User user = authService.getUserByUsername(username, "SECRET_QUERY_KEY_2024");

            // 检查账号状态
            if (!user.getEnabled()) {
                throw new IllegalArgumentException("账号已被禁用");
            }
            if (user.getLocked()) {
                throw new IllegalArgumentException("账号已被锁定");
            }

            // 构建用户信息（包含角色和权限）
            UserInfoDTO userInfo = authService.buildUserInfoDTO(user);

            // 生成新的 access token 和 refresh token（token 轮换）
            String newAccessToken = jwtTokenService.generateAccessToken(userInfo);
            String newRefreshToken = jwtTokenService.generateRefreshToken(username);
            long expiresAt = Instant.now()
                    .plusSeconds(jwtProperties.getExpirationSeconds())
                    .toEpochMilli();

            // Token 轮换：撤销旧 token，保存新 token
            String clientIp = getClientIp(request);
            String userAgent = request.getHeader("User-Agent");
            refreshTokenService.rotateToken(refreshToken, newRefreshToken, username, clientIp, userAgent);

            // 设置新的 access token 到 cookie（不设置 httpOnly，允许前端读取）
            ResponseCookie accessTokenCookie = ResponseCookie.from("token", newAccessToken)
                    .httpOnly(false) // 允许前端 JavaScript 读取，用于判断过期时间
                    .secure(false)
                    .path("/")
                    .maxAge(Duration.ofSeconds(jwtProperties.getExpirationSeconds()))
                    .sameSite("Lax")
                    .build();

            // 设置新的 refresh token 到 cookie（token 轮换）
            ResponseCookie newRefreshTokenCookie = ResponseCookie.from("refresh_token", newRefreshToken)
                    .httpOnly(true)
                    .secure(false)
                    .path("/")
                    .maxAge(Duration.ofSeconds(jwtProperties.getRefreshExpirationSeconds()))
                    .sameSite("Lax")
                    .build();

            Map<String, Object> tokenData = new HashMap<>();
            tokenData.put("token", newAccessToken);
            tokenData.put("expiresAt", expiresAt);

            body.put("success", true);
            body.put("message", "Token 刷新成功");
            body.put("data", tokenData);

            return ResponseEntity.ok()
                    .header(HttpHeaders.SET_COOKIE, accessTokenCookie.toString())
                    .header(HttpHeaders.SET_COOKIE, newRefreshTokenCookie.toString())
                    .body(body);

        } catch (IllegalArgumentException ex) {
            log.warn("刷新 Token 失败: {}", ex.getMessage());
            body.put("success", false);
            body.put("message", ex.getMessage());
            body.put("data", null);
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(body);
        } catch (com.auth0.jwt.exceptions.JWTVerificationException e) {
            log.debug("Refresh Token 验证失败: {}", e.getMessage());
            body.put("success", false);
            body.put("message", "Refresh Token 无效或已过期");
            body.put("data", null);
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(body);
        } catch (Exception e) {
            log.error("刷新 Token 异常", e);
            body.put("success", false);
            body.put("message", "刷新 Token 失败，请稍后重试");
            body.put("data", null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(body);
        }
    }

    /**
     * 登出接口
     * <p>
     * 撤销当前用户的 Refresh Token，并清除 Cookie
     * </p>
     *
     * @param request HTTP 请求对象
     * @return 登出结果
     */
    @PostMapping("/logout")
    public ResponseEntity<Map<String, Object>> logout(HttpServletRequest request) {
        Map<String, Object> body = new HashMap<>();
        try {
            // 从 cookie 中获取 refresh token
            String refreshToken = extractRefreshToken(request);
            if (StringUtils.hasText(refreshToken)) {
                // 撤销 refresh token
                refreshTokenService.revokeToken(refreshToken);
            }

            // 清除 cookie（登出时清除，httpOnly 设置不影响清除操作）
            ResponseCookie accessTokenCookie = ResponseCookie.from("token", "")
                    .httpOnly(false) // 与设置时保持一致
                    .secure(false)
                    .path("/")
                    .maxAge(0) // 立即过期
                    .sameSite("Lax")
                    .build();

            ResponseCookie refreshTokenCookie = ResponseCookie.from("refresh_token", "")
                    .httpOnly(true)
                    .secure(false)
                    .path("/")
                    .maxAge(0) // 立即过期
                    .sameSite("Lax")
                    .build();

            body.put("success", true);
            body.put("message", "登出成功");
            body.put("data", null);

            return ResponseEntity.ok()
                    .header(HttpHeaders.SET_COOKIE, accessTokenCookie.toString())
                    .header(HttpHeaders.SET_COOKIE, refreshTokenCookie.toString())
                    .body(body);

        } catch (Exception e) {
            log.error("登出异常", e);
            body.put("success", false);
            body.put("message", "登出失败，请稍后重试");
            body.put("data", null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(body);
        }
    }

    /**
     * 从请求中提取 Refresh Token（从 cookie 中）
     *
     * @param request HTTP 请求
     * @return Refresh Token 字符串，如果未找到则返回 null
     */
    private String extractRefreshToken(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            Optional<Cookie> refreshTokenCookie = Arrays.stream(cookies)
                    .filter(cookie -> "refresh_token".equals(cookie.getName()))
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
     *
     * @param request HTTP 请求
     * @return 客户端 IP 地址
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
        // 如果包含多个 IP，取第一个
        if (ip != null && ip.contains(",")) {
            ip = ip.split(",")[0].trim();
        }
        return ip;
    }

    /**
     * 从请求中提取 Access Token（JWT Token）
     * <p>
     * 注意：此方法仅用于提取 Access Token，不处理 Refresh Token。
     * Refresh Token 应使用 {@link #extractRefreshToken(HttpServletRequest)} 方法提取。
     * </p>
     * <p>
     * 提取优先级：
     * 1. Authorization: Bearer {token}
     * 2. X-Auth-Token: {token}
     * 3. Cookie: token（通过 authInterceptorProperties.getTokenCookieName() 获取，默认为
     * "token"）
     * </p>
     * <p>
     * 如果 Access Token 不存在或已过期，应调用 /api/auth/refresh 接口使用 Refresh Token 刷新。
     * </p>
     *
     * @param request HTTP 请求
     * @return Access Token 字符串，如果未找到则返回 null
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
            String cookieName = authInterceptorProperties.getTokenCookieName();
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
     * 根据用户名查询用户完整信息
     * <p>
     * 需要提供正确的查询密钥才能查询用户信息
     * </p>
     *
     * @param request 查询用户请求（包含用户名和查询密钥）
     * @return 用户完整信息
     */
    @PostMapping("/query")
    public ResponseEntity<Map<String, Object>> queryUser(@RequestBody QueryUserRequest request) {
        Map<String, Object> body = new HashMap<>();
        try {
            User user = authService.getUserByUsername(request.getUsername(), request.getSecretKey());

            body.put("success", true);
            body.put("message", "查询成功");
            body.put("data", user);

            return ResponseEntity.ok(body);
        } catch (IllegalArgumentException ex) {
            log.warn("查询用户失败: {}", ex.getMessage());

            body.put("success", false);
            body.put("message", ex.getMessage());
            body.put("data", null);

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(body);
        } catch (Exception e) {
            log.error("查询用户异常", e);

            body.put("success", false);
            body.put("message", "查询用户失败，请稍后重试");
            body.put("data", null);

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(body);
        }
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
            log.debug("无法解析 JWT Claim '{}': {}", claimName, e.getMessage());
        }
        return Collections.emptyList();
    }
}
