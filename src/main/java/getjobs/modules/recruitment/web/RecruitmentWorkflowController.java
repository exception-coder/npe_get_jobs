package getjobs.modules.recruitment.web;

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

    @PostMapping("/{taskId}/contact")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public RecruitmentWorkflowSnapshot confirmContact(@PathVariable UUID taskId) {
        return workflowService.confirmContact(taskId);
    }

    public record StartWorkflowRequest(String platform, Long goalId) {
    }
}
