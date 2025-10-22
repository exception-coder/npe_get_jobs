package getjobs.modules.liepin.service.impl;

import com.microsoft.playwright.Page;
import getjobs.common.dto.ConfigDTO;
import getjobs.common.enums.RecruitmentPlatformEnum;
import getjobs.common.service.PlaywrightService;
import getjobs.modules.boss.dto.JobDTO;
import getjobs.service.JobFilterService;
import getjobs.modules.liepin.service.LiepinElementLocators;
import getjobs.modules.liepin.service.playwright.LiePinApiMonitorService;
import getjobs.repository.UserProfileRepository;
import getjobs.repository.entity.ConfigEntity;
import getjobs.service.AbstractRecruitmentService;
import getjobs.service.ConfigService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.atomic.AtomicInteger;

@Slf4j
@Service
public class LiepinRecruitmentServiceImpl extends AbstractRecruitmentService {

    private final LiePinApiMonitorService liePinApiMonitorService;
    private final PlaywrightService playwrightService;
    private final JobFilterService jobFilterService;

    private Page page;

    public LiepinRecruitmentServiceImpl(ConfigService configService,
            UserProfileRepository userProfileRepository,
            LiePinApiMonitorService liePinApiMonitorService,
            PlaywrightService playwrightService,
            JobFilterService jobFilterService) {
        super(configService, userProfileRepository);
        this.liePinApiMonitorService = liePinApiMonitorService;
        this.playwrightService = playwrightService;
        this.jobFilterService = jobFilterService;
    }

    private static final String HOME_URL = RecruitmentPlatformEnum.LIEPIN.getHomeUrl();
    private static final String SEARCH_JOB_URL = "https://www.liepin.com/zhaopin/?";

    @Override
    public RecruitmentPlatformEnum getPlatform() {
        return RecruitmentPlatformEnum.LIEPIN;
    }

    @PostConstruct
    public void init() {
        this.page = playwrightService.getPage(RecruitmentPlatformEnum.LIEPIN);
        liePinApiMonitorService.init();
    }

    @Override
    public boolean login() {
        log.info("开始猎聘登录检查");
        try {
            page.navigate(HOME_URL);
            // 这里的登录检查逻辑需要根据猎聘的页面元素进行调整
            if (LiepinElementLocators.isLoginRequired(page)) {
                log.info("需要登录，开始登录流程");
                return performLogin();
            } else {
                log.info("猎聘已登录");
                return true;
            }
        } catch (Exception e) {
            log.error("猎聘登录失败", e);
            return false;
        }
    }

    @Override
    public List<JobDTO> collectJobs() {
        log.info("开始猎聘岗位采集");
        List<JobDTO> allJobDTOS = new ArrayList<>();

        // 从数据库加载平台配置
        ConfigDTO config = loadPlatformConfig();
        if (config == null) {
            log.warn("猎聘配置未找到，跳过岗位采集");
            return allJobDTOS;
        }

        try {
            for (String cityCode : config.getCityCodeCodes()) {
                for (String keyword : config.getKeywordsList()) {
                    List<JobDTO> jobDTOS = collectJobsByCity(cityCode, keyword, config);
                    allJobDTOS.addAll(jobDTOS);
                }
            }
            log.info("猎聘岗位采集完成，共采集{}个岗位", allJobDTOS.size());
            return allJobDTOS;
        } catch (Exception e) {
            log.error("猎聘岗位采集失败", e);
            return allJobDTOS;
        }
    }

    @Override
    public List<JobDTO> collectRecommendJobs() {
        return List.of();
    }

    @Override
    public List<JobDTO> filterJobs(List<JobDTO> jobDTOS) {
        // 从数据库获取猎聘平台的配置
        ConfigDTO config = loadPlatformConfig();
        if (config == null) {
            log.warn("猎聘配置未找到，跳过过滤");
            return jobDTOS;
        }

        return jobFilterService.filterJobs(jobDTOS, config, false);
    }

    @Override
    public int deliverJobs(List<JobDTO> jobDTOS) {
        log.info("开始执行猎聘岗位投递操作，待投递岗位数量: {}", jobDTOS.size());
        AtomicInteger successCount = new AtomicInteger(0);

        // 从数据库加载平台配置
        ConfigDTO config = loadPlatformConfig();
        if (config == null) {
            log.warn("猎聘配置未找到，跳过岗位投递");
            return 0;
        }

        try (Page jobPage = page.context().newPage()) {
            for (JobDTO jobDTO : jobDTOS) {
                try {
                    log.info("正在投递岗位: {}", jobDTO.getJobName());
                    jobPage.navigate(jobDTO.getHref());
                    jobPage.waitForLoadState();

                    // 等待页面加载完成
                    jobPage.waitForTimeout(2000);

                    // 1. 点击"聊一聊"按钮
                    if (LiepinElementLocators.clickChatWithRecruiter(jobPage)) {
                        // 等待聊天窗口打开
                        jobPage.waitForTimeout(2000);

                        // 获取打招呼内容
                        String greetingMessage = config.getSayHi();
                        if (greetingMessage == null || greetingMessage.trim().isEmpty()) {
                            greetingMessage = "您好，我对这个职位很感兴趣，期待与您进一步沟通！";
                            log.warn("未配置打招呼内容，使用默认消息");
                        }

                        // 2. 输入打招呼内容
                        if (LiepinElementLocators.inputChatMessage(jobPage, greetingMessage)) {
                            // 等待输入完成
                            jobPage.waitForTimeout(1000);

                            // 3. 点击发送按钮
                            if (LiepinElementLocators.clickSendButton(jobPage)) {
                                log.info("岗位投递成功: {}", jobDTO.getJobName());
                                successCount.getAndIncrement();
                            } else {
                                log.warn("发送消息失败: {}", jobDTO.getJobName());
                            }
                        } else {
                            log.warn("输入打招呼内容失败: {}", jobDTO.getJobName());
                        }
                    } else {
                        log.warn("点击聊一聊按钮失败或HR不可聊天: {}", jobDTO.getJobName());
                    }

                    // 随机等待 3-5 秒
                    try {
                        Thread.sleep((3 + new Random().nextInt(3)) * 1000L);
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                    }
                } catch (Exception e) {
                    log.error("投递岗位 {} 时发生异常: {}", jobDTO.getJobName(), e.getMessage());
                }
            }
        } catch (Exception e) {
            log.error("猎聘岗位投递过程中发生严重错误", e);
        }
        log.info("猎聘岗位投递完成，成功投递 {} 个岗位", successCount.get());
        return successCount.get();
    }

    @Override
    public boolean isDeliveryLimitReached() {
        return false;
    }

    @Override
    public void saveData(String dataPath) {
        log.info("猎聘数据保存功能待实现");
    }

    /**
     * 重写父类方法，添加猎聘平台特定的字段
     */
    @Override
    protected void populatePlatformSpecificFields(ConfigDTO dto, ConfigEntity entity) {
        // 猎聘特有的发布时间字段
        dto.setPublishTime(entity.getPublishTime());
    }

    private List<JobDTO> collectJobsByCity(String cityCode, String keyword, ConfigDTO config) {
        String searchUrl = buildSearchUrl(cityCode, keyword, config);
        log.info("开始采集，城市: {}，关键词: {}，URL: {}", cityCode, keyword, searchUrl);

        List<JobDTO> jobDTOS = new ArrayList<>();

        // 重试机制：最多重试3次
        int maxRetries = 3;
        int retryCount = 0;
        boolean success = false;

        while (retryCount < maxRetries && !success) {
            try {
                // 检查Page是否可用
                if (page.isClosed()) {
                    log.error("Page对象已关闭，无法继续采集");
                    break;
                }

                // 导航到搜索页面，增加超时设置
                log.info("正在导航到搜索页面 (尝试 {}/{})", retryCount + 1, maxRetries);
                page.navigate(searchUrl, new Page.NavigateOptions().setTimeout(60000));

                // 等待页面加载完成
                page.waitForLoadState();

                // 额外等待，确保页面完全加载
                page.waitForTimeout(2000);

                // 从第1页开始循环点击分页，浏览所有岗位
                int pageNumber = 1;
                while (LiepinElementLocators.clickPageNumber(page, pageNumber)) {
                    log.info("正在采集第 {} 页的职位", pageNumber);

                    // 等待5-10秒，确保API响应被拦截并完成数据入库
                    try {
                        int waitSeconds = 5 + new Random().nextInt(6); // 5-10秒
                        log.info("等待 {} 秒以完成数据采集和入库", waitSeconds);
                        Thread.sleep(waitSeconds * 1000L);
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                        log.warn("等待过程被中断: {}", e.getMessage());
                        break;
                    }

                    pageNumber++;
                }

                log.info("所有分页已遍历完成，共 {} 页", pageNumber - 1);
                success = true;

            } catch (com.microsoft.playwright.PlaywrightException e) {
                retryCount++;
                if (e.getMessage() != null && e.getMessage().contains("Cannot find parent object")) {
                    log.warn("采集过程中出现响应对象清理问题 (尝试 {}/{}): {}", retryCount, maxRetries, e.getMessage());
                    // 这种错误可能是暂时的，等待一下再重试
                    try {
                        Thread.sleep(3000);
                    } catch (InterruptedException ie) {
                        Thread.currentThread().interrupt();
                    }
                } else {
                    log.error("采集城市: {}, 关键词: {} 的职位失败 (尝试 {}/{})", cityCode, keyword, retryCount, maxRetries, e);
                }

                if (retryCount >= maxRetries) {
                    log.error("达到最大重试次数，采集失败");
                }
            } catch (Exception e) {
                retryCount++;
                log.error("采集城市: {}, 关键词: {} 的职位失败 (尝试 {}/{})", cityCode, keyword, retryCount, maxRetries, e);

                if (retryCount >= maxRetries) {
                    log.error("达到最大重试次数，采集失败");
                }
            }
        }

        log.info("城市: {}, 关键词: {} 的职位采集完成，共{}个职位", cityCode, keyword, jobDTOS.size());
        return jobDTOS;
    }

    private String buildSearchUrl(String cityCode, String keyword, ConfigDTO config) {
        StringBuilder url = new StringBuilder(SEARCH_JOB_URL);
        try {
            url.append("key=").append(URLEncoder.encode(keyword, StandardCharsets.UTF_8));
            if (cityCode != null && !cityCode.trim().isEmpty()) {
                url.append("&city=").append(cityCode);
                url.append("&dq=").append(cityCode);
            }
            if (config.getPublishTime() != null) {
                url.append("&pubTime=").append(config.getPublishTime());
            }
            url.append("&currentPage=").append(0); // 从第一页开始
            url.append("&pageSize=").append(40);

            if (config.getExperience() != null && !config.getExperience().isEmpty()) {
                url.append("&workYearCode=").append(config.getExperience());
            }
            if (config.getIndustry() != null && !config.getIndustry().isEmpty()) {
                url.append("&industry=").append(URLEncoder.encode(config.getIndustry(), StandardCharsets.UTF_8));
            }
            if (config.getSalary() != null && !config.getSalary().isEmpty()) {
                url.append("&salaryCode=").append(config.getSalary());
            }
            if (config.getJobType() != null && !config.getJobType().isEmpty()) {
                url.append("&jobKind=").append(config.getJobType());
            }
            if (config.getScale() != null && !config.getScale().isEmpty()) {
                url.append("&compScale=").append(config.getScale());
            }
            if (config.getCompanyType() != null && !config.getCompanyType().isEmpty()) {
                url.append("&compKind=").append(config.getCompanyType());
            }
            if (config.getStage() != null && !config.getStage().isEmpty()) {
                url.append("&compStage=").append(config.getStage());
            }
            if (config.getDegree() != null && !config.getDegree().isEmpty()) {
                url.append("&eduLevel=").append(config.getDegree());
            }
            url.append("&sfrom=search_job_pc");
            url.append("&scene=condition");

        } catch (Exception e) {
            log.error("构建搜索URL失败", e);
        }
        return url.toString();
    }

    private boolean performLogin() {
        try {
            page.navigate(HOME_URL);

            log.info("等待用户手动登录...");
            // 登录逻辑需要根据猎聘的页面元素进行调整
            while (!LiepinElementLocators.isUserLoggedIn(page)) {
                Thread.sleep((3 + new Random().nextInt(3)) * 1000L);
            }
            log.info("登录成功");
            return true;
        } catch (Exception e) {
            log.error("登录过程中发生错误", e);
            return false;
        }
    }
}
