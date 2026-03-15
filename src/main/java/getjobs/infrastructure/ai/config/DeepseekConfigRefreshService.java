package getjobs.infrastructure.ai.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.ai.openai.api.OpenAiApi;
import org.springframework.cloud.context.environment.EnvironmentChangeEvent;
import org.springframework.cloud.context.scope.refresh.RefreshScope;
import org.springframework.context.ApplicationContext;
import org.springframework.core.env.ConfigurableEnvironment;
import org.springframework.core.env.MapPropertySource;
import org.springframework.core.env.MutablePropertySources;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

/**
 * Deepseek 配置动态刷新服务。
 * <p>
 * 主要职责：
 * <ol>
 *   <li>在运行时动态调整 Deepseek 相关配置（API Key、Base URL、模型参数等）；</li>
 *   <li>将最新配置写入 {@link ConfigurableEnvironment}，保证 Spring 应用上下文能够感知变更；</li>
 *   <li>通过 {@link RefreshScope#refreshAll()} 直接清空缓存，强制重建被 {@code @RefreshScope}
 *       修饰的 Bean，确保新配置即时生效。</li>
 * </ol>
 *
 * <p>
 * <b>核心原理：</b>
 * </p>
 * <ul>
 *   <li>替换 PropertySource 实例而非修改内部 Map，确保 Spring 能检测到配置变化</li>
 *   <li>使用 RefreshScope.refreshAll() 直接清空缓存，不依赖 ContextRefresher 的自动检测</li>
 *   <li>发布 EnvironmentChangeEvent 事件，通知其他监听器配置已变更</li>
 * </ul>
 */
@Service
@Slf4j
public class DeepseekConfigRefreshService {

    private final ConfigurableEnvironment environment;

    private final ApplicationContext applicationContext;

    private final RefreshScope refreshScope;

    private static final String DYNAMIC_PROPERTY_SOURCE_NAME = "deepseekDynamicConfig";

    public DeepseekConfigRefreshService(ConfigurableEnvironment environment,
            ApplicationContext applicationContext, RefreshScope refreshScope) {
        this.environment = environment;
        this.applicationContext = applicationContext;
        this.refreshScope = refreshScope;
    }

    /**
     * 更新 Deepseek API Key
     */
    public boolean updateApiKey(String newApiKey) {
        try {
            log.info("开始更新 Deepseek API Key");

            boolean changed = updateProperty("spring.ai.deepseek.api-key", newApiKey);
            if (!changed) {
                log.info("API Key 未发生变化，跳过刷新");
                return true;
            }

            triggerRefresh(Set.of("spring.ai.deepseek.api-key"));

            log.info("Deepseek API Key 更新成功");
            return true;
        } catch (Exception e) {
            log.error("更新 Deepseek API Key 失败", e);
            return false;
        }
    }

    /**
     * 批量更新 Deepseek 配置。
     *
     * @param configs 配置映射（支持 api-key、base-url、model、temperature、max-tokens 等），key 可使用简写
     */
    public boolean updateConfigs(Map<String, String> configs) {
        try {
            log.info("开始批量更新 Deepseek 配置: {}", configs.keySet());

            Set<String> changedKeys = new HashSet<>();
            for (Map.Entry<String, String> entry : configs.entrySet()) {
                String fullKey = convertToFullKey(entry.getKey());
                if (updateProperty(fullKey, entry.getValue())) {
                    changedKeys.add(fullKey);
                }
            }

            triggerRefresh(changedKeys);

            log.info("Deepseek 配置批量更新成功");
            return true;
        } catch (Exception e) {
            log.error("批量更新 Deepseek 配置失败", e);
            return false;
        }
    }

    /**
     * 获取当前的 API Key（脱敏显示）。
     */
    public String getCurrentApiKey() {
        String apiKey = environment.getProperty("spring.ai.deepseek.api-key");
        if (apiKey == null || apiKey.isEmpty()) {
            return "未配置";
        }
        if (apiKey.length() <= 8) {
            return "****";
        }
        return apiKey.substring(0, 4) + "****" + apiKey.substring(apiKey.length() - 4);
    }

    /**
     * 验证配置刷新是否生效
     */
    public Map<String, String> verifyRefresh() {
        Map<String, String> result = new HashMap<>();

        try {
            String envApiKey = environment.getProperty("spring.ai.deepseek.api-key");
            String envBaseUrl = environment.getProperty("spring.ai.deepseek.base-url");
            result.put("environment.apiKey", maskSensitiveValue("api-key", envApiKey));
            result.put("environment.baseUrl", envBaseUrl);

            applicationContext.getBean("deepseekAiApi", OpenAiApi.class);
            result.put("deepseekAiApi.status", "Bean 已创建");

            result.put("propertySource.exists",
                    environment.getPropertySources().contains(DYNAMIC_PROPERTY_SOURCE_NAME) ? "是" : "否");

            log.info("配置验证结果: {}", result);
            return result;

        } catch (Exception e) {
            log.error("验证配置刷新失败", e);
            result.put("error", e.getMessage());
            return result;
        }
    }

    private boolean updateProperty(String key, String value) {
        MutablePropertySources propertySources = environment.getPropertySources();

        MapPropertySource dynamicSource = (MapPropertySource) propertySources.get(DYNAMIC_PROPERTY_SOURCE_NAME);
        Object previousValue = environment.getProperty(key);

        Map<String, Object> updatedProperties = new HashMap<>();
        if (dynamicSource != null) {
            updatedProperties.putAll(dynamicSource.getSource());
        }
        updatedProperties.put(key, value);

        MapPropertySource refreshedSource = new MapPropertySource(DYNAMIC_PROPERTY_SOURCE_NAME, updatedProperties);
        if (dynamicSource == null) {
            propertySources.addFirst(refreshedSource);
        } else {
            propertySources.replace(DYNAMIC_PROPERTY_SOURCE_NAME, refreshedSource);
        }

        log.debug("已更新配置: {} = {}", key, maskSensitiveValue(key, value));
        return !Objects.equals(previousValue, value);
    }

    private Set<String> triggerRefresh(Set<String> changedKeys) {
        if (changedKeys == null || changedKeys.isEmpty()) {
            log.info("配置值未发生变化，跳过刷新流程");
            return Collections.emptySet();
        }

        log.info("配置已变更，开始刷新 RefreshScope Bean，变更的键: {}", changedKeys);

        applicationContext.publishEvent(new EnvironmentChangeEvent(changedKeys));
        refreshScope.refreshAll();

        log.info("已清空 RefreshScope 缓存，Bean 将在下次访问时使用新配置重新创建");

        return changedKeys;
    }

    private String convertToFullKey(String simpleKey) {
        return switch (simpleKey) {
            case "api-key", "apiKey" -> "spring.ai.deepseek.api-key";
            case "base-url", "baseUrl" -> "spring.ai.deepseek.base-url";
            case "model" -> "spring.ai.deepseek.chat.options.model";
            case "temperature" -> "spring.ai.deepseek.chat.options.temperature";
            case "max-tokens", "maxTokens" -> "spring.ai.deepseek.chat.options.max-tokens";
            default -> simpleKey.startsWith("spring.ai.deepseek.") ? simpleKey : "spring.ai.deepseek." + simpleKey;
        };
    }

    private String maskSensitiveValue(String key, String value) {
        if (key.contains("api-key") || key.contains("apiKey")) {
            if (value == null || value.isEmpty() || value.length() <= 8) {
                return "****";
            }
            return value.substring(0, 4) + "****" + value.substring(value.length() - 4);
        }
        return value;
    }
}
