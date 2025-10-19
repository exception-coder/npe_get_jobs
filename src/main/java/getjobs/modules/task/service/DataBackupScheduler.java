package getjobs.modules.task.service;

import getjobs.service.DataBackupService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

/**
 * 数据备份定时任务
 * 定期自动备份H2内存数据库中的数据到用户目录
 * 
 * @author getjobs
 * @since v2.0.1
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class DataBackupScheduler {

    private final DataBackupService dataBackupService;

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
            log.info("开始执行定时数据备份任务...");
            String backupFilePath = dataBackupService.exportData();
            log.info("定时数据备份任务完成，备份文件: {}", backupFilePath);
        } catch (Exception e) {
            log.error("定时数据备份任务执行失败", e);
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
            String backupFilePath = dataBackupService.exportData();
            log.info("初始数据备份完成，备份文件: {}", backupFilePath);
        } catch (Exception e) {
            log.error("初始数据备份失败", e);
        }
    }
}
