package getjobs.modules.recruitment.web;

import getjobs.modules.recruitment.browser.BrowserAutomationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Map;

@RestControllerAdvice(basePackageClasses = RecruitmentPlatformController.class)
public class RecruitmentApiExceptionHandler {
    @ExceptionHandler(IllegalArgumentException.class)
    ResponseEntity<Map<String, String>> invalidRequest(IllegalArgumentException exception) {
        return ResponseEntity.badRequest().body(Map.of(
                "error", "invalid_request",
                "message", exception.getMessage()
        ));
    }

    @ExceptionHandler(BrowserAutomationException.class)
    ResponseEntity<Map<String, String>> browserUnavailable(BrowserAutomationException exception) {
        return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body(Map.of(
                "error", "browser_unavailable",
                "message", exception.getMessage()
        ));
    }

    @ExceptionHandler(IllegalStateException.class)
    ResponseEntity<Map<String, String>> workflowConflict(IllegalStateException exception) {
        return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of(
                "error", "workflow_conflict",
                "message", exception.getMessage()
        ));
    }
}
