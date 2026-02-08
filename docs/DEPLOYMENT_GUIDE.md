# 依赖分离部署指南

## 📋 概述

本项目采用 **依赖与源码分离打包** 的设计，实现以下优势：

- ✅ **快速部署**：更新时只需上传源码包（通常 < 50MB），无需上传依赖包（通常 > 100MB）
- ✅ **共享依赖**：多个服务实例可以共享同一份依赖目录，节省磁盘空间
- ✅ **灵活更新**：依赖更新和源码更新可以独立进行
- ✅ **符合生产最佳实践**：大型企业级应用的标准部署方式

## 🏗️ 打包机制

### Maven 配置说明

项目使用以下 Maven 插件实现依赖分离：

1. **maven-dependency-plugin**：将运行时依赖复制到 `target/lib/` 目录
2. **spring-boot-maven-plugin**：配置 `layout=ZIP`，jar 包不包含依赖

### 打包命令

```bash
# 清理并打包（包含依赖分离）
mvn clean package

# 打包后目录结构
target/
├── lib/                    # 依赖库目录（首次部署需要）
│   ├── spring-boot-*.jar
│   ├── spring-core-*.jar
│   └── ... (所有运行时依赖)
└── npe_get_jobs-v1.0.0-SNAPSHOT.jar  # 源码包（每次更新上传）
```

## 🚀 部署流程

### 首次部署

1. **构建项目**
   ```bash
   mvn clean package
   ```

2. **上传文件到服务器**
   ```bash
   # 上传依赖目录（仅首次需要）
   scp -r target/lib/ user@server:/opt/apps/npe_get_jobs/lib/
   
   # 上传源码包
   scp target/npe_get_jobs-v1.0.0-SNAPSHOT.jar user@server:/opt/apps/npe_get_jobs/
   ```

3. **服务器目录结构**
   ```
   /opt/apps/npe_get_jobs/
   ├── lib/              # 依赖目录（共享，不常更新）
   │   └── *.jar
   ├── npe_get_jobs-v1.0.0-SNAPSHOT.jar  # 源码包（每次更新）
   ├── logs/             # 日志目录
   └── start.sh          # 启动脚本
   ```

4. **启动应用**
   ```bash
   # Linux/Mac
   chmod +x start.sh
   ./start.sh
   
   # Windows
   start.bat
   ```

### 后续更新（仅源码）

1. **构建新版本**
   ```bash
   mvn clean package
   ```

2. **仅上传源码包**
   ```bash
   scp target/npe_get_jobs-v1.0.0-SNAPSHOT.jar user@server:/opt/apps/npe_get_jobs/
   ```

3. **重启应用**
   ```bash
   # 停止旧进程
   kill <pid>
   
   # 启动新版本
   ./start.sh
   ```

## 🔧 启动方式

### 方式一：使用启动脚本（推荐）

```bash
# 使用默认配置
./scripts/start.sh

# 指定 Spring Profile
./scripts/start.sh --spring.profiles.active=prod

# 指定其他参数
./scripts/start.sh --server.port=8082
```

### 方式二：手动启动

```bash
# 基本启动
java -Dloader.path=/opt/apps/npe_get_jobs/lib \
     -jar npe_get_jobs-v1.0.0-SNAPSHOT.jar

# 完整启动（带 JVM 参数）
java -Xms512m -Xmx1024m \
     -XX:+UseG1GC \
     -Dloader.path=/opt/apps/npe_get_jobs/lib \
     -jar npe_get_jobs-v1.0.0-SNAPSHOT.jar \
     --spring.profiles.active=prod
```

### 关键参数说明

- **`-Dloader.path`**：指定外部依赖目录路径
  - 可以是相对路径：`-Dloader.path=./lib`
  - 可以是绝对路径：`-Dloader.path=/opt/apps/npe_get_jobs/lib`
  - 支持多个目录（用 `:` 分隔，Linux/Mac）或（用 `;` 分隔，Windows）

## 📦 依赖更新

### 何时需要更新依赖

- 升级 Spring Boot 版本
- 添加新的依赖
- 更新依赖版本

### 更新步骤

1. **重新构建并复制依赖**
   ```bash
   mvn clean package
   ```

2. **上传新的依赖目录**
   ```bash
   # 备份旧依赖（可选）
   ssh user@server "mv /opt/apps/npe_get_jobs/lib /opt/apps/npe_get_jobs/lib.backup"
   
   # 上传新依赖
   scp -r target/lib/ user@server:/opt/apps/npe_get_jobs/lib/
   ```

3. **重启应用**
   ```bash
   ./start.sh
   ```

## 🎯 最佳实践

### 1. 共享依赖目录（多实例部署）

如果部署多个服务实例，可以共享同一份依赖：

```
/opt/apps/
├── shared-lib/              # 共享依赖目录
│   └── *.jar
├── npe_get_jobs-instance1/
│   └── npe_get_jobs-v1.0.0-SNAPSHOT.jar
└── npe_get_jobs-instance2/
    └── npe_get_jobs-v1.0.0-SNAPSHOT.jar
```

启动时指定共享目录：
```bash
java -Dloader.path=/opt/apps/shared-lib \
     -jar npe_get_jobs-v1.0.0-SNAPSHOT.jar
```

### 2. 使用绝对路径

生产环境建议使用绝对路径，避免路径问题：

```bash
# 修改启动脚本中的 LIB_DIR
LIB_DIR="/opt/apps/npe_get_jobs/lib"
```

### 3. 版本管理

建议在部署目录中保留版本信息：

```
/opt/apps/npe_get_jobs/
├── lib/
├── versions/
│   ├── v1.0.0-SNAPSHOT.jar
│   └── v1.0.1-SNAPSHOT.jar
└── current -> versions/v1.0.1-SNAPSHOT.jar  # 符号链接
```

### 4. 健康检查

启动后检查应用是否正常：

```bash
# 检查进程
ps aux | grep npe_get_jobs

# 检查端口
netstat -tlnp | grep 8081

# 检查健康端点（如果配置了 Actuator）
curl http://localhost:8081/actuator/health
```

## ❓ 常见问题

### Q1: 启动时提示找不到类？

**A:** 检查 `loader.path` 是否正确指向依赖目录，确保依赖目录包含所有必需的 jar 包。

### Q2: 依赖目录很大，上传慢？

**A:** 
- 首次部署可以压缩后上传：`tar -czf lib.tar.gz lib/`
- 后续更新通常只需要上传源码包
- 考虑使用内网传输或 CDN

### Q3: 如何验证依赖分离是否生效？

**A:** 
```bash
# 检查 jar 包大小（应该很小，不包含依赖）
ls -lh target/npe_get_jobs-v1.0.0-SNAPSHOT.jar

# 检查 jar 包内容（不应该包含依赖）
jar -tf target/npe_get_jobs-v1.0.0-SNAPSHOT.jar | grep -E "BOOT-INF/lib"
# 如果使用 ZIP layout，不应该有 BOOT-INF/lib 目录
```

### Q4: 可以同时使用内嵌依赖和外部依赖吗？

**A:** 可以，Spring Boot 的 `loader.path` 会优先加载外部依赖，然后加载内嵌依赖。但建议统一使用一种方式。

## 📚 参考资源

- [Spring Boot Executable Jars](https://docs.spring.io/spring-boot/docs/current/reference/html/executable-jar.html)
- [Maven Dependency Plugin](https://maven.apache.org/plugins/maven-dependency-plugin/)
- [Spring Boot Maven Plugin](https://docs.spring.io/spring-boot/docs/current/maven-plugin/reference/htmlsingle/)

