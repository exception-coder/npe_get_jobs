package getjobs.modules.recruitment.web;

import getjobs.modules.recruitment.domain.ContactDeliveryOptions;
import getjobs.modules.recruitment.workflow.RecruitmentWorkflowService;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;

import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

class RecruitmentWorkflowControllerTest {
    @Test
    void forwardsExplicitSingleJobTextSendConsent() {
        var workflows = mock(RecruitmentWorkflowService.class);
        var controller = new RecruitmentWorkflowController(workflows);
        UUID taskId = UUID.randomUUID();

        controller.confirmContact(taskId, new RecruitmentWorkflowController.ContactRequest(
                "job-1", "您好", false, "", true));

        var options = ArgumentCaptor.forClass(ContactDeliveryOptions.class);
        verify(workflows).confirmContact(org.mockito.ArgumentMatchers.eq(taskId),
                org.mockito.ArgumentMatchers.eq("job-1"), org.mockito.ArgumentMatchers.eq("您好"), options.capture());
        assertThat(options.getValue().sendGreeting()).isTrue();
    }
}
