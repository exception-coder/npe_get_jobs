package getjobs.modules.ai.job_skill.web;

import getjobs.modules.ai.job_skill.dto.JobSkillRequest;
import getjobs.modules.ai.job_skill.dto.JobSkillResponse;
import getjobs.modules.ai.job_skill.service.JobSkillService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

/**
 * 岗位技能分析控制器
 */
@RestController
@RequestMapping("/api/ai/job-skill")
@RequiredArgsConstructor
public class JobSkillController {

    private final JobSkillService jobSkillService;

    /**
     * 分析岗位技能并生成打招呼消息
     *
     * @param request 岗位技能分析请求
     * @return 岗位技能分析响应
     */
    @PostMapping("/analyze")
    public JobSkillResponse analyze(@RequestBody JobSkillRequest request) {
        return jobSkillService.analyze(request);
    }
}
