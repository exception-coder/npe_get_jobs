package getjobs.modules.recruitment.browser;

/** Authentication status for an already opened persistent browser session. */
public record BrowserSessionStatus(boolean authenticated, String currentUrl, String recoveryAction) {
}
