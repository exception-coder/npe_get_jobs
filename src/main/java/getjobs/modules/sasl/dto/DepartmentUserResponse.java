package getjobs.modules.sasl.dto;

import java.util.List;

/**
 * 部门用户响应 DTO。
 *
 * @param deptCode 部门编码
 * @param users    用户列表
 */
public record DepartmentUserResponse(
        String deptCode,
        List<UserInfo> users) {

    /**
     * 用户信息。
     *
     * @param id          用户ID
     * @param username    用户名
     * @param displayName 显示名称
     * @param email       邮箱
     * @param mobile      手机号
     */
    public record UserInfo(
            Long id,
            String username,
            String displayName,
            String email,
            String mobile) {
    }
}
