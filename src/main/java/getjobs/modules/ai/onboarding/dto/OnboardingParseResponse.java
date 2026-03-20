package getjobs.modules.ai.onboarding.dto;

import lombok.Data;

import java.util.List;

@Data
public class OnboardingParseResponse {
    private String jobTitle;
    private String yearsOfExperience;
    private Integer minSalary;
    private Integer maxSalary;
    private List<String> skills;
    private String careerIntent;
    private List<String> domainExperience;
    private List<String> highlights;
    private List<String> jobBlacklist;
    private List<String> companyBlacklist;
}
