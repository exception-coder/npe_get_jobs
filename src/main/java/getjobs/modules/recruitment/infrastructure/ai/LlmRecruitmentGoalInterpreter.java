package getjobs.modules.recruitment.infrastructure.ai;

import com.fasterxml.jackson.databind.ObjectMapper;
import getjobs.infrastructure.ai.llm.LlmClient;
import getjobs.infrastructure.ai.llm.LlmMessage;
import getjobs.infrastructure.ai.template.PromptRenderer;
import getjobs.infrastructure.ai.template.PromptSegmentType;
import getjobs.infrastructure.ai.template.PromptTemplate;
import getjobs.infrastructure.ai.template.TemplateRepository;
import getjobs.modules.recruitment.domain.RecruitmentGoalConditions;
import getjobs.modules.recruitment.spi.RecruitmentGoalInterpreter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/** LLM-first goal interpretation with a deterministic fallback when AI is unavailable. */
@Slf4j
@Component
@RequiredArgsConstructor
public class LlmRecruitmentGoalInterpreter implements RecruitmentGoalInterpreter {
    public static final String VERSION = "recruitment-goal-v1";
    private static final Pattern JSON_BLOCK = Pattern.compile("```(?:json)?\\s*([\\s\\S]*?)```");
    private static final Pattern SALARY_RANGE = Pattern.compile("(\\d{1,3})\\s*[-到至~]\\s*(\\d{1,3})\\s*[kK]");
    private static final Pattern EXPERIENCE_RANGE = Pattern.compile("(\\d{1,2})\\s*[-到至~]\\s*(\\d{1,2})\\s*年");
    private static final Pattern EXPERIENCE_MIN = Pattern.compile("(\\d{1,2})\\s*年(?:以上|经验)");
    private static final Pattern EXCLUSION = Pattern.compile("(?:排除|不要|不考虑)\\s*([^，,；;。]+)");
    private static final List<String> KNOWN_CITIES = List.of("北京", "上海", "广州", "深圳", "杭州", "成都", "武汉", "南京", "苏州", "西安", "重庆", "长沙", "佛山", "东莞");
    private static final List<String> KNOWN_INDUSTRIES = List.of("电商", "供应链", "金融", "SaaS", "医疗", "教育", "制造", "物流", "零售", "游戏", "互联网", "政企");
    private static final List<String> KNOWN_SKILLS = List.of("Java", "Spring Boot", "Spring Cloud", "Vue", "React", "TypeScript", "Python", "Go", "MySQL", "Redis", "Kafka", "微服务", "大模型", "AI");

    private final TemplateRepository templateRepository;
    private final PromptRenderer promptRenderer;
    private final LlmClient llmClient;
    private final ObjectMapper objectMapper;

    @Override
    public String version() {
        return VERSION;
    }

    @Override
    public RecruitmentGoalConditions interpret(String rawGoal) {
        if (rawGoal == null || rawGoal.isBlank()) {
            throw new IllegalArgumentException("job goal must not be blank");
        }
        try {
            PromptTemplate template = templateRepository.get(VERSION);
            List<LlmMessage> messages = messages(template, rawGoal.trim());
            Exception lastFailure = null;
            for (int attempt = 1; attempt <= 2; attempt++) {
                try {
                    String raw = llmClient.chat(messages, template.getModel(), template.getTemperature()).trim();
                    Matcher matcher = JSON_BLOCK.matcher(raw);
                    RecruitmentGoalConditions interpreted = objectMapper.readValue(
                            matcher.find() ? matcher.group(1).trim() : raw,
                            RecruitmentGoalConditions.class
                    );
                    return normalize(interpreted, rawGoal.trim());
                } catch (Exception exception) {
                    lastFailure = exception;
                    log.warn("Goal interpretation attempt {} failed: {}", attempt, exception.getMessage());
                }
            }
            log.warn("AI goal interpretation unavailable; deterministic fallback applied", lastFailure);
        } catch (Exception exception) {
            log.warn("Goal interpreter initialization failed; deterministic fallback applied", exception);
        }
        return fallback(rawGoal.trim());
    }

    private List<LlmMessage> messages(PromptTemplate template, String rawGoal) {
        Map<String, Object> variables = Map.of("goal", rawGoal);
        List<LlmMessage> messages = new ArrayList<>();
        for (PromptTemplate.Segment segment : template.getSegments()) {
            String content = promptRenderer.render(segment.getContent(), variables);
            if (segment.getType() == PromptSegmentType.USER || segment.getType() == PromptSegmentType.FEW_SHOTS) {
                messages.add(LlmMessage.user(content));
            } else {
                messages.add(LlmMessage.system(content));
            }
        }
        return messages;
    }

    private RecruitmentGoalConditions normalize(RecruitmentGoalConditions value, String rawGoal) {
        Integer minSalary = bounded(value.minSalaryK(), 0, 500);
        Integer maxSalary = bounded(value.maxSalaryK(), 0, 500);
        if (minSalary != null && maxSalary != null && minSalary > maxSalary) {
            Integer swap = minSalary;
            minSalary = maxSalary;
            maxSalary = swap;
        }
        Integer minExperience = bounded(value.minExperienceYears(), 0, 60);
        Integer maxExperience = bounded(value.maxExperienceYears(), 0, 60);
        if (minExperience != null && maxExperience != null && minExperience > maxExperience) {
            Integer swap = minExperience;
            minExperience = maxExperience;
            maxExperience = swap;
        }
        String summary = value.summary() == null || value.summary().isBlank() ? rawGoal : value.summary().trim();
        List<String> keywords = clean(value.keywords());
        if (keywords.isEmpty()) keywords = List.of(summary);
        return new RecruitmentGoalConditions(summary, keywords, clean(value.cities()), minSalary, maxSalary,
                minExperience, maxExperience, clean(value.industries()), clean(value.skills()),
                clean(value.excludedKeywords()), clean(value.preferredCompanyTypes()), clean(value.jobType()),
                value.additionalConditions());
    }

    private Integer bounded(Integer value, int minimum, int maximum) {
        return value == null || value < minimum || value > maximum ? null : value;
    }

    private List<String> clean(List<String> values) {
        if (values == null) return List.of();
        return values.stream().filter(value -> value != null && !value.isBlank()).map(String::trim).distinct().toList();
    }

    private String clean(String value) {
        return value == null || value.isBlank() ? null : value.trim();
    }

    private RecruitmentGoalConditions fallback(String rawGoal) {
        List<String> cities = contains(rawGoal, KNOWN_CITIES);
        List<String> industries = contains(rawGoal, KNOWN_INDUSTRIES);
        List<String> skills = containsIgnoreCase(rawGoal, KNOWN_SKILLS);
        List<String> excludedKeywords = extractExclusions(rawGoal);
        Integer minSalary = null;
        Integer maxSalary = null;
        Matcher salary = SALARY_RANGE.matcher(rawGoal);
        if (salary.find()) {
            minSalary = Integer.valueOf(salary.group(1));
            maxSalary = Integer.valueOf(salary.group(2));
        }
        Integer minExperience = null;
        Integer maxExperience = null;
        Matcher experienceRange = EXPERIENCE_RANGE.matcher(rawGoal);
        if (experienceRange.find()) {
            minExperience = Integer.valueOf(experienceRange.group(1));
            maxExperience = Integer.valueOf(experienceRange.group(2));
        } else {
            Matcher experienceMin = EXPERIENCE_MIN.matcher(rawGoal);
            if (experienceMin.find()) minExperience = Integer.valueOf(experienceMin.group(1));
        }
        String keyword = rawGoal;
        for (String city : cities) keyword = keyword.replace(city, "");
        keyword = SALARY_RANGE.matcher(keyword).replaceAll("");
        keyword = EXPERIENCE_RANGE.matcher(keyword).replaceAll("");
        keyword = EXPERIENCE_MIN.matcher(keyword).replaceAll("");
        keyword = keyword.replaceFirst("^(帮我|请|我想|想要|想)?\\s*(找|寻找|应聘)?", "")
                .split("[，,；;。]|偏向|偏")[0].trim()
                .replaceFirst("^的", "")
                .replaceFirst("岗位$", "")
                .trim();
        List<String> keywords = keyword.isBlank() ? List.of(rawGoal) : List.of(keyword);
        Map<String, String> additional = new LinkedHashMap<>();
        additional.put("unparsedText", rawGoal);
        additional.put("interpretationMode", "deterministic-fallback");
        return new RecruitmentGoalConditions(rawGoal, keywords, cities, minSalary, maxSalary,
                minExperience, maxExperience, industries, skills, excludedKeywords, List.of(), null, additional);
    }

    private List<String> extractExclusions(String rawGoal) {
        Matcher matcher = EXCLUSION.matcher(rawGoal);
        if (!matcher.find()) return List.of();
        return Pattern.compile("[、/]|(?:和|或)")
                .splitAsStream(matcher.group(1))
                .map(String::trim)
                .map(value -> value.replaceFirst("岗位$", "").trim())
                .filter(value -> !value.isBlank())
                .toList();
    }

    private List<String> contains(String text, List<String> candidates) {
        return candidates.stream().filter(text::contains).toList();
    }

    private List<String> containsIgnoreCase(String text, List<String> candidates) {
        String lower = text.toLowerCase(Locale.ROOT);
        return candidates.stream().filter(value -> lower.contains(value.toLowerCase(Locale.ROOT))).toList();
    }
}
