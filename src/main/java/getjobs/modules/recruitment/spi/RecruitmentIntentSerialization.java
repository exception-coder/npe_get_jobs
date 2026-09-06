package getjobs.modules.recruitment.spi;

import getjobs.modules.recruitment.domain.RecruitmentIntentCard;

/** Persistence/transport encoding boundary for the intent application. */
public interface RecruitmentIntentSerialization {
    /** Reads and validates one card. */
    RecruitmentIntentCard read(String json);
    /** Encodes a domain snapshot. */
    String write(Object value);
}
