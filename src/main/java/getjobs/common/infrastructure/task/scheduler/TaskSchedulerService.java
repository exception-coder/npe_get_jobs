package getjobs.common.infrastructure.task.scheduler;

import getjobs.common.infrastructure.task.contract.ScheduledTask;
import getjobs.common.infrastructure.task.domain.Task;
import getjobs.common.infrastructure.task.executor.TaskExecutor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

/**
 * 任务调度服务
 * 提供任务调度的应用服务层接口
 * 
 * @author getjobs
 */
@Slf4j
@Service
public class TaskSchedulerService {

    private final TaskExecutor taskExecutor;

    /**
     * 构造函数
     * 使用@Qualifier注解指定注入我们自定义的infrastructureTaskExecutor bean
     * 
     * @param taskExecutor 任务执行器
     */
    public TaskSchedulerService(@Qualifier("infrastructureTaskExecutor") TaskExecutor taskExecutor) {
        this.taskExecutor = taskExecutor;
    }

    /**
     * 同步执行任务
     * 
     * @param scheduledTask 要执行的任务
     * @return 任务实例
     */
    public Task submitTask(ScheduledTask scheduledTask) {
        log.info("提交任务: {} - {}",
                scheduledTask.getTaskConfig().getTaskName(),
                scheduledTask.getTaskConfig().getDescription());

        return taskExecutor.executeSync(scheduledTask);
    }

    /**
     * 异步执行任务
     * 
     * @param scheduledTask 要执行的任务
     * @return Future对象
     */
    public Future<Task> submitTaskAsync(ScheduledTask scheduledTask) {
        log.info("异步提交任务: {} - {}",
                scheduledTask.getTaskConfig().getTaskName(),
                scheduledTask.getTaskConfig().getDescription());

        return taskExecutor.executeAsync(scheduledTask);
    }

    /**
     * 带超时的异步执行任务
     * 如果任务配置了超时时间，使用配置的超时时间
     * 否则使用指定的超时时间
     * 
     * @param scheduledTask 要执行的任务
     * @return 任务实例
     * @throws TimeoutException 任务执行超时
     */
    public Task submitTaskWithTimeout(ScheduledTask scheduledTask) throws TimeoutException {
        Long timeout = scheduledTask.getTaskConfig().getTimeout();

        if (timeout == null || timeout <= 0) {
            // 如果没有配置超时时间，使用默认的30分钟
            timeout = 30 * 60 * 1000L;
        }

        log.info("提交带超时任务: {} - {} (超时: {}ms)",
                scheduledTask.getTaskConfig().getTaskName(),
                scheduledTask.getTaskConfig().getDescription(),
                timeout);

        return taskExecutor.executeAsyncWithTimeout(scheduledTask, timeout, TimeUnit.MILLISECONDS);
    }
}
