# 📸 图片资源目录说明

本目录用于存放项目文档中使用的所有图片资源。

## 📁 目录结构

```
docs/images/
├── readme/                      # 根目录 README.md 使用的图片
│   ├── common-config.png       # 公共配置截图
│   ├── platform-config.png     # 平台配置截图
│   └── ...
├── anti-crawler-detection/      # 反爬虫相关文档的图片
│   ├── detection-flow.png
│   └── bypass-solution.png
├── user-guide/                  # 用户指南相关图片
│   ├── step1.png
│   └── step2.png
└── development/                 # 开发文档相关图片
    └── architecture.png
```

## 📋 命名规范

### 文件命名
- 使用小写字母和连字符（kebab-case）：`common-config.png`
- 名称要有描述性，能清楚表达图片内容
- 避免使用中文文件名，使用英文或拼音

### 目录命名
- 目录名应与对应的文档主题保持一致
- 使用小写字母和连字符
- 例如：`anti-crawler-detection/` 对应 `docs/anti-crawler-detection/` 文档目录

## 🎯 使用指南

### 1. 添加新图片

当你需要为文档添加图片时：

1. **确定图片所属分类**
   - 如果是根目录 README.md 的图片 → 放入 `readme/`
   - 如果是某个子文档的图片 → 放入对应的子目录

2. **创建子目录（如果不存在）**
   ```bash
   mkdir -p docs/images/your-category
   ```

3. **保存图片**
   - 将图片保存到对应目录
   - 使用有意义的文件名

4. **在文档中引用**
   ```markdown
   ![图片描述](docs/images/category/image-name.png)
   ```

### 2. 图片格式建议

- **截图**：使用 PNG 格式（无损压缩，适合文字和界面）
- **照片**：使用 JPG 格式（有损压缩，文件更小）
- **图标/Logo**：使用 PNG 或 SVG 格式（支持透明背景）
- **流程图/架构图**：优先使用 SVG 格式（矢量图，可缩放）

### 3. 图片优化

为了提升文档加载速度，建议：

- 截图前调整浏览器窗口大小，避免过大的图片
- 使用图片压缩工具（如 TinyPNG、ImageOptim）压缩图片
- 推荐图片宽度：800-1200px
- 单张图片大小控制在 500KB 以内

## 🔧 工具推荐

### 截图工具
- **macOS**：自带截图工具（Cmd + Shift + 4）
- **Windows**：Snipping Tool / Snip & Sketch
- **跨平台**：Flameshot、Greenshot

### 图片编辑
- **简单标注**：macOS Preview、Windows Paint
- **专业编辑**：GIMP（免费）、Photoshop

### 图片压缩
- **在线工具**：[TinyPNG](https://tinypng.com/)
- **本地工具**：ImageOptim（macOS）、FileOptimizer（Windows）

## 📝 示例

### 在根目录 README.md 中引用图片

```markdown
![公共配置示例](docs/images/readme/common-config.png)
```

### 在子文档中引用图片

如果在 `docs/DEPLOYMENT_GUIDE.md` 中引用图片：

```markdown
![部署架构图](images/deployment/architecture.png)
```

注意：子文档中使用相对路径，从 `docs/` 目录开始。

## ⚠️ 注意事项

1. **不要提交敏感信息**
   - 截图前检查是否包含敏感数据（密码、密钥、个人信息等）
   - 必要时使用马赛克或模糊处理

2. **保持目录整洁**
   - 删除文档时，记得删除对应的图片
   - 定期清理未使用的图片

3. **版本控制**
   - 图片文件会占用 Git 仓库空间
   - 考虑使用 Git LFS 管理大型图片文件
   - 或使用图床服务（如 GitHub Issues、图床网站）

## 🤝 贡献指南

如果你要为项目文档添加图片：

1. 遵循上述命名规范和目录结构
2. 确保图片清晰、大小适中
3. 在 Pull Request 中说明图片用途
4. 检查图片是否正确显示

---

有任何问题或建议，欢迎提 Issue 讨论！✨

