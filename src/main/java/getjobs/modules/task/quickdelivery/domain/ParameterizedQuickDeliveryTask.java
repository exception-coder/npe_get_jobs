package getjobs.modules.task.quickdelivery.domain;

import getjobs.common.enums.RecruitmentPlatformEnum;
import getjobs.infrastructure.task.contract.ScheduledTask;
import getjobs.infrastructure.task.domain.TaskConfig;
import getjobs.modules.task.quickdelivery.dto.DeliveryFlowOptions;
import getjobs.modules.task.quickdelivery.dto.QuickDeliveryResult;
import getjobs.service.JobDeliveryService;
import lombok.extern.slf4j.Slf4j;

/**
 * 带流程控制参数的一键投递任务，根据 collect/filter/deliver 决定是否执行对应步骤
 *
 * @author getjobs
 */
@Slf4j
public class ParameterizedQuickDeliveryTask implements ScheduledTask {

    private final JobDeliveryService jobDeliveryService;
    private final RecruitmentPlatformEnum platform;
    private final DeliveryFlowOptions flowOptions;

    public ParameterizedQuickDeliveryTask(
            JobDeliveryService jobDeliveryService,
            RecruitmentPlatformEnum platform,
            DeliveryFlowOptions flowOptions) {
        this.jobDeliveryService = jobDeliveryService;
        this.platform = platform;
        this.flowOptions = flowOptions;
    }

    @Override
    public TaskConfig getTaskConfig() {
        return taskConfigFor(platform);
    }

    @Override
    public Object execute() throws Exception {
        log.info("开始执行{}快速投递任务，流程控制: collect={}, filter={}, deliver={}",
                platform.getPlatformName(),
                flowOptions == null ? true : flowOptions.isCollect(),
                flowOptions == null ? true : flowOptions.isFilter(),
                flowOptions == null ? true : flowOptions.isDeliver());

        QuickDeliveryResult result = jobDeliveryService.executeQuickDelivery(platform, flowOptions);

        log.info("{}快速投递任务执行完成", platform.getPlatformName());
        return result;
    }

    private static TaskConfig taskConfigFor(RecruitmentPlatformEnum platform) {
        if (platform == null) {
            throw new IllegalArgumentException("平台不能为空");
        }
        return switch (platform) {
            case BOSS_ZHIPIN -> TaskConfig.builder()
                    .taskName("Boss直聘快速投递任务")
                    .taskType("QUICK_DELIVERY_BOSS")
                    .globalUnique(true)
                    .timeout(1800000L)
                    .description("执行Boss直聘平台的快速投递任务")
                    .build();
            case ZHILIAN_ZHAOPIN -> TaskConfig.builder()
                    .taskName("智联招聘快速投递任务")
                    .taskType("QUICK_DELIVERY_ZHILIAN")
                    .globalUnique(true)
                    .timeout(1800000L)
                    .description("执行智联招聘平台的快速投递任务")
                    .build();
            case JOB_51 -> TaskConfig.builder()
                    .taskName("51job快速投递任务")
                    .taskType("QUICK_DELIVERY_51JOB")
                    .globalUnique(true)
                    .timeout(1800000L)
                    .description("执行51job平台的快速投递任务")
                    .build();
            case LIEPIN -> TaskConfig.builder()
                    .taskName("猎聘快速投递任务")
                    .taskType("QUICK_DELIVERY_LIEPIN")
                    .globalUnique(true)
                    .timeout(1800000L)
                    .description("执行猎聘平台的快速投递任务")
                    .build();
        };
    }
}
