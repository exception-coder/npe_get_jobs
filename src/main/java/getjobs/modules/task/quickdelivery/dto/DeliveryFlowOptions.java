package getjobs.modules.task.quickdelivery.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 投递流程控制参数（与前端 tasks.ts DeliveryFlowOptions 一致）
 * 未开启的环节将直接跳过执行
 *
 * @author getjobs
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DeliveryFlowOptions {

    /** 是否执行采集（搜索/推荐岗位采集） */
    private Boolean collect;

    /** 是否执行过滤（条件过滤） */
    private Boolean filter;

    /** 是否执行投递 */
    private Boolean deliver;

    /** 未传或为 null 时视为 true */
    public boolean isCollect() {
        return collect == null || Boolean.TRUE.equals(collect);
    }

    public boolean isFilter() {
        return filter == null || Boolean.TRUE.equals(filter);
    }

    public boolean isDeliver() {
        return deliver == null || Boolean.TRUE.equals(deliver);
    }
}
