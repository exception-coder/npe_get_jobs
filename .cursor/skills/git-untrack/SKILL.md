---
name: git-untrack
description: Stop Git from tracking a file or directory while keeping it on disk (remove from index only). Use when the user has accidentally committed files/folders (e.g. node_modules, build output) and wants to "unlink" or "disassociate" them from Git, then prevent future commits via .gitignore.
---

# Git 取消跟踪（Untrack）文件/目录

将已被 Git 跟踪的文件或目录从版本库索引中移除，**不删除本地文件**，并可选地写入 `.gitignore` 防止再次被提交。适用于误提交了 `node_modules`、`dist`、构建产物等场景。

## 使用场景

- 误将 `node_modules`、`frontend/node_modules` 等依赖目录推送到了远程
- 误提交了构建产物（如 `target/`、`dist/`、`.vite/`）
- 希望某个文件/目录不再被版本控制，但本地保留

## 必需参数

| 参数 | 说明 | 示例 | 默认值 |
|------|------|------|--------|
| `project_root` | 项目根目录绝对路径 | `/Users/me/projects/my-app` | 当前工作目录 |
| `path` | 要取消跟踪的路径（相对于项目根） | `frontend/node_modules`、`dist` | 无 |

可选：
- **更新 .gitignore**：是否在 `.gitignore` 中追加该路径（或相关规则），避免后续再次被 `git add` 纳入。建议对依赖、构建产物等一律补充。

## 执行流程

### Step 1: 确认路径已被跟踪

```bash
cd <project_root>
git ls-files -- <path>
```

- 若输出为空：该路径当前未被跟踪，无需执行 untrack，只需确保 `.gitignore` 已包含即可。
- 若有输出：继续执行 Step 2。

### Step 2: 从索引中移除（不删本地文件）

**单文件：**
```bash
git rm --cached <path>
```

**目录（递归）：**
```bash
git rm -r --cached <path>
```

说明：
- `--cached`：只从 Git 索引中移除，不删除工作区文件。
- 执行后 `git status` 会显示大量 `D  <path>/...`（已从索引删除），本地目录/文件仍在。

### Step 3: 更新 .gitignore（强烈建议）

在 `.gitignore` 中增加规则，防止该路径再次被加入版本库：

```bash
# 示例：前端依赖与构建
node_modules/
frontend/node_modules/
frontend/dist/
frontend/.vite/
```

- 若用户明确只取消跟踪、不改 `.gitignore`，可跳过本步。
- 对常见误提交目录（如 `node_modules`、`dist`），应主动建议补全忽略规则。

### Step 4: 提交并推送（可选）

```bash
git add .gitignore   # 若修改了 .gitignore
git add -u           # 暂存所有「从索引删除」的变更
git status --short   # 确认变更符合预期
git commit -m "chore: stop tracking <path> (add to .gitignore)"
git push origin <branch>
```

- 若用户要求「只取消关联、不提交」，则执行到 Step 2（及可选的 Step 3 本地编辑），不执行 commit/push。

## 注意事项

1. **历史记录**：此操作只影响当前及之后的提交，历史中已存在的该文件/目录仍会保留在旧 commit 里。若需从历史中彻底删除，需使用 `git filter-repo` 或 `git filter-branch`（重写历史，需强制推送，慎用）。
2. **协作**：其他人 `git pull` 后，他们本地的该路径会变成「未跟踪」或「被删除」（取决于是否在各自 `.gitignore` 中）。若该路径是依赖或构建目录，提醒他们本地重新安装/构建即可（如 `pnpm install`、`npm install`）。
3. **路径格式**：`path` 建议使用相对于项目根的路径，且与 `git ls-files` 看到的路径一致（例如 `frontend/node_modules` 而非 `node_modules`）。

## 示例

**场景：撤销并取消关联 `frontend/node_modules`**

```bash
cd /Users/zhangkai/IdeaProjects/npe_get_jobs
git ls-files | grep '^frontend/node_modules' | head -5   # 确认被跟踪
git rm -r --cached frontend/node_modules                  # 仅从索引移除
# 编辑 .gitignore，增加 node_modules/、frontend/node_modules/、frontend/dist/ 等
git add .gitignore && git add -u
git commit -m "chore: stop tracking frontend/node_modules, update .gitignore"
git push origin main
```

完成后：远程仓库不再跟踪 `frontend/node_modules`，本地目录保留，后续 `git add` 不会再把该目录加入提交。
