# 媒体保存服务使用指南

## 概述

媒体保存服务提供了统一的社交媒体内容下载接口，支持 TikTok、Instagram、Facebook 和 Twitter 平台的视频和图片下载。

## 支持的平台

| 平台 | 客户端类 | 支持内容 |
|------|---------|---------|
| TikTok | `TikSaveClient` | 短视频 |
| Instagram | `InstSaveClient` | 照片、视频 |
| Facebook | `FaceBookSaverClient` | 视频 |
| Twitter/X | `TwitterSaverClient` | 视频 |

## 配置

在 `application.yml` 中添加配置：

```yaml
integration:
  enabled: true
  services:
    tiksave:
      name: "TikTok下载服务"
      base-url: "https://tiksave.io/api"
      enabled: true
      timeout: 30000
      retry-times: 3
    
    instsave:
      name: "Instagram下载服务"
      base-url: "https://saveinst.app/api"
      enabled: true
      timeout: 30000
      retry-times: 3
    
    facebook-saver:
      name: "Facebook下载服务"
      base-url: "https://fsaver.com/api"
      enabled: true
      timeout: 30000
      retry-times: 3
    
    twitter-saver:
      name: "Twitter下载服务"
      base-url: "https://twittersaver.net/api"
      enabled: true
      timeout: 30000
      retry-times: 3
```

## 使用方式

### 方式一：使用 MediaSaverService（推荐）

```java
@Service
@RequiredArgsConstructor
public class VideoService {
    
    private final MediaSaverService mediaSaverService;
    
    /**
     * 智能下载 - 自动识别平台
     */
    public void smartDownload(String url) {
        mediaSaverService.downloadByUrl(url)
            .subscribe(response -> {
                if (response.isSuccess()) {
                    MediaSaverResponse data = response.getData();
                    if (data.isSuccess()) {
                        log.info("下载成功: {}", data.getData());
                    }
                }
            });
    }
    
    /**
     * 下载 TikTok 视频
     */
    public void downloadTikTok(String videoUrl) {
        mediaSaverService.downloadTikTok(videoUrl)
            .subscribe(response -> {
                if (response.isSuccess()) {
                    // 处理下载结果
                    String videoData = response.getData().getData();
                }
            });
    }
}
```

### 方式二：直接使用客户端

```java
@Service
@RequiredArgsConstructor
public class TikTokService {
    
    private final TikSaveClient tikSaveClient;
    
    public void download(String url) {
        tikSaveClient.ajaxSearch(url)
            .subscribe(response -> {
                if (response.isSuccess()) {
                    MediaSaverResponse data = response.getData();
                    // 处理下载结果
                }
            });
    }
}
```

## API 说明

### MediaSaverService

#### downloadByUrl(String url)
智能识别URL类型并自动选择对应的下载服务。

**支持的URL格式：**
- TikTok: `https://www.tiktok.com/@xxx/video/xxx`
- Instagram: `https://www.instagram.com/p/xxx`
- Facebook: `https://www.facebook.com/xxx/videos/xxx`
- Twitter: `https://twitter.com/xxx/status/xxx` 或 `https://x.com/xxx/status/xxx`

**返回：**
```java
Mono<ApiResponse<MediaSaverResponse>>
```

#### downloadTikTok(String videoUrl)
下载 TikTok 视频。

#### downloadInstagram(String contentUrl)
下载 Instagram 内容（照片或视频）。

#### downloadFacebook(String videoUrl)
下载 Facebook 视频。

#### downloadTwitter(String videoUrl)
下载 Twitter/X 视频。

## 响应格式

### ApiResponse<MediaSaverResponse>

```java
{
  "success": true,
  "message": "Success",
  "data": {
    "status": "success",
    "data": "视频数据（JSON字符串）"
  },
  "errorCode": null
}
```

### MediaSaverResponse

```java
{
  "status": "success",  // 状态：success 或 error
  "data": "..."         // 视频或图片数据
}
```

## 完整示例

### 示例1：同步方式（阻塞）

```java
@Service
@RequiredArgsConstructor
public class DownloadService {
    
    private final MediaSaverService mediaSaverService;
    
    public String downloadVideo(String url) {
        ApiResponse<MediaSaverResponse> response = 
            mediaSaverService.downloadByUrl(url).block();
        
        if (response != null && response.isSuccess()) {
            MediaSaverResponse data = response.getData();
            if (data.isSuccess()) {
                return data.getData();
            }
        }
        
        return null;
    }
}
```

### 示例2：异步方式（非阻塞）

```java
@Service
@RequiredArgsConstructor
public class AsyncDownloadService {
    
    private final MediaSaverService mediaSaverService;
    
    public void downloadVideoAsync(String url) {
        mediaSaverService.downloadByUrl(url)
            .doOnSuccess(response -> {
                log.info("下载成功");
            })
            .doOnError(error -> {
                log.error("下载失败", error);
            })
            .subscribe();
    }
}
```

### 示例3：响应式 Controller

```java
@RestController
@RequestMapping("/api/media")
@RequiredArgsConstructor
public class MediaController {
    
    private final MediaSaverService mediaSaverService;
    
    @PostMapping("/download")
    public Mono<ApiResponse<MediaSaverResponse>> download(@RequestParam String url) {
        return mediaSaverService.downloadByUrl(url);
    }
}
```

## 技术特性

### 1. 响应式非阻塞
- 基于 WebClient 实现
- 支持高并发场景
- 低资源占用

### 2. 自动重试
- 失败自动重试 3 次
- 递增延迟策略
- 提高成功率

### 3. 完整日志
- 请求日志
- 响应日志
- 错误日志

### 4. 配置化管理
- 支持动态配置
- 可单独配置超时和重试
- 支持启用/禁用

## 注意事项

1. **版权合规**
   - 下载内容请遵守版权法律法规
   - 仅供个人学习研究使用

2. **频率限制**
   - 注意第三方服务的API调用限制
   - 避免频繁请求

3. **服务可用性**
   - 第三方服务可能更新或失效
   - 建议添加错误处理和备用方案

4. **数据处理**
   - 返回的 data 字段通常是 JSON 字符串
   - 需要根据实际格式进行解析

## 依赖要求

```xml
<!-- Spring WebFlux -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-webflux</artifactId>
</dependency>
```

## 故障排查

### 连接超时
- 检查网络连接
- 增加超时时间配置
- 确认第三方服务是否可用

### 下载失败
- 验证URL格式是否正确
- 确认内容是否存在
- 查看日志获取详细错误信息

### 响应为空
- 第三方服务可能已更新接口
- 检查请求参数
- 查看响应状态码

## 扩展开发

### 添加新平台

1. 创建客户端类继承 `BaseWebClient`
2. 实现平台特定的 API 方法
3. 在 `MediaSaverService` 中添加对应方法
4. 更新配置文件

示例：
```java
@Component
public class YouTubeClient extends BaseWebClient {
    
    public YouTubeClient(WebClient.Builder builder) {
        super(builder, "https://youtube-api.com", 3);
    }
    
    public Mono<ApiResponse<MediaSaverResponse>> download(String url) {
        // 实现下载逻辑
    }
}
```

## 更新日志

### v1.0.0 (2025-12-05)
- ✨ 初始版本
- ✅ 支持 TikTok、Instagram、Facebook、Twitter
- ✅ 基于 WebClient 的响应式实现
- ✅ 智能 URL 识别
- ✅ 统一的服务接口

---

**文档版本**：1.0.0  
**最后更新**：2025-12-05










