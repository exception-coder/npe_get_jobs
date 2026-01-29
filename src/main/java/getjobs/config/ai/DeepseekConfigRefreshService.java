package getjobs.config.ai;

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
 * <li>在运行时动态调整 Deepseek 相关配置（API Key、Base URL、模型参数等）；</li>
 * <li>将最新配置写入 {@link ConfigurableEnvironment}，保证 Spring 应用上下文能够感知变更；</li>
 * <li>通过 {@link RefreshScope#refreshAll()} 直接清空缓存，强制重建被 {@code @RefreshScope}
 * 修饰的 Bean，确保新配置即时生效。</li>
 * </ol>
 * 
 * <p>
 * <b>核心原理：</b>
 * </p>
 * <ul>
 * <li>替换 PropertySource 实例而非修改内部 Map，确保 Spring 能检测到配置变化</li>
 * <li>使用 RefreshScope.refreshAll() 直接清空缓存，不依赖 ContextRefresher 的自动检测</li>
 * <li>发布 EnvironmentChangeEvent 事件，通知其他监听器配置已变更</li>
 * </ul>
 */
@Service
@Slf4j
public class DeepseekConfigRefreshService {

    private final ConfigurableEnvironment environment;

    private final ApplicationContext applicationContext;

    private final RefreshScope refreshScope;

    private static final String DYNAMIC_PROPERTY_SOURCE_NAME = "deepseekDynamicConfig";

    /**
     * 构造函数。
     *
     * @param environment        应用运行时环境，允许动态注入配置
     * @param applicationContext 应用上下文
     * @param refreshScope       RefreshScope，用于直接销毁和重建Bean
     */
    public DeepseekConfigRefreshService(ConfigurableEnvironment environment,
            ApplicationContext applicationContext, RefreshScope refreshScope) {
        this.environment = environment;
        this.applicationContext = applicationContext;
        this.refreshScope = refreshScope;
    }

    /**
     * 更新 Deepseek API Key
     * 
     * @param newApiKey 新的 API Key，不能为空
     * @return {@code true} 表示更新成功，{@code false} 表示更新失败
     */
    public boolean updateApiKey(String newApiKey) {
        try {
            log.info("开始更新 Deepseek API Key");

            // 1. 更新环境变量中的配置
            boolean changed = updateProperty("spring.ai.deepseek.api-key", newApiKey);
            if (!changed) {
                log.info("API Key 未发生变化，跳过刷新");
                return true;
            }

            // 2. 触发配置刷新
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
     * @param configs 配置映射（支持 api-key、base-url、model、temperature、max-tokens 等），key
     *                可使用简写
     * @return {@code true} 表示更新成功，{@code false} 表示更新失败
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

            // 触发配置刷新
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
     *
     * @return 脱敏后的 API Key，如果未配置则返回"未配置"
     */
    public String getCurrentApiKey() {
        String apiKey = environment.getProperty("spring.ai.deepseek.api-key");
        if (apiKey == null || apiKey.isEmpty()) {
            return "未配置";
        }
        // 脱敏：只显示前4位和后4位
        if (apiKey.length() <= 8) {
            return "****";
        }
        return apiKey.substring(0, 4) + "****" + apiKey.substring(apiKey.length() - 4);
    }

    /**
     * 验证配置刷新是否生效
     * 通过实际创建 Bean 实例并检查其配置来验证
     *
     * @return 包含验证信息的 Map
     */
    public Map<String, String> verifyRefresh() {
        Map<String, String> result = new HashMap<>();

        try {
            // 1. 检查 Environment 中的配置
            String envApiKey = environment.getProperty("spring.ai.deepseek.api-key");
            String envBaseUrl = environment.getProperty("spring.ai.deepseek.base-url");
            result.put("environment.apiKey", maskSensitiveValue("api-key", envApiKey));
            result.put("environment.baseUrl", envBaseUrl);

            // 2. 获取 OpenAiApi Bean（会触发实际创建）
            applicationContext.getBean("deepseekAiApi", OpenAiApi.class);
            result.put("deepseekAiApi.status", "Bean 已创建");

            // 3. 检查配置源
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

    /**
     * 更新单个配置属性。
     *
     * @param key   完整的配置 key
     * @param value 对应的配置值
     */
    private boolean updateProperty(String key, String value) {
        MutablePropertySources propertySources = environment.getPropertySources();

        // 查找或创建动态配置源
        MapPropertySource dynamicSource = (MapPropertySource) propertySources.get(DYNAMIC_PROPERTY_SOURCE_NAME);
        Object previousValue = environment.getProperty(key);

        Map<String, Object> updatedProperties = new HashMap<>();
        if (dynamicSource != null) {
            updatedProperties.putAll(dynamicSource.getSource());
        }
        updatedProperties.put(key, value);

        MapPropertySource refreshedSource = new MapPropertySource(DYNAMIC_PROPERTY_SOURCE_NAME, updatedProperties);
        if (dynamicSource == null) {
            // 将动态配置源放在最前面，确保优先级最高
            propertySources.addFirst(refreshedSource);
        } else {
            propertySources.replace(DYNAMIC_PROPERTY_SOURCE_NAME, refreshedSource);
        }

        log.debug("已更新配置: {} = {}", key, maskSensitiveValue(key, value));
        return !Objects.equals(previousValue, value);
    }

    /**
     * 触发配置刷新
     * 
     * 策略说明：
     * - 方案A（极简）：只发布 EnvironmentChangeEvent，Bean 在下次访问时自动刷新
     * - 方案B（当前）：发布事件 + refreshAll()，立即清空所有 @RefreshScope Bean 缓存
     * - 方案C（精准）：发布事件 + 刷新特定 Bean
     * 
     * 当前使用方案B，确保配置立即生效
     */
    private Set<String> triggerRefresh(Set<String> changedKeys) {
        if (changedKeys == null || changedKeys.isEmpty()) {
            log.info("配置值未发生变化，跳过刷新流程");
            return Collections.emptySet();
        }

        log.info("配置已变更，开始刷新 RefreshScope Bean，变更的键: {}", changedKeys);

        // 1. 发布环境变更事件，通知所有监听器
        applicationContext.publishEvent(new EnvironmentChangeEvent(changedKeys));

        // 2. 直接销毁所有 @RefreshScope Bean，强制下次访问时重新创建
        // 注意：这会影响所有 @RefreshScope Bean，如果系统中有很多这样的 Bean，可以考虑精准刷新
        refreshScope.refreshAll();

        log.info("已清空 RefreshScope 缓存，Bean 将在下次访问时使用新配置重新创建");

        return changedKeys;
    }

    /**
     * 将简化的配置 key 转换为完整的配置 key。
     *
     * @param simpleKey 简化配置 key，例如 api-key、baseUrl 等
     * @return Spring 环境可识别的完整配置 key
     */
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

    /**
     * 对敏感信息进行脱敏。
     *
     * @param key   配置 key
     * @param value 配置值
     * @return 若 key 为 API Key，则返回脱敏后的值；否则返回原值
     */
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
