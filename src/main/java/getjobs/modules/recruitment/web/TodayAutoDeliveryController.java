package getjobs.modules.recruitment.web;

import getjobs.modules.recruitment.workflow.TodayAutoDeliveryService;
import org.springframework.web.bind.annotation.*;

/** Explicit batch-send authorization and progress endpoints. */
@RestController
@RequestMapping("/api/recruitment/auto-delivery")
public class TodayAutoDeliveryController {
    private final TodayAutoDeliveryService service;
    public TodayAutoDeliveryController(TodayAutoDeliveryService service) { this.service = service; }
    @GetMapping
    public TodayAutoDeliveryService.Progress status() { return service.status(); }
    @PostMapping
    public TodayAutoDeliveryService.Progress start(@RequestBody Request request) {
        if (!Boolean.TRUE.equals(request.confirmSend())) throw new IllegalArgumentException("请确认真实发送");
        return service.start(request.platform(), request.goalId(), request.greeting(), Boolean.TRUE.equals(request.sendResumeImage()),
                request.resumeImagePath());
    }
    @PostMapping("/stop")
    public TodayAutoDeliveryService.Progress stop() { return service.stop(); }
    /** User-edited greeting and image consent are frozen for this batch. */
    public record Request(String platform, Long goalId, String greeting, Boolean sendResumeImage,
                          String resumeImagePath, Boolean confirmSend) { }
}
