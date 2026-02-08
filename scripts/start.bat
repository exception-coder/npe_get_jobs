@echo off
REM Spring Boot 应用启动脚本（依赖分离模式 - Windows 版本）
REM 使用说明：
REM   1. 首次部署：将 lib\ 目录和 jar 包都上传到服务器
REM   2. 后续更新：只需上传新的 jar 包，lib\ 目录保持不变
REM   3. 启动：start.bat 或指定参数 start.bat --spring.profiles.active=prod

REM ==================== 配置区域 ====================
REM 应用名称
set APP_NAME=npe_get_jobs
REM JAR 包路径（相对于脚本目录）
set JAR_FILE=..\target\%APP_NAME%-v1.0.0-SNAPSHOT.jar
REM 依赖库目录（相对于脚本目录，或使用绝对路径）
set LIB_DIR=..\target\lib
REM 日志目录
set LOG_DIR=.\logs
REM JVM 参数
set JVM_OPTS=-Xms512m -Xmx1024m -XX:+UseG1GC -XX:MaxGCPauseMillis=200
REM Spring Boot 参数（可通过命令行覆盖）
set SPRING_OPTS=
REM ================================================

REM 检查 JAR 文件是否存在
if not exist "%JAR_FILE%" (
    echo 错误: JAR 文件不存在: %JAR_FILE%
    echo 请先执行 mvn clean package 构建项目
    exit /b 1
)

REM 检查 lib 目录是否存在
if not exist "%LIB_DIR%" (
    echo 警告: 依赖目录不存在: %LIB_DIR%
    echo 请确保已执行 mvn package 生成依赖包
    echo 或者使用绝对路径指向服务器上的共享依赖目录
    exit /b 1
)

REM 创建日志目录
if not exist "%LOG_DIR%" mkdir "%LOG_DIR%"

REM 构建完整的启动命令
REM 使用 loader.path 指定外部依赖目录
echo ==========================================
echo 启动 Spring Boot 应用（依赖分离模式）
echo ==========================================
echo JAR 文件: %JAR_FILE%
echo 依赖目录: %LIB_DIR%
echo 日志目录: %LOG_DIR%
echo ==========================================
echo.

REM 执行启动命令
java %JVM_OPTS% -Dloader.path=%LIB_DIR% -jar %JAR_FILE% %SPRING_OPTS% %*

