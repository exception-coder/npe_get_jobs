package getjobs.modules.sasl.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;

import java.util.Arrays;

/**
 * 致电状态枚举。
 */
@Getter
public enum CallStatus {
    /**
     * NA（未处理）
     */
    NA("NA", "NA"),

    /**
     * 拒絕
     */
    REJECTED("拒絕", "拒絕"),

    /**
     * 考慮
     */
    CONSIDERING("考慮", "考慮"),

    /**
     * 登記
     */
    REGISTERED("登記", "登記");

    /**
     * 状态代码
     */
    @JsonValue
    private final String code;

    /**
     * 状态中文文本
     */
    private final String text;

    CallStatus(String code, String text) {
        this.code = code;
        this.text = text;
    }

    /**
     * 根据代码获取枚举。
     *
     * @param code 状态代码
     * @return 致电状态枚举，如果未找到返回 null
     */
    public static CallStatus fromCode(String code) {
        if (code == null) {
            return null;
        }
        return Arrays.stream(values())
                .filter(status -> status.code.equals(code))
                .findFirst()
                .orElse(null);
    }

    /**
     * Jackson 反序列化方法，支持从枚举名称或 code 值反序列化。
     * 优先尝试通过 code 值匹配，如果失败则尝试通过枚举名称匹配。
     *
     * @param value 枚举名称或 code 值
     * @return 致电状态枚举，如果未找到返回 null
     */
    @JsonCreator
    public static CallStatus fromString(String value) {
        if (value == null || value.trim().isEmpty()) {
            return null;
        }
        // 首先尝试通过 code 值匹配
        CallStatus byCode = fromCode(value);
        if (byCode != null) {
            return byCode;
        }
        // 如果 code 匹配失败，尝试通过枚举名称匹配
        try {
            return valueOf(value);
        } catch (IllegalArgumentException e) {
            // 如果枚举名称也不匹配，返回 null
            return null;
        }
    }

    /**
     * 根据中文文本获取枚举。
     *
     * @param text 状态中文文本
     * @return 致电状态枚举，如果未找到返回 null
     */
    public static CallStatus fromText(String text) {
        if (text == null) {
            return null;
        }
        return Arrays.stream(values())
                .filter(status -> status.text.equals(text))
                .findFirst()
                .orElse(null);
    }
}
