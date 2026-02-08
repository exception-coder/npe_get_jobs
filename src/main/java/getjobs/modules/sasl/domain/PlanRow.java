package getjobs.modules.sasl.domain;

import getjobs.repository.entity.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.ConstraintMode;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 套餐行数据实体。
 * 用于存储套餐方案的具体行信息（如：合約期、服務計劃月費等）。
 */
@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "plan_row")
public class PlanRow extends BaseEntity {

    /**
     * 关联的套餐方案
     */
    @NotNull(message = "套餐方案不能为空")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "plan_section_id", nullable = false, foreignKey = @ForeignKey(value = ConstraintMode.NO_CONSTRAINT))
    private PlanSection planSection;

    /**
     * 行标签（如：合約期、服務計劃月費等）
     */
    @NotBlank(message = "行标签不能为空")
    @Size(max = 200, message = "行标签长度不能超过200个字符")
    @Column(name = "label", length = 200, nullable = false)
    private String label;

    /**
     * 行的值（JSON数组格式，对应columns的数量，如：["24/36M", "24/36M", "24/36M"]）
     */
    @Column(name = "[values]", columnDefinition = "TEXT", nullable = false)
    private String values;

    /**
     * 排序顺序（用于控制行在套餐中的显示顺序）
     */
    @Column(name = "sort_order", nullable = false)
    private Integer sortOrder;
}
