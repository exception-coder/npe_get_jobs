package getjobs.modules.getjobs.dict.domain.dto.job51;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * 51job城市信息
 */
public record Job51City(
        @JsonProperty("code") String code,
        @JsonProperty("value") String value,
        @JsonProperty("hasSubArea") boolean hasSubArea) {
}
