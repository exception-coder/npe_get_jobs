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
     * 评估职位匹配度
     * <p>
     * 基于候选人简历和职位描述，使用 AI 评估是否匹配。
     * </p>
     *
     * @param request 职位匹配请求
     * @return 匹配结果，包含是否匹配和判定原因
     */
    @PostMapping("/job-match")
    public ResponseEntity<JobMatchResult> matchJob(@RequestBody JobMatchRequest request) {
        JobMatchResult result = jobMatchAiService.matchWithReason(
                request.getMyJd(),
                request.getJobDescription(),
                request.getTemplateId() != null ? request.getTemplateId() : "job-match-v1");
        return ResponseEntity.ok(result);
    }
}
