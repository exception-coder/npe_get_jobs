package getjobs.common.util;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

/**
 * JavaScript反混淆工具类
 * 支持多种反混淆工具：webcrack, js-beautify, babel
 * 
 * 使用前需要安装npm工具：
 * npm install -g webcrack
 * npm install -g js-beautify
 * npm install -g @babel/cli @babel/core
 */
@Slf4j
@Component
public class JsDeobfuscator {

    // 单例实例，用于静态方法调用
    private static final JsDeobfuscator INSTANCE = new JsDeobfuscator();

    /**
     * 静态方法：反混淆JavaScript文件（自动生成输出路径）
     * 输出文件将保存在原文件同目录下，文件名添加 "deobfuscated_" 前缀
     * 
     * 示例：
     * 输入：/path/to/script.js
     * 输出：/path/to/deobfuscated_script.js
     * 
     * @param inputPath 输入文件路径
     * @return 输出文件路径，失败返回null
     */
    public static String deobfuscateFileStatic(String inputPath) {
        try {
            String outputPath = generateOutputPath(inputPath);
            INSTANCE.deobfuscateFile(inputPath, outputPath);
            log.info("反混淆成功，输出文件: {}", outputPath);
            return outputPath;
        } catch (Exception e) {
            log.error("静态方法反混淆文件失败: {}", inputPath, e);
            return null;
        }
    }

    /**
     * 静态方法：反混淆JavaScript文件（指定输出路径）
     * 
     * @param inputPath  输入文件路径
     * @param outputPath 输出文件路径
     * @return 是否成功
     */
    public static boolean deobfuscateFileStatic(String inputPath, String outputPath) {
        try {
            INSTANCE.deobfuscateFile(inputPath, outputPath);
            return true;
        } catch (Exception e) {
            log.error("静态方法反混淆文件失败: {} -> {}", inputPath, outputPath, e);
            return false;
        }
    }

    /**
     * 生成输出文件路径
     * 在原文件同目录下，文件名添加 "deobfuscated_" 前缀
     * 
     * @param inputPath 输入文件路径
     * @return 输出文件路径
     */
    private static String generateOutputPath(String inputPath) {
        Path inputFilePath = Paths.get(inputPath);
        Path parentDir = inputFilePath.getParent();
        String fileName = inputFilePath.getFileName().toString();

        // 添加 "deobfuscated_" 前缀
        String outputFileName = "deobfuscated_" + fileName;

        if (parentDir != null) {
            return parentDir.resolve(outputFileName).toString();
        } else {
            return outputFileName;
        }
    }

    /**
     * 静态方法：批量反混淆目录
     * 
     * @param inputDir  输入目录
     * @param outputDir 输出目录
     * @return 是否成功
     */
    public static boolean deobfuscateDirectoryStatic(String inputDir, String outputDir) {
        try {
            INSTANCE.deobfuscateDirectory(inputDir, outputDir);
            return true;
        } catch (Exception e) {
            log.error("静态方法批量反混淆失败: {} -> {}", inputDir, outputDir, e);
            return false;
        }
    }

    /**
     * 静态方法：检查工具是否已安装
     * 
     * @param toolType 工具类型
     * @return 是否已安装
     */
    public static boolean isToolInstalledStatic(DeobfuscatorType toolType) {
        return INSTANCE.isToolInstalled(toolType.getCommand());
    }

    /**
     * 反混淆工具类型
     */
    public enum DeobfuscatorType {
        WEBCRACK("webcrack"), // 专门用于webpack混淆，效果最好
        JS_BEAUTIFY("js-beautify"), // 通用美化工具，速度快
        BABEL("babel"), // AST转换工具，可自定义
        SYNCHRONY("synchrony-js"); // 专门用于同步化异步代码

        private final String command;

        DeobfuscatorType(String command) {
            this.command = command;
        }

        public String getCommand() {
            return command;
        }
    }

    /**
     * 反混淆配置
     */
    public static class DeobfuscateConfig {
        private DeobfuscatorType type = DeobfuscatorType.WEBCRACK;
        private int timeout = 120; // 秒，默认2分钟
        private boolean beautify = true;
        private boolean unpack = true;
        private boolean mangle = false;

        public static DeobfuscateConfig defaultConfig() {
            return new DeobfuscateConfig();
        }

        public DeobfuscateConfig type(DeobfuscatorType type) {
            this.type = type;
            return this;
        }

        public DeobfuscateConfig timeout(int timeout) {
            this.timeout = timeout;
            return this;
        }

        public DeobfuscateConfig beautify(boolean beautify) {
            this.beautify = beautify;
            return this;
        }

        public DeobfuscateConfig unpack(boolean unpack) {
            this.unpack = unpack;
            return this;
        }

        public DeobfuscateConfig mangle(boolean mangle) {
            this.mangle = mangle;
            return this;
        }
    }

    /**
     * 反混淆单个文件
     * 
     * @param inputPath  输入文件路径
     * @param outputPath 输出文件路径
     */
    public void deobfuscateFile(String inputPath, String outputPath) throws IOException {
        deobfuscateFile(inputPath, outputPath, DeobfuscateConfig.defaultConfig());
    }

    /**
     * 反混淆单个文件（带配置）
     * 
     * @param inputPath  输入文件路径
     * @param outputPath 输出文件路径
     * @param config     反混淆配置
     */
    public void deobfuscateFile(String inputPath, String outputPath, DeobfuscateConfig config)
            throws IOException {

        Path inputFile = Paths.get(inputPath);
        Path outputFile = Paths.get(outputPath);

        if (!Files.exists(inputFile)) {
            throw new FileNotFoundException("输入文件不存在: " + inputPath);
        }

        log.info("开始反混淆文件: {}", inputPath);

        long startTime = System.currentTimeMillis();

        try {
            // 确保输出目录存在
            Files.createDirectories(outputFile.getParent());

            // 根据工具类型执行反混淆
            switch (config.type) {
                case WEBCRACK:
                    deobfuscateWithWebcrack(inputFile, outputFile, config);
                    break;
                case JS_BEAUTIFY:
                    deobfuscateWithJsBeautify(inputFile, outputFile, config);
                    break;
                case BABEL:
                    deobfuscateWithBabel(inputFile, outputFile, config);
                    break;
                case SYNCHRONY:
                    deobfuscateWithSynchrony(inputFile, outputFile, config);
                    break;
                default:
                    throw new IllegalArgumentException("不支持的反混淆工具: " + config.type);
            }

            long inputSize = Files.size(inputFile);
            long outputSize = Files.size(outputFile);
            long duration = System.currentTimeMillis() - startTime;

            log.info("反混淆成功，工具: {}, 原始大小: {} bytes, 反混淆后大小: {} bytes, 耗时: {}ms",
                    config.type.getCommand(), inputSize, outputSize, duration);

        } catch (Exception e) {
            log.error("反混淆失败，工具: {}, 输入: {}", config.type.getCommand(), inputPath, e);
            throw new IOException("反混淆失败: " + e.getMessage(), e);
        }
    }

    /**
     * 使用webcrack反混淆（推荐用于webpack打包的代码）
     */
    private void deobfuscateWithWebcrack(Path inputFile, Path outputFile, DeobfuscateConfig config)
            throws IOException, InterruptedException {

        // 检查webcrack是否安装
        if (!isToolInstalled("webcrack")) {
            throw new RuntimeException("webcrack未安装，请运行: npm install -g webcrack");
        }

        // webcrack 输出到目录，需要创建临时目录
        Path tempOutputDir = Files.createTempDirectory("webcrack_output_");

        try {
            List<String> command = new ArrayList<>();
            command.add("webcrack");
            command.add(inputFile.toString());
            command.add("-o");
            command.add(tempOutputDir.toString());
            command.add("--force"); // 允许覆盖已存在的目录

            // webcrack 新版本默认就会解包，不需要 --unpack 参数
            // 如果不想解包，使用 --no-unpack
            if (!config.unpack) {
                command.add("--no-unpack");
            }

            // mangle 参数保持不变
            if (config.mangle) {
                command.add("--mangle");
            }

            // 执行命令
            ProcessResult processResult = executeCommand(command, config.timeout);

            if (processResult.exitCode != 0) {
                throw new RuntimeException("webcrack执行失败: " + processResult.errorOutput);
            }

            // 读取输出文件
            Path webcrackOutput = tempOutputDir.resolve("index.js");
            if (!Files.exists(webcrackOutput)) {
                // 尝试查找其他输出文件
                webcrackOutput = findFirstJsFile(tempOutputDir);
            }

            if (webcrackOutput == null || !Files.exists(webcrackOutput)) {
                throw new RuntimeException("未找到反混淆输出文件");
            }

            // 复制到目标位置
            Files.copy(webcrackOutput, outputFile, java.nio.file.StandardCopyOption.REPLACE_EXISTING);

        } finally {
            // 清理临时目录
            cleanupTempFiles(tempOutputDir);
        }
    }

    /**
     * 使用js-beautify反混淆（快速美化代码）
     */
    private void deobfuscateWithJsBeautify(Path inputFile, Path outputFile, DeobfuscateConfig config)
            throws IOException, InterruptedException {

        if (!isToolInstalled("js-beautify")) {
            throw new RuntimeException("js-beautify未安装，请运行: npm install -g js-beautify");
        }

        List<String> command = new ArrayList<>();
        command.add("js-beautify");
        command.add(inputFile.toString());
        command.add("--indent-size=2");
        command.add("--preserve-newlines");
        command.add("--max-preserve-newlines=2");
        command.add("--brace-style=collapse");
        command.add("--keep-array-indentation");

        ProcessResult processResult = executeCommand(command, config.timeout);

        if (processResult.exitCode != 0) {
            throw new RuntimeException("js-beautify执行失败: " + processResult.errorOutput);
        }

        // 写入输出文件
        Files.writeString(outputFile, processResult.output, StandardCharsets.UTF_8);
    }

    /**
     * 使用babel反混淆（需要自定义插件）
     */
    private void deobfuscateWithBabel(Path inputFile, Path outputFile, DeobfuscateConfig config)
            throws IOException, InterruptedException {

        if (!isToolInstalled("babel")) {
            throw new RuntimeException("babel未安装，请运行: npm install -g @babel/cli @babel/core");
        }

        // 创建临时目录用于babel配置
        Path tempDir = Files.createTempDirectory("babel_config_");

        try {
            // 创建babel配置文件
            Path babelConfig = createBabelConfig(tempDir);

            List<String> command = new ArrayList<>();
            command.add("babel");
            command.add(inputFile.toString());
            command.add("--out-file");
            command.add(outputFile.toString());
            command.add("--config-file");
            command.add(babelConfig.toString());

            ProcessResult processResult = executeCommand(command, config.timeout);

            if (processResult.exitCode != 0) {
                throw new RuntimeException("babel执行失败: " + processResult.errorOutput);
            }

        } finally {
            // 清理临时目录
            cleanupTempFiles(tempDir);
        }
    }

    /**
     * 使用synchrony-js反混淆（专门处理异步代码）
     */
    private void deobfuscateWithSynchrony(Path inputFile, Path outputFile, DeobfuscateConfig config)
            throws IOException, InterruptedException {

        if (!isToolInstalled("synchrony")) {
            throw new RuntimeException("synchrony未安装，请运行: npm install -g synchrony-js");
        }

        List<String> command = new ArrayList<>();
        command.add("synchrony");
        command.add(inputFile.toString());

        ProcessResult processResult = executeCommand(command, config.timeout);

        if (processResult.exitCode != 0) {
            throw new RuntimeException("synchrony执行失败: " + processResult.errorOutput);
        }

        // 写入输出文件
        Files.writeString(outputFile, processResult.output, StandardCharsets.UTF_8);
    }

    /**
     * 创建Babel配置文件
     */
    private Path createBabelConfig(Path outputDir) throws IOException {
        String babelConfig = """
                {
                  "plugins": [
                    "@babel/plugin-transform-arrow-functions",
                    "@babel/plugin-transform-block-scoping",
                    "@babel/plugin-transform-template-literals"
                  ]
                }
                """;

        Path configFile = outputDir.resolve(".babelrc");
        Files.write(configFile, babelConfig.getBytes(StandardCharsets.UTF_8));
        return configFile;
    }

    /**
     * 批量反混淆目录中的所有JS文件
     * 
     * @param inputDir  输入目录
     * @param outputDir 输出目录
     */
    public void deobfuscateDirectory(String inputDir, String outputDir) throws IOException {
        deobfuscateDirectory(inputDir, outputDir, DeobfuscateConfig.defaultConfig());
    }

    /**
     * 批量反混淆目录中的所有JS文件（带配置）
     * 
     * @param inputDir  输入目录
     * @param outputDir 输出目录
     * @param config    反混淆配置
     */
    public void deobfuscateDirectory(String inputDir, String outputDir, DeobfuscateConfig config)
            throws IOException {

        Path inputPath = Paths.get(inputDir);
        Path outputPath = Paths.get(outputDir);

        if (!Files.exists(inputPath)) {
            throw new FileNotFoundException("输入目录不存在: " + inputDir);
        }

        // 创建输出目录
        Files.createDirectories(outputPath);

        log.info("开始批量反混淆，输入目录: {}, 输出目录: {}", inputDir, outputDir);

        // 统计信息
        int[] stats = { 0, 0 }; // [成功数, 失败数]

        // 遍历所有JS文件
        Files.walk(inputPath)
                .filter(path -> path.toString().endsWith(".js"))
                .forEach(jsFile -> {
                    try {
                        String relativePath = inputPath.relativize(jsFile).toString();
                        Path output = outputPath.resolve(relativePath);

                        log.info("正在反混淆 [{}/{}]: {}",
                                stats[0] + stats[1] + 1,
                                "?",
                                relativePath);

                        deobfuscateFile(jsFile.toString(), output.toString(), config);
                        stats[0]++;

                    } catch (Exception e) {
                        log.error("反混淆失败: {}", jsFile, e);
                        stats[1]++;
                    }
                });

        log.info("批量反混淆完成，成功: {}, 失败: {}", stats[0], stats[1]);
    }

    /**
     * 检查工具是否已安装
     */
    private boolean isToolInstalled(String toolName) {
        try {
            List<String> command = new ArrayList<>();
            String os = System.getProperty("os.name").toLowerCase();

            if (os.contains("win")) {
                command.add("where");
            } else {
                command.add("which");
            }
            command.add(toolName);

            ProcessResult result = executeCommand(command, 5);
            return result.exitCode == 0;
        } catch (Exception e) {
            return false;
        }
    }

    /**
     * 执行命令
     */
    private ProcessResult executeCommand(List<String> command, int timeoutSeconds)
            throws IOException, InterruptedException {

        log.debug("执行命令: {}", String.join(" ", command));

        ProcessBuilder processBuilder = new ProcessBuilder(command);
        processBuilder.redirectErrorStream(false);

        Process process = processBuilder.start();

        // 读取输出
        StringBuilder output = new StringBuilder();
        StringBuilder errorOutput = new StringBuilder();

        Thread outputThread = new Thread(() -> {
            try (BufferedReader reader = new BufferedReader(
                    new InputStreamReader(process.getInputStream(), StandardCharsets.UTF_8))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    output.append(line).append("\n");
                }
            } catch (IOException e) {
                log.error("读取输出流失败", e);
            }
        });

        Thread errorThread = new Thread(() -> {
            try (BufferedReader reader = new BufferedReader(
                    new InputStreamReader(process.getErrorStream(), StandardCharsets.UTF_8))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    errorOutput.append(line).append("\n");
                }
            } catch (IOException e) {
                log.error("读取错误流失败", e);
            }
        });

        outputThread.start();
        errorThread.start();

        boolean finished = process.waitFor(timeoutSeconds, TimeUnit.SECONDS);

        if (!finished) {
            process.destroyForcibly();
            throw new RuntimeException("命令执行超时（" + timeoutSeconds + "秒）");
        }

        outputThread.join();
        errorThread.join();

        ProcessResult result = new ProcessResult();
        result.exitCode = process.exitValue();
        result.output = output.toString();
        result.errorOutput = errorOutput.toString();

        return result;
    }

    /**
     * 查找目录中第一个JS文件
     */
    private Path findFirstJsFile(Path directory) throws IOException {
        return Files.walk(directory)
                .filter(path -> path.toString().endsWith(".js"))
                .findFirst()
                .orElse(null);
    }

    /**
     * 清理临时文件
     */
    private void cleanupTempFiles(Path... paths) {
        for (Path path : paths) {
            if (path != null) {
                try {
                    if (Files.isDirectory(path)) {
                        Files.walk(path)
                                .sorted((a, b) -> b.compareTo(a)) // 先删除文件，后删除目录
                                .forEach(p -> {
                                    try {
                                        Files.deleteIfExists(p);
                                    } catch (IOException e) {
                                        log.warn("删除临时文件失败: {}", p, e);
                                    }
                                });
                    } else {
                        Files.deleteIfExists(path);
                    }
                } catch (IOException e) {
                    log.warn("清理临时文件失败: {}", path, e);
                }
            }
        }
    }

    /**
     * 进程执行结果
     */
    private static class ProcessResult {
        int exitCode;
        String output;
        String errorOutput;
    }

    /**
     * 安装所需的npm工具
     */
    public void installTools() throws IOException, InterruptedException {
        log.info("开始安装反混淆工具...");

        List<String> tools = List.of(
                "webcrack",
                "js-beautify",
                "@babel/cli",
                "@babel/core",
                "@babel/plugin-transform-arrow-functions",
                "@babel/plugin-transform-block-scoping",
                "@babel/plugin-transform-template-literals");

        for (String tool : tools) {
            log.info("安装 {}...", tool);
            List<String> command = List.of("npm", "install", "-g", tool);
            ProcessResult result = executeCommand(command, 300);

            if (result.exitCode == 0) {
                log.info("{} 安装成功", tool);
            } else {
                log.error("{} 安装失败: {}", tool, result.errorOutput);
            }
        }

        log.info("工具安装完成");
    }

    /**
     * 检查所有工具的安装状态
     * 
     * @return 工具名称和安装状态的映射
     */
    public java.util.Map<String, Boolean> checkToolsStatus() {
        java.util.Map<String, Boolean> status = new java.util.LinkedHashMap<>();

        status.put("webcrack", isToolInstalled("webcrack"));
        status.put("js-beautify", isToolInstalled("js-beautify"));
        status.put("babel", isToolInstalled("babel"));
        status.put("synchrony", isToolInstalled("synchrony"));

        log.info("工具安装状态: {}", status);
        return status;
    }

    public static void main(String[] args) {
        String outputPath = deobfuscateFileStatic(
                "/Users/zhangkai/IdeaProjects/pure-admin-service/logs/anti-crawler-analysis/captured-js/20260204_013834/0076_ca3b236c_97ac1696.js");
        System.out.println("输出文件: " + outputPath);
    }
}
