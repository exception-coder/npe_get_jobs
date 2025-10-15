package getjobs.modules.dict.api;

/**
 * 字典项（如 薪资区间 3-5K）
 * lowSalary, highSalary 仅 salaryList 有值
 * parentCode 父级字典代码，用于表示层级关系
 */
public record DictItem(String code, String name, Integer lowSalary, Integer highSalary, String parentCode) {
    // 向下兼容：两参数构造函数
    public DictItem(String code, String name) {
        this(code, name, null, null, null);
    }
    
    // 向下兼容：四参数构造函数（原主构造函数签名）
    public DictItem(String code, String name, Integer lowSalary, Integer highSalary) {
        this(code, name, lowSalary, highSalary, null);
    }
}