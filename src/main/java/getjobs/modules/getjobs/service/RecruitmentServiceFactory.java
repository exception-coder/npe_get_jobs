package getjobs.modules.getjobs.service;

import getjobs.common.enums.RecruitmentPlatformEnum;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 招聘服务工厂类
 * 负责创建和管理不同招聘平台的服务实例
 * 支持Spring依赖注入
 * 
 * @author loks666
 *         项目链接: <a href=
 *         "https://github.com/loks666/get_jobs">https://github.com/loks666/get_jobs</a>
 */
@Slf4j
@Component
public class RecruitmentServiceFactory {

    private final Map<RecruitmentPlatformEnum, RecruitmentService> serviceMap = new HashMap<>();
    private final Map<String, RecruitmentService> serviceCodeMap = new HashMap<>();

    public RecruitmentServiceFactory(List<RecruitmentService> discoveredServices) {
        for (RecruitmentService service : discoveredServices) {
            RecruitmentService previous = serviceMap.putIfAbsent(service.getPlatform(), service);
            if (previous != null) {
                throw new IllegalStateException("招聘平台服务重复注册: " + service.getPlatform());
            }
            serviceCodeMap.put(service.getPlatform().getPlatformCode(), service);
            if (service.getPlatform() == RecruitmentPlatformEnum.JOB_51) {
                serviceCodeMap.put("job51", service);
            }
        }
        log.info("招聘服务工厂初始化完成，支持平台: {}", serviceMap.keySet());
    }

    /**
     * 根据平台枚举获取对应的招聘服务
     * 
     * @param platform 招聘平台枚举
     * @return 招聘服务实例
     */
    public RecruitmentService getService(RecruitmentPlatformEnum platform) {
        RecruitmentService service = serviceMap.get(platform);
        if (service == null) {
            log.error("暂不支持的招聘平台: {}", platform.getPlatformName());
            throw new UnsupportedOperationException("暂不支持的招聘平台: " + platform.getPlatformName());
        }
        return service;
    }

    /**
     * 根据平台代码获取对应的招聘服务
     * 
     * @param platformCode 平台代码
     * @return 招聘服务实例
     */
    public RecruitmentService getService(String platformCode) {
        RecruitmentService service = serviceCodeMap.get(platformCode);
        if (service == null) {
            log.error("未找到平台代码对应的招聘平台: {}", platformCode);
            throw new IllegalArgumentException("未找到平台代码对应的招聘平台: " + platformCode);
        }
        return service;
    }

    /**
     * 获取所有支持的招聘平台
     * 
     * @return 支持的招聘平台数组
     */
    public RecruitmentPlatformEnum[] getSupportedPlatforms() {
        return serviceMap.keySet().toArray(new RecruitmentPlatformEnum[0]);
    }

    /**
     * 检查是否支持指定平台
     * 
     * @param platform 招聘平台枚举
     * @return 是否支持
     */
    public boolean isSupported(RecruitmentPlatformEnum platform) {
        return serviceMap.containsKey(platform);
    }

    /**
     * 检查是否支持指定平台代码
     * 
     * @param platformCode 平台代码
     * @return 是否支持
     */
    public boolean isSupported(String platformCode) {
        return serviceCodeMap.containsKey(platformCode);
    }
}
