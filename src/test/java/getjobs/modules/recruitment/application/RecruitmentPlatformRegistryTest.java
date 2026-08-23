package getjobs.modules.recruitment.application;

import getjobs.modules.recruitment.domain.PlatformDescriptor;
import getjobs.modules.recruitment.domain.RecruitmentPlatformId;
import getjobs.modules.recruitment.spi.RecruitmentPlatformPlugin;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Set;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

class RecruitmentPlatformRegistryTest {
    @Test
    void sortsPluginsByDeclaredOrder() {
        RecruitmentPlatformRegistry registry = new RecruitmentPlatformRegistry(List.of(
                plugin("liepin", 40), plugin("boss", 10)));

        assertThat(registry.descriptors())
                .extracting(descriptor -> descriptor.id().value())
                .containsExactly("boss", "liepin");
    }

    @Test
    void failsFastOnDuplicatePlatformId() {
        assertThatThrownBy(() -> new RecruitmentPlatformRegistry(List.of(plugin("boss", 10), plugin("boss", 20))))
                .isInstanceOf(IllegalStateException.class)
                .hasMessageContaining("duplicate recruitment platform plugin");
    }

    private RecruitmentPlatformPlugin plugin(String id, int order) {
        PlatformDescriptor descriptor = new PlatformDescriptor(
                RecruitmentPlatformId.of(id), id, "mdi-test", order, Set.of());
        return new RecruitmentPlatformPlugin() {
            @Override
            public PlatformDescriptor descriptor() {
                return descriptor;
            }

            @Override
            public String loginUrl() {
                return "https://example.com";
            }
        };
    }
}
