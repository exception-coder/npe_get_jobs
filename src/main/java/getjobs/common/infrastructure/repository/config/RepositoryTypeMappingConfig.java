package getjobs.common.infrastructure.repository.config;

import getjobs.common.infrastructure.repository.common.*;
import getjobs.modules.auth.infrastructure.*;
import getjobs.modules.datasource.mysql.repository.*;
import getjobs.modules.sasl.repository.*;
import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;

/**
 * Repository类型映射配置
 * <p>
 * 配置统一接口到具体Repository实现的映射关系。
 * Service层使用统一接口类型，RepositoryProvider根据此配置自动找到对应的实现。
 * </p>
 *
 * @author getjobs
 */
@Slf4j
@Configuration
public class RepositoryTypeMappingConfig {

    // 统一接口类型 -> SQLite Repository类型的映射
    private final Map<Class<?>, Class<?>> unifiedToSqliteMap = new HashMap<>();

    // 统一接口类型 -> MySQL Repository类型的映射
    private final Map<Class<?>, Class<?>> unifiedToMysqlMap = new HashMap<>();

    /**
     * 初始化Repository类型映射
     */
    @PostConstruct
    public void initMapping() {
        // Auth模块的Repository映射

        // UserRepository映射
        unifiedToSqliteMap.put(IUserRepository.class, UserRepository.class);
        unifiedToMysqlMap.put(IUserRepository.class, UserMysqlRepository.class);

        // RoleRepository映射
        unifiedToSqliteMap.put(IRoleRepository.class, RoleRepository.class);
        unifiedToMysqlMap.put(IRoleRepository.class, RoleMysqlRepository.class);

        // PermissionRepository映射
        unifiedToSqliteMap.put(IPermissionRepository.class, PermissionRepository.class);
        unifiedToMysqlMap.put(IPermissionRepository.class, PermissionMysqlRepository.class);

        // UserRoleRepository映射
        unifiedToSqliteMap.put(IUserRoleRepository.class, UserRoleRepository.class);
        unifiedToMysqlMap.put(IUserRoleRepository.class, UserRoleMysqlRepository.class);

        // RolePermissionRepository映射
        unifiedToSqliteMap.put(IRolePermissionRepository.class, RolePermissionRepository.class);
        unifiedToMysqlMap.put(IRolePermissionRepository.class, RolePermissionMysqlRepository.class);

        // RefreshTokenRepository映射
        unifiedToSqliteMap.put(IRefreshTokenRepository.class, RefreshTokenRepository.class);
        unifiedToMysqlMap.put(IRefreshTokenRepository.class, RefreshTokenMysqlRepository.class);

        // SASL模块的Repository映射

        // SaslRecordRepository映射
        unifiedToSqliteMap.put(ISaslRecordRepository.class, SaslRecordRepository.class);
        unifiedToMysqlMap.put(ISaslRecordRepository.class, SaslRecordMysqlRepository.class);

        // AnnouncementRepository映射
        unifiedToSqliteMap.put(IAnnouncementRepository.class, AnnouncementRepository.class);
        unifiedToMysqlMap.put(IAnnouncementRepository.class, AnnouncementMysqlRepository.class);

        // SaslFormStatisticsRecordRepository映射
        unifiedToSqliteMap.put(ISaslFormStatisticsRecordRepository.class, SaslFormStatisticsRecordRepository.class);
        unifiedToMysqlMap.put(ISaslFormStatisticsRecordRepository.class, SaslFormStatisticsRecordMysqlRepository.class);

        // SaslImportRecordRepository映射
        unifiedToSqliteMap.put(ISaslImportRecordRepository.class, SaslImportRecordRepository.class);
        unifiedToMysqlMap.put(ISaslImportRecordRepository.class, SaslImportRecordMysqlRepository.class);

        // UserDocumentTitleRepository映射
        unifiedToSqliteMap.put(IUserDocumentTitleRepository.class, UserDocumentTitleRepository.class);
        unifiedToMysqlMap.put(IUserDocumentTitleRepository.class, UserDocumentTitleMysqlRepository.class);

        // PlanSectionRepository映射
        unifiedToSqliteMap.put(IPlanSectionRepository.class, PlanSectionRepository.class);
        unifiedToMysqlMap.put(IPlanSectionRepository.class, PlanSectionMysqlRepository.class);

        // PlanRowRepository映射
        unifiedToSqliteMap.put(IPlanRowRepository.class, PlanRowRepository.class);
        unifiedToMysqlMap.put(IPlanRowRepository.class, PlanRowMysqlRepository.class);

        // LeadRecordRepository映射
        unifiedToSqliteMap.put(ILeadRecordRepository.class, LeadRecordRepository.class);
        unifiedToMysqlMap.put(ILeadRecordRepository.class, LeadRecordMysqlRepository.class);

        // SaslRecordUpdateLogRepository映射
        unifiedToSqliteMap.put(ISaslRecordUpdateLogRepository.class, SaslRecordUpdateLogRepository.class);
        unifiedToMysqlMap.put(ISaslRecordUpdateLogRepository.class, SaslRecordUpdateLogMysqlRepository.class);

        log.info("Repository类型映射配置完成，共配置 {} 个Repository类型映射", unifiedToSqliteMap.size());
    }

    /**
     * 根据统一接口类型获取SQLite Repository类型
     *
     * @param unifiedInterfaceType 统一接口类型
     * @return SQLite Repository类型
     */
    public Class<?> getSqliteRepositoryType(Class<?> unifiedInterfaceType) {
        return unifiedToSqliteMap.get(unifiedInterfaceType);
    }

    /**
     * 根据统一接口类型获取MySQL Repository类型
     *
     * @param unifiedInterfaceType 统一接口类型
     * @return MySQL Repository类型
     */
    public Class<?> getMysqlRepositoryType(Class<?> unifiedInterfaceType) {
        return unifiedToMysqlMap.get(unifiedInterfaceType);
    }

    /**
     * 根据统一接口类型和数据源类型，获取对应的Repository实现类型
     *
     * @param unifiedInterfaceType 统一接口类型
     * @param isMySQL              是否使用MySQL
     * @return Repository实现类型
     */
    public Class<?> getRepositoryType(Class<?> unifiedInterfaceType, boolean isMySQL) {
        return isMySQL ? getMysqlRepositoryType(unifiedInterfaceType) : getSqliteRepositoryType(unifiedInterfaceType);
    }
}
