#!/bin/bash

# JavaScript反混淆工具安装脚本
# 用于安装所需的npm工具包

echo "=========================================="
echo "JavaScript反混淆工具安装脚本"
echo "=========================================="
echo ""

# 检查npm是否安装
if ! command -v npm &> /dev/null; then
    echo "❌ 错误: npm未安装"
    echo "请先安装Node.js和npm: https://nodejs.org/"
    exit 1
fi

echo "✓ npm已安装，版本: $(npm -v)"
echo ""

# 安装工具列表
tools=(
    "webcrack"
    "js-beautify"
    "@babel/cli"
    "@babel/core"
    "@babel/plugin-transform-arrow-functions"
    "@babel/plugin-transform-block-scoping"
    "@babel/plugin-transform-template-literals"
)

echo "开始安装反混淆工具..."
echo ""

success_count=0
fail_count=0

for tool in "${tools[@]}"; do
    echo "正在安装: $tool"
    
    if npm install -g "$tool" > /dev/null 2>&1; then
        echo "✓ $tool 安装成功"
        ((success_count++))
    else
        echo "✗ $tool 安装失败"
        ((fail_count++))
    fi
    echo ""
done

echo "=========================================="
echo "安装完成"
echo "成功: $success_count"
echo "失败: $fail_count"
echo "=========================================="
echo ""

# 验证安装
echo "验证工具安装状态..."
echo ""

check_tools=("webcrack" "js-beautify" "babel")

for tool in "${check_tools[@]}"; do
    if command -v "$tool" &> /dev/null; then
        echo "✓ $tool: 已安装"
    else
        echo "✗ $tool: 未安装"
    fi
done

echo ""
echo "=========================================="
echo "安装脚本执行完毕"
echo "=========================================="

