package getjobs.modules.recruitment.application;

/** Result of one idempotent normalized-job registration batch. */
public record JobRegistrationResult(int received, int created, int updated, int rejected) {
}
