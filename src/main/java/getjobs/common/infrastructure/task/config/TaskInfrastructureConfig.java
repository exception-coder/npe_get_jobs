package getjobs.common.infrastructure.task.config;

import getjobs.common.infrastructure.task.contract.TaskNotificationListener;
import getjobs.common.infrastructure.task.executor.TaskExecutor;
import getjobs.common.infrastructure.task.executor.UniqueTaskManager;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

/**
 * 任务基础设施配置类
 * 负责装配任务调度相关的Bean
 * 
 * @author getjobs
 */
@Slf4j
@Configuration
public class TaskInfrastructureConfig {

    /**
     * 创建任务执行器Bean
     * 自动注入所有实现了TaskNotificationListener接口的监听器
     * 
     * 注意：Bean名称为infrastructureTaskExecutor，避免与Spring默认的taskExecutor bean冲突
     * 
     * @param uniqueTaskManager 唯一任务管理器
     * @param listeners         任务通知监听器列表（可选）
     * @return 任务执行器实例
     */
    @Bean(name = "infrastructureTaskExecutor")
    public TaskExecutor infrastructureTaskExecutor(
            UniqueTaskManager uniqueTaskManager,
            @Autowired(required = false) List<TaskNotificationListener> listeners) {

        if (listeners == null || listeners.isEmpty()) {
            log.info("初始化任务执行器（无监听器）");
        } else {
            log.info("初始化任务执行器，已注册 {} 个任务监听器", listeners.size());
            listeners.forEach(listener -> log.info("  - {}", listener.getClass().getSimpleName()));
        }

        return new TaskExecutor(uniqueTaskManager, listeners);
    }
}
