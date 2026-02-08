package getjobs.common.infrastructure.queue.enums;

import lombok.Getter;

/**
 * 队列任务状态枚举
 * 
 * @author getjobs
 */
@Getter
public enum QueueTaskStatusEnum {
    PENDING(0, "待执行"),
    RUNNING(1, "执行中"),
    SUCCESS(2, "执行成功"),
    FAILED(3, "执行失败");

    private final int code;
    private final String desc;

    QueueTaskStatusEnum(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    /**
     * 根据状态码获取枚举
     * 
     * @param code 状态码
     * @return 队列任务状态枚举
     */
    public static QueueTaskStatusEnum getByCode(int code) {
        for (QueueTaskStatusEnum status : values()) {
            if (status.code == code) {
                return status;
            }
        }
        return null;
    }

    /**
     * 判断任务是否已完成（成功或失败）
     */
    public boolean isCompleted() {
        return this == SUCCESS || this == FAILED;
    }

    /**
     * 判断任务是否正在运行
     */
    public boolean isRunning() {
        return this == RUNNING;
    }
}
