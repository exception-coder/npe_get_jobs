package getjobs.modules.recruitment.application;

import getjobs.modules.recruitment.domain.RecruitmentGoalConditions;
import getjobs.modules.recruitment.spi.RecruitmentGoalInterpreter;
import getjobs.repository.RecruitmentGoalRepository;
import getjobs.repository.entity.RecruitmentGoalEntity;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class RecruitmentGoalServiceTest {
    @Mock
    private RecruitmentGoalRepository repository;
    @Mock
    private RecruitmentGoalInterpreter interpreter;

    @Test
    void persistsCanonicalConditionsAndDeactivatesPreviousGoal() {
        RecruitmentGoalEntity previous = new RecruitmentGoalEntity();
        previous.setActive(true);
        RecruitmentGoalConditions conditions = new RecruitmentGoalConditions(
                "广州 Java 高级工程师", List.of("Java 高级工程师"), List.of("广州"), 25, 40,
                5, null, List.of("电商", "供应链"), List.of("Java", "Spring Boot"),
                List.of("外包"), List.of("上市公司"), "全职", Map.of("remote", "可接受混合办公")
        );
        when(interpreter.interpret("广州 Java 高级工程师，25-40K，5年以上经验")).thenReturn(conditions);
        when(interpreter.version()).thenReturn("recruitment-goal-v1");
        when(repository.save(org.mockito.ArgumentMatchers.any())).thenAnswer(invocation -> invocation.getArgument(0));

        RecruitmentGoalService service = new RecruitmentGoalService(repository, interpreter,
                new getjobs.modules.recruitment.infrastructure.ai.RecruitmentIntentCodec(new com.fasterxml.jackson.databind.ObjectMapper()));
        RecruitmentGoalEntity saved = service.interpretAndActivate(" 广州 Java 高级工程师，25-40K，5年以上经验 ");

        assertThat(previous.getActive()).isTrue();
        assertThat(saved.getKeywords()).containsExactly("Java 高级工程师");
        assertThat(saved.getCities()).containsExactly("广州");
        assertThat(saved.getMinSalaryK()).isEqualTo(25);
        assertThat(saved.getMaxSalaryK()).isEqualTo(40);
        assertThat(saved.getInterpreterVersion()).isEqualTo("recruitment-goal-v1");
        assertThat(saved.getActive()).isFalse();
        ArgumentCaptor<RecruitmentGoalEntity> captor = ArgumentCaptor.forClass(RecruitmentGoalEntity.class);
        verify(repository).save(captor.capture());
        assertThat(captor.getValue().getAdditionalConditions()).containsEntry("remote", "可接受混合办公");
    }
}
