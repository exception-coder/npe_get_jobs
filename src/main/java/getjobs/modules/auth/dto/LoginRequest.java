package getjobs.modules.auth.dto;

import lombok.Data;

/**
 * 登录请求参数
 *
 * @author getjobs
 */
@Data
public class LoginRequest {

    /**
     * 用户名
     */
    private String username;

    /**
     * 密码
     */
    private String password;
}
