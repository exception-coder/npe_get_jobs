package getjobs.common.infrastructure.queue.service;

import getjobs.common.infrastructure.queue.contract.QueueTask;
import getjobs.common.infrastructure.queue.executor.QueueTaskExecutor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.concurrent.TimeoutException;

/**
 * 队列任务服务
 * 提供队列任务的应用服务层接口
 * 
 * @author getjobs
 */
@Slf4j
@Service
public class QueueTaskService {

    private final QueueTaskExecutor queueTaskExecutor;

    /**
     * 构造函数
     * 
     * @param queueTaskExecutor 队列任务执行器
     */
    public QueueTaskService(@Qualifier("queueTaskExecutor") QueueTaskExecutor queueTaskExecutor) {
        this.queueTaskExecutor = queueTaskExecutor;
    }

    /**
     * 提交任务到队列（异步执行）
     * 
     * @param queueTask 队列任务
     * @return 队列任务实体
     */
    public getjobs.common.infrastructure.queue.domain.QueueTask submit(QueueTask queueTask) {
        log.debug("提交队列任务: {} - {}",
                queueTask.getConfig().getTaskName(),
                queueTask.getConfig().getDescription());

        return queueTaskExecutor.submit(queueTask);
    }

    /**
     * 提交任务并等待完成（同步执行）
     * 
     * @param queueTask 队列任务
     * @param timeoutMs 超时时间（毫秒），默认 30 秒
     * @return 队列任务实体
     * @throws InterruptedException 如果等待被中断
     * @throws TimeoutException 如果等待超时
     */
    public getjobs.common.infrastructure.queue.domain.QueueTask submitAndWait(QueueTask queueTask, long timeoutMs)
            throws InterruptedException, TimeoutException {
        log.info("提交队列任务并等待完成: {} - {} (超时: {}ms)",
                queueTask.getConfig().getTaskName(),
                queueTask.getConfig().getDescription(),
                timeoutMs);

        return queueTaskExecutor.submitAndWait(queueTask, timeoutMs);
    }

    /**
     * 提交任务并等待完成（同步执行，默认超时 30 秒）
     * 
     * @param queueTask 队列任务
     * @return 队列任务实体
     * @throws InterruptedException 如果等待被中断
     * @throws TimeoutException 如果等待超时
     */
    public getjobs.common.infrastructure.queue.domain.QueueTask submitAndWait(QueueTask queueTask)
            throws InterruptedException, TimeoutException {
        return submitAndWait(queueTask, 30000L);
    }

    /**
     * 获取队列大小
     * 
     * @return 队列中待执行的任务数量
     */
    public int getQueueSize() {
        return queueTaskExecutor.getQueueSize();
    }

    /**
     * 获取当前正在执行的任务
     * 
     * @return 当前正在执行的任务（如果存在）
     */
    public Optional<getjobs.common.infrastructure.queue.domain.QueueTask> getRunningTask() {
        return Optional.ofNullable(queueTaskExecutor.getCurrentTask());
    }

    /**
     * 获取统计信息
     * 
     * @return 统计信息
     */
    public QueueTaskExecutor.QueueTaskStatistics getStatistics() {
        return queueTaskExecutor.getStatistics();
    }
}

