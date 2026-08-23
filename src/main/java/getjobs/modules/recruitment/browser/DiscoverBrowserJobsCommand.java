package getjobs.modules.recruitment.browser;

import getjobs.modules.recruitment.domain.RecruitmentPlatformId;

import java.util.List;
import java.util.Map;

/** High-level, platform-neutral job discovery command. */
public record DiscoverBrowserJobsCommand(
        RecruitmentPlatformId platformId,
        String sessionId,
        List<BrowserSearch> searches,
        Map<String, Object> filters,
        int maxScrolls,
        int limit
) {
    public DiscoverBrowserJobsCommand {
        searches = List.copyOf(searches);
        filters = Map.copyOf(filters);
    }
}
