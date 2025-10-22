package getjobs.modules.task.domain;

import getjobs.common.infrastructure.task.contract.ScheduledTask;
import getjobs.common.infrastructure.task.domain.TaskConfig;
import getjobs.service.DataBackupService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

/**
 * 数据备份任务实现
 * 使用基础设施模块的任务调度框架
 * 
 * @author getjobs
 * @since v2.0.2
 */
@Slf4j
@Component
@RequiredArgsConstructor
public class DataBackupTask implements ScheduledTask {

    private final DataBackupService dataBackupService;

    @Override
    public TaskConfig getTaskConfig() {
        return TaskConfig.builder()
                .taskName("数据备份任务")
                .taskType("DATA_BACKUP")
                .globalUnique(true) // 全局唯一，同一时刻只能执行一个备份任务
                .timeout(600000L) // 10分钟超时
                .description("定期备份H2内存数据库数据到用户目录")
                .build();
    }

    @Override
    public Object execute() throws Exception {
        log.debug("开始执行数据备份...");
        String backupFilePath = dataBackupService.exportData();
        log.debug("数据备份完成，备份文件: {}", backupFilePath);
        return backupFilePath;
    }

    @Override
    public void beforeExecute() throws Exception {
        log.debug("准备执行数据备份任务...");
    }

    @Override
    public void afterExecute(boolean success) {
        if (success) {
            log.debug("数据备份任务执行完成");
        } else {
            log.error("数据备份任务执行失败，请检查日志");
        }
    }
}
