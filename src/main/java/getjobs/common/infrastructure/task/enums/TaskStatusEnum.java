package getjobs.common.infrastructure.task.enums;

import lombok.Getter;

/**
 * 任务状态枚举
 * 
 * @author getjobs
 */
@Getter
public enum TaskStatusEnum {
    PENDING(0, "待执行"),
    RUNNING(1, "执行中"),
    SUCCESS(2, "执行成功"),
    FAILED(3, "执行失败"),
    CANCELLED(4, "已取消");

    private final int code;
    private final String desc;

    TaskStatusEnum(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    /**
     * 根据状态码获取枚举
     * 
     * @param code 状态码
     * @return 任务状态枚举
     */
    public static TaskStatusEnum getByCode(int code) {
        for (TaskStatusEnum status : values()) {
            if (status.code == code) {
                return status;
            }
        }
        return null;
    }
}
