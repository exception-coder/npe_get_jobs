package getjobs.common.infrastructure.task.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 任务配置值对象
 * 包含任务的配置信息，如是否全局唯一等
 * 
 * @author getjobs
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TaskConfig {

    /**
     * 任务名称
     */
    private String taskName;

    /**
     * 任务类型
     */
    private String taskType;

    /**
     * 是否全局唯一
     * true: 同一时刻只能有一个该类型任务执行
     * false: 可以并发执行多个该类型任务
     */
    private Boolean globalUnique;

    /**
     * 超时时间（毫秒）
     * 默认0表示不设置超时
     */
    @Builder.Default
    private Long timeout = 0L;

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
        if (globalUnique == null) {
            throw new IllegalArgumentException("必须指定任务是否全局唯一");
        }
    }
}
