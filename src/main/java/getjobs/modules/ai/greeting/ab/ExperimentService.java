package getjobs.modules.ai.greeting.ab;

import getjobs.modules.ai.greeting.dto.GreetingParams;
import org.springframework.stereotype.Service;

@Service
public class ExperimentService {
    public String pickVariant(String expName, GreetingParams p) {
        // 先按 tone 简单分配；真实环境可按用户ID hash 分桶
        if ("platform".equalsIgnoreCase(p.getTone())) return Variant.V2.templateId;
        return Variant.V1.templateId;
    }
}
