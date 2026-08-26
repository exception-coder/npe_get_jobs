@echo off
chcp 65001 >nul
REM Spring Boot 应用启动脚本（标准可执行 JAR）
REM 使用说明：
REM   1. 执行 mvn clean package 生成可执行 JAR
REM   2. 启动：start.bat；本地密钥从项目根目录 .env 读取

REM ==================== 配置区域 ====================
REM 脚本与项目目录
set "SCRIPT_DIR=%~dp0"
for %%I in ("%SCRIPT_DIR%..") do set "PROJECT_DIR=%%~fI"
REM 应用名称
set "APP_NAME=npe_get_jobs"
REM JAR 包路径
set "JAR_FILE=%PROJECT_DIR%\target\%APP_NAME%-v1.1.0.jar"
REM 日志目录
set "LOG_DIR=%SCRIPT_DIR%logs"
REM JVM 参数
set JVM_OPTS=-Xms512m -Xmx1024m -XX:+UseG1GC -XX:MaxGCPauseMillis=200
REM Spring Boot 参数（可通过命令行覆盖）
set SPRING_OPTS=
REM ================================================

REM 检查 Java 运行时版本
where java >nul 2>&1
if errorlevel 1 (
    echo 错误: 未找到 Java，请安装 JDK 21 并配置 PATH
    exit /b 1
)
for /f "tokens=3" %%V in ('java -version 2^>^&1 ^| findstr /i "version"') do set JAVA_VERSION=%%~V
if not "%JAVA_VERSION:~0,2%"=="21" (
    echo 错误: 当前 Java 版本为 %JAVA_VERSION%，本项目要求 JDK 21
    exit /b 1
)

REM 检查 JAR 文件是否存在
if not exist "%JAR_FILE%" (
    echo 错误: JAR 文件不存在: %JAR_FILE%
    echo 请先执行 mvn clean package 构建项目
    exit /b 1
)

REM 创建日志目录
if not exist "%LOG_DIR%" mkdir "%LOG_DIR%"

REM 构建完整的启动命令
echo ==========================================
echo 启动 Spring Boot 应用
echo ==========================================
echo JAR 文件: %JAR_FILE%
echo 日志目录: %LOG_DIR%
echo ==========================================
echo.

REM 执行启动命令
pushd "%PROJECT_DIR%"
java %JVM_OPTS% -jar "%JAR_FILE%" %SPRING_OPTS% %*
set EXIT_CODE=%ERRORLEVEL%
popd
exit /b %EXIT_CODE%

