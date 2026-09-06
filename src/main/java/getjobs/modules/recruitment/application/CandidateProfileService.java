package getjobs.modules.recruitment.application;

import getjobs.repository.UserProfileRepository;
import getjobs.repository.entity.UserProfile;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Maintains platform-neutral candidate profile facts used by the recruitment workflow.
 */
@Service
public class CandidateProfileService {
    private static final int MAX_INTRODUCTION_LENGTH = 500;

    private final UserProfileRepository userProfileRepository;

    public CandidateProfileService(UserProfileRepository userProfileRepository) {
        this.userProfileRepository = userProfileRepository;
    }

    /**
     * Returns the current candidate introduction without generating a fallback value.
     *
     * @return current candidate profile projection
     */
    @Transactional(readOnly = true)
    public CandidateProfile profile() {
        return userProfileRepository.findFirstByOrderByIdAsc()
                .map(profile -> candidateProfile(profile.getSelfIntroduction()))
                .orElseGet(() -> candidateProfile(null));
    }

    /**
     * Persists a user-authored introduction. Blank content intentionally restores the missing state.
     *
     * @param selfIntroduction user-authored introduction
     * @return updated candidate profile projection
     */
    @Transactional
    public CandidateProfile updateIntroduction(String selfIntroduction) {
        String normalized = normalize(selfIntroduction);
        UserProfile profile = userProfileRepository.findFirstByOrderByIdAsc().orElseGet(UserProfile::new);
        profile.setSelfIntroduction(normalized.isEmpty() ? null : normalized);
        userProfileRepository.save(profile);
        return candidateProfile(normalized);
    }

    private String normalize(String selfIntroduction) {
        String normalized = selfIntroduction == null ? "" : selfIntroduction.trim();
        if (normalized.length() > MAX_INTRODUCTION_LENGTH) {
            throw new IllegalArgumentException("candidate introduction must not exceed 500 characters");
        }
        return normalized;
    }

    private CandidateProfile candidateProfile(String selfIntroduction) {
        String normalized = selfIntroduction == null ? "" : selfIntroduction.trim();
        return new CandidateProfile(normalized, normalized.isEmpty());
    }

    /**
     * Read model for the candidate profile onboarding state.
     *
     * @param selfIntroduction user-authored introduction, empty when missing
     * @param introductionRequired whether the onboarding prompt should be shown
     */
    public record CandidateProfile(String selfIntroduction, boolean introductionRequired) {
    }
}
