package getjobs.listener;

import getjobs.service.DataBackupService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;

/**
 * 应用启动数据恢复初始化器
 * 在所有Bean的@PostConstruct之前优先执行，确保数据库数据在其他服务初始化前就绪
 * 
 * @author getjobs
 * @since v2.0.1
 */
@Slf4j
@Component("dataRestoreInitializer")
@RequiredArgsConstructor
@Order(Ordered.HIGHEST_PRECEDENCE) // 设置最高优先级，确保最早执行
public class DataRestoreListener {

    private final DataBackupService dataBackupService;

    /**
     * 在Bean初始化时立即恢复备份数据到内存数据库
     * 使用@PostConstruct确保在其他服务（如PlaywrightService）初始化前执行
     */
    @PostConstruct
    public void restoreDataOnStartup() {
        try {
            log.info("=== 开始数据恢复流程（优先级: HIGHEST） ===");
            log.info("检查本地备份文件并恢复到内存数据库...");

            // 检查备份文件是否存在
            var backupInfo = dataBackupService.getBackupInfo();
            boolean backupExists = (Boolean) backupInfo.get("exists");

            if (backupExists) {
                log.info("✓ 发现备份文件，准备恢复数据");
                log.info("  - 备份文件路径: {}", backupInfo.get("filePath"));
                log.info("  - 备份文件大小: {} bytes", backupInfo.get("fileSize"));

                if (backupInfo.containsKey("exportTime")) {
                    log.info("  - 备份时间: {}", backupInfo.get("exportTime"));
                }
                if (backupInfo.containsKey("configCount")) {
                    log.info("  - 备份配置数量: {}", backupInfo.get("configCount"));
                }
                if (backupInfo.containsKey("jobCount")) {
                    log.info("  - 备份职位数量: {}", backupInfo.get("jobCount"));
                }

                // 执行数据恢复
                boolean restored = dataBackupService.importData();

                if (restored) {
                    log.info("✓ 数据恢复成功！内存数据库已就绪");
                    log.info("=== 数据恢复流程完成 ===");
                } else {
                    log.warn("✗ 数据恢复失败或备份文件为空");
                }
            } else {
                log.info("✓ 未发现备份文件，使用空内存数据库启动");
                log.info("=== 数据恢复流程完成 ===");
            }

        } catch (Exception e) {
            log.error("✗ 数据恢复过程中发生错误，将使用空数据库启动", e);
            log.info("=== 数据恢复流程完成（出现错误） ===");
            // 不抛出异常，避免影响应用启动
        }
    }
}
