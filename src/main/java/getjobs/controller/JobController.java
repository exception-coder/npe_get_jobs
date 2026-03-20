package getjobs.controller;

import getjobs.repository.entity.JobEntity;
import getjobs.modules.getjobs.service.JobService;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

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
            @RequestParam(value = "status", required = false) Integer status,
            @RequestParam(value = "keyword", required = false) String keyword,
            @RequestParam(value = "page", defaultValue = "0") int page,
            @RequestParam(value = "size", defaultValue = "10") int size) {

        return jobService.search(platform, status, keyword, page, size);
    }

    @PostMapping("/reset-filter")
    public int resetFilter(@RequestParam("platform") String platform) {
        return jobService.resetFilterByPlatform(platform);
    }

    @DeleteMapping("")
    public void deleteAllJobs(@RequestParam("platform") String platform) {
        jobService.deleteAllByPlatform(platform);
    }

    /**
     * 更新职位的「是否联系过」状态
     *
     * @param id     职位主键 ID
     * @param body   { "isContacted": true/false }
     * @return { "success": true/false }
     */
    @PutMapping("/{id}/contacted")
    public Map<String, Boolean> updateContacted(
            @PathVariable Long id,
            @RequestBody Map<String, Boolean> body) {
        Boolean isContacted = body != null ? body.get("isContacted") : null;
        boolean success = jobService.updateContacted(id, isContacted);
        return Map.of("success", success);
    }

}
