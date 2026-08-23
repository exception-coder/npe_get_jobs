package getjobs.modules.recruitment.domain;

/** Auditable outcome of one contact or application attempt. */
public record ContactResult(String platformJobId, ContactStatus status, String reason) {
    /** Stable per-job contact states. */
    public enum ContactStatus {
        SUCCEEDED,
        FAILED,
        SKIPPED,
        BLOCKED
    }
}
