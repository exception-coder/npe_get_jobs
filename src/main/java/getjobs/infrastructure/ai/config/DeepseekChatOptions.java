package getjobs.infrastructure.ai.config;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.ai.openai.OpenAiChatOptions;

/**
 * Deepseek 对话选项：在 OpenAI 兼容选项基础上增加 enable_search（联网搜索）。
 * 请求体会包含 "enable_search": true，供 Deepseek API 使用。
 */
public class DeepseekChatOptions extends OpenAiChatOptions {

    /** 是否启用联网搜索，对应 API 参数 enable_search */
    @JsonProperty("enable_search")
    private Boolean enableSearch = Boolean.TRUE;

    public Boolean getEnableSearch() {
        return enableSearch;
    }

    public void setEnableSearch(Boolean enableSearch) {
        this.enableSearch = enableSearch;
    }

    /** 构建 Deepseek 选项（含 enable_search），避免与父类 builder() 冲突 */
    public static DeepseekBuilder deepseekBuilder() {
        return new DeepseekBuilder();
    }

    public static class DeepseekBuilder {
        private String model;
        private Double temperature;
        private Integer maxTokens;
        private Boolean enableSearch = Boolean.TRUE;

        public DeepseekBuilder model(String model) {
            this.model = model;
            return this;
        }

        public DeepseekBuilder temperature(Double temperature) {
            this.temperature = temperature;
            return this;
        }

        public DeepseekBuilder maxTokens(Integer maxTokens) {
            this.maxTokens = maxTokens;
            return this;
        }

        public DeepseekBuilder enableSearch(Boolean enableSearch) {
            this.enableSearch = enableSearch != null ? enableSearch : Boolean.TRUE;
            return this;
        }

        public DeepseekChatOptions build() {
            DeepseekChatOptions options = new DeepseekChatOptions();
            options.setEnableSearch(enableSearch);
            if (model != null) {
                options.setModel(model);
            }
            if (temperature != null) {
                options.setTemperature(temperature);
            }
            if (maxTokens != null) {
                options.setMaxTokens(maxTokens);
            }
            return options;
        }
    }
}
