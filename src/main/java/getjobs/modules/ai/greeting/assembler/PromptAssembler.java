package getjobs.modules.ai.greeting.assembler;

import com.fasterxml.jackson.databind.ObjectMapper;
import getjobs.modules.ai.greeting.assembler.PromptVariables;
import getjobs.modules.ai.greeting.dto.GreetingRequest;
import getjobs.modules.ai.greeting.extract.KeywordExtractor;
import getjobs.modules.ai.greeting.llm.LlmMessage;
import getjobs.modules.ai.greeting.template.PromptRenderer;
import getjobs.modules.ai.greeting.template.PromptTemplate;
import getjobs.modules.ai.greeting.template.TemplateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
@RequiredArgsConstructor
public class PromptAssembler {
    private final TemplateRepository repo;
    private final PromptRenderer renderer;
    private final KeywordExtractor extractor;

    public List<LlmMessage> assemble(String templateId, GreetingRequest req) {
        List<String> keywords = req.getJdKeywords();
        if (keywords == null || keywords.isEmpty()) {
            keywords = extractor.extractTop(req.getJdText(), 3);
        }
        Map<String, Object> vars = new HashMap<>();
        vars.put(PromptVariables.TONE, req.getParams().getTone());
        vars.put(PromptVariables.MAX_CHARS, req.getParams().getMaxChars());
        vars.put(PromptVariables.SHOW_WEAKNESS, req.getParams().isShowWeakness());
        vars.put(PromptVariables.JD_TEXT, req.getJdText());
        vars.put(PromptVariables.JD_KEYWORDS, keywords);
        vars.put(PromptVariables.PROFILE_JSON, toJson(req.getProfile()));

        PromptTemplate tpl = repo.get(templateId);
        List<LlmMessage> messages = new ArrayList<>();

        for (PromptTemplate.Segment seg : tpl.getSegments()) {
            String content = renderer.render(seg.getContent(), vars);
            switch (seg.getType()) {
                case SYSTEM -> messages.add(LlmMessage.system(content));
                case GUIDELINES -> messages.add(LlmMessage.system(content));
                case USER -> messages.add(LlmMessage.user(content));
                case FEW_SHOTS -> {
                    // FEW_SHOTS 类型的段落通常包含一或多个“用户输入-助手输出”的示例，用于指导模型的响应格式和风格。
                    // 这里将其作为 user 消息类型，是为了将这些示例作为用户提供给模型的上下文信息。
                    // 这种方法可以有效地向模型展示期望的交互模式，引导其生成符合预期的回复。
                    // 尽管示例中可能包含助手角色的内容，但将它们统一作为用户消息的一部分，
                    // 是一种常见的 prompt 工程技巧，可以简化对话历史的结构，并有助于在某些模型上获得更稳定和可控的输出。
                    messages.add(LlmMessage.user(content)); // 或 assistant 示例
                }
            }
        }
        return messages;
    }

    private String toJson(Object o) {
        try { return new ObjectMapper().writeValueAsString(o); }
        catch (Exception e) { return "{}"; }
    }
}
