package getjobs.modules.auth.dao;

import getjobs.common.infrastructure.repository.common.IRefreshTokenRepository;
import getjobs.common.infrastructure.repository.service.RepositoryServiceHelper;
import getjobs.modules.auth.domain.RefreshToken;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

/**
 * Refresh Token 数据访问层
 * <p>
 * 负责 Refresh Token 的数据库操作，所有方法都带事务注解。
 * 将数据库操作与业务逻辑分离，遵循单一职责原则。
 * </p>
 *
 * @author getjobs
 */
@Slf4j
@Repository
@RequiredArgsConstructor
public class RefreshTokenDao {

    private static final String MODULE_NAME = "auth";

    private final RepositoryServiceHelper repositoryHelper;

    // Repository实例（使用统一接口，通过RepositoryServiceHelper动态获取）
    private IRefreshTokenRepository<RefreshToken> refreshTokenRepository;

    /**
     * 初始化Repository实例
     * <p>
     * 根据配置自动选择SQLite或MySQL的Repository实现。
     * </p>
     */
    @PostConstruct
    @SuppressWarnings("unchecked")
    public void initRepositories() {
        this.refreshTokenRepository = repositoryHelper.getRepository(IRefreshTokenRepository.class, MODULE_NAME);

        if (repositoryHelper.isMySQL(MODULE_NAME)) {
            log.info("RefreshTokenDao 使用 MySQL 数据源");
        } else {
            log.info("RefreshTokenDao 使用 SQLite 数据源");
        }
    }

    /**
     * 保存 Refresh Token
     *
     * @param tokenHash Token 哈希值
     * @param username  用户名
     * @param expiresAt 过期时间
     * @param clientIp  客户端 IP（可选）
     * @param userAgent User-Agent（可选）
     * @return 保存的 RefreshToken 实体
     */
    @Transactional(transactionManager = "mysqlTransactionManager")
    public RefreshToken save(String tokenHash, String username, Instant expiresAt, String clientIp, String userAgent) {
        RefreshToken refreshToken = new RefreshToken();
        refreshToken.setUsername(username);
        refreshToken.setTokenHash(tokenHash);
        refreshToken.setExpiresAt(expiresAt);
        refreshToken.setRevoked(false);
        refreshToken.setClientIp(clientIp);
        refreshToken.setUserAgent(userAgent);

        RefreshToken saved = refreshTokenRepository.save(refreshToken);
        log.debug("保存 Refresh Token，username={}, expiresAt={}", username, expiresAt);
        return saved;
    }

    /**
     * 根据 Token 哈希值查询
     *
     * @param tokenHash Token 哈希值
     * @return RefreshToken 实体，如果不存在则返回 empty
     */
    @Transactional(transactionManager = "mysqlTransactionManager", readOnly = true)
    public Optional<RefreshToken> findByTokenHash(String tokenHash) {
        return refreshTokenRepository.findByTokenHash(tokenHash);
    }

    /**
     * 更新 RefreshToken 实体
     *
     * @param refreshToken RefreshToken 实体
     * @return 更新后的 RefreshToken 实体
     */
    @Transactional(transactionManager = "mysqlTransactionManager")
    public RefreshToken update(RefreshToken refreshToken) {
        return refreshTokenRepository.save(refreshToken);
    }

    /**
     * 撤销用户的所有有效 Token
     *
     * @param username 用户名
     * @param now      当前时间
     * @return 撤销的 Token 数量
     */
    @Transactional(transactionManager = "mysqlTransactionManager")
    public int revokeAllValidTokensByUsername(String username, Instant now) {
        return refreshTokenRepository.revokeAllValidTokensByUsername(username, now);
    }

    /**
     * 查询用户的所有有效 Token
     *
     * @param username 用户名
     * @param now      当前时间
     * @return Refresh Token 列表
     */
    @Transactional(transactionManager = "mysqlTransactionManager", readOnly = true)
    public List<RefreshToken> findValidTokensByUsername(String username, Instant now) {
        return refreshTokenRepository.findValidTokensByUsername(username, now);
    }

    /**
     * 删除过期的 Token
     *
     * @param now 当前时间
     * @return 删除的 Token 数量
     */
    @Transactional(transactionManager = "mysqlTransactionManager")
    public int deleteExpiredTokens(Instant now) {
        int deletedCount = refreshTokenRepository.deleteExpiredTokens(now);
        log.info("清理过期 Refresh Token，删除数量={}", deletedCount);
        return deletedCount;
    }

    /**
     * 删除指定时间之前撤销的 Token
     *
     * @param beforeTime 指定时间
     * @return 删除的 Token 数量
     */
    @Transactional(transactionManager = "mysqlTransactionManager")
    public int deleteRevokedTokensBefore(Instant beforeTime) {
        int deletedCount = refreshTokenRepository.deleteRevokedTokensBefore(beforeTime);
        log.info("清理已撤销 Refresh Token，删除数量={}", deletedCount);
        return deletedCount;
    }
}
