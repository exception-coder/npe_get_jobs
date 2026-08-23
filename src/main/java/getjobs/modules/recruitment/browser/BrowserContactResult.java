package getjobs.modules.recruitment.browser;

import getjobs.modules.recruitment.domain.ContactResult;

import java.util.List;

/** Batch result returned by the Patchright contact action. */
public record BrowserContactResult(List<ContactResult> results, int contacted, boolean sideEffect) {
    public BrowserContactResult {
        results = List.copyOf(results);
    }
}
