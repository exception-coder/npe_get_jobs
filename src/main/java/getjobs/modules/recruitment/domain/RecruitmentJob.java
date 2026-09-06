package getjobs.modules.recruitment.domain;

/** Platform-neutral job returned by a recruitment adapter. */
public record RecruitmentJob(
        String platformJobId,
        String title,
        String company,
        String city,
        String salary,
        String description,
        String href,
        RecruitmentJobFacts facts,
        IntentMatchResult intentMatch
) {
    public RecruitmentJob(String platformJobId, String title, String company, String city, String salary,
                          String description, String href, RecruitmentJobFacts facts) {
        this(platformJobId, title, company, city, salary, description, href, facts, null);
    }
    public RecruitmentJob(
            String platformJobId,
            String title,
            String company,
            String city,
            String salary,
            String description,
            String href
    ) {
        this(platformJobId, title, company, city, salary, description, href, RecruitmentJobFacts.empty());
    }

    public RecruitmentJob {
        facts = facts == null ? RecruitmentJobFacts.empty() : facts;
    }
}
