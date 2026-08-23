package getjobs.modules.recruitment.browser;

import getjobs.modules.recruitment.domain.RecruitmentJob;

import java.util.List;

/** Normalized output of one platform discovery action. */
public record BrowserJobDiscoveryResult(List<RecruitmentJob> jobs, int discovered, boolean sideEffect) {
    public BrowserJobDiscoveryResult {
        jobs = List.copyOf(jobs);
    }
}
