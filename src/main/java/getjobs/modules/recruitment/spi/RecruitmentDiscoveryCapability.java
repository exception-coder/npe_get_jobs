package getjobs.modules.recruitment.spi;

import getjobs.modules.recruitment.application.RecruitmentSearchPlan;
import getjobs.modules.recruitment.browser.BrowserJobDiscoveryResult;

/** Platform job discovery capability. */
public interface RecruitmentDiscoveryCapability {
    BrowserJobDiscoveryResult discover(String sessionId, RecruitmentSearchPlan plan);
}
