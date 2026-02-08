# 媒体保存服务 API 文档

## 基础信息

- **Base URL**: `http://localhost:8080/api/media-saver`
- **Content-Type**: `application/json`
- **响应格式**: JSON

## API 列表

### 1. 智能下载（推荐）

自动识别URL类型并选择对应的下载服务。

**接口地址**: `POST /api/media-saver/download`

**请求参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| url | String | 是 | 媒体URL |

**支持的URL格式**:
- TikTok: `https://www.tiktok.com/@xxx/video/xxx`
- Instagram: `https://www.instagram.com/p/xxx`
- Facebook: `https://www.facebook.com/xxx/videos/xxx`
- Twitter: `https://twitter.com/xxx/status/xxx` 或 `https://x.com/xxx/status/xxx`

**请求示例**:

```bash
curl -X POST "http://localhost:8080/api/media-saver/download?url=https://www.tiktok.com/@user/video/123456"
```

```javascript
// JavaScript/TypeScript
const response = await fetch('/api/media-saver/download?url=' + encodeURIComponent(videoUrl), {
  method: 'POST'
});
const data = await response.json();
```

**响应示例**:

```json
{
  "success": true,
  "message": "Success",
  "data": {
    "status": "success",
    "data": "{\"video_url\":\"https://...\",\"title\":\"...\"}"
  },
  "errorCode": null
}
```

---

### 2. 下载 TikTok 视频

**接口地址**: `POST /api/media-saver/tiktok`

**请求参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| url | String | 是 | TikTok视频URL |

**请求示例**:

```bash
curl -X POST "http://localhost:8080/api/media-saver/tiktok?url=https://www.tiktok.com/@user/video/123456"
```

```javascript
const response = await fetch('/api/media-saver/tiktok', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: `url=${encodeURIComponent(tiktokUrl)}`
});
```

**响应格式**: 同智能下载

---

### 3. 下载 Instagram 内容

**接口地址**: `POST /api/media-saver/instagram`

**请求参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| url | String | 是 | Instagram内容URL（照片或视频）|

**请求示例**:

```bash
curl -X POST "http://localhost:8080/api/media-saver/instagram?url=https://www.instagram.com/p/xxx"
```

```javascript
const response = await fetch('/api/media-saver/instagram', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: `url=${encodeURIComponent(instagramUrl)}`
});
```

---

### 4. 下载 Facebook 视频

**接口地址**: `POST /api/media-saver/facebook`

**请求参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| url | String | 是 | Facebook视频URL |

**请求示例**:

```bash
curl -X POST "http://localhost:8080/api/media-saver/facebook?url=https://www.facebook.com/xxx/videos/xxx"
```

```javascript
const response = await fetch('/api/media-saver/facebook', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: `url=${encodeURIComponent(facebookUrl)}`
});
```

---

### 5. 下载 Twitter/X 视频

**接口地址**: `POST /api/media-saver/twitter`

**请求参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| url | String | 是 | Twitter视频URL |

**请求示例**:

```bash
curl -X POST "http://localhost:8080/api/media-saver/twitter?url=https://twitter.com/xxx/status/xxx"
```

```javascript
const response = await fetch('/api/media-saver/twitter', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: `url=${encodeURIComponent(twitterUrl)}`
});
```

---

### 6. 获取服务状态

**接口地址**: `GET /api/media-saver/status`

**请求示例**:

```bash
curl -X GET "http://localhost:8080/api/media-saver/status"
```

**响应示例**:

```json
{
  "success": true,
  "message": "Success",
  "data": {
    "available": true,
    "supportedPlatforms": ["TikTok", "Instagram", "Facebook", "Twitter/X"],
    "version": "1.0.0"
  },
  "errorCode": null
}
```

---

## 响应格式说明

### 成功响应

```json
{
  "success": true,
  "message": "Success",
  "data": {
    "status": "success",
    "data": "视频或图片数据（JSON字符串）"
  },
  "errorCode": null
}
```

### 失败响应

```json
{
  "success": false,
  "message": "错误信息",
  "data": null,
  "errorCode": "ERROR_CODE"
}
```

## 前端集成示例

### Vue 3 + TypeScript

```typescript
// api/mediaSaver.ts
import axios from 'axios';

const BASE_URL = '/api/media-saver';

export interface MediaSaverResponse {
  status: string;
  data: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
  errorCode?: string;
}

/**
 * 智能下载
 */
export const smartDownload = async (url: string): Promise<ApiResponse<MediaSaverResponse>> => {
  const response = await axios.post(`${BASE_URL}/download`, null, {
    params: { url }
  });
  return response.data;
};

/**
 * 下载 TikTok 视频
 */
export const downloadTikTok = async (url: string): Promise<ApiResponse<MediaSaverResponse>> => {
  const response = await axios.post(`${BASE_URL}/tiktok`, null, {
    params: { url }
  });
  return response.data;
};

/**
 * 下载 Instagram 内容
 */
export const downloadInstagram = async (url: string): Promise<ApiResponse<MediaSaverResponse>> => {
  const response = await axios.post(`${BASE_URL}/instagram`, null, {
    params: { url }
  });
  return response.data;
};

/**
 * 下载 Facebook 视频
 */
export const downloadFacebook = async (url: string): Promise<ApiResponse<MediaSaverResponse>> => {
  const response = await axios.post(`${BASE_URL}/facebook`, null, {
    params: { url }
  });
  return response.data;
};

/**
 * 下载 Twitter 视频
 */
export const downloadTwitter = async (url: string): Promise<ApiResponse<MediaSaverResponse>> => {
  const response = await axios.post(`${BASE_URL}/twitter`, null, {
    params: { url }
  });
  return response.data;
};

/**
 * 获取服务状态
 */
export const getServiceStatus = async () => {
  const response = await axios.get(`${BASE_URL}/status`);
  return response.data;
};
```

### 使用示例

```vue
<template>
  <div class="media-downloader">
    <input v-model="videoUrl" placeholder="输入视频URL" />
    <button @click="handleDownload" :disabled="loading">
      {{ loading ? '下载中...' : '智能下载' }}
    </button>
    
    <div v-if="result">
      <h3>下载结果：</h3>
      <pre>{{ result }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { smartDownload } from '@/api/mediaSaver';

const videoUrl = ref('');
const loading = ref(false);
const result = ref<any>(null);

const handleDownload = async () => {
  if (!videoUrl.value) {
    alert('请输入URL');
    return;
  }
  
  loading.value = true;
  try {
    const response = await smartDownload(videoUrl.value);
    
    if (response.success && response.data) {
      result.value = JSON.parse(response.data.data);
      console.log('下载成功', result.value);
    } else {
      alert('下载失败: ' + response.message);
    }
  } catch (error) {
    console.error('下载异常', error);
    alert('下载异常');
  } finally {
    loading.value = false;
  }
};
</script>
```

### React + TypeScript

```typescript
// hooks/useMediaDownload.ts
import { useState } from 'react';
import { smartDownload } from '@/api/mediaSaver';

export const useMediaDownload = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const download = async (url: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await smartDownload(url);
      
      if (response.success && response.data) {
        const data = JSON.parse(response.data.data);
        setResult(data);
        return data;
      } else {
        setError(response.message);
        return null;
      }
    } catch (err) {
      setError('下载失败');
      console.error(err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { download, loading, result, error };
};
```

```tsx
// MediaDownloader.tsx
import React, { useState } from 'react';
import { useMediaDownload } from '@/hooks/useMediaDownload';

export const MediaDownloader: React.FC = () => {
  const [url, setUrl] = useState('');
  const { download, loading, result, error } = useMediaDownload();

  const handleDownload = () => {
    if (!url) {
      alert('请输入URL');
      return;
    }
    download(url);
  };

  return (
    <div>
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="输入视频URL"
      />
      <button onClick={handleDownload} disabled={loading}>
        {loading ? '下载中...' : '智能下载'}
      </button>
      
      {error && <div className="error">{error}</div>}
      {result && (
        <div className="result">
          <h3>下载结果：</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};
```

## 错误码说明

| 错误码 | 说明 |
|--------|------|
| INVALID_URL | 无效的URL |
| UNSUPPORTED_PLATFORM | 不支持的平台 |
| DOWNLOAD_FAILED | 下载失败 |
| SERVICE_UNAVAILABLE | 服务不可用 |
| TIMEOUT | 请求超时 |

## 注意事项

1. **URL编码**: 请求参数中的URL需要进行URL编码
2. **超时时间**: 下载可能需要一定时间，建议设置合理的超时时间
3. **响应数据**: `data.data` 字段通常是JSON字符串，需要解析后使用
4. **错误处理**: 建议添加完善的错误处理和用户提示
5. **版权合规**: 下载内容请遵守版权法律法规

## 更新日志

### v1.0.0 (2025-12-05)
- ✨ 初始版本
- ✅ 支持 TikTok、Instagram、Facebook、Twitter
- ✅ 提供智能识别功能
- ✅ RESTful API 设计

---

**文档版本**: 1.0.0  
**最后更新**: 2025-12-05










