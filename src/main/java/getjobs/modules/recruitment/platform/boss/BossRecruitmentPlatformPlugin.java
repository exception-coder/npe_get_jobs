package getjobs.modules.recruitment.platform.boss;

import getjobs.modules.recruitment.domain.PlatformDescriptor;
import getjobs.modules.recruitment.browser.BrowserAutomationPort;
import getjobs.modules.recruitment.platform.AbstractPatchrightRecruitmentPlugin;
import getjobs.modules.recruitment.platform.PlatformDescriptors;
import org.springframework.stereotype.Component;

@Component
public class BossRecruitmentPlatformPlugin extends AbstractPatchrightRecruitmentPlugin {
    private static final PlatformDescriptor DESCRIPTOR = PlatformDescriptors.full(
            "boss", "BOSS直聘", "mdi-briefcase-account", 10);

    public BossRecruitmentPlatformPlugin(BrowserAutomationPort browserAutomation) {
        super(DESCRIPTOR, "https://www.zhipin.com/web/user/?ka=header-login", browserAutomation);
    }
}
