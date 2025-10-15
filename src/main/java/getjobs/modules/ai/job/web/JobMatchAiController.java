package getjobs.modules.ai.job.web;

import getjobs.modules.ai.job.dto.JobMatchRequest;
import getjobs.modules.ai.job.service.JobMatchAiService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/ai/job")
public class JobMatchAiController {

    private final JobMatchAiService jobMatchAiService;

    public JobMatchAiController(JobMatchAiService jobMatchAiService) {
        this.jobMatchAiService = jobMatchAiService;
    }

    @PostMapping("/match")
    public boolean isMatch(@RequestBody JobMatchRequest request) {
        return jobMatchAiService.isMatch(request.getMyJd(), request.getJobDescription(), request.getPlatform());
    }
}
