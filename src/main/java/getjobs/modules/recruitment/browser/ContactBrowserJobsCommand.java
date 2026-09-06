package getjobs.modules.recruitment.browser;

import getjobs.modules.recruitment.domain.RecruitmentJob;
import getjobs.modules.recruitment.domain.RecruitmentPlatformId;

import java.util.List;

/** Explicitly confirmed contact command sent to the browser adapter. */
public record ContactBrowserJobsCommand(
        RecruitmentPlatformId platformId,
        String sessionId,
        List<RecruitmentJob> jobs,
        boolean confirmContact,
        String greeting,
        long delayMs,
        getjobs.modules.recruitment.domain.ContactDeliveryOptions deliveryOptions
) {
    public ContactBrowserJobsCommand {
        jobs = List.copyOf(jobs);
        deliveryOptions = deliveryOptions == null
                ? getjobs.modules.recruitment.domain.ContactDeliveryOptions.DRAFT_ONLY : deliveryOptions;
    }

    public ContactBrowserJobsCommand(RecruitmentPlatformId platformId, String sessionId,
            List<RecruitmentJob> jobs, boolean confirmContact, String greeting, long delayMs) {
        this(platformId, sessionId, jobs, confirmContact, greeting, delayMs,
                getjobs.modules.recruitment.domain.ContactDeliveryOptions.DRAFT_ONLY);
    }
}
