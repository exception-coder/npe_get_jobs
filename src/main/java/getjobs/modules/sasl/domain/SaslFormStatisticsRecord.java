package getjobs.modules.sasl.domain;

import getjobs.repository.entity.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * SASL 表单汇总统计记录实体。
 * 用于记录每日统计数据的变化情况。
 */
@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "sasl_form_statistics_record")
public class SaslFormStatisticsRecord extends BaseEntity {

    /**
     * 当日致电数
     */
    @Column(name = "today_call_count", nullable = false)
    private Long todayCallCount;

    /**
     * 本月登记数
     */
    @Column(name = "monthly_registered_count", nullable = false)
    private Long monthlyRegisteredCount;

    /**
     * 待跟进客户数
     */
    @Column(name = "pending_follow_up_count", nullable = false)
    private Long pendingFollowUpCount;
}
