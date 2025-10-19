package getjobs.modules.task.service;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.options.Cookie;
import getjobs.common.enums.RecruitmentPlatformEnum;
import getjobs.common.service.PlaywrightService;
import getjobs.modules.boss.BossElementLocators;
import getjobs.modules.job51.service.Job51ElementLocators;
import getjobs.modules.liepin.service.LiepinElementLocators;
import getjobs.modules.task.dto.LoginStatusDTO;
import getjobs.modules.task.dto.TaskUpdatePayload;
import getjobs.modules.task.enums.TaskStage;
import getjobs.modules.task.enums.TaskStatus;
import getjobs.modules.task.event.TaskUpdateEvent;
import getjobs.modules.zhilian.service.ZhiLianElementLocators;
import getjobs.repository.entity.ConfigEntity;
import getjobs.service.ConfigService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import com.github.openjson.JSONArray;
import com.github.openjson.JSONObject;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * 登录状态检查定时任务
 * 定期检查各个招聘平台的登录状态
 *
 * @author getjobs
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class LoginStatusCheckScheduler {

    private final PlaywrightService playwrightService;
    private final ApplicationEventPublisher eventPublisher;
    private final ConfigService configService;

    /**
     * 存储各平台的登录状态
     */
    private final Map<RecruitmentPlatformEnum, LoginStatusDTO> loginStatusMap = new ConcurrentHashMap<>();

    /**
     * 定时检查登录状态
     * 每5分钟执行一次
     */
    @Scheduled(fixedRate = 15000) // 15秒
    public void checkLoginStatus() {
        log.info("========== 开始定时检查各平台登录状态 ==========");

        try {
            // 预先检查所有平台的登录状态，确定哪些平台需要检查
            List<RecruitmentPlatformEnum> platformsNeedCheck = preCheckLoginStatus();

            // 只为需要检查的平台发布检查开始事件
            publishCheckStartEvent(platformsNeedCheck);

            // 只检查需要检查的平台
            if (platformsNeedCheck.contains(RecruitmentPlatformEnum.LIEPIN)) {
                checkLiepinLoginStatus();
            }

            if (platformsNeedCheck.contains(RecruitmentPlatformEnum.JOB_51)) {
                checkJob51LoginStatus();
            }

            if (platformsNeedCheck.contains(RecruitmentPlatformEnum.ZHILIAN_ZHAOPIN)) {
                checkZhilianLoginStatus();
            }

            if (platformsNeedCheck.contains(RecruitmentPlatformEnum.BOSS_ZHIPIN)) {
                checkBossLoginStatus();
            }

            // 打印登录状态汇总
            printLoginStatusSummary();

            // 发布检查完成事件
            publishCheckCompleteEvent();

        } catch (Exception e) {
            log.error("定时检查登录状态时发生异常", e);
        }

        log.info("========== 登录状态检查完成 ==========");
    }

    /**
     * 预先检查所有平台的登录状态
     * 返回需要进行检查的平台列表
     * 
     * @return 需要检查的平台列表
     */
    private List<RecruitmentPlatformEnum> preCheckLoginStatus() {
        List<RecruitmentPlatformEnum> platformsNeedCheck = new ArrayList<>();

        // 检查每个平台的当前登录状态
        for (RecruitmentPlatformEnum platform : RecruitmentPlatformEnum.values()) {
            LoginStatusDTO currentStatus = loginStatusMap.get(platform);

            // 如果没有登录状态信息，或者当前状态为未登录，则需要检查
            if (currentStatus == null || !currentStatus.getIsLoggedIn()) {
                platformsNeedCheck.add(platform);
                log.debug("平台 {} 需要检查登录状态", platform.getPlatformName());
            } else {
                log.debug("平台 {} 已登录，跳过检查", platform.getPlatformName());
            }
        }

        return platformsNeedCheck;
    }

    /**
     * 发布检查开始事件
     * 只为需要检查的平台发布事件
     * 
     * @param platformsNeedCheck 需要检查的平台列表
     */
    private void publishCheckStartEvent(List<RecruitmentPlatformEnum> platformsNeedCheck) {
        try {
            if (platformsNeedCheck.isEmpty()) {
                log.debug("所有平台均已登录，无需发布检查开始事件");
                return;
            }

            // 只为需要检查的平台发布检查开始事件
            for (RecruitmentPlatformEnum platform : platformsNeedCheck) {
                TaskUpdatePayload payload = TaskUpdatePayload.builder()
                        .platform(platform)
                        .stage(TaskStage.LOGIN)
                        .status(TaskStatus.STARTED)
                        .count(0)
                        .message("开始检查登录状态")
                        .build();

                eventPublisher.publishEvent(new TaskUpdateEvent(this, payload));
            }
            log.debug("已为 {} 个平台发布登录状态检查开始事件", platformsNeedCheck.size());
        } catch (Exception e) {
            log.error("发布检查开始事件失败", e);
        }
    }

    /**
     * 发布检查完成事件
     */
    private void publishCheckCompleteEvent() {
        try {
            long loggedInCount = loginStatusMap.values().stream()
                    .filter(LoginStatusDTO::getIsLoggedIn)
                    .count();

            String message = String.format("登录状态检查完成，%d/%d 个平台已登录",
                    loggedInCount, loginStatusMap.size());

            log.info(message);
        } catch (Exception e) {
            log.error("发布检查完成事件失败", e);
        }
    }

    /**
     * 检查猎聘登录状态
     */
    private void checkLiepinLoginStatus() {
        try {
            // 如果当前已经是登录状态，则跳过检查
            LoginStatusDTO currentStatus = loginStatusMap.get(RecruitmentPlatformEnum.LIEPIN);
            if (currentStatus != null && currentStatus.getIsLoggedIn()) {
                log.debug("猎聘当前已登录，跳过检查");
                return;
            }

            Page page = playwrightService.getPage(RecruitmentPlatformEnum.LIEPIN);
            if (page == null) {
                log.warn("猎聘页面未初始化，无法检查登录状态");
                updateLoginStatus(RecruitmentPlatformEnum.LIEPIN, false, "页面未初始化");
                return;
            }

            boolean isLoggedIn = LiepinElementLocators.isUserLoggedIn(page);

            // 如果登录成功，打印当前域的cookie并保存到配置
            if (isLoggedIn) {
                printPageCookies(page, "猎聘");
                savePlatformCookieToConfig(RecruitmentPlatformEnum.LIEPIN, page);
            }

            updateLoginStatus(RecruitmentPlatformEnum.LIEPIN, isLoggedIn,
                    isLoggedIn ? "已登录" : "未登录");

            log.info("猎聘登录状态: {}", isLoggedIn ? "已登录" : "未登录");

        } catch (Exception e) {
            log.error("检查猎聘登录状态失败", e);
            updateLoginStatus(RecruitmentPlatformEnum.LIEPIN, false, "检查失败: " + e.getMessage());
        }
    }

    /**
     * 检查51Job登录状态
     */
    private void checkJob51LoginStatus() {
        try {
            // 如果当前已经是登录状态，则跳过检查
            LoginStatusDTO currentStatus = loginStatusMap.get(RecruitmentPlatformEnum.JOB_51);
            if (currentStatus != null && currentStatus.getIsLoggedIn()) {
                log.debug("51Job当前已登录，跳过检查");
                return;
            }

            Page page = playwrightService.getPage(RecruitmentPlatformEnum.JOB_51);
            if (page == null) {
                log.warn("51Job页面未初始化，无法检查登录状态");
                updateLoginStatus(RecruitmentPlatformEnum.JOB_51, false, "页面未初始化");
                return;
            }

            boolean isLoggedIn = Job51ElementLocators.isUserLoggedIn(page);

            // 如果登录成功，打印当前域的cookie并保存到配置
            if (isLoggedIn) {
                printPageCookies(page, "51Job");
                savePlatformCookieToConfig(RecruitmentPlatformEnum.JOB_51, page);
            }

            updateLoginStatus(RecruitmentPlatformEnum.JOB_51, isLoggedIn,
                    isLoggedIn ? "已登录" : "未登录");

            log.info("51Job登录状态: {}", isLoggedIn ? "已登录" : "未登录");

        } catch (Exception e) {
            log.error("检查51Job登录状态失败", e);
            updateLoginStatus(RecruitmentPlatformEnum.JOB_51, false, "检查失败: " + e.getMessage());
        }
    }

    /**
     * 检查智联招聘登录状态
     */
    private void checkZhilianLoginStatus() {
        try {
            // 如果当前已经是登录状态，则跳过检查
            LoginStatusDTO currentStatus = loginStatusMap.get(RecruitmentPlatformEnum.ZHILIAN_ZHAOPIN);
            if (currentStatus != null && currentStatus.getIsLoggedIn()) {
                log.debug("智联招聘当前已登录，跳过检查");
                return;
            }

            Page page = playwrightService.getPage(RecruitmentPlatformEnum.ZHILIAN_ZHAOPIN);
            if (page == null) {
                log.warn("智联招聘页面未初始化，无法检查登录状态");
                updateLoginStatus(RecruitmentPlatformEnum.ZHILIAN_ZHAOPIN, false, "页面未初始化");
                return;
            }

            boolean isLoggedIn = ZhiLianElementLocators.isUserLoggedIn(page);

            // 如果登录成功，打印当前域的cookie并保存到配置
            if (isLoggedIn) {
                printPageCookies(page, "智联招聘");
                savePlatformCookieToConfig(RecruitmentPlatformEnum.ZHILIAN_ZHAOPIN, page);
            }

            updateLoginStatus(RecruitmentPlatformEnum.ZHILIAN_ZHAOPIN, isLoggedIn,
                    isLoggedIn ? "已登录" : "未登录");

            log.info("智联招聘登录状态: {}", isLoggedIn ? "已登录" : "未登录");

        } catch (Exception e) {
            log.error("检查智联招聘登录状态失败", e);
            updateLoginStatus(RecruitmentPlatformEnum.ZHILIAN_ZHAOPIN, false, "检查失败: " + e.getMessage());
        }
    }

    /**
     * 检查Boss直聘登录状态
     */
    private void checkBossLoginStatus() {
        try {
            // 如果当前已经是登录状态，则跳过检查
            LoginStatusDTO currentStatus = loginStatusMap.get(RecruitmentPlatformEnum.BOSS_ZHIPIN);
            if (currentStatus != null && currentStatus.getIsLoggedIn()) {
                log.debug("Boss直聘当前已登录，跳过检查");
                return;
            }

            Page page = playwrightService.getPage(RecruitmentPlatformEnum.BOSS_ZHIPIN);
            if (page == null) {
                log.warn("Boss直聘页面未初始化，无法检查登录状态");
                updateLoginStatus(RecruitmentPlatformEnum.BOSS_ZHIPIN, false, "页面未初始化");
                return;
            }

            boolean isLoggedIn = BossElementLocators.isUserLoggedIn(page);

            // 如果登录成功，打印当前域的cookie并保存到配置
            if (isLoggedIn) {
                printPageCookies(page, "Boss直聘");
                savePlatformCookieToConfig(RecruitmentPlatformEnum.BOSS_ZHIPIN, page);
            }

            updateLoginStatus(RecruitmentPlatformEnum.BOSS_ZHIPIN, isLoggedIn,
                    isLoggedIn ? "已登录" : "未登录");

            log.info("Boss直聘登录状态: {}", isLoggedIn ? "已登录" : "未登录");

        } catch (Exception e) {
            log.error("检查Boss直聘登录状态失败", e);
            updateLoginStatus(RecruitmentPlatformEnum.BOSS_ZHIPIN, false, "检查失败: " + e.getMessage());
        }
    }

    /**
     * 更新登录状态
     */
    private void updateLoginStatus(RecruitmentPlatformEnum platform, boolean isLoggedIn, String remark) {
        LoginStatusDTO statusDTO = LoginStatusDTO.builder()
                .platform(platform)
                .isLoggedIn(isLoggedIn)
                .checkTime(LocalDateTime.now())
                .remark(remark)
                .lastLoginTime(isLoggedIn ? LocalDateTime.now() : null)
                .build();

        loginStatusMap.put(platform, statusDTO);

        // 发布登录状态更新事件，推送到TaskStatusListener
        publishLoginStatusUpdate(platform, isLoggedIn, remark);
    }

    /**
     * 发布登录状态更新事件
     * 
     * @param platform   平台枚举
     * @param isLoggedIn 是否已登录
     * @param remark     备注信息
     */
    private void publishLoginStatusUpdate(RecruitmentPlatformEnum platform, boolean isLoggedIn, String remark) {
        try {
            TaskUpdatePayload payload = TaskUpdatePayload.builder()
                    .platform(platform)
                    .stage(TaskStage.LOGIN)
                    .status(isLoggedIn ? TaskStatus.SUCCESS : TaskStatus.FAILURE)
                    .count(0)
                    .message(String.format("登录状态检查: %s", remark))
                    .build();

            eventPublisher.publishEvent(new TaskUpdateEvent(this, payload));
            log.debug("已发布平台 {} 的登录状态更新事件: {}", platform.getPlatformName(), remark);
        } catch (Exception e) {
            log.error("发布平台 {} 的登录状态更新事件失败", platform.getPlatformName(), e);
        }
    }

    /**
     * 打印登录状态汇总
     */
    private void printLoginStatusSummary() {
        log.info("---------- 登录状态汇总 ----------");
        loginStatusMap.forEach((platform, status) -> {
            log.info("平台: {} | 状态: {} | 备注: {} | 检查时间: {}",
                    platform.getPlatformName(),
                    status.getIsLoggedIn() ? "✓ 已登录" : "✗ 未登录",
                    status.getRemark(),
                    status.getCheckTime());
        });
        log.info("----------------------------------");
    }

    /**
     * 获取所有平台的登录状态
     * 
     * @return 登录状态列表
     */
    public List<LoginStatusDTO> getAllLoginStatus() {
        return new ArrayList<>(loginStatusMap.values());
    }

    /**
     * 获取指定平台的登录状态
     * 
     * @param platform 平台枚举
     * @return 登录状态DTO
     */
    public LoginStatusDTO getLoginStatus(RecruitmentPlatformEnum platform) {
        return loginStatusMap.get(platform);
    }

    /**
     * 立即执行登录状态检查（手动触发）
     */
    public void checkNow() {
        log.info("手动触发登录状态检查");
        checkLoginStatus();
    }

    /**
     * 打印页面的Cookie信息
     * 
     * @param page         页面对象
     * @param platformName 平台名称
     */
    private void printPageCookies(Page page, String platformName) {
        try {
            // 获取当前页面URL的所有cookie
            var cookies = page.context().cookies(page.url());

            log.info("========== {} 登录成功，当前域Cookie信息 ==========", platformName);
            log.info("当前URL: {}", page.url());
            log.info("Cookie数量: {}", cookies.size());

            for (int i = 0; i < cookies.size(); i++) {
                var cookie = cookies.get(i);
                log.info(
                        "Cookie[{}] - name: {}, value: {}, domain: {}, path: {}, expires: {}, httpOnly: {}, secure: {}",
                        i + 1,
                        cookie.name,
                        cookie.value,
                        cookie.domain,
                        cookie.path,
                        cookie.expires,
                        cookie.httpOnly,
                        cookie.secure);
            }

            log.info("=".repeat(50 + platformName.length()));
        } catch (Exception e) {
            log.error("打印 {} 的Cookie信息失败", platformName, e);
        }
    }

    /**
     * 保存平台Cookie到配置实体
     * 
     * @param platform 平台枚举
     * @param page     页面对象
     */
    private void savePlatformCookieToConfig(RecruitmentPlatformEnum platform, Page page) {
        try {
            ConfigEntity config = configService.loadByPlatformType(platform.getPlatformCode());
            if (config == null) {
                config = new ConfigEntity();
            }

            // 获取当前浏览器的Cookie并转换为JSON字符串
            String cookieJson = getCookiesAsJson(page);
            config.setCookieData(cookieJson);
            config.setPlatformType(platform.getPlatformCode());

            configService.save(config);

            // 打印完整的Cookie信息到日志
            printSavedCookieDetails(platform, cookieJson);

            log.info("平台 {} 的Cookie已保存到配置实体", platform.getPlatformName());
        } catch (Exception e) {
            log.error("保存平台 {} 的Cookie到配置失败", platform.getPlatformName(), e);
        }
    }

    /**
     * 获取页面Cookie并转换为JSON字符串
     * 
     * @param page 页面对象
     * @return Cookie的JSON字符串
     */
    private String getCookiesAsJson(Page page) {
        try {
            List<Cookie> cookies = page.context().cookies();
            JSONArray jsonArray = new JSONArray();

            for (Cookie cookie : cookies) {
                JSONObject jsonObject = new JSONObject();
                jsonObject.put("name", cookie.name);
                jsonObject.put("value", cookie.value);
                jsonObject.put("domain", cookie.domain);
                jsonObject.put("path", cookie.path);
                if (cookie.expires != null) {
                    jsonObject.put("expires", cookie.expires);
                }
                jsonObject.put("secure", cookie.secure);
                jsonObject.put("httpOnly", cookie.httpOnly);
                jsonArray.put(jsonObject);
            }

            return jsonArray.toString();
        } catch (Exception e) {
            log.error("获取Cookie失败", e);
            return "[]";
        }
    }

    /**
     * 打印保存的Cookie详细信息
     * 
     * @param platform   平台枚举
     * @param cookieJson Cookie的JSON字符串
     */
    private void printSavedCookieDetails(RecruitmentPlatformEnum platform, String cookieJson) {
        try {
            JSONArray jsonArray = new JSONArray(cookieJson);
            int cookieCount = jsonArray.length();

            log.info("========== {} 保存Cookie详细信息 ==========", platform.getPlatformName());
            log.info("Cookie总数: {}", cookieCount);

            for (int i = 0; i < cookieCount; i++) {
                JSONObject cookie = jsonArray.getJSONObject(i);

                String name = cookie.optString("name", "");
                String value = cookie.optString("value", "");
                String domain = cookie.optString("domain", "");
                String path = cookie.optString("path", "");
                String expires = cookie.has("expires") ? String.valueOf(cookie.getDouble("expires")) : "无";
                boolean secure = cookie.optBoolean("secure", false);
                boolean httpOnly = cookie.optBoolean("httpOnly", false);

                log.info("Cookie[{}]:", i + 1);
                log.info("  - name: {}", name);
                log.info("  - value: {}", value.length() > 50 ? value.substring(0, 50) + "..." : value);
                log.info("  - domain: {}", domain);
                log.info("  - path: {}", path);
                log.info("  - expires: {}", expires);
                log.info("  - secure: {}", secure);
                log.info("  - httpOnly: {}", httpOnly);
            }

            log.info("完整Cookie JSON (前500字符): {}",
                    cookieJson.length() > 500 ? cookieJson.substring(0, 500) + "..." : cookieJson);
            log.info("=".repeat(50 + platform.getPlatformName().length()));
        } catch (Exception e) {
            log.error("打印 {} 的Cookie详细信息失败", platform.getPlatformName(), e);
        }
    }
}
