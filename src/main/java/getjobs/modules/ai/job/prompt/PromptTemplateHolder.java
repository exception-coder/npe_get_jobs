package getjobs.modules.ai.job.prompt;

import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.PromptTemplate;

import java.util.Collections;
import java.util.HashMap;
import getjobs.modules.ai.config.AiPromptProperties;
import java.util.HashSet;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * 提示词模板的持有者类
 * <p>
 * 这个类封装了一个 {@link PromptTemplate} 实例及其元数据，如描述和必需的变量（占位符）。
 * 它还提供了渲染提示词的逻辑，并在渲染前验证所有必需的变量是否都已提供。
 * </p>
 */
public class PromptTemplateHolder {

    private final String description;
    private final Set<String> requiredVariables;
    private final PromptTemplate template;

    /**
     * 构造函数，用于创建一个新的 {@link PromptTemplateHolder} 实例。
     *
     * @param description  提示词的描述。
     * @param placeholders 提示词模板中所有必需的占位符（变量）的可迭代集合。
     * @param template     要封装的 {@link PromptTemplate} 实例。
     */
    public PromptTemplateHolder(String description, Map<String, AiPromptProperties.Placeholder> placeholders, PromptTemplate template) {
        this.description = description;
        this.template = Objects.requireNonNull(template, "template must not be null");
        Set<String> variables = new HashSet<>();
        if (placeholders != null) {
            placeholders.forEach((key, value) -> {
                if (value.isRequired()) {
                    variables.add(key);
                }
            });
        }
        this.requiredVariables = Collections.unmodifiableSet(variables);
    }

    /**
     * 获取提示词的描述。
     *
     * @return 提示词描述字符串。
     */
    public String getDescription() {
        return description;
    }

    /**
     * 获取此提示词模板所有必需的变量名集合。
     *
     * @return 一个不可修改的、包含所有必需变量名的 Set。
     */
    public Set<String> getRequiredVariables() {
        return requiredVariables;
    }

    /**
     * 获取封装的 {@link PromptTemplate} 实例。
     *
     * @return {@link PromptTemplate} 实例。
     */
    public PromptTemplate getTemplate() {
        return template;
    }

    /**
     * 使用提供的变量渲染提示词模板。
     * <p>
     * 在渲染之前，此方法会检查提供的 {@code variables} Map 是否包含了所有
     * {@link #requiredVariables} 中定义的必需变量。如果缺少任何必需变量，
     * 将抛出 {@link IllegalArgumentException}。
     * </p>
     *
     * @param variables 包含用于填充模板占位符的键值对的 Map。
     * @return 渲染完成的 {@link Prompt} 对象。
     * @throws IllegalArgumentException 如果任何必需的变量未在 {@code variables} Map 中提供。
     */
    public Prompt render(Map<String, ?> variables) {
        Map<String, Object> context = new HashMap<>();
        if (variables != null) {
            variables.forEach((key, value) -> context.put(key, value));
        }

        Set<String> missing = requiredVariables.stream()
            .filter(key -> !context.containsKey(key) || context.get(key) == null)
            .collect(Collectors.toCollection(HashSet::new));

        if (!missing.isEmpty()) {
            throw new IllegalArgumentException("Missing prompt variables: " + String.join(", ", missing));
        }

        return template.create(context);
    }
}
