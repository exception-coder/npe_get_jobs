package getjobs.modules.recruitment.spi;

import getjobs.modules.recruitment.domain.RecruitmentGoalConditions;

/** Interprets free-form intent without leaking an LLM dependency into the application layer. */
public interface RecruitmentGoalInterpreter {
    String version();

    RecruitmentGoalConditions interpret(String rawGoal);
}
