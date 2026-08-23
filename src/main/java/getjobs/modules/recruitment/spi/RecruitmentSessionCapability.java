package getjobs.modules.recruitment.spi;

import getjobs.modules.recruitment.browser.BrowserSession;
import getjobs.modules.recruitment.browser.BrowserSessionStatus;

/** Persistent session capability implemented by browser-backed platform plugins. */
public interface RecruitmentSessionCapability {
    BrowserSession openSession(String profile, boolean headless);

    BrowserSessionStatus sessionStatus(String sessionId);
}
