#!/usr/bin/env bash
# 将 target/*.jar 归档到 GitHub Releases；可选同时打包 target/lib、JRE、run.bat
# 用法:
#   ./release.sh
#   VERSION=v1.0.0 ./release.sh
#   INCLUDE_LIB=0 VERSION=v1.0.0 ./release.sh
#   BAT_FILE=/path/to/run.bat JRE_DIR=... JRE_SUFFIX=windows-x64 VERSION=v1.0.0 ./release.sh

set -e
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../../../.." && pwd)"
cd "$PROJECT_ROOT"

# 检查 gh
if ! command -v gh &>/dev/null; then
  echo "错误: 未找到 gh。请安装 GitHub CLI: https://cli.github.com/"
  exit 1
fi

# 查找 JAR（排除 *-sources.jar 等，取主可执行 JAR）
JAR=$(find target -maxdepth 1 -name "*.jar" ! -name "*-sources.jar" ! -name "*-javadoc.jar" -type f | head -n1)
if [[ -z "$JAR" || ! -f "$JAR" ]]; then
  echo "错误: 在 target/ 下未找到可执行 JAR。请先 mvn package。"
  exit 1
fi

# 待上传资产列表（JAR 必选）
ASSETS=("$JAR")

# 可选：打包 lib（INCLUDE_LIB 默认 1；设为 0/false/no 则仅上传 JAR）
INCLUDE_LIB="${INCLUDE_LIB:-1}"
if [[ "$INCLUDE_LIB" =~ ^(1|true|yes|on)$ ]]; then
  if [[ -d "target/lib" ]]; then
    echo "正在打包 target/lib -> target/lib.zip ..."
    (cd target && zip -r -q lib.zip lib)
    echo "已生成 target/lib.zip"
    ASSETS+=(target/lib.zip)
  else
    echo "跳过 lib：target/lib 不存在（可先执行 mvn dependency:copy-dependencies）。"
  fi
fi

# 可选：附带 bat 脚本（BAT_FILE 指向 run.bat 等，会复制到 target/run.bat 并上传）
if [[ -n "$BAT_FILE" ]]; then
  if [[ ! -f "$BAT_FILE" ]]; then
    echo "错误: BAT 文件不存在: $BAT_FILE"
    exit 1
  fi
  cp "$BAT_FILE" target/run.bat
  echo "已复制 BAT: $BAT_FILE -> target/run.bat"
  ASSETS+=(target/run.bat)
fi

# 可选：打包 JRE（仅当设置 JRE_DIR 时）
if [[ -n "$JRE_DIR" ]]; then
  if [[ ! -d "$JRE_DIR" ]]; then
    echo "错误: JRE 目录不存在: $JRE_DIR"
    exit 1
  fi
  JRE_SUFFIX="${JRE_SUFFIX:-bundled}"
  JRE_ZIP="target/jre-${JRE_SUFFIX}.zip"
  JRE_PARENT=$(dirname "$JRE_DIR")
  JRE_NAME=$(basename "$JRE_DIR")
  echo "正在打包 JRE: $JRE_DIR -> $JRE_ZIP ..."
  (cd "$JRE_PARENT" && zip -r -q "$PROJECT_ROOT/$JRE_ZIP" "$JRE_NAME")
  echo "已生成 $JRE_ZIP"
  ASSETS+=("$JRE_ZIP")
fi

# 版本 tag
if [[ -n "$VERSION" ]]; then
  TAG="$VERSION"
else
  echo -n "请输入 Release 标签（如 v1.0.0）: "
  read -r TAG
  if [[ -z "$TAG" ]]; then
    echo "未输入标签，已取消。"
    exit 1
  fi
fi

# 发布说明（可选）
NOTES=""
if [[ -z "$VERSION" ]]; then
  echo -n "请输入发布说明（可选，直接回车跳过）: "
  read -r NOTES
fi
NOTES="${NOTES:-Release $TAG}"

echo "即将创建 Release: $TAG"
printf '  - %s\n' "${ASSETS[@]}"
echo "  - 说明: $NOTES"

gh release create "$TAG" "${ASSETS[@]}" \
  --title "$TAG" \
  --notes "$NOTES"

echo "完成。Release 已发布: $TAG"
