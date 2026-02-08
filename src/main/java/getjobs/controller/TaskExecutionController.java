package getjobs.controller;

import getjobs.common.enums.RecruitmentPlatformEnum;
import getjobs.service.TaskExecutionManager;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

/**
 * 任务执行状态控制器
 * 提供任务状态查询和任务终止接口
 * 
 * @author getjobs
 */
@Slf4j
@RestController
@RequestMapping("/api/task-execution")
@RequiredArgsConstructor
public class TaskExecutionController {

    private final TaskExecutionManager taskExecutionManager;

    /**
     * 获取指定平台的任务执行状态
     * 
     * @param platform 平台代码（如：boss、zhilian、job51、liepin）
     * @return 任务执行状态
     */
    @GetMapping("/status/{platform}")
    public ResponseEntity<Map<String, Object>> getTaskStatus(@PathVariable String platform) {
        try {
            RecruitmentPlatformEnum platformEnum = parsePlatform(platform);
            if (platformEnum == null) {
                return ResponseEntity.badRequest().body(Map.of(
                        "success", false,
                        "message", "不支持的平台: " + platform));
            }

            TaskExecutionManager.TaskExecutionStatus status = taskExecutionManager.getTaskStatus(platformEnum);
            if (status == null) {
                return ResponseEntity.ok(Map.of(
                        "success", true,
                        "message", "该平台暂无执行中的任务",
                        "data", Map.of(
                                "platform", platformEnum.getPlatformName(),
                                "hasTask", false)));
            }

            Map<String, Object> data = new HashMap<>();
            data.put("platform", platformEnum.getPlatformName());
            data.put("platformCode", platformEnum.getPlatformCode());
            data.put("hasTask", true);
            data.put("currentStep", status.getCurrentStep().name());
            data.put("stepDescription", status.getStepDescription());
            data.put("stepOrder", status.getCurrentStep().getOrder());
            data.put("isTerminated", status.isTerminated());
            data.put("terminateRequested", status.isTerminateRequested());
            data.put("startTime", status.getStartTime());
            data.put("lastUpdateTime", status.getLastUpdateTime());
            data.put("metadata", status.getMetadata());

            return ResponseEntity.ok(Map.of(
                    "success", true,
                    "message", "查询成功",
                    "data", data));

        } catch (Exception e) {
            log.error("查询任务状态失败", e);
            return ResponseEntity.internalServerError().body(Map.of(
                    "success", false,
                    "message", "查询失败: " + e.getMessage()));
        }
    }

    /**
     * 获取所有平台的任务执行状态
     * 
     * @return 所有平台的任务执行状态
     */
    @GetMapping("/status/all")
    public ResponseEntity<Map<String, Object>> getAllTaskStatus() {
        try {
            Map<RecruitmentPlatformEnum, TaskExecutionManager.TaskExecutionStatus> allStatus = taskExecutionManager
                    .getAllTaskStatus();

            Map<String, Object> result = new HashMap<>();
            for (Map.Entry<RecruitmentPlatformEnum, TaskExecutionManager.TaskExecutionStatus> entry : allStatus
                    .entrySet()) {
                RecruitmentPlatformEnum platform = entry.getKey();
                TaskExecutionManager.TaskExecutionStatus status = entry.getValue();

                Map<String, Object> statusData = new HashMap<>();
                statusData.put("platform", platform.getPlatformName());
                statusData.put("platformCode", platform.getPlatformCode());
                statusData.put("currentStep", status.getCurrentStep().name());
                statusData.put("stepDescription", status.getStepDescription());
                statusData.put("stepOrder", status.getCurrentStep().getOrder());
                statusData.put("isTerminated", status.isTerminated());
                statusData.put("terminateRequested", status.isTerminateRequested());
                statusData.put("startTime", status.getStartTime());
                statusData.put("lastUpdateTime", status.getLastUpdateTime());
                statusData.put("metadata", status.getMetadata());

                result.put(platform.getPlatformCode(), statusData);
            }

            return ResponseEntity.ok(Map.of(
                    "success", true,
                    "message", "查询成功",
                    "data", result));

        } catch (Exception e) {
            log.error("查询所有任务状态失败", e);
            return ResponseEntity.internalServerError().body(Map.of(
                    "success", false,
                    "message", "查询失败: " + e.getMessage()));
        }
    }

    /**
     * 终止指定平台的任务
     * 
     * @param platform 平台代码
     * @return 操作结果
     */
    @PostMapping("/terminate/{platform}")
    public ResponseEntity<Map<String, Object>> terminateTask(@PathVariable String platform) {
        try {
            RecruitmentPlatformEnum platformEnum = parsePlatform(platform);
            if (platformEnum == null) {
                return ResponseEntity.badRequest().body(Map.of(
                        "success", false,
                        "message", "不支持的平台: " + platform));
            }

            TaskExecutionManager.TaskExecutionStatus status = taskExecutionManager.getTaskStatus(platformEnum);
            if (status == null) {
                return ResponseEntity.ok(Map.of(
                        "success", false,
                        "message", "该平台暂无执行中的任务"));
            }

            if (status.isTerminated()) {
                return ResponseEntity.ok(Map.of(
                        "success", false,
                        "message", "任务已结束，无需终止"));
            }

            taskExecutionManager.requestTerminate(platformEnum);
            log.info("收到终止{}任务的请求", platformEnum.getPlatformName());

            return ResponseEntity.ok(Map.of(
                    "success", true,
                    "message", "终止请求已发送，任务将在当前步骤完成后停止"));

        } catch (Exception e) {
            log.error("终止任务失败", e);
            return ResponseEntity.internalServerError().body(Map.of(
                    "success", false,
                    "message", "终止失败: " + e.getMessage()));
        }
    }

    /**
     * 清理指定平台的任务状态
     * 
     * @param platform 平台代码
     * @return 操作结果
     */
    @DeleteMapping("/status/{platform}")
    public ResponseEntity<Map<String, Object>> clearTaskStatus(@PathVariable String platform) {
        try {
            RecruitmentPlatformEnum platformEnum = parsePlatform(platform);
            if (platformEnum == null) {
                return ResponseEntity.badRequest().body(Map.of(
                        "success", false,
                        "message", "不支持的平台: " + platform));
            }

            taskExecutionManager.clearTaskStatus(platformEnum);
            log.info("已清理{}任务状态", platformEnum.getPlatformName());

            return ResponseEntity.ok(Map.of(
                    "success", true,
                    "message", "任务状态已清理"));

        } catch (Exception e) {
            log.error("清理任务状态失败", e);
            return ResponseEntity.internalServerError().body(Map.of(
                    "success", false,
                    "message", "清理失败: " + e.getMessage()));
        }
    }

    /**
     * 清理所有平台的任务状态
     * 
     * @return 操作结果
     */
    @DeleteMapping("/status/all")
    public ResponseEntity<Map<String, Object>> clearAllTaskStatus() {
        try {
            taskExecutionManager.clearAllTaskStatus();
            log.info("已清理所有任务状态");

            return ResponseEntity.ok(Map.of(
                    "success", true,
                    "message", "所有任务状态已清理"));

        } catch (Exception e) {
            log.error("清理所有任务状态失败", e);
            return ResponseEntity.internalServerError().body(Map.of(
                    "success", false,
                    "message", "清理失败: " + e.getMessage()));
        }
    }

    /**
     * 解析平台代码
     * 
     * @param platform 平台代码字符串
     * @return 平台枚举
     */
    private RecruitmentPlatformEnum parsePlatform(String platform) {
        if (platform == null || platform.trim().isEmpty()) {
            return null;
        }

        String platformLower = platform.toLowerCase().trim();
        return switch (platformLower) {
            case "boss", "boss_zhipin" -> RecruitmentPlatformEnum.BOSS_ZHIPIN;
            case "zhilian", "zhilian_zhaopin" -> RecruitmentPlatformEnum.ZHILIAN_ZHAOPIN;
            case "job51", "job_51" -> RecruitmentPlatformEnum.JOB_51;
            case "liepin" -> RecruitmentPlatformEnum.LIEPIN;
            default -> null;
        };
    }
}
