package getjobs.modules.integration.domain;

import lombok.Data;

import java.time.LocalDateTime;

/**
 * API调用日志实体
 * 记录每次第三方API调用的详细信息
 */
@Data
public class ApiCallLog {

    /**
     * 日志ID
     */
    private Long id;

    /**
     * 服务名称
     */
    private String serviceName;

    /**
     * 请求URL
     */
    private String requestUrl;

    /**
     * 请求方法
     */
    private String requestMethod;

    /**
     * 请求头
     */
    private String requestHeaders;

    /**
     * 请求体
     */
    private String requestBody;

    /**
     * 响应状态码
     */
    private Integer responseStatus;

    /**
     * 响应体
     */
    private String responseBody;

    /**
     * 响应时间（毫秒）
     */
    private Long responseTime;

    /**
     * 是否成功
     */
    private Boolean success;

    /**
     * 错误消息
     */
    private String errorMessage;

    /**
     * 创建时间
     */
    private LocalDateTime createTime;

    /**
     * 创建人
     */
    private String createBy;
}










