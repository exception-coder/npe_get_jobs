package getjobs.modules.recruitment.domain;

import java.util.List;
import java.util.Map;

/** Explainable recommendation, not permission to send messages. */
public record IntentMatchResult(Long intentVersion, String jdVersion, String recommendation,
                                String confidence, String summary, List<Check> checks) {
    /** Invalidates persisted decisions when admission or evidence rules change. */
    public static final String POLICY_VERSION = "role-first-v2";
    public IntentMatchResult(Long intentVersion, String jdVersion, String recommendation,
                             String summary, List<Check> checks) {
        this(intentVersion, jdVersion, recommendation, confidenceFor(recommendation), summary, checks);
    }
    /** matched means the requirement is satisfied, including exclusion requirements. */
    public record Check(String requirementRef, String result, String reason, String jdEvidence) { }

    /** Unknown details stay visible; only role uncertainty or verified hard conflicts block admission. */
    public static IntentMatchResult decide(Long version, String hash, RecruitmentIntentCard card,
                                           List<Check> proposed) {
        List<Check> checks = proposed == null ? List.of() : proposed;
        List<Check> normalized = new java.util.ArrayList<>();
        boolean unknown = false;
        boolean roleUnknown = false;
        boolean failed = false;
        for (Map.Entry<String, String> required : card.checkStrengths().entrySet()) {
            List<Check> matches = checks.stream().filter(check -> check != null
                    && required.getKey().equals(check.requirementRef())).toList();
            Check check = matches.size() == 1 && valid(matches.getFirst()) ? matches.getFirst()
                    : new Check(required.getKey(), "unknown", "模型未提供完整且有效的判断，请核实该项", "");
            normalized.add(check);
            unknown |= "unknown".equals(check.result());
            roleUnknown |= "targetPositions".equals(required.getKey()) && "unknown".equals(check.result());
            if (!"prefer".equals(required.getValue())) {
                failed |= "unmatched".equals(check.result());
            }
        }
        String decision = failed ? "skip" : roleUnknown ? "review" : "apply";
        String summary = failed ? "存在明确不符合的必要条件"
                : roleUnknown ? "岗位方向缺少可信依据，请先核实"
                : unknown ? "岗位方向符合，暂无明确硬性冲突；部分信息待核实，可先沟通"
                : "岗位方向符合，未发现明确硬性冲突";
        String confidence = "apply".equals(decision) && unknown ? "medium" : confidenceFor(decision);
        return new IntentMatchResult(version, hash, decision, confidence, summary,
                List.copyOf(normalized));
    }

    private static String confidenceFor(String recommendation) {
        return "review".equals(recommendation) ? "low" : "high";
    }

    private static boolean valid(Check check) {
        return check.result() != null && List.of("matched", "unmatched", "unknown").contains(check.result())
                && check.reason() != null && !check.reason().isBlank()
                && ("unknown".equals(check.result()) || check.jdEvidence() != null && !check.jdEvidence().isBlank());
    }
}
