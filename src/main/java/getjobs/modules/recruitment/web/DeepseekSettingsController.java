package getjobs.modules.recruitment.web;

import getjobs.modules.recruitment.application.DeepseekSettingsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

/** Dedicated local model settings API; read responses never include credentials. */
@RestController
@RequestMapping("/api/recruitment/model-settings")
public class DeepseekSettingsController {
    private final DeepseekSettingsService settings;

    public DeepseekSettingsController(DeepseekSettingsService settings) {
        this.settings = settings;
    }

    @GetMapping
    public DeepseekSettingsService.Status get(@RequestParam(required = false) String provider) {
        return settings.status(provider);
    }

    @PutMapping
    public DeepseekSettingsService.Status save(@RequestBody Update request) {
        return settings.save(new DeepseekSettingsService.SettingsUpdate(
                request.provider(), request.baseUrl(), request.apiKey(), request.model()));
    }

    /** Key is write-only; empty means retain, model is the exact provider model ID. */
    public record Update(String apiKey, String model, String provider, String baseUrl) {
        @Override
        public String toString() {
            return "Update[apiKey=REDACTED, model=" + model + "]";
        }
    }
}
