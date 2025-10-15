package getjobs.modules.ai.web;

import getjobs.modules.ai.job.dto.PromptRenderRequest;
import getjobs.modules.ai.job.dto.PromptTemplateDto;
import getjobs.modules.ai.job.dto.UserProfileRequest;
import getjobs.modules.ai.service.AiPromptService;
import getjobs.modules.ai.service.UserProfileService;
import getjobs.repository.entity.UserProfile;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ai")
@RequiredArgsConstructor
public class AiPromptController {

    private final AiPromptService aiPromptService;
    private final UserProfileService userProfileService;

    @GetMapping
    public ResponseEntity<List<PromptTemplateDto>> getAllPromptTemplates() {
        return ResponseEntity.ok(aiPromptService.getAllPromptTemplates());
    }

    @GetMapping("/prompt/{name}")
    public ResponseEntity<PromptTemplateDto> getPromptTemplate(@PathVariable String name) {
        return aiPromptService.getPromptTemplate(name)
                .map(aiPromptService::convertToDto)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/prompt/render")
    public ResponseEntity<String> renderPrompt(@RequestBody PromptRenderRequest request) {
        try {
            String renderedPrompt = aiPromptService.renderPrompt(request.getName(), request.getVariables());
            return ResponseEntity.ok(renderedPrompt);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.notFound().build();
        }
    }


    /**
     * 保存用户求职基本信息
     * 
     * @param request 用户求职信息请求
     * @return 保存后的用户求职信息
     */
    @PostMapping("/profile")
    public ResponseEntity<UserProfile> saveUserProfile(@RequestBody UserProfileRequest request) {
        UserProfile savedProfile = userProfileService.saveUserProfile(request);
        return ResponseEntity.ok(savedProfile);
    }
}
