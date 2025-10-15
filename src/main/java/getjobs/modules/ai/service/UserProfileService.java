package getjobs.modules.ai.service;

import getjobs.modules.ai.job.dto.UserProfileRequest;
import getjobs.repository.UserProfileRepository;
import getjobs.repository.entity.UserProfile;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 用户求职信息服务
 * 
 * @author getjobs
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class UserProfileService {

    private final UserProfileRepository userProfileRepository;

    /**
     * 保存用户求职信息
     * 
     * @param request 用户求职信息请求
     * @return 保存后的用户求职信息实体
     */
    @Transactional
    public UserProfile saveUserProfile(UserProfileRequest request) {
        UserProfile userProfile = new UserProfile();
        userProfile.setRole(request.getRole());
        userProfile.setYears(request.getYears());
        userProfile.setDomains(request.getDomains());
        userProfile.setCoreStack(request.getCoreStack());
        userProfile.setScale(request.getScale());
        userProfile.setAchievements(request.getAchievements());
        userProfile.setStrengths(request.getStrengths());
        userProfile.setImprovements(request.getImprovements());
        userProfile.setAvailability(request.getAvailability());
        userProfile.setLinks(request.getLinks());
        userProfile.setPositionBlacklist(request.getPositionBlacklist());
        userProfile.setCompanyBlacklist(request.getCompanyBlacklist());

        UserProfile saved = userProfileRepository.save(userProfile);
        log.info("保存用户求职信息成功，ID: {}, 角色: {}", saved.getId(), saved.getRole());
        
        return saved;
    }
}

