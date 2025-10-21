package getjobs.common.infrastructure.task.contract;

import getjobs.common.infrastructure.task.domain.TaskNotification;

/**
 * 任务通知监听器接口
 * 用于接收任务执行状态变化的通知
 * 
 * @author getjobs
 */
public interface TaskNotificationListener {

    /**
     * 任务开始执行通知
     * 
     * @param notification 任务通知信息
     */
    void onTaskStart(TaskNotification notification);

    /**
     * 任务执行成功通知
     * 
     * @param notification 任务通知信息
     */
    void onTaskSuccess(TaskNotification notification);

    /**
     * 任务执行失败通知
     * 
     * @param notification 任务通知信息
     */
    void onTaskFailed(TaskNotification notification);

    /**
     * 任务被取消通知
     * 
     * @param notification 任务通知信息
     */
    default void onTaskCancelled(TaskNotification notification) {
        // 默认实现为空，子类可选择性覆盖
    }

    /**
     * 判断是否支持该任务类型的通知
     * 可以实现选择性监听特定类型的任务
     * 
     * @param taskType 任务类型
     * @return true表示支持，false表示不支持
     */
    default boolean supports(String taskType) {
        return true; // 默认支持所有任务类型
    }
}
