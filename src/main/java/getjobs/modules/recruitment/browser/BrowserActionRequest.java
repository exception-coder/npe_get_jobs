package getjobs.modules.recruitment.browser;

/** Internal sidecar envelope used only by the HTTP adapter. */
record BrowserActionRequest(String sessionId, String platformId, String action, Object input) {
}
