package getjobs.modules.recruitment.spi;

import getjobs.modules.recruitment.browser.BrowserContactPreparationResult;
import getjobs.modules.recruitment.domain.RecruitmentJob;

import java.util.List;

/** Optional platform capability that inspects contact readiness without sending. */
public interface RecruitmentContactPreparationCapability {
    BrowserContactPreparationResult prepareContact(String sessionId, List<RecruitmentJob> jobs);
}
