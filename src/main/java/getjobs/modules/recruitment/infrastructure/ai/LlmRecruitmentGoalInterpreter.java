package getjobs.modules.recruitment.infrastructure.ai;

import getjobs.infrastructure.ai.llm.LlmClient;
import getjobs.infrastructure.ai.llm.LlmMessage;
import getjobs.infrastructure.ai.llm.LlmResponseException;
import getjobs.modules.recruitment.domain.RecruitmentGoalConditions;
import getjobs.modules.recruitment.spi.RecruitmentGoalInterpreter;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;

/** Produces a validated draft; failures never become raw-text searches. */
@Component
public class LlmRecruitmentGoalInterpreter implements RecruitmentGoalInterpreter {
    private final LlmClient client;
    private final RecruitmentIntentCodec codec;
    private final String instructions;

    public LlmRecruitmentGoalInterpreter(LlmClient client, RecruitmentIntentCodec codec) throws IOException {
        this.client = client;
        this.codec = codec;
        this.instructions = new ClassPathResource("prompts/recruitment-intent-system.txt")
                .getContentAsString(StandardCharsets.UTF_8);
    }

    @Override
    public String version() {
        return "recruitment-intent-v2";
    }

    @Override
    public RecruitmentGoalConditions interpret(String rawGoal) {
        for (int attempt = 0; attempt < 2; attempt++) {
            try {
                var card = codec.read(client.chatJson(List.of(LlmMessage.system(instructions),
                        LlmMessage.user(codec.write(Map.of("rawInput", rawGoal))))));
                card.requirements().values().stream().filter(value -> "specified".equals(value.state()))
                        .forEach(value -> requireSource(rawGoal, value.evidence()));
                card.additionalRequirements().forEach(value -> requireSource(rawGoal, value.evidence()));
                return new RecruitmentGoalConditions(card.summary(), card.searchTerms(), List.of(), null, null,
                        null, null, List.of(), List.of(), List.of(), List.of(), null,
                        Map.of("intentCard", codec.write(card), "intentStatus", "draft"));
            } catch (LlmResponseException exception) {
                throw new IllegalStateException(exception.getMessage() + "；原文已保留，尚未搜索", exception);
            } catch (RuntimeException exception) {
                if (attempt == 1) {
                    throw new IllegalStateException("模型返回的 JSON 格式或求职条件校验失败；原文已保留，尚未搜索", exception);
                }
            }
        }
        throw new IllegalStateException("未能解析求职意向");
    }

    private void requireSource(String original, String evidence) {
        if (!original.contains(evidence)) {
            throw new IllegalArgumentException("条件依据必须来自用户原文");
        }
    }
}
