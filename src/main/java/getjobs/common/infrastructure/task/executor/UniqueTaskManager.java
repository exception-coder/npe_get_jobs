package getjobs.common.infrastructure.task.executor;

import getjobs.common.infrastructure.task.domain.Task;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * 唯一性任务管理器
 * 负责管理全局唯一的任务，确保同一时刻只能有一个同类型任务执行
 * 
 * @author getjobs
 */
@Slf4j
@Component
public class UniqueTaskManager {

    /**
     * 正在运行的唯一任务映射
     * key: taskType, value: 正在运行的Task
     */
    private final Map<String, Task> runningUniqueTasks = new ConcurrentHashMap<>();

    /**
     * 尝试启动唯一任务
     * 
     * @param task 任务实例
     * @return true表示可以启动，false表示已有同类型任务正在运行
     */
    public boolean tryStartUniqueTask(Task task) {
        String taskType = task.getConfig().getTaskType();

        // 检查是否有同类型任务正在运行
        Task runningTask = runningUniqueTasks.get(taskType);
        if (runningTask != null && runningTask.isRunning()) {
            log.warn("任务 [{}] 无法启动，已有同类型任务 [{}] 正在执行中",
                    task.getConfig().getTaskName(),
                    runningTask.getConfig().getTaskName());
            return false;
        }

        // 注册当前任务
        runningUniqueTasks.put(taskType, task);
        log.debug("唯一任务 [{}] 类型 [{}] 已注册并开始执行",
                task.getConfig().getTaskName(), taskType);
        return true;
    }

    /**
     * 任务完成后释放锁
     * 
     * @param task 任务实例
     */
    public void releaseUniqueTask(Task task) {
        String taskType = task.getConfig().getTaskType();
        Task removedTask = runningUniqueTasks.remove(taskType);

        if (removedTask != null) {
            log.debug("唯一任务 [{}] 类型 [{}] 已完成并释放",
                    task.getConfig().getTaskName(), taskType);
        }
    }

    /**
     * 检查指定类型的任务是否正在运行
     * 
     * @param taskType 任务类型
     * @return true表示正在运行，false表示未运行
     */
    public boolean isTaskTypeRunning(String taskType) {
        Task runningTask = runningUniqueTasks.get(taskType);
        return runningTask != null && runningTask.isRunning();
    }

    /**
     * 获取正在运行的任务
     * 
     * @param taskType 任务类型
     * @return 正在运行的任务，如果没有则返回null
     */
    public Task getRunningTask(String taskType) {
        return runningUniqueTasks.get(taskType);
    }

    /**
     * 获取所有正在运行的唯一任务数量
     * 
     * @return 正在运行的任务数量
     */
    public int getRunningTaskCount() {
        return runningUniqueTasks.size();
    }

    /**
     * 清空所有任务记录（谨慎使用，一般用于测试或系统重置）
     */
    public void clear() {
        runningUniqueTasks.clear();
        log.warn("所有唯一任务记录已清空");
    }
}
