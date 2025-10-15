package getjobs.modules.ai.greeting.validate;

import org.springframework.stereotype.Component;

@Component
public class LengthValidator {
    public void check(String text, int maxChars) {
        if (text.codePointCount(0, text.length()) > maxChars) {
            throw new IllegalArgumentException("Exceed max chars");
        }
    }
}