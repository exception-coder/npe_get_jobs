package getjobs.modules.recruitment.application;

import getjobs.modules.getjobs.service.ConfigService;
import getjobs.modules.recruitment.browser.BrowserSearch;
import getjobs.modules.recruitment.domain.RecruitmentPlatformId;
import getjobs.repository.UserProfileRepository;
import getjobs.repository.entity.ConfigEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/** Maps legacy persisted settings into the new platform-neutral search contract. */
@Service
public class RecruitmentSearchPlanService {
    private final ConfigService configService;
    private final UserProfileRepository userProfileRepository;

    public RecruitmentSearchPlanService(
            ConfigService configService,
            UserProfileRepository userProfileRepository
    ) {
        this.configService = configService;
        this.userProfileRepository = userProfileRepository;
    }

    public RecruitmentSearchPlan resolve(RecruitmentPlatformId platformId) {
        ConfigEntity config = loadPlatformConfig(platformId);
        List<BrowserSearch> searches = buildSearches(config);
        Map<String, Object> filters = buildFilters(config);
        String greeting = userProfileRepository.findAll().stream()
                .findFirst()
                .map(profile -> profile.getSayHi() == null ? "" : profile.getSayHi())
                .orElse("");
        return new RecruitmentSearchPlan(searches, filters, greeting);
    }

    private ConfigEntity loadPlatformConfig(RecruitmentPlatformId platformId) {
        String persistedCode = "job51".equals(platformId.value()) ? "51job" : platformId.value();
        ConfigEntity config = configService.loadByPlatformType(persistedCode);
        if (config == null && !persistedCode.equals(platformId.value())) {
            config = configService.loadByPlatformType(platformId.value());
        }
        return config;
    }

    private List<BrowserSearch> buildSearches(ConfigEntity config) {
        List<String> keywords = valuesOrEmpty(config == null ? null : config.getKeywords());
        List<String> cities = valuesOrEmpty(config == null ? null : config.getCityCode());
        Map<String, String> customCities = config == null || config.getCustomCityCode() == null
                ? Map.of() : config.getCustomCityCode();
        if (keywords.isEmpty()) {
            keywords = List.of("");
        }
        if (cities.isEmpty()) {
            cities = List.of("");
        }

        List<BrowserSearch> searches = new ArrayList<>(keywords.size() * cities.size());
        for (String city : cities) {
            String cityCode = customCities.getOrDefault(city, city);
            for (String keyword : keywords) {
                searches.add(new BrowserSearch(keyword, cityCode));
            }
        }
        return searches;
    }

    private Map<String, Object> buildFilters(ConfigEntity config) {
        if (config == null) {
            return Map.of();
        }
        Map<String, Object> filters = new LinkedHashMap<>();
        put(filters, "jobType", config.getJobType());
        put(filters, "salary", config.getSalary());
        put(filters, "publishTime", config.getPublishTime());
        put(filters, "experience", config.getExperience());
        put(filters, "degree", config.getDegree());
        put(filters, "scale", config.getScale());
        put(filters, "industry", config.getIndustry());
        put(filters, "stage", config.getStage());
        put(filters, "companyNature", config.getCompanyNature());
        return filters;
    }

    private void put(Map<String, Object> filters, String key, Object value) {
        if (value instanceof String text && !text.isBlank()) {
            filters.put(key, text);
        }
        if (value instanceof List<?> values && !values.isEmpty()) {
            filters.put(key, values);
        }
    }

    private List<String> valuesOrEmpty(List<String> values) {
        return values == null ? List.of() : values.stream().filter(value -> value != null && !value.isBlank()).toList();
    }
}
