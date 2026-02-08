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
 * 线索数据实体。
 * 用于记录线索导入的记录，仅包含核心字段。
 */
@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "lead_record")
public class LeadRecord extends BaseEntity {

    /**
     * MRT（移动电话号码）
     */
    @Column(name = "mrt", length = 50)
    private String mrt;

    /**
     * 旧合约
     */
    @Column(name = "old_contract", length = 50)
    private String oldContract;

    /**
     * 销售
     */
    @Column(name = "sales", length = 100)
    private String sales;

    /**
     * 类别
     */
    @Column(name = "category", length = 200)
    private String category;

    /**
     * 最后转网月份
     */
    @Column(name = "last_turn_network_month", length = 20)
    private String lastTurnNetworkMonth;
}
