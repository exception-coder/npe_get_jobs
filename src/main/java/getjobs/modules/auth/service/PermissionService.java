package getjobs.modules.auth.service;

import getjobs.common.infrastructure.repository.common.*;
import getjobs.common.infrastructure.repository.service.RepositoryServiceHelper;
import getjobs.modules.auth.domain.Permission;
import getjobs.modules.auth.domain.RolePermission;
import getjobs.modules.auth.domain.UserRole;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

/**
 * 权限服务
 *
 * <p>
 * 提供权限查询、角色权限管理等功能
 * </p>
 *
 * @author getjobs
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class PermissionService {

    private static final String MODULE_NAME = "auth";

    private final RepositoryServiceHelper repositoryHelper;

    // Repository实例（使用统一接口，通过RepositoryServiceHelper动态获取）
    private IUserRoleRepository<UserRole> userRoleRepository;
    private IRolePermissionRepository<RolePermission> rolePermissionRepository;
    private IPermissionRepository<Permission> permissionRepository;

    /**
     * 初始化Repository实例
     * <p>
     * 根据配置自动选择SQLite或MySQL的Repository实现。
     * Service层使用统一接口类型，不依赖具体的数据库实现。
     * </p>
     */
    @PostConstruct
    @SuppressWarnings("unchecked")
    public void initRepositories() {
        // 使用统一接口类型，RepositoryServiceHelper会根据配置自动返回对应的实现
        this.userRoleRepository = repositoryHelper.getRepository(IUserRoleRepository.class, MODULE_NAME);
        this.rolePermissionRepository = repositoryHelper.getRepository(IRolePermissionRepository.class, MODULE_NAME);
        this.permissionRepository = repositoryHelper.getRepository(IPermissionRepository.class, MODULE_NAME);

        if (repositoryHelper.isMySQL(MODULE_NAME)) {
            log.info("PermissionService 使用 MySQL 数据源");
        } else {
            log.info("PermissionService 使用 SQLite 数据源");
        }
    }

    /**
     * 根据用户ID查询用户的所有权限
     *
     * @param userId 用户ID
     * @return 权限列表
     */
    @Transactional(transactionManager = "mysqlTransactionManager", readOnly = true)
    public List<Permission> getUserPermissions(Long userId) {
        // 1. 查询用户的所有角色ID
        List<Long> roleIds = userRoleRepository.findRoleIdsByUserId(userId);
        if (roleIds.isEmpty()) {
            return List.of();
        }

        // 2. 根据角色ID查询权限ID列表
        List<Long> permissionIds = rolePermissionRepository.findPermissionIdsByRoleIds(roleIds);

        // 3. 查询权限详情
        return permissionRepository.findAllById(permissionIds);
    }

    /**
     * 根据用户ID查询用户的权限编码列表
     *
     * @param userId 用户ID
     * @return 权限编码列表
     */
    @Transactional(transactionManager = "mysqlTransactionManager", readOnly = true)
    public List<String> getUserPermissionCodes(Long userId) {
        return getUserPermissions(userId).stream()
                .map(Permission::getCode)
                .collect(Collectors.toList());
    }

    /**
     * 根据用户ID和权限类型查询权限列表
     *
     * @param userId 用户ID
     * @param type   权限类型
     * @return 权限列表
     */
    @Transactional(transactionManager = "mysqlTransactionManager", readOnly = true)
    public List<Permission> getUserPermissionsByType(Long userId, Permission.PermissionType type) {
        return getUserPermissions(userId).stream()
                .filter(p -> p.getType() == type)
                .collect(Collectors.toList());
    }

    /**
     * 检查用户是否拥有指定权限
     *
     * @param userId         用户ID
     * @param permissionCode 权限编码
     * @return 是否拥有权限
     */
    @Transactional(transactionManager = "mysqlTransactionManager", readOnly = true)
    public boolean hasPermission(Long userId, String permissionCode) {
        List<String> codes = getUserPermissionCodes(userId);
        return codes.contains(permissionCode);
    }
}
