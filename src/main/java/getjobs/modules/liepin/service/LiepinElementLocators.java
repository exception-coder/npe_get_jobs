package getjobs.modules.liepin.service;

import com.microsoft.playwright.Locator;
import com.microsoft.playwright.Page;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * 猎聘网站元素定位器
 * 用于定位猎聘网站上的各种元素
 *
 * @author loks666
 * 项目链接: <a href="https://github.com/loks666/get_jobs">https://github.com/loks666/get_jobs</a>
 */
@Slf4j
public class LiepinElementLocators {

    /** 未登录状态的菜单列表 (ul 标签)，使用 class 选择器 */
    public static final String NOT_LOGIN_MENU = "ul.header-quick-menu-not-login";

    /** 已登录状态的菜单列表 (ul 标签)，使用 class 选择器 */
    public static final String LOGGED_IN_MENU = "ul.header-quick-menu-login";

    /** HR信息区块容器，使用 class 选择器 */
    public static final String RECRUITER_CONTAINER = "section.recruiter-container";

    /** 聊一聊按钮，使用 class 选择器 */
    public static final String CHAT_BUTTON = "a.btn-chat";

    /** 聊天对话框的文本输入框，使用 class 选择器 */
    public static final String CHAT_INPUT_TEXTAREA = "textarea.__im_basic__textarea";

    /** 聊天对话框的发送按钮，使用 class 选择器 */
    public static final String CHAT_SEND_BUTTON = "button.__im_basic__basic-send-btn";

    /**
     * 检查是否需要登录
     * 通过检查不同登录状态下唯一的 ul 列表元素的 class 来判断
     *
     * @param page Playwright页面对象
     * @return true表示需要登录，false表示已登录
     */
    public static boolean isLoginRequired(Page page) {
        try {
            // 等待页面加载完成，确保所有元素都已加载
            log.debug("等待页面加载完成...");
            page.waitForLoadState();
            page.waitForTimeout(3000); // 等待DOM稳定

            log.debug("检查猎聘登录状态...");

            // 检查是否存在未登录状态的菜单
            Locator notLoginMenu = page.locator(NOT_LOGIN_MENU);
            if (notLoginMenu.isVisible()) {
                log.info("找到'header-quick-menu-not-login' class，判定为未登录状态");
                return true;
            }

            // 检查是否存在已登录状态的菜单
            Locator loggedInMenu = page.locator(LOGGED_IN_MENU);
            if (loggedInMenu.isVisible()) {
                log.info("找到'header-quick-menu-login' class，判定为已登录状态");
                return false;
            }

            // 如果以上都没有立即找到，可能页面正在加载或结构有变，增加等待后重试
            log.warn("无法立即判断登录状态，将等待5秒后重试...");
            page.waitForTimeout(5000);

            if (page.locator(NOT_LOGIN_MENU).isVisible()) {
                log.info("重试后找到'header-quick-menu-not-login' class，判定为未登录状态");
                return true;
            }

            if (page.locator(LOGGED_IN_MENU).isVisible()) {
                log.info("重试后找到'header-quick-menu-login' class，判定为已登录状态");
                return false;
            }

            log.error("无法明确判断猎聘的登录状态，默认需要登录。请检查页面元素定位器是否需要更新。");
            return true; // 无法判断时，为安全起见，默认需要登录

        } catch (Exception e) {
            log.error("检查猎聘登录状态时发生异常", e);
            return true; // 出现异常时，为安全起见，默认需要登录
        }
    }

    /**
     * 获取HR信息区块并点击"聊一聊"按钮
     * 
     * @param page Playwright页面对象
     * @return true表示点击成功，false表示点击失败
     */
    public static boolean clickChatWithRecruiter(Page page) {
        try {
            log.info("开始查找HR信息区块...");
            
            // 等待HR信息区块加载
            Locator recruiterContainer = page.locator(RECRUITER_CONTAINER);
            if (!recruiterContainer.isVisible()) {
                log.warn("未找到HR信息区块，可能该职位没有HR信息");
                return false;
            }
            
            log.info("找到HR信息区块，准备点击'聊一聊'按钮...");
            
            // 定位"聊一聊"按钮
            Locator chatButton = page.locator(CHAT_BUTTON);
            if (!chatButton.isVisible()) {
                log.warn("'聊一聊'按钮不可见");
                return false;
            }
            
            // 获取HR姓名（用于日志）
            try {
                String recruiterName = page.locator(RECRUITER_CONTAINER + " .name").textContent();
                log.info("准备与HR【{}】聊天", recruiterName);
            } catch (Exception e) {
                log.debug("无法获取HR姓名", e);
            }
            
            // 点击按钮
            chatButton.click();
            log.info("成功点击'聊一聊'按钮");
            
            // 等待页面响应
            page.waitForTimeout(2000);
            
            return true;
            
        } catch (Exception e) {
            log.error("点击'聊一聊'按钮时发生异常", e);
            return false;
        }
    }

    /**
     * 检查HR是否在线
     * 
     * @param page Playwright页面对象
     * @return true表示在线，false表示离线或无法判断
     */
    public static boolean isRecruiterOnline(Page page) {
        try {
            Locator onlineStatus = page.locator(RECRUITER_CONTAINER + " .online");
            boolean isOnline = onlineStatus.isVisible();
            log.debug("HR在线状态: {}", isOnline ? "在线" : "离线");
            return isOnline;
        } catch (Exception e) {
            log.debug("无法判断HR在线状态", e);
            return false;
        }
    }

    /**
     * 在聊天对话框中输入文本
     * 
     * @param page Playwright页面对象
     * @param message 要输入的文本内容
     * @return true表示输入成功，false表示输入失败
     */
    public static boolean inputChatMessage(Page page, String message) {
        return inputChatMessage(page, message, false);
    }

    /**
     * 在聊天对话框中输入文本
     * 
     * @param page Playwright页面对象
     * @param message 要输入的文本内容
     * @param autoSend 是否自动发送（按Enter键），true表示输入后自动发送，false表示只输入不发送
     * @return true表示操作成功，false表示操作失败
     */
    public static boolean inputChatMessage(Page page, String message, boolean autoSend) {
        try {
            if (message == null || message.trim().isEmpty()) {
                log.warn("输入的消息内容为空");
                return false;
            }

            log.info("开始在聊天对话框中输入文本: {}", message);
            
            // 等待聊天输入框加载
            Locator inputTextarea = page.locator(CHAT_INPUT_TEXTAREA);
            if (!inputTextarea.isVisible()) {
                log.warn("未找到聊天输入框，请确认是否已打开聊天窗口");
                return false;
            }
            
            // 点击输入框获取焦点
            inputTextarea.click();
            page.waitForTimeout(500);
            
            // 清空输入框
            inputTextarea.fill("");
            
            // 输入文本
            inputTextarea.fill(message);
            log.info("成功输入文本到聊天框");
            
            // 如果需要自动发送
            if (autoSend) {
                log.info("准备发送消息...");
                
                // 方式1：按Enter键发送
                inputTextarea.press("Enter");
                
                // 等待消息发送
                page.waitForTimeout(1000);
                
                log.info("消息已发送");
            }
            
            return true;
            
        } catch (Exception e) {
            log.error("在聊天对话框中输入文本时发生异常", e);
            return false;
        }
    }

    /**
     * 点击发送按钮发送消息
     * 
     * @param page Playwright页面对象
     * @return true表示点击成功，false表示点击失败
     */
    public static boolean clickSendButton(Page page) {
        try {
            log.info("准备点击发送按钮...");
            
            Locator sendButton = page.locator(CHAT_SEND_BUTTON);
            if (!sendButton.isVisible()) {
                log.warn("发送按钮不可见");
                return false;
            }
            
            // 检查按钮是否被禁用
            if (sendButton.isDisabled()) {
                log.warn("发送按钮处于禁用状态，可能输入框为空");
                return false;
            }
            
            sendButton.click();
            log.info("成功点击发送按钮");
            
            // 等待消息发送
            page.waitForTimeout(1000);
            
            return true;
            
        } catch (Exception e) {
            log.error("点击发送按钮时发生异常", e);
            return false;
        }
    }

    /**
     * 判断用户是否已登录
     * 通过检测页面中是否存在"登录/注册"关键字来判断
     * 
     * @param page Playwright页面对象
     * @return true表示已登录，false表示未登录
     */
    public static boolean isUserLoggedIn(Page page) {
        try {
            log.debug("检查猎聘用户登录状态...");
            
            // 等待页面加载完成
            page.waitForLoadState();
            page.waitForTimeout(2000); // 等待DOM稳定
            
            // 方式1: 通过检测"登录/注册"文本来判断登录状态
            // 如果页面中存在"登录/注册"文本，说明用户未登录
            Locator loginText = page.getByText("登录/注册");
            
            if (loginText.count() > 0 && loginText.first().isVisible()) {
                log.info("检测到'登录/注册'文本，判定为未登录状态");
                return false; // 未登录
            }
            
            // 方式2: 检查是否跳转到登录页面（通过登录框判断）
            // 如果页面中存在 login-box 元素，说明在登录页面，用户未登录
            Locator loginBox = page.locator("div.login-box");
            if (loginBox.count() > 0 && loginBox.first().isVisible()) {
                log.info("检测到登录页面容器（login-box），判定为未登录状态");
                return false; // 未登录
            }
            
            log.info("未检测到登录相关元素，判定为已登录状态");
            return true; // 已登录
            
        } catch (Exception e) {
            log.error("检查猎聘用户登录状态时发生异常", e);
            return false; // 出现异常时，默认未登录
        }
    }

    // ==================== 分页相关方法 ====================

    /**
     * 根据页码点击分页元素
     * 在class="list-pagination-box"的div元素中查找指定页码的li元素并点击
     * 
     * @param page       Playwright页面对象
     * @param pageNumber 要点击的页码
     * @return true表示点击成功，false表示未找到对应页码或点击失败
     */
    public static boolean clickPageNumber(Page page, int pageNumber) {
        // 添加重试机制，最多重试2次
        int maxRetries = 2;
        Exception lastException = null;
        
        for (int retry = 0; retry <= maxRetries; retry++) {
            try {
                if (retry > 0) {
                    log.info("重试点击页码 {} (第 {}/{} 次)", pageNumber, retry, maxRetries);
                    // 重试前等待一下，让页面状态稳定
                    page.waitForTimeout(2000);
                }
                
                // 检查 Page 对象是否已关闭
                if (page.isClosed()) {
                    log.error("Page 对象已关闭，无法点击页码 {}", pageNumber);
                    return false;
                }
                
                // 首先等待分页元素出现
                try {
                    page.waitForSelector("div.list-pagination-box", new Page.WaitForSelectorOptions().setTimeout(8000));
                } catch (Exception e) {
                    log.error("等待分页元素出现超时: {}", e.getMessage());
                    // 如果是超时，不进行重试
                    return false;
                }
            
                // 查找class="list-pagination-box"的div元素
                Locator pagerBox = page.locator("div.list-pagination-box");
                
                if (pagerBox.count() == 0) {
                    log.error("未找到分页元素 div.list-pagination-box");
                    return false;
                }

                // 查找ant-pagination容器
                Locator paginationElement = pagerBox.locator("ul.ant-pagination");
                
                if (paginationElement.count() == 0) {
                    log.error("未找到分页容器 ul.ant-pagination");
                    return false;
                }

                // 查找指定页码的元素
                String pageItemSelector = "li.ant-pagination-item-" + pageNumber;
                Locator pageElement = paginationElement.locator(pageItemSelector);

                if (pageElement.count() == 0) {
                    log.info("未找到页码为 {} 的分页元素，可能已到达最后一页", pageNumber);
                    return false;
                }

                // 检查元素是否已经是当前激活状态
                if (pageElement.getAttribute("class").contains("ant-pagination-item-active")) {
                    log.info("页码 {} 已经是当前激活状态，无需点击", pageNumber);
                    return true;
                }

                // 确保元素可见且可点击
                pageElement.scrollIntoViewIfNeeded();
                
                // 在点击之前添加随机延迟3-5秒，模拟真实用户行为
                Random random = new Random();
                int delay = 3000 + random.nextInt(2001); // 3000-5000毫秒之间的随机延迟
                log.info("准备点击页码 {}，随机延迟 {} 毫秒", pageNumber, delay);
                page.waitForTimeout(delay);
                
                // 再次检查 Page 对象是否仍然有效
                if (page.isClosed()) {
                    log.error("Page 对象在延迟等待期间被关闭，无法点击页码 {}", pageNumber);
                    return false;
                }
                
                // 点击页码元素
                pageElement.click();
                
                // 等待页面状态变化，确保点击生效
                try {
                    // 等待当前页码变为激活状态
                    String activePageSelector = "li.ant-pagination-item-" + pageNumber + ".ant-pagination-item-active";
                    page.waitForSelector("div.list-pagination-box " + activePageSelector, 
                        new Page.WaitForSelectorOptions().setTimeout(10000));
                    log.info("成功点击页码: {}，页面已切换", pageNumber);
                } catch (Exception e) {
                    log.warn("等待页码 {} 激活状态超时，但点击操作已执行: {}", pageNumber, e.getMessage());
                }
                
                // 等待页面内容加载
                page.waitForLoadState();
                page.waitForTimeout(2000);
                
                return true;

            } catch (com.microsoft.playwright.PlaywrightException e) {
                lastException = e;
                String errorMsg = e.getMessage();
                
                // 检查是否是资源清理相关的异常
                if (errorMsg != null && (errorMsg.contains("Cannot find parent object") || 
                                        errorMsg.contains("Object doesn't exist"))) {
                    log.warn("检测到 Playwright 资源异常 (尝试 {}/{}): {}", retry + 1, maxRetries + 1, errorMsg);
                    
                    // 如果还有重试机会，继续重试
                    if (retry < maxRetries) {
                        log.info("页面状态可能不稳定，等待后重试...");
                        continue;
                    }
                }
                
                // 其他异常直接抛出
                log.error("点击页码 {} 时发生 Playwright 异常: {}", pageNumber, errorMsg);
                return false;
                
            } catch (Exception e) {
                log.error("点击页码 {} 时发生未预期的错误: {}", pageNumber, e.getMessage(), e);
                return false;
            }
        }
        
        // 所有重试都失败了
        log.error("点击页码 {} 失败，已重试 {} 次。最后异常: {}", 
                 pageNumber, maxRetries, lastException != null ? lastException.getMessage() : "未知");
        return false;
    }

    /**
     * 获取当前激活的页码
     * 查找class="list-pagination-box"中带有"ant-pagination-item-active"类的li元素，获取其页码值
     * 
     * @param page Playwright页面对象
     * @return 当前激活的页码，如果未找到则返回-1
     */
    public static int getCurrentPageNumber(Page page) {
        try {
            // 查找分页容器
            Locator pagerBox = page.locator("div.list-pagination-box");
            
            if (pagerBox.count() == 0) {
                log.error("未找到分页元素 div.list-pagination-box");
                return -1;
            }

            // 查找当前激活的页码元素
            Locator activePageElement = pagerBox.locator("li.ant-pagination-item-active");
            
            if (activePageElement.count() > 0) {
                String pageText = activePageElement.textContent().trim();
                try {
                    int currentPage = Integer.parseInt(pageText);
                    log.info("当前激活页码: {}", currentPage);
                    return currentPage;
                } catch (NumberFormatException e) {
                    log.error("解析当前页码失败: {}", pageText);
                    return -1;
                }
            }

            log.error("未找到当前激活的页码元素");
            return -1;

        } catch (Exception e) {
            log.error("获取当前页码时发生错误: {}", e.getMessage());
            return -1;
        }
    }

    /**
     * 获取所有可见的页码列表
     * 从class="list-pagination-box"的div元素中获取所有li.ant-pagination-item元素的页码值
     * 
     * @param page Playwright页面对象
     * @return 所有可见页码的列表，如果出错则返回空列表
     */
    public static List<Integer> getVisiblePageNumbers(Page page) {
        List<Integer> pageNumbers = new ArrayList<>();
        
        try {
            // 查找分页容器
            Locator pagerBox = page.locator("div.list-pagination-box");
            
            if (pagerBox.count() == 0) {
                log.error("未找到分页元素 div.list-pagination-box");
                return pageNumbers;
            }

            // 获取所有页码元素
            Locator pageElements = pagerBox.locator("li.ant-pagination-item");
            int elementCount = pageElements.count();
            
            for (int i = 0; i < elementCount; i++) {
                Locator pageElement = pageElements.nth(i);
                String pageText = pageElement.textContent().trim();
                
                try {
                    int pageNumber = Integer.parseInt(pageText);
                    pageNumbers.add(pageNumber);
                } catch (NumberFormatException e) {
                    log.warn("跳过非数字页码: {}", pageText);
                }
            }
            
            log.info("获取到可见页码列表: {}", pageNumbers);

        } catch (Exception e) {
            log.error("获取可见页码列表时发生错误: {}", e.getMessage());
        }
        
        return pageNumbers;
    }
}
