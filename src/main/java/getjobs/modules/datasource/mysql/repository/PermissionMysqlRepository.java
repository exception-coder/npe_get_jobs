package getjobs.modules.datasource.mysql.repository;

import getjobs.common.infrastructure.repository.common.IPermissionRepository;
import getjobs.modules.auth.domain.Permission;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 权限仓储（MySQL数据源）
 *
 * @author getjobs
 */
@Repository
public interface PermissionMysqlRepository extends IPermissionRepository<Permission> {

    /**
     * 根据权限类型查找权限列表
     * <p>
     * 注意：此方法不在统一接口中定义，因为不同数据库的 PermissionType 枚举类型不同
     * </p>
     *
     * @param type 权限类型（MySQL的Permission.PermissionType枚举）
     * @return 权限列表
     */
    List<Permission> findByType(Permission.PermissionType type);
}
