package getjobs.modules.recruitment.browser;

import getjobs.modules.recruitment.domain.ContactPreparation;

import java.util.List;

/** Side-effect-free contact-context inspection returned by Patchright. */
public record BrowserContactPreparationResult(
        List<ContactPreparation> results,
        int prepared,
        boolean sideEffect
) {
    public BrowserContactPreparationResult {
        results = List.copyOf(results);
        if (sideEffect) {
            throw new IllegalArgumentException("contact preparation must not have side effects");
        }
    }
}
