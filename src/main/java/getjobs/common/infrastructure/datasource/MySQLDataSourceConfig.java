package getjobs.common.infrastructure.datasource;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import jakarta.persistence.EntityManagerFactory;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.Map;

/**
 * MySQL 数据源配置类
 * <p>
 * 配置 MySQL 作为第二个数据源，与 SQLite 主数据源共存。
 * </p>
 * 
 * <h2>数据源隔离机制</h2>
 * <ul>
 * <li><b>MySQL 数据源</b>：仅扫描 {@code getjobs.modules.datasource.mysql.repository}
 * 包下的 Repository</li>
 * <li><b>SQLite 主数据源</b>：扫描所有其他包下的 Repository（由 Spring Boot 自动配置处理）</li>
 * </ul>
 * 
 * <h2>工作原理</h2>
 * <ol>
 * <li>通过 {@code @EnableJpaRepositories} 的 {@code basePackages} 属性，只扫描 MySQL 相关的
 * Repository</li>
 * <li>通过 {@code entityManagerFactoryRef} 和 {@code transactionManagerRef} 明确指定使用
 * MySQL 数据源</li>
 * <li>没有被此配置扫描到的 Repository 会自动使用主数据源（SQLite）</li>
 * </ol>
 * 
 * <h2>重要说明</h2>
 * <ul>
 * <li>✅ 明确指定了 {@code entityManagerFactoryRef} 和 {@code transactionManagerRef} 的
 * Repository 不会被主数据源覆盖</li>
 * <li>✅ 只有位于 {@code getjobs.modules.datasource.mysql.repository} 包下的 Repository
 * 才会使用 MySQL 数据源</li>
 * <li>✅ 其他所有 Repository（如 {@code getjobs.modules.sasl.repository}）都会使用默认的
 * SQLite 主数据源</li>
 * </ul>
 *
 * @author getjobs
 */
@Slf4j
@Configuration
@EnableTransactionManagement
@EntityScan(basePackages = {
                "getjobs.modules.auth.domain",
                "getjobs.modules.sasl.domain",
                "getjobs.modules.datasource.mysql.domain", // 仅保留 DataSourceVerification 等 MySQL 特有的实体
                "getjobs.modules.resume.domain" // 简历模块实体
})
@EnableJpaRepositories(basePackages = {
                "getjobs.modules.datasource.mysql.repository",
                "getjobs.modules.resume.repository" // 简历模块 Repository
}, entityManagerFactoryRef = "mysqlEntityManagerFactory", transactionManagerRef = "mysqlTransactionManager")
public class MySQLDataSourceConfig {

        @Value("${spring.datasource.mysql.url}")
        private String jdbcUrl;

        @Value("${spring.datasource.mysql.driver-class-name}")
        private String driverClassName;

        @Value("${spring.datasource.mysql.username}")
        private String username;

        @Value("${spring.datasource.mysql.password}")
        private String password;

        @Value("${spring.datasource.mysql.hikari.maximum-pool-size:10}")
        private int maximumPoolSize;

        @Value("${spring.datasource.mysql.hikari.minimum-idle:5}")
        private int minimumIdle;

        @Value("${spring.datasource.mysql.hikari.connection-timeout:30000}")
        private long connectionTimeout;

        @Value("${spring.datasource.mysql.hikari.idle-timeout:600000}")
        private long idleTimeout;

        @Value("${spring.datasource.mysql.hikari.max-lifetime:1800000}")
        private long maxLifetime;

        /**
         * 创建 MySQL 数据源
         * <p>
         * 使用 HikariCP 作为连接池，性能优异且稳定。
         * </p>
         *
         * @return MySQL 数据源实例
         */
        @Bean(name = "mysqlDataSource")
        public DataSource mysqlDataSource() {
                HikariConfig config = new HikariConfig();
                config.setJdbcUrl(jdbcUrl);
                config.setDriverClassName(driverClassName);
                config.setUsername(username);
                config.setPassword(password);
                config.setMaximumPoolSize(maximumPoolSize);
                config.setMinimumIdle(minimumIdle);
                config.setConnectionTimeout(connectionTimeout);
                config.setIdleTimeout(idleTimeout);
                config.setMaxLifetime(maxLifetime);
                config.setPoolName("MySQL-HikariCP");

                HikariDataSource dataSource = new HikariDataSource(config);

                log.info("═══════════════════════════════════════════════════════════");
                log.info("        MySQL 数据源配置完成");
                log.info("═══════════════════════════════════════════════════════════");
                log.info("数据库 URL: {}", jdbcUrl);
                log.info("用户名: {}", username);
                log.info("连接池最大连接数: {}", maximumPoolSize);
                log.info("连接池最小空闲连接数: {}", minimumIdle);
                log.info("═══════════════════════════════════════════════════════════");

                return dataSource;
        }

        /**
         * 创建 MySQL EntityManagerFactory
         * <p>
         * 用于管理 MySQL 数据库的 JPA 实体。
         * </p>
         *
         * @param builder    EntityManagerFactoryBuilder
         * @param dataSource MySQL 数据源
         * @return MySQL EntityManagerFactory
         */
        @Bean(name = "mysqlEntityManagerFactory")
        public LocalContainerEntityManagerFactoryBean mysqlEntityManagerFactory(
                        EntityManagerFactoryBuilder builder,
                        @Qualifier("mysqlDataSource") DataSource dataSource) {

                Map<String, String> properties = new HashMap<>();
                properties.put("hibernate.dialect", "org.hibernate.dialect.MySQLDialect");
                properties.put("hibernate.hbm2ddl.auto", "update");
                properties.put("hibernate.format_sql", "true");
                properties.put("hibernate.show_sql", "false");
                // 启用批量插入，每批处理 500 条记录
                properties.put("hibernate.jdbc.batch_size", "500");
                properties.put("hibernate.order_inserts", "true");
                properties.put("hibernate.order_updates", "true");

                return builder
                                .dataSource(dataSource)
                                .packages(
                                                "getjobs.modules.auth.domain",
                                                "getjobs.modules.sasl.domain",
                                                "getjobs.modules.datasource.mysql.domain", // 仅保留 DataSourceVerification
                                                                                           // 等 MySQL 特有的实体
                                                "getjobs.modules.resume.domain" // 简历模块实体
                                )
                                .persistenceUnit("mysql")
                                .properties(properties)
                                .build();
        }

        /**
         * 创建 MySQL 事务管理器
         * <p>
         * 用于管理 MySQL 数据源的事务。
         * </p>
         *
         * @param entityManagerFactory MySQL EntityManagerFactory
         * @return MySQL 事务管理器
         */
        @Bean(name = "mysqlTransactionManager")
        public PlatformTransactionManager mysqlTransactionManager(
                        @Qualifier("mysqlEntityManagerFactory") EntityManagerFactory entityManagerFactory) {
                return new JpaTransactionManager(entityManagerFactory);
        }
}
