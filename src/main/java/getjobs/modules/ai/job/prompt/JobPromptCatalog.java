package getjobs.modules.ai.job.prompt;

import getjobs.modules.ai.config.AiPromptProperties;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.PromptTemplate;
import org.springframework.stereotype.Component;

import java.util.EnumMap;
import java.util.Map;
import java.util.Objects;

/**
 * 职位相关的提示词目录
 * <p>
 * 这是一个中央注册表，用于管理所有与职位相关的 AI 提示词。
 * 它在应用启动时从 {@link AiPromptProperties} 加载配置，并将提示词模板组织起来，
 * 以便在需要时可以方便地按类型 ({@link JobPromptType}) 获取和渲染。
 * </p>
 */
@Component
public class JobPromptCatalog {

    private final Map<JobPromptType, PromptTemplateHolder> registry;

    /**
     * 构造函数，用于初始化职位提示词目录。
     * <p>
     * 它会遍历 {@link JobPromptType} 中的所有枚举值，并从 {@link AiPromptProperties}
     * 中查找对应的提示词定义。如果找不到任何一个配置，将抛出 {@link IllegalStateException}。
     * 找到配置后，会创建一个 {@link PromptTemplateHolder} 并将其注册到目录中。
     * </p>
     *
     * @param properties AI 提示词的配置属性，通过依赖注入获取。
     * @throws IllegalStateException 如果某个 {@link JobPromptType} 缺少对应的配置。
     */
    public JobPromptCatalog(AiPromptProperties properties) {
        Objects.requireNonNull(properties, "properties must not be null");
        this.registry = new EnumMap<>(JobPromptType.class);

        Map<String, AiPromptProperties.PromptDefinition> jobPrompts = properties.getJob();
        for (JobPromptType type : JobPromptType.values()) {
            AiPromptProperties.PromptDefinition definition = jobPrompts.get(type.getConfigKey());
            if (definition == null) {
                throw new IllegalStateException("Prompt configuration missing for key: " + type.getConfigKey());
            }
            PromptTemplate template = new PromptTemplate(definition.getTemplate());
            PromptTemplateHolder holder = new PromptTemplateHolder(
                definition.getDescription(),
                definition.getPlaceholders(),
                template
            );
            registry.put(type, holder);
        }
    }

    /**
     * 根据指定的提示词类型获取 {@link PromptTemplateHolder}。
     *
     * @param type 职位提示词的类型 ({@link JobPromptType})。
     * @return 对应的 {@link PromptTemplateHolder} 实例。
     * @throws IllegalArgumentException 如果指定的类型没有注册任何提示词。
     */
    public PromptTemplateHolder get(JobPromptType type) {
        PromptTemplateHolder holder = registry.get(type);
        if (holder == null) {
            throw new IllegalArgumentException("Prompt not registered for type: " + type);
        }
        return holder;
    }

    /**
     * 渲染指定类型的提示词模板。
     * <p>
     * 这是一个便捷方法，它首先获取指定类型的 {@link PromptTemplateHolder}，
     * 然后使用提供的变量来渲染提示词模板，最终返回一个 {@link Prompt} 对象。
     * </p>
     *
     * @param type      职位提示词的类型 ({@link JobPromptType})。
     * @param variables 用于填充模板占位符的变量 Map。
     * @return 渲染完成的 {@link Prompt} 对象，可直接用于与 AI 模型交互。
     */
    public Prompt render(JobPromptType type, Map<String, ?> variables) {
        return get(type).render(variables);
    }
}
