package getjobs.modules.datasource.mysql.domain;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

/**
 * 数据源验证实体
 * <p>
 * 用于验证 MySQL 数据源是否正常工作。
 * 该实体仅存储在 MySQL 数据库中，不存储在 SQLite 数据库中。
 * </p>
 *
 * @author getjobs
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Entity
@Table(name = "datasource_verification")
public class DataSourceVerification {

    /**
     * 主键ID
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    /**
     * 验证消息
     */
    @Column(name = "message", nullable = false, length = 500)
    private String message;

    /**
     * 验证状态（SUCCESS/FAILED）
     */
    @Column(name = "status", nullable = false, length = 20)
    private String status;

    /**
     * 创建时间
     */
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    /**
     * 更新时间
     */
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    /**
     * 备注信息
     */
    @Column(name = "remark", length = 1000)
    private String remark;

    /**
     * 更新时自动设置更新时间
     */
    @PreUpdate
    public void preUpdate() {
        this.updatedAt = LocalDateTime.now();
    }

    /**
     * 创建时设置创建时间
     */
    @PrePersist
    public void prePersist() {
        if (this.createdAt == null) {
            this.createdAt = LocalDateTime.now();
        }
    }
}

