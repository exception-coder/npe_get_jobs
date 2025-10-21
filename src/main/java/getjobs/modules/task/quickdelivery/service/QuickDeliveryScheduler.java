package getjobs.modules.task.quickdelivery.service;

import getjobs.common.enums.RecruitmentPlatformEnum;
import getjobs.common.infrastructure.task.domain.Task;
import getjobs.common.infrastructure.task.enums.TaskStatusEnum;
import getjobs.common.infrastructure.task.scheduler.TaskSchedulerService;
import getjobs.modules.task.quickdelivery.domain.BossQuickDeliveryTask;
import getjobs.modules.task.quickdelivery.domain.Job51QuickDeliveryTask;
import getjobs.modules.task.quickdelivery.domain.LiepinQuickDeliveryTask;
import getjobs.modules.task.quickdelivery.domain.ZhilianQuickDeliveryTask;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

/**
 * 快速投递任务调度服务
 * 负责管理和调度所有平台的快速投递任务
 * 
 * 功能特性：
 * 1. 支持按平台提交快速投递任务
 * 2. 每个平台的投递任务全局唯一，避免并发执行
 * 3. 提供任务执行状态跟踪
 * 4. 统一的任务管理接口
 * 
 * @author getjobs
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class QuickDeliveryScheduler {

    private final TaskSchedulerService taskSchedulerService;
    private final BossQuickDeliveryTask bossQuickDeliveryTask;
    private final ZhilianQuickDeliveryTask zhilianQuickDeliveryTask;
    private final Job51QuickDeliveryTask job51QuickDeliveryTask;
    private final LiepinQuickDeliveryTask liepinQuickDeliveryTask;

    /**
     * 提交指定平台的快速投递任务
     * 
     * @param platform 招聘平台枚举
     * @return 任务对象，包含任务状态和执行结果
     * @throws IllegalArgumentException 如果平台参数为空或不支持
     */
    public Task submitQuickDeliveryTask(RecruitmentPlatformEnum platform) {
        if (platform == null) {
            throw new IllegalArgumentException("平台参数不能为空");
        }

        log.info("准备提交{}的快速投递任务", platform.getPlatformName());

        Task task = switch (platform) {
            case BOSS_ZHIPIN -> taskSchedulerService.submitTask(bossQuickDeliveryTask);
            case ZHILIAN_ZHAOPIN -> taskSchedulerService.submitTask(zhilianQuickDeliveryTask);
            case JOB_51 -> taskSchedulerService.submitTask(job51QuickDeliveryTask);
            case LIEPIN -> taskSchedulerService.submitTask(liepinQuickDeliveryTask);
        };

        if (task.getStatus() == TaskStatusEnum.SUCCESS) {
            log.info("{}快速投递任务提交成功，任务ID: {}", platform.getPlatformName(), task.getExecutionId());
        } else if (task.getStatus() == TaskStatusEnum.FAILED) {
            log.error("{}快速投递任务执行失败，任务ID: {}", platform.getPlatformName(), task.getExecutionId());
        } else if (task.getStatus() == TaskStatusEnum.CANCELLED) {
            log.warn("{}快速投递任务被取消或跳过（可能有相同任务正在执行），任务ID: {}",
                    platform.getPlatformName(), task.getExecutionId());
        }

        return task;
    }

    /**
     * 提交Boss直聘快速投递任务
     * 
     * @return 任务对象
     */
    public Task submitBossQuickDelivery() {
        return submitQuickDeliveryTask(RecruitmentPlatformEnum.BOSS_ZHIPIN);
    }

    /**
     * 提交智联招聘快速投递任务
     * 
     * @return 任务对象
     */
    public Task submitZhilianQuickDelivery() {
        return submitQuickDeliveryTask(RecruitmentPlatformEnum.ZHILIAN_ZHAOPIN);
    }

    /**
     * 提交51job快速投递任务
     * 
     * @return 任务对象
     */
    public Task submitJob51QuickDelivery() {
        return submitQuickDeliveryTask(RecruitmentPlatformEnum.JOB_51);
    }

    /**
     * 提交猎聘快速投递任务
     * 
     * @return 任务对象
     */
    public Task submitLiepinQuickDelivery() {
        return submitQuickDeliveryTask(RecruitmentPlatformEnum.LIEPIN);
    }

    /**
     * 提交所有平台的快速投递任务
     * 注意：由于每个平台的任务都是全局唯一的，这些任务会按顺序执行
     */
    public void submitAllPlatformsQuickDelivery() {
        log.info("开始提交所有平台的快速投递任务");

        for (RecruitmentPlatformEnum platform : RecruitmentPlatformEnum.values()) {
            try {
                submitQuickDeliveryTask(platform);
            } catch (Exception e) {
                log.error("提交{}快速投递任务失败", platform.getPlatformName(), e);
            }
        }

        log.info("所有平台的快速投递任务提交完成");
    }
}
