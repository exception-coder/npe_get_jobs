package getjobs.modules.dict.infrastructure.config;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import getjobs.modules.dict.infrastructure.provider.dto.zhilian.ZhilianDictItem;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

import java.util.Collections;
import java.util.List;

/**
 * 智联招聘字典配置
 */
@Slf4j
@Getter
@Configuration
public class ZhilianDictConfig {

    private final List<ZhilianDictItem> industryList;

    public ZhilianDictConfig(
            @Value("${zhilian.dict-industry-json}") String industryJson,
            ObjectMapper objectMapper) {
        List<ZhilianDictItem> tempList;
        try {
            tempList = objectMapper.readValue(industryJson, new TypeReference<List<ZhilianDictItem>>() {});
            log.info("成功加载智联招聘行业字典数据，共 {} 条", tempList.size());
        } catch (Exception e) {
            log.error("解析智联招聘行业字典数据失败: {}", e.getMessage());
            tempList = Collections.emptyList();
        }
        this.industryList = tempList;
    }
}

