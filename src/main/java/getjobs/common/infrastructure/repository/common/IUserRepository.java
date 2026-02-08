package getjobs.common.infrastructure.repository.common;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

/**
 * 用户仓储统一接口
 * <p>
 * 定义用户相关的业务方法，不依赖具体的数据库实现。
 * SQLite和MySQL的Repository都应该继承此接口。
 * </p>
 *
 * @param <T> 用户实体类型（可以是SQLite的User或MySQL的User）
 * @author getjobs
 */
public interface IUserRepository<T> extends JpaRepository<T, Long> {

    /**
     * 根据用户名查找用户
     *
     * @param username 用户名
     * @return 用户
     */
    Optional<T> findByUsername(String username);

    /**
     * 根据邮箱查找用户
     *
     * @param email 邮箱
     * @return 用户
     */
    Optional<T> findByEmail(String email);

    /**
     * 根据手机号查找用户
     *
     * @param mobile 手机号
     * @return 用户
     */
    Optional<T> findByMobile(String mobile);

    /**
     * 查找部门编码列表中包含指定部门编码的所有用户
     * <p>
     * 注意：此方法需要数据库特定的SQL实现，具体的Repository需要覆盖并添加@Query注解
     * </p>
     *
     * @param deptCode 部门编码（如 "sasl"）
     * @return 符合条件的用户列表
     */
    List<T> findByDeptCodesContaining(String deptCode);
}
