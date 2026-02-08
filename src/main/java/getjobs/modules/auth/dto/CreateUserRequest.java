package getjobs.modules.auth.dto;

import lombok.Data;

import java.util.List;

/**
 * 新增用户请求参数
 *
 * @author getjobs
 */
@Data
public class CreateUserRequest {

    /**
     * 用户名（必填，唯一）
     */
    private String username;

    /**
     * 密码（必填）
     */
    private String password;

    /**
     * 用户展示名 / 昵称（可选）
     */
    private String displayName;

    /**
     * 邮箱（可选，唯一）
     */
    private String email;

    /**
     * 手机号（可选，唯一）
     */
    private String mobile;

    /**
     * 是否启用（可选，默认 true）
     */
    private Boolean enabled;

    /**
     * 是否为超级管理员（可选，默认 false）
     */
    private Boolean superAdmin;

    /**
     * 所属部门编码列表（可选，可所属多个部门）
     */
    private List<String> deptCodes;
}
