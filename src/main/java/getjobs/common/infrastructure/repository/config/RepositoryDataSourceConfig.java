package getjobs.common.infrastructure.repository.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

/**
 * Repository数据源配置
 * <p>
 * 用于配置Service层使用哪个数据源的Repository实现。
 * 通过在application.yml中配置来动态选择SQLite或MySQL。
 * </p>
 * 
 * <p>
 * 配置示例：
 * 
 * <pre>
 * repository:
 *   datasource:
 *     default-type: sqlite  # 可选值: sqlite, mysql
 *     modules:
 *       sasl: mysql         # 指定sasl模块使用mysql
 *       auth: sqlite        # 指定auth模块使用sqlite
 * </pre>
 * </p>
 *
 * @author getjobs
 */
@Data
@Configuration
@ConfigurationProperties(prefix = "repository.datasource")
public class RepositoryDataSourceConfig {

    /**
     * 默认数据源类型
     * 可选值: sqlite, mysql
     * 默认值: sqlite
     */
    private String defaultType = "sqlite";

    /**
     * 模块级别的数据源配置
     * Key: 模块名称（如 sasl, auth）
     * Value: 数据源类型（sqlite 或 mysql）
     */
    private java.util.Map<String, String> modules = new java.util.HashMap<>();

    /**
     * 根据模块名称获取数据源类型
     * 如果模块有特定配置，返回模块配置；否则返回默认配置
     *
     * @param moduleName 模块名称
     * @return 数据源类型（sqlite 或 mysql）
     */
    public String getDataSourceType(String moduleName) {
        return modules.getOrDefault(moduleName, defaultType);
    }

    /**
     * 判断指定模块是否使用MySQL数据源
     *
     * @param moduleName 模块名称
     * @return 如果使用MySQL返回true，否则返回false
     */
    public boolean isMySQL(String moduleName) {
        return "mysql".equalsIgnoreCase(getDataSourceType(moduleName));
    }

    /**
     * 判断指定模块是否使用SQLite数据源
     *
     * @param moduleName 模块名称
     * @return 如果使用SQLite返回true，否则返回false
     */
    public boolean isSQLite(String moduleName) {
        return "sqlite".equalsIgnoreCase(getDataSourceType(moduleName));
    }
}
