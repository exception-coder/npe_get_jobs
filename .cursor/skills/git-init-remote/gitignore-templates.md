# .gitignore Templates

Skill 执行时根据项目类型选择对应模板。每个模板包含三部分：
1. **通用规则** — 所有项目都需要的（IDE、OS、临时文件）
2. **语言/构建工具规则** — 特定技术栈的编译产物和依赖
3. **安全规则** — 敏感文件（密钥、配置）

---

## 通用规则（所有项目都要包含）

```gitignore
# IDE
.idea/
*.iml
*.iws
*.ipr
.vscode/
.settings/
.classpath
.project
*.suo
*.ntvs*
*.njsproj
*.sln.docstats
.eclipse/
*.swp
*.swo

# OS
.DS_Store
.DS_Store?
._*
Thumbs.db
ehthumbs.db
Desktop.ini

# Temp
*.tmp
*.bak
*.swp
*~
*.log

# Security
*.env
*.env.*
!*.env.example
*.pem
*.key
*.p12
*.jks
credentials.json
secrets.yml
```

---

## java-maven

```gitignore
# Maven build
target/
pom.xml.tag
pom.xml.releaseBackup
pom.xml.versionsBackup
pom.xml.next
release.properties
dependency-reduced-pom.xml
buildNumber.properties
.mvn/timing.properties
.mvn/wrapper/maven-wrapper.jar

# Java compiled
*.class
*.jar
*.war
*.ear
*.nar

# Logs
logs/
*.log
*.log.*

# Spring Boot
application-local.yml
application-local.properties
```

---

## java-gradle

```gitignore
# Gradle build
build/
.gradle/
gradle/wrapper/gradle-wrapper.jar

# Java compiled
*.class
*.jar
*.war
*.ear
*.nar

# Logs
logs/
*.log
*.log.*

# Spring Boot
application-local.yml
application-local.properties
```

---

## node

```gitignore
# Dependencies
node_modules/
bower_components/

# Build
dist/
build/
out/
.next/
.nuxt/

# Package manager
package-lock.json
yarn.lock
pnpm-lock.yaml
.pnp
.pnp.js

# Cache
.npm
.eslintcache
.parcel-cache

# Testing
coverage/
.nyc_output/

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
```

---

## python

```gitignore
# Byte-compiled / cached
__pycache__/
*.py[cod]
*$py.class
*.pyo

# Virtual environments
venv/
.venv/
env/
.env/
ENV/

# Distribution / packaging
dist/
build/
*.egg-info/
*.egg
.eggs/
sdist/
wheels/

# Testing
.pytest_cache/
.coverage
htmlcov/
.tox/
.nox/

# Jupyter
.ipynb_checkpoints/

# Type checkers
.mypy_cache/
.pytype/
```

---

## golang

```gitignore
# Binary
*.exe
*.exe~
*.dll
*.so
*.dylib

# Build
/bin/
/build/
vendor/

# Test
*.test
*.out
coverage.txt
coverage.html

# Go workspace
go.work
go.work.sum
```

---

## rust

```gitignore
# Compiled
/target/
**/*.rs.bk
Cargo.lock

# Debug
*.pdb
```

---

## dotnet

```gitignore
# Build
bin/
obj/
[Dd]ebug/
[Rr]elease/
x64/
x86/

# Visual Studio
.vs/
*.user
*.userosscache
*.sln.docstats

# NuGet
**/[Pp]ackages/*
*.nupkg
.nuget/

# Test
TestResults/
coverage/
```

---

## generic

如果无法识别项目类型，使用通用规则 + 以下补充：

```gitignore
# Build output
build/
dist/
out/
target/
bin/

# Dependencies
vendor/
node_modules/

# Logs
logs/
*.log
```
