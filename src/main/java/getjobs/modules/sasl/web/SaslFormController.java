package getjobs.modules.sasl.web;

import getjobs.common.infrastructure.auth.AuthContext;
import getjobs.modules.sasl.infrastructure.sse.SaslSseConnectionManager;
import getjobs.modules.sasl.service.SaslFormService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.Map;

/**
 * SASL 表单控制器。
 */
@Slf4j
@RestController
@RequestMapping("/api/sasl/form")
@RequiredArgsConstructor
public class SaslFormController {

    private final SaslSseConnectionManager sseConnectionManager;
    private final SaslFormService saslFormService;

    /**
     * 查询当日最新一条汇总统计记录。
     *
     * @return 当日最新一条汇总统计记录，如果不存在返回 404
     */
    @GetMapping("/statistics/latest-today")
    public ResponseEntity<?> getLatestTodayRecord() {
        return saslFormService.getLatestTodayRecord()
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(org.springframework.http.HttpStatus.NOT_FOUND)
                        .body(Map.of("message", "当日暂无汇总统计记录")));
    }

    /**
     * SSE 接口：实时推送当前用户绑定文档下，下次致电时间距离系统当前时间临近3分钟的第一条记录。
     * 每5秒轮询一次，当找到符合条件的记录时通过 SSE 推送。
     * 
     * <p>
     * 优化说明：
     * <ul>
     * <li>使用连接管理器按用户名分组管理连接</li>
     * <li>同一用户的所有连接共享一个轮询任务，减少数据库查询和线程资源消耗</li>
     * <li>当同一用户打开多个标签页时，只进行一次数据库查询，然后广播给所有连接</li>
     * </ul>
     *
     * @return SSE 发射器
     */
    @GetMapping(value = "/records/next-call-time-near-now", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public SseEmitter getFirstRecordWithNextCallTimeNearNowSse() {
        // 在请求线程中提取认证信息，因为后台线程无法访问RequestContextHolder
        String username = AuthContext.getUsername();
        if (!StringUtils.hasText(username)) {
            SseEmitter emitter = new SseEmitter(Long.MAX_VALUE);
            try {
                emitter.send(SseEmitter.event()
                        .name("error")
                        .data(Map.of("message", "用户未认证")));
                emitter.complete();
            } catch (IOException e) {
                log.error("发送SSE错误消息失败", e);
                emitter.completeWithError(e);
            }
            return emitter;
        }

        // 创建 SSE 发射器，设置30分钟超时
        // 注意：每个 HTTP 连接必须有一个独立的 SseEmitter 实例（这是 HTTP/SSE 协议的要求）
        // 但是可以通过连接管理器复用轮询任务和线程资源
        SseEmitter emitter = new SseEmitter(30 * 60 * 1000L);

        // 注册到连接管理器，管理器会：
        // 1. 按用户名分组管理连接
        // 2. 同一用户的所有连接共享一个轮询任务
        // 3. 当找到符合条件的记录时，向该用户的所有连接广播
        sseConnectionManager.register(username, emitter);

        return emitter;
    }
}
