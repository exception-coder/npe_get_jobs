package getjobs.modules.recruitment.domain;

/** Read-only inspection result for the contact entry and editor of one job. */
public record ContactPreparation(
        String platformJobId,
        PreparationStatus status,
        String currentUrl,
        boolean contactActionVisible,
        boolean editorVisible,
        String reason
) {
    public enum PreparationStatus {
        READY,
        UNAVAILABLE
    }
}
