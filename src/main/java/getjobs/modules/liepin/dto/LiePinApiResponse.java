package getjobs.modules.liepin.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class LiePinApiResponse {
    private int flag;
    private DataWrapper data;

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class DataWrapper {
        private DataInner data;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class DataInner {
        private List<JobCard> jobCardList;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class JobCard {
        private Comp comp;
        private Job job;
        private Recruiter recruiter;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Comp {
        private String compIndustry;
        private Integer compId;
        private String compName;
        private String compScale;
        private String compStage;
        private String compLogo;
        private String link;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Job {
        private List<String> labels;
        private String title;
        private String refreshTime;
        private String salary;
        private String jobKind;
        private String jobId;
        private String dq;
        private String link;
        private String requireEduLevel;
        private String requireWorkYears;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Recruiter {
        private String recruiterId;
        private String recruiterName;
        private String recruiterTitle;
        private String imShowText;
        private String recruiterPhoto;
    }
}
