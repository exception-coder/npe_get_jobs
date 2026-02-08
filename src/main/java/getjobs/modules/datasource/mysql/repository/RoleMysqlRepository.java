package getjobs.modules.datasource.mysql.repository;

import getjobs.common.infrastructure.repository.common.IRoleRepository;
import getjobs.modules.auth.domain.Role;
import org.springframework.stereotype.Repository;

/**
 * 角色仓储（MySQL数据源）
 *
 * @author getjobs
 */
@Repository
public interface RoleMysqlRepository extends IRoleRepository<Role> {
    // 所有业务方法已在IRoleRepository中定义
}
