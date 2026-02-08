package getjobs.modules.auth.domain;

import getjobs.repository.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

/**
 * Refresh Token 实体
 * <p>
 * 用于管理 Refresh Token 的生命周期，支持：
 * <ul>
 * <li>Token 轮换（每次刷新时生成新的，撤销旧的）</li>
 * <li>主动撤销（登出时）</li>
 * <li>验证 Token 是否有效</li>
 * <li>清理过期 Token</li>
 * </ul>
 * </p>
 *
 * @author getjobs
 */
@Getter
@Setter
@Entity
@Table(name = "sys_refresh_token", indexes = {
        @Index(name = "idx_token_hash", columnList = "token_hash"),
        @Index(name = "idx_username", columnList = "username"),
        @Index(name = "idx_expires_at", columnList = "expires_at")
})
public class RefreshToken extends BaseEntity {

    /**
     * 用户名
     */
    @Column(name = "username", nullable = false, length = 64)
    private String username;

    /**
     * Refresh Token 的哈希值（存储哈希而非明文，提高安全性）
     * <p>
     * 使用 SHA-256 或其他哈希算法对 token 进行哈希
     * </p>
     */
    @Column(name = "token_hash", nullable = false, unique = true, length = 64)
    private String tokenHash;

    /**
     * 过期时间（时间戳）
     */
    @Column(name = "expires_at", nullable = false)
    private Instant expiresAt;

    /**
     * 是否已撤销
     * <p>
     * true: 已撤销，不可使用
     * false: 有效，可以使用
     * </p>
     */
    @Column(name = "revoked", nullable = false)
    private Boolean revoked = false;

    /**
     * 撤销时间（如果被撤销）
     */
    @Column(name = "revoked_at")
    private Instant revokedAt;

    /**
     * 客户端 IP 地址（可选，用于安全审计）
     */
    @Column(name = "client_ip", length = 64)
    private String clientIp;

    /**
     * User-Agent（可选，用于安全审计）
     */
    @Column(name = "user_agent", length = 512)
    private String userAgent;

    /**
     * 检查 Token 是否有效
     *
     * @return true 如果 token 有效且未过期
     */
    public boolean isValid() {
        return !revoked && expiresAt.isAfter(Instant.now());
    }

    /**
     * 撤销 Token
     */
    public void revoke() {
        this.revoked = true;
        this.revokedAt = Instant.now();
    }
}
