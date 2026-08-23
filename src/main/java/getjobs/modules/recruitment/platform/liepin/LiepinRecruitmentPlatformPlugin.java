package getjobs.modules.recruitment.platform.liepin;

import getjobs.modules.recruitment.domain.PlatformDescriptor;
import getjobs.modules.recruitment.browser.BrowserAutomationPort;
import getjobs.modules.recruitment.platform.AbstractPatchrightRecruitmentPlugin;
import getjobs.modules.recruitment.platform.PlatformDescriptors;
import org.springframework.stereotype.Component;

@Component
public class LiepinRecruitmentPlatformPlugin extends AbstractPatchrightRecruitmentPlugin {
    private static final PlatformDescriptor DESCRIPTOR = PlatformDescriptors.full(
            "liepin", "猎聘", "mdi-target-account", 40);

    public LiepinRecruitmentPlatformPlugin(BrowserAutomationPort browserAutomation) {
        super(DESCRIPTOR, "https://www.liepin.com/user/login/", browserAutomation);
    }
}
