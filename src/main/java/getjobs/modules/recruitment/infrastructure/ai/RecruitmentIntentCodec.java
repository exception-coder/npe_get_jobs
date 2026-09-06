package getjobs.modules.recruitment.infrastructure.ai;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import getjobs.modules.recruitment.domain.RecruitmentIntentCard;
import org.springframework.stereotype.Component;

/** Strict boundary for persisted and model-generated intent JSON. */
@Component
public class RecruitmentIntentCodec implements getjobs.modules.recruitment.spi.RecruitmentIntentSerialization {
    private final ObjectMapper mapper;

    public RecruitmentIntentCodec(ObjectMapper mapper) {
        this.mapper = mapper.copy().enable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
    }

    @Override
    public RecruitmentIntentCard read(String json) {
        RecruitmentIntentCard card = decode(json, RecruitmentIntentCard.class);
        card.validate();
        return card;
    }

    public <T> T decode(String json, Class<T> type) {
        if (json == null || json.isBlank() || json.length() > 100000) {
            throw new IllegalArgumentException("模型返回内容为空或过长");
        }
        try {
            return mapper.readValue(json, type);
        } catch (JsonProcessingException exception) {
            throw new IllegalArgumentException("结构化内容格式无效", exception);
        }
    }

    @Override
    public String write(Object value) {
        try {
            return mapper.writeValueAsString(value);
        } catch (JsonProcessingException exception) {
            throw new IllegalArgumentException("无法序列化意向内容", exception);
        }
    }
}
