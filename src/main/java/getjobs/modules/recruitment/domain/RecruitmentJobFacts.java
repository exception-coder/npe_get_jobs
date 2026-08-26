package getjobs.modules.recruitment.domain;

import java.util.List;

/** Platform-neutral facts available from a recruitment search response. */
public record RecruitmentJobFacts(
        String experience,
        String degree,
        String companyIndustry,
        String companyStage,
        String companyScale,
        String recruiterName,
        String recruiterTitle,
        String recruiterId,
        String companyId,
        String securityId,
        List<String> labels,
        List<String> skills,
        List<String> benefits
) {
    public RecruitmentJobFacts {
        labels = copy(labels);
        skills = copy(skills);
        benefits = copy(benefits);
    }

    public static RecruitmentJobFacts empty() {
        return new RecruitmentJobFacts(null, null, null, null, null, null, null,
                null, null, null, List.of(), List.of(), List.of());
    }

    private static List<String> copy(List<String> values) {
        return values == null ? List.of() : List.copyOf(values);
    }
}
