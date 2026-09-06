package getjobs.modules.recruitment.web;

import getjobs.modules.recruitment.browser.BrowserContactPreparationResult;
import getjobs.modules.recruitment.workflow.RecruitmentWorkflowService;
import getjobs.modules.recruitment.workflow.RecruitmentWorkflowSnapshot;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/api/recruitment/workflows")
public class RecruitmentWorkflowController {
    private final RecruitmentWorkflowService workflowService;

    public RecruitmentWorkflowController(RecruitmentWorkflowService workflowService) {
        this.workflowService = workflowService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.ACCEPTED)
    public RecruitmentWorkflowSnapshot start(@RequestBody StartWorkflowRequest request) {
        return workflowService.start(request.platform(), request.goalId());
    }

    @GetMapping("/{taskId}")
    public RecruitmentWorkflowSnapshot status(@PathVariable UUID taskId) {
        return workflowService.require(taskId);
    }

    @PostMapping("/from-job")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public RecruitmentWorkflowSnapshot startFromJob(@RequestBody StoredJobRequest request) {
        return workflowService.startFromJob(request.jobRecordId());
    }

    /** Local job identity selected by the user, not a client-supplied send target. */
    public record StoredJobRequest(Long jobRecordId) { }

    @PostMapping("/{taskId}/contact")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public RecruitmentWorkflowSnapshot confirmContact(
            @PathVariable UUID taskId,
            @RequestBody ContactRequest request
    ) {
        return workflowService.confirmContact(taskId, request.platformJobId(), request.greeting());
    }

    @PostMapping("/{taskId}/contact/prepare")
    public BrowserContactPreparationResult prepareContact(
            @PathVariable UUID taskId,
            @RequestBody ContactPreparationRequest request
    ) {
        return workflowService.prepareContact(taskId, request.platformJobId());
    }

    public record StartWorkflowRequest(String platform, Long goalId) {
    }

    /** Single candidate selected for a side-effect-free contact readiness check. */
    public record ContactPreparationRequest(String platformJobId) {
    }

    /** Explicitly confirmed single-candidate contact request. */
    public record ContactRequest(String platformJobId, String greeting) {
    }
}
