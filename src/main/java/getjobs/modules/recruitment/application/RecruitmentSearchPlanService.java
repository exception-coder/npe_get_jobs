package getjobs.modules.recruitment.application;

import getjobs.modules.getjobs.service.ConfigService;
import getjobs.modules.recruitment.browser.BrowserSearch;
import getjobs.modules.recruitment.domain.RecruitmentGoalConditions;
import getjobs.modules.recruitment.domain.RecruitmentPlatformId;
import getjobs.repository.UserProfileRepository;
import getjobs.repository.entity.ConfigEntity;
import getjobs.repository.entity.RecruitmentGoalEntity;
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
    private final RecruitmentGoalService goalService;

    public RecruitmentSearchPlanService(
            ConfigService configService,
            UserProfileRepository userProfileRepository,
            RecruitmentGoalService goalService
    ) {
        this.configService = configService;
        this.userProfileRepository = userProfileRepository;
        this.goalService = goalService;
    }

    public RecruitmentSearchPlan resolve(RecruitmentPlatformId platformId, Long goalId) {
        ConfigEntity config = loadPlatformConfig(platformId);
        RecruitmentGoalConditions goal = toConditions(goalService.require(goalId));
        List<BrowserSearch> searches = buildSearches(config, goal);
        Map<String, Object> filters = buildFilters(config);
        put(filters, "goalMinSalaryK", goal.minSalaryK());
        put(filters, "goalMaxSalaryK", goal.maxSalaryK());
        put(filters, "goalMinExperienceYears", goal.minExperienceYears());
        put(filters, "goalMaxExperienceYears", goal.maxExperienceYears());
        put(filters, "goalIndustries", goal.industries());
        put(filters, "goalSkills", goal.skills());
        put(filters, "goalJobType", goal.jobType());
        String greeting = userProfileRepository.findAll().stream()
                .findFirst()
                .map(profile -> profile.getSayHi() == null ? "" : profile.getSayHi())
                .orElse("");
        return new RecruitmentSearchPlan(searches, filters, greeting, goal);
    }

    private RecruitmentGoalConditions toConditions(RecruitmentGoalEntity entity) {
        return new RecruitmentGoalConditions(entity.getSummary(), entity.getKeywords(), entity.getCities(),
                entity.getMinSalaryK(), entity.getMaxSalaryK(), entity.getMinExperienceYears(), entity.getMaxExperienceYears(),
                entity.getIndustries(), entity.getSkills(), entity.getExcludedKeywords(), entity.getPreferredCompanyTypes(),
                entity.getJobType(), entity.getAdditionalConditions());
    }

    private ConfigEntity loadPlatformConfig(RecruitmentPlatformId platformId) {
        String persistedCode = "job51".equals(platformId.value()) ? "51job" : platformId.value();
        ConfigEntity config = configService.loadByPlatformType(persistedCode);
        if (config == null && !persistedCode.equals(platformId.value())) {
            config = configService.loadByPlatformType(platformId.value());
        }
        return config;
    }

    private List<BrowserSearch> buildSearches(ConfigEntity config, RecruitmentGoalConditions goal) {
        List<String> keywords = goal.keywords().isEmpty()
                ? valuesOrEmpty(config == null ? null : config.getKeywords())
                : goal.keywords();
        List<String> cities = valuesOrEmpty(config == null ? null : config.getCityCode());
        Map<String, String> customCities = config == null || config.getCustomCityCode() == null
                ? Map.of() : config.getCustomCityCode();
        List<String> goalCityCodes = goal.cities().stream()
                .map(customCities::get)
                .filter(code -> code != null && !code.isBlank())
                .distinct()
                .toList();
        if (!goalCityCodes.isEmpty()) cities = goalCityCodes;
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
        if (value instanceof Number) {
            filters.put(key, value);
        }
    }

    private List<String> valuesOrEmpty(List<String> values) {
        return values == null ? List.of() : values.stream().filter(value -> value != null && !value.isBlank()).toList();
    }
}
