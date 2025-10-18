package getjobs.modules.ai.web;

import getjobs.modules.ai.job.dto.UserProfileRequest;
import getjobs.modules.ai.service.UserProfileService;
import getjobs.repository.entity.UserProfile;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * 用户求职信息 REST API
 */
@RestController
@RequestMapping("/api/ai/profile")
@RequiredArgsConstructor
public class UserProfileController {

    private final UserProfileService userProfileService;

    /**
     * 保存用户求职基本信息
     * 
     * @param request 用户求职信息请求
     * @return 保存后的用户求职信息
     */
    @PostMapping
    public ResponseEntity<UserProfile> saveUserProfile(@RequestBody UserProfileRequest request) {
        UserProfile savedProfile = userProfileService.saveUserProfile(request);
        return ResponseEntity.ok(savedProfile);
    }
}
