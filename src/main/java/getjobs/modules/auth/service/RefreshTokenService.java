package getjobs.modules.auth.service;

import getjobs.modules.auth.config.JwtProperties;
import getjobs.modules.auth.dao.RefreshTokenDao;
import getjobs.modules.auth.domain.RefreshToken;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.time.Instant;
import java.util.List;

/**
 * Refresh Token 管理服务
 * <p>
 * 负责 Refresh Token 的业务逻辑，如 Token 哈希、验证、撤销和清理调度。
 * 数据库操作委托给 {@link RefreshTokenDao} 处理。
 * </p>
 *
 * @author getjobs
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class RefreshTokenService {

    private final RefreshTokenDao refreshTokenDao;
    private final JwtProperties jwtProperties;

    /**
     * 保存 Refresh Token
     *
     * @param tokenValue Refresh Token 值（JWT 字符串）
     * @param username   用户名
     * @param clientIp   客户端 IP（可选）
     * @param userAgent  User-Agent（可选）
     * @return 保存的 RefreshToken 实体
     */
    public RefreshToken saveToken(String tokenValue, String username, String clientIp, String userAgent) {
        String tokenHash = hashToken(tokenValue);
        Instant expiresAt = Instant.now().plusSeconds(jwtProperties.getRefreshExpirationSeconds());

        return refreshTokenDao.save(tokenHash, username, expiresAt, clientIp, userAgent);
    }

    /**
     * 验证 Refresh Token 是否有效
     *
     * @param tokenValue Refresh Token 值（JWT 字符串）
     * @return RefreshToken 实体，如果无效则返回 null
     */
    public RefreshToken validateToken(String tokenValue) {
        String tokenHash = hashToken(tokenValue);
        RefreshToken refreshToken = refreshTokenDao.findByTokenHash(tokenHash)
                .orElse(null);

        if (refreshToken == null) {
            log.debug("Refresh Token 不存在，tokenHash={}", tokenHash);
            return null;
        }

        if (!refreshToken.isValid()) {
            log.debug("Refresh Token 无效，username={}, revoked={}, expiresAt={}",
                    refreshToken.getUsername(), refreshToken.getRevoked(), refreshToken.getExpiresAt());
            return null;
        }

        return refreshToken;
    }

    /**
     * 撤销 Refresh Token（用于登出）
     *
     * @param tokenValue Refresh Token 值（JWT 字符串）
     * @return true 如果成功撤销
     */
    public boolean revokeToken(String tokenValue) {
        String tokenHash = hashToken(tokenValue);
        RefreshToken refreshToken = refreshTokenDao.findByTokenHash(tokenHash)
                .orElse(null);

        if (refreshToken == null) {
            log.debug("要撤销的 Refresh Token 不存在，tokenHash={}", tokenHash);
            return false;
        }

        if (refreshToken.getRevoked()) {
            log.debug("Refresh Token 已被撤销，username={}", refreshToken.getUsername());
            return false;
        }

        refreshToken.revoke();
        refreshTokenDao.update(refreshToken);
        log.info("撤销 Refresh Token，username={}", refreshToken.getUsername());
        return true;
    }

    /**
     * 撤销用户的所有 Refresh Token（用于强制下线或账号禁用）
     *
     * @param username 用户名
     * @return 撤销的 Token 数量
     */
    public int revokeAllUserTokens(String username) {
        Instant now = Instant.now();
        int count = refreshTokenDao.revokeAllValidTokensByUsername(username, now);
        log.info("撤销用户所有 Refresh Token，username={}, count={}", username, count);
        return count;
    }

    /**
     * Token 轮换：撤销旧 Token 并保存新 Token
     * <p>
     * 这是最佳实践：每次刷新时生成新的 refresh token，撤销旧的
     * </p>
     *
     * @param oldTokenValue 旧的 Refresh Token 值
     * @param newTokenValue 新的 Refresh Token 值
     * @param username      用户名
     * @param clientIp      客户端 IP（可选）
     * @param userAgent     User-Agent（可选）
     * @return 新的 RefreshToken 实体
     */
    public RefreshToken rotateToken(String oldTokenValue, String newTokenValue, String username,
            String clientIp, String userAgent) {
        // 撤销旧 token
        revokeToken(oldTokenValue);

        // 保存新 token
        return saveToken(newTokenValue, username, clientIp, userAgent);
    }

    /**
     * 获取用户的所有有效 Refresh Token（用于管理界面）
     *
     * @param username 用户名
     * @return Refresh Token 列表
     */
    public List<RefreshToken> getUserValidTokens(String username) {
        Instant now = Instant.now();
        return refreshTokenDao.findValidTokensByUsername(username, now);
    }

    /**
     * 清理过期的 Refresh Token（定时任务）
     * <p>
     * 每天凌晨 2 点执行
     * </p>
     */
    @Scheduled(cron = "0 0 2 * * ?")
    public void cleanupExpiredTokens() {
        Instant now = Instant.now();
        refreshTokenDao.deleteExpiredTokens(now);
    }

    /**
     * 清理已撤销的 Refresh Token（定时任务）
     * <p>
     * 删除 7 天前撤销的 Token
     * 每天凌晨 3 点执行
     * </p>
     */
    @Scheduled(cron = "0 0 3 * * ?")
    public void cleanupRevokedTokens() {
        Instant beforeTime = Instant.now().minusSeconds(7 * 24 * 60 * 60); // 7天前
        refreshTokenDao.deleteRevokedTokensBefore(beforeTime);
    }

    /**
     * 对 Token 进行哈希（使用 SHA-256）
     *
     * @param token Token 值
     * @return 哈希值（十六进制字符串）
     */
    private String hashToken(String token) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(token.getBytes(StandardCharsets.UTF_8));
            return bytesToHex(hash);
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("SHA-256 算法不可用", e);
        }
    }

    /**
     * 将字节数组转换为十六进制字符串
     */
    private String bytesToHex(byte[] bytes) {
        StringBuilder result = new StringBuilder();
        for (byte b : bytes) {
            result.append(String.format("%02x", b));
        }
        return result.toString();
    }
}
