package getjobs.modules.task.quickdelivery.domain;

import getjobs.common.enums.RecruitmentPlatformEnum;
import getjobs.common.infrastructure.task.contract.ScheduledTask;
import getjobs.common.infrastructure.task.domain.TaskConfig;
import getjobs.modules.task.quickdelivery.dto.QuickDeliveryResult;
import getjobs.service.JobDeliveryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

/**
 * 猎聘快速投递任务
 * 使用基础设施模块的任务调度框架
 * 全局唯一任务，同一时刻只能执行一个猎聘快速投递任务
 * 
 * @author getjobs
 */
@Slf4j
@Component
@RequiredArgsConstructor
public class LiepinQuickDeliveryTask implements ScheduledTask {

    private final JobDeliveryService jobDeliveryService;

    @Override
    public TaskConfig getTaskConfig() {
        return TaskConfig.builder()
                .taskName("猎聘快速投递任务")
                .taskType("QUICK_DELIVERY_LIEPIN")
                .globalUnique(true) // 全局唯一，同一时刻只能执行一个猎聘投递任务
                .timeout(1800000L) // 30分钟超时
                .description("执行猎聘平台的快速投递任务")
                .build();
    }

    @Override
    public Object execute() throws Exception {
        log.info("开始执行猎聘快速投递任务...");

        // 调用一键投递服务，自动完成：采集 → 过滤 → 投递
        QuickDeliveryResult result = jobDeliveryService.executeQuickDelivery(
                RecruitmentPlatformEnum.LIEPIN);

        log.info("猎聘快速投递任务执行完成");

        return result; // 返回投递结果统计
    }

    @Override
    public void beforeExecute() throws Exception {
        log.debug("准备执行猎聘快速投递任务...");
        // 前置检查由JobDeliveryService内部处理
    }

    @Override
    public void afterExecute(boolean success) {
        if (success) {
            log.info("猎聘快速投递任务执行成功");
        } else {
            log.error("猎聘快速投递任务执行失败，请检查日志");
        }
    }
}
