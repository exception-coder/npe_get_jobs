package getjobs.modules.ai.greeting.service;

import getjobs.modules.ai.greeting.ab.ExperimentService;
import getjobs.modules.ai.greeting.assembler.PromptAssembler;
import getjobs.modules.ai.greeting.dto.GreetingRequest;
import getjobs.modules.ai.greeting.dto.GreetingResponse;
import getjobs.modules.ai.infrastructure.extract.KeywordExtractor;
import getjobs.modules.ai.infrastructure.llm.LlmClient;
import getjobs.modules.ai.infrastructure.validate.KeywordCoverageValidator;
import getjobs.modules.ai.infrastructure.validate.LengthValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GreetingService {

    private final PromptAssembler assembler;
    private final LlmClient llm;
    private final LengthValidator lengthValidator;
    private final KeywordCoverageValidator keywordValidator;
    private final ExperimentService experimentService;
    private final KeywordExtractor extractor;

    public GreetingResponse generate(GreetingRequest req) {
        String templateId = experimentService.pickVariant("greeting", req.getParams());
        var messages = assembler.assemble(templateId, req);

        String raw = llm.chat(messages).trim();

        int max = req.getParams().getMaxChars();
        lengthValidator.check(raw, max);

        List<String> kws = (req.getJdKeywords() == null || req.getJdKeywords().isEmpty())
                ? extractor.extractTop(req.getJdText(), 3)
                : req.getJdKeywords();
        List<String> used = keywordValidator.covered(raw, kws);

        // 这里可按需加一次“轻重写”逻辑；示例先直接返回
        return new GreetingResponse(raw, used, "贴合JD关键词", req.getParams().getTone(), raw.length());
    }
}
