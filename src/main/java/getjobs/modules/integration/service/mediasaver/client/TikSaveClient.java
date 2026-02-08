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
 * TikTok视频保存客户端
 */
@Slf4j
@Component
public class TikSaveClient extends BaseWebClient {

    private final IntegrationProperties properties;

    public TikSaveClient(
            @Qualifier("webClientBuilder") WebClient.Builder webClientBuilder,
            IntegrationProperties properties) {
        super(
                webClientBuilder,
                "https://tiksave.io/api",
                3,
                builder -> builder.defaultHeader("Host", "tiksave.io"));
        this.properties = properties;
    }

    @PostConstruct
    public void init() {
        IntegrationProperties.ThirdPartyServiceConfig config = properties.getServices().get("tiksave");
        if (config != null && config.getBaseUrl() != null) {
            log.info("TikSave服务已初始化: {}", config.getBaseUrl());
        }
    }

    /**
     * 搜索TikTok视频信息
     * 
     * @param videoUrl TikTok视频URL
     * @return 视频信息
     */
    public Mono<ApiResponse<MediaSaverResponse>> ajaxSearch(String videoUrl) {
        Map<String, String> formData = new HashMap<>();
        formData.put("q", videoUrl);
        formData.put("lang", "zh-cn");

        return doPostForm("/ajaxSearch", formData, MediaSaverResponse.class);
    }
}
