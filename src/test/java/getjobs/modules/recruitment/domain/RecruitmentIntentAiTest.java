package getjobs.modules.recruitment.domain;

import com.fasterxml.jackson.databind.ObjectMapper;
import getjobs.infrastructure.ai.llm.LlmClient;
import getjobs.modules.recruitment.infrastructure.ai.*;
import org.junit.jupiter.api.Test;
import java.util.List;
import java.util.Map;
import static org.assertj.core.api.Assertions.*;
import static org.mockito.Mockito.*;

class RecruitmentIntentAiTest {
    private final RecruitmentIntentCodec codec = new RecruitmentIntentCodec(new ObjectMapper());

    @Test
    void preservesOutputFailureWithoutRepeatingTheSameRequest() throws Exception {
        var client = mock(LlmClient.class);
        when(client.chatJson(any())).thenThrow(new getjobs.infrastructure.ai.llm.LlmResponseException("模型输出达到 token 上限"));
        var interpreter = new LlmRecruitmentGoalInterpreter(client, codec);
        assertThatThrownBy(() -> interpreter.interpret("寻找 Java 岗位"))
                .hasMessageContaining("token 上限").hasMessageContaining("尚未搜索");
        verify(client, times(1)).chatJson(any());
    }

    @Test
    void retriesInvalidJsonWithoutEverReturningRawSearchText() throws Exception {
        var client = mock(LlmClient.class);
        when(client.chatJson(any())).thenReturn("bad-json", codec.write(RecruitmentIntentCardTest.fixture()));
        var interpreter = new LlmRecruitmentGoalInterpreter(client, codec);
        var result = interpreter.interpret("我是博士在读，寻找疾病生物学");
        assertThat(result.keywords()).containsExactly("疾病生物学");
        verify(client, times(2)).chatJson(any());
        when(client.chatJson(any())).thenReturn("");
        assertThatThrownBy(() -> interpreter.interpret("复杂原文")).hasMessageContaining("尚未搜索");
    }

    @Test
    void fabricatedEvidenceAndMissingJdCannotPass() throws Exception {
        var client = mock(LlmClient.class);
        var card = RecruitmentIntentCardTest.fixture();
        var conditions = new RecruitmentGoalConditions(card.summary(), card.searchTerms(), List.of(), null, null,
                null, null, List.of(), List.of(), List.of(), List.of(), null,
                Map.of("intentCard", codec.write(card), "intentVersion", "1"));
        when(client.chatJson(any())).thenReturn(codec.write(new RecruitmentIntentMatcher.Checks(List.of(
                new IntentMatchResult.Check("targetPositions", "matched", "相符", "疾病生物学"),
                new IntentMatchResult.Check("candidateContext", "matched", "符合", "模型虚构的背景要求")))));
        var matcher = new RecruitmentIntentMatcher(client, codec);
        var job = new RecruitmentJob("j1", "疾病生物学", "测试药企", "广州", "面议", "疾病生物学研究", "https://example.com");
        assertThat(matcher.match(job, conditions).intentMatch().recommendation()).isEqualTo("review");
        clearInvocations(client);
        var missing = new RecruitmentJob("j2", "疾病生物学", "测试药企", "广州", "面议", "", "https://example.com");
        assertThat(matcher.match(missing, conditions).intentMatch().recommendation()).isEqualTo("review");
        verifyNoInteractions(client);
    }
}
