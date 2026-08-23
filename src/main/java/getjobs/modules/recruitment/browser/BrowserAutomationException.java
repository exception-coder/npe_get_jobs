package getjobs.modules.recruitment.browser;

public class BrowserAutomationException extends RuntimeException {
    public BrowserAutomationException(String message) {
        super(message);
    }

    public BrowserAutomationException(String message, Throwable cause) {
        super(message, cause);
    }
}
