# 简历优化模块

## 模块概述

简历优化模块提供完整的简历管理功能，包括简历的创建、保存、查询、更新和删除等操作。

## 功能特性

- ✅ 简历信息管理（个人信息、核心技能、个人优势等）
- ✅ 工作经历管理
- ✅ 项目经历管理
- ✅ 教育经历管理
- ✅ 期望职位管理
- ✅ 数据持久化到MySQL数据库
- ✅ RESTful API接口

## 技术架构

### 后端技术栈
- Spring Boot 3.2.12
- Spring Data JPA
- MySQL数据库
- Lombok
- Jackson（JSON序列化）

### 前端技术栈
- Vue 3
- Vuetify 3
- Axios

## 目录结构

```
getjobs/modules/resume/
├── domain/                    # 实体类
│   ├── Resume.java           # 简历主表
│   ├── WorkExperience.java   # 工作经历
│   ├── ProjectExperience.java # 项目经历
│   └── Education.java        # 教育经历
├── repository/               # 数据访问层
│   ├── ResumeRepository.java
│   ├── WorkExperienceRepository.java
│   ├── ProjectExperienceRepository.java
│   └── EducationRepository.java
├── dto/                      # 数据传输对象
│   ├── ResumeSaveRequest.java
│   └── ResumeResponse.java
├── service/                  # 业务逻辑层
│   └── ResumeService.java
└── web/                      # 控制器层
    └── ResumeController.java
```

## API接口文档

### 1. 保存简历

**接口地址：** `POST /api/resume/save`

**请求体：**
```json
{
  "id": null,
  "personalInfo": {
    "name": "张三",
    "title": "高级Java开发工程师",
    "phone": "138-8888-8888",
    "email": "zhangsan@example.com",
    "location": "广州 · 可远程",
    "experience": "8年以上",
    "coreSkills": ["Java", "Spring Boot", "MySQL"],
    "linkedin": "https://linkedin.com/in/zhangsan"
  },
  "strengths": ["技术能力强", "团队协作好"],
  "desiredRole": {
    "title": "技术总监",
    "salary": "30-50K",
    "location": "广州",
    "industries": ["互联网", "金融"]
  },
  "workExperiences": [...],
  "projects": [...],
  "education": [...]
}
```

**响应：**
```json
{
  "id": 1,
  "personalInfo": {...},
  "strengths": [...],
  "desiredRole": {...},
  "workExperiences": [...],
  "projects": [...],
  "education": [...],
  "createdAt": "2024-01-01T10:00:00",
  "updatedAt": "2024-01-01T10:00:00"
}
```

### 2. 查询简历

**接口地址：** `GET /api/resume/{id}`

**响应：** 同保存简历响应

### 3. 查询所有简历

**接口地址：** `GET /api/resume/list`

**响应：** 简历列表数组

### 4. 搜索简历

**接口地址：** `GET /api/resume/search?name=张三`

**响应：** 简历列表数组

### 5. 删除简历

**接口地址：** `DELETE /api/resume/{id}`

**响应：**
```json
{
  "message": "简历删除成功"
}
```

### 6. 健康检查

**接口地址：** `GET /api/resume/health`

**响应：**
```json
{
  "status": "UP",
  "service": "resume-service"
}
```

## 数据库表结构

### resume（简历主表）
| 字段名 | 类型 | 说明 |
|--------|------|------|
| id | BIGINT | 主键ID |
| name | VARCHAR(100) | 姓名 |
| title | VARCHAR(200) | 当前头衔 |
| phone | VARCHAR(50) | 联系电话 |
| email | VARCHAR(100) | 邮箱 |
| location | VARCHAR(200) | 所在城市/工作形式 |
| experience | VARCHAR(50) | 工作年限 |
| linkedin | VARCHAR(500) | LinkedIn/个人主页 |
| core_skills | TEXT | 核心技能（JSON） |
| strengths | TEXT | 个人优势（JSON） |
| desired_role_title | VARCHAR(200) | 期望职位标题 |
| desired_salary | VARCHAR(100) | 期望薪资 |
| desired_location | VARCHAR(200) | 期望地点 |
| desired_industries | TEXT | 感兴趣的行业（JSON） |
| created_at | DATETIME | 创建时间 |
| updated_at | DATETIME | 更新时间 |
| is_deleted | BOOLEAN | 是否删除 |
| remark | VARCHAR(500) | 备注 |

### work_experience（工作经历表）
| 字段名 | 类型 | 说明 |
|--------|------|------|
| id | BIGINT | 主键ID |
| resume_id | BIGINT | 简历ID（外键） |
| company | VARCHAR(200) | 公司名称 |
| role | VARCHAR(200) | 职位 |
| period | VARCHAR(100) | 时间段 |
| summary | TEXT | 职责概述 |
| highlights | TEXT | 关键成果（JSON） |
| sort_order | INT | 排序序号 |
| created_at | DATETIME | 创建时间 |
| updated_at | DATETIME | 更新时间 |

### project_experience（项目经历表）
| 字段名 | 类型 | 说明 |
|--------|------|------|
| id | BIGINT | 主键ID |
| resume_id | BIGINT | 简历ID（外键） |
| name | VARCHAR(200) | 项目名称 |
| role | VARCHAR(200) | 角色 |
| period | VARCHAR(100) | 时间段 |
| summary | TEXT | 项目概述 |
| highlights | TEXT | 关键成果（JSON） |
| sort_order | INT | 排序序号 |
| created_at | DATETIME | 创建时间 |
| updated_at | DATETIME | 更新时间 |

### education（教育经历表）
| 字段名 | 类型 | 说明 |
|--------|------|------|
| id | BIGINT | 主键ID |
| resume_id | BIGINT | 简历ID（外键） |
| school | VARCHAR(200) | 学校 |
| major | VARCHAR(200) | 专业 |
| degree | VARCHAR(100) | 学位 |
| period | VARCHAR(100) | 时间段 |
| sort_order | INT | 排序序号 |
| created_at | DATETIME | 创建时间 |
| updated_at | DATETIME | 更新时间 |

## 使用说明

### 前端使用

1. 在简历优化页面填写简历信息
2. 点击"保存简历到数据库"按钮
3. 系统会自动保存简历数据到MySQL数据库
4. 保存成功后会显示简历ID和保存时间

### 后端配置

确保在 `application.yml` 中配置了MySQL数据源：

```yaml
spring:
  datasource:
    mysql:
      url: jdbc:mysql://localhost:3306/npe_get_jobs?useUnicode=true&characterEncoding=utf8&useSSL=false
      username: root
      password: your_password
      driver-class-name: com.mysql.cj.jdbc.Driver
```

## 注意事项

1. 数组类型字段（如核心技能、个人优势、关键成果等）在数据库中以JSON格式存储
2. 使用级联操作，删除简历时会自动删除关联的工作经历、项目经历和教育经历
3. 支持简历的创建和更新，通过ID判断是新增还是更新
4. 所有实体类继承自BaseEntity，包含创建时间、更新时间等公共字段

## 开发规范

1. 使用构造函数注入，避免字段上使用 @Autowired 注解
2. 使用Lombok简化代码
3. 使用Builder模式构建对象
4. 遵循RESTful API设计规范
5. 统一异常处理和日志记录

