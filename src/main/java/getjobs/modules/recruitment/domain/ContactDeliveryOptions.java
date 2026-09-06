package getjobs.modules.recruitment.domain;

/** Per-attempt image consent; text remains a draft on BOSS. */
public record ContactDeliveryOptions(
        Boolean sendResumeImage,
        String resumeImagePath,
        Boolean sendGreeting
) {
    public static final ContactDeliveryOptions DRAFT_ONLY = new ContactDeliveryOptions(false, "");

    public ContactDeliveryOptions(Boolean sendResumeImage, String resumeImagePath) {
        this(sendResumeImage, resumeImagePath, false);
    }

    public ContactDeliveryOptions {
        sendResumeImage = Boolean.TRUE.equals(sendResumeImage);
        sendGreeting = Boolean.TRUE.equals(sendGreeting);
        resumeImagePath = sendResumeImage && resumeImagePath != null ? resumeImagePath.trim() : "";
        if (sendResumeImage && resumeImagePath.isBlank()) {
            throw new IllegalArgumentException("图片简历路径不能为空");
        }
    }
}
