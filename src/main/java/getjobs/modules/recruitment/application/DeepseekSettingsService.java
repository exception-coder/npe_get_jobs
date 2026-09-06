package getjobs.modules.recruitment.application;

import getjobs.infrastructure.ai.config.DeepseekConfigRefreshService;
import getjobs.repository.UserProfileRepository;
import getjobs.repository.entity.UserProfile;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import org.springframework.transaction.support.TransactionTemplate;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/** Owns persisted DeepSeek settings without exposing credentials to readers. */
@Service
public class DeepseekSettingsService {
    private static final String KEY = "deepseek";
    private static final String MODEL = "deepseek-model";
    private static final List<String> MODELS = List.of("deepseek-v4-flash", "deepseek-v4-pro",
            "deepseek-reasoner");
    private final UserProfileRepository profiles;
    private final DeepseekConfigRefreshService refresh;
    private final Environment environment;
    private final TransactionTemplate transactions;
    private final String defaultKey;
    private final String defaultModel;
    private String activeProvider = "deepseek";

    public DeepseekSettingsService(UserProfileRepository profiles, DeepseekConfigRefreshService refresh,
            Environment environment, TransactionTemplate transactions) {
        this.profiles = profiles;
        this.refresh = refresh;
        this.environment = environment;
        this.transactions = transactions;
        this.defaultKey = environment.getProperty("spring.ai.deepseek.api-key", "");
        this.defaultModel = environment.getProperty("spring.ai.deepseek.chat.options.model", "deepseek-v4-flash");
    }

    /** Returns effective runtime state; a configured key has not necessarily been verified remotely. */
    public synchronized Status status() {
        return status(activeProvider);
    }

    /** Reads one profile without changing the active provider. */
    public synchronized Status status(String provider) {
        String selected = requireProvider(provider == null ? activeProvider : provider);
        Map<String, String> values = savedValues();
        String prefix = selected.equals("deepseek") ? "deepseek" : "custom";
        String key = values.getOrDefault(prefix, selected.equals("deepseek") ? defaultKey : "");
        String model = values.getOrDefault(prefix + "-model", selected.equals("deepseek") ? defaultModel : "");
        String url = selected.equals("deepseek") ? "https://api.deepseek.com"
                : values.getOrDefault("custom-url", "");
        return new Status(!key.isBlank(), model, selected.equals("deepseek") ? MODELS : List.of(),
                selected, url, activeProvider);
    }

    private Map<String, String> savedValues() {
        return profiles.findFirstByOrderByIdAsc().map(UserProfile::getAiPlatformConfigs).orElse(Map.of());
    }

    private String requireProvider(String provider) {
        if (!List.of("deepseek", "custom").contains(provider)) {
            throw new IllegalArgumentException("请选择 DeepSeek 或自定义兼容服务");
        }
        return provider;
    }

    /** Blank keys retain the existing credential; only these two settings are merged into the profile. */
    public synchronized Status save(String apiKey, String model) {
        return save(new SettingsUpdate("deepseek", "https://api.deepseek.com", apiKey, model));
    }

    /** Saves and activates only the selected provider; credentials never cross provider boundaries. */
    public synchronized Status save(SettingsUpdate update) {
        String provider = requireProvider(update.provider() == null ? "deepseek" : update.provider());
        String url = provider.equals("deepseek") ? "https://api.deepseek.com" : normalizeUrl(update.baseUrl());
        String apiKey = update.apiKey();
        String model = update.model();
        String normalizedModel = model == null ? "" : model.trim();
        String normalizedKey = apiKey == null ? "" : apiKey.trim();
        if (!normalizedModel.matches("[a-zA-Z0-9][a-zA-Z0-9._:/-]{0,199}")) {
            throw new IllegalArgumentException("请选择或填写有效的模型 ID");
        }
        if (normalizedKey.length() > 512 || normalizedKey.chars().anyMatch(Character::isWhitespace)) {
            throw new IllegalArgumentException("API Key 格式不正确");
        }
        Status previous = status(provider);
        if (normalizedKey.isBlank() && (!previous.configured()
                || (provider.equals("custom") && !url.equals(previous.baseUrl())))) {
            throw new IllegalArgumentException("首次配置或更换地址时，请填写该服务的 API Key");
        }
        transactions.executeWithoutResult(transaction -> {
            UserProfile profile = profiles.findFirstByOrderByIdAsc().orElseGet(UserProfile::new);
            Map<String, String> values = new LinkedHashMap<>(profile.getAiPlatformConfigs() == null
                    ? Map.of() : profile.getAiPlatformConfigs());
            values.put(provider + "-model", normalizedModel);
            values.put("model-provider", provider);
            if (provider.equals("custom")) {
                values.put("custom-url", url);
            }
            if (!normalizedKey.isBlank()) {
                values.put(provider, normalizedKey);
            }
            profile.setAiPlatformConfigs(values);
            profiles.saveAndFlush(profile);
        });
        activate(provider);
        return status();
    }

    /** Restores saved overrides after the database and model infrastructure are ready. */
    @EventListener(ApplicationReadyEvent.class)
    public synchronized void restore() {
        activate(savedValues().getOrDefault("model-provider", "deepseek"));
    }

    private void activate(String provider) {
        Status selected = status(provider);
        Map<String, String> values = savedValues();
        String key = values.getOrDefault(provider, provider.equals("deepseek") ? defaultKey : "");
        apply(Map.of("model", selected.model(), "api-key", key, "base-url", selected.baseUrl(),
                "completions-path", "/chat/completions"));
        activeProvider = provider;
    }

    private String normalizeUrl(String value) {
        try {
            var uri = java.net.URI.create(value == null ? "" : value.trim());
            boolean local = uri.getHost() != null && List.of("localhost", "127.0.0.1", "[::1]").contains(uri.getHost());
            if (uri.getHost() == null || !("https".equals(uri.getScheme())
                    || (local && "http".equals(uri.getScheme()))) || uri.getUserInfo() != null
                    || uri.getQuery() != null || uri.getFragment() != null) {
                throw new IllegalArgumentException();
            }
            String url = uri.toString().replaceAll("/+$", "");
            if (url.length() > 500 || url.endsWith("/chat/completions")) {
                throw new IllegalArgumentException();
            }
            return url;
        } catch (IllegalArgumentException exception) {
            throw new IllegalArgumentException("请输入 HTTPS Base URL（本机允许 HTTP），不要包含密钥或 /chat/completions");
        }
    }

    private void apply(Map<String, String> updates) {
        if (!refresh.updateConfigs(updates)) {
            throw new IllegalStateException("配置已保存，但运行时刷新失败，请重启服务后重试");
        }
    }

    /** Safe configuration status: presence only, never the API key. */
    public record Status(Boolean configured, String model, List<String> models,
            String provider, String baseUrl, String activeProvider) { }

    /** Write-only credentials and the explicitly selected provider endpoint. */
    public record SettingsUpdate(String provider, String baseUrl, String apiKey, String model) {
        @Override
        public String toString() { return "SettingsUpdate[credentials=REDACTED]"; }
    }
}
