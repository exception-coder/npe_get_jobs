package getjobs.modules.ai.job_skill.service;

import getjobs.modules.ai.job_skill.dto.JobSkillRequest;
import getjobs.modules.ai.job_skill.dto.JobSkillResponse;
import getjobs.repository.UserProfileRepository;
import getjobs.repository.entity.UserProfile;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

/**
 * 岗位技能分析异步服务
 * <p>
 * 用于异步执行 AI 岗位技能分析，避免阻塞主流程。
 * </p>
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class JobSkillAnalysisAsyncService {

    private final JobSkillService jobSkillService;
    private final UserProfileRepository userProfileRepository;

    /**
     * 异步触发岗位技能分析
     * <p>
     * 使用 @Async 注解标记为异步方法，方法将在专用的 AI 分析线程池中执行。
     * </p>
     *
     * @param userProfileId 用户配置 ID
     */
    @Async("aiAnalysisExecutor")
    @Transactional
    public void analyzeJobSkillAsync(Long userProfileId) {
        try {
            log.info("开始异步执行岗位技能分析，userProfileId={}", userProfileId);

            // 重新从数据库获取最新的 UserProfile
            UserProfile userProfile = userProfileRepository.findById(userProfileId)
                    .orElseThrow(() -> new IllegalArgumentException("UserProfile not found: " + userProfileId));

            // 检查是否有必要的信息
            String jobTitle = userProfile.getJobTitle();
            String yearsOfExperience = userProfile.getYearsOfExperience();

            // 如果没有岗位名称，尝试使用旧字段
            if (jobTitle == null || jobTitle.trim().isEmpty()) {
                jobTitle = userProfile.getRole();
            }

            // 如果没有工作年限，尝试使用旧字段
            if (yearsOfExperience == null || yearsOfExperience.trim().isEmpty()) {
                Integer years = userProfile.getYears();
                if (years != null) {
                    yearsOfExperience = years + "年";
                }
            }

            // 如果没有必要的信息，跳过 AI 分析
            if (jobTitle == null || jobTitle.trim().isEmpty()) {
                log.debug("跳过岗位技能分析：缺少岗位名称");
                return;
            }

            if (yearsOfExperience == null || yearsOfExperience.trim().isEmpty()) {
                log.debug("跳过岗位技能分析：缺少工作年限");
                return;
            }

            // 构建 AI 分析请求
            JobSkillRequest request = new JobSkillRequest();
            request.setJobTitle(jobTitle);
            request.setExperienceYears(yearsOfExperience);
            request.setPersonalStrengths(userProfile.getHighlights());

            log.info("触发岗位技能分析 - jobTitle={}, experienceYears={}",
                    jobTitle, yearsOfExperience);

            // 调用 AI 分析（耗时操作）
            JobSkillResponse aiResult = jobSkillService.analyze(request);

            // 更新 UserProfile 的 AI 分析结果
            userProfile.setAiInferredJobTitle(aiResult.getInferredJobTitle());
            userProfile.setAiJobLevel(aiResult.getJobLevel());
            userProfile.setAiTechStack(aiResult.getTechStack());
            userProfile.setAiHotIndustries(aiResult.getHotIndustries());
            userProfile.setAiRelatedDomains(aiResult.getRelatedDomains());
            userProfile.setAiGreetingMessage(aiResult.getGreetingMessage());

            // 设置更新时间
            userProfile.setUpdatedAt(LocalDateTime.now());

            // 保存 AI 分析结果
            userProfileRepository.save(userProfile);

            log.info("岗位技能分析完成并保存成功 - userProfileId={}, inferredTitle={}",
                    userProfileId, aiResult.getInferredJobTitle());

        } catch (Exception e) {
            log.error("异步执行岗位技能分析失败 - userProfileId={}", userProfileId, e);
            // 异常不抛出，避免影响其他异步任务
        }
    }
}
