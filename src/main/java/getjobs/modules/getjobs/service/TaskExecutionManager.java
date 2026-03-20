package getjobs.service;

import getjobs.common.enums.RecruitmentPlatformEnum;
import getjobs.common.enums.TaskExecutionStep;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * 任务执行状态管理器
 * 负责管理各平台任务的执行状态、当前步骤和终止标记
 * 
 * 功能：
 * 1. 记录任务当前执行步骤
 * 2. 提供任务终止标记
 * 3. 支持前端查询任务状态
 * 4. 支持前端终止任务执行
 * 
 * @author getjobs
 */
@Slf4j
@Component
public class TaskExecutionManager {

    /**
     * 任务执行状态信息
     */
    @Getter
    public static class TaskExecutionStatus {
        /**
         * 平台
         */
        private final RecruitmentPlatformEnum platform;

        /**
         * 当前执行步骤
         */
        private TaskExecutionStep currentStep;

        /**
         * 步骤描述（可包含额外信息）
         */
        private String stepDescription;

        /**
         * 是否请求终止
         */
        private volatile boolean terminateRequested;

        /**
         * 任务开始时间
         */
        private final LocalDateTime startTime;

        /**
         * 最后更新时间
         */
        private LocalDateTime lastUpdateTime;

        /**
         * 额外信息（如进度、统计数据等）
         */
        private final Map<String, Object> metadata;

        public TaskExecutionStatus(RecruitmentPlatformEnum platform) {
            this.platform = platform;
            this.currentStep = TaskExecutionStep.INIT;
            this.stepDescription = TaskExecutionStep.INIT.getDescription();
            this.terminateRequested = false;
            this.startTime = LocalDateTime.now();
            this.lastUpdateTime = LocalDateTime.now();
            this.metadata = new ConcurrentHashMap<>();
        }

        /**
         * 更新执行步骤
         */
        public void updateStep(TaskExecutionStep step, String description) {
            this.currentStep = step;
            this.stepDescription = description != null ? description : step.getDescription();
            this.lastUpdateTime = LocalDateTime.now();
            log.info("[{}] 任务步骤更新: {} - {}", platform.getPlatformName(), step.getDescription(), this.stepDescription);
        }

        /**
         * 请求终止任务
         */
        public void requestTerminate() {
            this.terminateRequested = true;
            log.warn("[{}] 收到任务终止请求", platform.getPlatformName());
        }

        /**
         * 检查是否请求终止
         */
        public boolean isTerminateRequested() {
            return terminateRequested;
        }

        /**
         * 设置元数据
         */
        public void setMetadata(String key, Object value) {
            this.metadata.put(key, value);
            this.lastUpdateTime = LocalDateTime.now();
        }

        /**
         * 获取元数据
         */
        public Object getMetadata(String key) {
            return this.metadata.get(key);
        }

        /**
         * 判断任务是否已结束
         */
        public boolean isTerminated() {
            return currentStep.isTerminalState();
        }
    }

    /**
     * 各平台任务执行状态映射表
     * Key: 平台枚举
     * Value: 任务执行状态
     */
    private final Map<RecruitmentPlatformEnum, TaskExecutionStatus> taskStatusMap = new ConcurrentHashMap<>();

    /**
     * 开始任务
     * 
     * @param platform 平台
     * @return 任务执行状态
     */
    public TaskExecutionStatus startTask(RecruitmentPlatformEnum platform) {
        TaskExecutionStatus status = new TaskExecutionStatus(platform);
        taskStatusMap.put(platform, status);
        log.info("[{}] 任务开始执行", platform.getPlatformName());
        return status;
    }

    /**
     * 更新任务步骤
     * 
     * @param platform 平台
     * @param step     执行步骤
     */
    public void updateTaskStep(RecruitmentPlatformEnum platform, TaskExecutionStep step) {
        updateTaskStep(platform, step, null);
    }

    /**
     * 更新任务步骤（带描述）
     * 
     * @param platform    平台
     * @param step        执行步骤
     * @param description 步骤描述
     */
    public void updateTaskStep(RecruitmentPlatformEnum platform, TaskExecutionStep step, String description) {
        TaskExecutionStatus status = taskStatusMap.get(platform);
        if (status != null) {
            status.updateStep(step, description);
        } else {
            log.warn("[{}] 任务状态不存在，无法更新步骤", platform.getPlatformName());
        }
    }

    /**
     * 设置任务元数据
     * 
     * @param platform 平台
     * @param key      键
     * @param value    值
     */
    public void setTaskMetadata(RecruitmentPlatformEnum platform, String key, Object value) {
        TaskExecutionStatus status = taskStatusMap.get(platform);
        if (status != null) {
            status.setMetadata(key, value);
        }
    }

    /**
     * 检查任务是否请求终止
     * 
     * @param platform 平台
     * @return true-请求终止，false-继续执行
     */
    public boolean isTerminateRequested(RecruitmentPlatformEnum platform) {
        TaskExecutionStatus status = taskStatusMap.get(platform);
        return status != null && status.isTerminateRequested();
    }

    /**
     * 请求终止任务
     * 
     * @param platform 平台
     */
    public void requestTerminate(RecruitmentPlatformEnum platform) {
        TaskExecutionStatus status = taskStatusMap.get(platform);
        if (status != null) {
            status.requestTerminate();
        } else {
            log.warn("[{}] 任务状态不存在，无法终止", platform.getPlatformName());
        }
    }

    /**
     * 获取任务执行状态
     * 
     * @param platform 平台
     * @return 任务执行状态
     */
    public TaskExecutionStatus getTaskStatus(RecruitmentPlatformEnum platform) {
        return taskStatusMap.get(platform);
    }

    /**
     * 获取所有任务执行状态
     * 
     * @return 所有任务执行状态映射表
     */
    public Map<RecruitmentPlatformEnum, TaskExecutionStatus> getAllTaskStatus() {
        return new ConcurrentHashMap<>(taskStatusMap);
    }

    /**
     * 完成任务
     * 
     * @param platform 平台
     * @param success  是否成功
     */
    public void completeTask(RecruitmentPlatformEnum platform, boolean success) {
        TaskExecutionStatus status = taskStatusMap.get(platform);
        if (status != null) {
            if (status.isTerminateRequested()) {
                status.updateStep(TaskExecutionStep.TERMINATED, "任务已被终止");
            } else if (success) {
                status.updateStep(TaskExecutionStep.COMPLETED, "任务执行完成");
            } else {
                status.updateStep(TaskExecutionStep.FAILED, "任务执行失败");
            }
        }
    }

    /**
     * 清理任务状态
     * 
     * @param platform 平台
     */
    public void clearTaskStatus(RecruitmentPlatformEnum platform) {
        taskStatusMap.remove(platform);
        log.info("[{}] 任务状态已清理", platform.getPlatformName());
    }

    /**
     * 清理所有任务状态
     */
    public void clearAllTaskStatus() {
        taskStatusMap.clear();
        log.info("所有任务状态已清理");
    }
}
