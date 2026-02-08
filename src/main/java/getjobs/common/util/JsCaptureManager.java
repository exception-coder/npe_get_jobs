package getjobs.common.util;

import com.microsoft.playwright.*;
import lombok.extern.slf4j.Slf4j;
import com.github.openjson.JSONObject;

import java.io.IOException;
import java.nio.file.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * JavaScript捕获管理器
 * 
 * 提供在BrowserContext级别捕获和保存JavaScript文件的能力
 * 支持灵活的过滤规则和配置选项
 * 
 * @author system
 */
@Slf4j
public class JsCaptureManager {

    private final Path captureDir;
    private final JsCaptureConfig config;
    private final Map<String, JsFileInfo> capturedFiles = new ConcurrentHashMap<>();
    private final AtomicInteger captureCount = new AtomicInteger(0);
    private boolean isEnabled = false;
    private final Path urlMappingFile;

    /**
     * 构造函数
     * 
     * @param config JS捕获配置
     */
    public JsCaptureManager(JsCaptureConfig config) {
        this.config = config;
        this.captureDir = initCaptureDirectory();
        this.urlMappingFile = captureDir.resolve("url-mapping.json");
        initUrlMappingFile();
    }

    /**
     * 初始化捕获目录
     */
    private Path initCaptureDirectory() {
        try {
            String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss"));
            Path dir = Paths.get("logs", "anti-crawler-analysis", "captured-js", timestamp);
            Files.createDirectories(dir);
            log.info("✓ JS捕获目录已创建: {}", dir.toAbsolutePath());
            return dir;
        } catch (IOException e) {
            log.error("创建JS捕获目录失败", e);
            throw new RuntimeException("Failed to create JS capture directory", e);
        }
    }

    /**
     * 初始化URL映射文件
     */
    private void initUrlMappingFile() {
        try {
            JSONObject mapping = new JSONObject();
            mapping.put("captureTime", LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
            mapping.put("captureDir", captureDir.toAbsolutePath().toString());
            mapping.put("files", new com.github.openjson.JSONArray());
            Files.writeString(urlMappingFile, mapping.toString(2));
            log.info("✓ URL映射文件已创建: {}", urlMappingFile.toAbsolutePath());
        } catch (IOException e) {
            log.error("创建URL映射文件失败", e);
        }
    }

    /**
     * 为BrowserContext启用JS捕获
     * 
     * @param context BrowserContext对象
     */
    public void enableCapture(BrowserContext context) {
        if (isEnabled) {
            log.warn("JS捕获已启用，跳过重复配置");
            return;
        }

        try {
            // 使用 context.route() 拦截所有JS请求
            context.route("**/*.js", route -> handleJsRequest(route));

            isEnabled = true;
            log.info("✓ 已为BrowserContext启用JS捕获能力");
            log.info("  - 捕获目录: {}", captureDir.toAbsolutePath());
            log.info("  - 捕获模式: {}", config.isCaptureAll() ? "全部" : "按规则过滤");
            log.info("  - 目标域名: {}", config.getTargetDomains().isEmpty() ? "无限制" : config.getTargetDomains());
            log.info("  - 排除规则: {}", config.getExcludePatterns().isEmpty() ? "无" : config.getExcludePatterns());
        } catch (Exception e) {
            log.error("启用JS捕获失败", e);
            throw new RuntimeException("Failed to enable JS capture", e);
        }
    }

    /**
     * 处理JS请求
     */
    private void handleJsRequest(Route route) {
        Request request = route.request();
        String url = request.url();

        try {
            // 检查是否需要捕获此JS
            if (!config.shouldCapture(url)) {
                route.resume();
                return;
            }

            // 获取响应
            APIResponse response = route.fetch();

            if (response.ok()) {
                byte[] body = response.body();

                // 保存JS文件
                JsFileInfo fileInfo = saveJsFile(url, body, response.status());

                if (fileInfo != null) {
                    capturedFiles.put(url, fileInfo);
                    int count = captureCount.incrementAndGet();

                    log.info("✓ [{}] 已捕获JS文件: {} -> {} ({} bytes)",
                            count, shortenUrl(url), fileInfo.getFileName(), body.length);
                }
            }

            // 将响应传递给页面（重要：确保页面正常加载）
            route.fulfill(new Route.FulfillOptions().setResponse(response));

        } catch (Exception e) {
            log.warn("捕获JS文件失败: {}", shortenUrl(url), e);
            // 确保请求继续，不影响页面加载
            try {
                route.resume();
            } catch (Exception ex) {
                log.error("恢复请求失败", ex);
            }
        }
    }

    /**
     * 保存JS文件
     */
    private JsFileInfo saveJsFile(String url, byte[] content, int status) {
        try {
            // 生成文件名
            String fileName = generateFileName(url);
            Path jsFile = captureDir.resolve(fileName);

            // 保存JS文件
            Files.write(jsFile, content);

            // 创建文件信息对象
            JsFileInfo fileInfo = new JsFileInfo(
                    fileName,
                    url,
                    content.length,
                    status,
                    System.currentTimeMillis());

            // 保存元数据
            if (config.isSaveMetadata()) {
                saveMetadata(fileInfo);
            }

            // 更新URL映射文件
            updateUrlMapping(fileInfo);

            return fileInfo;
        } catch (Exception e) {
            log.error("保存JS文件失败: {}", url, e);
            return null;
        }
    }

    /**
     * 更新URL映射文件
     */
    private synchronized void updateUrlMapping(JsFileInfo fileInfo) {
        try {
            // 读取现有映射
            String content = Files.readString(urlMappingFile);
            JSONObject mapping = new JSONObject(content);
            com.github.openjson.JSONArray files = mapping.getJSONArray("files");

            // 添加新的映射记录
            JSONObject fileMapping = new JSONObject();
            fileMapping.put("sequence", captureCount.get());
            fileMapping.put("fileName", fileInfo.getFileName());
            fileMapping.put("url", fileInfo.getUrl());
            fileMapping.put("size", fileInfo.getSize());
            fileMapping.put("status", fileInfo.getStatus());
            fileMapping.put("captureTime", LocalDateTime.ofInstant(
                    java.time.Instant.ofEpochMilli(fileInfo.getCaptureTime()),
                    java.time.ZoneId.systemDefault())
                    .format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));

            files.put(fileMapping);

            // 更新总数
            mapping.put("totalCount", captureCount.get());
            mapping.put("lastUpdateTime",
                    LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));

            // 写回文件
            Files.writeString(urlMappingFile, mapping.toString(2));

        } catch (Exception e) {
            log.warn("更新URL映射文件失败: {}", fileInfo.getFileName(), e);
        }
    }

    /**
     * 生成文件名
     */
    private String generateFileName(String url) {
        try {
            // 提取原始文件名
            String originalName = extractOriginalName(url);

            // 生成hash（避免重复）
            String hash = Integer.toHexString(url.hashCode());

            // 序号
            int sequence = captureCount.get() + 1;

            // 组合文件名：序号_原始名_hash.js
            if (originalName.isEmpty()) {
                return String.format("%04d_script_%s.js", sequence, hash);
            }

            String baseName = originalName.replace(".js", "");
            return String.format("%04d_%s_%s.js", sequence, baseName, hash);
        } catch (Exception e) {
            return String.format("%04d_script_%s.js", captureCount.get() + 1, System.currentTimeMillis());
        }
    }

    /**
     * 提取原始文件名
     */
    private String extractOriginalName(String url) {
        try {
            String path = url.split("\\?")[0]; // 去除查询参数
            String name = path.substring(path.lastIndexOf('/') + 1);

            // 清理文件名中的特殊字符
            name = name.replaceAll("[^a-zA-Z0-9._-]", "_");

            // 限制长度
            if (name.length() > 50) {
                name = name.substring(0, 50);
            }

            return name;
        } catch (Exception e) {
            return "";
        }
    }

    /**
     * 保存元数据
     */
    private void saveMetadata(JsFileInfo fileInfo) {
        try {
            Path metadataFile = captureDir.resolve(fileInfo.getFileName() + ".meta.json");

            JSONObject metadata = new JSONObject();
            metadata.put("fileName", fileInfo.getFileName());
            metadata.put("url", fileInfo.getUrl());
            metadata.put("size", fileInfo.getSize());
            metadata.put("status", fileInfo.getStatus());
            metadata.put("captureTime", fileInfo.getCaptureTime());
            metadata.put("captureTimeReadable",
                    LocalDateTime.ofInstant(
                            java.time.Instant.ofEpochMilli(fileInfo.getCaptureTime()),
                            java.time.ZoneId.systemDefault())
                            .format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));

            Files.writeString(metadataFile, metadata.toString(2));
        } catch (Exception e) {
            log.warn("保存元数据失败: {}", fileInfo.getFileName(), e);
        }
    }

    /**
     * 生成捕获报告
     */
    public String generateReport() {
        StringBuilder report = new StringBuilder();
        report.append("\n========== JS捕获报告 ==========\n");
        report.append(String.format("捕获目录: %s\n", captureDir.toAbsolutePath()));
        report.append(String.format("URL映射文件: %s\n", urlMappingFile.toAbsolutePath()));
        report.append(String.format("捕获总数: %d\n", captureCount.get()));
        report.append(String.format("配置模式: %s\n", config.isCaptureAll() ? "全部捕获" : "按规则过滤"));
        report.append("\n已捕获的文件列表:\n");

        List<JsFileInfo> sortedFiles = new ArrayList<>(capturedFiles.values());
        sortedFiles.sort(Comparator.comparingLong(JsFileInfo::getCaptureTime));

        for (int i = 0; i < sortedFiles.size(); i++) {
            JsFileInfo info = sortedFiles.get(i);
            report.append(String.format("[%d] %s\n", i + 1, info.getFileName()));
            report.append(String.format("    URL: %s\n", info.getUrl()));
            report.append(String.format("    大小: %d bytes\n", info.getSize()));
            report.append(String.format("    状态: %d\n", info.getStatus()));
        }

        report.append("\n提示: 可查看 url-mapping.json 获取完整的文件名与URL映射关系\n");
        report.append("================================\n");
        return report.toString();
    }

    /**
     * 保存捕获报告到文件
     */
    public void saveReport() {
        try {
            Path reportFile = captureDir.resolve("capture-report.txt");
            Files.writeString(reportFile, generateReport());
            log.info("✓ 捕获报告已保存: {}", reportFile.toAbsolutePath());
        } catch (Exception e) {
            log.error("保存捕获报告失败", e);
        }
    }

    /**
     * 缩短URL用于日志显示
     */
    private String shortenUrl(String url) {
        if (url.length() <= 80) {
            return url;
        }
        return url.substring(0, 77) + "...";
    }

    // ==================== 静态工厂方法 ====================

    /**
     * 快速启用：捕获所有 JS 文件
     * 
     * @param context BrowserContext 对象
     * @return JsCaptureManager 实例
     */
    public static JsCaptureManager captureAll(BrowserContext context) {
        JsCaptureConfig config = JsCaptureConfig.captureAll();
        JsCaptureManager manager = new JsCaptureManager(config);
        manager.enableCapture(context);
        return manager;
    }

    /**
     * 快速启用：只捕获指定域名的 JS 文件
     * 
     * @param context BrowserContext 对象
     * @param domains 目标域名（可变参数）
     * @return JsCaptureManager 实例
     */
    public static JsCaptureManager captureByDomains(BrowserContext context, String... domains) {
        JsCaptureConfig config = JsCaptureConfig.captureByDomains(domains);
        JsCaptureManager manager = new JsCaptureManager(config);
        manager.enableCapture(context);
        return manager;
    }

    /**
     * 使用自定义配置启用捕获
     * 
     * @param context BrowserContext 对象
     * @param config  自定义配置
     * @return JsCaptureManager 实例
     */
    public static JsCaptureManager captureWithConfig(BrowserContext context, JsCaptureConfig config) {
        JsCaptureManager manager = new JsCaptureManager(config);
        manager.enableCapture(context);
        return manager;
    }

    // ==================== Getter方法 ====================

    public Path getCaptureDir() {
        return captureDir;
    }

    public int getCaptureCount() {
        return captureCount.get();
    }

    public Map<String, JsFileInfo> getCapturedFiles() {
        return new HashMap<>(capturedFiles);
    }

    public boolean isEnabled() {
        return isEnabled;
    }

    public Path getUrlMappingFile() {
        return urlMappingFile;
    }

    /**
     * 根据文件名查找对应的URL
     * 
     * @param fileName JS文件名
     * @return 对应的URL，如果未找到返回null
     */
    public String getUrlByFileName(String fileName) {
        for (JsFileInfo info : capturedFiles.values()) {
            if (info.getFileName().equals(fileName)) {
                return info.getUrl();
            }
        }
        return null;
    }

    /**
     * 根据URL查找对应的文件名
     * 
     * @param url JS请求URL
     * @return 对应的文件名，如果未找到返回null
     */
    public String getFileNameByUrl(String url) {
        JsFileInfo info = capturedFiles.get(url);
        return info != null ? info.getFileName() : null;
    }

    // ==================== 内部类：JS文件信息 ====================

    /**
     * JS文件信息
     */
    public static class JsFileInfo {
        private final String fileName;
        private final String url;
        private final int size;
        private final int status;
        private final long captureTime;

        public JsFileInfo(String fileName, String url, int size, int status, long captureTime) {
            this.fileName = fileName;
            this.url = url;
            this.size = size;
            this.status = status;
            this.captureTime = captureTime;
        }

        public String getFileName() {
            return fileName;
        }

        public String getUrl() {
            return url;
        }

        public int getSize() {
            return size;
        }

        public int getStatus() {
            return status;
        }

        public long getCaptureTime() {
            return captureTime;
        }
    }

    // ==================== 内部类：JS捕获配置 ====================

    /**
     * JS捕获配置
     */
    public static class JsCaptureConfig {
        private final boolean captureAll;
        private final Set<String> targetDomains;
        private final Set<String> excludePatterns;
        private final boolean saveMetadata;

        private JsCaptureConfig(Builder builder) {
            this.captureAll = builder.captureAll;
            this.targetDomains = new HashSet<>(builder.targetDomains);
            this.excludePatterns = new HashSet<>(builder.excludePatterns);
            this.saveMetadata = builder.saveMetadata;
        }

        /**
         * 判断是否应该捕获指定URL的JS
         */
        public boolean shouldCapture(String url) {
            // 1. 检查排除规则（优先级最高）
            for (String pattern : excludePatterns) {
                if (url.contains(pattern)) {
                    return false;
                }
            }

            // 2. 如果配置为捕获所有
            if (captureAll) {
                return true;
            }

            // 3. 检查目标域名
            if (targetDomains.isEmpty()) {
                return false; // 没有配置目标域名，且不是捕获全部模式
            }

            for (String domain : targetDomains) {
                if (url.contains(domain)) {
                    return true;
                }
            }

            return false;
        }

        public boolean isCaptureAll() {
            return captureAll;
        }

        public Set<String> getTargetDomains() {
            return new HashSet<>(targetDomains);
        }

        public Set<String> getExcludePatterns() {
            return new HashSet<>(excludePatterns);
        }

        public boolean isSaveMetadata() {
            return saveMetadata;
        }

        /**
         * 创建Builder
         */
        public static Builder builder() {
            return new Builder();
        }

        /**
         * 快速创建：捕获所有JS
         */
        public static JsCaptureConfig captureAll() {
            return builder().captureAll(true).build();
        }

        /**
         * 快速创建：只捕获指定域名
         */
        public static JsCaptureConfig captureByDomains(String... domains) {
            Builder builder = builder();
            for (String domain : domains) {
                builder.addTargetDomain(domain);
            }
            return builder.build();
        }

        /**
         * Builder类
         */
        public static class Builder {
            private boolean captureAll = false;
            private final Set<String> targetDomains = new HashSet<>();
            private final Set<String> excludePatterns = new HashSet<>();
            private boolean saveMetadata = true;

            /**
             * 设置是否捕获所有JS
             */
            public Builder captureAll(boolean captureAll) {
                this.captureAll = captureAll;
                return this;
            }

            /**
             * 添加目标域名
             */
            public Builder addTargetDomain(String domain) {
                this.targetDomains.add(domain);
                return this;
            }

            /**
             * 批量添加目标域名
             */
            public Builder addTargetDomains(Collection<String> domains) {
                this.targetDomains.addAll(domains);
                return this;
            }

            /**
             * 添加排除规则（URL包含此字符串则不捕获）
             */
            public Builder addExcludePattern(String pattern) {
                this.excludePatterns.add(pattern);
                return this;
            }

            /**
             * 批量添加排除规则
             */
            public Builder addExcludePatterns(Collection<String> patterns) {
                this.excludePatterns.addAll(patterns);
                return this;
            }

            /**
             * 设置是否保存元数据
             */
            public Builder saveMetadata(boolean saveMetadata) {
                this.saveMetadata = saveMetadata;
                return this;
            }

            /**
             * 构建配置对象
             */
            public JsCaptureConfig build() {
                return new JsCaptureConfig(this);
            }
        }
    }
}
