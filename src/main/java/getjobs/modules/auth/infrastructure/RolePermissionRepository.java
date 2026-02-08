package getjobs.modules.auth.infrastructure;

import getjobs.common.infrastructure.repository.common.IRolePermissionRepository;
import getjobs.modules.auth.domain.RolePermission;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * 角色权限关联仓储（SQLite实现）
 *
 * @author getjobs
 */
public interface RolePermissionRepository extends IRolePermissionRepository<RolePermission> {

    // 所有业务方法已在IRolePermissionRepository中定义
    
    /**
     * 根据角色ID列表查询权限ID列表
     *
     * @param roleIds 角色ID列表
     * @return 权限ID列表
     */
    @Override
    @Query("SELECT DISTINCT rp.permissionId FROM RolePermission rp WHERE rp.roleId IN :roleIds")
    List<Long> findPermissionIdsByRoleIds(@Param("roleIds") List<Long> roleIds);
}

