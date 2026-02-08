package getjobs.modules.integration.service.mediasaver.client;

import getjobs.modules.integration.client.BaseWebClient;
import getjobs.modules.integration.config.IntegrationProperties;
import getjobs.modules.integration.dto.ApiResponse;
import getjobs.modules.integration.service.mediasaver.dto.MediaSaverResponse;
import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.HashMap;
import java.util.Map;

/**
 * Twitter/X视频保存客户端
 */
@Slf4j
@Component
public class TwitterSaverClient extends BaseWebClient {

    private final IntegrationProperties properties;

    public TwitterSaverClient(
            @Qualifier("webClientBuilder") WebClient.Builder webClientBuilder,
            IntegrationProperties properties) {
        super(
                webClientBuilder,
                "https://twittersaver.net/api",
                3,
                builder -> builder.defaultHeader("Host", "twittersaver.net"));
        this.properties = properties;
    }

    @PostConstruct
    public void init() {
        IntegrationProperties.ThirdPartyServiceConfig config = properties.getServices().get("twitter-saver");
        if (config != null && config.getBaseUrl() != null) {
            log.info("TwitterSaver服务已初始化: {}", config.getBaseUrl());
        } else {
            log.warn("TwitterSaver服务配置未找到，将使用默认配置");
        }
        // 注意：不要在 @PostConstruct 中进行实际的HTTP请求
        // 这会导致启动时自动发起网络请求，可能影响启动速度
    }

    /**
     * 搜索Twitter/X视频信息
     * 
     * @param videoUrl Twitter视频URL
     * @return 视频信息
     */
    public Mono<ApiResponse<MediaSaverResponse>> ajaxSearch(String videoUrl) {
        Map<String, String> formData = new HashMap<>();
        formData.put("q", videoUrl);
        formData.put("lang", "zh-cn");

        return doPostForm("/ajaxSearch", formData, MediaSaverResponse.class);
    }
}
