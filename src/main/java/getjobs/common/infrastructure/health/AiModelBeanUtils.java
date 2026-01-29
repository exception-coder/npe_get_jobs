package getjobs.common.infrastructure.health;

import org.springframework.ai.chat.model.ChatModel;

import java.util.LinkedHashMap;
import java.util.Map;

/**
 * AI 模型 Bean 处理工具，统一负责从容器中筛选出实际需要参与健康检查的模型实例。
 */
final class AiModelBeanUtils {

    private static final String SCOPED_TARGET_PREFIX = "scopedTarget.";

    private AiModelBeanUtils() {
    }

    /**
     * 统一处理作用域代理 Bean：
     * 优先保留 {@code scopedTarget.*} 中的真实 Bean，避免在日志/健康检查中出现代理对象重复记录。
     * 注意：真实 Bean 仍然会保留，只是统一使用逻辑名称（去掉 scopedTarget. 前缀）。
     */
    static Map<String, ChatModel> filterScopedProxyBeans(Map<String, ChatModel> originalBeans) {
        Map<String, ChatModel> filtered = new LinkedHashMap<>();
        originalBeans.forEach((name, model) -> {
            boolean isScopedTarget = name.startsWith(SCOPED_TARGET_PREFIX);
            String logicalName = isScopedTarget ? name.substring(SCOPED_TARGET_PREFIX.length()) : name;
            if (isScopedTarget) {
                // scopedTarget.* 表示真实 Bean，本次强制覆盖（put）逻辑名称，确保替换掉之前可能由代理占位的实例
                filtered.put(logicalName, model);
                return;
            }
            // 普通 Bean（可能是代理）只在逻辑名称尚未存在时注册，避免覆盖真实 Bean
            filtered.putIfAbsent(logicalName, model);
        });
        return filtered;
    }
}
