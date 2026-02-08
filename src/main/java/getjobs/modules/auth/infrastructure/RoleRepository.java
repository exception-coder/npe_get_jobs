package getjobs.modules.auth.infrastructure;

import getjobs.common.infrastructure.repository.common.IRoleRepository;
import getjobs.modules.auth.domain.Role;

/**
 * 角色仓储（SQLite实现）
 *
 * @author getjobs
 */
public interface RoleRepository extends IRoleRepository<Role> {
    // 所有业务方法已在IRoleRepository中定义
}
