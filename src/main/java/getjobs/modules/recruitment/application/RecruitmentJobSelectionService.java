package getjobs.modules.recruitment.application;

import getjobs.modules.recruitment.domain.RecruitmentJob;
import getjobs.modules.recruitment.domain.RecruitmentGoalConditions;
import getjobs.modules.recruitment.spi.RecruitmentJobMatcher;
import org.springframework.stereotype.Service;

import java.util.List;

/** Returns visible recommendations, including uncertain and rejected jobs with their reasons. */
@Service
public class RecruitmentJobSelectionService {
    private final RecruitmentJobMatcher matcher;
    private final RecruitmentMatchEvidenceService evidence;

    public RecruitmentJobSelectionService(RecruitmentJobMatcher matcher, RecruitmentMatchEvidenceService evidence) {
        this.matcher = matcher;
        this.evidence = evidence;
    }

    public List<RecruitmentJob> select(List<RecruitmentJob> jobs, RecruitmentGoalConditions goal) {
        if (goal == null || !goal.additionalConditions().containsKey("intentCard")) {
            throw new IllegalArgumentException("请先确认求职意向卡");
        }
        String platform = goal.additionalConditions().get("platform");
        var cached = evidence.reusableRejections(platform, jobs, goal);
        List<RecruitmentJob> evaluated = new java.util.ArrayList<>(jobs.size());
        List<RecruitmentJob> fresh = new java.util.ArrayList<>(jobs.size());
        for (RecruitmentJob job : jobs) {
            RecruitmentJob result = cached.get(job.platformJobId());
            if (result == null) {
                result = matcher.match(job, goal);
                fresh.add(result);
            }
            evaluated.add(result);
        }
        evidence.record(platform, fresh, goal);
        return List.copyOf(evaluated);
    }
}
