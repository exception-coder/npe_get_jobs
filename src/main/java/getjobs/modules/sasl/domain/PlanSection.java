package getjobs.modules.sasl.domain;

import getjobs.repository.entity.BaseEntity;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

/**
 * 套餐方案实体。
 * 用于存储套餐对比信息。
 */
@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "plan_section")
public class PlanSection extends BaseEntity {

    /**
     * 套餐ID（唯一标识，如：csl45g、csl5g-core等）
     */
    @NotBlank(message = "套餐ID不能为空")
    @Size(max = 50, message = "套餐ID长度不能超过50个字符")
    @Column(name = "plan_id", length = 50, nullable = false, unique = true)
    private String planId;

    /**
     * 套餐标题
     */
    @NotBlank(message = "套餐标题不能为空")
    @Size(max = 200, message = "套餐标题长度不能超过200个字符")
    @Column(name = "title", length = 200, nullable = false)
    private String title;

    /**
     * 套餐副标题
     */
    @Size(max = 300, message = "套餐副标题长度不能超过300个字符")
    @Column(name = "subtitle", length = 300)
    private String subtitle;

    /**
     * 套餐列标题（JSON数组格式，如：["$98 計劃", "$118 計劃", "$298 計劃"]）
     */
    @Column(name = "columns", columnDefinition = "TEXT")
    private String columns;

    /**
     * 脚注
     */
    @Column(name = "footnote", columnDefinition = "TEXT")
    private String footnote;

    /**
     * 套餐行数据（一对多关系）
     */
    @OneToMany(mappedBy = "planSection", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PlanRow> rows = new ArrayList<>();
}
