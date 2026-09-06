package getjobs.modules.recruitment.domain;

import java.util.List;
import java.util.Map;

/** Explainable recommendation, not permission to send messages. */
public record IntentMatchResult(Long intentVersion, String jdVersion, String recommendation,
                                String summary, List<Check> checks) {
    /** matched means the requirement is satisfied, including exclusion requirements. */
    public record Check(String requirementRef, String result, String reason, String jdEvidence) { }

    /** Missing/invalid evidence never counts as a pass. */
    public static IntentMatchResult decide(Long version, String hash, RecruitmentIntentCard card, List<Check> proposed) {
        List<Check> checks = proposed == null ? List.of() : proposed;
        List<Check> normalized = new java.util.ArrayList<>();
        boolean unknown = false;
        boolean failed = false;
        for (Map.Entry<String, String> required : card.checkStrengths().entrySet()) {
            List<Check> matches = checks.stream().filter(check -> check != null
                    && required.getKey().equals(check.requirementRef())).toList();
            if (matches.size() != 1 || !valid(matches.getFirst())) {
                unknown = true;
                normalized.add(new Check(required.getKey(), "unknown", "模型未提供完整且有效的判断，请核实该项", ""));
                continue;
            }
            Check check = matches.getFirst();
            normalized.add(check);
            if (!"prefer".equals(required.getValue())) {
                failed |= "unmatched".equals(check.result());
                unknown |= "unknown".equals(check.result());
            }
        }
        String decision = failed ? "skip" : unknown ? "review" : "apply";
        String summary = failed ? "存在明确不符合的必要条件" : unknown ? "关键信息不足，请先核实" : "已满足当前意向的必要条件";
        return new IntentMatchResult(version, hash, decision, summary, List.copyOf(normalized));
    }

    private static boolean valid(Check check) {
        return check.result() != null && List.of("matched", "unmatched", "unknown").contains(check.result())
                && check.reason() != null && !check.reason().isBlank()
                && ("unknown".equals(check.result()) || check.jdEvidence() != null && !check.jdEvidence().isBlank());
    }
}
