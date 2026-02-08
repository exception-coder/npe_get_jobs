package getjobs.modules.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 登录响应结果
 *
 * @author getjobs
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {

    /**
     * Access Token（短期令牌，用于API访问）
     */
    private String token;

    /**
     * Refresh Token（长期令牌，用于刷新access token，建议存储在httpOnly cookie中）
     */
    private String refreshToken;

    /**
     * Access Token 过期时间（毫秒时间戳）
     */
    private long expiresAt;

    /**
     * 用户信息
     */
    private UserInfoDTO user;
}
