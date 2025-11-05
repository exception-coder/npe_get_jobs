package getjobs.modules.ai.web;

import getjobs.modules.ai.greeting.dto.GreetingRequest;
import getjobs.modules.ai.greeting.dto.GreetingResponse;
import getjobs.modules.ai.greeting.service.GreetingService;
import getjobs.modules.ai.job.dto.JobMatchResult;
import getjobs.modules.ai.job.service.JobMatchAiService;
import getjobs.modules.ai.web.dto.JobMatchRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * AI 能力 REST API
 * <p>
 * 提供 Greeting（招呼语生成）和 Job Matching（职位匹配）两个 LLM 能力的调用接口。
 * </p>
 */
@RestController
@RequestMapping("/api/ai")
@RequiredArgsConstructor
public class AiController {

    private final GreetingService greetingService;
    private final JobMatchAiService jobMatchAiService;

    /**
     * 生成个性化招呼语
     * <p>
     * 基于候选人简历和职位描述，生成一句个性化的招呼语。
     * </p>
     *
     * @param request 招呼语生成请求
     * @return 生成的招呼语响应
     */
    @PostMapping("/greeting")
    public ResponseEntity<GreetingResponse> generateGreeting(@RequestBody GreetingRequest request) {
        GreetingResponse response = greetingService.generate(request);
        return ResponseEntity.ok(response);
    }

    /**
     * 评估职位匹配度（智能匹配）
     * <p>
     * 基于候选人简历和职位信息，使用 AI 评估是否匹配。
     * 会根据是否有职位描述自动选择匹配策略：
     * - 有完整职位描述：使用完整描述匹配（高置信度）
     * - 仅有职位名称：使用职位名称推断匹配（低置信度）
     * </p>
     *
     * @param request 职位匹配请求
     * @return 匹配结果，包含是否匹配、判定原因和置信度
     */
    @PostMapping("/job-match")
    public ResponseEntity<JobMatchResult> matchJob(@RequestBody JobMatchRequest request) {
        JobMatchResult result;

        // 如果指定了 templateId，使用指定的模板；否则使用智能匹配
        if (request.getTemplateId() != null && !request.getTemplateId().trim().isEmpty()) {
            // 使用指定的模板进行匹配
            if (request.getJobDescription() != null && !request.getJobDescription().trim().isEmpty()) {
                result = jobMatchAiService.matchWithReason(
                        request.getMyJd(),
                        request.getJobDescription(),
                        request.getTemplateId());
            } else if (request.getJobTitle() != null && !request.getJobTitle().trim().isEmpty()) {
                result = jobMatchAiService.matchByTitle(
                        request.getMyJd(),
                        request.getJobTitle(),
                        request.getTemplateId());
            } else {
                throw new IllegalArgumentException("Either jobDescription or jobTitle must be provided");
            }
        } else {
            // 智能匹配：自动选择策略
            result = jobMatchAiService.smartMatch(
                    request.getMyJd(),
                    request.getJobDescription(),
                    request.getJobTitle());
        }

        return ResponseEntity.ok(result);
    }
}
