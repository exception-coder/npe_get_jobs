package getjobs.modules.task.listener;

import getjobs.common.infrastructure.task.contract.TaskNotificationListener;
import getjobs.common.infrastructure.task.domain.TaskNotification;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

/**
 * 任务执行日志监听器
 * 记录所有任务的执行状态变化
 * 
 * @author getjobs
 * @since v2.0.2
 */
@Slf4j
@Component
public class TaskExecutionLogger implements TaskNotificationListener {

    @Override
    public void onTaskStart(TaskNotification notification) {
        log.info("========================================");
        log.info("任务开始执行");
        log.info("任务ID: {}", notification.getExecutionId());
        log.info("任务名称: {}", notification.getTaskName());
        log.info("任务类型: {}", notification.getTaskType());
        log.info("开始时间: {}", notification.getStartTime());
        log.info("========================================");
    }

    @Override
    public void onTaskSuccess(TaskNotification notification) {
        log.info("========================================");
        log.info("任务执行成功");
        log.info("任务ID: {}", notification.getExecutionId());
        log.info("任务名称: {}", notification.getTaskName());
        log.info("执行耗时: {} ms", notification.getDuration());
        log.info("执行结果: {}", notification.getResultData());
        log.info("========================================");
    }

    @Override
    public void onTaskFailed(TaskNotification notification) {
        log.error("========================================");
        log.error("任务执行失败");
        log.error("任务ID: {}", notification.getExecutionId());
        log.error("任务名称: {}", notification.getTaskName());
        log.error("失败原因: {}", notification.getErrorMessage());
        if (notification.getDuration() != null) {
            log.error("执行耗时: {} ms", notification.getDuration());
        }
        log.error("========================================");
    }

    @Override
    public void onTaskCancelled(TaskNotification notification) {
        log.warn("========================================");
        log.warn("任务已取消");
        log.warn("任务ID: {}", notification.getExecutionId());
        log.warn("任务名称: {}", notification.getTaskName());
        log.warn("========================================");
    }

    @Override
    public boolean supports(String taskType) {
        // 监听所有类型的任务
        return true;
    }
}
