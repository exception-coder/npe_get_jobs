package getjobs.modules.recruitment.domain;

/** Auditable outcome of one contact or application attempt. */
public record ContactResult(String platformJobId, ContactStatus status, String reason,
        Boolean conversationEstablished, Boolean draftFilled, Boolean textSent, Boolean imageDelivered) {
    public ContactResult(String platformJobId, ContactStatus status, String reason) {
        this(platformJobId, status, reason, false, false, false, false);
    }
    /** Stable per-job contact states. */
    public enum ContactStatus {
        SUCCEEDED,
        FAILED,
        SKIPPED,
        BLOCKED
    }
}
