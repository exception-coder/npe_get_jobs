package getjobs.modules.recruitment.spi;

import getjobs.modules.recruitment.domain.RecruitmentJob;
import getjobs.modules.recruitment.domain.RecruitmentGoalConditions;

/** Evidence-based job assessment; never performs external recruitment actions. */
public interface RecruitmentJobMatcher {
    /** Returns the job with a conservative, explainable assessment. */
    RecruitmentJob match(RecruitmentJob job, RecruitmentGoalConditions goal);
}
