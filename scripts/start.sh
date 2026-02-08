#!/bin/bash

# Spring Boot 应用启动脚本（依赖分离模式，后台运行）
# 使用说明：
#   1. 首次部署：将 lib/ 目录和 jar 包都上传到服务器
#   2. 后续更新：只需上传新的 jar 包，lib/ 目录保持不变
#   3. 启动：./start.sh 或指定参数 ./start.sh --spring.profiles.active=prod
#   4. 应用将在后台运行，日志输出到 logs/${APP_NAME}.log
#   5. PID 保存在 logs/${APP_NAME}.pid，可用于停止应用

# ==================== 配置区域 ====================
# 应用名称
APP_NAME="npe_get_jobs"
# JAR 包路径（相对于脚本目录）
JAR_FILE="../target/${APP_NAME}-v1.0.0-SNAPSHOT.jar"
# 依赖库目录（相对于脚本目录，或使用绝对路径）
LIB_DIR="../target/lib"
# 日志目录
LOG_DIR="./logs"
# PID 文件路径
PID_FILE="./logs/${APP_NAME}.pid"
# 日志文件路径
LOG_FILE="${LOG_DIR}/${APP_NAME}.log"
# JVM 参数
JVM_OPTS="-Xms512m -Xmx1024m -XX:+UseG1GC -XX:MaxGCPauseMillis=200"
# Spring Boot 参数（可通过命令行覆盖）
SPRING_OPTS="--server.port=8081 --spring.profiles.active=prod,gpt,actuator,auth,dict"
# ================================================

# 检查 JAR 文件是否存在
if [ ! -f "$JAR_FILE" ]; then
    echo "错误: JAR 文件不存在: $JAR_FILE"
    echo "请先执行 mvn clean package 构建项目"
    exit 1
fi

# 检查 lib 目录是否存在
if [ ! -d "$LIB_DIR" ]; then
    echo "警告: 依赖目录不存在: $LIB_DIR"
    echo "请确保已执行 mvn package 生成依赖包"
    echo "或者使用绝对路径指向服务器上的共享依赖目录"
    exit 1
fi

# 创建日志目录
mkdir -p "$LOG_DIR"

# 检查是否已经运行
if [ -f "$PID_FILE" ]; then
    OLD_PID=$(cat "$PID_FILE")
    if ps -p "$OLD_PID" > /dev/null 2>&1; then
        echo "警告: 应用已经在运行中 (PID: $OLD_PID)"
        echo "如需重启，请先执行 stop.sh 或 kill $OLD_PID"
        exit 1
    else
        echo "清理旧的 PID 文件"
        rm -f "$PID_FILE"
    fi
fi

# 构建完整的启动命令
# 使用 loader.path 指定外部依赖目录
# Spring Boot 会自动从该目录加载依赖
CMD="java $JVM_OPTS -Dloader.path=$LIB_DIR -jar $JAR_FILE $SPRING_OPTS $@"

echo "=========================================="
echo "启动 Spring Boot 应用（依赖分离模式）"
echo "=========================================="
echo "JAR 文件: $JAR_FILE"
echo "依赖目录: $LIB_DIR"
echo "日志目录: $LOG_DIR"
echo "日志文件: $LOG_FILE"
echo "PID 文件: $PID_FILE"
echo "启动命令: $CMD"
echo "=========================================="
echo ""

# 后台执行启动命令，并将输出重定向到日志文件
nohup $CMD > "$LOG_FILE" 2>&1 &
PID=$!

# 保存 PID
echo $PID > "$PID_FILE"

# 等待一下，检查进程是否成功启动
sleep 2
if ps -p $PID > /dev/null 2>&1; then
    echo "✓ 应用已成功启动（后台运行）"
    echo "  PID: $PID"
    echo "  日志文件: $LOG_FILE"
    echo "  PID 文件: $PID_FILE"
    echo ""
    echo "查看日志: tail -f $LOG_FILE"
    echo "停止应用: kill $PID 或执行 stop.sh"
else
    echo "✗ 应用启动失败，请查看日志: $LOG_FILE"
    rm -f "$PID_FILE"
    exit 1
fi

