package getjobs.modules.auth.domain;

import getjobs.repository.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

/**
 * 角色实体
 *
 * <p>
 * 角色用于对用户进行分组，每个角色可以关联多个权限。
 * 用户通过角色间接获得权限。
 * </p>
 *
 * @author getjobs
 */
@Getter
@Setter
@Entity
@Table(name = "sys_role")
public class Role extends BaseEntity {

    /**
     * 角色名称（如：系统管理员、运营人员、普通用户）
     */
    @Column(name = "name", nullable = false, length = 64)
    private String name;

    /**
     * 角色编码（唯一，如：ADMIN、OPERATOR、USER）
     */
    @Column(name = "code", nullable = false, unique = true, length = 64)
    private String code;

    /**
     * 角色描述
     */
    @Column(name = "description", length = 255)
    private String description;

    /**
     * 是否启用
     */
    @Column(name = "enabled", nullable = false)
    private Boolean enabled = true;

    /**
     * 排序号（用于前端展示顺序）
     */
    @Column(name = "sort_order")
    private Integer sortOrder = 0;
}

