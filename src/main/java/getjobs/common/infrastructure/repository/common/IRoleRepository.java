package getjobs.common.infrastructure.repository.common;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * 角色仓储统一接口
 *
 * @param <T> 角色实体类型
 * @author getjobs
 */
public interface IRoleRepository<T> extends JpaRepository<T, Long> {
    
    /**
     * 根据角色编码查找角色
     *
     * @param code 角色编码
     * @return 角色
     */
    Optional<T> findByCode(String code);
}

