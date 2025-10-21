package getjobs.common.infrastructure.task.contract;

import getjobs.common.infrastructure.task.domain.TaskConfig;

/**
 * 可调度任务接口
 * 定义任务执行的契约，所有需要被调度的任务都需要实现此接口
 * 
 * @author getjobs
 */
public interface ScheduledTask {

    /**
     * 获取任务配置
     * 
     * @return 任务配置信息
     */
    TaskConfig getTaskConfig();

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
}
