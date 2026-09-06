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
        List<RecruitmentJob> evaluated = jobs.stream().map(job -> matcher.match(job, goal)).toList();
        evidence.record(goal.additionalConditions().get("platform"), evaluated);
        return evaluated;
    }
}
