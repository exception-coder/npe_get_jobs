package getjobs.common.infrastructure.queue.contract;

import getjobs.common.infrastructure.queue.domain.QueueTaskConfig;

/**
 * 队列任务接口
 * 定义队列任务执行的契约，所有需要被队列执行的任务都需要实现此接口
 * 
 * @author getjobs
 */
public interface QueueTask {

    /**
     * 获取任务配置
     * 
     * @return 任务配置信息
     */
    QueueTaskConfig getConfig();

    /**
     * 执行任务
     * 
     * @return 执行结果，可以是任意类型的对象
     * @throws Exception 执行过程中的异常
     */
    Object execute() throws Exception;

    /**
     * 任务执行前的钩子方法
     * 可以在此方法中进行前置处理，如参数验证、资源准备等
     * 
     * @throws Exception 前置处理异常
     */
    default void beforeExecute() throws Exception {
        // 默认实现为空，子类可选择性覆盖
    }

    /**
     * 任务执行后的钩子方法
     * 可以在此方法中进行后置处理，如资源清理等
     * 无论任务执行成功还是失败都会执行此方法
     * 
     * @param success 任务是否执行成功
     */
    default void afterExecute(boolean success) {
        // 默认实现为空，子类可选择性覆盖
    }

    /**
     * 判断异常是否应该重试
     * 默认情况下，所有异常都会重试（在重试次数范围内）
     * 子类可以覆盖此方法，根据异常类型决定是否重试
     * 
     * @param exception 异常对象
     * @return true 表示应该重试，false 表示不应该重试
     */
    default boolean shouldRetry(Throwable exception) {
        // 默认所有异常都重试
        return true;
    }
}
