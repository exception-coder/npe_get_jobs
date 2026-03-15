package getjobs.modules.task.quickdelivery.service;

import getjobs.common.enums.RecruitmentPlatformEnum;
import getjobs.infrastructure.task.domain.Task;
import getjobs.infrastructure.task.enums.TaskStatusEnum;
import getjobs.infrastructure.task.scheduler.TaskSchedulerService;
import getjobs.modules.task.quickdelivery.domain.ParameterizedQuickDeliveryTask;
import getjobs.modules.task.quickdelivery.dto.DeliveryFlowOptions;
import getjobs.service.JobDeliveryService;
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
    private final JobDeliveryService jobDeliveryService;

    /**
     * 提交指定平台的快速投递任务（异步执行）
     *
     * @param platform    招聘平台枚举
     * @param flowOptions 可选，流程控制：collect/filter/deliver 为 false 时跳过对应步骤；null 表示全部执行
     * @return 任务对象，初始状态为PENDING，包含任务ID用于后续查询
     */
    public Task submitQuickDeliveryTask(RecruitmentPlatformEnum platform, DeliveryFlowOptions flowOptions) {
        if (platform == null) {
            throw new IllegalArgumentException("平台参数不能为空");
        }

        log.info("准备异步提交{}的快速投递任务，流程控制: {}", platform.getPlatformName(), flowOptions);

        // 使用带流程参数的任务，便于根据 collect/filter/deliver 跳过对应步骤
        ParameterizedQuickDeliveryTask paramTask =
                new ParameterizedQuickDeliveryTask(jobDeliveryService, platform, flowOptions);
        Future<Task> future = taskSchedulerService.submitTaskAsync(paramTask);

        try {
            // 快速获取任务对象（不等待任务完成）
            // 设置很短的超时时间（100ms），仅用于获取任务ID和初始状态
            Task submittedTask = future.get(100, TimeUnit.MILLISECONDS);
            log.info("{}快速投递任务已提交，任务ID: {}，状态: {}",
                    platform.getPlatformName(), submittedTask.getExecutionId(), submittedTask.getStatus().getDesc());
            return submittedTask;
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
        return submitQuickDeliveryTask(RecruitmentPlatformEnum.BOSS_ZHIPIN, null);
    }

    /**
     * 提交智联招聘快速投递任务
     *
     * @return 任务对象
     */
    public Task submitZhilianQuickDelivery() {
        return submitQuickDeliveryTask(RecruitmentPlatformEnum.ZHILIAN_ZHAOPIN, null);
    }

    /**
     * 提交51job快速投递任务
     *
     * @return 任务对象
     */
    public Task submitJob51QuickDelivery() {
        return submitQuickDeliveryTask(RecruitmentPlatformEnum.JOB_51, null);
    }

    /**
     * 提交猎聘快速投递任务
     *
     * @return 任务对象
     */
    public Task submitLiepinQuickDelivery() {
        return submitQuickDeliveryTask(RecruitmentPlatformEnum.LIEPIN, null);
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
                Task task = submitQuickDeliveryTask(platform, null);
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
