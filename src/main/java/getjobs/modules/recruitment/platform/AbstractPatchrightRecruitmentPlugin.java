package getjobs.modules.recruitment.platform;

import getjobs.modules.recruitment.application.RecruitmentSearchPlan;
import getjobs.modules.recruitment.browser.BrowserAutomationPort;
import getjobs.modules.recruitment.browser.BrowserContactResult;
import getjobs.modules.recruitment.browser.BrowserContactPreparationResult;
import getjobs.modules.recruitment.browser.BrowserJobDiscoveryResult;
import getjobs.modules.recruitment.browser.BrowserSession;
import getjobs.modules.recruitment.browser.BrowserSessionStatus;
import getjobs.modules.recruitment.browser.ContactBrowserJobsCommand;
import getjobs.modules.recruitment.browser.DiscoverBrowserJobsCommand;
import getjobs.modules.recruitment.browser.OpenBrowserSessionCommand;
import getjobs.modules.recruitment.browser.PrepareBrowserContactsCommand;
import getjobs.modules.recruitment.domain.PlatformDescriptor;
import getjobs.modules.recruitment.domain.RecruitmentJob;
import getjobs.modules.recruitment.spi.RecruitmentContactCapability;
import getjobs.modules.recruitment.spi.RecruitmentContactPreparationCapability;
import getjobs.modules.recruitment.spi.RecruitmentDiscoveryCapability;
import getjobs.modules.recruitment.spi.RecruitmentPlatformPlugin;
import getjobs.modules.recruitment.spi.RecruitmentSessionCapability;

import java.util.List;

/** Shared Java-side adapter for platform actions implemented inside the Node plugin. */
public abstract class AbstractPatchrightRecruitmentPlugin implements RecruitmentPlatformPlugin,
        RecruitmentSessionCapability, RecruitmentDiscoveryCapability,
        RecruitmentContactPreparationCapability, RecruitmentContactCapability {
    private static final int DEFAULT_MAX_SCROLLS = 1;
    private static final int DEFAULT_JOB_LIMIT = 100;
    private static final long DEFAULT_CONTACT_DELAY_MS = 3_000L;

    private final PlatformDescriptor descriptor;
    private final String loginUrl;
    private final BrowserAutomationPort browserAutomation;

    protected AbstractPatchrightRecruitmentPlugin(
            PlatformDescriptor descriptor,
            String loginUrl,
            BrowserAutomationPort browserAutomation
    ) {
        this.descriptor = descriptor;
        this.loginUrl = loginUrl;
        this.browserAutomation = browserAutomation;
    }

    @Override
    public final PlatformDescriptor descriptor() {
        return descriptor;
    }

    @Override
    public final String loginUrl() {
        return loginUrl;
    }

    @Override
    public final BrowserSession openSession(String profile, boolean headless) {
        return browserAutomation.openSession(new OpenBrowserSessionCommand(
                descriptor.id(), profile, loginUrl, headless));
    }

    @Override
    public final BrowserSessionStatus sessionStatus(String sessionId) {
        return browserAutomation.sessionStatus(descriptor.id(), sessionId);
    }

    @Override
    public final BrowserJobDiscoveryResult discover(String sessionId, RecruitmentSearchPlan plan) {
        return browserAutomation.discoverJobs(new DiscoverBrowserJobsCommand(
                descriptor.id(), sessionId, plan.searches(), plan.filters(),
                maxDiscoveryScrolls(), discoveryJobLimit()));
    }

    /** Returns the maximum number of incremental-load attempts for this platform. */
    protected int maxDiscoveryScrolls() {
        return DEFAULT_MAX_SCROLLS;
    }

    /** Returns the maximum number of jobs collected for one discovery run. */
    protected int discoveryJobLimit() {
        return DEFAULT_JOB_LIMIT;
    }

    @Override
    public final BrowserContactResult contact(String sessionId, List<RecruitmentJob> jobs, String greeting) {
        return browserAutomation.contactJobs(new ContactBrowserJobsCommand(
                descriptor.id(), sessionId, jobs, true, greeting, DEFAULT_CONTACT_DELAY_MS));
    }

    @Override
    public final BrowserContactPreparationResult prepareContact(
            String sessionId,
            List<RecruitmentJob> jobs
    ) {
        return browserAutomation.prepareContacts(new PrepareBrowserContactsCommand(
                descriptor.id(), sessionId, jobs));
    }
}
