package getjobs.common.infrastructure.repository.factory.impl;

import getjobs.common.infrastructure.repository.factory.RepositoryProvider;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

/**
 * SQLite Repository提供者实现
 * <p>
 * 从Spring容器中获取SQLite数据源的Repository Bean。
 * </p>
 *
 * @author getjobs
 */
@Slf4j
@Component("sqliteRepositoryProvider")
public class SQLiteRepositoryProvider implements RepositoryProvider {

    private final ApplicationContext applicationContext;

    public SQLiteRepositoryProvider(ApplicationContext applicationContext) {
        this.applicationContext = applicationContext;
    }

    @Override
    public <T> T getRepository(Class<T> repositoryType, String moduleName) {
        try {
            // 从Spring容器中获取Repository Bean
            // Repository通常使用Spring Data JPA自动创建，Bean名称通常是接口名首字母小写
            String beanName = getDefaultBeanName(repositoryType);
            T repository = applicationContext.getBean(beanName, repositoryType);

            log.debug("从SQLite数据源获取Repository: {} (模块: {})", repositoryType.getSimpleName(), moduleName);
            return repository;
        } catch (BeansException e) {
            log.error("无法从SQLite数据源获取Repository: {} (模块: {})", repositoryType.getSimpleName(), moduleName, e);
            throw new IllegalArgumentException(
                    String.format("找不到SQLite数据源的Repository: %s (模块: %s)",
                            repositoryType.getSimpleName(), moduleName),
                    e);
        }
    }

    @Override
    public String getDataSourceType() {
        return "sqlite";
    }

    /**
     * 获取默认的Bean名称（接口名首字母小写）
     */
    private String getDefaultBeanName(Class<?> clazz) {
        String className = clazz.getSimpleName();
        return Character.toLowerCase(className.charAt(0)) + className.substring(1);
    }
}
