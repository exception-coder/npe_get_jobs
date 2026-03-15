---
name: git-init-remote
description: Initialize git in a local project without a repository, connect it to a remote, and generate a proper .gitignore. Use when the user wants to link a local project to a remote git repository, set up git for an existing project, push a local project to GitHub/GitLab, or needs a .gitignore file for their project type.
---

# Git Init Remote

将本地项目初始化 Git 并关联到远程仓库，同时自动生成适合项目类型的 `.gitignore`。

## 必需参数

在执行前，必须从用户获取以下参数（缺少任何一个都要主动询问）：

| 参数 | 说明 | 示例 |
|------|------|------|
| `project_root` | 本地项目根目录绝对路径 | `D:/Users/zhang/IdeaProjects/my-project` |
| `remote_url` | 远程 Git 仓库地址 | `https://github.com/user/repo.git` |
| `git_username` | Git 账号（用于 HTTPS 认证） | `zhangkai` |
| `git_password` | Git 密码或 Personal Access Token | `ghp_xxxx` |

## 执行流程

按以下步骤严格顺序执行：

### Step 1: 检测项目类型

进入 `project_root`，根据以下标志文件判断项目类型：

| 标志文件 | 项目类型 |
|---------|---------|
| `pom.xml` | java-maven |
| `build.gradle` / `build.gradle.kts` | java-gradle |
| `package.json` | node |
| `requirements.txt` / `setup.py` / `pyproject.toml` | python |
| `go.mod` | golang |
| `Cargo.toml` | rust |
| `*.sln` / `*.csproj` | dotnet |
| 以上都没有 | generic |

如果同时存在多种标志，选择最主要的（如 `pom.xml` 和 `package.json` 同时存在，优先 java-maven）。

### Step 2: 生成 .gitignore

根据 Step 1 检测到的项目类型，从 [gitignore-templates.md](gitignore-templates.md) 中选择对应模板，在项目根目录生成 `.gitignore` 文件。

**规则：**
- 如果 `.gitignore` 已存在，**读取现有内容**，将模板中缺失的规则**追加**到末尾，不覆盖已有规则
- 如果 `.gitignore` 不存在，直接创建

### Step 3: 初始化 Git

```bash
cd <project_root>
git init
```

如果已经是 Git 仓库（`.git` 目录已存在），跳过此步。

### Step 4: 配置远程仓库

构造带凭证的远程 URL（用于 HTTPS 方式）：

```
https://<git_username>:<git_password>@<host>/<path>.git
```

**从 `remote_url` 中提取 host 和 path 部分进行拼接。**

```bash
git remote add origin <credential_url>
```

如果 `origin` 已存在，先检查是否指向同一仓库：
- 相同仓库 → 更新 URL：`git remote set-url origin <credential_url>`
- 不同仓库 → 提示用户确认是否覆盖

### Step 5: 首次提交并推送

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

**注意事项：**
- 如果远程仓库非空（push 失败），提示用户是否使用 `git pull --rebase origin main` 先同步
- push 成功后，立即将远程 URL 替换为不含密码的版本（安全措施）：

```bash
git remote set-url origin <remote_url>
```

### Step 6: 验证

```bash
git remote -v
git log --oneline -1
git status
```

向用户确认：远程关联成功、首次提交完成、工作目录干净。

## 安全提醒

- **绝不**将含密码的 URL 保留在 git config 中，push 完成后必须替换
- **绝不**将密码写入任何文件或日志
- 建议用户使用 Personal Access Token 而非真实密码
- 如果用户使用 SSH URL（`git@...`），跳过凭证拼接，直接使用原始 URL

## 错误处理

| 错误场景 | 处理方式 |
|---------|---------|
| 目录不存在 | 提示用户检查路径 |
| 无 git 命令 | 提示安装 Git |
| 远程 URL 格式错误 | 提示正确格式 |
| 认证失败 (403/401) | 提示检查账号密码或 Token |
| push 被拒绝 | 提示远程仓库可能非空，询问是否 pull --rebase |
| 网络超时 | 提示检查网络连接 |
