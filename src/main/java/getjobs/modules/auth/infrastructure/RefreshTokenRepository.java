package getjobs.modules.auth.infrastructure;

import getjobs.common.infrastructure.repository.common.IRefreshTokenRepository;
import getjobs.modules.auth.domain.RefreshToken;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.Instant;
import java.util.List;

/**
 * Refresh Token 仓储（SQLite实现）
 *
 * @author getjobs
 */
public interface RefreshTokenRepository extends IRefreshTokenRepository<RefreshToken> {

    // 所有业务方法已在IRefreshTokenRepository中定义
    
    /**
     * 根据用户名查找所有有效的 Refresh Token
     *
     * @param username 用户名
     * @param now      当前时间
     * @return Refresh Token 列表
     */
    @Override
    @Query("SELECT rt FROM RefreshToken rt WHERE rt.username = :username " +
            "AND rt.revoked = false AND rt.expiresAt > :now")
    List<RefreshToken> findValidTokensByUsername(@Param("username") String username, @Param("now") Instant now);

    /**
     * 根据用户名撤销所有有效的 Refresh Token（用于登出或强制下线）
     *
     * @param username 用户名
     * @param now      当前时间
     * @return 撤销的 Token 数量
     */
    @Override
    @Modifying
    @Query("UPDATE RefreshToken rt SET rt.revoked = true, rt.revokedAt = :now " +
            "WHERE rt.username = :username AND rt.revoked = false AND rt.expiresAt > :now")
    int revokeAllValidTokensByUsername(@Param("username") String username, @Param("now") Instant now);

    /**
     * 删除所有过期的 Refresh Token（清理任务）
     *
     * @param now 当前时间
     * @return 删除的 Token 数量
     */
    @Override
    @Modifying
    @Query("DELETE FROM RefreshToken rt WHERE rt.expiresAt <= :now")
    int deleteExpiredTokens(@Param("now") Instant now);

    /**
     * 删除所有已撤销的 Refresh Token（清理任务）
     *
     * @param beforeTime 早于此时间的已撤销 Token 将被删除
     * @return 删除的 Token 数量
     */
    @Override
    @Modifying
    @Query("DELETE FROM RefreshToken rt WHERE rt.revoked = true AND rt.revokedAt <= :beforeTime")
    int deleteRevokedTokensBefore(@Param("beforeTime") Instant beforeTime);
}
