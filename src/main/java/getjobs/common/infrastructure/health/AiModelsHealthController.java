package getjobs.common.infrastructure.health;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.actuate.health.Health;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

/**
 * AI 模型健康检查管理控制器
 * <p>
 * 提供所有 AI 模型健康检查相关的管理接口
 * </p>
 *
 * @author getjobs
 * @since 2025-11-05
 */
@Slf4j
@RestController
@RequestMapping("/api/health/ai-models")
@RequiredArgsConstructor
public class AiModelsHealthController {

    private final AiModelHealthIndicator healthIndicator;
    private final AiModelHealthProperties properties;

    /**
     * 获取所有 AI 模型健康状态
     *
     * @return 健康状态信息
     */
    @GetMapping
    public Map<String, Object> getAiModelsHealth() {
        log.info("收到 AI 模型健康检查请求");

        Health health = healthIndicator.health();

        Map<String, Object> response = new HashMap<>();
        response.put("status", health.getStatus().getCode());
        response.put("details", health.getDetails());
        response.put("timestamp", System.currentTimeMillis());

        return response;
    }

    /**
     * 获取健康检查配置
     *
     * @return 配置信息
     */
    @GetMapping("/config")
    public Map<String, Object> getHealthConfig() {
        log.info("收到获取健康检查配置请求");

        Map<String, Object> config = new HashMap<>();
        config.put("enabled", properties.isEnabled());
        config.put("checkType", properties.getCheckType().name());
        config.put("connectionTimeout", properties.getConnectionTimeout());
        config.put("responseTimeout", properties.getResponseTimeout());
        config.put("slowResponseThreshold", properties.getSlowResponseThreshold());
        config.put("overallTimeout", properties.getOverallTimeout());
        config.put("testMessage", properties.getTestMessage());
        config.put("includedModels", properties.getIncludedModels());
        config.put("excludedModels", properties.getExcludedModels());

        return config;
    }

    /**
     * 手动触发健康检查
     *
     * @return 检查结果
     */
    @PostMapping("/check")
    public Map<String, Object> triggerHealthCheck() {
        log.info("收到手动触发健康检查请求");

        long startTime = System.currentTimeMillis();
        Health health = healthIndicator.health();
        long duration = System.currentTimeMillis() - startTime;

        Map<String, Object> response = new HashMap<>();
        response.put("status", health.getStatus().getCode());
        response.put("checkDuration", duration + "ms");
        response.put("details", health.getDetails());
        response.put("timestamp", System.currentTimeMillis());

        return response;
    }

    /**
     * 获取特定模型的健康状态
     *
     * @param modelName 模型名称（Bean Name）
     * @return 模型健康状态
     */
    @GetMapping("/{modelName}")
    public Map<String, Object> getModelHealth(@PathVariable String modelName) {
        log.info("收到获取模型 {} 健康状态请求", modelName);

        Health health = healthIndicator.health();
        Map<String, Object> details = health.getDetails();

        @SuppressWarnings("unchecked")
        Map<String, Object> models = (Map<String, Object>) details.get("models");

        Map<String, Object> response = new HashMap<>();

        if (models != null && models.containsKey(modelName)) {
            response.put("status", "found");
            response.put("modelName", modelName);
            response.put("details", models.get(modelName));
        } else {
            response.put("status", "not_found");
            response.put("modelName", modelName);
            response.put("message", "模型未找到或未配置检查");
            response.put("availableModels", models != null ? models.keySet() : null);
        }

        response.put("timestamp", System.currentTimeMillis());

        return response;
    }

    /**
     * 获取健康检查统计信息
     *
     * @return 统计信息
     */
    @GetMapping("/stats")
    public Map<String, Object> getHealthStats() {
        log.info("收到获取健康检查统计请求");

        Health health = healthIndicator.health();
        Map<String, Object> details = health.getDetails();

        Map<String, Object> stats = new HashMap<>();
        stats.put("enabled", properties.isEnabled());
        stats.put("checkType", properties.getCheckType().name());
        stats.put("totalModels", details.get("totalModels"));
        stats.put("checkedModels", details.get("checkedModels"));
        stats.put("healthyModels", details.get("healthyModels"));
        stats.put("unhealthyModels", details.get("unhealthyModels"));
        stats.put("avgResponseTime", details.get("avgResponseTime"));
        stats.put("timestamp", System.currentTimeMillis());

        return stats;
    }
}
