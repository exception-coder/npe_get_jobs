package getjobs.modules.integration.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 第三方接口调用响应
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ThirdPartyCallResponse {

    /**
     * 是否成功
     */
    private Boolean success;

    /**
     * 响应数据
     */
    private Object data;

    /**
     * 响应消息
     */
    private String message;

    /**
     * 响应时间（毫秒）
     */
    private Long responseTime;

    /**
     * HTTP状态码
     */
    private Integer httpStatus;

    public static ThirdPartyCallResponse success(Object data, Long responseTime) {
        return new ThirdPartyCallResponse(true, data, "Success", responseTime, 200);
    }

    public static ThirdPartyCallResponse error(String message, Integer httpStatus) {
        return new ThirdPartyCallResponse(false, null, message, null, httpStatus);
    }
}










