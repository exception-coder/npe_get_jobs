package getjobs.modules.recruitment.domain;

import com.fasterxml.jackson.databind.ObjectMapper;
import getjobs.infrastructure.ai.llm.LlmClient;
import getjobs.infrastructure.ai.llm.LlmMessage;
import getjobs.modules.recruitment.infrastructure.ai.*;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
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
    void fabricatedBackgroundEvidenceRemainsUnknownWithoutVetoingVerifiedRole() throws Exception {
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
        var result = matcher.match(job, conditions).intentMatch();
        assertThat(result.recommendation()).isEqualTo("apply");
        assertThat(result.confidence()).isEqualTo("medium");
        assertThat(result.checks()).anySatisfy(check -> {
            assertThat(check.requirementRef()).isEqualTo("candidateContext");
            assertThat(check.result()).isEqualTo("unknown");
            assertThat(check.jdEvidence()).isEmpty();
        });
        clearInvocations(client);
        var missing = new RecruitmentJob("j2", "疾病生物学", "测试药企", "广州", "面议", "", "https://example.com");
        assertThat(matcher.match(missing, conditions).intentMatch().recommendation()).isEqualTo("apply");
        verify(client).chatJson(any());
    }

    @Test
    void explicitUserWaiverCanSatisfyEducationAndExperienceChecks() throws Exception {
        var client = mock(LlmClient.class);
        var card = RecruitmentIntentCardTest.fixture();
        String guidance = "只要是茶业销售或者茶叶制作相关都可以投递，不要在乎学历和工作年限";
        var conditions = new RecruitmentGoalConditions(card.summary(), card.searchTerms(), List.of(), null, null,
                null, null, List.of(), List.of(), List.of(), List.of(), null,
                Map.of("intentCard", codec.write(card), "intentVersion", "1", "decisionGuidance", guidance));
        when(client.chatJson(any())).thenReturn(codec.write(new RecruitmentIntentMatcher.Checks(List.of(
                new IntentMatchResult.Check("targetPositions", "matched", "岗位方向相符", "茶叶制作"),
                new IntentMatchResult.Check("candidateContext", "matched", "用户明确豁免学历和年限",
                        "不要在乎学历和工作年限")))));
        var matcher = new RecruitmentIntentMatcher(client, codec);
        var job = new RecruitmentJob("j1", "茶叶制作", "测试茶企", "武夷山", "8K",
                "茶叶制作，要求本科及3年经验", "https://example.com");

        assertThat(matcher.match(job, conditions).intentMatch().recommendation()).isEqualTo("apply");
        ArgumentCaptor<List<LlmMessage>> messages = ArgumentCaptor.forClass(List.class);
        verify(client).chatJson(messages.capture());
        assertThat(messages.getValue().get(1).content()).contains(guidance);
    }

    @Test
    void verifiesActualMultilineFieldsAndRetainsUnknownReasons() throws Exception {
        var client = mock(LlmClient.class);
        var card = RecruitmentIntentCardTest.fixture();
        when(client.chatJson(any())).thenReturn(codec.write(new RecruitmentIntentMatcher.Checks(List.of(
                new IntentMatchResult.Check("targetPositions", "matched", "岗位方向相符", "疾病生物学 \"研究\""),
                new IntentMatchResult.Check("candidateContext", "unknown", "岗位未说明是否接受在读", "")))));
        var job = new RecruitmentJob("j1", "研究员", "测试药企", "广州", "面议",
                "疾病生物学\n\"研究\"", "https://example.com");
        var result = new RecruitmentIntentMatcher(client, codec).match(job, conditions(card, "")).intentMatch();
        assertThat(result.recommendation()).isEqualTo("apply");
        assertThat(result.checks()).anySatisfy(check -> {
            assertThat(check.requirementRef()).isEqualTo("candidateContext");
            assertThat(check.reason()).isEqualTo("岗位未说明是否接受在读");
        });
    }

    @Test
    void inventedRoleAndMalformedModelResponseCannotPass() throws Exception {
        var client = mock(LlmClient.class);
        var card = RecruitmentIntentCardTest.fixture();
        var job = new RecruitmentJob("j1", "销售", "测试药企", "广州", "面议", "市场销售", "https://example.com");
        when(client.chatJson(any())).thenReturn(codec.write(new RecruitmentIntentMatcher.Checks(List.of(
                new IntentMatchResult.Check("targetPositions", "matched", "虚构", "疾病生物学")))));
        var matcher = new RecruitmentIntentMatcher(client, codec);
        assertThat(matcher.match(job, conditions(card, "")).intentMatch().recommendation()).isEqualTo("review");
        assertThat(matcher.match(job, conditions(card, "疾病生物学")).intentMatch().recommendation()).isEqualTo("review");
        when(client.chatJson(any())).thenReturn("invalid-json");
        assertThat(matcher.match(job, conditions(card, "")).intentMatch().recommendation()).isEqualTo("review");
    }

    @Test
    void usesPlatformQualificationFactsWhenDescriptionIsMissing() throws Exception {
        var client = mock(LlmClient.class);
        var card = RecruitmentIntentCardTest.fixture();
        var facts = new RecruitmentJobFacts(null, "博士在读", "医药", null, null, null, null,
                null, null, null, null, null, List.of(), List.of(), List.of());
        var job = new RecruitmentJob("j1", "疾病生物学", "测试药企", "广州", "面议", null,
                "https://example.com", facts);
        when(client.chatJson(any())).thenReturn(codec.write(new RecruitmentIntentMatcher.Checks(List.of(
                new IntentMatchResult.Check("targetPositions", "matched", "方向符合", "疾病生物学"),
                new IntentMatchResult.Check("candidateContext", "matched", "接受在读", "博士在读")))));

        var result = new RecruitmentIntentMatcher(client, codec).match(job, conditions(card, "")).intentMatch();

        assertThat(result.recommendation()).isEqualTo("apply");
        assertThat(result.confidence()).isEqualTo("high");
        verify(client).chatJson(any());
    }

    @Test
    void structuredSalaryCorrectsFalseRejectionButKeepsExplicitUserWaiver() throws Exception {
        var client = mock(LlmClient.class);
        var original = RecruitmentIntentCardTest.fixture();
        var requirements = new java.util.LinkedHashMap<>(original.requirements());
        requirements.put("salary", RecruitmentIntentCardTest.salaryRequirement("must", "CNY/month"));
        var card = new RecruitmentIntentCard(original.schemaVersion(), original.summary(), Map.of(),
                original.targetPositions(), requirements, List.of());
        var matcher = new RecruitmentIntentMatcher(client, codec);
        var role = new IntentMatchResult.Check("targetPositions", "matched", "方向符合", "疾病生物学");
        when(client.chatJson(any())).thenReturn(codec.write(new RecruitmentIntentMatcher.Checks(List.of(role,
                new IntentMatchResult.Check("requirements.salary", "unmatched", "上限超过意向", "20-40K")))));
        var job = new RecruitmentJob("j1", "疾病生物学", "测试药企", "广州", "20-40K", "", "https://example.com");
        assertThat(matcher.match(job, conditions(card, "")).intentMatch().recommendation()).isEqualTo("apply");
        var expensive = new RecruitmentJob("j2", job.title(), job.company(), job.city(), "30-50K", "", job.href());
        assertThat(matcher.match(expensive, conditions(card, "")).intentMatch().recommendation()).isEqualTo("skip");
        when(client.chatJson(any())).thenReturn(codec.write(new RecruitmentIntentMatcher.Checks(List.of(role,
                new IntentMatchResult.Check("requirements.salary", "matched", "用户不限制薪资", "忽略薪资限制")))));
        assertThat(matcher.match(expensive, conditions(card, "忽略薪资限制")).intentMatch().recommendation())
                .isEqualTo("apply");
    }

    private RecruitmentGoalConditions conditions(RecruitmentIntentCard card, String guidance) {
        return new RecruitmentGoalConditions(card.summary(), card.searchTerms(), List.of(), null, null,
                null, null, List.of(), List.of(), List.of(), List.of(), null,
                Map.of("intentCard", codec.write(card), "intentVersion", "1", "decisionGuidance", guidance));
    }
}
