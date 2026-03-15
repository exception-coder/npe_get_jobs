---
name: git-smart-push
description: Analyze local code changes, automatically generate meaningful commit messages based on the changes, and push to remote repository (GitHub, GitLab, Gitee, Alibaba Cloud DevOps, etc.). Use when the user wants to commit and push changes with auto-generated commit messages, or needs help writing good commit messages.
---

# Git Smart Push

智能分析本地代码变更，自动生成有意义的 commit 信息并推送到远程仓库（支持 GitHub、GitLab、Gitee、阿里云效等）。

## 必需参数

在执行前，必须从用户获取以下参数（缺少任何一个都要主动询问）：

| 参数 | 说明 | 示例 | 默认值 |
|------|------|------|--------|
| `project_root` | 本地项目根目录绝对路径 | `D:/Users/zhang/IdeaProjects/my-project` | 当前工作目录 |
| `branch` | 要推送的分支名称 | `main` / `develop` / `feature/xxx` | 当前分支 |
| `commit_type` | commit 类型（可选） | `feat` / `fix` / `docs` / `refactor` / `auto` | `auto`（自动判断） |
| `access_token` | Personal Access Token（仅在推送时需要） | `ghp_xxxx` / `glpat-xxxx` / `xxx` | 无 |
| `username` | Git 用户名（仅在需要认证时提供） | `your-username` | 从远程 URL 自动提取 |

**说明：**
- `access_token`：在推送到远程仓库时需要提供，用于身份认证
  - GitHub: Personal Access Token (以 `ghp_` 开头)
  - GitLab: Personal Access Token (以 `glpat-` 开头)
  - Gitee: 私人令牌
  - 阿里云效: 个人访问令牌
- `username`：通常从远程 URL 自动提取，如果远程 URL 是 SSH 格式则不需要

## 执行流程

按以下步骤严格顺序执行：

### Step 0: 检查远程仓库配置

```bash
cd <project_root>
git remote -v
git remote get-url origin
```

**判断：**
- 如果没有配置远程仓库，提示用户先使用 `git-init-remote` skill 或手动添加远程仓库
- 如果已配置远程仓库，自动获取远程 URL 和仓库类型：
  - GitHub: `github.com`
  - GitLab: `gitlab.com` 或自建 GitLab
  - Gitee: `gitee.com`
  - 阿里云效: `codeup.aliyun.com`
  - 其他 Git 服务
- 从远程 URL 提取用户名（如果是 HTTPS 格式）

**示例远程 URL：**
```
# GitHub
https://github.com/username/repo.git
git@github.com:username/repo.git

# GitLab
https://gitlab.com/username/repo.git
git@gitlab.com:username/repo.git

# Gitee
https://gitee.com/username/repo.git
git@gitee.com:username/repo.git

# 阿里云效
https://codeup.aliyun.com/username/repo.git
git@codeup.aliyun.com:username/repo.git
```

### Step 1: 检查 Git 状态

```bash
cd <project_root>
git status --porcelain
```

**判断：**
- 如果没有任何变更（输出为空），提示用户"工作目录干净，无需提交"，终止执行
- 如果有未跟踪或已修改的文件，继续执行

### Step 2: 分析变更内容

执行以下命令获取详细变更：

```bash
# 获取变更文件列表
git status --short

# 获取变更详情（已暂存的）
git diff --cached

# 获取变更详情（未暂存的）
git diff
```

**分析维度：**
1. **变更文件数量和类型**
   - 新增文件（`A`）、修改文件（`M`）、删除文件（`D`）、重命名（`R`）
   - 文件类型：代码文件、配置文件、文档、测试文件等

2. **变更内容特征**
   - 新增功能：大量新增代码、新增类/函数
   - Bug 修复：小范围修改、修复逻辑错误
   - 重构：代码结构调整、重命名、移动文件
   - 文档更新：仅修改 README、注释、文档文件
   - 配置变更：修改配置文件、依赖版本
   - 样式调整：CSS/样式文件修改
   - 测试相关：测试文件的增删改

3. **变更规模**
   - 小型变更（< 50 行）
   - 中型变更（50-200 行）
   - 大型变更（> 200 行）

### Step 3: 生成 Commit 信息

根据 Step 2 的分析结果，生成符合规范的 commit 信息。

**Commit 信息格式：**

```
<type>(<scope>): <subject>

<body>
```

**Type 类型（根据变更内容自动判断）：**

| Type | 说明 | 使用场景 |
|------|------|---------|
| `feat` | 新功能 | 新增功能、新增模块、新增接口 |
| `fix` | Bug 修复 | 修复错误、修复异常、修复逻辑问题 |
| `docs` | 文档 | 仅修改文档、README、注释 |
| `style` | 格式 | 代码格式化、缺少分号、空格调整（不影响代码运行） |
| `refactor` | 重构 | 代码重构、优化结构（不改变功能） |
| `perf` | 性能优化 | 提升性能的代码修改 |
| `test` | 测试 | 添加测试、修改测试 |
| `build` | 构建 | 修改构建工具、依赖、配置 |
| `ci` | CI/CD | 修改 CI 配置文件和脚本 |
| `chore` | 其他 | 其他不影响源代码的修改 |

**Scope 范围（可选，根据变更文件自动提取）：**
- 模块名、组件名、文件名等
- 例如：`user`、`auth`、`api`、`ui`、`config`

**Subject 主题（必需，简洁描述变更）：**
- 使用祈使句，不超过 50 字符
- 不以句号结尾
- 中文项目用中文，英文项目用英文
- 例如：
  - `添加用户登录功能`
  - `修复用户注册时的验证错误`
  - `重构数据库连接逻辑`

**Body 正文（可选，详细描述变更）：**
- 当变更较复杂或涉及多个文件时添加
- 说明变更的原因、影响范围
- 列出主要变更点（使用 `-` 列表）

**生成示例：**

```
# 示例 1：新增功能
feat(user): 添加用户登录功能

- 实现用户名密码登录
- 添加 JWT token 认证
- 新增登录接口 /api/login

# 示例 2：Bug 修复
fix(auth): 修复用户注册时邮箱验证失败的问题

修复了正则表达式错误导致的邮箱格式验证失败

# 示例 3：文档更新
docs: 更新 README 安装说明

# 示例 4：重构
refactor(database): 优化数据库连接池配置

- 调整连接池大小
- 添加连接超时处理
- 优化连接复用逻辑

# 示例 5：多类型变更
chore: 更新项目配置和依赖

- 升级 Spring Boot 到 3.2.0
- 更新 .gitignore 规则
- 调整 Maven 插件配置
```

### Step 4: 暂存所有变更

```bash
git add .
```

如果用户只想提交部分文件，询问用户是否需要选择性暂存。

### Step 5: 执行提交

使用生成的 commit 信息执行提交：

```bash
git commit -m "<生成的 commit 信息>"
```

**注意：**
- 如果 commit 信息包含多行（有 body），使用 `-m` 多次或使用临时文件
- 提交前向用户展示生成的 commit 信息，询问是否确认

### Step 6: 推送到远程

根据远程仓库类型和 URL 格式，使用不同的推送方式：

**SSH 方式（推荐）：**
```bash
git push origin <branch>
```

**HTTPS 方式（需要认证）：**

如果远程 URL 是 HTTPS 格式，需要使用 Personal Access Token 进行认证。

**方法 1：临时设置凭证（推荐）**
```bash
# 构造带认证的 URL
git push https://<username>:<access_token>@<host>/<path> <branch>
```

**方法 2：使用 Git Credential Helper**
```bash
# 临时存储凭证
git config credential.helper store
echo "https://<username>:<access_token>@<host>" > ~/.git-credentials
git push origin <branch>
```

**不同平台的认证方式：**

| 平台 | 用户名 | Token 格式 | 示例 URL |
|------|--------|-----------|---------|
| GitHub | GitHub 用户名 | `ghp_xxxx` | `https://username:ghp_xxxx@github.com/user/repo.git` |
| GitLab | GitLab 用户名 | `glpat-xxxx` | `https://username:glpat-xxxx@gitlab.com/user/repo.git` |
| Gitee | Gitee 用户名 | 私人令牌 | `https://username:token@gitee.com/user/repo.git` |
| 阿里云效 | 云效用户名 | 个人访问令牌 | `https://username:token@codeup.aliyun.com/user/repo.git` |

**错误处理：**
- 如果远程分支不存在，使用 `git push -u origin <branch>` 创建并推送
- 如果推送被拒绝（远程有新提交），提示用户先执行 `git pull --rebase`
- 如果认证失败，提示检查 Personal Access Token 是否正确
- 如果网络超时，提示检查网络连接或切换到 SSH 方式

### Step 7: 验证并反馈

```bash
git log --oneline -1
git status
```

向用户确认：
- Commit 信息
- 推送的分支
- 远程仓库地址
- 最新的 commit hash
- 工作目录状态

## 智能分析规则

### 自动判断 Commit Type

根据以下规则自动判断：

1. **仅修改文档文件** → `docs`
   - `*.md`、`*.txt`、`docs/` 目录下的文件

2. **仅修改测试文件** → `test`
   - `*test.js`、`*_test.py`、`test/` 目录下的文件

3. **仅修改配置/依赖** → `build` 或 `chore`
   - `package.json`、`pom.xml`、`requirements.txt`、`.gitignore`

4. **新增文件 > 50%** → `feat`
   - 大量新增文件，表示新功能

5. **修改文件包含关键词** → 根据关键词判断
   - `fix`、`bug`、`修复`、`错误` → `fix`
   - `add`、`新增`、`feature` → `feat`
   - `refactor`、`重构`、`优化` → `refactor`
   - `perf`、`性能` → `perf`

6. **默认** → `chore`
   - 无法明确判断时使用

### 生成 Scope

从变更文件路径中提取：
- `src/user/UserService.java` → `user`
- `components/Button.tsx` → `button`
- `api/auth.js` → `auth`

如果变更涉及多个模块，选择最主要的或使用 `*` 表示多个模块。

### 生成 Subject

根据变更内容生成简洁描述：
1. 识别主要变更动作（新增、修改、删除、重构）
2. 提取核心功能或模块名称
3. 组合成简洁的描述

**示例：**
- 新增 `LoginService.java` → `添加用户登录服务`
- 修改 `UserController.java` 中的验证逻辑 → `修复用户验证逻辑错误`
- 删除 `OldApi.java` → `移除废弃的旧版 API`

## 用户交互

### 确认 Commit 信息

在执行 commit 前，向用户展示生成的信息：

```
📝 生成的 Commit 信息：

feat(user): 添加用户登录功能

- 实现用户名密码登录
- 添加 JWT token 认证
- 新增登录接口 /api/login

是否确认提交？(Y/n)
```

用户可以：
- 确认（Y）：直接提交
- 拒绝（n）：手动输入 commit 信息
- 修改：提供修改建议，重新生成

### 推送确认

提交成功后，询问是否立即推送：

```
✅ 提交成功！

检测到远程仓库：https://github.com/username/repo.git

是否推送到远程分支 'main'？(Y/n)
```

如果用户确认推送且远程 URL 是 HTTPS 格式，询问 Personal Access Token：

```
🔐 需要身份认证

远程仓库：GitHub (github.com)
用户名：username（从远程 URL 自动提取）

请提供 Personal Access Token：
```

## 安全检查

在执行前进行以下检查：

1. **敏感文件检查**
   - 检查是否包含 `.env`、`*.key`、`credentials.json` 等敏感文件
   - 如果发现，警告用户并询问是否继续

2. **大文件检查**
   - 检查是否有 > 10MB 的文件
   - 如果发现，提示用户考虑使用 Git LFS

3. **分支检查**
   - 如果当前在 `main` 或 `master` 分支，提示用户是否确认直接推送到主分支

4. **Token 安全**
   - 提醒用户不要在公共场合泄露 Personal Access Token
   - Token 仅用于本次推送，不会被存储（除非用户选择使用 credential helper）

## 错误处理

| 错误场景 | 处理方式 |
|---------|---------|
| 不是 Git 仓库 | 提示用户先初始化 Git 或使用 `git-init-remote` skill |
| 没有远程仓库 | 提示用户先添加远程仓库或使用 `git-init-remote` skill |
| 工作目录干净 | 提示无需提交，终止执行 |
| Commit 失败 | 显示错误信息，询问是否重试 |
| Push 被拒绝 | 提示先 pull，询问是否执行 `git pull --rebase` |
| 认证失败 | 提示检查 Personal Access Token 是否正确，或切换到 SSH 方式 |
| Token 格式错误 | 提示用户检查 Token 格式（GitHub: `ghp_`, GitLab: `glpat-`） |
| 网络超时 | 提示检查网络连接或切换到 SSH 方式 |
| 权限不足 | 提示检查 Token 权限或仓库访问权限 |

## 高级选项

用户可以通过参数自定义行为：

| 参数 | 说明 | 默认值 |
|------|------|--------|
| `--no-push` | 只提交不推送 | false |
| `--amend` | 修改上一次提交 | false |
| `--force` | 强制推送（慎用） | false |
| `--dry-run` | 仅显示将要执行的操作，不实际执行 | false |
| `--ssh` | 强制使用 SSH 方式推送 | false |

## 示例场景

### 场景 1：简单功能开发（GitHub）

```
用户：帮我提交并推送代码

远程仓库：https://github.com/username/my-project.git
变更：
- 新增 UserService.java
- 修改 UserController.java

生成：
feat(user): 添加用户服务层

- 新增 UserService 处理用户业务逻辑
- 更新 UserController 调用服务层

推送：需要提供 GitHub Personal Access Token (ghp_xxxx)
```

### 场景 2：Bug 修复（阿里云效）

```
用户：修复了一个登录 bug，帮我提交

远程仓库：https://codeup.aliyun.com/username/my-project.git
变更：
- 修改 AuthService.java（10 行）

生成：
fix(auth): 修复登录验证失败的问题

修复了空指针异常导致的登录失败

推送：需要提供阿里云效个人访问令牌
```

### 场景 3：文档更新（Gitee）

```
用户：更新了 README，提交一下

远程仓库：https://gitee.com/username/my-project.git
变更：
- 修改 README.md

生成：
docs: 更新 README 安装说明

推送：需要提供 Gitee 私人令牌
```

### 场景 4：SSH 方式推送（GitLab）

```
用户：重构了数据库层，提交推送

远程仓库：git@gitlab.com:username/my-project.git
变更：
- 重命名 10+ 个文件
- 修改 20+ 个文件
- 删除 5 个废弃文件

生成：
refactor(database): 重构数据库访问层

- 统一数据库连接管理
- 优化 DAO 层结构
- 移除废弃的数据库工具类
- 更新所有调用方代码

推送：使用 SSH 方式，无需提供 Token
```

## Personal Access Token 获取指南

### GitHub
1. 访问 Settings → Developer settings → Personal access tokens → Tokens (classic)
2. 点击 "Generate new token"
3. 选择权限：`repo`（完整仓库访问权限）
4. 生成后复制 Token（格式：`ghp_xxxxxxxxxxxx`）

### GitLab
1. 访问 User Settings → Access Tokens
2. 创建新 Token
3. 选择权限：`write_repository`
4. 生成后复制 Token（格式：`glpat-xxxxxxxxxxxx`）

### Gitee
1. 访问 设置 → 私人令牌
2. 生成新令牌
3. 选择权限：`projects`
4. 生成后复制令牌

### 阿里云效
1. 访问 个人设置 → 个人访问令牌
2. 新建令牌
3. 选择权限：`代码库读写`
4. 生成后复制令牌

**注意：**
- Token 生成后只显示一次，请妥善保管
- 定期更新 Token 以提高安全性
- 不要将 Token 提交到代码仓库
