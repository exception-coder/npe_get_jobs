package getjobs.common.infrastructure.repository.common;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * 用户角色关联仓储统一接口
 *
 * @param <T> 用户角色关联实体类型
 * @author getjobs
 */
public interface IUserRoleRepository<T> extends JpaRepository<T, Long> {
    
    /**
     * 根据用户ID查找用户角色关联列表
     *
     * @param userId 用户ID
     * @return 用户角色关联列表
     */
    List<T> findByUserId(Long userId);
    
    /**
     * 根据角色ID查找用户角色关联列表
     *
     * @param roleId 角色ID
     * @return 用户角色关联列表
     */
    List<T> findByRoleId(Long roleId);
    
    /**
     * 根据用户ID删除所有角色关联
     *
     * @param userId 用户ID
     */
    void deleteByUserId(Long userId);
    
    /**
     * 根据用户ID查询角色ID列表
     *
     * @param userId 用户ID
     * @return 角色ID列表
     */
    List<Long> findRoleIdsByUserId(Long userId);
}

