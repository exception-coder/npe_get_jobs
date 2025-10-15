package getjobs.modules.ai.job.dto;

import getjobs.modules.ai.common.enums.AiPlatform;
import lombok.Data;

@Data
public class JobMatchRequest {
    private String myJd;
    private String jobDescription;
    private AiPlatform platform;
}
