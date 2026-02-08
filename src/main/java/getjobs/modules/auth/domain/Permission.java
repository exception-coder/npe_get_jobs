package getjobs.modules.auth.domain;

import getjobs.repository.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

/**
 * 权限实体
 *
 * <p>
 * 权限类型包括：
 * <ul>
 * <li>MENU - 菜单权限（页面访问权限）</li>
 * <li>BUTTON - 按钮权限（操作权限，如新增、删除、导出等）</li>
 * <li>DATA - 数据权限（行级数据访问控制，如只能查看自己创建的数据）</li>
 * <li>API - API权限（接口访问权限）</li>
 * <li>FIELD - 字段权限（字段级别的读写控制，如某些字段对某些角色隐藏）</li>
 * </ul>
 * </p>
 *
 * @author getjobs
 */
@Getter
@Setter
@Entity
@Table(name = "sys_permission")
public class Permission extends BaseEntity {

    /**
     * 权限名称
     */
    @Column(name = "name", nullable = false, length = 64)
    private String name;

    /**
     * 权限编码（唯一标识，如：user:add、user:delete、menu:system）
     */
    @Column(name = "code", nullable = false, unique = true, length = 128)
    private String code;

    /**
     * 权限类型
     *
     * @see PermissionType
     */
    @Enumerated(EnumType.STRING)
    @Column(name = "type", nullable = false, length = 32)
    private PermissionType type;

    /**
     * 资源路径/标识
     * <ul>
     * <li>MENU: 路由路径，如 /system/user</li>
     * <li>BUTTON: 按钮标识，如 user:add</li>
     * <li>DATA: 数据范围标识，如 dept:self（仅自己部门）</li>
     * <li>API: 接口路径，如 /api/user/**</li>
     * <li>FIELD: 字段标识，如 user:salary（用户薪资字段）</li>
     * </ul>
     */
    @Column(name = "resource", length = 255)
    private String resource;

    /**
     * 权限描述
     */
    @Column(name = "description", length = 255)
    private String description;

    /**
     * 父权限ID（用于构建权限树，如菜单下的按钮权限）
     */
    @Column(name = "parent_id")
    private Long parentId;

    /**
     * 排序号
     */
    @Column(name = "sort_order")
    private Integer sortOrder = 0;

    /**
     * 是否启用
     */
    @Column(name = "enabled", nullable = false)
    private Boolean enabled = true;

    /**
     * 权限类型枚举
     */
    public enum PermissionType {
        /**
         * 菜单权限：控制页面/路由的访问
         */
        MENU,

        /**
         * 按钮权限：控制页面内操作按钮的显示与功能
         */
        BUTTON,

        /**
         * 数据权限：控制数据行级别的访问范围（如只能查看自己创建的数据）
         */
        DATA,

        /**
         * API权限：控制后端接口的访问
         */
        API,

        /**
         * 字段权限：控制字段级别的读写权限（如某些敏感字段对某些角色隐藏）
         */
        FIELD
    }
}
