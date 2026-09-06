package getjobs.modules.recruitment.application;

import getjobs.infrastructure.ai.config.DeepseekConfigRefreshService;
import getjobs.repository.UserProfileRepository;
import getjobs.repository.entity.UserProfile;
import org.junit.jupiter.api.Test;
import org.springframework.mock.env.MockEnvironment;
import org.springframework.transaction.support.TransactionTemplate;
import java.util.Map;
import java.util.Optional;
import java.util.function.Consumer;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class DeepseekSettingsServiceTest {
    @Test
    void preservesKeyAndOtherSettingsAndRestoresModel() {
        var repository = mock(UserProfileRepository.class);
        var refresh = mock(DeepseekConfigRefreshService.class);
        var transaction = mock(TransactionTemplate.class);
        doAnswer(invocation -> { invocation.<Consumer<Object>>getArgument(0).accept(null); return null; })
                .when(transaction).executeWithoutResult(any());
        var environment = new MockEnvironment().withProperty("spring.ai.deepseek.api-key", "test-only")
                .withProperty("spring.ai.deepseek.chat.options.model", "deepseek-chat");
        var profile = new UserProfile();
        profile.setAiPlatformConfigs(Map.of("deepseek", "test-only", "another-provider", "untouched"));
        when(repository.findFirstByOrderByIdAsc()).thenReturn(Optional.of(profile));
        when(refresh.updateConfigs(anyMap())).thenReturn(true);
        var service = new DeepseekSettingsService(repository, refresh, environment, transaction);
        service.save("", "deepseek-v4-flash");
        assertEquals("test-only", profile.getAiPlatformConfigs().get("deepseek"));
        assertEquals("untouched", profile.getAiPlatformConfigs().get("another-provider"));
        assertFalse(service.status().toString().contains("test-only"));
        service.restore();
        verify(refresh, times(2)).updateConfigs(Map.of("api-key", "test-only", "model", "deepseek-v4-flash",
                "base-url", "https://api.deepseek.com", "completions-path", "/chat/completions"));
        assertThrows(IllegalArgumentException.class, () -> service.save("", "bad model"));
    }

    @Test
    void missingKeyDoesNotPersistOrRefresh() {
        var repository = mock(UserProfileRepository.class);
        var refresh = mock(DeepseekConfigRefreshService.class);
        var service = new DeepseekSettingsService(repository, refresh, new MockEnvironment(),
                mock(TransactionTemplate.class));
        assertThrows(IllegalArgumentException.class, () -> service.save("", "deepseek-chat"));
        verifyNoInteractions(refresh);
        verify(repository, never()).saveAndFlush(any());
    }

    @Test
    void customRequiresOwnCredentialAndSwitchingBackRestoresDeepseek() {
        var repository = mock(UserProfileRepository.class);
        var refresh = mock(DeepseekConfigRefreshService.class);
        var transaction = mock(TransactionTemplate.class);
        doAnswer(invocation -> { invocation.<Consumer<Object>>getArgument(0).accept(null); return null; })
                .when(transaction).executeWithoutResult(any());
        var profile = new UserProfile();
        profile.setAiPlatformConfigs(Map.of("deepseek", "deepseek-test"));
        when(repository.findFirstByOrderByIdAsc()).thenReturn(Optional.of(profile));
        when(refresh.updateConfigs(anyMap())).thenReturn(true);
        var service = new DeepseekSettingsService(repository, refresh, new MockEnvironment(), transaction);
        assertThrows(IllegalArgumentException.class, () -> service.save(
                new DeepseekSettingsService.SettingsUpdate("custom", "https://example.com/v1", "", "org/model")));
        service.save(new DeepseekSettingsService.SettingsUpdate("custom", "https://example.com/v1/",
                "custom-test", "org/model"));
        assertEquals("custom", service.status().provider());
        verify(refresh).updateConfigs(Map.of("api-key", "custom-test", "base-url", "https://example.com/v1",
                "model", "org/model", "completions-path", "/chat/completions"));
        assertThrows(IllegalArgumentException.class, () -> service.save(
                new DeepseekSettingsService.SettingsUpdate("custom", "https://other.example/v1", "", "org/model")));
        assertThrows(IllegalArgumentException.class, () -> service.save(
                new DeepseekSettingsService.SettingsUpdate("custom", "https://example.com/v1?key=secret", "x", "model")));
        service.save("", "deepseek-chat");
        assertEquals("deepseek", service.status().provider());
        assertEquals("custom-test", profile.getAiPlatformConfigs().get("custom"));
        verify(refresh).updateConfigs(Map.of("api-key", "deepseek-test", "base-url", "https://api.deepseek.com",
                "model", "deepseek-chat", "completions-path", "/chat/completions"));
    }
}
