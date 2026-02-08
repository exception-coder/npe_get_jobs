package getjobs.common.infrastructure.repository.factory.impl;

import getjobs.common.infrastructure.repository.factory.RepositoryProvider;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * MySQL Repository提供者实现
 * <p>
 * 从Spring容器中获取MySQL数据源的Repository Bean。
 * MySQL的Repository通常位于特定的包路径下（getjobs.modules.datasource.mysql.repository），
 * 命名规则：在SQLite Repository名称后添加"Mysql"后缀。
 * 例如：UserRepository -> UserMysqlRepository
 * </p>
 *
 * @author getjobs
 */
@Slf4j
@Component("mysqlRepositoryProvider")
public class MySQLRepositoryProvider implements RepositoryProvider {

    private final ApplicationContext applicationContext;

    // 缓存已找到的MySQL Repository类型映射
    private final Map<Class<?>, Class<?>> mysqlRepositoryTypeCache = new ConcurrentHashMap<>();

    public MySQLRepositoryProvider(ApplicationContext applicationContext) {
        this.applicationContext = applicationContext;
    }

    @Override
    @SuppressWarnings("unchecked")
    public <T> T getRepository(Class<T> repositoryType, String moduleName) {
        try {
            Class<?> mysqlRepositoryType;

            // 检查传入的类型是否已经是MySQL Repository类型
            if (isMySQLRepositoryType(repositoryType)) {
                // 如果已经是MySQL Repository类型，直接使用
                mysqlRepositoryType = repositoryType;
                log.debug("传入的类型已经是MySQL Repository类型: {} (模块: {})",
                        repositoryType.getSimpleName(), moduleName);
            } else {
                // 如果不是，根据SQLite Repository类型，查找对应的MySQL Repository类型
                mysqlRepositoryType = findMySQLRepositoryType(repositoryType);

                if (mysqlRepositoryType == null) {
                    throw new IllegalArgumentException(
                            String.format("找不到对应的MySQL Repository类型: %s (模块: %s). " +
                                    "请确保在 getjobs.modules.datasource.mysql.repository 包下存在对应的 %sMysqlRepository 接口",
                                    repositoryType.getSimpleName(), moduleName,
                                    repositoryType.getSimpleName().replace("Repository", "")));
                }
            }

            // 从Spring容器中获取MySQL Repository Bean
            Object repository = applicationContext.getBean(mysqlRepositoryType);
            log.debug("从MySQL数据源获取Repository: {} -> {} (模块: {})",
                    repositoryType.getSimpleName(), mysqlRepositoryType.getSimpleName(), moduleName);

            // 类型转换：虽然返回类型是T（可能是统一接口或SQLite Repository类型），但实际是MySQL Repository类型
            // 这在运行时是安全的，因为Repository接口的方法签名应该相同
            return (T) repository;
        } catch (BeansException e) {
            log.error("无法从MySQL数据源获取Repository: {} (模块: {})", repositoryType.getSimpleName(), moduleName, e);
            throw new IllegalArgumentException(
                    String.format("找不到MySQL数据源的Repository: %s (模块: %s). 请确保已配置MySQL数据源并注册了对应的Repository Bean",
                            repositoryType.getSimpleName(), moduleName),
                    e);
        }
    }

    @Override
    public String getDataSourceType() {
        return "mysql";
    }

    /**
     * 检查传入的类型是否已经是MySQL Repository类型
     * <p>
     * 判断标准：
     * 1. 类名以 "MysqlRepository" 结尾
     * 2. 或者包路径包含 "datasource.mysql.repository"
     * </p>
     *
     * @param repositoryType Repository类型
     * @return 如果是MySQL Repository类型返回true，否则返回false
     */
    private boolean isMySQLRepositoryType(Class<?> repositoryType) {
        String className = repositoryType.getSimpleName();
        String packageName = repositoryType.getPackageName();

        // 检查类名是否以 "MysqlRepository" 结尾
        if (className.endsWith("MysqlRepository")) {
            return true;
        }

        // 检查包路径是否包含 "datasource.mysql.repository"
        if (packageName.contains("datasource.mysql.repository")) {
            return true;
        }

        return false;
    }

    /**
     * 根据SQLite Repository类型，查找对应的MySQL Repository类型
     * <p>
     * 命名规则：UserRepository -> UserMysqlRepository
     * 包路径：getjobs.modules.auth.infrastructure.UserRepository
     * -> getjobs.modules.datasource.mysql.repository.UserMysqlRepository
     * </p>
     *
     * @param sqliteRepositoryType SQLite Repository类型
     * @return MySQL Repository类型，如果找不到返回null
     */
    private Class<?> findMySQLRepositoryType(Class<?> sqliteRepositoryType) {
        // 先从缓存中查找
        return mysqlRepositoryTypeCache.computeIfAbsent(sqliteRepositoryType, this::loadMySQLRepositoryType);
    }

    /**
     * 加载MySQL Repository类型
     */
    private Class<?> loadMySQLRepositoryType(Class<?> sqliteRepositoryType) {
        try {
            // 获取SQLite Repository的简单类名（如 UserRepository）
            String sqliteSimpleName = sqliteRepositoryType.getSimpleName();

            // 构建MySQL Repository的类名（如 UserMysqlRepository）
            String mysqlSimpleName = sqliteSimpleName.replace("Repository", "MysqlRepository");

            // MySQL Repository的包路径
            String mysqlPackageName = "getjobs.modules.datasource.mysql.repository";
            String mysqlFullClassName = mysqlPackageName + "." + mysqlSimpleName;

            // 使用当前类的类加载器加载MySQL Repository类
            Class<?> mysqlRepositoryType = Class.forName(mysqlFullClassName, false,
                    Thread.currentThread().getContextClassLoader());

            log.debug("找到MySQL Repository类型映射: {} -> {}",
                    sqliteRepositoryType.getSimpleName(), mysqlRepositoryType.getSimpleName());

            return mysqlRepositoryType;
        } catch (ClassNotFoundException e) {
            log.warn("找不到对应的MySQL Repository类型: {} -> {}MysqlRepository",
                    sqliteRepositoryType.getSimpleName(),
                    sqliteRepositoryType.getSimpleName().replace("Repository", ""));
            return null;
        }
    }
}
