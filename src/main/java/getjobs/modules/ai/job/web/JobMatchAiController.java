package getjobs.modules.ai.job.web;

import getjobs.modules.ai.job.assembler.JobPromptAssembler;
import getjobs.modules.ai.job.dto.JobMatchRequest;
import getjobs.modules.ai.job.dto.JobMatchResult;
import getjobs.modules.ai.job.service.JobMatchAiService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/ai/job")
public class JobMatchAiController {

    private final JobMatchAiService jobMatchAiService;
    private final JobPromptAssembler jobPromptAssembler;

    public JobMatchAiController(JobMatchAiService jobMatchAiService, JobPromptAssembler jobPromptAssembler) {
        this.jobMatchAiService = jobMatchAiService;
        this.jobPromptAssembler = jobPromptAssembler;
    }

    @PostMapping("/match")
    public boolean isMatch(@RequestBody JobMatchRequest request) {
        return jobMatchAiService.isMatch(request.getMyJd(), request.getJobDescription());
    }

    @PostMapping("/match-with-reason")
    public JobMatchResult matchWithReason(@RequestBody JobMatchRequest request) {
        return jobMatchAiService.matchWithReason(request.getMyJd(), request.getJobDescription());
    }

    @GetMapping("/extra-rules")
    public List<String> getExtraRules() {
        return jobPromptAssembler.getExtraRules();
    }

    @PostMapping("/extra-rules")
    public Map<String, Object> saveExtraRules(@RequestBody List<String> rules) {
        jobPromptAssembler.setExtraRules(rules);
        return Map.of("success", true, "count", rules.size());
    }
}
