package getjobs.modules.boss;

import com.microsoft.playwright.Locator;
import com.microsoft.playwright.Page;
import lombok.extern.slf4j.Slf4j;

/**
 * Boss直聘网页元素定位器
 * 集中管理所有页面元素的定位表达式
 */
@Slf4j
public class BossElementLocators {
    // 主页相关元素
    public static final String LOGIN_BTN = "//li[@class='nav-figure']";
    public static final String LOGIN_SUCCESS_HEADER = "//*[@id=\"header\"]/div[1]/div[@class='user-nav']/ul/li[@class='nav-figure']";
    
    // 登录状态判断相关元素
    // 未登录状态：存在"登录/注册"按钮
    public static final String HEADER_LOGIN_BTN = "//a[@class='btn btn-outline header-login-btn']";
    public static final String HEADER_LOGIN_BTN_ALT = "a.header-login-btn"; // CSS选择器备用
    
    // 已登录状态：存在消息、简历等链接
    public static final String HEADER_MESSAGE_LINK = "//a[@ka='header-message']"; // 消息链接
    public static final String HEADER_RESUME_LINK = "//a[@ka='header-resume']";   // 简历链接
    public static final String NAV_FIGURE = "//li[@class='nav-figure']";          // 用户头像区域

    /**
     * 搜索结果页相关元素
     */
    // 用于判断岗位列表区块是否加载完成
    public static final String JOB_LIST_CONTAINER = "//div[@class='job-list-container']";
    // 定位job-list-container下的所有岗位卡片（用于循环点击）
    public static final String JOB_LIST_CONTAINER_CARDS = "//div[@class='job-list-container']//li[@class='job-card-box']";

    /**
     * 岗位列表
     */
    // 定位所有岗位卡片，用于获取当前获取到的岗位总数
    public static final String JOB_LIST_SELECTOR = "ul.rec-job-list li.job-card-box";

    // 职位详情页元素
    public static final String CHAT_BUTTON = "a.btn.btn-startchat";
    public static final String ERROR_CONTENT = "//div[@class='error-content']";

    // 聊天相关元素
    public static final String DIALOG_TITLE = "//div[@class='dialog-title']";
    public static final String DIALOG_CLOSE = "//i[@class='icon-close']";
    public static final String CHAT_INPUT = "//div[@id='chat-input']";
    public static final String DIALOG_CONTAINER = "//div[@class='dialog-container']";
    public static final String SEND_BUTTON = "//button[@type='send']";
    public static final String IMAGE_UPLOAD = "//div[@aria-label='发送图片']//input[@type='file']";
    public static final String SCROLL_LOAD_MORE = "//div[contains(text(), '滚动加载更多')]";

    // 消息列表页元素
    public static final String CHAT_LIST_ITEM = "//li[@role='listitem']";
    public static final String COMPANY_NAME_IN_CHAT = "//div[@class='title-box']/span[@class='name-box']//span[2]";
    public static final String LAST_MESSAGE = "//div[@class='gray last-msg']/span[@class='last-msg-text']";
    public static final String FINISHED_TEXT = "//div[@class='finished']";

    public static final String DIALOG_CON = ".dialog-con";
    public static final String LOGIN_BTNS = "//div[@class='btns']";
    public static final String PAGE_HEADER = "//h1";
    public static final String ERROR_PAGE_LOGIN = "//a[@ka='403_login']";

    /**
     * 等待元素出现（使用默认超时时间）
     * 
     * @param page     Playwright页面对象
     * @param selector 元素选择器
     * @return 元素定位器
     * @throws RuntimeException 如果元素未在超时时间内出现
     */
    public static Locator waitForElement(Page page, String selector) {
        return waitForElement(page, selector, 30000); // 默认30秒超时
    }

    /**
     * 等待元素出现（指定超时时间）
     * 
     * @param page     Playwright页面对象
     * @param selector 元素选择器
     * @param timeout  超时时间（毫秒）
     * @return 元素定位器
     * @throws RuntimeException 如果元素未在超时时间内出现
     */
    public static Locator waitForElement(Page page, String selector, int timeout) {
        if (page == null) {
            log.error("Page对象为空，无法等待元素");
            throw new IllegalArgumentException("Page对象不能为空");
        }

        try {
            Locator locator = page.locator(selector);
            locator.waitFor(new Locator.WaitForOptions().setTimeout(timeout));
            log.debug("元素已出现: {}", selector);
            return locator;
        } catch (Exception e) {
            log.error("等待元素超时: {} - {}", selector, e.getMessage());
            throw e;
        }
    }

    /**
     * 获取所有job-card-box元素并逐个点击
     * 
     * @param page        Playwright页面对象
     * @param delayMillis 每次点击之间的延迟时间（毫秒）
     * @return 成功点击的岗位数量
     */
    public static int clickAllJobCards(Page page, int delayMillis) {
        if (page == null) {
            log.error("Page对象为空，无法执行点击操作");
            return 0;
        }

        try {
            // 使用JOB_LIST_CONTAINER_CARDS定位器获取所有岗位卡片
            Locator jobCards = page.locator(JOB_LIST_CONTAINER_CARDS);
            int cardCount = jobCards.count();

            if (cardCount == 0) {
                log.warn("未找到任何job-card-box元素");
                return 0;
            }

            log.info("找到 {} 个岗位卡片，开始逐个点击", cardCount);
            int successCount = 0;

            // 遍历所有岗位卡片并点击
            for (int i = 0; i < cardCount; i++) {
                try {
                    Locator currentCard = jobCards.nth(i);

                    // 确保元素可见且可点击
                    if (currentCard.isVisible()) {
                        log.debug("正在点击第 {} 个岗位卡片", i + 1);
                        currentCard.click();
                        successCount++;

                        // 添加延迟，避免点击过快
                        if (delayMillis > 0) {
                            Thread.sleep(delayMillis);
                        }
                    } else {
                        log.warn("第 {} 个岗位卡片不可见，跳过", i + 1);
                    }
                } catch (Exception e) {
                    log.error("点击第 {} 个岗位卡片时发生错误: {}", i + 1, e.getMessage());
                }
            }

            log.info("岗位卡片点击完成，成功点击 {} 个，总共 {} 个", successCount, cardCount);
            return successCount;

        } catch (Exception e) {
            log.error("执行岗位卡片点击操作时发生异常: {}", e.getMessage(), e);
            return 0;
        }
    }

    /**
     * 判断用户是否已登录
     * 
     * 判断逻辑：
     * 1. 如果页面存在"登录/注册"按钮 -> 未登录
     * 2. 如果页面存在"消息"或"简历"链接 -> 已登录
     * 3. 如果都不存在或出现异常 -> 默认未登录
     * 
     * @param page Playwright页面对象
     * @return true表示已登录，false表示未登录
     */
    public static boolean isUserLoggedIn(Page page) {
        try {
            if (page == null) {
                log.error("Page对象为空，无法检查登录状态");
                return false;
            }
            
            log.debug("检查Boss直聘用户登录状态...");
            
            try {
                // 等待页面加载完成
                page.waitForLoadState();
                page.waitForTimeout(1500);
                
                // 方法1：检查是否存在"登录/注册"按钮（未登录特征）
                Locator loginButton = page.locator(HEADER_LOGIN_BTN);
                if (loginButton.count() > 0 && loginButton.isVisible()) {
                    log.debug("检测到'登录/注册'按钮，用户未登录");
                    return false;
                }
                
                // 方法2：检查是否存在"消息"链接（已登录特征）
                Locator messageLink = page.locator(HEADER_MESSAGE_LINK);
                if (messageLink.count() > 0 && messageLink.isVisible()) {
                    log.debug("检测到'消息'链接，用户已登录");
                    return true;
                }
                
                // 方法3：检查是否存在"简历"链接（已登录特征）
                Locator resumeLink = page.locator(HEADER_RESUME_LINK);
                if (resumeLink.count() > 0 && resumeLink.isVisible()) {
                    log.debug("检测到'简历'链接，用户已登录");
                    return true;
                }
                
                // 方法4：检查是否存在用户头像区域（已登录特征）
                Locator navFigure = page.locator(NAV_FIGURE);
                if (navFigure.count() > 0) {
                    // 进一步检查nav-figure中是否包含用户名（而非登录按钮）
                    String navText = navFigure.first().textContent();
                    if (navText != null && !navText.contains("登录")) {
                        log.debug("检测到用户头像区域，用户已登录");
                        return true;
                    }
                }
                
                log.warn("无法明确判断登录状态，默认为未登录");
                return false;
                
            } catch (Exception e) {
                log.debug("检查Boss直聘登录状态时发生异常: {}", e.getMessage());
                return false;
            }
            
        } catch (Exception e) {
            log.error("检查Boss直聘用户登录状态时发生异常", e);
            return false; // 出现异常时，默认未登录
        }
    }

}