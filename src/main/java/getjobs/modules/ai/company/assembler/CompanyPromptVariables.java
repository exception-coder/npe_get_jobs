package getjobs.modules.ai.company.assembler;

/**
 * 公司评估提示词变量常量
 */
public final class CompanyPromptVariables {

    private CompanyPromptVariables() {
        throw new UnsupportedOperationException("Utility class");
    }

    /**
     * 公司信息（原始输入）
     */
    public static final String COMPANY_INFO = "company_info";

    /**
     * 用户自定义扣分规则
     */
    public static final String EXTRA_DEDUCTIONS = "extra_deductions";

    /**
     * 用户自定义加分规则
     */
    public static final String EXTRA_BONUSES = "extra_bonuses";
}
