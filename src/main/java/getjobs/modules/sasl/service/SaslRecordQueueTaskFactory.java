package getjobs.modules.sasl.service;

import getjobs.common.infrastructure.queue.contract.QueueTask;
import getjobs.common.infrastructure.queue.domain.QueueTaskConfig;
import getjobs.common.infrastructure.repository.common.ISaslRecordRepository;
import getjobs.common.infrastructure.repository.common.ISaslRecordUpdateLogRepository;
import getjobs.common.infrastructure.repository.service.RepositoryServiceHelper;
import getjobs.modules.sasl.domain.SaslRecord;
import getjobs.modules.sasl.domain.SaslRecordUpdateLog;
import getjobs.modules.sasl.enums.CallStatus;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.time.LocalDateTime;

/**
 * SASL 记录队列任务工厂
 * 负责创建和管理 SASL 相关的队列任务
 * 
 * @author getjobs
 */
@Slf4j
@Component
@RequiredArgsConstructor
public class SaslRecordQueueTaskFactory {

    private static final String MODULE_NAME = "sasl";

    private final RepositoryServiceHelper repositoryHelper;

    private ISaslRecordRepository<SaslRecord> recordRepository;
    private ISaslRecordUpdateLogRepository<SaslRecordUpdateLog> updateLogRepository;

    /**
     * 初始化Repository实例
     * <p>
     * 根据配置自动选择SQLite或MySQL的Repository实现。
     * </p>
     */
    @PostConstruct
    @SuppressWarnings("unchecked")
    public void initRepositories() {
        this.recordRepository = repositoryHelper.getRepository(ISaslRecordRepository.class, MODULE_NAME);
        // 通过 repositoryHelper 获取 updateLogRepository，支持自动切换 SQLite/MySQL
        this.updateLogRepository = repositoryHelper.getRepository(ISaslRecordUpdateLogRepository.class, MODULE_NAME);

        if (repositoryHelper.isMySQL(MODULE_NAME)) {
            log.info("SaslRecordQueueTaskFactory 使用 MySQL 数据源");
        } else {
            log.info("SaslRecordQueueTaskFactory 使用 SQLite 数据源");
        }
    }

    /**
     * 队列任务配置常量
     */
    private static final String TASK_NAME = "SASL记录更新";
    private static final String TASK_TYPE = "SASL_RECORD_UPDATE";
    private static final int MAX_RETRIES = 5;
    private static final long RETRY_DELAY_MS = 100L;
    private static final String TASK_DESCRIPTION = "更新SASL记录，避免SQLite并发冲突";

    /**
     * 创建记录更新队列任务
     * 
     * @param id           记录ID
     * @param callStatus   致电状态
     * @param remark       备注
     * @param nextCallTime 下次致电时间
     * @param operator     操作用户名（可选，如果为null则使用SYSTEM）
     * @return 队列任务实例
     */
    public QueueTask createUpdateTask(Long id, CallStatus callStatus, String remark, LocalDateTime nextCallTime,
            String operator) {
        final String finalOperator = operator != null ? operator : "SYSTEM";
        return new QueueTask() {
            @Override
            public QueueTaskConfig getConfig() {
                return QueueTaskConfig.builder()
                        .taskName(TASK_NAME)
                        .taskType(TASK_TYPE)
                        .maxRetries(MAX_RETRIES)
                        .retryDelayMs(RETRY_DELAY_MS)
                        .useExponentialBackoff(true)
                        .description(TASK_DESCRIPTION)
                        .build();
            }

            @Override
            public Object execute() throws Exception {
                // 查询记录
                SaslRecord record = recordRepository.findById(id)
                        .orElseThrow(() -> new IllegalArgumentException("记录不存在，ID: " + id));

                // 更新记录
                record.setCallStatus(callStatus);
                record.setRemark(StringUtils.hasText(remark) ? remark.trim() : null);
                record.setLastCallTime(LocalDateTime.now());
                record.setNextCallTime(nextCallTime);

                // 保存记录
                SaslRecord savedRecord = recordRepository.save(record);

                // 记录更新流水（使用创建任务时传递的操作者）
                saveUpdateLog(savedRecord, callStatus, remark, nextCallTime, finalOperator);

                log.info("队列任务执行成功：更新SASL记录 ID={}", savedRecord.getId());

                return savedRecord;
            }

            @Override
            public boolean shouldRetry(Throwable exception) {
                // 只对 SQLite 锁定错误重试
                return isSqliteLockError(exception);
            }
        };
    }

    /**
     * 检查异常是否是 SQLite 数据库锁定错误
     * 
     * @param e 异常对象
     * @return 如果是 SQLite 锁定错误返回 true，否则返回 false
     */
    private boolean isSqliteLockError(Throwable e) {
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

    /**
     * 保存更新流水记录
     *
     * @param record       更新后的记录
     * @param callStatus   致电状态
     * @param remark       备注
     * @param nextCallTime 下次致电时间
     * @param operator     操作用户名
     */
    private void saveUpdateLog(SaslRecord record, CallStatus callStatus, String remark, LocalDateTime nextCallTime,
            String operator) {
        try {
            SaslRecordUpdateLog updateLog = new SaslRecordUpdateLog();
            updateLog.setMrt(record.getMrt());
            updateLog.setCallStatus(callStatus);
            updateLog.setRemark(StringUtils.hasText(remark) ? remark.trim() : null);
            updateLog.setNextCallTime(nextCallTime);
            updateLog.setOperator(operator);

            updateLogRepository.save(updateLog);
            log.debug("已记录SASL记录更新流水: mrt={}, operator={}", record.getMrt(), operator);
        } catch (Exception e) {
            // 记录流水失败不应该影响主流程，只记录警告日志
            log.warn("记录SASL记录更新流水失败: mrt={}", record.getMrt(), e);
        }
    }
}
