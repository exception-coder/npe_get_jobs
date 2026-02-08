package getjobs.modules.auth.dto;

import lombok.Data;

/**
 * 查询用户请求参数
 *
 * @author getjobs
 */
@Data
public class QueryUserRequest {

    /**
     * 用户名
     */
    private String username;

    /**
     * 查询密钥
     */
    private String secretKey;
}
