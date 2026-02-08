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
 * Facebook视频保存客户端
 */
@Slf4j
@Component
public class FaceBookSaverClient extends BaseWebClient {

    private final IntegrationProperties properties;

    public FaceBookSaverClient(
            @Qualifier("webClientBuilder") WebClient.Builder webClientBuilder,
            IntegrationProperties properties) {
        super(
                webClientBuilder,
                "https://fsaver.com/api",
                3,
                builder -> builder.defaultHeader("Host", "fsaver.com"));
        this.properties = properties;
    }

    @PostConstruct
    public void init() {
        IntegrationProperties.ThirdPartyServiceConfig config = properties.getServices().get("facebook-saver");
        if (config != null && config.getBaseUrl() != null) {
            log.info("FacebookSaver服务已初始化: {}", config.getBaseUrl());
        }
    }

    /**
     * 搜索Facebook视频信息
     * 
     * @param videoUrl Facebook视频URL
     * @return 视频信息
     */
    public Mono<ApiResponse<MediaSaverResponse>> ajaxSearch(String videoUrl) {
        Map<String, String> formData = new HashMap<>();
        formData.put("q", videoUrl);
        formData.put("lang", "zh-cn");

        return doPostForm("/ajaxSearch", formData, MediaSaverResponse.class);
    }
}
