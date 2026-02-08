package getjobs.modules.sasl.service;

import getjobs.modules.sasl.domain.SaslRecord;
import jakarta.persistence.EntityManager;
import jakarta.persistence.OptimisticLockException;
import jakarta.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * SaslRecord 批量操作服务。
 * 提供批量保存到 SQLite 和 MySQL 的功能。
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class SaslRecordBatchService {

    /**
     * 批量插入的批次大小，每批处理 500 条记录
     * 这个值可以根据数据库性能和内存情况调整，通常范围在 200-1000 之间
     */
    private static final int BATCH_SIZE = 500;

    /**
     * 数据库锁定重试的最大次数
     */
    private static final int MAX_RETRY_ATTEMPTS = 5;

    /**
     * 重试时的等待时间（毫秒），使用指数退避策略
     */
    private static final long RETRY_DELAY_MS = 100;

    /**
     * SQLite 数据源的 EntityManager
     */
    @PersistenceContext
    private EntityManager sqliteEntityManager;

    /**
     * MySQL 数据源的 EntityManager
     */
    @PersistenceContext(unitName = "mysql")
    private EntityManager mysqlEntityManager;

    /**
     * MySQL 数据源的事务管理器，用于编程式事务管理
     */
    @Autowired
    @Qualifier("mysqlTransactionManager")
    private PlatformTransactionManager mysqlTransactionManager;

    /**
     * 批量保存记录到 SQLite，采用分批处理的方式减少数据库交互次数。
     * 使用 EntityManager 的 persist 和 flush 实现批量插入，每批处理 BATCH_SIZE 条记录。
     * 针对 SQLite 的并发写入限制，添加了重试机制处理数据库锁定错误。
     *
     * @param records 待保存的记录列表
     * @return 保存后的记录列表（包含生成的ID）
     */
    @Transactional(transactionManager = "mysqlTransactionManager")
    public List<SaslRecord> batchSaveToSqlite(List<SaslRecord> records) {
        List<SaslRecord> savedRecords = new ArrayList<>(records.size());

        for (int i = 0; i < records.size(); i++) {
            SaslRecord record = records.get(i);
            sqliteEntityManager.persist(record);
            savedRecords.add(record);

            // 每处理 BATCH_SIZE 条记录或到达最后一条记录时，执行 flush 和 clear
            // 这样可以批量提交到数据库，减少数据库交互次数
            if ((i + 1) % BATCH_SIZE == 0 || i == records.size() - 1) {
                // 使用重试机制处理 SQLite 并发写入锁定
                flushWithRetry(sqliteEntityManager);
            }
        }

        return savedRecords;
    }

    /**
     * 批量保存记录到 MySQL，采用分批处理的方式减少数据库交互次数。
     * 使用 EntityManager 的 persist 和 flush 实现批量插入，每批处理 BATCH_SIZE 条记录。
     * MySQL 不需要重试机制，因为 MySQL 的并发写入能力更强。
     *
     * @param records 待保存的记录列表
     * @return 保存后的记录列表（包含生成的ID）
     */
    @Transactional(transactionManager = "mysqlTransactionManager")
    public List<SaslRecord> batchSaveToMysql(List<SaslRecord> records) {
        List<SaslRecord> savedRecords = new ArrayList<>(records.size());

        for (int i = 0; i < records.size(); i++) {
            SaslRecord record = records.get(i);
            mysqlEntityManager.persist(record);
            savedRecords.add(record);

            // 每处理 BATCH_SIZE 条记录或到达最后一条记录时，执行 flush 和 clear
            // 这样可以批量提交到数据库，减少数据库交互次数
            if ((i + 1) % BATCH_SIZE == 0 || i == records.size() - 1) {
                mysqlEntityManager.flush();
                mysqlEntityManager.clear();
            }
        }

        return savedRecords;
    }

    /**
     * 执行 flush 操作，如果遇到数据库锁定错误则重试。
     * 使用指数退避策略，最多重试 MAX_RETRY_ATTEMPTS 次。
     * 此方法专门用于 SQLite 数据库。
     *
     * @param entityManager EntityManager 实例
     */
    private void flushWithRetry(EntityManager entityManager) {
        int attempt = 0;
        while (attempt < MAX_RETRY_ATTEMPTS) {
            try {
                entityManager.flush();
                entityManager.clear();
                return; // 成功，退出重试循环
            } catch (OptimisticLockException e) {
                // 检查是否是 SQLite 数据库锁定错误
                // 异常链可能是：OptimisticLockException -> LockAcquisitionException -> SQLiteException
                if (isSqliteLockError(e)) {
                    attempt++;
                    if (attempt >= MAX_RETRY_ATTEMPTS) {
                        log.error("数据库写入失败，已重试 {} 次，放弃操作", MAX_RETRY_ATTEMPTS, e);
                        throw new RuntimeException("数据库写入失败，可能是并发写入冲突。请稍后重试。", e);
                    }

                    // 指数退避：等待时间 = RETRY_DELAY_MS * 2^(attempt-1)
                    long waitTime = RETRY_DELAY_MS * (1L << (attempt - 1));
                    log.warn("数据库锁定，第 {} 次重试，等待 {} 毫秒后重试", attempt, waitTime);

                    try {
                        Thread.sleep(waitTime);
                    } catch (InterruptedException ie) {
                        Thread.currentThread().interrupt();
                        throw new RuntimeException("重试等待被中断", ie);
                    }
                } else {
                    // 不是数据库锁定错误，直接抛出
                    throw e;
                }
            }
        }
    }

    /**
     * 检查异常是否是 SQLite 数据库锁定错误。
     * 递归检查异常链，查找 SQLite 相关的锁定错误。
     *
     * @param e 异常对象
     * @return 如果是 SQLite 锁定错误返回 true，否则返回 false
     */
    public boolean isSqliteLockError(Throwable e) {
        if (e == null) {
            return false;
        }

        String message = e.getMessage();
        if (message != null) {
            // 检查常见的 SQLite 锁定错误信息
            if (message.contains("SQLITE_BUSY")
                    || message.contains("SQLITE_BUSY_SNAPSHOT")
                    || message.contains("database is locked")
                    || message.contains("could not execute statement")) {
                return true;
            }
        }

        // 检查异常类名
        String className = e.getClass().getName();
        if (className.contains("SQLiteException")
                || className.contains("LockAcquisitionException")) {
            return true;
        }

        // 递归检查 cause
        return isSqliteLockError(e.getCause());
    }
}
