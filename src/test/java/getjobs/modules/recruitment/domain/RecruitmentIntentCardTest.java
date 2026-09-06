package getjobs.modules.recruitment.domain;

import com.fasterxml.jackson.databind.ObjectMapper;
import getjobs.modules.recruitment.infrastructure.ai.RecruitmentIntentCodec;
import org.junit.jupiter.api.Test;
import org.springframework.core.io.ClassPathResource;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;
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
    void requiresCompleteEvidenceAndNeverLetsSoftPassOverrideHardFailure() throws Exception {
        var card = fixture();
        var role = new IntentMatchResult.Check("targetPositions", "matched", "职位相符", "疾病生物学");
        var background = new IntentMatchResult.Check("candidateContext", "unmatched", "必须已毕业", "须取得博士学位");
        assertThat(IntentMatchResult.decide(1L, "hash", card, List.of(role)).recommendation()).isEqualTo("review");
        assertThat(IntentMatchResult.decide(1L, "hash", card, List.of(role, background)).recommendation()).isEqualTo("skip");
        var passed = new IntentMatchResult.Check("candidateContext", "matched", "接受在读", "欢迎博士在读");
        assertThat(IntentMatchResult.decide(1L, "hash", card, List.of(role, passed)).recommendation()).isEqualTo("apply");
        assertThat(IntentMatchResult.decide(1L, "hash", card, List.of(role, role, passed)).recommendation()).isEqualTo("review");
    }
}
