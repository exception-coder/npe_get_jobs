package getjobs.controller;

import getjobs.config.ai.DeepseekConfigRefreshService;
import lombok.Data;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * Deepseek 配置控制器，提供运行时刷新 Deepseek 相关配置的接口。
 */
@RestController
@RequestMapping("/api/deepseek")
public class DeepseekConfigController {

    private final DeepseekConfigRefreshService deepseekConfigRefreshService;

    public DeepseekConfigController(DeepseekConfigRefreshService deepseekConfigRefreshService) {
        this.deepseekConfigRefreshService = deepseekConfigRefreshService;
    }

    /**
     * 更新 Deepseek 的 API Key。
     *
     * @param request 请求体，需包含新的 API Key
     * @return 更新结果，包含是否成功和当前脱敏后的 API Key
     */
    @PostMapping("/api-key")
    public ResponseEntity<Map<String, Object>> updateApiKey(@RequestBody DeepseekApiKeyUpdateRequest request) {
        if (request == null || !StringUtils.hasText(request.getApiKey())) {
            return ResponseEntity.badRequest().body(createResponse(false, "API Key 不能为空"));
        }
        boolean success = deepseekConfigRefreshService.updateApiKey(request.getApiKey().trim());
        Map<String, Object> response = createResponse(success, success ? "更新成功" : "更新失败");
        response.put("apiKey", deepseekConfigRefreshService.getCurrentApiKey());
        return ResponseEntity.ok(response);
    }

    /**
     * 查看当前配置的（脱敏后的）Deepseek API Key。
     *
     * @return 当前 API Key 的脱敏值
     */
    @GetMapping("/api-key")
    public ResponseEntity<Map<String, Object>> getCurrentApiKey() {
        Map<String, Object> response = new HashMap<>();
        response.put("apiKey", deepseekConfigRefreshService.getCurrentApiKey());
        return ResponseEntity.ok(response);
    }

    /**
     * 验证配置刷新是否生效
     * 
     * @return 验证结果，包含 Environment 和 Bean 的配置信息
     */
    @GetMapping("/verify")
    public ResponseEntity<Map<String, String>> verifyRefresh() {
        Map<String, String> result = deepseekConfigRefreshService.verifyRefresh();
        return ResponseEntity.ok(result);
    }

    private Map<String, Object> createResponse(boolean success, String message) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", success);
        response.put("message", message);
        return response;
    }

    /**
     * Deepseek API Key 更新请求体。
     */
    @Data
    public static class DeepseekApiKeyUpdateRequest {
        private String apiKey;
    }
}
