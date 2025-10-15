package getjobs.config.ai;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.refresh.ContextRefresher;
import org.springframework.core.env.ConfigurableEnvironment;
import org.springframework.core.env.MapPropertySource;
import org.springframework.core.env.MutablePropertySources;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

/**
 * Deepseek 配置动态刷新服务
 * 提供运行时更新 API Key 等配置的能力
 */
@Service
@Slf4j
public class DeepseekConfigRefreshService {

    @Autowired
    private ContextRefresher contextRefresher;

    @Autowired
    private ConfigurableEnvironment environment;

    private static final String DYNAMIC_PROPERTY_SOURCE_NAME = "deepseekDynamicConfig";

    /**
     * 更新 Deepseek API Key
     * 
     * @param newApiKey 新的 API Key
     * @return 是否更新成功
     */
    public boolean updateApiKey(String newApiKey) {
        try {
            log.info("开始更新 Deepseek API Key...");
            
            // 1. 更新环境变量中的配置
            updateProperty("spring.ai.deepseek.api-key", newApiKey);
            
            // 2. 触发配置刷新，重建 @RefreshScope 标注的 Bean
            Set<String> refreshedBeans = contextRefresher.refresh();
            
            log.info("Deepseek API Key 更新成功，刷新的 Bean: {}", refreshedBeans);
            return true;
        } catch (Exception e) {
            log.error("更新 Deepseek API Key 失败", e);
            return false;
        }
    }

    /**
     * 批量更新 Deepseek 配置
     * 
     * @param configs 配置映射（支持 api-key, base-url, model, temperature, max-tokens）
     * @return 是否更新成功
     */
    public boolean updateConfigs(Map<String, String> configs) {
        try {
            log.info("开始批量更新 Deepseek 配置: {}", configs.keySet());
            
            for (Map.Entry<String, String> entry : configs.entrySet()) {
                String key = entry.getKey();
                String value = entry.getValue();
                
                // 将简化的 key 转换为完整的配置 key
                String fullKey = convertToFullKey(key);
                updateProperty(fullKey, value);
            }
            
            // 触发配置刷新
            Set<String> refreshedBeans = contextRefresher.refresh();
            
            log.info("Deepseek 配置批量更新成功，刷新的 Bean: {}", refreshedBeans);
            return true;
        } catch (Exception e) {
            log.error("批量更新 Deepseek 配置失败", e);
            return false;
        }
    }

    /**
     * 获取当前的 API Key（脱敏显示）
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
     * 更新单个配置属性
     */
    private void updateProperty(String key, String value) {
        MutablePropertySources propertySources = environment.getPropertySources();
        
        // 查找或创建动态配置源
        MapPropertySource dynamicSource = (MapPropertySource) propertySources.get(DYNAMIC_PROPERTY_SOURCE_NAME);
        if (dynamicSource == null) {
            Map<String, Object> map = new HashMap<>();
            dynamicSource = new MapPropertySource(DYNAMIC_PROPERTY_SOURCE_NAME, map);
            // 将动态配置源放在最前面，确保优先级最高
            propertySources.addFirst(dynamicSource);
        }
        
        // 更新配置值
        Map<String, Object> map = (Map<String, Object>) dynamicSource.getSource();
        map.put(key, value);
        
        log.debug("已更新配置: {} = {}", key, maskSensitiveValue(key, value));
    }

    /**
     * 将简化的配置 key 转换为完整的配置 key
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
     * 对敏感信息进行脱敏
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

