# release.sh 执行说明

在**项目根目录**（`npe_get_jobs/`）下执行本脚本，将构建产物发布到 GitHub Releases。

## 前置条件

- 已安装并登录 [GitHub CLI](https://cli.github.com/)：`gh auth status` 正常
- 已构建：`target/*.jar` 存在（需 `mvn package`）
- 若需打包 lib：存在 `target/lib/`（需 `mvn dependency:copy-dependencies` 或打包时已生成）

## 首次执行

赋予执行权限（仅需一次）：

```bash
chmod +x .cursor/skills/gh-release-jar-lib/scripts/release.sh
```

## 环境变量

| 变量 | 必填 | 说明 |
|------|------|------|
| `VERSION` | 否 | Release 标签（如 v1.1.0），不设则脚本内交互输入 |
| `INCLUDE_LIB` | 否 | 是否打包并上传 `target/lib`。默认 `1`；设为 `0`/`false`/`no` 则只上传 JAR |
| `BAT_FILE` | 否 | run.bat 的**绝对路径**，会复制为 `target/run.bat` 并上传 |
| `JRE_DIR` | 否 | 解压后的 JRE 目录**绝对路径**，会打成 zip 并上传 |
| `JRE_SUFFIX` | 否 | JRE zip 文件名后缀，如 `windows-x64`，默认 `bundled` |

## 常用命令示例

**1. 仅上传 JAR（不打包 lib / JRE / bat）**

```bash
cd /Users/zhangkai/IdeaProjects/npe_get_jobs
INCLUDE_LIB=0 VERSION=v1.1.0 .cursor/skills/gh-release-jar-lib/scripts/release.sh
```

**2. JAR + lib（默认）**

```bash
cd /Users/zhangkai/IdeaProjects/npe_get_jobs
VERSION=v1.1.0 .cursor/skills/gh-release-jar-lib/scripts/release.sh
```

**3. 全量发布：JAR + lib + run.bat + JRE（Windows 一键运行包）**

按需替换路径中的版本号或 JRE 目录名：

```bash
cd /Users/zhangkai/IdeaProjects/npe_get_jobs

BAT_FILE="/Users/zhangkai/Desktop/开发/getjobs/run.bat" \
JRE_DIR="/Users/zhangkai/Desktop/开发/getjobs/OpenJDK21U-jre_x64_windows_hotspot_21.0.10_7" \
JRE_SUFFIX=windows-x64 \
VERSION=v1.1.0 \
.cursor/skills/gh-release-jar-lib/scripts/release.sh
```

**4. 交互式（不设 VERSION，脚本内输入 tag 和发布说明）**

```bash
cd /Users/zhangkai/IdeaProjects/npe_get_jobs
.cursor/skills/gh-release-jar-lib/scripts/release.sh
```

## 发布产物说明

- **JAR**：始终上传（`target` 下主可执行 jar，排除 `*-sources.jar` 等）
- **lib.zip**：仅当 `INCLUDE_LIB=1` 且存在 `target/lib` 时打包上传
- **run.bat**：仅当设置 `BAT_FILE` 时复制并上传
- **jre-&lt;JRE_SUFFIX&gt;.zip**：仅当设置 `JRE_DIR` 时打包并上传

更多说明见上级目录的 [SKILL.md](../SKILL.md)。
