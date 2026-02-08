package getjobs.common.infrastructure.repository.factory;

/**
 * Repository提供者接口
 * <p>
 * 用于获取特定数据源的Repository实例。
 * 不同的数据源（SQLite、MySQL）会有不同的实现。
 * </p>
 *
 * @author getjobs
 */
public interface RepositoryProvider {

    /**
     * 根据Repository类型和模块名称获取Repository实例
     *
     * @param repositoryType Repository类型（Class对象）
     * @param moduleName     模块名称
     * @param <T>            Repository类型
     * @return Repository实例
     * @throws IllegalArgumentException 如果找不到对应的Repository
     */
    <T> T getRepository(Class<T> repositoryType, String moduleName);

    /**
     * 获取数据源类型名称
     *
     * @return 数据源类型名称（如：sqlite, mysql）
     */
    String getDataSourceType();
}
