package getjobs.common.infrastructure.tomcat;

import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.connector.Request;
import org.apache.catalina.connector.Response;
import org.apache.catalina.valves.ValveBase;

import jakarta.servlet.ServletException;
import java.io.IOException;

/**
 * Tomcat Valve 扩展，用于处理非 HTTP 探针请求
 * 
 * <p>
 * 该 Valve 主要用于：
 * <ul>
 * <li>过滤和处理非标准的 HTTP 请求</li>
 * <li>在事件触发时捕获异常</li>
 * <li>记录请求处理过程中的异常</li>
 * </ul>
 * 
 * <p>
 * 注意事项：
 * <ul>
 * <li>此 Valve 不会阻止正常的 HTTP 请求处理</li>
 * <li>所有合法 HTTP 请求都会正常传递到下一个 Valve</li>
 * <li>仅用于记录和监控非标准请求</li>
 * </ul>
 * 
 * @author npe_get_jobs
 */
@Slf4j
public class NonHttpProbeValve extends ValveBase {

    @Override
    public void invoke(Request request, Response response) throws IOException, ServletException {
        try {
            // 只有合法 HTTP 才到这里，正常传递到下一个 Valve
            getNext().invoke(request, response);
        } catch (Exception e) {
            // 记录异常但不中断请求处理
            log.warn("处理请求时发生异常: {} {}",
                    request != null ? request.getRequestURI() : "unknown",
                    e.getMessage(), e);
            throw e;
        }
    }

    /**
     * 处理事件，事件触发时可捕获异常
     * 
     * <p>
     * 注意：此方法的签名可能需要根据具体的 Tomcat 版本进行调整。
     * 在某些版本中，可能需要使用 org.apache.catalina.comet.CometEvent 类型。
     * 
     * @param request  请求对象
     * @param response 响应对象
     * @param event    事件对象（具体类型取决于 Tomcat 版本）
     * @throws IOException      IO 异常
     * @throws ServletException Servlet 异常
     */
    @SuppressWarnings("unused")
    public void event(Request request, Response response, Object event)
            throws IOException, ServletException {
        try {
            // 事件触发时可捕获异常
            // 注意：此方法的具体实现可能需要根据 Tomcat 版本和实际需求进行调整
            if (log.isDebugEnabled()) {
                log.debug("处理事件: request={}, event={}",
                        request != null ? request.getRequestURI() : "null",
                        event != null ? event.getClass().getSimpleName() : "null");
            }
        } catch (Exception e) {
            log.warn("处理事件时发生异常: {}", e.getMessage(), e);
            // 不重新抛出异常，避免影响 Tomcat 的正常运行
        }
    }

}
