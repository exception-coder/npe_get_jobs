package getjobs.modules.recruitment.browser;

import getjobs.modules.recruitment.domain.RecruitmentPlatformId;

public record OpenBrowserSessionCommand(
        RecruitmentPlatformId platformId,
        String profile,
        String initialUrl,
        boolean headless
) {
}
