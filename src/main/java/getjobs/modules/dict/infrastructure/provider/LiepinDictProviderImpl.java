package getjobs.modules.dict.infrastructure.provider;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.type.TypeReference;
import getjobs.common.enums.RecruitmentPlatformEnum;
import getjobs.modules.dict.config.LiepinDictConfig;
import getjobs.modules.dict.api.DictBundle;
import getjobs.modules.dict.api.DictGroup;
import getjobs.modules.dict.api.DictGroupKey;
import getjobs.modules.dict.api.DictItem;
import getjobs.modules.dict.domain.DictProvider;
import getjobs.modules.dict.infrastructure.provider.dto.liepin.LiepinDictResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
@Service
public class LiepinDictProviderImpl implements DictProvider {

    /**
     * 省份编码集合
     */
    private static final List<String> PROVINCE_CODES = List.of(
            "140", "260", "210", "190", "160", "060", "070", "080", "090", "200",
            "250", "150", "170", "180", "010", "050", "020", "110", "130", "280",
            "030", "120", "310", "270", "040", "100", "240", "290", "230", "300",
            "220", "330", "340", "320");

    private final ObjectMapper objectMapper;
    private final LiepinDictConfig liepinDictConfig;

    public LiepinDictProviderImpl(ObjectMapper objectMapper, LiepinDictConfig liepinDictConfig) {
        this.objectMapper = objectMapper;
        this.liepinDictConfig = liepinDictConfig;
    }

    @Override
    public RecruitmentPlatformEnum platform() {
        return RecruitmentPlatformEnum.LIEPIN;
    }

    @Override
    public DictBundle fetchAll() {
        List<DictGroup> groups = new ArrayList<>();
        try {
            DictBundle dictBundle = fetchFromConfig();
            groups.addAll(dictBundle.groups());
        } catch (Exception e) {
            log.warn("获取猎聘招聘字典数据失败: {}", e.getMessage());
        }
        return new DictBundle(platform(), groups);
    }

    public DictBundle fetchFromConfig() {
        List<DictGroup> groups = new ArrayList<>();

        try {
            String dictJsonStr = liepinDictConfig.getDictJson();
            if (dictJsonStr == null || dictJsonStr.trim().isEmpty()) {
                log.warn("liepin.dict-json配置为空");
                return new DictBundle(platform(), groups);
            }

            LiepinDictResponse response = objectMapper.readValue(dictJsonStr, LiepinDictResponse.class);

            if (response == null || response.getData() == null) {
                log.warn("解析liepin.dict-json失败：响应数据为空");
                return new DictBundle(platform(), groups);
            }

            LiepinDictResponse.LiepinDictData data = response.getData();

            if (data.getWorkExperiences() != null) {
                groups.add(new DictGroup(DictGroupKey.EXPERIENCE.key(),
                        data.getWorkExperiences().stream()
                                .map(item -> new DictItem(item.getCode(), item.getName()))
                                .collect(Collectors.toList())));
            }

            if (data.getSalaries() != null) {
                groups.add(new DictGroup(DictGroupKey.SALARY.key(),
                        data.getSalaries().stream()
                                .map(item -> new DictItem(item.getCode(), item.getName()))
                                .collect(Collectors.toList())));
            }

            if (data.getCompScales() != null) {
                groups.add(new DictGroup(DictGroupKey.SCALE.key(),
                        data.getCompScales().stream()
                                .map(item -> new DictItem(item.getCode(), item.getName()))
                                .collect(Collectors.toList())));
            }

            if (data.getEducations() != null) {
                groups.add(new DictGroup(DictGroupKey.DEGREE.key(),
                        data.getEducations().stream()
                                .map(item -> new DictItem(item.getCode(), item.getName()))
                                .collect(Collectors.toList())));
            }
            if (data.getCompNatures() != null) {
                groups.add(new DictGroup(DictGroupKey.COMPANY_NATURE.key(),
                        data.getCompNatures().stream()
                                .map(item -> new DictItem(item.getCode(), item.getName()))
                                .collect(Collectors.toList())));
            }

            if (data.getIndustries() != null) {
                List<DictItem> industryItems = new ArrayList<>();
                for (var industry : data.getIndustries()) {
                    // 添加父行业
                    industryItems.add(new DictItem(industry.getCode(), industry.getName()));
                    // 添加子行业（带parentCode）
                    if (industry.getChildren() != null) {
                        for (var child : industry.getChildren()) {
                            industryItems.add(
                                    new DictItem(child.getCode(), child.getName(), null, null, industry.getCode()));
                        }
                    }
                }
                groups.add(new DictGroup(DictGroupKey.INDUSTRY.key(), industryItems));
            }

            // 处理工作性质字典
            if (data.getJobKinds() != null) {
                groups.add(new DictGroup(DictGroupKey.JOB_TYPE.key(),
                        data.getJobKinds().stream()
                                .map(item -> new DictItem(item.getCode(), item.getName()))
                                .toList()));
            }

            // 融资阶段
            if (data.getFinanceStages() != null) {
                groups.add(new DictGroup(DictGroupKey.STAGE.key(),
                        data.getFinanceStages().stream()
                                .map(item -> new DictItem(String.valueOf(item.getCode()), item.getName()))
                                .collect(Collectors.toList())));
            }

            // 招聘者活跃度
            if (data.getPubTimes() != null) {
                groups.add(new DictGroup(DictGroupKey.PUBTIMES.key(),
                        data.getPubTimes().stream()
                                .map(item -> new DictItem(String.valueOf(item.getCode()), item.getName()))
                                .collect(Collectors.toList())));
            }

            // 处理城市字典
            String dictCityJsonStr = liepinDictConfig.getDictCityJson();
            if (dictCityJsonStr != null && !dictCityJsonStr.trim().isEmpty()) {
                try {
                    Map<String, Map<String, Object>> cityMap = objectMapper.readValue(
                            dictCityJsonStr,
                            new TypeReference<Map<String, Map<String, Object>>>() {
                            });

                    List<DictItem> cityItems = cityMap.entrySet().stream()
                            .filter(entry -> {
                                String cityCode = entry.getKey();
                                Map<String, Object> cityInfo = entry.getValue();
                                String provinceCode = (String) cityInfo.get("p");
                                // 包含两种情况：
                                // 1. 省份代码在PROVINCE_CODES中的普通城市
                                // 2. 城市代码本身在PROVINCE_CODES中的直辖市（北京010、上海020、天津030、重庆040）
                                return (provinceCode != null && PROVINCE_CODES.contains(provinceCode))
                                        || PROVINCE_CODES.contains(cityCode);
                            })
                            .map(entry -> {
                                String cityCode = entry.getKey();
                                Map<String, Object> cityInfo = entry.getValue();
                                String cityName = (String) cityInfo.get("n");
                                return new DictItem(cityCode, cityName);
                            })
                            .collect(Collectors.toList());

                    if (!cityItems.isEmpty()) {
                        groups.add(new DictGroup(DictGroupKey.CITY.key(), cityItems));
                        log.info("成功加载{}个城市字典项", cityItems.size());
                    }
                } catch (Exception e) {
                    log.error("解析城市字典数据失败", e);
                }
            }

            log.info("成功从配置中解析出{}个猎聘字典组", groups.size());

        } catch (Exception e) {
            log.error("从配置解析猎聘字典数据失败", e);
        }

        return new DictBundle(platform(), groups);
    }
}
