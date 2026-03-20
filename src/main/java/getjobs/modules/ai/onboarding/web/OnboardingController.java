package getjobs.modules.ai.onboarding.web;

import getjobs.modules.ai.job_skill.service.JobSkillAnalysisAsyncService;
import getjobs.modules.ai.onboarding.dto.OnboardingParseRequest;
import getjobs.modules.ai.onboarding.dto.OnboardingParseResponse;
import getjobs.modules.ai.onboarding.service.OnboardingParseService;
import getjobs.repository.UserProfileRepository;
import getjobs.repository.entity.UserProfile;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/api/ai/onboarding")
@RequiredArgsConstructor
public class OnboardingController {

    private final OnboardingParseService onboardingParseService;
    private final UserProfileRepository userProfileRepository;
    private final JobSkillAnalysisAsyncService jobSkillAnalysisAsyncService;

    @PostMapping("/parse")
    public ResponseEntity<OnboardingParseResponse> parse(@RequestBody OnboardingParseRequest request) {
        OnboardingParseResponse response = onboardingParseService.parse(request.getDescription());
        return ResponseEntity.ok(response);
    }

    @PostMapping("/save-profile")
    @Transactional
    public ResponseEntity<Map<String, Object>> saveProfile(@RequestBody OnboardingParseResponse data) {
        Map<String, Object> response = new HashMap<>();
        UserProfile userProfile = userProfileRepository.findAll().stream()
                .findFirst()
                .orElse(new UserProfile());

        if (data.getJobTitle() != null) {
            userProfile.setJobTitle(data.getJobTitle());
            userProfile.setRole(data.getJobTitle());
        }
        if (data.getYearsOfExperience() != null) {
            userProfile.setYearsOfExperience(data.getYearsOfExperience());
        }
        if (data.getMinSalary() != null) {
            userProfile.setMinSalary(data.getMinSalary());
        }
        if (data.getMaxSalary() != null) {
            userProfile.setMaxSalary(data.getMaxSalary());
        }
        if (data.getSkills() != null) {
            userProfile.setSkills(data.getSkills());
            userProfile.setCoreStack(data.getSkills());
        }
        if (data.getCareerIntent() != null) {
            userProfile.setCareerIntent(data.getCareerIntent());
        }
        if (data.getDomainExperience() != null) {
            userProfile.setDomainExperience(String.join(",", data.getDomainExperience()));
        }
        if (data.getHighlights() != null) {
            userProfile.setHighlights(data.getHighlights());
        }

        UserProfile saved = userProfileRepository.save(userProfile);

        // 异步触发岗位技能分析，AI 打招呼内容由 analyzeJobSkillAsync 内部写入 aiGreetingMessage
        jobSkillAnalysisAsyncService.analyzeJobSkillAsync(saved.getId());

        response.put("success", true);
        response.put("message", "配置已保存，AI 分析进行中");
        return ResponseEntity.ok(response);
    }
}
