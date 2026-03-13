---
name: gh-release-jar-lib
description: 将 Maven/Spring Boot 构建产物（可执行 JAR、target/lib 依赖目录、可选 JRE）归档到 GitHub Releases。在用户需要发布版本、上传 JAR/lib/JRE 到 GitHub Release 或“归档到 Releases”时使用。
---

# 将 JAR、lib 与可选 JRE 归档到 GitHub Releases

## 前置条件

- 已安装 [GitHub CLI](https://cli.github.com/)（`gh`）
- 已认证：`gh auth status` 显示已登录
- 当前目录为项目根目录，且为 Git 仓库并已配置 `origin` 指向 GitHub

## 要点

- **Releases 只能上传文件**，不能上传目录。`target/lib` 和 JRE 目录需先打成 zip 再上传。
- 推荐使用 **tag** 创建 Release；若 tag 不存在，`gh release create` 会从默认分支自动创建。
- 一次可上传多个资产：JAR + lib.zip，可选加上 JRE 的 zip（如 `jre-windows-x64.zip`）。

## 方式一：使用脚本（推荐）

在项目根目录执行本 skill 自带的脚本（需先构建出 `target/*.jar` 和 `target/lib/`）：

```bash
# 赋予执行权限（仅首次）
chmod +x .cursor/skills/gh-release-jar-lib/scripts/release.sh

# JAR + lib（默认）
VERSION=v1.0.0 .cursor/skills/gh-release-jar-lib/scripts/release.sh

# 仅 JAR，不打包 lib
INCLUDE_LIB=0 VERSION=v1.0.0 .cursor/skills/gh-release-jar-lib/scripts/release.sh

# 同时打包并上传 JRE + run.bat
BAT_FILE=/path/to/run.bat \
JRE_DIR=/path/to/OpenJDK21U-jre_x64_windows_hotspot_21.0.10_7 \
JRE_SUFFIX=windows-x64 \
VERSION=v1.0.0 \
.cursor/skills/gh-release-jar-lib/scripts/release.sh
```

**脚本环境变量：**

| 变量 | 必填 | 说明 |
|------|------|------|
| `VERSION` | 否 | Release 标签（如 v1.0.0），不设则交互输入 |
| `INCLUDE_LIB` | 否 | 是否打包并上传 `target/lib`，默认 `1`（打包）；设为 `0`/`false`/`no` 则**仅上传 JAR** |
| `BAT_FILE` | 否 | Windows 启动脚本（如 run.bat）的绝对路径；会复制为 `target/run.bat` 并随 Release 上传 |
| `JRE_DIR` | 否 | 解压后的 JRE 目录绝对路径；设置后会打包为 `target/jre-<JRE_SUFFIX>.zip` 并上传 |
| `JRE_SUFFIX` | 否 | JRE zip 文件名后缀，默认 `bundled`（产出 `jre-bundled.zip`）；建议按平台命名如 `windows-x64`、`mac-aarch64` |

脚本会：必选上传 JAR → 若 `INCLUDE_LIB` 为真且存在 `target/lib` 则打包并上传 lib.zip → 若设置了 `BAT_FILE` 则复制并上传 run.bat → 若设置了 `JRE_DIR` 则打包并上传 JRE → 调用 `gh release create <tag>`。

## 方式二：手动命令

1. **打包 lib**（在项目根目录）：

   ```bash
   cd target && zip -r lib.zip lib && cd ..
   ```

2. **（可选）打包 JRE**：将解压后的 JRE 目录打成 zip，便于用户解压即用。

   ```bash
   # 在 JRE 父目录下打包，得到 jre-windows-x64.zip
   cd "$(dirname /path/to/OpenJDK21U-jre_x64_windows_hotspot_21.0.10_7)"
   zip -r /path/to/project/target/jre-windows-x64.zip OpenJDK21U-jre_x64_windows_hotspot_21.0.10_7
   cd -
   ```

3. **（可选）附带 run.bat**：将 Windows 启动脚本复制到 target 后一并上传：

   ```bash
   cp /path/to/run.bat target/run.bat
   ```

4. **创建 Release 并上传资产**：

   ```bash
   gh release create <tag> \
     target/<artifact>-<version>.jar \
     target/lib.zip \
     [target/run.bat] \
     [target/jre-windows-x64.zip] \
     --title "<标题>" \
     --notes "<发布说明>"
   ```

   示例（含 JRE 与 run.bat）：

   ```bash
   gh release create v1.0.0 \
     target/npe_get_jobs-v1.0.0-SNAPSHOT.jar \
     target/lib.zip \
     target/run.bat \
     target/jre-windows-x64.zip \
     --title "v1.0.0" \
     --notes "Release v1.0.0"
   ```

5. **若 Release 已存在，只追加资产**：

   ```bash
   gh release upload <tag> target/<artifact>.jar target/lib.zip [target/jre-*.zip]
   ```

   覆盖同名字段时加 `--clobber`。

## 常用选项

| 选项 | 说明 |
|------|------|
| `-d, --draft` | 先建为草稿，不立即发布 |
| `-F FILE` / `--notes-file FILE` | 从文件读取发布说明 |
| `--generate-notes` | 用 GitHub 自动生成说明 |
| `-p, --prerelease` | 标记为预发布 |
| `-R OWNER/REPO` | 指定仓库 |

## 版本与路径约定

- JAR 路径通常为：`target/<artifactId>-<version>.jar`（Spring Boot 打包为 fat jar 时）。
- 若使用 `mvn package` 且未改 `finalName`，版本来自 `pom.xml` 的 `<version>`。
- 发布正式版时建议先改 `pom.xml` 为不含 `-SNAPSHOT` 的版本（如 `1.0.0`），再构建并打 tag（如 `v1.0.0`），再执行本流程。

## 故障排查

- **gh: command not found**：安装并配置 GitHub CLI，或使用 PATH 中已有的 `gh`。
- **HTTP 403 / permission denied**：用 `gh auth login` 重新登录，确认对仓库有写权限。
- **Tag 已存在**：若要重用该 tag，用 `gh release upload <tag> ...` 追加资产；否则换新 tag 或先删除/移动旧 release（在网页或 API 操作）。
