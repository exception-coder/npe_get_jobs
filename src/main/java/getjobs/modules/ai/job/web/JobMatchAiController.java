package getjobs.modules.ai.job.web;

import getjobs.modules.ai.job.assembler.JobPromptAssembler;
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

    private final JobPromptAssembler jobPromptAssembler;

    public JobMatchAiController(JobPromptAssembler jobPromptAssembler) {
        this.jobPromptAssembler = jobPromptAssembler;
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
