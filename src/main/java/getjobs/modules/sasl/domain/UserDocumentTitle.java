package getjobs.modules.sasl.domain;

import getjobs.repository.entity.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 用户文档标题关系实体。
 * 用于记录用户ID和用户包含的文档标题集合关系。
 */
@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "sasl_user_document_title", uniqueConstraints = {
        @UniqueConstraint(name = "uk_user_document_title", columnNames = { "user_id", "document_title" })
})
public class UserDocumentTitle extends BaseEntity {

    /**
     * 用户ID
     */
    @Column(name = "user_id", nullable = false)
    private Long userId;

    /**
     * 文档标题
     */
    @Column(name = "document_title", nullable = false, length = 80)
    private String documentTitle;
}
