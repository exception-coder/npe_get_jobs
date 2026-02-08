package getjobs.common.infrastructure.repository.factory;

import getjobs.common.infrastructure.repository.config.RepositoryDataSourceConfig;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

/**
 * Repository工厂类
 * <p>
 * 根据配置动态选择SQLite或MySQL的Repository实现。
 * Service层通过此工厂获取Repository实例，而不是直接注入具体的Repository。
 * </p>
 *
 * @author getjobs
 */
@Slf4j
@Component
@RequiredArgsConstructor
public class RepositoryFactory {

    private final RepositoryDataSourceConfig config;
    private final RepositoryProvider sqliteRepositoryProvider;
    private final RepositoryProvider mysqlRepositoryProvider;

    /**
     * 根据模块名称获取Repository提供者
     *
     * @param moduleName 模块名称（如：sasl, auth）
     * @return Repository提供者
     */
    public RepositoryProvider getRepositoryProvider(String moduleName) {
        String dataSourceType = config.getDataSourceType(moduleName);
        log.debug("模块 [{}] 使用数据源类型: {}", moduleName, dataSourceType);

        if ("mysql".equalsIgnoreCase(dataSourceType)) {
            return mysqlRepositoryProvider;
        } else {
            return sqliteRepositoryProvider;
        }
    }

    /**
     * 判断指定模块是否使用MySQL数据源
     *
     * @param moduleName 模块名称
     * @return 如果使用MySQL返回true，否则返回false
     */
    public boolean isMySQL(String moduleName) {
        return config.isMySQL(moduleName);
    }
}
