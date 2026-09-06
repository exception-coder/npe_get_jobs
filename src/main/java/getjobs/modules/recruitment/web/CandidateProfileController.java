package getjobs.modules.recruitment.web;

import getjobs.modules.recruitment.application.CandidateProfileService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Focused candidate profile endpoints for the recruitment workspace.
 */
@RestController
@RequestMapping("/api/recruitment/profile")
public class CandidateProfileController {
    private final CandidateProfileService candidateProfileService;

    public CandidateProfileController(CandidateProfileService candidateProfileService) {
        this.candidateProfileService = candidateProfileService;
    }

    @GetMapping
    public CandidateProfileResponse profile() {
        return response(candidateProfileService.profile());
    }

    @PutMapping("/introduction")
    public CandidateProfileResponse updateIntroduction(@RequestBody UpdateIntroductionRequest request) {
        return response(candidateProfileService.updateIntroduction(request.selfIntroduction()));
    }

    private CandidateProfileResponse response(CandidateProfileService.CandidateProfile profile) {
        return new CandidateProfileResponse(profile.selfIntroduction(), profile.introductionRequired());
    }

    /**
     * @param selfIntroduction user-authored candidate introduction; blank clears the value
     */
    public record UpdateIntroductionRequest(String selfIntroduction) {
    }

    /**
     * @param selfIntroduction persisted introduction, empty when missing
     * @param introductionRequired whether the workspace should prompt the user
     */
    public record CandidateProfileResponse(String selfIntroduction, boolean introductionRequired) {
    }
}
