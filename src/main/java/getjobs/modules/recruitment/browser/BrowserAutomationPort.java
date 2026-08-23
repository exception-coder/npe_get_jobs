package getjobs.modules.recruitment.browser;

import getjobs.modules.recruitment.domain.RecruitmentPlatformId;

/** High-level browser boundary; no Playwright or Patchright types cross it. */
public interface BrowserAutomationPort {
    BrowserHealth health();

    BrowserSession openSession(OpenBrowserSessionCommand command);

    BrowserSessionStatus sessionStatus(RecruitmentPlatformId platformId, String sessionId);

    BrowserJobDiscoveryResult discoverJobs(DiscoverBrowserJobsCommand command);

    BrowserContactResult contactJobs(ContactBrowserJobsCommand command);
}
