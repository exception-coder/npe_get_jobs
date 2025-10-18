package getjobs.modules.ai.job.assembler;

/**
 * 职位匹配提示词变量常量
 * <p>
 * 定义职位匹配相关提示词模板中使用的变量名称常量。
 * </p>
 */
public final class JobPromptVariables {

    private JobPromptVariables() {
        throw new UnsupportedOperationException("Utility class");
    }

    /**
     * 候选人期望从事的工作内容
     */
    public static final String MY_JD = "my_jd";

    /**
     * 职位描述
     */
    public static final String JD = "jd";
}
