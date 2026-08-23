package getjobs.modules.recruitment.application;

import getjobs.modules.ai.job.dto.JobMatchResult;
import getjobs.modules.ai.job.service.JobMatchAiService;
import getjobs.modules.recruitment.domain.RecruitmentJob;
import getjobs.repository.UserProfileRepository;
import getjobs.repository.entity.UserProfile;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;

/** Side-effect-free filtering and optional AI matching for discovered jobs. */
@Service
public class RecruitmentJobSelectionService {
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
        UserProfile profile = userProfileRepository.findAll().stream().findFirst().orElse(null);
        if (profile == null) {
            return jobs;
        }
        return jobs.stream()
                .filter(job -> !containsAny(job.title(), profile.getPositionBlacklist()))
                .filter(job -> !containsAny(job.company(), profile.getCompanyBlacklist()))
                .filter(job -> matchesProfile(job, profile))
                .toList();
    }

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
