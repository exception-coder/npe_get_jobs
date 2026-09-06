package getjobs.infrastructure.ai.config;

import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.client.MockRestServiceServer;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.*;
import static org.springframework.test.web.client.response.MockRestResponseCreators.*;

class DeepseekJsonRequestTest {
    @Test
    void disablesThinkingOnlyForOfficialJsonRequests() {
        for (String host : new String[] { "api.deepseek.com", "example.com" }) {
            var builder = new DeepseekApiHttpClientConfig().deepseekApiRestClientBuilder();
            var server = MockRestServiceServer.bindTo(builder).build();
            var expectation = server.expect(requestTo("https://" + host + "/chat/completions"));
            if ("api.deepseek.com".equals(host)) {
                expectation.andExpect(jsonPath("$.thinking.type").value("disabled"));
            } else {
                expectation.andExpect(jsonPath("$.thinking").doesNotExist());
            }
            expectation.andExpect(jsonPath("$.max_tokens").value(8192))
                    .andRespond(withSuccess("{}", MediaType.APPLICATION_JSON));
            builder.build().post().uri("https://" + host + "/chat/completions")
                    .contentType(MediaType.APPLICATION_JSON)
                    .body("{\"response_format\":{\"type\":\"json_object\"},\"max_tokens\":8192}")
                    .retrieve().body(String.class);
            server.verify();
        }
    }
}
