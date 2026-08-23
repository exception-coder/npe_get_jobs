package getjobs.modules.recruitment.platform.job51;

import getjobs.modules.recruitment.domain.PlatformDescriptor;
import getjobs.modules.recruitment.browser.BrowserAutomationPort;
import getjobs.modules.recruitment.platform.AbstractPatchrightRecruitmentPlugin;
import getjobs.modules.recruitment.platform.PlatformDescriptors;
import org.springframework.stereotype.Component;

@Component
public class Job51RecruitmentPlatformPlugin extends AbstractPatchrightRecruitmentPlugin {
    private static final PlatformDescriptor DESCRIPTOR = PlatformDescriptors.full(
            "job51", "前程无忧", "mdi-account-tie", 30);

    public Job51RecruitmentPlatformPlugin(BrowserAutomationPort browserAutomation) {
        super(DESCRIPTOR, "https://login.51job.com/login.php", browserAutomation);
    }
}
