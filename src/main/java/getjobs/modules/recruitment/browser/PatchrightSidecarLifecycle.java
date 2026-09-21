package getjobs.modules.recruitment.browser;

import jakarta.annotation.PreDestroy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.SmartLifecycle;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.concurrent.TimeUnit;

/** Owns the local Patchright process when automatic startup is enabled. */
@Component
public class PatchrightSidecarLifecycle implements SmartLifecycle {
    private static final Logger log = LoggerFactory.getLogger(PatchrightSidecarLifecycle.class);
    private final PatchrightProperties properties;
    private volatile Process process;

    public PatchrightSidecarLifecycle(PatchrightProperties properties) {
        this.properties = properties;
    }

    @Override
    public void start() {
        if (!isAutoStartup() || isRunning()) {
            return;
        }
        Path workingDirectory = properties.getWorkingDirectory().toAbsolutePath().normalize();
        if (!Files.isRegularFile(workingDirectory.resolve("package.json"))) {
            log.warn("Patchright sidecar directory does not exist: {}", workingDirectory);
            return;
        }
        try {
            process = new ProcessBuilder(properties.getNodeExecutable(), "src/server.js")
                    .directory(workingDirectory.toFile())
                    .redirectErrorStream(true)
                    .redirectOutput(ProcessBuilder.Redirect.INHERIT)
                    .start();
            if (process.waitFor(500, TimeUnit.MILLISECONDS)) {
                int exitCode = process.exitValue();
                process = null;
                throw new BrowserAutomationException(
                        "Patchright sidecar exited during startup (code " + exitCode
                                + "); stop any stale Node sidecar and restart the application");
            }
            log.info("Patchright sidecar started, pid={}", process.pid());
        } catch (InterruptedException exception) {
            Thread.currentThread().interrupt();
            throw new BrowserAutomationException("Patchright sidecar startup was interrupted", exception);
        } catch (IOException exception) {
            throw new BrowserAutomationException("failed to start Patchright sidecar", exception);
        }
    }

    @Override
    @PreDestroy
    public void stop() {
        Process current = process;
        process = null;
        if (current != null && current.isAlive()) {
            current.destroy();
        }
    }

    @Override
    public boolean isRunning() {
        Process current = process;
        return current != null && current.isAlive();
    }

    @Override
    public boolean isAutoStartup() {
        return properties.isEnabled() && properties.isAutoStart();
    }

    @Override
    public int getPhase() {
        return Integer.MIN_VALUE + 100;
    }
}
