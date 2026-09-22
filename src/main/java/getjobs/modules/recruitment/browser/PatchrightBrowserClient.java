package getjobs.modules.recruitment.browser;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.List;
import java.util.Map;

import getjobs.modules.recruitment.domain.RecruitmentJob;
import getjobs.modules.recruitment.domain.RecruitmentPlatformId;

/** Loopback HTTP adapter for the Node Patchright sidecar. */
@Component
@EnableConfigurationProperties(PatchrightProperties.class)
public class PatchrightBrowserClient implements BrowserAutomationPort {
    private static final String REQUIRED_API_REVISION = "2026-09-22-city-search-v5";
    private static final Duration DEFAULT_REQUEST_TIMEOUT = Duration.ofSeconds(45);
    private static final Duration ACTION_REQUEST_TIMEOUT = Duration.ofMinutes(10);

    private final HttpClient httpClient;
    private final ObjectMapper objectMapper;
    private final PatchrightProperties properties;

    public PatchrightBrowserClient(ObjectMapper objectMapper, PatchrightProperties properties) {
        this.objectMapper = objectMapper;
        this.properties = properties;
        this.httpClient = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(3)).build();
    }

    @Override
    public BrowserHealth health() {
        if (!properties.isEnabled()) {
            return new BrowserHealth(false, "patchright", "disabled", REQUIRED_API_REVISION);
        }
        BrowserHealth remote = get("/health", BrowserHealth.class);
        return new BrowserHealth(remote.available() && REQUIRED_API_REVISION.equals(remote.apiRevision()),
                remote.engine(), remote.version(), remote.apiRevision());
    }

    @Override
    public BrowserSession openSession(OpenBrowserSessionCommand command) {
        requireCompatibleSidecar();
        return post("/v1/sessions", command, BrowserSession.class, DEFAULT_REQUEST_TIMEOUT);
    }

    @Override
    public BrowserSessionStatus sessionStatus(RecruitmentPlatformId platformId, String sessionId) {
        return action(platformId, sessionId, "sessionStatus", Map.of(), BrowserSessionStatus.class);
    }

    @Override
    public BrowserJobDiscoveryResult discoverJobs(DiscoverBrowserJobsCommand command) {
        DiscoveryInput input = new DiscoveryInput(
                command.searches(), command.filters(), command.maxScrolls(), command.limit());
        return action(command.platformId(), command.sessionId(), "discover", input, BrowserJobDiscoveryResult.class);
    }

    @Override
    public BrowserContactPreparationResult prepareContacts(PrepareBrowserContactsCommand command) {
        return action(command.platformId(), command.sessionId(), "prepareContact",
                new PrepareContactInput(command.jobs()), BrowserContactPreparationResult.class);
    }

    @Override
    public BrowserContactResult contactJobs(ContactBrowserJobsCommand command) {
        ContactInput input = new ContactInput(
                command.jobs(), command.confirmContact(), command.greeting(), command.delayMs(),
                command.deliveryOptions());
        return action(command.platformId(), command.sessionId(), "contact", input, BrowserContactResult.class);
    }

    private <T> T action(
            RecruitmentPlatformId platformId,
            String sessionId,
            String action,
            Object input,
            Class<T> responseType
    ) {
        requireCompatibleSidecar();
        BrowserActionRequest request = new BrowserActionRequest(sessionId, platformId.value(), action, input);
        return post("/v1/actions", request, responseType, ACTION_REQUEST_TIMEOUT);
    }

    private void requireCompatibleSidecar() {
        BrowserHealth remote = get("/health", BrowserHealth.class);
        if (!remote.available() || !REQUIRED_API_REVISION.equals(remote.apiRevision())) {
            throw new BrowserAutomationException(
                    "浏览器服务仍是旧版本，请完全停止应用及残留 Node 进程后重新启动");
        }
    }

    private <T> T get(String path, Class<T> responseType) {
        HttpRequest request = HttpRequest.newBuilder(resolve(path)).GET().timeout(Duration.ofSeconds(5)).build();
        return exchange(request, responseType);
    }

    private <T> T post(String path, Object body, Class<T> responseType, Duration timeout) {
        try {
            HttpRequest request = HttpRequest.newBuilder(resolve(path))
                    .header("Content-Type", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(objectMapper.writeValueAsString(body)))
                    .timeout(timeout)
                    .build();
            return exchange(request, responseType);
        } catch (IOException exception) {
            throw new BrowserAutomationException("failed to serialize Patchright request", exception);
        }
    }

    private <T> T exchange(HttpRequest request, Class<T> responseType) {
        try {
            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.statusCode() < 200 || response.statusCode() >= 300) {
                throw new BrowserAutomationException("Patchright sidecar returned " + response.statusCode() + ": " + response.body());
            }
            return objectMapper.readValue(response.body(), responseType);
        } catch (InterruptedException exception) {
            Thread.currentThread().interrupt();
            throw new BrowserAutomationException("Patchright request interrupted", exception);
        } catch (IOException exception) {
            throw new BrowserAutomationException("Patchright sidecar is unavailable", exception);
        }
    }

    private URI resolve(String path) {
        return properties.getBaseUrl().resolve(path);
    }

    private record DiscoveryInput(
            List<BrowserSearch> searches,
            Map<String, Object> filters,
            int maxScrolls,
            int limit
    ) {
    }

    private record ContactInput(
            List<RecruitmentJob> jobs,
            boolean confirmContact,
            String greeting,
            long delayMs,
            getjobs.modules.recruitment.domain.ContactDeliveryOptions deliveryOptions
    ) {
    }

    private record PrepareContactInput(List<RecruitmentJob> jobs) {
    }
}
