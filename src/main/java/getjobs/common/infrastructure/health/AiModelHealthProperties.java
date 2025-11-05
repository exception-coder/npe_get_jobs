package getjobs.common.infrastructure.health;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

import java.util.ArrayList;
import java.util.List;

/**
 * AI 模型健康检查配置属性
 *
 * @author getjobs
 * @since 2025-11-05
 */
@Data
@ConfigurationProperties(prefix = "health.ai-models")
public class AiModelHealthProperties {

    /**
     * 是否启用健康检查
     */
    private boolean enabled = true;

    /**
     * 检查类型
     */
    private CheckType checkType = CheckType.PING;

    /**
     * 连接超时时间（毫秒）
     */
    private int connectionTimeout = 5000;

    /**
     * 响应超时时间（毫秒）
     */
    private int responseTimeout = 10000;

    /**
     * 慢响应阈值（毫秒）
     */
    private long slowResponseThreshold = 3000;

    /**
     * 整体检查超时时间（毫秒）
     * 用于控制所有模型检查的总超时时间
     */
    private long overallTimeout = 30000;

    /**
     * 测试消息（用于 API_CALL 检查）
     */
    private String testMessage = "hello";

    /**
     * 包含的模型列表（Bean 名称）
     * 如果为空，则检查所有模型（排除 excludedModels）
     */
    private List<String> includedModels = new ArrayList<>();

    /**
     * 排除的模型列表（Bean 名称）
     * 这些模型不会被检查
     */
    private List<String> excludedModels = new ArrayList<>();

    /**
     * 健康检查类型枚举
     */
    public enum CheckType {
        /**
         * PING 检查：简单的连接测试
         */
        PING,

        /**
         * API 调用检查：发送实际的 API 请求
         */
        API_CALL,

        /**
         * 模型信息检查：仅检查模型配置
         */
        MODEL_INFO
    }
}
