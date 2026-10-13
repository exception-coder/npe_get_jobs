package getjobs.modules.recruitment.domain;

import java.math.BigDecimal;
import java.util.Optional;
import java.util.regex.Pattern;

/** Compares explicit monthly ranges without guessing annual conversions or installment counts. */
public final class RecruitmentSalaryMatch {
    private static final Pattern MONTHLY_K = Pattern.compile(
            "^(\\d+(?:\\.\\d+)?)(?:\\s*[kK]?\\s*[-–—~～至]\\s*(\\d+(?:\\.\\d+)?))?\\s*[kK]"
                    + "\\s*(?:[·•]\\s*\\d+\\s*薪)?$");
    private static final BigDecimal THOUSAND = new BigDecimal("1000");

    private RecruitmentSalaryMatch() { }

    /** Returns no decision for non-monthly intent, exclusions, or unsupported platform salary formats. */
    public static Optional<IntentMatchResult.Check> evaluate(RecruitmentIntentCard.Requirement requirement,
                                                            String salary) {
        if (requirement == null || !"specified".equals(requirement.state())
                || "exclude".equals(requirement.strength()) || requirement.range() == null
                || !"CNY/month".equals(requirement.range().unit()) || salary == null) {
            return Optional.empty();
        }
        var parsed = MONTHLY_K.matcher(salary.strip());
        if (!parsed.matches()) {
            return Optional.empty();
        }
        BigDecimal minimum = new BigDecimal(parsed.group(1)).multiply(THOUSAND);
        BigDecimal maximum = parsed.group(2) == null ? minimum
                : new BigDecimal(parsed.group(2)).multiply(THOUSAND);
        if (minimum.compareTo(maximum) > 0) {
            return Optional.empty();
        }
        var intent = requirement.range();
        boolean overlaps = (intent.min() == null || maximum.compareTo(intent.min()) >= 0)
                && (intent.max() == null || minimum.compareTo(intent.max()) <= 0);
        return Optional.of(new IntentMatchResult.Check("requirements.salary", overlaps ? "matched" : "unmatched",
                overlaps ? "招聘月薪与意向区间有交集，可进一步沟通" : "招聘月薪与意向区间无交集", salary));
    }
}
