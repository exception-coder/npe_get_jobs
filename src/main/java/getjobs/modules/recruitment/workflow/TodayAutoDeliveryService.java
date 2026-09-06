package getjobs.modules.recruitment.workflow;

import getjobs.modules.recruitment.application.*;
import getjobs.modules.recruitment.domain.ContactDeliveryOptions;
import getjobs.modules.recruitment.domain.ContactResult;
import getjobs.modules.recruitment.domain.RecruitmentPlatformId;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.core.task.TaskExecutor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.UUID;

/** Sequential, explicitly authorized delivery of a frozen today's candidate set. */
@Service
public class TodayAutoDeliveryService {
    private final RecruitmentJobRegistryService jobs;
    private final RecruitmentGoalService goals;
    private final RecruitmentSearchPlanService plans;
    private final RecruitmentJobSelectionService selection;
    private final RecruitmentContactHistoryService history;
    private final RecruitmentWorkflowService workflows;
    private final TaskExecutor executor;
    private volatile Progress progress = new Progress(null, "IDLE", 0, 0, 0, "");
    private volatile boolean stopping;

    public TodayAutoDeliveryService(RecruitmentJobRegistryService jobs, RecruitmentGoalService goals,
            RecruitmentSearchPlanService plans, RecruitmentJobSelectionService selection,
            RecruitmentContactHistoryService history, RecruitmentWorkflowService workflows,
            @Qualifier("recruitmentWorkflowExecutor") TaskExecutor executor) {
        this.jobs = jobs; this.goals = goals; this.plans = plans; this.selection = selection;
        this.history = history; this.workflows = workflows; this.executor = executor;
    }

    public synchronized Progress start(String platform, Long goalId, String greeting, boolean image, String imagePath) {
        if ("RUNNING".equals(progress.status())) throw new IllegalStateException("自动投递仍在运行");
        if (!"boss".equals(platform)) throw new IllegalArgumentException("自动投递目前仅支持 BOSS");
        if (greeting == null || greeting.isBlank() || greeting.trim().length() > 500) {
            throw new IllegalArgumentException("请先编辑1至500字的自动打招呼文字");
        }
        var active = goals.active();
        if (active == null) throw new IllegalArgumentException("请先确认求职意向");
        if (!active.getId().equals(goalId)) throw new IllegalArgumentException("当前意向已变化，请重新核对后投递");
        var plan = plans.resolve(new RecruitmentPlatformId(platform), active.getId());
        var options = new ContactDeliveryOptions(image, imagePath, true);
        var ids = jobs.todayIds(platform);
        stopping = false;
        progress = new Progress(UUID.randomUUID().toString(), "RUNNING", ids.size(), 0, 0, "正在匹配今日岗位");
        try {
            executor.execute(() -> execute(platform, ids, plan, greeting.trim(), options));
        } catch (RuntimeException exception) {
            update("FAILED", 0, 0, "任务无法启动，请稍后重试");
            throw exception;
        }
        return progress;
    }

    public Progress status() { return progress; }

    public synchronized Progress stop() {
        stopping = true;
        return progress;
    }

    private void execute(String platform, List<Long> ids, RecruitmentSearchPlan plan,
            String greeting, ContactDeliveryOptions options) {
        int checked = 0;
        int sent = 0;
        try {
            for (Long id : ids) {
                if (stopping) break;
                var job = jobs.requireRegisteredJob(id).job();
                checked++;
                if (!history.contactedIds(platform, List.of(job)).isEmpty()) {
                    update("RUNNING", checked, sent, "跳过历史已投递岗位");
                    continue;
                }
                var matched = selection.select(List.of(job), plan.goal()).getFirst();
                if (matched.intentMatch() == null || !"apply".equals(matched.intentMatch().recommendation())) {
                    update("RUNNING", checked, sent, "跳过不符或待核实岗位：" + job.title());
                    continue;
                }
                if (stopping) break;
                update("RUNNING", checked, sent, "正在投递：" + job.company() + " · " + job.title());
                var task = workflows.startFromJob(id);
                if (stopping) break;
                task = workflows.confirmContact(task.taskId(), job.platformJobId(), greeting, options);
                while (task.status() == WorkflowStatus.RUNNING || task.status() == WorkflowStatus.QUEUED) {
                    Thread.sleep(1000);
                    task = workflows.require(task.taskId());
                }
                if (task.status() != WorkflowStatus.COMPLETED || task.contactResults().stream().noneMatch(result ->
                        result.status() == ContactResult.ContactStatus.SUCCEEDED && Boolean.TRUE.equals(result.textSent()))) {
                    throw new IllegalStateException("投递未确认成功，请核对平台记录：" + job.title());
                }
                sent++;
                update("RUNNING", checked, sent, "已发送：" + job.title());
                for (int second = 0; second < 10 && !stopping; second++) Thread.sleep(1000);
            }
            update(stopping ? "STOPPED" : "COMPLETED", checked, sent, stopping ? "已停止后续投递" : "今日岗位处理完成");
        } catch (InterruptedException exception) {
            Thread.currentThread().interrupt();
            update("FAILED", checked, sent, "任务中断，请核对最后一个岗位的投递记录");
        } catch (RuntimeException exception) {
            update("FAILED", checked, sent, exception.getMessage());
        }
    }

    private void update(String status, int checked, int sent, String message) {
        progress = new Progress(progress.id(), status, progress.total(), checked, sent, message);
    }

    /** Status of the current bounded batch; successful contacts remain in persistent history. */
    public record Progress(String id, String status, int total, int checked, int sent, String message) { }
}
