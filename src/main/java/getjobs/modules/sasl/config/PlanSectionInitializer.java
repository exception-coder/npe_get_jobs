package getjobs.modules.sasl.config;

import getjobs.modules.sasl.repository.PlanSectionRepository;
import getjobs.modules.sasl.service.SaslService;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

/**
 * 套餐方案初始化器。
 * 在应用启动时检查数据库，如果没有套餐数据则自动同步前端数据。
 */
@Slf4j
@Component("planSectionInitializer")
@RequiredArgsConstructor
@Order(org.springframework.core.Ordered.LOWEST_PRECEDENCE) // 低优先级，在其他初始化完成后执行
public class PlanSectionInitializer {

    private final PlanSectionRepository planSectionRepository;
    private final SaslService saslService;

    /**
     * 应用启动时初始化套餐数据。
     * 如果数据库中没有套餐数据，则同步前端的 5 个套餐数据。
     */
    @PostConstruct
    public void initializePlanSections() {
        try {
            log.info("=== 开始初始化套餐数据 ===");

            // 检查数据库中是否存在套餐数据
            long count = planSectionRepository.countActive();

            if (count == 0) {
                log.info("数据库中没有套餐数据，开始同步前端数据...");
                saslService.syncPlanSectionsFromFrontend();
                long newCount = planSectionRepository.countActive();
                log.info("✓ 套餐数据同步成功，共同步 {} 个套餐", newCount);
            } else {
                log.info("✓ 数据库已存在 {} 个套餐，跳过同步", count);
            }

            log.info("=== 套餐数据初始化完成 ===");
        } catch (Exception e) {
            log.error("套餐数据初始化失败", e);
            // 不抛出异常，避免影响应用启动
        }
    }
}
