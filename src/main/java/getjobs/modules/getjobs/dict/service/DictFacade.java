package getjobs.modules.getjobs.dict.service;

import getjobs.common.enums.RecruitmentPlatformEnum;
import getjobs.modules.getjobs.dict.api.DictBundle;
import getjobs.modules.getjobs.dict.api.DictGroup;
import getjobs.modules.getjobs.dict.service.registry.DictProviderRegistry;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Component
public class DictFacade {

    private final DictProviderRegistry registry;

    public DictFacade(DictProviderRegistry registry) {
        this.registry = registry;
    }

    public DictBundle fetchAll(RecruitmentPlatformEnum platform) {
        return registry.get(platform).fetchAll();
    }

    public Optional<DictGroup> fetchByKey(RecruitmentPlatformEnum platform, String key) {
        return registry.get(platform).fetchByKey(key);
    }

    public List<DictBundle> fetchAllPlatforms() {
        return Arrays.stream(RecruitmentPlatformEnum.values())
                .map(p -> registry.get(p).fetchAll())
                .toList();
    }
}