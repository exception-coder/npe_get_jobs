package getjobs.modules.recruitment.workflow;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

import getjobs.modules.recruitment.domain.ContactResult;
import getjobs.modules.recruitment.domain.RecruitmentJob;

public record RecruitmentWorkflowSnapshot(
        UUID taskId,
        String platform,
        Long goalId,
        WorkflowStatus status,
        WorkflowStage stage,
        int discovered,
        int filtered,
        int matched,
        int contacted,
        String error,
        String recoveryAction,
        boolean contactConfirmationRequired,
        String contactGreeting,
        List<RecruitmentJob> jobs,
        List<ContactResult> contactResults,
        Instant updatedAt
) {
    public RecruitmentWorkflowSnapshot {
        jobs = List.copyOf(jobs);
        contactResults = List.copyOf(contactResults);
    }
}
