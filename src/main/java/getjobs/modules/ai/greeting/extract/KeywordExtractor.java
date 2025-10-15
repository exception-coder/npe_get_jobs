package getjobs.modules.ai.greeting.extract;

import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Component
public class KeywordExtractor {
    private static final Set<String> STOP = Set.of(
            "我们","负责","以及","需要","能力","熟悉","相关","能够","经验","工作","优先",
            "具有","进行","参与","良好","沟通","协作","等","等。","和"
    );

    public List<String> extractTop(String jd, int k) {
        if (jd == null || jd.isBlank()) return List.of();
        Map<String, Integer> cnt = new HashMap<>();
        String[] tokens = jd.replaceAll("[^\\p{IsHan}A-Za-z0-9]+", " ")
                .toLowerCase().split("\\s+");
        for (String w : tokens) {
            if (w.length() < 2 || STOP.contains(w)) continue;
            cnt.merge(w, 1, Integer::sum);
        }
        return cnt.entrySet().stream()
                .sorted((a, b) -> b.getValue() - a.getValue())
                .limit(k)
                .map(Map.Entry::getKey)
                .toList();
    }
}