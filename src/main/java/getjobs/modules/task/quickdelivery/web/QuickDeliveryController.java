package getjobs.modules.task.quickdelivery.web;

import getjobs.common.enums.RecruitmentPlatformEnum;
import getjobs.common.infrastructure.task.domain.Task;
import getjobs.modules.task.quickdelivery.service.QuickDeliveryScheduler;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

/**
 * 快速投递任务控制器
 * 提供快速投递任务的HTTP接口
 * 
 * @author getjobs
 */
@Slf4j
@RestController
@RequestMapping("/api/task/quick-delivery")
@RequiredArgsConstructor
public class QuickDeliveryController {

    private final QuickDeliveryScheduler quickDeliveryScheduler;

    /**
     * 提交指定平台的快速投递任务
     * 
     * @param platformCode 平台代码（boss/zhilian/51job/liepin）
     * @return 任务对象
     */
    @PostMapping("/submit/{platformCode}")
    public Task submitQuickDelivery(@PathVariable String platformCode) {
        log.info("接收到快速投递任务请求，平台: {}", platformCode);

        RecruitmentPlatformEnum platform = RecruitmentPlatformEnum.getByCode(platformCode);
        if (platform == null) {
            throw new IllegalArgumentException("不支持的平台代码: " + platformCode);
        }

        return quickDeliveryScheduler.submitQuickDeliveryTask(platform);
    }

    /**
     * 提交Boss直聘快速投递任务
     * 
     * @return 任务对象
     */
    @PostMapping("/submit/boss")
    public Task submitBossQuickDelivery() {
        log.info("接收到Boss直聘快速投递任务请求");
        return quickDeliveryScheduler.submitBossQuickDelivery();
    }

    /**
     * 提交智联招聘快速投递任务
     * 
     * @return 任务对象
     */
    @PostMapping("/submit/zhilian")
    public Task submitZhilianQuickDelivery() {
        log.info("接收到智联招聘快速投递任务请求");
        return quickDeliveryScheduler.submitZhilianQuickDelivery();
    }

    /**
     * 提交51job快速投递任务
     * 
     * @return 任务对象
     */
    @PostMapping("/submit/51job")
    public Task submitJob51QuickDelivery() {
        log.info("接收到51job快速投递任务请求");
        return quickDeliveryScheduler.submitJob51QuickDelivery();
    }

    /**
     * 提交猎聘快速投递任务
     * 
     * @return 任务对象
     */
    @PostMapping("/submit/liepin")
    public Task submitLiepinQuickDelivery() {
        log.info("接收到猎聘快速投递任务请求");
        return quickDeliveryScheduler.submitLiepinQuickDelivery();
    }

    /**
     * 提交所有平台的快速投递任务
     */
    @PostMapping("/submit/all")
    public void submitAllPlatformsQuickDelivery() {
        log.info("接收到所有平台快速投递任务请求");
        quickDeliveryScheduler.submitAllPlatformsQuickDelivery();
    }
}
