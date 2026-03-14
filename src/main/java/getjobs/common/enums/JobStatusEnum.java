package getjobs.common.enums;

import lombok.Getter;

/**
 * 职位状态枚举
 * 0 待处理 1 待投递 2 已过滤 3 投递成功 4 投递失败
 */
@Getter
public enum JobStatusEnum {
    PENDING(0, "待处理"),
    PENDING_DELIVERY(1, "待投递"),
    FILTERED(2, "已过滤"),
    DELIVERED_SUCCESS(3, "投递成功"),
    DELIVERED_FAILED(4, "投递失败");

    private final int code;
    private final String desc;

    JobStatusEnum(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }
}
