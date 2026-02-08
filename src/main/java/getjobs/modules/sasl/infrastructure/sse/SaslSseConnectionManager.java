package getjobs.modules.sasl.infrastructure.sse;

import getjobs.modules.sasl.dto.SaslRecordResponse;
import getjobs.modules.sasl.service.SaslFormService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;

/**
 * SASL SSE 连接管理器。
 * 按用户名分组管理 SSE 连接，每个用户共享一个轮询任务，减少数据库查询和线程资源消耗。
 */
@Slf4j
@Component
@RequiredArgsConstructor
public class SaslSseConnectionManager {

    private final SaslFormService saslFormService;

    /**
     * 用户连接组：key 是用户名，value 是该用户的所有 SSE 连接
     */
    private final ConcurrentHashMap<String, UserConnectionGroup> userGroups = new ConcurrentHashMap<>();

    /**
     * 注册一个新的 SSE 连接。
     *
     * @param username 用户名
     * @param emitter  SSE 发射器
     * @return 连接ID（用于后续取消注册）
     */
    public String register(String username, SseEmitter emitter) {
        UserConnectionGroup group = userGroups.computeIfAbsent(username, k -> {
            UserConnectionGroup newGroup = new UserConnectionGroup(username, saslFormService);
            log.debug("为用户 {} 创建新的连接组", username);
            return newGroup;
        });

        String connectionId = UUID.randomUUID().toString();
        group.addConnection(connectionId, emitter);

        // 添加连接后，如果是第一个连接，启动轮询
        if (group.getConnectionCount() == 1) {
            group.startPolling();
            log.debug("为用户 {} 启动轮询任务（第一个连接）", username);
        }

        // 设置连接关闭回调
        emitter.onCompletion(() -> {
            log.debug("SSE连接已完成，连接ID: {}, 用户: {}", connectionId, username);
            unregister(username, connectionId);
        });
        emitter.onTimeout(() -> {
            log.debug("SSE连接已超时，连接ID: {}, 用户: {}", connectionId, username);
            unregister(username, connectionId);
        });
        emitter.onError(ex -> {
            String errorMsg = ex.getMessage();
            if (errorMsg != null && (errorMsg.contains("Broken pipe") || errorMsg.contains("Connection reset"))) {
                log.debug("SSE连接已断开，连接ID: {}, 用户: {}", connectionId, username);
            } else {
                log.error("SSE连接发生错误，连接ID: {}, 用户: {}", connectionId, username, ex);
            }
            unregister(username, connectionId);
        });

        // 发送初始连接消息
        safeSend(emitter, SseEmitter.event()
                .name("connected")
                .data("SSE连接已建立，开始轮询符合条件的记录..."));

        log.debug("注册新的SSE连接，连接ID: {}, 用户: {}, 当前该用户连接数: {}",
                connectionId, username, group.getConnectionCount());

        return connectionId;
    }

    /**
     * 取消注册 SSE 连接。
     *
     * @param username     用户名
     * @param connectionId 连接ID
     */
    public void unregister(String username, String connectionId) {
        UserConnectionGroup group = userGroups.get(username);
        if (group != null) {
            group.removeConnection(connectionId);
            log.debug("取消注册SSE连接，连接ID: {}, 用户: {}, 剩余连接数: {}",
                    connectionId, username, group.getConnectionCount());

            // 如果该用户没有连接了，停止轮询并清理
            if (group.getConnectionCount() == 0) {
                group.stopPolling();
                userGroups.remove(username);
                log.debug("用户 {} 的所有连接已关闭，停止轮询并清理连接组", username);
            }
        }
    }

    /**
     * 安全地发送 SSE 事件。
     */
    private boolean safeSend(SseEmitter emitter, SseEmitter.SseEventBuilder event) {
        try {
            emitter.send(event);
            return true;
        } catch (IOException e) {
            if (log.isDebugEnabled()) {
                String message = e.getMessage();
                if (message != null && message.contains("Broken pipe")) {
                    log.debug("SSE连接已断开（客户端关闭连接）");
                } else {
                    log.debug("SSE发送失败，连接可能已关闭: {}", e.getMessage());
                }
            }
            return false;
        } catch (Exception e) {
            log.error("SSE发送时发生未知异常", e);
            return false;
        }
    }

    /**
     * 用户连接组：管理同一用户的所有 SSE 连接，共享一个轮询任务。
     */
    private static class UserConnectionGroup {
        private final String username;
        private final SaslFormService saslFormService;
        private final ConcurrentHashMap<String, SseEmitter> connections = new ConcurrentHashMap<>();
        private final ScheduledExecutorService executor;
        private ScheduledFuture<?> pollingTask;
        private final AtomicBoolean isPolling = new AtomicBoolean(false);

        public UserConnectionGroup(String username, SaslFormService saslFormService) {
            this.username = username;
            this.saslFormService = saslFormService;
            this.executor = Executors.newSingleThreadScheduledExecutor(r -> {
                Thread t = new Thread(r, "sse-polling-thread-" + username);
                t.setDaemon(true);
                return t;
            });
        }

        /**
         * 添加连接。
         */
        public void addConnection(String connectionId, SseEmitter emitter) {
            connections.put(connectionId, emitter);
        }

        /**
         * 移除连接。
         */
        public void removeConnection(String connectionId) {
            SseEmitter emitter = connections.remove(connectionId);
            if (emitter != null) {
                try {
                    emitter.complete();
                } catch (Exception ignored) {
                    // 忽略完成时的异常
                }
            }
        }

        /**
         * 获取连接数量。
         */
        public int getConnectionCount() {
            return connections.size();
        }

        /**
         * 启动轮询任务。
         */
        public void startPolling() {
            if (isPolling.compareAndSet(false, true)) {
                pollingTask = executor.scheduleAtFixedRate(() -> {
                    // 如果没有连接了，停止轮询
                    if (connections.isEmpty()) {
                        stopPolling();
                        return;
                    }

                    try {
                        Optional<SaslRecordResponse> recordOpt = saslFormService
                                .getFirstRecordWithNextCallTimeNearNow(username);

                        if (recordOpt.isPresent()) {
                            // 找到符合条件的记录，向该用户的所有连接广播
                            SaslRecordResponse record = recordOpt.get();
                            broadcast(SseEmitter.event()
                                    .name("record")
                                    .data(record));
                            log.debug("通过SSE推送符合条件的记录给用户 {} 的所有连接，记录ID: {}, 连接数: {}",
                                    username, record.id(), connections.size());
                        } else {
                            // 未找到记录，发送心跳保持连接
                            broadcast(SseEmitter.event()
                                    .name("heartbeat")
                                    .data("暂无符合条件的记录"));
                        }
                    } catch (IllegalArgumentException e) {
                        // 用户认证错误，发送错误消息并关闭所有连接
                        broadcast(SseEmitter.event()
                                .name("error")
                                .data(Map.of("message", e.getMessage())));
                        closeAllConnections();
                        stopPolling();
                    } catch (Exception e) {
                        log.error("SSE轮询过程中发生异常，用户: {}", username, e);
                        broadcast(SseEmitter.event()
                                .name("error")
                                .data(Map.of("message", "查询过程中发生异常: " + e.getMessage())));
                    }
                }, 0, 5, TimeUnit.MINUTES);
                log.debug("为用户 {} 启动轮询任务", username);
            }
        }

        /**
         * 停止轮询任务。
         */
        public void stopPolling() {
            if (isPolling.compareAndSet(true, false)) {
                if (pollingTask != null) {
                    pollingTask.cancel(false);
                    pollingTask = null;
                }
                executor.shutdown();
                log.debug("为用户 {} 停止轮询任务", username);
            }
        }

        /**
         * 向该用户的所有连接广播消息。
         */
        private void broadcast(SseEmitter.SseEventBuilder event) {
            Set<Map.Entry<String, SseEmitter>> entries = connections.entrySet();
            entries.removeIf(entry -> {
                SseEmitter emitter = entry.getValue();
                if (!safeSend(emitter, event)) {
                    // 发送失败，连接已关闭，移除连接
                    try {
                        emitter.complete();
                    } catch (Exception ignored) {
                        // 忽略完成时的异常
                    }
                    return true; // 移除该连接
                }
                return false; // 保留该连接
            });
        }

        /**
         * 关闭所有连接。
         */
        private void closeAllConnections() {
            connections.values().forEach(emitter -> {
                try {
                    emitter.complete();
                } catch (Exception ignored) {
                    // 忽略完成时的异常
                }
            });
            connections.clear();
        }

        /**
         * 安全地发送 SSE 事件。
         */
        private boolean safeSend(SseEmitter emitter, SseEmitter.SseEventBuilder event) {
            try {
                emitter.send(event);
                return true;
            } catch (IOException e) {
                if (log.isDebugEnabled()) {
                    String message = e.getMessage();
                    if (message != null && message.contains("Broken pipe")) {
                        log.debug("SSE连接已断开（客户端关闭连接），用户: {}", username);
                    } else {
                        log.debug("SSE发送失败，连接可能已关闭，用户: {}, 错误: {}", username, e.getMessage());
                    }
                }
                return false;
            } catch (Exception e) {
                log.error("SSE发送时发生未知异常，用户: {}", username, e);
                return false;
            }
        }
    }
}
