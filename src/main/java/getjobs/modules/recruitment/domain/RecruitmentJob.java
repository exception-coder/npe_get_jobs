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
        RecruitmentJobFacts facts
) {
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
