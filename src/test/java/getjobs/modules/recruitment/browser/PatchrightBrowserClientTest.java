package getjobs.modules.recruitment.browser;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sun.net.httpserver.HttpServer;
import getjobs.modules.recruitment.domain.RecruitmentPlatformId;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import java.net.InetSocketAddress;
import java.net.URI;
import java.nio.charset.StandardCharsets;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

class PatchrightBrowserClientTest {
    @ParameterizedTest
    @ValueSource(strings = {"", "2026-09-23-prepared-contact-v8", "2026-10-13-single-submit-contact-v9",
            "2026-10-19-reactive-contact-v10"})
    void rejectsAReachableButStaleSidecarBeforeOpeningBrowserSession(String revision) throws Exception {
        HttpServer server = HttpServer.create(new InetSocketAddress("127.0.0.1", 0), 0);
        server.createContext("/health", exchange -> {
            byte[] body = ("{\"available\":true,\"engine\":\"patchright\",\"version\":\"1.60.2\","
                    + "\"apiRevision\":\"" + revision + "\"}")
                    .getBytes(StandardCharsets.UTF_8);
            exchange.sendResponseHeaders(200, body.length);
            exchange.getResponseBody().write(body);
            exchange.close();
        });
        server.start();
        try {
            var properties = new PatchrightProperties();
            properties.setBaseUrl(URI.create("http://127.0.0.1:" + server.getAddress().getPort()));
            var client = new PatchrightBrowserClient(new ObjectMapper(), properties);

            assertThat(client.health().available()).isFalse();
            assertThatThrownBy(() -> client.openSession(new OpenBrowserSessionCommand(
                    RecruitmentPlatformId.of("boss"), "default", "https://www.zhipin.com/web/user/", false)))
                    .isInstanceOf(BrowserAutomationException.class)
                    .hasMessageContaining("浏览器服务仍是旧版本");
        } finally {
            server.stop(0);
        }
    }

    @Test
    void acceptsTheKeyboardContactSidecarRevision() throws Exception {
        HttpServer server = HttpServer.create(new InetSocketAddress("127.0.0.1", 0), 0);
        server.createContext("/health", exchange -> {
            byte[] body = ("{\"available\":true,\"engine\":\"patchright\",\"version\":\"1.60.2\","
                    + "\"apiRevision\":\"2026-10-21-keyboard-contact-v11\"}")
                    .getBytes(StandardCharsets.UTF_8);
            exchange.sendResponseHeaders(200, body.length);
            exchange.getResponseBody().write(body);
            exchange.close();
        });
        server.start();
        try {
            var properties = new PatchrightProperties();
            properties.setBaseUrl(URI.create("http://127.0.0.1:" + server.getAddress().getPort()));
            var client = new PatchrightBrowserClient(new ObjectMapper(), properties);
            assertThat(client.health().available()).isTrue();
        } finally {
            server.stop(0);
        }
    }
}
