package getjobs.modules.auth.domain;

import getjobs.repository.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

/**
 * 角色权限关联表
 *
 * <p>
 * 多对多关系：一个角色可以拥有多个权限，一个权限可以分配给多个角色
 * </p>
 *
 * @author getjobs
 */
@Getter
@Setter
@Entity
@Table(name = "sys_role_permission", uniqueConstraints = {
        @UniqueConstraint(columnNames = { "role_id", "permission_id" })
})
public class RolePermission extends BaseEntity {

    /**
     * 角色ID
     */
    @Column(name = "role_id", nullable = false)
    private Long roleId;

    /**
     * 权限ID
     */
    @Column(name = "permission_id", nullable = false)
    private Long permissionId;
}
