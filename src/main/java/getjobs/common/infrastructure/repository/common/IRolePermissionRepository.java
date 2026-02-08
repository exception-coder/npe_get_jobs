package getjobs.common.infrastructure.repository.common;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * 角色权限关联仓储统一接口
 *
 * @param <T> 角色权限关联实体类型
 * @author getjobs
 */
public interface IRolePermissionRepository<T> extends JpaRepository<T, Long> {
    
    /**
     * 根据角色ID查找角色权限关联列表
     *
     * @param roleId 角色ID
     * @return 角色权限关联列表
     */
    List<T> findByRoleId(Long roleId);
    
    /**
     * 根据权限ID查找角色权限关联列表
     *
     * @param permissionId 权限ID
     * @return 角色权限关联列表
     */
    List<T> findByPermissionId(Long permissionId);
    
    /**
     * 根据角色ID删除所有权限关联
     *
     * @param roleId 角色ID
     */
    void deleteByRoleId(Long roleId);
    
    /**
     * 根据角色ID列表查询权限ID列表
     *
     * @param roleIds 角色ID列表
     * @return 权限ID列表
     */
    List<Long> findPermissionIdsByRoleIds(List<Long> roleIds);
}

