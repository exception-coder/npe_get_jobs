package getjobs.modules.auth.domain;

import getjobs.repository.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

/**
 * 用户角色关联表
 *
 * <p>
 * 多对多关系：一个用户可以有多个角色，一个角色可以分配给多个用户
 * </p>
 *
 * @author getjobs
 */
@Getter
@Setter
@Entity
@Table(name = "sys_user_role", uniqueConstraints = {
        @UniqueConstraint(columnNames = { "user_id", "role_id" })
})
public class UserRole extends BaseEntity {

    /**
     * 用户ID
     */
    @Column(name = "user_id", nullable = false)
    private Long userId;

    /**
     * 角色ID
     */
    @Column(name = "role_id", nullable = false)
    private Long roleId;
}
