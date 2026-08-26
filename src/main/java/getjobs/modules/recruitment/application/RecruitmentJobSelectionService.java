package getjobs.modules.recruitment.application;

import getjobs.modules.ai.job.dto.JobMatchResult;
import getjobs.modules.ai.job.service.JobMatchAiService;
import getjobs.modules.recruitment.domain.RecruitmentJob;
import getjobs.modules.recruitment.domain.RecruitmentGoalConditions;
import getjobs.repository.UserProfileRepository;
import getjobs.repository.entity.UserProfile;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/** Side-effect-free filtering and optional AI matching for discovered jobs. */
@Service
public class RecruitmentJobSelectionService {
    private static final Pattern SALARY_RANGE = Pattern.compile("(\\d{1,3})\\s*[-到至~]\\s*(\\d{1,3})\\s*[kK]");
    private final UserProfileRepository userProfileRepository;
    private final JobMatchAiService jobMatchAiService;

    public RecruitmentJobSelectionService(
            UserProfileRepository userProfileRepository,
            JobMatchAiService jobMatchAiService
    ) {
        this.userProfileRepository = userProfileRepository;
        this.jobMatchAiService = jobMatchAiService;
    }

    public List<RecruitmentJob> select(List<RecruitmentJob> jobs) {
        return select(jobs, null);
    }

    public List<RecruitmentJob> select(List<RecruitmentJob> jobs, RecruitmentGoalConditions goal) {
        UserProfile profile = userProfileRepository.findAll().stream().findFirst().orElse(null);
        return jobs.stream()
                .filter(job -> profile == null || !containsAny(job.title(), profile.getPositionBlacklist()))
                .filter(job -> profile == null || !containsAny(job.company(), profile.getCompanyBlacklist()))
                .filter(job -> goal == null || !containsAny(combinedText(job), goal.excludedKeywords()))
                .filter(job -> goal == null || goal.cities().isEmpty() || containsAny(job.city(), goal.cities()))
                .filter(job -> goal == null || salaryOverlaps(job.salary(), goal))
                .filter(job -> profile == null || matchesProfile(job, profile))
                .toList();
    }

    private String combinedText(RecruitmentJob job) {
        return String.join(" ", value(job.title()), value(job.company()), value(job.description()));
    }

    private String value(String value) { return value == null ? "" : value; }

    private boolean matchesProfile(RecruitmentJob job, UserProfile profile) {
        if (!Boolean.TRUE.equals(profile.getEnableAIJobMatchDetection())) {
            return true;
        }
        if (profile.getRole() == null || profile.getRole().isBlank()) {
            return true;
        }
        JobMatchResult result = jobMatchAiService.smartMatch(profile.getRole(), job.description(), job.title());
        return result.isMatched();
    }

    private boolean salaryOverlaps(String salary, RecruitmentGoalConditions goal) {
        if ((goal.minSalaryK() == null && goal.maxSalaryK() == null) || salary == null) return true;
        Matcher matcher = SALARY_RANGE.matcher(salary);
        if (!matcher.find()) return true;
        int jobMinimum = Integer.parseInt(matcher.group(1));
        int jobMaximum = Integer.parseInt(matcher.group(2));
        return (goal.minSalaryK() == null || jobMaximum >= goal.minSalaryK())
                && (goal.maxSalaryK() == null || jobMinimum <= goal.maxSalaryK());
    }

    private boolean containsAny(String value, List<String> blacklist) {
        if (value == null || blacklist == null || blacklist.isEmpty()) {
            return false;
        }
        String normalized = value.toLowerCase(Locale.ROOT);
        return blacklist.stream()
                .filter(item -> item != null && !item.isBlank())
                .map(item -> item.toLowerCase(Locale.ROOT))
                .anyMatch(normalized::contains);
    }
}
