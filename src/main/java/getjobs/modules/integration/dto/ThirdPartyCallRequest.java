package getjobs.modules.integration.dto;

import lombok.Data;

import java.util.Map;

/**
 * 第三方接口调用请求
 */
@Data
public class ThirdPartyCallRequest {

    /**
     * 服务名称
     */
    private String serviceName;

    /**
     * 接口路径
     */
    private String path;

    /**
     * 请求方法 (GET, POST, PUT, DELETE)
     */
    private String method;

    /**
     * 请求参数
     */
    private Map<String, String> params;

    /**
     * 请求体
     */
    private Object body;

    /**
     * 自定义请求头
     */
    private Map<String, String> headers;
}










