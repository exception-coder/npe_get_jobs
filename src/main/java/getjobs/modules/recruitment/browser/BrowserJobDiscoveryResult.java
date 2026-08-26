package getjobs.modules.recruitment.browser;

import getjobs.modules.recruitment.domain.RecruitmentJob;

import java.util.List;

/** Normalized output of one platform discovery action. */
public record BrowserJobDiscoveryResult(
        List<RecruitmentJob> jobs,
        int discovered,
        boolean sideEffect,
        List<List<RecruitmentJob>> batches
) {
    public BrowserJobDiscoveryResult(List<RecruitmentJob> jobs, int discovered, boolean sideEffect) {
        this(jobs, discovered, sideEffect, List.of(jobs));
    }

    public BrowserJobDiscoveryResult {
        jobs = List.copyOf(jobs);
        batches = batches == null || batches.isEmpty()
                ? List.of(jobs)
                : batches.stream().map(List::copyOf).toList();
    }
}
