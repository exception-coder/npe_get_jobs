package getjobs.common.infrastructure.accesslog;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

/**
 * Access 日志记录
 * <p>
 * 用于存储同一秒内同一 IP 的请求信息
 * </p>
 *
 * @author getjobs
 * @since 2025-01-XX
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AccessLogRecord {

    /**
     * 客户端 IP 地址
     */
    private String ip;

    /**
     * 时间戳（秒级）
     */
    private long timestamp;

    /**
     * 请求方法 + 请求路径的集合
     * 格式：METHOD:path，例如 "GET:/api/users", "POST:/api/auth/login"
     */
    private Set<String> requests = new HashSet<>();

    /**
     * 请求次数
     */
    private int count = 0;

    /**
     * 添加请求记录
     *
     * @param method 请求方法
     * @param path   请求路径
     */
    public void addRequest(String method, String path) {
        String requestKey = method + ":" + path;
        requests.add(requestKey);
        count++;
    }

    /**
     * 获取格式化的请求信息
     * <p>
     * 返回格式：{METHOD1:path1, METHOD2:path2, ...}
     * </p>
     *
     * @return 格式化的请求信息字符串
     */
    public String getFormattedRequests() {
        if (requests.isEmpty()) {
            return "{}";
        }
        return "{" + String.join(", ", requests) + "}";
    }
}

