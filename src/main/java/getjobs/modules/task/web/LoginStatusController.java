package getjobs.modules.task.web;

import getjobs.common.enums.RecruitmentPlatformEnum;
import getjobs.modules.task.dto.LoginStatusDTO;
import getjobs.modules.task.service.LoginStatusCheckScheduler;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 登录状态查询控制器
 * 提供登录状态查询和手动触发检查的接口
 *
 * @author getjobs
 */
@Slf4j
@RestController
@RequestMapping("/api/login-status")
@RequiredArgsConstructor
public class LoginStatusController {

    private final LoginStatusCheckScheduler loginStatusCheckScheduler;

    /**
     * 获取所有平台的登录状态
     * 
     * @return 所有平台的登录状态列表
     */
    @GetMapping("/all")
    public ResponseEntity<Map<String, Object>> getAllLoginStatus() {
        try {
            List<LoginStatusDTO> statusList = loginStatusCheckScheduler.getAllLoginStatus();
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "获取登录状态成功");
            response.put("data", statusList);
            response.put("count", statusList.size());
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            log.error("获取所有平台登录状态失败", e);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "获取登录状态失败: " + e.getMessage());
            
            return ResponseEntity.internalServerError().body(response);
        }
    }

    /**
     * 获取指定平台的登录状态
     * 
     * @param platformName 平台名称（LIEPIN, JOB_51, ZHILIAN, BOSS_ZHIPIN）
     * @return 指定平台的登录状态
     */
    @GetMapping("/{platformName}")
    public ResponseEntity<Map<String, Object>> getLoginStatus(@PathVariable String platformName) {
        try {
            RecruitmentPlatformEnum platform = RecruitmentPlatformEnum.valueOf(platformName.toUpperCase());
            LoginStatusDTO status = loginStatusCheckScheduler.getLoginStatus(platform);
            
            Map<String, Object> response = new HashMap<>();
            if (status != null) {
                response.put("success", true);
                response.put("message", "获取登录状态成功");
                response.put("data", status);
            } else {
                response.put("success", false);
                response.put("message", "暂无该平台的登录状态信息");
                response.put("data", null);
            }
            
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            log.error("无效的平台名称: {}", platformName);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "无效的平台名称: " + platformName);
            
            return ResponseEntity.badRequest().body(response);
        } catch (Exception e) {
            log.error("获取平台登录状态失败", e);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "获取登录状态失败: " + e.getMessage());
            
            return ResponseEntity.internalServerError().body(response);
        }
    }

    /**
     * 手动触发登录状态检查
     * 
     * @return 触发结果
     */
    @PostMapping("/check")
    public ResponseEntity<Map<String, Object>> triggerLoginCheck() {
        try {
            log.info("收到手动触发登录状态检查请求");
            loginStatusCheckScheduler.checkNow();
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "登录状态检查已触发");
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            log.error("触发登录状态检查失败", e);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "触发检查失败: " + e.getMessage());
            
            return ResponseEntity.internalServerError().body(response);
        }
    }

    /**
     * 获取登录状态摘要
     * 返回各平台登录状态的统计信息
     * 
     * @return 登录状态摘要
     */
    @GetMapping("/summary")
    public ResponseEntity<Map<String, Object>> getLoginStatusSummary() {
        try {
            List<LoginStatusDTO> statusList = loginStatusCheckScheduler.getAllLoginStatus();
            
            long loggedInCount = statusList.stream()
                .filter(LoginStatusDTO::getIsLoggedIn)
                .count();
            long notLoggedInCount = statusList.size() - loggedInCount;
            
            Map<String, Object> summary = new HashMap<>();
            summary.put("totalPlatforms", statusList.size());
            summary.put("loggedIn", loggedInCount);
            summary.put("notLoggedIn", notLoggedInCount);
            summary.put("details", statusList);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "获取登录状态摘要成功");
            response.put("data", summary);
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            log.error("获取登录状态摘要失败", e);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "获取摘要失败: " + e.getMessage());
            
            return ResponseEntity.internalServerError().body(response);
        }
    }
}

