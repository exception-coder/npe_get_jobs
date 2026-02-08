import { refreshToken } from '@/common/infrastructure/auth/auth';

export interface HttpError extends Error {
  status: number;
  payload?: unknown;
}

// 用于避免并发刷新 token 的标志
let isRefreshing = false;
// 等待刷新完成的 Promise 队列
let refreshPromise: Promise<boolean> | null = null;

async function parseResponse(response: Response): Promise<unknown> {
  const contentType = response.headers.get('content-type') ?? '';
  if (contentType.includes('application/json')) {
    return response.json();
  }
  return response.text();
}

/**
 * 执行 HTTP 请求，并在遇到 401 时自动刷新 token 并重试
 */
async function executeRequest<T>(
  input: RequestInfo,
  init?: RequestInit,
  retryOn401 = true
): Promise<T> {
  const response = await fetch(input, init);
  
  // 如果响应正常，直接返回
  if (response.ok) {
    return (await parseResponse(response)) as T;
  }

  // 如果是 401 错误且允许重试，尝试刷新 token
  if (response.status === 401 && retryOn401) {
    console.log('[HTTP 拦截] 检测到 401 错误，尝试刷新 Token');
    
    // 如果正在刷新，等待刷新完成
    if (isRefreshing && refreshPromise) {
      console.log('[HTTP 拦截] 等待其他请求的 Token 刷新完成');
      const refreshed = await refreshPromise;
      if (refreshed) {
        // 刷新成功，重试原请求
        console.log('[HTTP 拦截] Token 刷新成功，重试原请求');
        return executeRequest<T>(input, init, false); // 不再重试，避免无限循环
      }
    } else if (!isRefreshing) {
      // 开始刷新 token
      isRefreshing = true;
      refreshPromise = refreshToken();
      
      try {
        const refreshed = await refreshPromise;
        if (refreshed) {
          // 刷新成功，重试原请求
          console.log('[HTTP 拦截] Token 刷新成功，重试原请求');
          return executeRequest<T>(input, init, false); // 不再重试，避免无限循环
        } else {
          // 刷新失败，抛出 401 错误
          console.log('[HTTP 拦截] Token 刷新失败，抛出 401 错误');
        }
      } finally {
        isRefreshing = false;
        refreshPromise = null;
      }
    }
  }

  // 其他错误或刷新失败，抛出错误
  const error: HttpError = new Error(`请求失败: ${response.status}`) as HttpError;
  error.status = response.status;
  try {
    error.payload = await parseResponse(response);
  } catch (e) {
    error.payload = undefined;
  }
  throw error;
}

export async function http<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
  return executeRequest<T>(input, init);
}

export async function httpJson<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
  const mergedInit: RequestInit = {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
  };
  return http<T>(input, mergedInit);
}
