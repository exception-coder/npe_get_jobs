package getjobs.modules.task.service;

import getjobs.common.infrastructure.task.domain.Task;
import getjobs.common.infrastructure.task.enums.TaskStatusEnum;
import getjobs.common.infrastructure.task.scheduler.TaskSchedulerService;
import getjobs.modules.task.domain.DataBackupTask;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

/**
 * 数据备份定时任务（基于基础设施模块）
 * 使用新的任务调度框架，提供更好的任务管理和监控能力
 * 
 * 相比旧版本的优势：
 * 1. 支持全局唯一任务约束，避免并发执行多个备份任务
 * 2. 提供任务执行状态跟踪和通知机制
 * 3. 支持任务超时控制
 * 4. 统一的任务执行框架，易于扩展和维护
 * 
 * @author getjobs
 * @since v2.0.2
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class DataBackupSchedulerV2 {

    private final TaskSchedulerService taskSchedulerService;
    private final DataBackupTask dataBackupTask;

    /**
     * 定时备份数据
     * 每隔5秒执行一次
     * fixedDelay: 上一次任务执行完成后等待5000毫秒(5秒)再执行下一次
     * 
     * 可选的备份频率配置：
     * - 每5秒: @Scheduled(fixedDelay = 5000)
     * - 每30秒: @Scheduled(fixedDelay = 30000)
     * - 每分钟: @Scheduled(fixedDelay = 60000)
     * - 每30分钟: @Scheduled(cron = "0 0,30 * * * ?")
     * - 每小时: @Scheduled(cron = "0 0 * * * ?")
     * - 每6小时: @Scheduled(cron = "0 0 0,6,12,18 * * ?")
     * - 每天凌晨2点: @Scheduled(cron = "0 0 2 * * ?")
     */
    @Scheduled(fixedDelay = 5000)
    public void autoBackupData() {
        try {
            // 使用基础设施模块提交任务
            Task task = taskSchedulerService.submitTask(dataBackupTask);

            // 检查任务执行结果
            if (task.getStatus() == TaskStatusEnum.SUCCESS) {
                log.debug("定时数据备份任务完成");
            } else if (task.getStatus() == TaskStatusEnum.FAILED) {
                log.error("定时数据备份任务执行失败，请查看详细日志");
            }
        } catch (Exception e) {
            log.error("提交定时数据备份任务失败", e);
        }
    }

    /**
     * 应用启动后延迟执行初始备份
     * 延迟5分钟后执行首次备份，之后不再执行
     * 
     * initialDelay: 延迟时间(毫秒)
     * fixedDelay: 设置为Long.MAX_VALUE表示只执行一次
     */
    @Scheduled(initialDelay = 300000, fixedDelay = Long.MAX_VALUE)
    public void initialBackup() {
        try {
            log.info("执行应用启动后的初始数据备份...");

            // 使用基础设施模块提交任务
            Task task = taskSchedulerService.submitTask(dataBackupTask);

            // 检查任务执行结果
            if (task.getStatus() == TaskStatusEnum.SUCCESS) {
                log.info("初始数据备份完成，备份文件: {}", task.getResult());
            } else if (task.getStatus() == TaskStatusEnum.FAILED) {
                log.error("初始数据备份失败", task.getException());
            }
        } catch (Exception e) {
            log.error("提交初始数据备份任务失败", e);
        }
    }
}
