package getjobs.common.infrastructure.queue.config;

import getjobs.common.infrastructure.queue.executor.QueueTaskExecutor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;

/**
 * 队列基础设施配置类
 * 负责装配队列任务执行相关的Bean
 * 
 * @author getjobs
 */
@Slf4j
@Configuration
public class QueueInfrastructureConfig {

    /**
     * 队列容量
     * 0 或负数表示无界队列
     */
    @Value("${queue.task.executor.capacity:0}")
    private int queueCapacity;

    private QueueTaskExecutor queueTaskExecutor;

    /**
     * 创建队列任务执行器Bean
     * 
     * @return 队列任务执行器实例
     */
    @Bean(name = "queueTaskExecutor")
    public QueueTaskExecutor queueTaskExecutor() {
        log.info("初始化队列任务执行器 (队列容量: {})", 
                queueCapacity > 0 ? queueCapacity : "无界");
        
        queueTaskExecutor = new QueueTaskExecutor(queueCapacity);
        return queueTaskExecutor;
    }

    /**
     * 启动执行器
     */
    @PostConstruct
    public void start() {
        if (queueTaskExecutor != null) {
            queueTaskExecutor.start();
        }
    }

    /**
     * 停止执行器
     */
    @PreDestroy
    public void stop() {
        if (queueTaskExecutor != null) {
            queueTaskExecutor.stop();
        }
    }
}

