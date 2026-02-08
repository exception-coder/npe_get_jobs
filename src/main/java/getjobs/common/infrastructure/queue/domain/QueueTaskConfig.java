package getjobs.common.infrastructure.queue.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 队列任务配置值对象
 * 包含队列任务的配置信息，如重试次数、重试延迟等
 * 
 * @author getjobs
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class QueueTaskConfig {

    /**
     * 任务名称
     */
    private String taskName;

    /**
     * 任务类型
     */
    private String taskType;

    /**
     * 最大重试次数
     * 默认 0 表示不重试
     */
    @Builder.Default
    private Integer maxRetries = 0;

    /**
     * 重试延迟时间（毫秒）
     * 默认 100 毫秒
     */
    @Builder.Default
    private Long retryDelayMs = 100L;

    /**
     * 是否使用指数退避策略
     * true: 重试延迟时间按指数增长（retryDelayMs * 2^(retryCount-1)）
     * false: 使用固定的重试延迟时间
     */
    @Builder.Default
    private Boolean useExponentialBackoff = false;

    /**
     * 任务优先级
     * 数值越大优先级越高，默认 0
     * 仅在使用优先级队列时生效
     */
    @Builder.Default
    private Integer priority = 0;

    /**
     * 任务描述
     */
    private String description;

    /**
     * 验证配置是否合法
     */
    public void validate() {
        if (taskName == null || taskName.trim().isEmpty()) {
            throw new IllegalArgumentException("任务名称不能为空");
        }
        if (taskType == null || taskType.trim().isEmpty()) {
            throw new IllegalArgumentException("任务类型不能为空");
        }
        if (maxRetries < 0) {
            throw new IllegalArgumentException("最大重试次数不能为负数");
        }
        if (retryDelayMs < 0) {
            throw new IllegalArgumentException("重试延迟时间不能为负数");
        }
    }

    /**
     * 计算重试延迟时间
     * 
     * @param retryCount 当前重试次数（从1开始）
     * @return 重试延迟时间（毫秒）
     */
    public long calculateRetryDelay(int retryCount) {
        if (useExponentialBackoff) {
            // 指数退避：retryDelayMs * 2^(retryCount-1)
            return retryDelayMs * (1L << (retryCount - 1));
        } else {
            // 固定延迟
            return retryDelayMs;
        }
    }
}
