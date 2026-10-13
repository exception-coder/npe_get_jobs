package getjobs.modules.recruitment.domain;

import com.fasterxml.jackson.databind.ObjectMapper;
import getjobs.modules.recruitment.infrastructure.ai.RecruitmentIntentCodec;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.springframework.core.io.ClassPathResource;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;
import java.util.LinkedHashMap;
import java.math.BigDecimal;
import static org.assertj.core.api.Assertions.*;

class RecruitmentIntentCardTest {
    private final RecruitmentIntentCodec codec = new RecruitmentIntentCodec(new ObjectMapper());

    public static RecruitmentIntentCard fixture() throws Exception {
        return new RecruitmentIntentCodec(new ObjectMapper()).read(new ClassPathResource("intent-card.json")
                .getContentAsString(StandardCharsets.UTF_8));
    }

    @Test
    void separatesBackgroundFromSearchAndPreservesUnknown() throws Exception {
        var card = fixture();
        assertThat(card.searchTerms()).containsExactly("疾病生物学");
        assertThat(card.requirements().get("educationRequirements").state()).isEqualTo("unspecified");
        assertThat(card.candidateContext()).containsEntry("educationStatus", "在读");
    }

    @Test
    void rejectsInvalidFieldsRangesAndPositionReferences() throws Exception {
        var json = new ObjectMapper().readTree(codec.write(fixture()));
        ((com.fasterxml.jackson.databind.node.ObjectNode) json).put("platformCityCode", "101280100");
        assertThatThrownBy(() -> codec.read(json.toString())).isInstanceOf(IllegalArgumentException.class);
        var card = fixture();
        var invalid = new RecruitmentIntentCard("1.0", card.summary(), card.candidateContext(), card.targetPositions(),
                card.requirements(), List.of(new RecruitmentIntentCard.AdditionalRequirement("c1", List.of("missing"),
                "限定", "must", "限定")));
        assertThatThrownBy(invalid::validate).hasMessageContaining("引用");
    }

    @Test
    void admitsUnknownBackgroundButNeverLetsSoftPassOverrideHardFailure() throws Exception {
        var card = fixture();
        var role = new IntentMatchResult.Check("targetPositions", "matched", "职位相符", "疾病生物学");
        var background = new IntentMatchResult.Check("candidateContext", "unmatched", "必须已毕业", "须取得博士学位");
        var partial = IntentMatchResult.decide(1L, "hash", card, List.of(role));
        assertThat(partial.recommendation()).isEqualTo("apply");
        assertThat(partial.confidence()).isEqualTo("medium");
        assertThat(partial.checks()).anySatisfy(check -> {
            assertThat(check.requirementRef()).isEqualTo("candidateContext");
            assertThat(check.result()).isEqualTo("unknown");
        });
        assertThat(IntentMatchResult.decide(1L, "hash", card, List.of(role, background)).recommendation()).isEqualTo("skip");
        var passed = new IntentMatchResult.Check("candidateContext", "matched", "接受在读", "欢迎博士在读");
        assertThat(IntentMatchResult.decide(1L, "hash", card, List.of(role, passed)).recommendation()).isEqualTo("apply");
        assertThat(IntentMatchResult.decide(1L, "hash", card, List.of(role, role, passed)).recommendation()).isEqualTo("review");
    }

    @Test
    void preferencesNeverVetoAndExclusionConflictsStillReject() throws Exception {
        var original = fixture();
        var requirements = new LinkedHashMap<>(original.requirements());
        requirements.put("companyIndustries", new RecruitmentIntentCard.Requirement("specified",
                List.of("医药"), null, "prefer", "优先医药"));
        var card = new RecruitmentIntentCard(original.schemaVersion(), original.summary(), Map.of(),
                original.targetPositions(), requirements, List.of(
                new RecruitmentIntentCard.AdditionalRequirement("exclude", List.of(), "不要销售", "exclude", "不要销售")));
        var role = new IntentMatchResult.Check("targetPositions", "matched", "职位相符", "疾病生物学");
        var absent = IntentMatchResult.decide(1L, "hash", card, List.of(role));
        assertThat(absent.recommendation()).isEqualTo("apply");
        assertThat(absent.confidence()).isEqualTo("medium");
        var preference = new IntentMatchResult.Check("requirements.companyIndustries", "unmatched", "非优先行业", "软件");
        assertThat(IntentMatchResult.decide(1L, "hash", card, List.of(role, preference)).recommendation())
                .isEqualTo("apply");
        var invalidPreference = new IntentMatchResult.Check("requirements.companyIndustries", "invalid", null, "");
        assertThat(IntentMatchResult.decide(1L, "hash", card, List.of(role, invalidPreference)).recommendation())
                .isEqualTo("apply");
        var excluded = new IntentMatchResult.Check("additionalRequirements.exclude", "unmatched", "明确销售岗位", "销售");
        assertThat(IntentMatchResult.decide(1L, "hash", card, List.of(role, preference, excluded)).recommendation())
                .isEqualTo("skip");
        assertThat(IntentMatchResult.decide(1L, "hash", card, List.of()).recommendation()).isEqualTo("review");
    }

    @ParameterizedTest
    @CsvSource({"20-40K,matched", "25-50K,matched", "30-50K,unmatched", "5-9K,unmatched",
            "25K,matched", "20K-30K,matched", "20–40K·13薪,matched"})
    void comparableMonthlySalaryUsesOverlap(String salary, String expected) {
        var salaryRequirement = salaryRequirement("must", "CNY/month");
        var check = RecruitmentSalaryMatch.evaluate(salaryRequirement, salary).orElseThrow();
        assertThat(check.result()).isEqualTo(expected);
        assertThat(check.jdEvidence()).isEqualTo(salary);
    }

    @Test
    void doesNotGuessUnsupportedSalaryUnitsOrReverseRanges() {
        var monthly = salaryRequirement("must", "CNY/month");
        assertThat(RecruitmentSalaryMatch.evaluate(monthly, "30-20K")).isEmpty();
        assertThat(RecruitmentSalaryMatch.evaluate(monthly, "30-50万/年")).isEmpty();
        assertThat(RecruitmentSalaryMatch.evaluate(monthly, "面议")).isEmpty();
        assertThat(RecruitmentSalaryMatch.evaluate(monthly, "20KK")).isEmpty();
        assertThat(RecruitmentSalaryMatch.evaluate(salaryRequirement("must", "CNY/year"), "20-40K")).isEmpty();
        assertThat(RecruitmentSalaryMatch.evaluate(salaryRequirement("exclude", "CNY/month"), "20-40K")).isEmpty();
    }

    static RecruitmentIntentCard.Requirement salaryRequirement(String strength, String unit) {
        return new RecruitmentIntentCard.Requirement("specified", List.of("10-25K"),
                new RecruitmentIntentCard.Range(new BigDecimal("10000"), new BigDecimal("25000"), unit),
                strength, "10-25K");
    }
}
