package getjobs.common.infrastructure.health;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.openai.OpenAiChatModel;
import org.springframework.ai.openai.api.OpenAiApi;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.net.InetSocketAddress;
import java.net.Socket;
import java.net.URL;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * AI 模型健康检查服务
 * <p>
 * 提供对各种 AI 模型的健康检查功能
 * </p>
 *
 * @author getjobs
 * @since 2025-11-05
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class AiModelHealthService {

    private final AiModelHealthProperties properties;

    /**
     * 检查模型健康状态
     *
     * @param beanName 模型 Bean 名称
     * @param model    模型实例
     * @return 检查结果
     */
    public HealthCheckResult checkModelHealth(String beanName, ChatModel model) {
        log.debug("检查模型 {} 的健康状态，类型: {}", beanName, model.getClass().getSimpleName());

        try {
            // 获取模型信息
            Map<String, Object> modelInfo = extractModelInfo(beanName, model);

            // 根据检查类型执行检查
            switch (properties.getCheckType()) {
                case PING:
                    return checkPing(beanName, model, modelInfo);
                case API_CALL:
                    return checkApiCall(beanName, model, modelInfo);
                case MODEL_INFO:
                    return checkModelInfo(beanName, model, modelInfo);
                default:
                    return checkPing(beanName, model, modelInfo);
            }
        } catch (Exception e) {
            log.error("检查模型 {} 时发生异常", beanName, e);
            return HealthCheckResult.failure("检查异常: " + e.getMessage(), null);
        }
    }

    /**
     * PING 检查：测试网络连接
     */
    private HealthCheckResult checkPing(String beanName, ChatModel model, Map<String, Object> modelInfo) {
        try {
            String baseUrl = extractBaseUrl(model);
            if (baseUrl == null) {
                return HealthCheckResult.success(modelInfo);
            }

            String host = extractHost(baseUrl);
            int port = extractPort(baseUrl);

            log.debug("执行 PING 检查: {}:{} (模型: {})", host, port, beanName);

            try (Socket socket = new Socket()) {
                socket.connect(new InetSocketAddress(host, port), properties.getConnectionTimeout());
                log.debug("PING 检查成功: {}", beanName);
                return HealthCheckResult.success(modelInfo);
            }
        } catch (Exception e) {
            log.error("PING 检查失败: {}", beanName, e);
            return HealthCheckResult.failure("无法连接: " + e.getMessage(), modelInfo);
        }
    }

    /**
     * API 调用检查：发送实际请求
     */
    private HealthCheckResult checkApiCall(String beanName, ChatModel model, Map<String, Object> modelInfo) {
        try {
            log.debug("执行 API_CALL 检查: {}", beanName);

            String testMessage = properties.getTestMessage();
            UserMessage userMessage = new UserMessage(testMessage);
            Prompt prompt = new Prompt(userMessage);

            ChatResponse response = model.call(prompt);

            if (response != null && response.getResult() != null) {
                log.debug("API_CALL 检查成功: {}", beanName);
                return HealthCheckResult.success(modelInfo);
            } else {
                log.warn("API_CALL 检查返回空响应: {}", beanName);
                return HealthCheckResult.failure("API 返回空响应", modelInfo);
            }
        } catch (Exception e) {
            log.error("API_CALL 检查失败: {}", beanName, e);
            return HealthCheckResult.failure("API 调用失败: " + e.getMessage(), modelInfo);
        }
    }

    /**
     * 模型信息检查：仅检查模型配置是否正确
     */
    private HealthCheckResult checkModelInfo(String beanName, ChatModel model, Map<String, Object> modelInfo) {
        try {
            log.debug("执行 MODEL_INFO 检查: {}", beanName);

            // 检查模型信息是否完整
            if (modelInfo == null || modelInfo.isEmpty()) {
                return HealthCheckResult.failure("无法获取模型信息", null);
            }

            return HealthCheckResult.success(modelInfo);
        } catch (Exception e) {
            log.error("MODEL_INFO 检查失败: {}", beanName, e);
            return HealthCheckResult.failure("获取模型信息失败: " + e.getMessage(), modelInfo);
        }
    }

    /**
     * 提取模型信息
     */
    private Map<String, Object> extractModelInfo(String beanName, ChatModel model) {
        Map<String, Object> info = new LinkedHashMap<>();
        info.put("beanName", beanName);
        info.put("modelClass", model.getClass().getSimpleName());

        try {
            // 如果是 OpenAiChatModel，提取更多信息
            if (model instanceof OpenAiChatModel) {
                OpenAiChatModel openAiModel = (OpenAiChatModel) model;

                // 尝试通过反射获取 OpenAiApi
                try {
                    Field apiField = OpenAiChatModel.class.getDeclaredField("openAiApi");
                    apiField.setAccessible(true);
                    OpenAiApi api = (OpenAiApi) apiField.get(openAiModel);

                    if (api != null) {
                        // 尝试获取 baseUrl
                        try {
                            Field baseUrlField = OpenAiApi.class.getDeclaredField("baseUrl");
                            baseUrlField.setAccessible(true);
                            String baseUrl = (String) baseUrlField.get(api);
                            info.put("baseUrl", baseUrl);
                        } catch (Exception e) {
                            log.debug("无法获取 baseUrl", e);
                        }
                    }
                } catch (Exception e) {
                    log.debug("无法通过反射获取模型信息", e);
                }

                // 识别模型类型
                String modelType = identifyModelType(beanName);
                if (modelType != null) {
                    info.put("modelType", modelType);
                }
            }
        } catch (Exception e) {
            log.debug("提取模型信息时发生异常", e);
        }

        return info;
    }

    /**
     * 识别模型类型
     */
    private String identifyModelType(String beanName) {
        String lowerName = beanName.toLowerCase();
        if (lowerName.contains("openai") || lowerName.contains("chatgpt") || lowerName.contains("gpt")) {
            return "OpenAI";
        } else if (lowerName.contains("deepseek")) {
            return "Deepseek";
        } else if (lowerName.contains("claude")) {
            return "Claude";
        } else if (lowerName.contains("gemini")) {
            return "Gemini";
        }
        return "Unknown";
    }

    /**
     * 从模型中提取 baseUrl
     */
    private String extractBaseUrl(ChatModel model) {
        try {
            if (model instanceof OpenAiChatModel) {
                OpenAiChatModel openAiModel = (OpenAiChatModel) model;
                Field apiField = OpenAiChatModel.class.getDeclaredField("openAiApi");
                apiField.setAccessible(true);
                OpenAiApi api = (OpenAiApi) apiField.get(openAiModel);

                if (api != null) {
                    Field baseUrlField = OpenAiApi.class.getDeclaredField("baseUrl");
                    baseUrlField.setAccessible(true);
                    return (String) baseUrlField.get(api);
                }
            }
        } catch (Exception e) {
            log.debug("无法提取 baseUrl", e);
        }
        return null;
    }

    /**
     * 从 URL 提取主机名
     */
    @SuppressWarnings("deprecation")
    private String extractHost(String urlString) {
        try {
            URL url = new URL(urlString);
            return url.getHost();
        } catch (Exception e) {
            String cleanUrl = urlString.replace("https://", "").replace("http://", "");
            int slashIndex = cleanUrl.indexOf("/");
            if (slashIndex > 0) {
                cleanUrl = cleanUrl.substring(0, slashIndex);
            }
            int colonIndex = cleanUrl.indexOf(":");
            if (colonIndex > 0) {
                return cleanUrl.substring(0, colonIndex);
            }
            return cleanUrl;
        }
    }

    /**
     * 从 URL 提取端口
     */
    @SuppressWarnings("deprecation")
    private int extractPort(String urlString) {
        try {
            URL url = new URL(urlString);
            int port = url.getPort();
            if (port != -1) {
                return port;
            }
            return url.getProtocol().equals("https") ? 443 : 80;
        } catch (Exception e) {
            return urlString.startsWith("https://") ? 443 : 80;
        }
    }

    /**
     * 健康检查结果
     */
    @Getter
    public static class HealthCheckResult {
        private final boolean healthy;
        private final String errorMessage;
        private final Map<String, Object> modelInfo;

        private HealthCheckResult(boolean healthy, String errorMessage, Map<String, Object> modelInfo) {
            this.healthy = healthy;
            this.errorMessage = errorMessage;
            this.modelInfo = modelInfo;
        }

        public static HealthCheckResult success(Map<String, Object> modelInfo) {
            return new HealthCheckResult(true, null, modelInfo);
        }

        public static HealthCheckResult failure(String errorMessage, Map<String, Object> modelInfo) {
            return new HealthCheckResult(false, errorMessage, modelInfo);
        }
    }
}
