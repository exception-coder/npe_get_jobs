package getjobs.modules.recruitment.domain;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import java.util.Locale;
import java.util.Objects;
import java.util.regex.Pattern;

/** Stable, extensible identifier for a recruitment platform. */
public record RecruitmentPlatformId(String value) implements Comparable<RecruitmentPlatformId> {
    private static final Pattern VALID_ID = Pattern.compile("[a-z][a-z0-9-]{1,31}");

    public RecruitmentPlatformId {
        value = Objects.requireNonNull(value, "platform id must not be null")
                .trim()
                .toLowerCase(Locale.ROOT);
        if (!VALID_ID.matcher(value).matches()) {
            throw new IllegalArgumentException("invalid platform id: " + value);
        }
    }

    @JsonCreator(mode = JsonCreator.Mode.DELEGATING)
    public static RecruitmentPlatformId of(String value) {
        return new RecruitmentPlatformId(value);
    }

    @JsonValue
    public String jsonValue() {
        return value;
    }

    @Override
    public int compareTo(RecruitmentPlatformId other) {
        return value.compareTo(other.value);
    }

    @Override
    public String toString() {
        return value;
    }
}
