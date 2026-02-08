package getjobs.modules.datasource.mysql.repository;

import getjobs.common.infrastructure.repository.common.IUserRoleRepository;
import getjobs.modules.auth.domain.UserRole;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 用户角色关联仓储（MySQL数据源）
 *
 * @author getjobs
 */
@Repository
public interface UserRoleMysqlRepository extends IUserRoleRepository<UserRole> {

    // 所有业务方法已在IUserRoleRepository中定义

    /**
     * 根据用户ID查询角色ID列表
     *
     * @param userId 用户ID
     * @return 角色ID列表
     */
    @Override
    @Query("SELECT ur.roleId FROM UserRole ur WHERE ur.userId = :userId")
    List<Long> findRoleIdsByUserId(@Param("userId") Long userId);
}
