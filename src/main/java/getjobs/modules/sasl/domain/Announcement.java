package getjobs.modules.sasl.domain;

import getjobs.repository.entity.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 公告实体。
 * 用于存储系统公告信息。
 */
@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "announcement")
public class Announcement extends BaseEntity {

    /**
     * 公告内容
     */
    @NotBlank(message = "公告内容不能为空")
    @Size(max = 1000, message = "公告内容长度不能超过1000个字符")
    @Column(name = "content", nullable = false, columnDefinition = "TEXT")
    private String content;

    /**
     * 是否启用
     */
    @Column(name = "enabled", nullable = false)
    private Boolean enabled = true;

    /**
     * 排序顺序（数字越小越靠前）
     */
    @Column(name = "sort_order", nullable = false)
    private Integer sortOrder = 0;
}
