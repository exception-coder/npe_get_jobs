#!/bin/bash

# AI 模型健康检查测试脚本（优化版）
# 用于快速验证所有 AI 模型的健康检查功能

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 默认配置
HOST="localhost"
PORT="8080"
BASE_URL="http://${HOST}:${PORT}"

# 打印带颜色的标题
print_header() {
    echo -e "${BLUE}════════════════════════════════════════════════════════════${NC}"
    echo -e "${BLUE}  $1${NC}"
    echo -e "${BLUE}════════════════════════════════════════════════════════════${NC}"
}

# 打印成功消息
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

# 打印错误消息
print_error() {
    echo -e "${RED}✗ $1${NC}"
}

# 打印警告消息
print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

# 打印信息消息
print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

# 检查 jq 是否安装
check_jq() {
    if ! command -v jq &> /dev/null; then
        print_warning "未安装 jq，将显示原始 JSON 输出"
        print_info "安装 jq: brew install jq (macOS) 或 apt-get install jq (Linux)"
        return 1
    fi
    return 0
}

# 测试 1：检查服务是否运行
test_service() {
    print_header "测试 1: 检查服务状态"
    
    if curl -s -f "${BASE_URL}/actuator/health" > /dev/null 2>&1; then
        print_success "服务运行正常"
        return 0
    else
        print_error "服务未运行或无法访问"
        print_info "请确保应用已启动：mvn spring-boot:run"
        return 1
    fi
}

# 测试 2：通过 Actuator 端点检查所有模型
test_actuator_health() {
    print_header "测试 2: Actuator 聚合健康检查"
    
    print_info "访问: ${BASE_URL}/actuator/health/aiModels"
    
    response=$(curl -s "${BASE_URL}/actuator/health/aiModels")
    
    if [ $? -eq 0 ]; then
        if check_jq; then
            echo "$response" | jq '.'
            status=$(echo "$response" | jq -r '.status')
            totalModels=$(echo "$response" | jq -r '.details.totalModels')
            healthyModels=$(echo "$response" | jq -r '.details.healthyModels')
            unhealthyModels=$(echo "$response" | jq -r '.details.unhealthyModels')
            
            echo ""
            print_info "整体状态: $status"
            print_info "模型总数: $totalModels"
            print_info "健康模型: $healthyModels"
            print_info "异常模型: $unhealthyModels"
            
            if [ "$status" = "UP" ]; then
                print_success "所有模型健康"
            else
                print_warning "部分模型异常"
            fi
        else
            echo "$response"
        fi
    else
        print_error "无法访问健康检查端点"
    fi
    
    echo ""
}

# 测试 3：通过自定义 API 检查所有模型
test_custom_api() {
    print_header "测试 3: 自定义 API 健康检查"
    
    print_info "访问: ${BASE_URL}/api/health/ai-models"
    
    response=$(curl -s "${BASE_URL}/api/health/ai-models")
    
    if [ $? -eq 0 ]; then
        if check_jq; then
            echo "$response" | jq '.'
            status=$(echo "$response" | jq -r '.status')
            avgTime=$(echo "$response" | jq -r '.details.avgResponseTime')
            print_info "整体状态: $status"
            print_info "平均响应时间: $avgTime"
        else
            echo "$response"
        fi
    else
        print_error "无法访问自定义 API"
    fi
    
    echo ""
}

# 测试 4：获取配置信息
test_config() {
    print_header "测试 4: 获取配置信息"
    
    print_info "访问: ${BASE_URL}/api/health/ai-models/config"
    
    response=$(curl -s "${BASE_URL}/api/health/ai-models/config")
    
    if [ $? -eq 0 ]; then
        if check_jq; then
            echo "$response" | jq '.'
            checkType=$(echo "$response" | jq -r '.checkType')
            enabled=$(echo "$response" | jq -r '.enabled')
            includedModels=$(echo "$response" | jq -r '.includedModels | length')
            excludedModels=$(echo "$response" | jq -r '.excludedModels | length')
            
            echo ""
            print_info "检查类型: $checkType"
            print_info "启用状态: $enabled"
            print_info "包含模型数: $includedModels"
            print_info "排除模型数: $excludedModels"
        else
            echo "$response"
        fi
    else
        print_error "无法获取配置信息"
    fi
    
    echo ""
}

# 测试 5：手动触发健康检查
test_manual_check() {
    print_header "测试 5: 手动触发健康检查"
    
    print_info "访问: ${BASE_URL}/api/health/ai-models/check"
    
    response=$(curl -s -X POST "${BASE_URL}/api/health/ai-models/check")
    
    if [ $? -eq 0 ]; then
        if check_jq; then
            echo "$response" | jq '.'
            checkDuration=$(echo "$response" | jq -r '.checkDuration')
            status=$(echo "$response" | jq -r '.status')
            
            echo ""
            print_info "检查耗时: $checkDuration"
            
            if [ "$status" = "UP" ]; then
                print_success "检查结果: UP"
            else
                print_warning "检查结果: $status"
            fi
        else
            echo "$response"
        fi
    else
        print_error "无法触发手动检查"
    fi
    
    echo ""
}

# 测试 6：获取统计信息
test_stats() {
    print_header "测试 6: 获取统计信息"
    
    print_info "访问: ${BASE_URL}/api/health/ai-models/stats"
    
    response=$(curl -s "${BASE_URL}/api/health/ai-models/stats")
    
    if [ $? -eq 0 ]; then
        if check_jq; then
            echo "$response" | jq '.'
        else
            echo "$response"
        fi
    else
        print_error "无法获取统计信息"
    fi
    
    echo ""
}

# 测试 7：检查特定模型
test_specific_models() {
    print_header "测试 7: 检查特定模型"
    
    # 获取所有模型列表
    response=$(curl -s "${BASE_URL}/actuator/health/aiModels")
    
    if check_jq; then
        models=$(echo "$response" | jq -r '.details.models | keys[]' 2>/dev/null)
        
        if [ -n "$models" ]; then
            echo "发现的模型:"
            for model in $models; do
                echo "  - $model"
            done
            
            echo ""
            print_info "检查各个模型状态..."
            
            for model in $models; do
                model_response=$(curl -s "${BASE_URL}/api/health/ai-models/${model}")
                model_status=$(echo "$model_response" | jq -r '.details.status' 2>/dev/null)
                
                if [ "$model_status" = "UP" ]; then
                    print_success "$model: UP"
                else
                    print_warning "$model: $model_status"
                fi
            done
        else
            print_warning "未找到任何模型"
        fi
    else
        print_warning "需要 jq 来解析模型列表"
    fi
    
    echo ""
}

# 测试 8：性能测试
test_performance() {
    print_header "测试 8: 性能测试（10 次请求）"
    
    print_info "执行 10 次健康检查，计算平均响应时间..."
    
    total_time=0
    success_count=0
    
    for i in {1..10}; do
        start_time=$(date +%s%N)
        response=$(curl -s -X POST "${BASE_URL}/api/health/ai-models/check")
        end_time=$(date +%s%N)
        
        duration=$((($end_time - $start_time) / 1000000))
        
        if [ $? -eq 0 ]; then
            success_count=$((success_count + 1))
            total_time=$((total_time + duration))
            echo -n "."
        else
            echo -n "x"
        fi
    done
    
    echo ""
    
    if [ $success_count -gt 0 ]; then
        avg_time=$((total_time / success_count))
        print_success "成功: $success_count/10"
        print_info "平均响应时间: ${avg_time}ms"
        
        if [ $avg_time -lt 1000 ]; then
            print_success "性能优秀 (< 1s)"
        elif [ $avg_time -lt 3000 ]; then
            print_info "性能良好 (< 3s)"
        else
            print_warning "响应较慢 (> 3s)"
        fi
    else
        print_error "所有请求失败"
    fi
    
    echo ""
}

# 主函数
main() {
    clear
    print_header "AI 模型健康检查测试（优化版）"
    echo ""
    print_info "目标地址: ${BASE_URL}"
    print_info "测试时间: $(date)"
    print_info "当前配置: OpenAI + Deepseek 双模型"
    echo ""
    
    # 检查 jq
    check_jq
    echo ""
    
    # 执行测试
    if test_service; then
        test_actuator_health
        test_custom_api
        test_config
        test_manual_check
        test_stats
        test_specific_models
        test_performance
        
        print_header "测试完成"
        print_success "所有测试已执行完毕"
        echo ""
        print_info "详细文档位置:"
        print_info "  - AI_MODELS_HEALTH_GUIDE.md (使用指南)"
        print_info "  - MODULE_SUMMARY.md (模块说明)"
        print_info "  - README.md (完整文档)"
    else
        print_error "服务未运行，无法继续测试"
        exit 1
    fi
}

# 显示帮助信息
show_help() {
    echo "AI 模型健康检查测试脚本"
    echo ""
    echo "用法: $0 [选项]"
    echo ""
    echo "选项:"
    echo "  -h, --help              显示帮助信息"
    echo "  -H, --host HOST         指定主机 (默认: localhost)"
    echo "  -p, --port PORT         指定端口 (默认: 8080)"
    echo ""
    echo "示例:"
    echo "  $0                      使用默认配置运行测试"
    echo "  $0 -H 192.168.1.100     指定远程主机"
    echo "  $0 -p 9090              指定端口"
    echo ""
}

# 解析命令行参数
while [[ $# -gt 0 ]]; do
    case $1 in
        -h|--help)
            show_help
            exit 0
            ;;
        -H|--host)
            HOST="$2"
            BASE_URL="http://${HOST}:${PORT}"
            shift 2
            ;;
        -p|--port)
            PORT="$2"
            BASE_URL="http://${HOST}:${PORT}"
            shift 2
            ;;
        *)
            print_error "未知选项: $1"
            show_help
            exit 1
            ;;
    esac
done

# 运行主函数
main

