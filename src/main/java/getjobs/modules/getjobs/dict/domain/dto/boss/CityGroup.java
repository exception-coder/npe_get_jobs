package getjobs.modules.getjobs.dict.domain.dto.boss;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

/**
 * 城市分组
 */
public record CityGroup(
        @JsonProperty("firstChar") String firstChar,
        @JsonProperty("cityList") List<City> cityList) {
}
