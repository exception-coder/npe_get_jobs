package getjobs.modules.ai.job.service;

import getjobs.modules.ai.common.enums.AiPlatform;
import getjobs.modules.ai.common.factory.ChatModelFactory;
import getjobs.modules.ai.job.prompt.JobPromptCatalog;
import getjobs.modules.ai.job.prompt.JobPromptType;
import getjobs.modules.ai.job.prompt.PromptTemplateHolder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 职位匹配 AI 服务
 * <p>
 * 该服务使用 AI 模型来评估候选人的简历（或个人简介）与职位描述（JD）的匹配度。
 * 它通过 {@link JobPromptCatalog} 获取预定义的提示词模板，填充具体内容后，
 * 调用 AI 模型并解析其返回结果，最终得出一个布尔值（匹配或不匹配）。
 * </p>
 */
@Slf4j
@Service
public class JobMatchAiService {

    private static final Pattern BOOLEAN_PATTERN = Pattern.compile("\\b(true|false)\\b", Pattern.CASE_INSENSITIVE);

    private final ChatModelFactory chatModelFactory;
    private final JobPromptCatalog jobPromptCatalog;

    /**
     * 构造函数，注入所需的 {@link ChatModelFactory} 和 {@link JobPromptCatalog}。
     *
     * @param chatModelFactory  用于获取 AI 模型实例的工厂。
     * @param jobPromptCatalog  职位相关的提示词目录。
     */
    public JobMatchAiService(ChatModelFactory chatModelFactory, JobPromptCatalog jobPromptCatalog) {
        this.chatModelFactory = chatModelFactory;
        this.jobPromptCatalog = jobPromptCatalog;
    }

    /**
     * 判断候选人的简历是否与职位描述匹配。
     *
     * @param myJd           候选人的简历或个人简介文本。
     * @param jobDescription 招聘网站上的职位描述文本。
     * @param platform       AI 平台。
     * @return 如果 AI 模型认为匹配，则返回 {@code true}；否则返回 {@code false}。
     */
    public boolean isMatch(String myJd, String jobDescription, AiPlatform platform) {
        Map<String, Object> variables = new HashMap<>();
        variables.put("my_jd", myJd);
        variables.put("jd", jobDescription);

        PromptTemplateHolder holder = jobPromptCatalog.get(JobPromptType.MATCH_POSITION);
        Prompt prompt = holder.render(variables);
        ChatModel chatModel = chatModelFactory.getChatModel(platform);
        ChatResponse response = chatModel.call(prompt);
        String content = response.getResult().getOutput().getText();

        boolean result = parseBoolean(content);
        log.debug("Job match evaluation result={}, raw response={}", result, content);
        return result;
    }

    /**
     * 从 AI 模型的响应内容中解析出布尔值。
     * <p>
     * AI 模型被期望返回 "true" 或 "false" 的文本。此方法会尝试从返回的文本中
     * 提取这个布尔值。如果无法解析，将抛出 {@link IllegalStateException}。
     * </p>
     *
     * @param content AI 模型返回的原始文本内容。
     * @return 解析出的布尔值。
     * @throws IllegalStateException 如果响应内容为 null 或无法从中解析出布尔值。
     */
    private boolean parseBoolean(String content) {
        if (content == null) {
            throw new IllegalStateException("AI response content is null");
        }
        String normalized = content.trim();
        Matcher matcher = BOOLEAN_PATTERN.matcher(normalized);
        if (matcher.find()) {
            return Boolean.parseBoolean(matcher.group(1).toLowerCase(Locale.ROOT));
        }
        throw new IllegalStateException("Unable to parse boolean result from AI response: " + content);
    }
}
