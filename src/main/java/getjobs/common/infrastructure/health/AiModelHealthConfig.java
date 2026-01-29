package getjobs.common.infrastructure.health;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.boot.actuate.autoconfigure.health.ConditionalOnEnabledHealthIndicator;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Configuration;

import java.util.Map;

/**
 * AI 模型健康检查配置类
 *
 * @author getjobs
 * @since 2025-11-05
 */
@Slf4j
@Configuration
@RequiredArgsConstructor
@EnableConfigurationProperties(AiModelHealthProperties.class)
@ConditionalOnEnabledHealthIndicator("aiModels")
public class AiModelHealthConfig {

    private final AiModelHealthProperties properties;
    private final ApplicationContext applicationContext;

    @PostConstruct
    public void init() {
        log.info("═══════════════════════════════════════════════════════════");
        log.info("        AI 模型健康检查配置初始化");
        log.info("═══════════════════════════════════════════════════════════");

        // 扫描所有 ChatModel
        Map<String, ChatModel> chatModels = AiModelBeanUtils.filterScopedProxyBeans(
                applicationContext.getBeansOfType(ChatModel.class));

        log.info("启用状态: {}", properties.isEnabled());
        log.info("检查类型: {}", properties.getCheckType());
        log.info("连接超时: {}ms", properties.getConnectionTimeout());
        log.info("响应超时: {}ms", properties.getResponseTimeout());
        log.info("慢响应阈值: {}ms", properties.getSlowResponseThreshold());
        log.info("整体超时: {}ms", properties.getOverallTimeout());
        log.info("───────────────────────────────────────────────────────────");
        log.info("发现的 AI 模型:");

        if (chatModels.isEmpty()) {
            log.warn("  ⚠️  未发现任何 ChatModel 实例");
        } else {
            chatModels.forEach((logicalName, model) -> {
                String status = getModelStatus(logicalName);
                log.info("  {} {} ({})", status, logicalName, model.getClass().getSimpleName());
            });
        }

        // 显示配置的包含/排除列表
        if (!properties.getIncludedModels().isEmpty()) {
            log.info("───────────────────────────────────────────────────────────");
            log.info("仅检查以下模型:");
            properties.getIncludedModels().forEach(name -> log.info("  ✓ {}", name));
        }

        if (!properties.getExcludedModels().isEmpty()) {
            log.info("───────────────────────────────────────────────────────────");
            log.info("排除以下模型:");
            properties.getExcludedModels().forEach(name -> log.info("  ✗ {}", name));
        }

        log.info("═══════════════════════════════════════════════════════════");

        // 检查类型建议
        if (properties.getCheckType() == AiModelHealthProperties.CheckType.API_CALL) {
            log.warn("⚠️  当前使用 API_CALL 检查类型，这会实际调用 AI API 并可能产生费用");
            log.warn("⚠️  建议在生产环境使用 PING 或 MODEL_INFO 检查类型");
        }
    }

    /**
     * 获取模型检查状态标识
     */
    private String getModelStatus(String beanName) {
        if (!properties.isEnabled()) {
            return "⊝"; // 禁用
        }

        if (properties.getExcludedModels().contains(beanName)) {
            return "✗"; // 排除
        }

        if (!properties.getIncludedModels().isEmpty()
                && !properties.getIncludedModels().contains(beanName)) {
            return "○"; // 未包含
        }

        return "✓"; // 启用
    }

}
