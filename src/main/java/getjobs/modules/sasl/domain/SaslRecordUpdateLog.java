package getjobs.modules.sasl.domain;

import getjobs.modules.sasl.enums.CallStatus;
import getjobs.repository.entity.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

/**
 * SASL 记录更新流水实体。
 * 用于记录每次更新 SaslRecord 的 callStatus、remark、nextCallTime 以及操作用户。
 */
@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "sasl_record_update_log")
public class SaslRecordUpdateLog extends BaseEntity {

    /**
     * MRT（移动电话号码），用于快速查询
     */
    @Column(name = "mrt", length = 50)
    private String mrt;

    /**
     * 更新后的致电状态
     */
    @Enumerated(EnumType.STRING)
    @Column(name = "call_status", length = 20)
    private CallStatus callStatus;

    /**
     * 更新后的备注
     */
    @Column(name = "remark", columnDefinition = "TEXT")
    private String remark;

    /**
     * 更新后的下次致电时间
     */
    @Column(name = "next_call_time")
    private LocalDateTime nextCallTime;

    /**
     * 操作用户名
     */
    @Column(name = "operator", length = 100)
    private String operator;
}

