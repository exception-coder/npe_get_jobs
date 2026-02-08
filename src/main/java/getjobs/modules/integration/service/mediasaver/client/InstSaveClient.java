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
 * Instagram内容保存客户端
 */
@Slf4j
@Component
public class InstSaveClient extends BaseWebClient {

    private final IntegrationProperties properties;

    public InstSaveClient(
            @Qualifier("webClientBuilder") WebClient.Builder webClientBuilder,
            IntegrationProperties properties) {
        super(
                webClientBuilder,
                "https://saveinst.app/api",
                3,
                builder -> builder.defaultHeader("Host", "saveinst.app"));
        this.properties = properties;
    }

    @PostConstruct
    public void init() {
        IntegrationProperties.ThirdPartyServiceConfig config = properties.getServices().get("instsave");
        if (config != null && config.getBaseUrl() != null) {
            log.info("InstSave服务已初始化: {}", config.getBaseUrl());
        }
    }

    /**
     * 搜索Instagram内容信息
     * 
     * @param contentUrl Instagram内容URL
     * @return 内容信息
     */
    public Mono<ApiResponse<MediaSaverResponse>> ajaxSearch(String contentUrl) {
        Map<String, String> formData = new HashMap<>();
        formData.put("q", contentUrl);
        formData.put("lang", "zh-cn");

        return doPostForm("/ajaxSearch", formData, MediaSaverResponse.class);
    }
}
