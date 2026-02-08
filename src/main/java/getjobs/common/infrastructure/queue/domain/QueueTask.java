package getjobs.common.infrastructure.queue.domain;

import getjobs.common.infrastructure.queue.enums.QueueTaskStatusEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * 队列任务实体
 * DDD领域模型 - 聚合根
 * 
 * @author getjobs
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class QueueTask {

    /**
     * 任务ID（唯一标识）
     */
    private String taskId;

    /**
     * 任务配置
     */
    private QueueTaskConfig config;

    /**
     * 任务状态
     */
    @Builder.Default
    private QueueTaskStatusEnum status = QueueTaskStatusEnum.PENDING;

    /**
     * 开始时间
     */
    private LocalDateTime startTime;

    /**
     * 结束时间
     */
    private LocalDateTime endTime;

    /**
     * 执行结果
     */
    private Object result;

    /**
     * 异常信息
     */
    private Throwable exception;

    /**
     * 当前重试次数
     */
    @Builder.Default
    private AtomicInteger retryCount = new AtomicInteger(0);

    /**
     * 用于同步等待任务完成的 CountDownLatch
     * 当任务提交时，如果调用者需要等待结果，会使用此 latch
     */
    private transient CountDownLatch completionLatch;

    /**
     * 队列任务实例（用于执行）
     * 使用 transient 避免序列化问题
     */
    private transient getjobs.common.infrastructure.queue.contract.QueueTask queueTaskInstance;

    /**
     * 任务开始执行
     */
    public void start() {
        this.status = QueueTaskStatusEnum.RUNNING;
        this.startTime = LocalDateTime.now();
    }

    /**
     * 任务执行成功
     * 
     * @param result 执行结果
     */
    public void success(Object result) {
        this.status = QueueTaskStatusEnum.SUCCESS;
        this.endTime = LocalDateTime.now();
        this.result = result;
        this.exception = null;
        notifyCompletion();
    }

    /**
     * 任务执行失败
     * 
     * @param exception 异常信息
     */
    public void fail(Throwable exception) {
        this.status = QueueTaskStatusEnum.FAILED;
        this.endTime = LocalDateTime.now();
        this.exception = exception;
        notifyCompletion();
    }

    /**
     * 增加重试次数
     * 
     * @return 当前重试次数
     */
    public int incrementRetryCount() {
        return retryCount.incrementAndGet();
    }

    /**
     * 判断任务是否正在运行
     */
    public boolean isRunning() {
        return QueueTaskStatusEnum.RUNNING.equals(this.status);
    }

    /**
     * 判断任务是否已完成（成功或失败）
     */
    public boolean isCompleted() {
        return QueueTaskStatusEnum.SUCCESS.equals(this.status)
                || QueueTaskStatusEnum.FAILED.equals(this.status);
    }

    /**
     * 判断任务是否成功
     */
    public boolean isSuccess() {
        return QueueTaskStatusEnum.SUCCESS.equals(this.status);
    }

    /**
     * 判断是否可以重试
     */
    public boolean canRetry() {
        return retryCount.get() < config.getMaxRetries();
    }

    /**
     * 通知任务完成（用于同步等待）
     */
    private void notifyCompletion() {
        if (completionLatch != null) {
            completionLatch.countDown();
        }
    }

    /**
     * 创建用于同步等待的 CountDownLatch
     */
    public void createCompletionLatch() {
        this.completionLatch = new CountDownLatch(1);
    }

    /**
     * 等待任务完成
     * 
     * @param timeoutMs 超时时间（毫秒）
     * @return true 表示任务已完成，false 表示超时
     * @throws InterruptedException 如果等待被中断
     */
    public boolean waitForCompletion(long timeoutMs) throws InterruptedException {
        if (completionLatch == null) {
            return isCompleted();
        }
        return completionLatch.await(timeoutMs, java.util.concurrent.TimeUnit.MILLISECONDS);
    }

    /**
     * 设置队列任务实例
     * 
     * @param queueTaskInstance 队列任务实例
     */
    public void setQueueTaskInstance(getjobs.common.infrastructure.queue.contract.QueueTask queueTaskInstance) {
        this.queueTaskInstance = queueTaskInstance;
    }

    /**
     * 获取队列任务实例
     * 
     * @return 队列任务实例
     */
    public getjobs.common.infrastructure.queue.contract.QueueTask getQueueTaskInstance() {
        return queueTaskInstance;
    }
}
