---
name: git-branch-bump-pom-version
description: 在创建分支前，先读取并展示 pom.xml 当前版本号，让用户输入分支版本号；自动更新 main 分支 pom 版本并按版本创建分支。
---

# Git 分支：先更新 pom 版本号

用于 **“打分支前必须先更新 `pom.xml` 版本号”** 的工作流：从 `main` 分支出发，先输出当前版本号 → 用户输入目标分支版本号 → 修改 `pom.xml` 版本号 → 创建并切换到以该版本命名的分支。

## 必需参数

| 参数 | 说明 | 示例 | 默认值 |
|------|------|------|--------|
| `project_root` | 项目根目录绝对路径 | `/Users/zhangkai/IdeaProjects/npe_get_jobs` | 当前工作目录 |
| `base_branch` | 从哪个分支创建新分支（必须是主分支） | `main` | `main` |
| `branch_version` | 目标分支版本号（将写入 `pom.xml`） | `v1.1.0` / `v1.1.0-rc1` | 无 |
| `branch_name` | 新分支名（建议含版本） | `release/v1.1.0` / `feature/v1.1.0-xxx` | `release/<branch_version>` |

## 约束与约定

- **必须从 `base_branch` 开始**（通常是 `main`），并且在创建分支之前先更新 `pom.xml` 的 `<version>`。
- 本项目当前版本号位于 `pom.xml` 顶部：`<project>/<version>`（例如第 9 行附近）。
- 版本号建议使用 `v` 前缀保持一致（如 `v1.0.0`）。

## 执行流程（严格按顺序）

### Step 0：确认当前分支与工作区干净

```bash
cd <project_root>
git status --porcelain
git branch --show-current
```

- 若存在未提交变更：停止，先提交/暂存处理，避免把无关改动带入新分支。

### Step 1：切到主分支并同步

```bash
cd <project_root>
git checkout <base_branch>
git pull --rebase
```

### Step 2：输出当前 pom 版本号（给用户看）

优先使用 Maven 读取（不依赖行号）：

```bash
cd <project_root>
mvn -q help:evaluate -Dexpression=project.version -DforceStdout
```

如果 Maven 不可用，再直接查看 `pom.xml` 顶部 `<version>`（靠近第 9 行）。

### Step 3：向用户收集 `branch_version`

要求用户输入一个目标版本号，例如：
- `v1.1.0`
- `v1.1.0-rc1`

校验建议：
- 非空
- 与当前版本不同

### Step 4：更新 `pom.xml` 版本号（在 main 分支上完成）

推荐用 Maven 统一修改（会同时更新 `pom.xml`）：

```bash
cd <project_root>
mvn -q versions:set -DnewVersion=<branch_version> -DgenerateBackupPoms=false
```

然后再次确认版本号：

```bash
mvn -q help:evaluate -Dexpression=project.version -DforceStdout
git diff -- pom.xml
```

### Step 5：创建并切换到新分支

默认分支名：`release/<branch_version>`（可按团队规范调整）。

```bash
cd <project_root>
git checkout -b <branch_name>
```

### Step 6：确认结果（必须输出给用户）

```bash
cd <project_root>
git branch --show-current
mvn -q help:evaluate -Dexpression=project.version -DforceStdout
git status --short
```

期望结果：
- 当前分支为新分支
- `pom.xml` 版本号已变为 `branch_version`

## 常见问题与处理

| 场景 | 原因 | 处理 |
|------|------|------|
| `versions:set` 不存在 | 缺少 `versions-maven-plugin` | 直接执行命令通常会自动解析插件；若失败，可在命令中显式指定插件版本或临时改 `pom.xml`（不推荐） |
| `git pull --rebase` 冲突 | 主分支有更新 | 先解决冲突并确保工作区干净后再继续 |
| 用户想从 `master` 分支切 | 仓库主分支叫法不同 | 将 `base_branch` 设为 `master`，流程不变 |
