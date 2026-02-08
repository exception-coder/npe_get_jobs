package getjobs.common.infrastructure.repository.common;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

/**
 * 权限仓储统一接口
 *
 * @param <T> 权限实体类型
 * @author getjobs
 */
public interface IPermissionRepository<T> extends JpaRepository<T, Long> {

    /**
     * 根据权限编码查找权限
     *
     * @param code 权限编码
     * @return 权限
     */
    Optional<T> findByCode(String code);

    /**
     * 根据父权限ID查找子权限列表
     *
     * @param parentId 父权限ID
     * @return 子权限列表
     */
    List<T> findByParentId(Long parentId);

    // 注意：findByType 方法不在统一接口中定义，因为不同数据库的 PermissionType 枚举类型不同
    // 具体实现应该在各自的 Repository 接口中定义，使用各自的枚举类型
}
