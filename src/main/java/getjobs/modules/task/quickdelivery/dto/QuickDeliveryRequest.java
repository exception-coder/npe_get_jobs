package getjobs.modules.task.quickdelivery.dto;

import getjobs.common.enums.RecruitmentPlatformEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * 快速投递请求参数
 * 
 * @author getjobs
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class QuickDeliveryRequest {

    /**
     * 平台枚举
     */
    private RecruitmentPlatformEnum platform;

    /**
     * 平台代码（可选，如果提供了platform则忽略此字段）
     */
    private String platformCode;

    /**
     * 投递关键词（可选，用于筛选职位）
     */
    private String keyword;

    /**
     * 最大投递数量（可选，默认不限制）
     */
    private Integer maxDeliveryCount;

    /**
     * 是否仅投递未投递的职位（默认true）
     */
    @Builder.Default
    private Boolean onlyUndelivered = true;

    /**
     * 排除的职位ID列表（可选）
     */
    private List<Long> excludedJobIds;

    /**
     * 投递延迟时间（毫秒），避免频繁操作被封（可选）
     */
    private Long delayMillis;

    /**
     * 是否自动跳过已达投递上限的职位
     */
    @Builder.Default
    private Boolean skipLimitReached = true;

    /**
     * 备注信息（可选）
     */
    private String remark;
}
