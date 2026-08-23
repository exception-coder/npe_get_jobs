package getjobs.modules.recruitment.platform.zhilian;

import getjobs.modules.recruitment.domain.PlatformDescriptor;
import getjobs.modules.recruitment.browser.BrowserAutomationPort;
import getjobs.modules.recruitment.platform.AbstractPatchrightRecruitmentPlugin;
import getjobs.modules.recruitment.platform.PlatformDescriptors;
import org.springframework.stereotype.Component;

@Component
public class ZhilianRecruitmentPlatformPlugin extends AbstractPatchrightRecruitmentPlugin {
    private static final PlatformDescriptor DESCRIPTOR = PlatformDescriptors.full(
            "zhilian", "智联招聘", "mdi-city", 20);

    public ZhilianRecruitmentPlatformPlugin(BrowserAutomationPort browserAutomation) {
        super(DESCRIPTOR, "https://passport.zhaopin.com/login", browserAutomation);
    }
}
