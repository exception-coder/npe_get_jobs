package getjobs.modules.task.quickdelivery.web;

import getjobs.common.enums.RecruitmentPlatformEnum;
import getjobs.common.infrastructure.task.domain.Task;
import getjobs.modules.task.quickdelivery.service.QuickDeliveryScheduler;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * 快速投递任务控制器
 * 提供快速投递任务的HTTP接口
 * 
 * 功能包括：
 * - 提交快速投递任务
 * - 取消正在运行的任务
 * - 查询任务状态
 * - 查看运行中的任务列表
 * 
 * @author getjobs
 */
@Slf4j
@RestController
@RequestMapping("/api/task/quick-delivery")
@RequiredArgsConstructor
public class QuickDeliveryController {

    private final QuickDeliveryScheduler quickDeliveryScheduler;

    /**
     * 提交指定平台的快速投递任务
     * 
     * @param platformCode 平台代码（boss/zhilian/51job/liepin）
     * @return 任务对象
     */
    @PostMapping("/submit/{platformCode}")
    public Task submitQuickDelivery(@PathVariable String platformCode) {
        log.info("接收到快速投递任务请求，平台: {}", platformCode);

        RecruitmentPlatformEnum platform = RecruitmentPlatformEnum.getByCode(platformCode);
        if (platform == null) {
            throw new IllegalArgumentException("不支持的平台代码: " + platformCode);
        }

        return quickDeliveryScheduler.submitQuickDeliveryTask(platform);
    }

    /**
     * 提交Boss直聘快速投递任务
     * 
     * @return 任务对象
     */
    @PostMapping("/submit/boss")
    public Task submitBossQuickDelivery() {
        log.info("接收到Boss直聘快速投递任务请求");
        return quickDeliveryScheduler.submitBossQuickDelivery();
    }

    /**
     * 提交智联招聘快速投递任务
     * 
     * @return 任务对象
     */
    @PostMapping("/submit/zhilian")
    public Task submitZhilianQuickDelivery() {
        log.info("接收到智联招聘快速投递任务请求");
        return quickDeliveryScheduler.submitZhilianQuickDelivery();
    }

    /**
     * 提交51job快速投递任务
     * 
     * @return 任务对象
     */
    @PostMapping("/submit/51job")
    public Task submitJob51QuickDelivery() {
        log.info("接收到51job快速投递任务请求");
        return quickDeliveryScheduler.submitJob51QuickDelivery();
    }

    /**
     * 提交猎聘快速投递任务
     * 
     * @return 任务对象
     */
    @PostMapping("/submit/liepin")
    public Task submitLiepinQuickDelivery() {
        log.info("接收到猎聘快速投递任务请求");
        return quickDeliveryScheduler.submitLiepinQuickDelivery();
    }

    /**
     * 提交所有平台的快速投递任务
     */
    @PostMapping("/submit/all")
    public void submitAllPlatformsQuickDelivery() {
        log.info("接收到所有平台快速投递任务请求");
        quickDeliveryScheduler.submitAllPlatformsQuickDelivery();
    }

    // ==================== 任务管理接口 ====================

    /**
     * 取消任务
     * 
     * @param executionId 任务执行ID
     * @return 取消结果
     */
    @DeleteMapping("/cancel/{executionId}")
    public ResponseEntity<Map<String, Object>> cancelTask(@PathVariable String executionId) {
        log.info("接收到取消任务请求，任务ID: {}", executionId);

        boolean cancelled = quickDeliveryScheduler.cancelTask(executionId);

        Map<String, Object> response = new HashMap<>();
        response.put("executionId", executionId);
        response.put("cancelled", cancelled);
        response.put("message", cancelled
                ? "任务已成功取消"
                : "任务未找到或已完成，无法取消");

        return ResponseEntity.ok(response);
    }

    /**
     * 查询任务状态
     * 
     * @param executionId 任务执行ID
     * @return 任务信息
     */
    @GetMapping("/status/{executionId}")
    public ResponseEntity<Map<String, Object>> getTaskStatus(@PathVariable String executionId) {
        log.info("接收到查询任务状态请求，任务ID: {}", executionId);

        Optional<Task> taskOpt = quickDeliveryScheduler.getTask(executionId);

        if (taskOpt.isEmpty()) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("error", "任务未找到");
            errorResponse.put("executionId", executionId);
            return ResponseEntity.status(404).body(errorResponse);
        }

        Task task = taskOpt.get();
        Map<String, Object> response = new HashMap<>();
        response.put("executionId", task.getExecutionId());
        response.put("taskName", task.getConfig().getTaskName());
        response.put("taskType", task.getConfig().getTaskType());
        response.put("status", task.getStatus().name());
        response.put("description", task.getConfig().getDescription());
        response.put("isRunning", task.isRunning());
        response.put("isCompleted", task.isCompleted());

        if (task.getStartTime() != null) {
            response.put("startTime", task.getStartTime().toString());
        }
        if (task.getEndTime() != null) {
            response.put("endTime", task.getEndTime().toString());
        }
        if (task.getException() != null) {
            response.put("errorMessage", task.getException().getMessage());
        }

        return ResponseEntity.ok(response);
    }

    /**
     * 获取所有运行中的任务
     * 
     * @return 运行中的任务列表
     */
    @GetMapping("/running")
    public ResponseEntity<Map<String, Object>> getRunningTasks() {
        log.info("接收到查询运行中任务请求");

        List<Task> runningTasks = quickDeliveryScheduler.getRunningTasks();
        int taskCount = runningTasks.size();

        List<Map<String, Object>> taskList = runningTasks.stream()
                .map(task -> {
                    Map<String, Object> taskInfo = new HashMap<>();
                    taskInfo.put("executionId", task.getExecutionId());
                    taskInfo.put("taskName", task.getConfig().getTaskName());
                    taskInfo.put("taskType", task.getConfig().getTaskType());
                    taskInfo.put("status", task.getStatus().name());
                    taskInfo.put("description", task.getConfig().getDescription());
                    if (task.getStartTime() != null) {
                        taskInfo.put("startTime", task.getStartTime().toString());
                    }
                    return taskInfo;
                })
                .toList();

        Map<String, Object> response = new HashMap<>();
        response.put("count", taskCount);
        response.put("tasks", taskList);

        return ResponseEntity.ok(response);
    }

    /**
     * 获取运行中的任务数量
     * 
     * @return 任务数量
     */
    @GetMapping("/running/count")
    public ResponseEntity<Map<String, Object>> getRunningTaskCount() {
        log.info("接收到查询运行中任务数量请求");

        int count = quickDeliveryScheduler.getRunningTaskCount();

        Map<String, Object> response = new HashMap<>();
        response.put("count", count);

        return ResponseEntity.ok(response);
    }
}
