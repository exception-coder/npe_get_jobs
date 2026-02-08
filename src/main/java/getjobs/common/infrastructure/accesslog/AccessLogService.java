package getjobs.common.infrastructure.accesslog;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.core.task.AsyncTaskExecutor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.locks.ReentrantLock;

/**
 * Access 日志服务
 * <p>
 * 负责聚合同一秒内同一 IP 的请求，并定期输出日志。
 * </p>
 *
 * <h2>功能特性</h2>
 * <ul>
 * <li>按秒级时间戳和 IP 地址聚合请求</li>
 * <li>记录请求方法 + 请求路径的 KV 集合</li>
 * <li>统计同一秒内的请求次数</li>
 * <li>每秒自动输出日志并清空缓存</li>
 * </ul>
 *
 * @author getjobs
 * @since 2025-01-XX
 */
@Slf4j
@Service
@RequiredArgsConstructor
@ConditionalOnProperty(prefix = "access.log", name = "enabled", havingValue = "true", matchIfMissing = true)
public class AccessLogService {

    /**
     * 存储同一秒内同一 IP 的请求记录
     * Key: "IP-timestamp"（例如 "192.168.1.1-1704067200"）
     * Value: AccessLogRecord
     */
    private final Map<String, AccessLogRecord> logCache = new ConcurrentHashMap<>();

    /**
     * 用于保护日志输出的锁
     */
    private final ReentrantLock outputLock = new ReentrantLock();

    /**
     * 异步任务执行器，用于异步执行日志输出，避免阻塞定时任务线程
     */
    @Qualifier("asyncTaskExecutor")
    private final AsyncTaskExecutor asyncTaskExecutor;

    /**
     * 记录请求
     *
     * @param ip     客户端 IP 地址
     * @param method 请求方法
     * @param path   请求路径
     */
    public void recordRequest(String ip, String method, String path) {
        // 获取当前秒级时间戳
        long timestamp = System.currentTimeMillis() / 1000;
        String key = ip + "-" + timestamp;

        // 使用 computeIfAbsent 确保线程安全
        AccessLogRecord record = logCache.computeIfAbsent(key, k -> {
            AccessLogRecord newRecord = new AccessLogRecord();
            newRecord.setIp(ip);
            newRecord.setTimestamp(timestamp);
            return newRecord;
        });

        // 添加请求记录
        record.addRequest(method, path);
    }

    /**
     * 定时触发日志输出
     * <p>
     * 每秒执行一次，快速收集需要输出的记录，然后异步执行输出逻辑。
     * 这样不会阻塞定时任务线程。
     * </p>
     */
    @Scheduled(fixedRate = 1000)
    public void triggerFlushLogs() {
        if (logCache.isEmpty()) {
            return;
        }

        // 快速收集需要输出的记录，不执行耗时操作
        long currentTimestamp = System.currentTimeMillis() / 1000;
        long targetTimestamp = currentTimestamp - 1;

        // 收集需要输出的记录和需要清理的过期记录
        List<AccessLogRecord> recordsToOutput = new ArrayList<>();
        List<String> keysToRemove = new ArrayList<>();

        // 快速遍历，只收集数据，不执行耗时操作
        logCache.forEach((key, record) -> {
            if (record.getTimestamp() == targetTimestamp) {
                // 需要输出的记录
                recordsToOutput.add(record);
                keysToRemove.add(key);
            } else if (record.getTimestamp() < targetTimestamp - 1) {
                // 过期记录，需要清理
                log.warn("ACCESS_LOG - 发现过期记录，将清理: IP={}, Timestamp={}",
                        record.getIp(), record.getTimestamp());
                keysToRemove.add(key);
            }
        });

        // 如果有需要处理的记录，异步执行输出逻辑
        if (!recordsToOutput.isEmpty() || !keysToRemove.isEmpty()) {
            // 使用异步任务执行器提交任务，避免阻塞定时任务线程
            asyncTaskExecutor.execute(() -> flushLogsAsync(recordsToOutput, keysToRemove));
        }
    }

    /**
     * 异步执行日志输出逻辑
     * <p>
     * 此方法在异步线程中执行，不会阻塞定时任务线程。
     * 使用手动提交任务的方式，确保异步执行，不依赖 AOP 代理。
     * </p>
     *
     * @param recordsToOutput 需要输出的记录列表
     * @param keysToRemove    需要从缓存中移除的 key 列表
     */
    private void flushLogsAsync(List<AccessLogRecord> recordsToOutput, List<String> keysToRemove) {
        outputLock.lock();
        try {
            // 输出日志（可能耗时）
            for (AccessLogRecord record : recordsToOutput) {
                log.info("ACCESS_LOG - IP: {} | Timestamp: {} | Count: {} | Requests: {}",
                        record.getIp(),
                        record.getTimestamp(),
                        record.getCount(),
                        record.getFormattedRequests());
            }

            // 从缓存中移除已处理的记录
            for (String key : keysToRemove) {
                logCache.remove(key);
            }
        } catch (Exception e) {
            log.error("异步输出 Access 日志时发生异常", e);
        } finally {
            outputLock.unlock();
        }
    }

    @PostConstruct
    public void init() {
        log.info("═══════════════════════════════════════════════════════════");
        log.info("        Access 日志服务已启动");
        log.info("═══════════════════════════════════════════════════════════");
        log.info("功能: 按秒级聚合同一 IP 的请求并记录");
        log.info("输出频率: 每秒一次");
        log.info("═══════════════════════════════════════════════════════════");
    }

    @PreDestroy
    public void destroy() {
        // 应用关闭时，输出所有剩余的日志
        outputLock.lock();
        try {
            if (!logCache.isEmpty()) {
                log.info("═══════════════════════════════════════════════════════════");
                log.info("        应用关闭，输出剩余 Access 日志");
                log.info("═══════════════════════════════════════════════════════════");
                logCache.forEach((key, record) -> {
                    log.info("ACCESS_LOG - IP: {} | Timestamp: {} | Count: {} | Requests: {}",
                            record.getIp(),
                            record.getTimestamp(),
                            record.getCount(),
                            record.getFormattedRequests());
                });
                logCache.clear();
                log.info("═══════════════════════════════════════════════════════════");
            }
        } finally {
            outputLock.unlock();
        }
    }
}
