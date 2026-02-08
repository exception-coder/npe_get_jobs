package getjobs.modules.auth.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import getjobs.modules.auth.config.JwtProperties;
import getjobs.modules.auth.dto.UserInfoDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Date;

/**
 * JWT 令牌生成与校验服务
 *
 * @author getjobs
 */
@Service
@RequiredArgsConstructor
public class JwtTokenService {

    private final JwtProperties jwtProperties;

    /**
     * 生成 Access Token（短期令牌，用于API访问）
     *
     * @param user 用户信息
     * @return access token 字符串
     */
    public String generateAccessToken(UserInfoDTO user) {
        Instant now = Instant.now();
        Instant expiresAt = now.plusSeconds(jwtProperties.getExpirationSeconds());

        Algorithm algorithm = Algorithm.HMAC256(jwtProperties.getSecret());

        return JWT.create()
                .withIssuer(jwtProperties.getIssuer())
                .withSubject(user.getUsername())
                .withClaim("roles", user.getRoles())
                .withClaim("permissions", user.getPermissions())
                .withClaim("type", "access") // 标识为access token
                .withIssuedAt(Date.from(now))
                .withExpiresAt(Date.from(expiresAt))
                .sign(algorithm);
    }

    /**
     * 生成 Refresh Token（长期令牌，用于刷新access token）
     *
     * @param username 用户名
     * @return refresh token 字符串
     */
    public String generateRefreshToken(String username) {
        Instant now = Instant.now();
        Instant expiresAt = now.plusSeconds(jwtProperties.getRefreshExpirationSeconds());

        Algorithm algorithm = Algorithm.HMAC256(jwtProperties.getSecret());

        return JWT.create()
                .withIssuer(jwtProperties.getIssuer())
                .withSubject(username)
                .withClaim("type", "refresh") // 标识为refresh token
                .withIssuedAt(Date.from(now))
                .withExpiresAt(Date.from(expiresAt))
                .sign(algorithm);
    }

    /**
     * 生成 JWT 令牌（兼容旧方法，生成access token）
     *
     * @param user 用户信息
     * @return token 字符串
     * @deprecated 使用 {@link #generateAccessToken(UserInfoDTO)} 代替
     */
    @Deprecated
    public String generateToken(UserInfoDTO user) {
        return generateAccessToken(user);
    }

    /**
     * 校验并解析 Token
     *
     * @param token JWT 字符串
     * @return 解析后的 JWT
     */
    public DecodedJWT verifyToken(String token) {
        Algorithm algorithm = Algorithm.HMAC256(jwtProperties.getSecret());
        return JWT.require(algorithm)
                .withIssuer(jwtProperties.getIssuer())
                .build()
                .verify(token);
    }

    /**
     * 校验并解析 Refresh Token
     *
     * @param refreshToken Refresh Token 字符串
     * @return 解析后的 JWT，如果token类型不是refresh则抛出异常
     * @throws com.auth0.jwt.exceptions.JWTVerificationException 如果token无效或类型不匹配
     */
    public DecodedJWT verifyRefreshToken(String refreshToken) {
        DecodedJWT decodedJWT = verifyToken(refreshToken);

        // 验证token类型
        String tokenType = decodedJWT.getClaim("type").asString();
        if (!"refresh".equals(tokenType)) {
            throw new com.auth0.jwt.exceptions.JWTVerificationException("Token类型不匹配，期望refresh token");
        }

        return decodedJWT;
    }
}
