package getjobs.modules.recruitment.domain;

import java.util.Set;

/** Immutable metadata rendered by the API and frontend navigation. */
public record PlatformDescriptor(
        RecruitmentPlatformId id,
        String displayName,
        String icon,
        int order,
        Set<PlatformCapability> capabilities
) {
    public PlatformDescriptor {
        capabilities = Set.copyOf(capabilities);
    }
}
