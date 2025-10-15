package getjobs.modules.dict.infrastructure.provider.dto.boss;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

/**
 * 行业分类数据
 */
public record IndustryData(
        @JsonProperty("code") Integer code,
        @JsonProperty("name") String name,
        @JsonProperty("subLevelModelList") List<IndustryItem> subLevelModelList) {
}

