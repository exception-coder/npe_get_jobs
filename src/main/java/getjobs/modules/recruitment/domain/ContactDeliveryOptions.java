package getjobs.modules.recruitment.domain;

/** Per-attempt image consent; text remains a draft on BOSS. */
public record ContactDeliveryOptions(
        Boolean sendResumeImage,
        String resumeImagePath
) {
    public static final ContactDeliveryOptions DRAFT_ONLY = new ContactDeliveryOptions(false, "");

    public ContactDeliveryOptions {
        sendResumeImage = Boolean.TRUE.equals(sendResumeImage);
        resumeImagePath = sendResumeImage && resumeImagePath != null ? resumeImagePath.trim() : "";
        if (sendResumeImage && resumeImagePath.isBlank()) {
            throw new IllegalArgumentException("图片简历路径不能为空");
        }
    }
}
