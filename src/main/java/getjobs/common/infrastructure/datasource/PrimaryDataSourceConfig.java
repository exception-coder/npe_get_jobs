package getjobs.common.infrastructure.datasource;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import jakarta.persistence.EntityManagerFactory;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.hibernate.jpa.HibernatePersistenceProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;
import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.Map;

/**
 * SQLite 主数据源配置类
 * <p>
 * 配置 SQLite 作为主数据源（默认数据源）。
 * 当存在多个数据源时，需要明确配置主数据源的 EntityManagerFactory 和 TransactionManager，
 * 并使用 @Primary 注解标记为主数据源。
 * </p>
 * <p>
 * 注意：我们手动创建主数据源（DataSource）并标记为 @Primary，确保它优先于其他数据源。
 * 同时手动配置 EntityManagerFactory 和 TransactionManager。
 * </p>
 *
 * @author getjobs
 */
@Slf4j
@Configuration
@EnableTransactionManagement
@EntityScan(basePackages = {
        "getjobs.modules.auth",
        "getjobs.modules.sasl",
        "getjobs.repository.entity",
        "getjobs.modules.webdocs.domain"
})
@EnableJpaRepositories(basePackages = {
        "getjobs.modules.sasl.repository",
        "getjobs.modules.auth.infrastructure",
        "getjobs.repository",
        "getjobs.modules.webdocs.repository"
}, entityManagerFactoryRef = "entityManagerFactory", transactionManagerRef = "transactionManager")
public class PrimaryDataSourceConfig {

    @Value("${spring.datasource.url}")
    private String jdbcUrl;

    @Value("${spring.datasource.driver-class-name}")
    private String driverClassName;

    @Value("${spring.datasource.hikari.maximum-pool-size:5}")
    private int maximumPoolSize;

    @Value("${spring.datasource.hikari.minimum-idle:2}")
    private int minimumIdle;

    @Value("${spring.datasource.hikari.connection-timeout:30000}")
    private long connectionTimeout;

    @Value("${spring.datasource.hikari.idle-timeout:600000}")
    private long idleTimeout;

    @Value("${spring.datasource.hikari.max-lifetime:1800000}")
    private long maxLifetime;

    /**
     * 创建主数据源（SQLite）
     * <p>
     * 明确创建主数据源并标记为 @Primary，确保它优先于其他数据源。
     * </p>
     *
     * @return 主数据源实例
     */
    @Bean(name = "dataSource")
    @Primary
    public DataSource primaryDataSource() {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl(jdbcUrl);
        config.setDriverClassName(driverClassName);
        config.setMaximumPoolSize(maximumPoolSize);
        config.setMinimumIdle(minimumIdle);
        config.setConnectionTimeout(connectionTimeout);
        config.setIdleTimeout(idleTimeout);
        config.setMaxLifetime(maxLifetime);
        config.setPoolName("SQLite-HikariCP");

        HikariDataSource dataSource = new HikariDataSource(config);

        log.info("═══════════════════════════════════════════════════════════");
        log.info("        SQLite 主数据源配置完成");
        log.info("═══════════════════════════════════════════════════════════");
        log.info("数据库 URL: {}", jdbcUrl);
        log.info("连接池最大连接数: {}", maximumPoolSize);
        log.info("连接池最小空闲连接数: {}", minimumIdle);
        log.info("═══════════════════════════════════════════════════════════");

        return dataSource;
    }

    /**
     * 创建主数据源的 EntityManagerFactory
     * <p>
     * 使用 @Primary 注解标记为主 EntityManagerFactory，名称为 "entityManagerFactory"（默认名称）。
     * </p>
     *
     * @param builder    EntityManagerFactoryBuilder
     * @param dataSource 主数据源（SQLite）
     * @return 主数据源的 EntityManagerFactory
     */
    @Bean(name = "entityManagerFactory")
    @Primary
    public LocalContainerEntityManagerFactoryBean entityManagerFactory(
            @Qualifier("dataSource") DataSource dataSource) {

        // 验证数据源 URL 是否正确（SQLite）
        if (dataSource instanceof HikariDataSource) {
            HikariDataSource hikariDataSource = (HikariDataSource) dataSource;
            String url = hikariDataSource.getJdbcUrl();
            log.info("主数据源 URL: {}", url);
            if (!url.contains("sqlite") && !url.contains("SQLite")) {
                log.error("警告：主数据源 URL 不是 SQLite！URL: {}", url);
            }
        }

        Map<String, String> properties = new HashMap<>();
        properties.put("hibernate.dialect", "org.hibernate.community.dialect.SQLiteDialect");
        properties.put("hibernate.hbm2ddl.auto", "update");
        properties.put("hibernate.format_sql", "true");
        properties.put("hibernate.show_sql", "false");

        LocalContainerEntityManagerFactoryBean factoryBean = new LocalContainerEntityManagerFactoryBean();
        factoryBean.setDataSource(dataSource);
        factoryBean.setPackagesToScan(
                "getjobs.modules.auth",
                "getjobs.modules.sasl",
                "getjobs.repository.entity",
                "getjobs.modules.webdocs.domain");
        factoryBean.setPersistenceUnitName("primary");
        factoryBean.setPersistenceProviderClass(HibernatePersistenceProvider.class);
        factoryBean.getJpaPropertyMap().putAll(properties);

        log.info("═══════════════════════════════════════════════════════════");
        log.info("        SQLite 主数据源 EntityManagerFactory 配置完成");
        log.info("═══════════════════════════════════════════════════════════");
        log.info("数据源类型: {}", dataSource.getClass().getSimpleName());
        if (dataSource instanceof HikariDataSource) {
            log.info("数据源 URL: {}", ((HikariDataSource) dataSource).getJdbcUrl());
        }
        log.info("持久化单元: primary");
        log.info("扫描包路径:");
        log.info("  - getjobs.modules.auth");
        log.info("  - getjobs.modules.sasl");
        log.info("  - getjobs.repository.entity");
        log.info("  - getjobs.modules.webdocs.domain");
        log.info("═══════════════════════════════════════════════════════════");

        return factoryBean;
    }

    /**
     * 创建主数据源的事务管理器
     * <p>
     * 使用 @Primary 注解标记为主事务管理器，名称为 "transactionManager"（默认名称）。
     * 使用 @DependsOn 确保在 EntityManagerFactory 创建之后创建。
     * </p>
     *
     * @param entityManagerFactory 主数据源的 EntityManagerFactory
     * @return 主数据源的事务管理器
     */
    /**
     * 创建主数据源的事务管理器
     * <p>
     * 使用 @Primary 注解标记为主事务管理器，名称为 "transactionManager"（默认名称）。
     * 注意：需要等待 EntityManagerFactory Bean 完全初始化后才能使用。
     * </p>
     *
     * @param entityManagerFactoryBean 主数据源的 EntityManagerFactory Bean
     * @return 主数据源的事务管理器
     */
    @Bean(name = "transactionManager")
    @Primary
    @DependsOn("entityManagerFactory")
    public PlatformTransactionManager transactionManager(
            @Qualifier("entityManagerFactory") LocalContainerEntityManagerFactoryBean entityManagerFactoryBean) {
        log.info("创建 SQLite 主数据源事务管理器");
        EntityManagerFactory entityManagerFactory = entityManagerFactoryBean.getObject();
        if (entityManagerFactory == null) {
            throw new IllegalStateException("EntityManagerFactory 未初始化");
        }
        return new JpaTransactionManager(entityManagerFactory);
    }
}
