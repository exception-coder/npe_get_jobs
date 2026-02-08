package getjobs.modules.auth.service;

import getjobs.modules.auth.config.JwtProperties;
import getjobs.modules.auth.domain.Permission;
import getjobs.modules.auth.domain.Role;
import getjobs.modules.auth.domain.RolePermission;
import getjobs.modules.auth.domain.User;
import getjobs.modules.auth.domain.UserRole;
import getjobs.modules.auth.dto.CreateUserRequest;
import getjobs.modules.auth.dto.LoginRequest;
import getjobs.modules.auth.dto.LoginResponse;
import getjobs.modules.auth.dto.UserInfoDTO;
import getjobs.common.infrastructure.repository.common.*;
import getjobs.common.infrastructure.repository.service.RepositoryServiceHelper;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

/**
 * 登录认证服务（ddlite 风格模块 Service）
 *
 * <p>
 * 当前实现采用配置 + 数据库中的管理员账号，并通过 JWT 进行颁发。
 * 生产环境建议替换为真实的用户体系与密码存储方案。
 * </p>
 *
 * @author getjobs
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class AuthService {

        private static final String MODULE_NAME = "auth";

        private final JwtProperties jwtProperties;
        private final JwtTokenService jwtTokenService;
        private final RepositoryServiceHelper repositoryHelper;
        private final PermissionService permissionService;

        // Repository实例（使用统一接口，通过RepositoryServiceHelper动态获取）
        private IUserRepository<User> userRepository;
        private IRoleRepository<Role> roleRepository;
        private IPermissionRepository<Permission> permissionRepository;
        private IUserRoleRepository<UserRole> userRoleRepository;
        private IRolePermissionRepository<RolePermission> rolePermissionRepository;

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
                this.userRepository = repositoryHelper.getRepository(IUserRepository.class, MODULE_NAME);
                this.roleRepository = repositoryHelper.getRepository(IRoleRepository.class, MODULE_NAME);
                this.permissionRepository = repositoryHelper.getRepository(IPermissionRepository.class, MODULE_NAME);
                this.userRoleRepository = repositoryHelper.getRepository(IUserRoleRepository.class, MODULE_NAME);
                this.rolePermissionRepository = repositoryHelper.getRepository(IRolePermissionRepository.class,
                                MODULE_NAME);

                if (repositoryHelper.isMySQL(MODULE_NAME)) {
                        log.info("AuthService 使用 MySQL 数据源");
                } else {
                        log.info("AuthService 使用 SQLite 数据源");
                }

                // 初始化权限体系
                initAuthSystem();
        }

        /**
         * 应用启动时初始化权限体系
         * <p>
         * 1. 初始化默认角色（ADMIN）
         * 2. 初始化基础权限（菜单、按钮、数据、API、字段权限示例）
         * 3. 为 ADMIN 角色分配所有权限
         * 4. 初始化管理员账号并关联 ADMIN 角色
         * </p>
         */
        @Transactional(transactionManager = "mysqlTransactionManager")
        public void initAuthSystem() {
                // 1. 初始化默认角色
                Role adminRole = roleRepository.findByCode("ADMIN").orElseGet(() -> {
                        Role role = new Role();
                        role.setName("系统管理员");
                        role.setCode("ADMIN");
                        role.setDescription("拥有系统所有权限");
                        role.setEnabled(true);
                        role.setSortOrder(1);
                        return roleRepository.save(role);
                });
                log.info("角色初始化完成：{}", adminRole.getCode());

                // 2. 初始化基础权限
                initDefaultPermissions(adminRole);

                // 3. 初始化管理员账号
                initAdminUser(adminRole);
        }

        /**
         * 初始化默认权限
         */
        private void initDefaultPermissions(Role adminRole) {
                // 菜单权限示例
                Permission menuSystem = createPermissionIfNotExists("system:menu", "系统管理",
                                Permission.PermissionType.MENU,
                                "/system", "系统管理菜单", null);
                Permission menuUser = createPermissionIfNotExists("user:menu", "用户管理", Permission.PermissionType.MENU,
                                "/system/user", "用户管理菜单", menuSystem.getId());
                Permission menuRole = createPermissionIfNotExists("role:menu", "角色管理", Permission.PermissionType.MENU,
                                "/system/role", "角色管理菜单", menuSystem.getId());
                Permission menuPermission = createPermissionIfNotExists("permission:menu", "权限管理",
                                Permission.PermissionType.MENU, "/system/permission", "权限管理菜单", menuSystem.getId());

                // 按钮权限示例
                Permission btnUserAdd = createPermissionIfNotExists("user:add", "新增用户",
                                Permission.PermissionType.BUTTON,
                                "user:add", "新增用户按钮", menuUser.getId());
                Permission btnUserEdit = createPermissionIfNotExists("user:edit", "编辑用户",
                                Permission.PermissionType.BUTTON,
                                "user:edit", "编辑用户按钮", menuUser.getId());
                Permission btnUserDelete = createPermissionIfNotExists("user:delete", "删除用户",
                                Permission.PermissionType.BUTTON,
                                "user:delete", "删除用户按钮", menuUser.getId());
                Permission btnUserExport = createPermissionIfNotExists("user:export", "导出用户",
                                Permission.PermissionType.BUTTON,
                                "user:export", "导出用户按钮", menuUser.getId());

                // 数据权限示例
                Permission dataAll = createPermissionIfNotExists("data:all", "全部数据", Permission.PermissionType.DATA,
                                "data:all",
                                "可访问全部数据", null);
                Permission dataDept = createPermissionIfNotExists("data:dept", "部门数据", Permission.PermissionType.DATA,
                                "data:dept", "仅可访问本部门数据", null);
                Permission dataSelf = createPermissionIfNotExists("data:self", "个人数据", Permission.PermissionType.DATA,
                                "data:self", "仅可访问自己创建的数据", null);

                // API权限示例
                Permission apiUserList = createPermissionIfNotExists("api:user:list", "用户列表接口",
                                Permission.PermissionType.API,
                                "/api/user/**", "用户相关接口", null);
                Permission apiRoleList = createPermissionIfNotExists("api:role:list", "角色列表接口",
                                Permission.PermissionType.API,
                                "/api/role/**", "角色相关接口", null);

                // 字段权限示例
                Permission fieldSalary = createPermissionIfNotExists("field:salary", "薪资字段",
                                Permission.PermissionType.FIELD,
                                "user:salary", "用户薪资字段权限", null);
                Permission fieldPhone = createPermissionIfNotExists("field:phone", "手机号字段",
                                Permission.PermissionType.FIELD,
                                "user:phone", "用户手机号字段权限", null);

                // 为 ADMIN 角色分配所有权限
                List<Permission> allPermissions = permissionRepository.findAll();
                for (Permission permission : allPermissions) {
                        // 检查是否已关联，避免重复关联
                        if (rolePermissionRepository.findByRoleId(adminRole.getId()).stream()
                                        .noneMatch(rp -> rp.getPermissionId().equals(permission.getId()))) {
                                RolePermission rp = new RolePermission();
                                rp.setRoleId(adminRole.getId());
                                rp.setPermissionId(permission.getId());
                                rolePermissionRepository.save(rp);
                        }
                }
                log.info("权限初始化完成，共 {} 个权限，已为 ADMIN 角色分配所有权限", allPermissions.size());
        }

        /**
         * 创建权限（如果不存在）
         */
        private Permission createPermissionIfNotExists(String code, String name, Permission.PermissionType type,
                        String resource, String description, Long parentId) {
                return permissionRepository.findByCode(code).orElseGet(() -> {
                        Permission permission = new Permission();
                        permission.setCode(code);
                        permission.setName(name);
                        permission.setType(type);
                        permission.setResource(resource);
                        permission.setDescription(description);
                        permission.setParentId(parentId);
                        permission.setEnabled(true);
                        permission.setSortOrder(0);
                        return permissionRepository.save(permission);
                });
        }

        /**
         * 初始化管理员账号
         */
        private void initAdminUser(Role adminRole) {
                JwtProperties.AdminUserConfig adminConfig = jwtProperties.getAdminUser();

                if (adminConfig == null
                                || !StringUtils.hasText(adminConfig.getUsername())
                                || !StringUtils.hasText(adminConfig.getPassword())) {
                        log.warn("管理员用户配置未完整，跳过初始化 admin 账号");
                        return;
                }

                String username = adminConfig.getUsername();

                User admin = userRepository.findByUsername(username).orElseGet(() -> {
                        User user = new User();
                        user.setUsername(username);
                        user.setPassword(adminConfig.getPassword());
                        user.setDisplayName(adminConfig.getDisplayName());
                        user.setEmail(adminConfig.getEmail());
                        user.setMobile(adminConfig.getMobile());
                        user.setSuperAdmin(adminConfig.getSuperAdmin() != null ? adminConfig.getSuperAdmin() : true);
                        user.setEnabled(adminConfig.getEnabled() != null ? adminConfig.getEnabled() : true);
                        user.setLocked(false);
                        user.setLoginFailCount(0);
                        User saved = userRepository.save(user);
                        log.info("已根据配置创建管理员账号，username={}, displayName={}", username, user.getDisplayName());
                        return saved;
                });

                // 关联 ADMIN 角色
                if (userRoleRepository.findByUserId(admin.getId()).stream()
                                .noneMatch(ur -> ur.getRoleId().equals(adminRole.getId()))) {
                        UserRole userRole = new UserRole();
                        userRole.setUserId(admin.getId());
                        userRole.setRoleId(adminRole.getId());
                        userRoleRepository.save(userRole);
                        log.info("已为管理员账号关联 ADMIN 角色，username={}", username);
                } else {
                        log.info("管理员账号已存在并已关联角色，username={}", username);
                }
        }

        /**
         * 用户登录并颁发 JWT
         *
         * @param request 登录请求
         * @return 登录响应（包含 token 与用户信息）
         */
        @Transactional(transactionManager = "mysqlTransactionManager", readOnly = true)
        public LoginResponse login(LoginRequest request) {
                validateRequest(request);

                User user = userRepository.findByUsername(request.getUsername())
                                .orElseThrow(() -> new IllegalArgumentException("用户名或密码错误"));

                // 检查账号状态
                if (!user.getEnabled()) {
                        throw new IllegalArgumentException("账号已被禁用");
                }
                if (user.getLocked()) {
                        throw new IllegalArgumentException("账号已被锁定");
                }

                // 验证密码
                if (!user.getPassword().equals(request.getPassword())) {
                        throw new IllegalArgumentException("用户名或密码错误");
                }

                // 查询用户角色编码列表
                List<String> roleCodes = userRoleRepository.findByUserId(user.getId()).stream()
                                .map(ur -> roleRepository.findById(ur.getRoleId()))
                                .filter(java.util.Optional::isPresent)
                                .map(opt -> opt.get().getCode())
                                .collect(Collectors.toList());

                // 查询用户权限编码列表
                List<String> permissionCodes = permissionService.getUserPermissionCodes(user.getId());

                UserInfoDTO userInfo = new UserInfoDTO(
                                user.getUsername(),
                                roleCodes,
                                permissionCodes);

                // 生成 access token 和 refresh token
                String accessToken = jwtTokenService.generateAccessToken(userInfo);
                String refreshToken = jwtTokenService.generateRefreshToken(user.getUsername());
                long expiresAt = Instant.now()
                                .plusSeconds(jwtProperties.getExpirationSeconds())
                                .toEpochMilli();

                return new LoginResponse(accessToken, refreshToken, expiresAt, userInfo);
        }

        private void validateRequest(LoginRequest request) {
                if (request == null
                                || !StringUtils.hasText(request.getUsername())
                                || !StringUtils.hasText(request.getPassword())) {
                        throw new IllegalArgumentException("用户名和密码不能为空");
                }
        }

        /**
         * 创建新用户
         *
         * @param request 创建用户请求
         * @return 创建的用户实体
         */
        @Transactional(transactionManager = "mysqlTransactionManager")
        public User createUser(CreateUserRequest request) {
                validateCreateUserRequest(request);

                // 检查用户名是否已存在
                if (userRepository.findByUsername(request.getUsername()).isPresent()) {
                        throw new IllegalArgumentException("用户名已存在");
                }

                // 检查邮箱是否已存在（如果提供了邮箱）
                if (StringUtils.hasText(request.getEmail())) {
                        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
                                throw new IllegalArgumentException("邮箱已被使用");
                        }
                }

                // 检查手机号是否已存在（如果提供了手机号）
                if (StringUtils.hasText(request.getMobile())) {
                        if (userRepository.findByMobile(request.getMobile()).isPresent()) {
                                throw new IllegalArgumentException("手机号已被使用");
                        }
                }

                // 创建新用户
                User user = new User();
                user.setUsername(request.getUsername());
                user.setPassword(request.getPassword());
                user.setDisplayName(request.getDisplayName());
                user.setEmail(request.getEmail());
                user.setMobile(request.getMobile());
                user.setEnabled(request.getEnabled() != null ? request.getEnabled() : true);
                user.setSuperAdmin(request.getSuperAdmin() != null ? request.getSuperAdmin() : false);
                user.setDeptCodes(request.getDeptCodes());
                user.setLocked(false);
                user.setLoginFailCount(0);

                User saved = userRepository.save(user);
                log.info("创建用户成功，username={}, displayName={}, deptCodes={}", saved.getUsername(),
                                saved.getDisplayName(), saved.getDeptCodes());

                return saved;
        }

        /**
         * 验证创建用户请求
         */
        private void validateCreateUserRequest(CreateUserRequest request) {
                if (request == null) {
                        throw new IllegalArgumentException("请求参数不能为空");
                }
                if (!StringUtils.hasText(request.getUsername())) {
                        throw new IllegalArgumentException("用户名不能为空");
                }
                if (!StringUtils.hasText(request.getPassword())) {
                        throw new IllegalArgumentException("密码不能为空");
                }
        }

        /**
         * 根据用户名查询用户完整信息
         * <p>
         * 需要提供正确的查询密钥才能查询用户信息
         * </p>
         *
         * @param username  用户名
         * @param secretKey 查询密钥
         * @return 用户实体
         * @throws IllegalArgumentException 如果密钥不正确或用户不存在
         */
        @Transactional(transactionManager = "mysqlTransactionManager", readOnly = true)
        public User getUserByUsername(String username, String secretKey) {
                // 验证密钥（使用魔法值临时固定）
                final String VALID_SECRET_KEY = "SECRET_QUERY_KEY_2024";
                if (!VALID_SECRET_KEY.equals(secretKey)) {
                        throw new IllegalArgumentException("查询密钥不正确");
                }

                // 验证用户名
                if (!StringUtils.hasText(username)) {
                        throw new IllegalArgumentException("用户名不能为空");
                }

                // 查询用户
                return userRepository.findByUsername(username)
                                .orElseThrow(() -> new IllegalArgumentException("用户不存在"));
        }

        /**
         * 根据用户生成 UserInfoDTO（包含角色和权限信息）
         *
         * @param user 用户实体
         * @return 用户信息DTO
         */
        @Transactional(transactionManager = "mysqlTransactionManager", readOnly = true)
        public UserInfoDTO buildUserInfoDTO(User user) {
                // 查询用户角色编码列表
                List<String> roleCodes = userRoleRepository.findByUserId(user.getId()).stream()
                                .map(ur -> roleRepository.findById(ur.getRoleId()))
                                .filter(java.util.Optional::isPresent)
                                .map(opt -> opt.get().getCode())
                                .collect(Collectors.toList());

                // 查询用户权限编码列表
                List<String> permissionCodes = permissionService.getUserPermissionCodes(user.getId());

                return new UserInfoDTO(
                                user.getUsername(),
                                roleCodes,
                                permissionCodes);
        }
}
