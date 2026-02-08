package getjobs.modules.datasource.mysql.repository;

import getjobs.common.infrastructure.repository.common.IUserRepository;
import getjobs.modules.auth.domain.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 系统用户仓储（MySQL数据源）
 *
 * <p>
 * 用于查询/持久化各类系统用户（管理员、运营、普通用户等）。
 * </p>
 *
 * @author getjobs
 */
@Repository
public interface UserMysqlRepository extends IUserRepository<User> {

    /**
     * 查找部门编码列表中包含指定部门编码的所有用户。
     * 由于 deptCodes 以 JSON 格式存储（如 ["sasl","other"]），使用原生 SQL 查询来匹配 JSON 字符串中的值。
     * MySQL特定的SQL语法
     *
     * @param deptCode 部门编码（如 "sasl"）
     * @return 符合条件的用户列表
     */
    @Override
    @Query(value = "SELECT * FROM sys_user WHERE dept_codes IS NOT NULL " +
            "AND dept_codes LIKE CONCAT('%\"', :deptCode, '\"%')", nativeQuery = true)
    List<User> findByDeptCodesContaining(@Param("deptCode") String deptCode);
}
