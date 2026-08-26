package getjobs.modules.recruitment.web;

import getjobs.modules.recruitment.application.RecruitmentPlatformRegistry;
import getjobs.modules.recruitment.browser.BrowserAutomationPort;
import getjobs.modules.recruitment.browser.BrowserSession;
import getjobs.modules.recruitment.browser.BrowserSessionStatus;
import getjobs.modules.recruitment.browser.OpenBrowserSessionCommand;
import getjobs.modules.recruitment.domain.PlatformDescriptor;
import getjobs.modules.recruitment.spi.RecruitmentPlatformPlugin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/recruitment/platforms")
public class RecruitmentPlatformController {
    private final RecruitmentPlatformRegistry platformRegistry;
    private final BrowserAutomationPort browserAutomation;

    public RecruitmentPlatformController(
            RecruitmentPlatformRegistry platformRegistry,
            BrowserAutomationPort browserAutomation
    ) {
        this.platformRegistry = platformRegistry;
        this.browserAutomation = browserAutomation;
    }

    @GetMapping
    public List<PlatformDescriptor> platforms() {
        return platformRegistry.descriptors();
    }

    @PostMapping("/{platform}/sessions/open")
    public BrowserSession openSession(
            @PathVariable String platform,
            @RequestBody(required = false) OpenSessionRequest request
    ) {
        RecruitmentPlatformPlugin plugin = platformRegistry.require(platform);
        OpenSessionRequest safeRequest = request == null ? new OpenSessionRequest(null, false) : request;
        return browserAutomation.openSession(new OpenBrowserSessionCommand(
                plugin.descriptor().id(), safeRequest.profile(), plugin.loginUrl(), safeRequest.headless()));
    }

    /**
     * Checks whether an opened persistent session is authenticated.
     *
     * @param platform recruitment platform code
     * @param sessionId opened browser session identifier
     * @return current authentication status
     */
    @GetMapping("/{platform}/sessions/{sessionId}/status")
    public BrowserSessionStatus sessionStatus(
            @PathVariable String platform,
            @PathVariable String sessionId
    ) {
        RecruitmentPlatformPlugin plugin = platformRegistry.require(platform);
        return browserAutomation.sessionStatus(plugin.descriptor().id(), sessionId);
    }

    public record OpenSessionRequest(String profile, boolean headless) {
    }
}
