package getjobs.modules.recruitment.spi;

import getjobs.modules.recruitment.domain.RecruitmentIntentCard;
import getjobs.modules.recruitment.domain.IntentMatchResult;

/** Persistence/transport encoding boundary for the intent application. */
public interface RecruitmentIntentSerialization {
    /** Reads and validates one card. */
    RecruitmentIntentCard read(String json);
    /** Reads one persisted match result. */
    IntentMatchResult readMatch(String json);
    /** Encodes a domain snapshot. */
    String write(Object value);
    /** Returns a stable SHA-256 fingerprint of the encoded value. */
    String fingerprint(Object value);
}
