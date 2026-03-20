package getjobs.modules.getjobs.dict.web;

import getjobs.common.enums.RecruitmentPlatformEnum;
import getjobs.modules.getjobs.dict.api.DictBundle;
import getjobs.modules.getjobs.dict.api.DictGroup;
import getjobs.modules.getjobs.dict.service.DictFacade;
import getjobs.modules.getjobs.dict.domain.provider.Job51DictProviderImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/dicts")
public class DictController {

    private final DictFacade dictFacade;
    private final Job51DictProviderImpl job51DictProvider;

    public DictController(DictFacade dictFacade, Job51DictProviderImpl job51DictProvider) {
        this.dictFacade = dictFacade;
        this.job51DictProvider = job51DictProvider;
    }

    /**
     * 平台字典值
     *
     * @param platform
     * @return
     */
    @GetMapping("/{platform}")
    public DictBundle all(@PathVariable("platform") RecruitmentPlatformEnum platform) {
        return dictFacade.fetchAll(platform);
    }

    /**
     * 获取所有平台字典数据
     *
     * @return 所有平台字典数据列表
     */
    @GetMapping
    public List<DictBundle> allPlatforms() {
        return dictFacade.fetchAllPlatforms();
    }

    // 取某一分组（如 payTypeList）
    @GetMapping("/{platform}/{key}")
    public ResponseEntity<DictGroup> group(@PathVariable("platform") RecruitmentPlatformEnum platform,
            @PathVariable("key") String key) {
        return dictFacade.fetchByKey(platform, key)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    /**
     * 直接从配置中获取Job51字典数据
     * 
     * @return 字典数据包
     */
    @GetMapping("/job51/config")
    public DictBundle job51FromConfig() {
        return job51DictProvider.fetchFromConfig();
    }
}