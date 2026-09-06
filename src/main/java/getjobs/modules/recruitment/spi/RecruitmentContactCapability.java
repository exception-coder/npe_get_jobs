package getjobs.modules.recruitment.spi;

import getjobs.modules.recruitment.browser.BrowserContactResult;
import getjobs.modules.recruitment.domain.RecruitmentJob;

import java.util.List;

/** Explicitly confirmed platform contact or application capability. */
public interface RecruitmentContactCapability {
    BrowserContactResult contact(String sessionId, List<RecruitmentJob> jobs, String greeting);

    /** Applies per-attempt image consent; unsupported implementations fail closed. */
    default BrowserContactResult contact(String sessionId, List<RecruitmentJob> jobs, String greeting,
            getjobs.modules.recruitment.domain.ContactDeliveryOptions options) {
        if (options.sendResumeImage()) {
            throw new IllegalArgumentException("该平台暂不支持发送图片简历");
        }
        return contact(sessionId, jobs, greeting);
    }
}
