package getjobs.modules.recruitment.web;

import getjobs.modules.recruitment.browser.BrowserAutomationPort;
import getjobs.modules.recruitment.browser.BrowserHealth;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/recruitment/browser")
public class RecruitmentBrowserController {
    private final BrowserAutomationPort browserAutomation;

    public RecruitmentBrowserController(BrowserAutomationPort browserAutomation) {
        this.browserAutomation = browserAutomation;
    }

    @GetMapping("/health")
    public BrowserHealth health() {
        return browserAutomation.health();
    }
}
