package getjobs.common.infrastructure.health;

import lombok.extern.slf4j.Slf4j;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.boot.actuate.health.Health;
import org.springframework.boot.actuate.health.HealthIndicator;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.time.Instant;
import java.util.*;
import java.util.concurrent.*;

/**
 * AI 模型聚合健康检查指示器
 * <p>
 * 自动扫描容器中所有的 OpenAiChatModel 实例并进行健康检查
 * 支持多模型并发检查，提供汇总和详细的健康状态
 * </p>
 *
 * @author getjobs
 * @since 2025-11-05
 */
@Slf4j
@Component("aiModels")
public class AiModelHealthIndicator implements HealthIndicator {

    private final ApplicationContext applicationContext;
    private final AiModelHealthService healthService;
    private final AiModelHealthProperties properties;

    // 线程池，用于并发检查多个模型
    private final ExecutorService executorService;

    public AiModelHealthIndicator(ApplicationContext applicationContext,
            AiModelHealthService healthService,
            AiModelHealthProperties properties) {
        this.applicationContext = applicationContext;
        this.healthService = healthService;
        this.properties = properties;

        // 创建线程池，最多支持 10 个模型并发检查
        this.executorService = Executors.newFixedThreadPool(
                Math.min(10, Runtime.getRuntime().availableProcessors()));
    }

    @Override
    public Health health() {
        try {
            // 获取所有 ChatModel 实例
            Map<String, ChatModel> chatModels = applicationContext.getBeansOfType(ChatModel.class);

            if (chatModels.isEmpty()) {
                log.warn("未找到任何 ChatModel 实例");
                return Health.unknown()
                        .withDetail("message", "未找到任何 AI 模型")
                        .withDetail("modelsCount", 0)
                        .build();
            }

            log.debug("找到 {} 个 ChatModel 实例", chatModels.size());

            // 过滤出需要检查的模型
            Map<String, ChatModel> modelsToCheck = filterModels(chatModels);

            if (modelsToCheck.isEmpty()) {
                return Health.up()
                        .withDetail("message", "健康检查已禁用或没有启用的模型")
                        .withDetail("totalModels", chatModels.size())
                        .build();
            }

            // 并发检查所有模型
            Map<String, ModelHealthResult> results = checkModelsHealth(modelsToCheck);

            // 构建健康状态
            return buildHealthStatus(results, chatModels.size());

        } catch (Exception e) {
            log.error("AI 模型健康检查失败", e);
            return Health.down()
                    .withException(e)
                    .withDetail("error", e.getMessage())
                    .build();
        }
    }

    /**
     * 过滤需要检查的模型
     */
    private Map<String, ChatModel> filterModels(Map<String, ChatModel> allModels) {
        if (!properties.isEnabled()) {
            return Collections.emptyMap();
        }

        Map<String, ChatModel> filtered = new LinkedHashMap<>();

        for (Map.Entry<String, ChatModel> entry : allModels.entrySet()) {
            String beanName = entry.getKey();
            ChatModel model = entry.getValue();

            // 检查是否在排除列表中
            if (properties.getExcludedModels().contains(beanName)) {
                log.debug("模型 {} 在排除列表中，跳过检查", beanName);
                continue;
            }

            // 如果配置了包含列表，只检查列表中的模型
            if (!properties.getIncludedModels().isEmpty()
                    && !properties.getIncludedModels().contains(beanName)) {
                log.debug("模型 {} 不在包含列表中，跳过检查", beanName);
                continue;
            }

            filtered.put(beanName, model);
        }

        return filtered;
    }

    /**
     * 并发检查所有模型的健康状态
     */
    private Map<String, ModelHealthResult> checkModelsHealth(Map<String, ChatModel> models) {
        Map<String, ModelHealthResult> results = new ConcurrentHashMap<>();
        List<CompletableFuture<Void>> futures = new ArrayList<>();

        for (Map.Entry<String, ChatModel> entry : models.entrySet()) {
            String beanName = entry.getKey();
            ChatModel model = entry.getValue();

            CompletableFuture<Void> future = CompletableFuture.runAsync(() -> {
                try {
                    ModelHealthResult result = checkSingleModel(beanName, model);
                    results.put(beanName, result);
                } catch (Exception e) {
                    log.error("检查模型 {} 时发生异常", beanName, e);
                    results.put(beanName, ModelHealthResult.error(beanName, e));
                }
            }, executorService);

            futures.add(future);
        }

        // 等待所有检查完成，设置超时
        try {
            CompletableFuture.allOf(futures.toArray(new CompletableFuture[0]))
                    .get(properties.getOverallTimeout(), TimeUnit.MILLISECONDS);
        } catch (TimeoutException e) {
            log.warn("健康检查超时，部分结果可能不完整");
        } catch (Exception e) {
            log.error("等待健康检查完成时发生异常", e);
        }

        return results;
    }

    /**
     * 检查单个模型的健康状态
     */
    private ModelHealthResult checkSingleModel(String beanName, ChatModel model) {
        log.debug("开始检查模型: {}", beanName);
        Instant startTime = Instant.now();

        try {
            AiModelHealthService.HealthCheckResult result = healthService.checkModelHealth(beanName, model);

            long responseTime = Duration.between(startTime, Instant.now()).toMillis();

            return new ModelHealthResult(
                    beanName,
                    result.isHealthy(),
                    responseTime,
                    result.getErrorMessage(),
                    result.getModelInfo());

        } catch (Exception e) {
            long responseTime = Duration.between(startTime, Instant.now()).toMillis();
            log.error("检查模型 {} 失败", beanName, e);
            return ModelHealthResult.failure(beanName, responseTime, e.getMessage());
        }
    }

    /**
     * 构建整体健康状态
     */
    private Health buildHealthStatus(Map<String, ModelHealthResult> results, int totalModels) {
        Map<String, Object> details = new LinkedHashMap<>();

        // 统计信息
        long healthyCount = results.values().stream().filter(ModelHealthResult::isHealthy).count();
        long unhealthyCount = results.size() - healthyCount;

        details.put("totalModels", totalModels);
        details.put("checkedModels", results.size());
        details.put("healthyModels", healthyCount);
        details.put("unhealthyModels", unhealthyCount);
        details.put("checkType", properties.getCheckType().name());

        // 计算平均响应时间
        double avgResponseTime = results.values().stream()
                .mapToLong(ModelHealthResult::getResponseTime)
                .average()
                .orElse(0);
        details.put("avgResponseTime", String.format("%.0fms", avgResponseTime));

        // 各模型详细状态
        Map<String, Object> modelsStatus = new LinkedHashMap<>();
        results.forEach((name, result) -> {
            Map<String, Object> modelDetail = new LinkedHashMap<>();
            modelDetail.put("status", result.isHealthy() ? "UP" : "DOWN");
            modelDetail.put("responseTime", result.getResponseTime() + "ms");

            if (result.getModelInfo() != null) {
                modelDetail.putAll(result.getModelInfo());
            }

            if (!result.isHealthy() && result.getErrorMessage() != null) {
                modelDetail.put("error", result.getErrorMessage());
            }

            // 响应时间状态
            if (result.getResponseTime() > properties.getSlowResponseThreshold()) {
                modelDetail.put("responseStatus", "SLOW");
            } else {
                modelDetail.put("responseStatus", "NORMAL");
            }

            modelsStatus.put(name, modelDetail);
        });
        details.put("models", modelsStatus);

        // 确定整体健康状态
        boolean allHealthy = unhealthyCount == 0;

        if (allHealthy) {
            return Health.up().withDetails(details).build();
        } else {
            return Health.down().withDetails(details).build();
        }
    }

    /**
     * 模型健康检查结果
     */
    private static class ModelHealthResult {
        @SuppressWarnings("unused")
        private final String modelName;
        private final boolean healthy;
        private final long responseTime;
        private final String errorMessage;
        private final Map<String, Object> modelInfo;

        public ModelHealthResult(String modelName, boolean healthy, long responseTime,
                String errorMessage, Map<String, Object> modelInfo) {
            this.modelName = modelName;
            this.healthy = healthy;
            this.responseTime = responseTime;
            this.errorMessage = errorMessage;
            this.modelInfo = modelInfo;
        }

        public static ModelHealthResult failure(String modelName, long responseTime, String errorMessage) {
            return new ModelHealthResult(modelName, false, responseTime, errorMessage, null);
        }

        public static ModelHealthResult error(String modelName, Exception e) {
            return new ModelHealthResult(modelName, false, 0, e.getMessage(), null);
        }

        public boolean isHealthy() {
            return healthy;
        }

        public long getResponseTime() {
            return responseTime;
        }

        public String getErrorMessage() {
            return errorMessage;
        }

        public Map<String, Object> getModelInfo() {
            return modelInfo;
        }
    }
}
