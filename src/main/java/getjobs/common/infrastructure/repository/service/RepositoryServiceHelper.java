package getjobs.common.infrastructure.repository.service;

import getjobs.common.infrastructure.repository.config.RepositoryDataSourceConfig;
import getjobs.common.infrastructure.repository.config.RepositoryTypeMappingConfig;
import getjobs.common.infrastructure.repository.factory.RepositoryFactory;
import getjobs.common.infrastructure.repository.factory.RepositoryProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

/**
 * Repository服务辅助类
 * <p>
 * 简化Service层获取Repository的过程。
 * Service可以通过此辅助类根据配置获取对应的Repository实例。
 * </p>
 * 
 * <p>
 * 使用示例：
 * 
 * <pre>
 * {@code
 * @Service
 * public class SaslService {
 *     private final RepositoryServiceHelper repositoryHelper;
 * 
 *     public void someMethod() {
 *         // 根据配置获取Repository，自动选择SQLite或MySQL
 *         SaslRecordRepository repository = repositoryHelper.getRepository(
 *                 SaslRecordRepository.class, "sasl");
 *         // 使用repository...
 *     }
 * }
 * }
 * </pre>
 * </p>
 *
 * @author getjobs
 */
@Slf4j
@Component
@RequiredArgsConstructor
public class RepositoryServiceHelper {

    private final RepositoryFactory repositoryFactory;
    private final RepositoryDataSourceConfig config;
    private final RepositoryTypeMappingConfig typeMappingConfig;

    /**
     * 根据模块名称获取Repository实例（使用统一接口）
     * <p>
     * 会根据配置自动选择SQLite或MySQL的Repository实现。
     * Service层应该使用统一接口类型（如IUserRepository.class），而不是具体的SQLite或MySQL Repository类型。
     * </p>
     *
     * @param unifiedInterfaceType 统一接口类型（如 IUserRepository.class）
     * @param moduleName           模块名称（如：sasl, auth）
     * @param <T>                  Repository类型
     * @return Repository实例（返回统一接口的实现）
     */
    @SuppressWarnings("unchecked")
    public <T> T getRepositoryByUnifiedInterface(Class<T> unifiedInterfaceType, String moduleName) {
        log.debug("获取Repository (统一接口): {} (模块: {})", unifiedInterfaceType.getSimpleName(), moduleName);
        
        // 判断使用哪个数据源
        boolean isMySQL = config.isMySQL(moduleName);
        
        // 根据统一接口类型和配置，找到对应的Repository实现类型
        Class<?> concreteRepositoryType = typeMappingConfig.getRepositoryType(unifiedInterfaceType, isMySQL);
        
        if (concreteRepositoryType == null) {
            throw new IllegalArgumentException(
                String.format("找不到对应的Repository实现类型: %s (模块: %s, 数据源: %s). " +
                    "请确保在RepositoryTypeMappingConfig中配置了对应的映射关系",
                    unifiedInterfaceType.getSimpleName(), moduleName, isMySQL ? "MySQL" : "SQLite"));
        }
        
        // 获取Repository实例
        RepositoryProvider provider = repositoryFactory.getRepositoryProvider(moduleName);
        Object repository = provider.getRepository(concreteRepositoryType, moduleName);
        
        // 类型转换：将具体实现转换为统一接口类型
        // 由于具体的Repository接口（concreteRepositoryType）都继承了统一接口（unifiedInterfaceType），
        // Spring Data JPA创建的代理对象应该实现了所有接口，包括统一接口
        // 我们可以安全地进行类型转换
        try {
            return (T) repository;
        } catch (ClassCastException e) {
            // 如果类型转换失败，尝试通过接口检查
            Class<?>[] interfaces = repository.getClass().getInterfaces();
            for (Class<?> iface : interfaces) {
                if (unifiedInterfaceType.isAssignableFrom(iface)) {
                    // 找到了实现统一接口的接口，再次尝试转换
                    return (T) repository;
                }
            }
            throw new ClassCastException(
                String.format("无法将Repository实例 %s (类型: %s) 转换为统一接口 %s. " +
                    "请确保 %s 接口继承了 %s 接口",
                    repository.getClass().getName(),
                    concreteRepositoryType.getName(),
                    unifiedInterfaceType.getName(),
                    concreteRepositoryType.getSimpleName(),
                    unifiedInterfaceType.getSimpleName()));
        }
    }

    /**
     * 根据模块名称获取Repository实例（向后兼容方法）
     * <p>
     * 如果传入的是统一接口类型，会自动使用统一接口映射；
     * 如果传入的是具体的Repository类型，则直接使用。
     * </p>
     *
     * @param repositoryType Repository接口类型（可以是统一接口或具体Repository）
     * @param moduleName     模块名称（如：sasl, auth）
     * @param <T>            Repository类型
     * @return Repository实例
     */
    @SuppressWarnings("unchecked")
    public <T> T getRepository(Class<T> repositoryType, String moduleName) {
        // 检查是否是统一接口类型（统一接口通常以I开头）
        if (repositoryType.getSimpleName().startsWith("I") && 
            typeMappingConfig.getSqliteRepositoryType(repositoryType) != null) {
            // 是统一接口类型，使用统一接口映射
            return getRepositoryByUnifiedInterface(repositoryType, moduleName);
        }
        
        // 否则，使用原有的逻辑（直接获取Repository）
        log.debug("获取Repository: {} (模块: {})", repositoryType.getSimpleName(), moduleName);
        RepositoryProvider provider = repositoryFactory.getRepositoryProvider(moduleName);
        return provider.getRepository(repositoryType, moduleName);
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

    /**
     * 判断指定模块是否使用SQLite数据源
     *
     * @param moduleName 模块名称
     * @return 如果使用SQLite返回true，否则返回false
     */
    public boolean isSQLite(String moduleName) {
        return config.isSQLite(moduleName);
    }
}
