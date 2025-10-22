package getjobs.modules.boss.service.impl;

import com.github.openjson.JSONArray;
import com.github.openjson.JSONObject;
import com.microsoft.playwright.ElementHandle;
import com.microsoft.playwright.Locator;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.PlaywrightException;
import com.microsoft.playwright.options.Cookie;
import com.microsoft.playwright.options.WaitForSelectorState;
import getjobs.common.enums.RecruitmentPlatformEnum;
import getjobs.common.service.PlaywrightService;
import getjobs.common.util.PageHealthChecker;
import getjobs.modules.boss.BossElementLocators;
import getjobs.common.dto.ConfigDTO;
import getjobs.modules.boss.dto.JobDTO;
import getjobs.common.enums.JobStatusEnum;
import getjobs.service.JobFilterService;
import getjobs.modules.boss.service.playwright.BossApiMonitorService;
import getjobs.repository.JobRepository;
import getjobs.repository.UserProfileRepository;
import getjobs.repository.entity.ConfigEntity;
import getjobs.repository.entity.JobEntity;
import getjobs.repository.entity.UserProfile;
import getjobs.service.AbstractRecruitmentService;
import getjobs.service.ConfigService;
import getjobs.utils.JobUtils;
import getjobs.modules.ai.greeting.service.GreetingService;
import getjobs.modules.ai.greeting.dto.GreetingRequest;
import getjobs.modules.ai.greeting.dto.GreetingResponse;
import getjobs.modules.ai.greeting.dto.GreetingParams;
import getjobs.modules.ai.greeting.dto.ProfileDTO;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import java.io.File;
import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.*;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import static getjobs.modules.boss.BossElementLocators.*;

/**
 * Boss直聘招聘服务实现类
 *
 * @author loks666
 *         项目链接: <a href=
 *         "https://github.com/loks666/get_jobs">https://github.com/loks666/get_jobs</a>
 */
@Slf4j
@Service
public class BossRecruitmentServiceImpl extends AbstractRecruitmentService {

    private static final String HOME_URL = RecruitmentPlatformEnum.BOSS_ZHIPIN.getHomeUrl();
    private static final String GEEK_JOB_URL = HOME_URL + "/web/geek/job?";
    private static final String GEEK_CHAT_URL = HOME_URL + "/web/geek/chat";

    private final BossApiMonitorService bossApiMonitorService;
    private final JobRepository jobRepository;
    private final JobFilterService jobFilterService;
    private final PlaywrightService playwrightService;
    private final GreetingService greetingService;

    private Page page;

    public BossRecruitmentServiceImpl(ConfigService configService, BossApiMonitorService bossApiMonitorService,
            JobRepository jobRepository, JobFilterService jobFilterService,
            PlaywrightService playwrightService, GreetingService greetingService,
            UserProfileRepository userProfileRepository) {
        super(configService, userProfileRepository);
        this.bossApiMonitorService = bossApiMonitorService;
        this.jobRepository = jobRepository;
        this.jobFilterService = jobFilterService;
        this.playwrightService = playwrightService;
        this.greetingService = greetingService;
    }

    @PostConstruct
    public void init() {
        this.page = playwrightService.getPage(RecruitmentPlatformEnum.BOSS_ZHIPIN);
    }

    @Override
    public RecruitmentPlatformEnum getPlatform() {
        return RecruitmentPlatformEnum.BOSS_ZHIPIN;
    }

    @Override
    public boolean login() {
        log.info("开始Boss直聘登录检查");

        try {
            // 使用Playwright打开网站
            page.navigate(HOME_URL);

            // 检查并加载Cookie
            String cookieData = getCookieFromConfig();
            if (isCookieValid(cookieData)) {
                loadCookiesFromString(cookieData);
                page.reload();
                TimeUnit.SECONDS.sleep(2);
            }

            // 检查是否需要登录
            if (isLoginRequired()) {
                log.info("Cookie失效，开始扫码登录");
                return scanLogin();
            } else {
                log.info("Boss直聘已登录");
                return true;
            }
        } catch (Exception e) {
            log.error("Boss直聘登录失败", e);
            return false;
        }
    }

    @Override
    public List<JobDTO> collectJobs() {
        log.info("开始Boss直聘岗位采集");
        List<JobDTO> allJobDTOS = new ArrayList<>();

        // 从数据库加载平台配置
        ConfigDTO config = loadPlatformConfig();
        if (config == null) {
            log.warn("Boss直聘配置未找到，跳过岗位采集");
            return allJobDTOS;
        }

        // 记录采集开始时间，用于统计新增岗位数量
        LocalDateTime collectionStartTime = LocalDateTime.now();

        try {
            // 按城市和关键词搜索岗位
            for (String cityCode : config.getCityCodeCodes()) {
                for (String keyword : config.getKeywordsList()) {
                    collectJobsByCity(cityCode, keyword, config);
                    // 不再依赖返回的空集合，岗位数据由监控服务自动入库
                }
            }

            // 等待一段时间确保所有API响应都被处理完毕
            try {
                Thread.sleep(3000); // 等待3秒
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }

            // 统计采集期间新增的岗位数量
            LocalDateTime collectionEndTime = LocalDateTime.now();
            long collectedJobCount = jobRepository.countByPlatformAndCreatedAtBetween(
                    "boss", collectionStartTime, collectionEndTime);

            log.info("Boss直聘岗位采集完成，共采集{}个岗位", collectedJobCount);

            // 返回空集合，实际岗位数据已通过监控服务入库
            return allJobDTOS;
        } catch (Exception e) {
            log.error("Boss直聘岗位采集失败", e);
            return allJobDTOS;
        }
    }

    @Override
    public List<JobDTO> collectRecommendJobs() {
        log.info("开始Boss直聘推荐岗位采集");
        List<JobDTO> recommendJobDTOS = new ArrayList<>();

        // 记录采集开始时间，用于统计新增岗位数量
        LocalDateTime collectionStartTime = LocalDateTime.now();

        try {
            // 设置推荐岗位接口监听器
            bossApiMonitorService.startMonitoring();

            String cookieData = getCookieFromConfig();
            if (isCookieValid(cookieData)) {
                loadCookiesFromString(cookieData);
            }
            page.navigate(GEEK_JOB_URL);

            // 等待页面加载
            page.waitForLoadState();

            // 等待元素出现，最多等待10秒
            page.waitForSelector("a.expect-item", new Page.WaitForSelectorOptions().setTimeout(10000.0));

            // 获取a标签且class是expect-item的元素
            ElementHandle activeElement = page.querySelector("a.expect-item");

            if (activeElement != null) {
                log.debug("找到推荐岗位入口，准备点击");
                activeElement.click();
                page.waitForLoadState();

                if (isJobsPresent()) {
                    // 滚动加载推荐岗位
                    int totalJobs = loadJobsWithScroll(page, "推荐岗位");
                    log.info("推荐岗位加载，总计: {}", totalJobs);
                }
            }

            // 等待一段时间确保所有API响应都被处理完毕
            try {
                Thread.sleep(3000); // 等待3秒
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }

            // 统计采集期间新增的岗位数量
            LocalDateTime collectionEndTime = LocalDateTime.now();
            long collectedJobCount = jobRepository.countByPlatformAndCreatedAtBetween(
                    "boss", collectionStartTime, collectionEndTime);

            log.info("Boss直聘推荐岗位采集完成，共采集{}个岗位", collectedJobCount);

        } catch (Exception e) {
            log.error("Boss直聘推荐岗位采集失败", e);
        }

        // 返回空集合，实际岗位数据已通过监控服务入库
        return recommendJobDTOS;
    }

    @Override
    public List<JobDTO> filterJobs(List<JobDTO> jobDTOS) {
        // 从数据库获取boss平台的配置
        ConfigDTO config = loadPlatformConfig();
        if (config == null) {
            log.warn("Boss直聘配置未找到，跳过过滤");
            return jobDTOS;
        }

        return jobFilterService.filterJobs(jobDTOS, config);
    }

    @Override
    public int deliverJobs(List<JobDTO> jobDTOS) {
        log.info("开始Boss直聘岗位投递，待投递岗位数量: {}", jobDTOS.size());
        int successCount = 0;

        // 从数据库加载平台配置
        ConfigDTO config = loadPlatformConfig();
        if (config == null) {
            log.warn("Boss直聘配置未找到，跳过岗位投递");
            return 0;
        }

        for (JobDTO jobDTO : jobDTOS) {
            try {
                if (isDeliveryLimitReached()) {
                    log.warn("达到投递上限，停止投递");
                    break;
                }

                boolean delivered = deliverSingleJob(jobDTO, config);
                if (delivered) {
                    successCount++;
                    log.info("投递成功: {} - {}", jobDTO.getCompanyName(), jobDTO.getJobName());
                    updateJobStatus(jobDTO, JobStatusEnum.DELIVERED_SUCCESS.getCode(), null);
                } else {
                    log.warn("投递失败: {} - {}", jobDTO.getCompanyName(), jobDTO.getJobName());
                    updateJobStatus(jobDTO, JobStatusEnum.DELIVERED_FAILED.getCode(), "自动投递失败");
                }

                // 投递间隔
                TimeUnit.SECONDS.sleep(15);

            } catch (Exception e) {
                log.error("投递岗位失败: {} - {}", jobDTO.getCompanyName(), jobDTO.getJobName(), e);
                try {
                    updateJobStatus(jobDTO, JobStatusEnum.DELIVERED_FAILED.getCode(), "异常投递失败");
                } catch (Exception ignore) {
                }
            }
        }

        log.info("Boss直聘岗位投递完成，成功投递: {}", successCount);
        return successCount;
    }

    /**
     * 根据加密职位ID更新职位状态与原因
     */
    private void updateJobStatus(JobDTO jobDTO, int status, String reason) {
        try {
            if (jobDTO == null || jobDTO.getEncryptJobId() == null) {
                return;
            }
            JobEntity entity = jobRepository.findByEncryptJobId(jobDTO.getEncryptJobId());
            if (entity == null) {
                return;
            }
            entity.setStatus(status);
            if (reason != null && !reason.isEmpty()) {
                entity.setFilterReason(reason);
            }
            jobRepository.save(entity);
        } catch (Exception e) {
            log.debug("更新职位状态失败: {} - {} - {}", jobDTO.getCompanyName(), jobDTO.getJobName(), e.getMessage());
        }
    }

    @Override
    public boolean isDeliveryLimitReached() {
        try {
            TimeUnit.SECONDS.sleep(1);
            Locator dialogElement = page.locator(DIALOG_CON);
            if (dialogElement.isVisible(new Locator.IsVisibleOptions().setTimeout(2000.0))) {
                String text = dialogElement.textContent();
                boolean isLimit = text.contains("已达上限");
                if (isLimit) {
                    log.warn("投递限制：今日投递已达上限");
                }
                return isLimit;
            }
            return false;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public void saveData(String dataPath) {
        updateBlacklistFromChat();
        log.info("保存Boss直聘黑名单数据: {}", dataPath);
    }

    // ==================== 私有辅助方法 ====================

    /**
     * 按城市采集岗位
     */
    private void collectJobsByCity(String cityCode, String keyword, ConfigDTO config) {
        String searchUrl = getSearchUrl(cityCode, config);
        String encodedKeyword = URLEncoder.encode(keyword, StandardCharsets.UTF_8);
        String url = searchUrl + "&query=" + encodedKeyword;

        log.info("开始采集，城市: {}，关键词: {}，URL: {}", cityCode, keyword, url);

        // 设置岗位搜索接口监听器
        bossApiMonitorService.startMonitoring();

        String cookieData = getCookieFromConfig();
        if (isCookieValid(cookieData)) {
            loadCookiesFromString(cookieData);
        }
        page.navigate(url);

        if (isJobsPresent()) {
            try {
                // 滚动加载更多岗位
                int totalJobs = loadJobsWithScroll(page, "搜索岗位");
                log.info("搜索岗位加载完成: {}，关键词: {}", totalJobs, keyword);
            } catch (Exception e) {
                log.error("滚动加载岗位数据出错", e);
            }
        }

        // 点击所有岗位卡片以触发详情API调用，让监控服务获取更多岗位信息
        // 使用安全的执行方式，避免Page对象失效导致任务中断
        try {
            PageHealthChecker.executeWithRetry(
                    page,
                    () -> {
                        BossElementLocators.clickAllJobCards(page, 5000);
                        return null;
                    },
                    "点击岗位卡片",
                    2 // 最多重试2次
            );
        } catch (Exception e) {
            log.error("点击岗位卡片失败，跳过此步骤: {}", e.getMessage());
            // 即使点击失败也不影响整体流程，继续执行
        }

        log.info("城市: {}，关键词: {} 的岗位采集操作完成，实际数据由监控服务自动入库", cityCode, keyword);
    }

    /**
     * 构建搜索URL
     */
    private String getSearchUrl(String cityCode, ConfigDTO config) {
        return GEEK_JOB_URL +
        // 城市参数：指定搜索的城市代码
                JobUtils.appendParam("city", cityCode) +
                // 职位类型参数：指定搜索的职位类型代码（如：全职、兼职、实习等）
                JobUtils.appendParam("jobType", config.getJobType()) +
                // 薪资参数：指定期望薪资范围代码
                JobUtils.appendParam("salary", config.getSalary()) +
                // 工作经验参数：指定工作经验要求代码列表（如：1-3年、3-5年等）
                JobUtils.appendListParam("experience", config.getExperienceCodes()) +
                // 学历要求参数：指定学历要求代码列表（如：本科、硕士、博士等）
                JobUtils.appendListParam("degree", config.getDegreeCodes()) +
                // 公司规模参数：指定公司规模代码列表（如：20-99人、100-499人等）
                JobUtils.appendListParam("scale", config.getScaleCodes()) +
                // 行业参数：指定行业类型代码列表（如：互联网、金融、教育等）
                JobUtils.appendListParam("industry", config.getIndustryCodes()) +
                // 融资阶段参数：指定公司融资阶段代码列表（如：天使轮、A轮、B轮等）
                JobUtils.appendListParam("stage", config.getStageCodes());
    }

    /**
     * 检查是否存在岗位
     */
    private boolean isJobsPresent() {
        try {
            BossElementLocators.waitForElement(page, JOB_LIST_CONTAINER);
            return true;
        } catch (Exception e) {
            log.warn("岗位页面检查：页面无岗位元素");
            return false;
        }
    }

    /**
     * 滚动加载岗位数据（带Page健康检查和重试机制）
     */
    private int loadJobsWithScroll(Page page, String jobType) {
        int previousJobCount = 0;
        int currentJobCount = 0;
        int unchangedCount = 0;

        while (unchangedCount < 2) {
            try {
                // 使用健康检查包装器执行查询操作
                List<ElementHandle> jobCards = PageHealthChecker.executeWithRetry(
                        page,
                        () -> page.querySelectorAll(JOB_LIST_SELECTOR),
                        "查询岗位卡片",
                        2 // 最多重试2次
                );

                currentJobCount = jobCards.size();
                log.debug("滚动加载中，当前岗位数: {}", currentJobCount);

                if (currentJobCount > previousJobCount) {
                    previousJobCount = currentJobCount;
                    unchangedCount = 0;

                    // 使用健康检查包装器执行滚动操作
                    PageHealthChecker.executeWithRetry(
                            page,
                            () -> {
                                safeEvaluateJavaScript(page, "window.scrollTo(0, document.body.scrollHeight)");
                                log.debug("{}下拉页面加载更多...", jobType);
                            },
                            "滚动页面到底部",
                            2);

                    // 使用健康检查包装器执行等待操作
                    PageHealthChecker.executeWithRetry(
                            page,
                            () -> page.waitForTimeout(2000),
                            "等待页面加载",
                            2);
                } else {
                    unchangedCount++;
                    if (unchangedCount < 2) {
                        log.debug("{}下拉后岗位数量未增加，再次尝试...", jobType);

                        // 使用健康检查包装器执行滚动操作
                        PageHealthChecker.executeWithRetry(
                                page,
                                () -> {
                                    safeEvaluateJavaScript(page, "window.scrollTo(0, document.body.scrollHeight)");
                                },
                                "滚动页面到底部（重试）",
                                2);

                        // 使用健康检查包装器执行等待操作
                        PageHealthChecker.executeWithRetry(
                                page,
                                () -> page.waitForTimeout(2000),
                                "等待页面加载",
                                2);
                    }
                }
            } catch (PlaywrightException e) {
                log.error("滚动加载岗位时Page对象失效，停止滚动加载: {}", e.getMessage());
                // Page失效时，返回当前已加载的数量
                break;
            }
        }

        log.debug("{}加载完成，总计岗位数: {}", jobType, currentJobCount);
        return currentJobCount;
    }

    /**
     * 投递单个岗位
     */
    @SneakyThrows
    private boolean deliverSingleJob(JobDTO jobDTO, ConfigDTO config) {
        // 在新标签页中打开岗位详情
        Page jobPage = page.context().newPage();

        try {
            jobPage.navigate(jobDTO.getHref());

            // 等待聊天按钮出现
            Locator chatButton = jobPage.locator(CHAT_BUTTON);
            if (!chatButton.nth(0).isVisible(new Locator.IsVisibleOptions().setTimeout(5000.0))) {
                Locator errorElement = jobPage.locator(ERROR_CONTENT);
                if (errorElement.isVisible() && errorElement.textContent().contains("异常访问")) {
                    return false;
                }
            }

            // 模拟用户浏览行为
            simulateUserBrowsingBehavior(jobPage);

            // 执行投递
            return performDelivery(jobPage, jobDTO, config);

        } finally {
            jobPage.close();
        }
    }

    /**
     * 执行具体的投递操作
     */
    private boolean performDelivery(Page jobPage, JobDTO jobDTO, ConfigDTO config) {
        try {
            Locator chatBtn = jobPage.locator(CHAT_BUTTON).nth(0);

            // 等待并点击沟通按钮
            String waitTime = config.getWaitTime();
            int sleepTime = 10;
            if (waitTime != null) {
                try {
                    sleepTime = Integer.parseInt(waitTime);
                } catch (NumberFormatException e) {
                    log.warn("等待时间配置错误，使用默认值10秒");
                }
            }
            TimeUnit.SECONDS.sleep(sleepTime);

            chatBtn.click();

            if (isDeliveryLimitReached()) {
                return false;
            }

            // 处理可能出现的弹框
            handlePossibleDialog(jobPage, chatBtn);

            // 处理输入框和发送消息
            return handleChatInput(jobPage, jobDTO, config);

        } catch (Exception e) {
            log.error("执行投递操作失败", e);
            return false;
        }
    }

    /**
     * 处理可能出现的弹框
     */
    private void handlePossibleDialog(Page jobPage, Locator chatBtn) {
        try {
            Locator dialogTitle = jobPage.locator(DIALOG_TITLE);
            if (dialogTitle.nth(0).isVisible()) {
                Locator closeBtn = jobPage.locator(DIALOG_CLOSE);
                if (closeBtn.nth(0).isVisible()) {
                    closeBtn.nth(0).click();
                    chatBtn.nth(0).click();
                }
            }
        } catch (Exception ignore) {
            // 忽略弹框处理异常
        }
    }

    /**
     * 处理聊天输入框
     */
    private boolean handleChatInput(Page jobPage, JobDTO jobDTO, ConfigDTO config) {
        try {
            Locator input = jobPage.locator(CHAT_INPUT).nth(0);

            input.waitFor(new Locator.WaitForOptions()
                    .setState(WaitForSelectorState.VISIBLE)
                    .setTimeout(10000.0));

            if (input.isVisible(new Locator.IsVisibleOptions().setTimeout(10000.0))) {
                input.click();

                Locator dialogElement = jobPage.locator(DIALOG_CONTAINER).nth(0);
                if (dialogElement.isVisible() && "不匹配".equals(dialogElement.textContent())) {
                    return false;
                }

                // 准备打招呼内容
                String greetingMessage = config.getSayHi().replaceAll("\\r|\\n", "");

                if (config.getEnableAIGreeting()) {
                    try {
                        // 使用AI生成打招呼内容
                        String aiGreeting = generateAIGreeting(jobDTO, config);
                        if (aiGreeting != null && !aiGreeting.isEmpty()) {
                            greetingMessage = aiGreeting;
                            log.info("使用AI生成的打招呼内容: {}", greetingMessage);
                        }
                    } catch (Exception e) {
                        log.error("AI生成打招呼内容失败，使用默认内容", e);
                    }
                }

                input.fill(greetingMessage);

                Locator sendBtn = jobPage.locator(SEND_BUTTON).nth(0);
                if (sendBtn.isVisible(new Locator.IsVisibleOptions().setTimeout(5000.0))) {
                    sendBtn.click();
                    TimeUnit.SECONDS.sleep(3);

                    // 发送简历图片
                    if (config.getSendImgResume()) {
                        sendResumeImage(jobPage, config);
                    }

                    TimeUnit.SECONDS.sleep(3);
                    return true;
                }
            }
            return false;
        } catch (Exception e) {
            log.error("处理聊天输入框失败", e);
            return false;
        }
    }

    /**
     * 发送简历图片
     */
    private boolean sendResumeImage(Page jobPage, ConfigDTO config) {
        try {
            String resumePath = config.getResumeImagePath();
            if (resumePath != null && !resumePath.isEmpty()) {
                File imageFile = new File(resumePath);
                if (imageFile.exists() && imageFile.isFile()) {
                    Locator fileInput = jobPage.locator(IMAGE_UPLOAD);
                    if (fileInput.isVisible()) {
                        fileInput.setInputFiles(new Path[] { Paths.get(imageFile.getPath()) });
                        Locator imageSendBtn = jobPage.locator(".image-uploader-btn");
                        if (imageSendBtn.isVisible(new Locator.IsVisibleOptions().setTimeout(2000.0))) {
                            imageSendBtn.click();
                            return true;
                        }
                    }
                } else {
                    log.warn("简历图片发送：文件不存在 -> {}", resumePath);
                }
            }
        } catch (Exception e) {
            log.error("简历图片发送出错", e);
        }
        return false;
    }

    /**
     * 模拟用户浏览行为
     */
    private void simulateUserBrowsingBehavior(Page jobPage) {
        try {
            if (!isPageValid(jobPage)) {
                log.warn("页面浏览模拟：页面状态无效，跳过滚动操作");
                return;
            }

            safeEvaluateJavaScript(jobPage, "window.scrollBy(0, 300)");
            TimeUnit.SECONDS.sleep(1);

            if (!isPageValid(jobPage)) {
                return;
            }

            safeEvaluateJavaScript(jobPage, "window.scrollBy(0, 300)");
            TimeUnit.SECONDS.sleep(1);

            if (!isPageValid(jobPage)) {
                return;
            }

            safeEvaluateJavaScript(jobPage, "window.scrollTo(0, 0)");
            TimeUnit.SECONDS.sleep(1);

        } catch (Exception e) {
            log.error("页面浏览行为模拟出错", e);
        }
    }

    /**
     * 安全地执行JavaScript代码
     */
    private void safeEvaluateJavaScript(Page page, String script) {
        try {
            if (!isPageValid(page)) {
                log.debug("页面状态无效，跳过JavaScript执行: {}", script);
                return;
            }
            page.evaluate(script);
        } catch (Exception e) {
            if (e.getMessage() != null && e.getMessage().contains("Execution context was destroyed")) {
                log.warn("JavaScript执行：页面执行上下文被销毁，可能发生了页面跳转");
            } else {
                log.debug("JavaScript执行失败: {} - {}", script, e.getMessage());
            }
        }
    }

    /**
     * 检查页面是否仍然有效
     */
    private boolean isPageValid(Page page) {
        try {
            String url = page.url();
            return url != null && url.contains("zhipin.com") && !url.contains("error");
        } catch (Exception e) {
            log.debug("页面状态检查失败: {}", e.getMessage());
            return false;
        }
    }

    /**
     * 更新黑名单数据从聊天记录
     */
    private void updateBlacklistFromChat() {
        page.navigate(GEEK_CHAT_URL);
        try {
            TimeUnit.SECONDS.sleep(3);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

        boolean shouldBreak = false;
        int processedItems = 0;
        int newBlackCompanies = 0;

        while (!shouldBreak) {
            try {
                Locator bottomElement = page.locator(FINISHED_TEXT);
                if (bottomElement.isVisible() && "没有更多了".equals(bottomElement.textContent())) {
                    shouldBreak = true;
                }
            } catch (Exception ignore) {
            }

            Locator items = page.locator(CHAT_LIST_ITEM);
            int itemCount = items.count();

            for (int i = 0; i < itemCount; i++) {
                processedItems++;
                try {
                    Locator companyElements = page.locator(COMPANY_NAME_IN_CHAT);
                    Locator messageElements = page.locator(LAST_MESSAGE);

                    String companyName = null;
                    String message = null;
                    int retryCount = 0;

                    while (retryCount < 2) {
                        try {
                            if (i < companyElements.count() && i < messageElements.count()) {
                                companyName = companyElements.nth(i).textContent();
                                message = messageElements.nth(i).textContent();
                                break;
                            } else {
                                log.debug("聊天记录元素索引超出范围");
                                break;
                            }
                        } catch (Exception e) {
                            retryCount++;
                            if (retryCount >= 2) {
                                log.debug("获取聊天记录文本失败，跳过");
                                break;
                            }
                            log.debug("页面元素已变更，重试获取聊天记录文本...");
                            try {
                                TimeUnit.SECONDS.sleep(1);
                            } catch (InterruptedException ie) {
                                Thread.currentThread().interrupt();
                            }
                        }
                    }

                    if (companyName != null && message != null) {
                        boolean match = message.contains("不") || message.contains("感谢") || message.contains("但")
                                || message.contains("遗憾") || message.contains("需要本") || message.contains("对不");
                        boolean nomatch = message.contains("不是") || message.contains("不生");
                        if (match && !nomatch) {
                            // TODO 数据库中查询获取
                            // if (!blackCompanies.stream().anyMatch(companyName::contains)) {
                            // companyName = companyName.replaceAll("\\.{3}", "");
                            // if (companyName.matches(".*(\\p{IsHan}{2,}|[a-zA-Z]{4,}).*")) {
                            // blackCompanies.add(companyName);
                            // newBlackCompanies++;
                            // log.debug("新增黑名单公司：{} - 拒绝信息：{}", companyName, message);
                            // }
                            // }
                        }
                    }
                } catch (Exception e) {
                    log.debug("处理聊天记录异常：{}", e.getMessage());
                }
            }

            try {
                Locator loadMoreElement = page.locator(SCROLL_LOAD_MORE);
                if (loadMoreElement.isVisible()) {
                    loadMoreElement.scrollIntoViewIfNeeded();
                    TimeUnit.SECONDS.sleep(1);
                } else {
                    safeEvaluateJavaScript(page, "window.scrollTo(0, document.body.scrollHeight)");
                    TimeUnit.SECONDS.sleep(1);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                log.debug("聊天记录滚动加载完成");
                break;
            } catch (Exception e) {
                log.debug("聊天记录滚动加载完成");
                break;
            }
        }

        log.info("聊天记录分析：处理{}条，新增黑名单公司：{}", processedItems, newBlackCompanies);
    }

    /**
     * 自定义JSON格式化
     */
    private String customJsonFormat(Map<String, Set<String>> data) {
        StringBuilder sb = new StringBuilder();
        sb.append("{\n");
        for (Map.Entry<String, Set<String>> entry : data.entrySet()) {
            sb.append("    \"").append(entry.getKey()).append("\": [\n");
            sb.append(entry.getValue().stream().map(s -> "        \"" + s + "\"").collect(Collectors.joining(",\n")));
            sb.append("\n    ],\n");
        }
        sb.delete(sb.length() - 2, sb.length());
        sb.append("\n}");
        return sb.toString();
    }

    /**
     * 检查Cookie是否有效
     */
    private boolean isCookieValid(String cookieData) {
        if (cookieData == null || cookieData.trim().isEmpty()) {
            return false;
        }
        try {
            return !cookieData.equals("[]") && cookieData.contains("name");
        } catch (Exception e) {
            log.error("Cookie数据验证出错", e);
            return false;
        }
    }

    /**
     * 检查是否需要登录
     */
    private boolean isLoginRequired() {
        try {
            Locator loginButton = page.locator(LOGIN_BTNS);
            if (loginButton.isVisible() && loginButton.textContent().contains("登录")) {
                return true;
            }

            try {
                Locator pageHeader = page.locator(PAGE_HEADER);
                if (pageHeader.isVisible()) {
                    Locator errorPageLogin = page.locator(ERROR_PAGE_LOGIN);
                    if (errorPageLogin.isVisible()) {
                        errorPageLogin.click();
                        return true;
                    }
                }
            } catch (Exception ex) {
                log.debug("无访问异常页面");
            }

            return false;
        } catch (Exception e) {
            log.error("登录状态检查出错", e);
            return true;
        }
    }

    /**
     * 扫码登录
     */
    @SneakyThrows
    private boolean scanLogin() {
        page.navigate(HOME_URL + "/web/user/?ka=header-login");
        TimeUnit.SECONDS.sleep(5);

        try {
            Locator loginBtn = page.locator(LOGIN_BTN);
            if (loginBtn.isVisible() && !loginBtn.textContent().equals("登录")) {
                log.info("检测到已登录状态");
                return true;
            }
        } catch (Exception ignored) {
        }

        boolean login = false;

        boolean loginSuccess;

        while (!login) {
            try {
                loginSuccess = page.locator(LOGIN_SUCCESS_HEADER)
                        .isVisible(new Locator.IsVisibleOptions().setTimeout(2000.0));

                if (loginSuccess) {
                    login = true;
                    log.info("登录成功，保存Cookie");
                }
            } catch (Exception e) {
                loginSuccess = page.locator(LOGIN_SUCCESS_HEADER)
                        .isVisible(new Locator.IsVisibleOptions().setTimeout(2000.0));
                if (loginSuccess) {
                    login = true;
                    log.info("登录成功，保存Cookie");
                }
            }
        }

        saveCookieToConfig();
        return true;
    }

    /**
     * 等待用户输入或超时
     */
    private boolean waitForUserInputOrTimeout(Scanner scanner) {
        long end = System.currentTimeMillis() + 2000;
        while (System.currentTimeMillis() < end) {
            try {
                if (System.in.available() > 0) {
                    scanner.nextLine();
                    return true;
                }
                TimeUnit.SECONDS.sleep(1);
            } catch (IOException e) {
                // 忽略异常
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return false;
            }
        }
        return false;
    }

    /**
     * 从配置实体中获取Cookie数据
     */
    private String getCookieFromConfig() {
        try {
            ConfigEntity config = loadPlatformConfigEntity();
            return config != null ? config.getCookieData() : null;
        } catch (Exception e) {
            log.error("从配置中获取Cookie失败", e);
            return null;
        }
    }

    /**
     * 保存Cookie到配置实体
     */
    private void saveCookieToConfig() {
        try {
            ConfigEntity config = loadPlatformConfigEntity();
            if (config == null) {
                config = new ConfigEntity();
            }

            // 获取当前浏览器的Cookie
            String cookieJson = getCurrentCookiesAsJson();
            config.setCookieData(cookieJson);

            config.setPlatformType(getPlatform().getPlatformCode());
            configService.save(config);
            log.info("Cookie已保存到配置实体");
        } catch (Exception e) {
            log.error("保存Cookie到配置失败", e);
        }
    }

    /**
     * 获取当前浏览器Cookie并转换为JSON字符串
     */
    private String getCurrentCookiesAsJson() {
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
            log.error("获取当前Cookie失败", e);
            return "[]";
        }
    }

    /**
     * 从JSON字符串加载Cookie到浏览器
     */
    private void loadCookiesFromString(String cookieData) {
        try {
            JSONArray jsonArray = new JSONArray(cookieData);
            List<com.microsoft.playwright.options.Cookie> cookies = new ArrayList<>();

            for (int i = 0; i < jsonArray.length(); i++) {
                JSONObject jsonObject = jsonArray.getJSONObject(i);

                com.microsoft.playwright.options.Cookie cookie = new com.microsoft.playwright.options.Cookie(
                        jsonObject.getString("name"),
                        jsonObject.getString("value"));

                if (!jsonObject.isNull("domain")) {
                    cookie.domain = jsonObject.getString("domain");
                }

                if (!jsonObject.isNull("path")) {
                    cookie.path = jsonObject.getString("path");
                }

                if (!jsonObject.isNull("expires")) {
                    cookie.expires = jsonObject.getDouble("expires");
                }

                if (!jsonObject.isNull("secure")) {
                    cookie.secure = jsonObject.getBoolean("secure");
                }

                if (!jsonObject.isNull("httpOnly")) {
                    cookie.httpOnly = jsonObject.getBoolean("httpOnly");
                }

                cookies.add(cookie);
            }

            page.context().addCookies(cookies);
            log.info("已从配置加载Cookie，共{}个", cookies.size());
        } catch (Exception e) {
            log.error("从配置加载Cookie失败", e);
        }
    }

    /**
     * 使用AI生成打招呼内容
     * 
     * @param jobDTO 岗位信息
     * @param config 配置信息
     * @return AI生成的打招呼内容
     */
    private String generateAIGreeting(JobDTO jobDTO, ConfigDTO config) {
        try {
            // 获取用户配置信息
            UserProfile userProfile = userProfileRepository.findAll().stream()
                    .findFirst()
                    .orElse(null);

            if (userProfile == null) {
                log.warn("未找到用户配置信息，无法生成AI打招呼内容");
                return null;
            }

            // 构建JD文本（合并职位描述和职位要求）
            StringBuilder jdText = new StringBuilder();
            if (jobDTO.getJobDescription() != null && !jobDTO.getJobDescription().isEmpty()) {
                jdText.append(jobDTO.getJobDescription());
            }
            if (jobDTO.getJobRequirements() != null && !jobDTO.getJobRequirements().isEmpty()) {
                if (jdText.length() > 0) {
                    jdText.append("\n");
                }
                jdText.append(jobDTO.getJobRequirements());
            }

            // 构建 GreetingRequest
            GreetingRequest request = new GreetingRequest();
            request.setProfile(convertToProfileDTO(userProfile));
            request.setJdText(jdText.toString());
            request.setJdKeywords(jobDTO.getSkills()); // 使用职位技能作为关键词

            // 设置打招呼参数
            GreetingParams params = new GreetingParams();
            params.setTone("platform"); // 使用平台风格
            params.setMaxChars(80); // 限制80字符
            params.setShowWeakness(false); // 不显示弱点
            params.setOutputMode("text");
            request.setParams(params);

            // 调用AI生成服务
            GreetingResponse response = greetingService.generate(request);

            return response.getGreeting();

        } catch (Exception e) {
            log.error("生成AI打招呼内容时发生异常", e);
            return null;
        }
    }

    /**
     * 将 UserProfile 转换为 ProfileDTO
     * 
     * @param userProfile 用户配置信息
     * @return ProfileDTO
     */
    private ProfileDTO convertToProfileDTO(UserProfile userProfile) {
        ProfileDTO profileDTO = new ProfileDTO();
        profileDTO.setRole(userProfile.getRole());
        profileDTO.setYears(userProfile.getYears() != null ? userProfile.getYears() : 0);
        profileDTO.setDomains(userProfile.getDomains());
        profileDTO.setCoreStack(userProfile.getCoreStack());
        profileDTO.setScale(userProfile.getScale());
        profileDTO.setAchievements(userProfile.getAchievements());
        profileDTO.setStrengths(userProfile.getStrengths());
        profileDTO.setImprovements(userProfile.getImprovements());
        profileDTO.setAvailability(userProfile.getAvailability());
        profileDTO.setLinks(userProfile.getLinks());
        return profileDTO;
    }
}
