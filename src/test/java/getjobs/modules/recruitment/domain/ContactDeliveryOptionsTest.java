package getjobs.modules.recruitment.domain;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ContactDeliveryOptionsTest {
    @Test
    void omissionDoesNotAuthorizeImageSend() {
        assertFalse(new ContactDeliveryOptions(null, "C:/private.png").sendResumeImage());
        assertEquals("", new ContactDeliveryOptions(false, "C:/private.png").resumeImagePath());
    }

    @Test
    void imageRequiresExplicitPath() {
        assertThrows(IllegalArgumentException.class, () -> new ContactDeliveryOptions(true, " "));
        assertEquals("C:/resume.png", new ContactDeliveryOptions(true, " C:/resume.png ").resumeImagePath());
    }

    @Test
    void browserOutcomeKeepsIndependentEvidence() throws Exception {
        ContactResult result = new ObjectMapper().readValue("""
                {"platformJobId":"job","status":"SUCCEEDED","reason":"IMAGE_DELIVERED_TEXT_DRAFT_ONLY",
                "conversationEstablished":true,"draftFilled":true,"textSent":false,"imageDelivered":true}
                """, ContactResult.class);
        assertTrue(result.conversationEstablished());
        assertTrue(result.imageDelivered());
        assertFalse(result.textSent());
    }
}
