package getjobs.modules.auth.infrastructure;

import getjobs.common.infrastructure.repository.common.IPermissionRepository;
import getjobs.modules.auth.domain.Permission;

import java.util.List;

/**
 * 权限仓储（SQLite实现）
 *
 * @author getjobs
 */
public interface PermissionRepository extends IPermissionRepository<Permission> {

    /**
     * 根据权限类型查找权限列表
     * <p>
     * 注意：此方法不在统一接口中定义，因为不同数据库的 PermissionType 枚举类型不同
     * </p>
     *
     * @param type 权限类型（SQLite的Permission.PermissionType枚举）
     * @return 权限列表
     */
    List<Permission> findByType(Permission.PermissionType type);
}
