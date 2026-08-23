package getjobs.modules.recruitment.platform;

import getjobs.modules.recruitment.domain.PlatformCapability;
import getjobs.modules.recruitment.domain.PlatformDescriptor;
import getjobs.modules.recruitment.domain.RecruitmentPlatformId;

import java.util.Set;

public final class PlatformDescriptors {
    private static final Set<PlatformCapability> FULL_CAPABILITIES = Set.of(
            PlatformCapability.SESSION,
            PlatformCapability.DISCOVER,
            PlatformCapability.FILTER,
            PlatformCapability.MATCH,
            PlatformCapability.CONTACT,
            PlatformCapability.APPLICATION_TRACKING
    );

    private PlatformDescriptors() {
    }

    public static PlatformDescriptor full(String id, String displayName, String icon, int order) {
        return new PlatformDescriptor(RecruitmentPlatformId.of(id), displayName, icon, order, FULL_CAPABILITIES);
    }
}
