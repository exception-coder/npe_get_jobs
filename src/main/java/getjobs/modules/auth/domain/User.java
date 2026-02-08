package getjobs.modules.auth.domain;

import getjobs.repository.entity.BaseEntity;
import getjobs.repository.entity.JsonListStringConverter;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

/**
 * 系统用户实体（标准化用户表设计）
 *
 * <p>
 * 设计目标：
 * <ul>
 * <li>支持唯一用户名</li>
 * <li>支持邮箱、手机号等基础信息</li>
 * <li>支持账号启用/禁用、锁定、登录失败计数等控制</li>
 * <li>预留角色、超级管理员标记等权限扩展字段</li>
 * </ul>
 * </p>
 *
 * @author getjobs
 */
@Getter
@Setter
@Entity
@Table(name = "sys_user")
public class User extends BaseEntity {

    /**
     * 登录用户名（唯一），可用于管理员、运营、普通用户等所有类型账号
     */
    @Column(name = "username", nullable = false, unique = true, length = 64)
    private String username;

    /**
     * 用户展示名 / 昵称
     */
    @Column(name = "display_name", length = 100)
    private String displayName;

    /**
     * 登录密码
     *
     * <p>
     * 当前实现仍为明文存储，仅用于本地开发/演示环境。
     * 生产环境建议存储加盐后的哈希值（如 BCrypt），并增加 passwordSalt 字段。
     * </p>
     */
    @Column(name = "password", nullable = false, length = 128)
    private String password;

    /**
     * 邮箱（可选，唯一）
     */
    @Column(name = "email", unique = true, length = 128)
    private String email;

    /**
     * 手机号（可选，唯一）
     */
    @Column(name = "mobile", unique = true, length = 32)
    private String mobile;

    /**
     * 是否启用
     */
    @Column(name = "enabled", nullable = false)
    private Boolean enabled = true;

    /**
     * 是否锁定（如多次登录失败）
     */
    @Column(name = "locked", nullable = false)
    private Boolean locked = false;

    /**
     * 连续登录失败次数
     */
    @Column(name = "login_fail_count", nullable = false)
    private Integer loginFailCount = 0;

    /**
     * 上次登录时间
     */
    @Column(name = "last_login_at")
    private LocalDateTime lastLoginAt;

    /**
     * 上次登录 IP
     */
    @Column(name = "last_login_ip", length = 64)
    private String lastLoginIp;

    /**
     * 是否为超级管理员
     * <p>
     * 超级管理员拥有所有权限，不受角色权限限制
     * </p>
     */
    @Column(name = "is_super_admin", nullable = false)
    private Boolean superAdmin = false;

    /**
     * 所属部门编码列表（可所属多个部门）
     * <p>
     * 以JSON格式存储在数据库中
     * </p>
     */
    @Convert(converter = JsonListStringConverter.class)
    @Column(name = "dept_codes", columnDefinition = "TEXT")
    private List<String> deptCodes;
}
