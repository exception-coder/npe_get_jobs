package getjobs.modules.recruitment.spi;

import getjobs.modules.recruitment.domain.PlatformDescriptor;

/**
 * Entry point of a recruitment-platform adapter.
 *
 * <p>A plugin declares metadata and capabilities. Business operations are added
 * through narrow capability ports instead of expanding this interface.</p>
 */
public interface RecruitmentPlatformPlugin {
    PlatformDescriptor descriptor();

    String loginUrl();
}
