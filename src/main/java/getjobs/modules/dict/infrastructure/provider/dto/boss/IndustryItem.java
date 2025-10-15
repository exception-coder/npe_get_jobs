package getjobs.modules.dict.infrastructure.provider.dto.boss;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * 行业项
 */
public record IndustryItem(
        @JsonProperty("code") Integer code,
        @JsonProperty("name") String name) {
}

