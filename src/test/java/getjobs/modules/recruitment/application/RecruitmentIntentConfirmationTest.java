package getjobs.modules.recruitment.application;

import com.fasterxml.jackson.databind.ObjectMapper;
import getjobs.modules.recruitment.infrastructure.ai.RecruitmentIntentCodec;
import getjobs.modules.recruitment.domain.RecruitmentIntentCard;
import getjobs.modules.recruitment.spi.RecruitmentGoalInterpreter;
import getjobs.repository.RecruitmentGoalRepository;
import getjobs.repository.entity.RecruitmentGoalEntity;
import org.junit.jupiter.api.Test;
import org.springframework.core.io.ClassPathResource;
import java.nio.charset.StandardCharsets;
import java.util.Optional;
import static org.assertj.core.api.Assertions.*;
import static org.mockito.Mockito.*;

class RecruitmentIntentConfirmationTest {
    @Test
    void confirmsNewVersionWithoutChangingDraftAndRejectsUnconfirmedSearch() throws Exception {
        var repository = mock(RecruitmentGoalRepository.class);
        var interpreter = mock(RecruitmentGoalInterpreter.class);
        var codec = new RecruitmentIntentCodec(new ObjectMapper());
        RecruitmentIntentCard card = codec.read(new ClassPathResource("intent-card.json").getContentAsString(StandardCharsets.UTF_8));
        var draft = new RecruitmentGoalEntity();
        draft.setId(1L); draft.setRawGoal("原始意向"); draft.setActive(false);
        when(repository.findById(1L)).thenReturn(Optional.of(draft));
        when(interpreter.version()).thenReturn("recruitment-intent-v2");
        when(repository.save(any())).thenAnswer(call -> { RecruitmentGoalEntity result = call.getArgument(0); result.setId(2L); return result; });
        var service = new RecruitmentGoalService(repository, interpreter, codec);
        assertThatThrownBy(() -> service.require(1L)).hasMessageContaining("确认");
        var confirmed = service.confirm(1L, card);
        assertThat(confirmed.getId()).isEqualTo(2L);
        assertThat(confirmed.getRawGoal()).isEqualTo("原始意向");
        assertThat(service.confirmed(confirmed)).isTrue();
        assertThat(draft.getActive()).isFalse();
        verify(repository).deactivateAll();
    }
}
