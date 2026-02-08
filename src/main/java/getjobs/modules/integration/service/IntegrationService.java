package getjobs.modules.integration.service;

import getjobs.modules.integration.config.IntegrationProperties;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

/**
 * 第三方接口集成服务
 * 提供统一的第三方接口调用入口
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class IntegrationService {

    private final IntegrationProperties integrationProperties;

    /**
     * 获取服务配置
     */
    public IntegrationProperties.ThirdPartyServiceConfig getServiceConfig(String serviceName) {
        return integrationProperties.getServices().get(serviceName);
    }

    /**
     * 检查服务是否可用
     */
    public boolean isServiceAvailable(String serviceName) {
        IntegrationProperties.ThirdPartyServiceConfig config = integrationProperties.getServices().get(serviceName);
        return config != null && config.getEnabled() && integrationProperties.getEnabled();
    }

}
