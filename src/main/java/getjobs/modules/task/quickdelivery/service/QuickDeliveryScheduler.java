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

import java.util.List;
import java.util.Optional;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;

/**
 * 快速投递任务调度服务
 * 负责管理和调度所有平台的快速投递任务
 * 
 * 功能特性：
 * 1. 支持按平台提交快速投递任务
 * 2. 每个平台的投递任务全局唯一，避免并发执行
 * 3. 提供任务执行状态跟踪
 * 4. 统一的任务管理接口
 * 5. 支持任务取消和查询
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
     * 提交指定平台的快速投递任务（异步执行）
     * 
     * 注意：由于任务涉及浏览器交互和AI接口调用，耗时较久，
     * 因此采用异步方式执行，接口会立即返回任务提交状态，
     * 任务将在后台异步执行。
     * 
     * @param platform 招聘平台枚举
     * @return 任务对象，初始状态为PENDING，包含任务ID用于后续查询
     * @throws IllegalArgumentException 如果平台参数为空或不支持
     */
    public Task submitQuickDeliveryTask(RecruitmentPlatformEnum platform) {
        if (platform == null) {
            throw new IllegalArgumentException("平台参数不能为空");
        }

        log.info("准备异步提交{}的快速投递任务", platform.getPlatformName());

        // 异步提交任务，立即返回Future对象
        Future<Task> future = switch (platform) {
            case BOSS_ZHIPIN -> taskSchedulerService.submitTaskAsync(bossQuickDeliveryTask);
            case ZHILIAN_ZHAOPIN -> taskSchedulerService.submitTaskAsync(zhilianQuickDeliveryTask);
            case JOB_51 -> taskSchedulerService.submitTaskAsync(job51QuickDeliveryTask);
            case LIEPIN -> taskSchedulerService.submitTaskAsync(liepinQuickDeliveryTask);
        };

        try {
            // 快速获取任务对象（不等待任务完成）
            // 设置很短的超时时间（100ms），仅用于获取任务ID和初始状态
            Task task = future.get(100, TimeUnit.MILLISECONDS);
            log.info("{}快速投递任务已提交，任务ID: {}，状态: {}",
                    platform.getPlatformName(), task.getExecutionId(), task.getStatus().getDesc());
            return task;
        } catch (Exception e) {
            // 如果获取失败（理论上不应该发生），创建一个临时任务对象返回
            log.error("获取{}快速投递任务信息失败，将返回临时任务对象", platform.getPlatformName(), e);
            return Task.builder()
                    .executionId("UNKNOWN")
                    .status(TaskStatusEnum.PENDING)
                    .build();
        }
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
     * 提交所有平台的快速投递任务（异步执行）
     * 
     * 注意：
     * 1. 由于每个平台的任务都是全局唯一的，这些任务会异步并发执行
     * 2. 此方法会快速返回，不会等待所有任务执行完成
     * 3. 可以通过查询接口获取各个任务的执行状态
     */
    public void submitAllPlatformsQuickDelivery() {
        log.info("开始异步提交所有平台的快速投递任务");

        for (RecruitmentPlatformEnum platform : RecruitmentPlatformEnum.values()) {
            try {
                Task task = submitQuickDeliveryTask(platform);
                log.debug("平台 {} 的任务已提交，任务ID: {}", platform.getPlatformName(), task.getExecutionId());
            } catch (Exception e) {
                log.error("提交{}快速投递任务失败", platform.getPlatformName(), e);
            }
        }

        log.info("所有平台的快速投递任务已提交完成（后台异步执行中）");
    }

    // ==================== 任务管理方法 ====================

    /**
     * 取消任务
     * 
     * @param executionId 任务执行ID
     * @return true表示成功取消，false表示任务未找到或已完成
     */
    public boolean cancelTask(String executionId) {
        log.info("请求取消快速投递任务: {}", executionId);
        boolean cancelled = taskSchedulerService.cancelTask(executionId);

        if (cancelled) {
            log.info("快速投递任务已取消: {}", executionId);
        } else {
            log.warn("快速投递任务取消失败（任务未找到或已完成）: {}", executionId);
        }

        return cancelled;
    }

    /**
     * 根据执行ID查询任务
     * 
     * @param executionId 任务执行ID
     * @return 任务实例（如果存在）
     */
    public Optional<Task> getTask(String executionId) {
        return taskSchedulerService.getTask(executionId);
    }

    /**
     * 获取所有正在运行的快速投递任务
     * 
     * @return 正在运行的任务列表
     */
    public List<Task> getRunningTasks() {
        return taskSchedulerService.getRunningTasks();
    }

    /**
     * 获取正在运行的任务数量
     * 
     * @return 任务数量
     */
    public int getRunningTaskCount() {
        return taskSchedulerService.getRunningTaskCount();
    }
}
