package getjobs.modules.integration.web;

import getjobs.modules.integration.config.IntegrationProperties;
import getjobs.modules.integration.dto.ThirdPartyCallRequest;
import getjobs.modules.integration.dto.ThirdPartyCallResponse;
import getjobs.modules.integration.service.IntegrationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * 第三方接口集成控制器
 */
@Slf4j
@RestController
@RequestMapping("/api/integration")
@RequiredArgsConstructor
public class IntegrationController {

    private final IntegrationService integrationService;


    /**
     * 获取服务配置
     */
    @GetMapping("/config/{serviceName}")
    public ResponseEntity<IntegrationProperties.ThirdPartyServiceConfig> getServiceConfig(
            @PathVariable String serviceName) {
        log.info("查询服务配置: {}", serviceName);
        
        IntegrationProperties.ThirdPartyServiceConfig config = 
                integrationService.getServiceConfig(serviceName);
        
        if (config == null) {
            return ResponseEntity.notFound().build();
        }
        
        return ResponseEntity.ok(config);
    }

    /**
     * 检查服务状态
     */
    @GetMapping("/status/{serviceName}")
    public ResponseEntity<Map<String, Object>> checkServiceStatus(
            @PathVariable String serviceName) {
        log.info("检查服务状态: {}", serviceName);
        
        boolean available = integrationService.isServiceAvailable(serviceName);
        
        return ResponseEntity.ok(Map.of(
                "serviceName", serviceName,
                "available", available,
                "timestamp", System.currentTimeMillis()
        ));
    }

    /**
     * 健康检查
     */
    @GetMapping("/health")
    public ResponseEntity<Map<String, String>> health() {
        return ResponseEntity.ok(Map.of(
                "status", "UP",
                "service", "integration-service"
        ));
    }
}










