package getjobs.modules.recruitment.browser;

import getjobs.modules.recruitment.domain.RecruitmentJob;
import getjobs.modules.recruitment.domain.RecruitmentPlatformId;

import java.util.List;

/** Command for inspecting contact readiness without clicking, typing, or sending. */
public record PrepareBrowserContactsCommand(
        RecruitmentPlatformId platformId,
        String sessionId,
        List<RecruitmentJob> jobs
) {
    public PrepareBrowserContactsCommand {
        jobs = List.copyOf(jobs);
    }
}
