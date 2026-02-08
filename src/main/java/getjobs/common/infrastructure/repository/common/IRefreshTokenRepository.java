package getjobs.common.infrastructure.repository.common;

import org.springframework.data.jpa.repository.JpaRepository;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

/**
 * Refresh Token仓储统一接口
 *
 * @param <T> Refresh Token实体类型
 * @author getjobs
 */
public interface IRefreshTokenRepository<T> extends JpaRepository<T, Long> {
    
    /**
     * 根据 Token 哈希值查找 Refresh Token
     *
     * @param tokenHash Token 哈希值
     * @return Refresh Token
     */
    Optional<T> findByTokenHash(String tokenHash);
    
    /**
     * 根据用户名查找所有有效的 Refresh Token
     *
     * @param username 用户名
     * @param now      当前时间
     * @return Refresh Token 列表
     */
    List<T> findValidTokensByUsername(String username, Instant now);
    
    /**
     * 根据用户名撤销所有有效的 Refresh Token（用于登出或强制下线）
     *
     * @param username 用户名
     * @param now      当前时间
     * @return 撤销的 Token 数量
     */
    int revokeAllValidTokensByUsername(String username, Instant now);
    
    /**
     * 删除所有过期的 Refresh Token（清理任务）
     *
     * @param now 当前时间
     * @return 删除的 Token 数量
     */
    int deleteExpiredTokens(Instant now);
    
    /**
     * 删除所有已撤销的 Refresh Token（清理任务）
     *
     * @param beforeTime 早于此时间的已撤销 Token 将被删除
     * @return 删除的 Token 数量
     */
    int deleteRevokedTokensBefore(Instant beforeTime);
}

