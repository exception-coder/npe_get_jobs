package getjobs.modules.recruitment.spi;

import getjobs.modules.recruitment.browser.BrowserContactResult;
import getjobs.modules.recruitment.domain.RecruitmentJob;

import java.util.List;

/** Explicitly confirmed platform contact or application capability. */
public interface RecruitmentContactCapability {
    BrowserContactResult contact(String sessionId, List<RecruitmentJob> jobs, String greeting);
}
