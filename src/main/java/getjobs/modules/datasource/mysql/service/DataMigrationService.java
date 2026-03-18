package getjobs.modules.datasource.mysql.service;

import getjobs.modules.auth.domain.Permission;
import getjobs.modules.auth.domain.RefreshToken;
import getjobs.modules.auth.domain.Role;
import getjobs.modules.auth.domain.RolePermission;
import getjobs.modules.auth.domain.User;
import getjobs.modules.auth.domain.UserRole;
import getjobs.modules.datasource.mysql.repository.PermissionMysqlRepository;
import getjobs.modules.datasource.mysql.repository.RefreshTokenMysqlRepository;
import getjobs.modules.datasource.mysql.repository.RoleMysqlRepository;
import getjobs.modules.datasource.mysql.repository.RolePermissionMysqlRepository;
import getjobs.modules.datasource.mysql.repository.UserMysqlRepository;
import getjobs.modules.datasource.mysql.repository.UserRoleMysqlRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.annotation.Order;
import org.springframework.core.Ordered;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * 数据迁移服务（MySQL数据源）。
 * 在应用启动时，将SQLite数据库中的所有数据复制到MySQL数据库中。
 */
@Slf4j
@Service
@RequiredArgsConstructor
@ConditionalOnProperty(name = "spring.datasource.mysql.password")
@Order(Ordered.LOWEST_PRECEDENCE) // 在其他初始化完成后执行
public class DataMigrationService {

    // Auth SQLite repositories (源数据)
    private final getjobs.modules.auth.infrastructure.UserRepository sqliteUserRepository;
    private final getjobs.modules.auth.infrastructure.RoleRepository sqliteRoleRepository;
    private final getjobs.modules.auth.infrastructure.PermissionRepository sqlitePermissionRepository;
    private final getjobs.modules.auth.infrastructure.RefreshTokenRepository sqliteRefreshTokenRepository;
    private final getjobs.modules.auth.infrastructure.UserRoleRepository sqliteUserRoleRepository;
    private final getjobs.modules.auth.infrastructure.RolePermissionRepository sqliteRolePermissionRepository;

    // Auth MySQL repositories (目标数据)
    private final UserMysqlRepository mysqlUserRepository;
    private final RoleMysqlRepository mysqlRoleRepository;
    private final PermissionMysqlRepository mysqlPermissionRepository;
    private final RefreshTokenMysqlRepository mysqlRefreshTokenRepository;
    private final UserRoleMysqlRepository mysqlUserRoleRepository;
    private final RolePermissionMysqlRepository mysqlRolePermissionRepository;

    /**
     * 应用启动时执行数据迁移。
     * 从SQLite数据库读取所有数据并复制到MySQL数据库。
     */
    @PostConstruct
    @Transactional(transactionManager = "mysqlTransactionManager")
    public void migrateDataOnStartup() {
        try {
            log.info("═══════════════════════════════════════════════════════════");
            log.info("        开始数据迁移：SQLite → MySQL");
            log.info("═══════════════════════════════════════════════════════════");

            // 1. 迁移 Auth 模块数据
            migrateAuthData();

            log.info("═══════════════════════════════════════════════════════════");
            log.info("        ✓ 数据迁移完成：SQLite → MySQL");
            log.info("═══════════════════════════════════════════════════════════");
        } catch (Exception e) {
            log.error("数据迁移失败", e);
            // 不抛出异常，避免影响应用启动
        }
    }


    // ==================== Auth 模块迁移方法 ====================

    /**
     * 迁移 Auth 模块数据。
     * 迁移顺序：Permission -> Role -> RolePermission -> User -> UserRole -> RefreshToken
     */
    private void migrateAuthData() {
        try {
            log.info("  [Auth] 开始迁移认证模块数据...");

            // 1. 迁移 Permission（没有依赖）
            migratePermissions();

            // 2. 迁移 Role（没有依赖）
            migrateRoles();

            // 3. 迁移 RolePermission（依赖 Role 和 Permission）
            migrateRolePermissions();

            // 4. 迁移 User（没有依赖）
            migrateUsers();

            // 5. 迁移 UserRole（依赖 User 和 Role）
            migrateUserRoles();

            // 6. 迁移 RefreshToken（依赖 User，但只是通过 username）
            migrateRefreshTokens();

            log.info("  [Auth] ✓ 认证模块数据迁移完成");
        } catch (Exception e) {
            log.error("  [Auth] ✗ 认证模块数据迁移失败", e);
        }
    }

    /**
     * 迁移 Permission 数据。
     */
    private void migratePermissions() {
        try {
            List<getjobs.modules.auth.domain.Permission> sqlitePermissions = sqlitePermissionRepository.findAll();
            if (sqlitePermissions.isEmpty()) {
                log.info("    [Permission] SQLite中没有数据，跳过迁移");
                return;
            }

            long mysqlCount = mysqlPermissionRepository.count();
            if (mysqlCount > 0) {
                log.info("    [Permission] MySQL中已存在 {} 条数据，跳过迁移", mysqlCount);
                return;
            }

            List<Permission> mysqlPermissions = sqlitePermissions.stream()
                    .map(this::convertPermission)
                    .collect(Collectors.toList());

            mysqlPermissionRepository.saveAll(mysqlPermissions);
            log.info("    [Permission] ✓ 迁移完成：{} 条记录", mysqlPermissions.size());
        } catch (Exception e) {
            log.error("    [Permission] ✗ 迁移失败", e);
        }
    }

    /**
     * 迁移 Role 数据。
     */
    private void migrateRoles() {
        try {
            List<getjobs.modules.auth.domain.Role> sqliteRoles = sqliteRoleRepository.findAll();
            if (sqliteRoles.isEmpty()) {
                log.info("    [Role] SQLite中没有数据，跳过迁移");
                return;
            }

            long mysqlCount = mysqlRoleRepository.count();
            if (mysqlCount > 0) {
                log.info("    [Role] MySQL中已存在 {} 条数据，跳过迁移", mysqlCount);
                return;
            }

            List<Role> mysqlRoles = sqliteRoles.stream()
                    .map(this::convertRole)
                    .collect(Collectors.toList());

            mysqlRoleRepository.saveAll(mysqlRoles);
            log.info("    [Role] ✓ 迁移完成：{} 条记录", mysqlRoles.size());
        } catch (Exception e) {
            log.error("    [Role] ✗ 迁移失败", e);
        }
    }

    /**
     * 迁移 RolePermission 数据。
     * 需要建立 Role 和 Permission 的 ID 映射。
     */
    private void migrateRolePermissions() {
        try {
            List<getjobs.modules.auth.domain.RolePermission> sqliteRolePermissions = sqliteRolePermissionRepository
                    .findAll();
            if (sqliteRolePermissions.isEmpty()) {
                log.info("    [RolePermission] SQLite中没有数据，跳过迁移");
                return;
            }

            long mysqlCount = mysqlRolePermissionRepository.count();
            if (mysqlCount > 0) {
                log.info("    [RolePermission] MySQL中已存在 {} 条数据，跳过迁移", mysqlCount);
                return;
            }

            // 建立 Role ID 映射：SQLite ID -> MySQL ID
            Map<Long, Long> roleIdMap = new HashMap<>();
            List<getjobs.modules.auth.domain.Role> sqliteRoles = sqliteRoleRepository.findAll();
            for (getjobs.modules.auth.domain.Role sqliteRole : sqliteRoles) {
                mysqlRoleRepository.findByCode(sqliteRole.getCode())
                        .ifPresent(mysqlRole -> roleIdMap.put(sqliteRole.getId(), mysqlRole.getId()));
            }

            // 建立 Permission ID 映射：SQLite ID -> MySQL ID
            Map<Long, Long> permissionIdMap = new HashMap<>();
            List<getjobs.modules.auth.domain.Permission> sqlitePermissions = sqlitePermissionRepository.findAll();
            for (getjobs.modules.auth.domain.Permission sqlitePermission : sqlitePermissions) {
                mysqlPermissionRepository.findByCode(sqlitePermission.getCode())
                        .ifPresent(mysqlPermission -> permissionIdMap.put(sqlitePermission.getId(),
                                mysqlPermission.getId()));
            }

            // 迁移 RolePermission
            List<RolePermission> mysqlRolePermissions = new ArrayList<>();
            for (getjobs.modules.auth.domain.RolePermission sqliteRolePermission : sqliteRolePermissions) {
                Long mysqlRoleId = roleIdMap.get(sqliteRolePermission.getRoleId());
                Long mysqlPermissionId = permissionIdMap.get(sqliteRolePermission.getPermissionId());

                if (mysqlRoleId != null && mysqlPermissionId != null) {
                    RolePermission mysqlRolePermission = convertRolePermission(sqliteRolePermission, mysqlRoleId,
                            mysqlPermissionId);
                    mysqlRolePermissions.add(mysqlRolePermission);
                } else {
                    log.warn("    [RolePermission] 跳过无效的关联：roleId={}, permissionId={}",
                            sqliteRolePermission.getRoleId(), sqliteRolePermission.getPermissionId());
                }
            }

            mysqlRolePermissionRepository.saveAll(mysqlRolePermissions);
            log.info("    [RolePermission] ✓ 迁移完成：{} 条记录", mysqlRolePermissions.size());
        } catch (Exception e) {
            log.error("    [RolePermission] ✗ 迁移失败", e);
        }
    }

    /**
     * 迁移 User 数据。
     */
    private void migrateUsers() {
        try {
            List<getjobs.modules.auth.domain.User> sqliteUsers = sqliteUserRepository.findAll();
            if (sqliteUsers.isEmpty()) {
                log.info("    [User] SQLite中没有数据，跳过迁移");
                return;
            }

            long mysqlCount = mysqlUserRepository.count();
            if (mysqlCount > 1) {
                log.info("    [User] MySQL中已存在 {} 条数据，跳过迁移", mysqlCount);
                return;
            }

            List<User> mysqlUsers = sqliteUsers.stream()
                    .map(this::convertUser)
                    .collect(Collectors.toList());

            mysqlUserRepository.saveAll(mysqlUsers);
            log.info("    [User] ✓ 迁移完成：{} 条记录", mysqlUsers.size());
        } catch (Exception e) {
            log.error("    [User] ✗ 迁移失败", e);
        }
    }

    /**
     * 迁移 UserRole 数据。
     * 需要建立 User 和 Role 的 ID 映射。
     */
    private void migrateUserRoles() {
        try {
            List<getjobs.modules.auth.domain.UserRole> sqliteUserRoles = sqliteUserRoleRepository.findAll();
            if (sqliteUserRoles.isEmpty()) {
                log.info("    [UserRole] SQLite中没有数据，跳过迁移");
                return;
            }

            long mysqlCount = mysqlUserRoleRepository.count();
            if (mysqlCount > 0) {
                log.info("    [UserRole] MySQL中已存在 {} 条数据，跳过迁移", mysqlCount);
                return;
            }

            // 建立 User ID 映射：SQLite ID -> MySQL ID
            Map<Long, Long> userIdMap = new HashMap<>();
            List<getjobs.modules.auth.domain.User> sqliteUsers = sqliteUserRepository.findAll();
            for (getjobs.modules.auth.domain.User sqliteUser : sqliteUsers) {
                mysqlUserRepository.findByUsername(sqliteUser.getUsername())
                        .ifPresent(mysqlUser -> userIdMap.put(sqliteUser.getId(), mysqlUser.getId()));
            }

            // 建立 Role ID 映射：SQLite ID -> MySQL ID
            Map<Long, Long> roleIdMap = new HashMap<>();
            List<getjobs.modules.auth.domain.Role> sqliteRoles = sqliteRoleRepository.findAll();
            for (getjobs.modules.auth.domain.Role sqliteRole : sqliteRoles) {
                mysqlRoleRepository.findByCode(sqliteRole.getCode())
                        .ifPresent(mysqlRole -> roleIdMap.put(sqliteRole.getId(), mysqlRole.getId()));
            }

            // 迁移 UserRole
            List<UserRole> mysqlUserRoles = new ArrayList<>();
            for (getjobs.modules.auth.domain.UserRole sqliteUserRole : sqliteUserRoles) {
                Long mysqlUserId = userIdMap.get(sqliteUserRole.getUserId());
                Long mysqlRoleId = roleIdMap.get(sqliteUserRole.getRoleId());

                if (mysqlUserId != null && mysqlRoleId != null) {
                    UserRole mysqlUserRole = convertUserRole(sqliteUserRole, mysqlUserId, mysqlRoleId);
                    mysqlUserRoles.add(mysqlUserRole);
                } else {
                    log.warn("    [UserRole] 跳过无效的关联：userId={}, roleId={}",
                            sqliteUserRole.getUserId(), sqliteUserRole.getRoleId());
                }
            }

            mysqlUserRoleRepository.saveAll(mysqlUserRoles);
            log.info("    [UserRole] ✓ 迁移完成：{} 条记录", mysqlUserRoles.size());
        } catch (Exception e) {
            log.error("    [UserRole] ✗ 迁移失败", e);
        }
    }

    /**
     * 迁移 RefreshToken 数据。
     */
    private void migrateRefreshTokens() {
        try {
            List<getjobs.modules.auth.domain.RefreshToken> sqliteRefreshTokens = sqliteRefreshTokenRepository.findAll();
            if (sqliteRefreshTokens.isEmpty()) {
                log.info("    [RefreshToken] SQLite中没有数据，跳过迁移");
                return;
            }

            long mysqlCount = mysqlRefreshTokenRepository.count();
            if (mysqlCount > 0) {
                log.info("    [RefreshToken] MySQL中已存在 {} 条数据，跳过迁移", mysqlCount);
                return;
            }

            List<RefreshToken> mysqlRefreshTokens = sqliteRefreshTokens.stream()
                    .map(this::convertRefreshToken)
                    .collect(Collectors.toList());

            mysqlRefreshTokenRepository.saveAll(mysqlRefreshTokens);
            log.info("    [RefreshToken] ✓ 迁移完成：{} 条记录", mysqlRefreshTokens.size());
        } catch (Exception e) {
            log.error("    [RefreshToken] ✗ 迁移失败", e);
        }
    }

    // ==================== Auth 模块转换方法 ====================

    /**
     * 转换 Permission。
     */
    private Permission convertPermission(getjobs.modules.auth.domain.Permission sqlite) {
        Permission mysql = new Permission();
        mysql.setId(sqlite.getId());
        mysql.setName(sqlite.getName());
        mysql.setCode(sqlite.getCode());
        // PermissionType 枚举现在共用，直接赋值
        mysql.setType(sqlite.getType());
        mysql.setResource(sqlite.getResource());
        mysql.setDescription(sqlite.getDescription());
        mysql.setParentId(sqlite.getParentId());
        mysql.setSortOrder(sqlite.getSortOrder());
        mysql.setEnabled(sqlite.getEnabled());
        mysql.setCreatedAt(sqlite.getCreatedAt());
        mysql.setUpdatedAt(sqlite.getUpdatedAt());
        mysql.setIsDeleted(sqlite.getIsDeleted());
        mysql.setRemark(sqlite.getRemark());
        return mysql;
    }

    /**
     * 转换 Role。
     */
    private Role convertRole(getjobs.modules.auth.domain.Role sqlite) {
        Role mysql = new Role();
        mysql.setId(sqlite.getId());
        mysql.setName(sqlite.getName());
        mysql.setCode(sqlite.getCode());
        mysql.setDescription(sqlite.getDescription());
        mysql.setEnabled(sqlite.getEnabled());
        mysql.setSortOrder(sqlite.getSortOrder());
        mysql.setCreatedAt(sqlite.getCreatedAt());
        mysql.setUpdatedAt(sqlite.getUpdatedAt());
        mysql.setIsDeleted(sqlite.getIsDeleted());
        mysql.setRemark(sqlite.getRemark());
        return mysql;
    }

    /**
     * 转换 RolePermission。
     */
    private RolePermission convertRolePermission(getjobs.modules.auth.domain.RolePermission sqlite,
            Long mysqlRoleId, Long mysqlPermissionId) {
        RolePermission mysql = new RolePermission();
        mysql.setId(sqlite.getId());
        mysql.setRoleId(mysqlRoleId);
        mysql.setPermissionId(mysqlPermissionId);
        mysql.setCreatedAt(sqlite.getCreatedAt());
        mysql.setUpdatedAt(sqlite.getUpdatedAt());
        mysql.setIsDeleted(sqlite.getIsDeleted());
        mysql.setRemark(sqlite.getRemark());
        return mysql;
    }

    /**
     * 转换 User。
     */
    private User convertUser(getjobs.modules.auth.domain.User sqlite) {
        User mysql = new User();
        mysql.setId(sqlite.getId());
        mysql.setUsername(sqlite.getUsername());
        mysql.setDisplayName(sqlite.getDisplayName());
        mysql.setPassword(sqlite.getPassword());
        mysql.setEmail(sqlite.getEmail());
        mysql.setMobile(sqlite.getMobile());
        mysql.setEnabled(sqlite.getEnabled());
        mysql.setLocked(sqlite.getLocked());
        mysql.setLoginFailCount(sqlite.getLoginFailCount());
        mysql.setLastLoginAt(sqlite.getLastLoginAt());
        mysql.setLastLoginIp(sqlite.getLastLoginIp());
        mysql.setSuperAdmin(sqlite.getSuperAdmin());
        mysql.setDeptCodes(sqlite.getDeptCodes());
        mysql.setCreatedAt(sqlite.getCreatedAt());
        mysql.setUpdatedAt(sqlite.getUpdatedAt());
        mysql.setIsDeleted(sqlite.getIsDeleted());
        mysql.setRemark(sqlite.getRemark());
        return mysql;
    }

    /**
     * 转换 UserRole。
     */
    private UserRole convertUserRole(getjobs.modules.auth.domain.UserRole sqlite,
            Long mysqlUserId, Long mysqlRoleId) {
        UserRole mysql = new UserRole();
        mysql.setId(sqlite.getId());
        mysql.setUserId(mysqlUserId);
        mysql.setRoleId(mysqlRoleId);
        mysql.setCreatedAt(sqlite.getCreatedAt());
        mysql.setUpdatedAt(sqlite.getUpdatedAt());
        mysql.setIsDeleted(sqlite.getIsDeleted());
        mysql.setRemark(sqlite.getRemark());
        return mysql;
    }

    /**
     * 转换 RefreshToken。
     */
    private RefreshToken convertRefreshToken(getjobs.modules.auth.domain.RefreshToken sqlite) {
        RefreshToken mysql = new RefreshToken();
        mysql.setId(sqlite.getId());
        mysql.setUsername(sqlite.getUsername());
        mysql.setTokenHash(sqlite.getTokenHash());
        mysql.setExpiresAt(sqlite.getExpiresAt());
        mysql.setRevoked(sqlite.getRevoked());
        mysql.setRevokedAt(sqlite.getRevokedAt());
        mysql.setClientIp(sqlite.getClientIp());
        mysql.setUserAgent(sqlite.getUserAgent());
        mysql.setCreatedAt(sqlite.getCreatedAt());
        mysql.setUpdatedAt(sqlite.getUpdatedAt());
        mysql.setIsDeleted(sqlite.getIsDeleted());
        mysql.setRemark(sqlite.getRemark());
        return mysql;
    }
}
