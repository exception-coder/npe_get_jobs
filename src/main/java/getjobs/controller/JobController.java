package getjobs.controller;

import getjobs.repository.entity.JobEntity;
import getjobs.service.JobService;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/jobs")
public class JobController {

    private final JobService jobService;

    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @GetMapping
    public Page<JobEntity> list(
            @RequestParam(value = "platform", required = false) String platform,
            @RequestParam(value = "keyword", required = false) String keyword,
            @RequestParam(value = "page", defaultValue = "0") int page,
            @RequestParam(value = "size", defaultValue = "10") int size) {

        return jobService.search(platform, keyword, page, size);
    }

    @PostMapping("/reset-filter")
    public int resetFilter(@RequestParam("platform") String platform) {
        return jobService.resetFilterByPlatform(platform);
    }

    @DeleteMapping("")
    public void deleteAllJobs(@RequestParam("platform") String platform) {
        jobService.deleteAllByPlatform(platform);
    }

}
