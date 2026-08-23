package getjobs.modules.recruitment.application;

import getjobs.modules.recruitment.domain.PlatformDescriptor;
import getjobs.modules.recruitment.domain.RecruitmentPlatformId;
import getjobs.modules.recruitment.spi.RecruitmentPlatformPlugin;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/** Auto-collected platform plugin registry. */
@Service
public class RecruitmentPlatformRegistry {
    private final Map<RecruitmentPlatformId, RecruitmentPlatformPlugin> plugins;
    private final List<PlatformDescriptor> descriptors;

    public RecruitmentPlatformRegistry(List<RecruitmentPlatformPlugin> discoveredPlugins) {
        Map<RecruitmentPlatformId, RecruitmentPlatformPlugin> indexed = new LinkedHashMap<>();
        discoveredPlugins.stream()
                .sorted(Comparator.comparing(plugin -> plugin.descriptor().order()))
                .forEach(plugin -> {
                    RecruitmentPlatformId id = plugin.descriptor().id();
                    if (indexed.putIfAbsent(id, plugin) != null) {
                        throw new IllegalStateException("duplicate recruitment platform plugin: " + id);
                    }
                });
        this.plugins = Map.copyOf(indexed);
        this.descriptors = indexed.values().stream().map(RecruitmentPlatformPlugin::descriptor).toList();
    }

    public List<PlatformDescriptor> descriptors() {
        return descriptors;
    }

    public RecruitmentPlatformPlugin require(String platformId) {
        RecruitmentPlatformId id = RecruitmentPlatformId.of(platformId);
        RecruitmentPlatformPlugin plugin = plugins.get(id);
        if (plugin == null) {
            throw new IllegalArgumentException("unsupported recruitment platform: " + id);
        }
        return plugin;
    }
}
