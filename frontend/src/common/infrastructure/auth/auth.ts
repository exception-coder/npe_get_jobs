import { http } from '@/api/http';

/**
 * 认证相关工具函数
 * 
 * 用于检查用户登录状态，管理认证信息
 */

// Token 刷新定时器
let refreshTimer: number | null = null;
// Token 过期时间（时间戳，毫秒）
let tokenExpiresAt: number | null = null;
// 是否已启动定时刷新
let isRefreshTimerStarted = false;

// Token 刷新提前时间（毫秒），在过期前 5 分钟刷新
const REFRESH_BEFORE_EXPIRY_MS = 5 * 60 * 1000; // 5 分钟
// 最小刷新间隔（毫秒），避免频繁刷新
const MIN_REFRESH_INTERVAL_MS = 30 * 60 * 1000; // 30 分钟

/**
 * 内部函数：执行实际的认证检查（不包含刷新逻辑，避免递归）
 */
async function checkAuthStatusInternal(): Promise<boolean> {
  console.log('[认证检查] ========================================');
  console.log('[认证检查] 开始检查用户登录状态');
  console.log('[认证检查] document.cookie 原始值:', document.cookie);
  console.log('[认证检查] document.cookie 是否为空:', document.cookie === '');
  console.log('[认证检查] document.cookie 长度:', document.cookie.length);
  
  // 注意：如果 cookie 设置了 HttpOnly 标志，JavaScript 无法通过 document.cookie 读取
  // HttpOnly cookie 只能在 HTTP 请求头中自动发送给服务器，无法通过 JavaScript 访问
  // 这是安全特性，用于防止 XSS 攻击
  if (document.cookie === '') {
    console.log('[认证检查] ⚠️ document.cookie 为空，可能是 HttpOnly cookie（这是正常的）');
    console.log('[认证检查] HttpOnly cookie 会在 HTTP 请求时自动发送，无需前端读取');
  }
  
  try {
    // 注意：即使 document.cookie 为空（HttpOnly cookie），我们仍然应该调用 API 检查
    // 因为 HttpOnly cookie 会在 HTTP 请求时自动发送到服务器
    // 先尝试从 cookie 读取（如果可能的话），但不管是否读取到，都调用 API
    const token = getTokenFromCookie();
    if (token) {
      console.log('[认证检查] ✓ 通过 JavaScript 读取到 token（非 HttpOnly），长度:', token.length);
    } else {
      console.log('[认证检查] ⚠️ 无法通过 JavaScript 读取 token，可能是 HttpOnly cookie');
      console.log('[认证检查] 继续调用 API 检查，HttpOnly cookie 会在请求时自动发送');
    }

    // 调用专门的认证检查接口
    // HttpOnly cookie 会在请求时自动添加到 Cookie 请求头中
    // 注意：这里直接使用 http，如果返回 401，http 会自动刷新 token 并重试
    // 但如果接口返回 success: false（不是 401），则需要手动处理
    console.log('[认证检查] 正在调用认证检查接口: /api/auth/check');
    const response = await http<{
      success: boolean;
      message: string;
      data: {
        username: string;
        roles: string[];
        permissions: string[];
      } | null;
    }>('/api/auth/check');

    console.log('[认证检查] 接口响应:', {
      success: response.success,
      message: response.message,
      hasData: !!response.data,
      username: response.data?.username,
    });

    // 如果接口返回 success: true，说明 token 有效
    if (response.success === true) {
      console.log('[认证检查] ✅ 已登录：token 验证成功，用户名:', response.data?.username);
      return true;
    } else {
      console.log('[认证检查] ❌ 未登录：接口返回 success=false，原因:', response.message || '未知');
      return false;
    }
  } catch (error: any) {
    // 如果返回 401，可能是 token 过期
    if (error?.status === 401) {
      console.log('[认证检查] ❌ 未登录：HTTP 401 Unauthorized，token 无效或已过期');
      return false;
    }
    if (error?.status === 403) {
      console.log('[认证检查] ❌ 未登录：HTTP 403 Forbidden，无权限访问');
      return false;
    }
    
    // 其他错误（如网络错误、500等）也视为未登录，确保安全性
    console.log('[认证检查] ❌ 未登录：请求失败', {
      status: error?.status,
      statusText: error?.statusText,
      message: error?.message,
      error: error,
    });
    return false;
  }
}

/**
 * 检查用户是否已登录
 * 通过调用专门的认证检查接口来验证 token 是否有效
 * 如果 token 无效，会尝试刷新 token 后重新检查
 * 
 * @returns Promise<boolean> 返回 true 表示已登录，false 表示未登录
 */
export async function checkAuthStatus(): Promise<boolean> {
  // 先尝试检查认证状态
  const isAuthenticated = await checkAuthStatusInternal();
  
  // 如果认证失败，尝试刷新 token 后重新检查
  if (!isAuthenticated) {
    console.log('[认证检查] ⚠️ Token 无效，尝试刷新 Token');
    const refreshed = await refreshToken();
    if (refreshed) {
      // 刷新成功，重新检查认证状态（只检查一次，避免无限递归）
      console.log('[认证检查] Token 刷新成功，重新检查认证状态');
      return await checkAuthStatusInternal();
    } else {
      console.log('[认证检查] ❌ Token 刷新失败，用户未登录');
      return false;
    }
  }
  
  return isAuthenticated;
}

/**
 * 从 cookie 中获取 token
 * 
 * @returns string | null token 值，如果不存在则返回 null
 */
export function getTokenFromCookie(): string | null {
  console.log('[Cookie 解析] 开始解析 Cookie');
  console.log('[Cookie 解析] document.cookie 原始值:', document.cookie);
  
  const cookies = document.cookie.split(';');
  console.log('[Cookie 解析] 分割后的 cookie 数组:', cookies);
  console.log('[Cookie 解析] Cookie 数量:', cookies.length);
  
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const trimmed = cookie.trim();
    console.log(`[Cookie 解析] Cookie[${i}]: 原始="${cookie}", 去除空格后="${trimmed}"`);
    
    // 使用 indexOf 找到第一个 = 的位置，然后分割
    const equalIndex = trimmed.indexOf('=');
    if (equalIndex === -1) {
      console.log(`[Cookie 解析] Cookie[${i}]: 未找到 = 符号，跳过`);
      continue;
    }
    
    const name = trimmed.substring(0, equalIndex).trim();
    const value = trimmed.substring(equalIndex + 1).trim();
    
    console.log(`[Cookie 解析] Cookie[${i}]: name="${name}", value长度=${value.length}`);
    
    if (name === 'token') {
      if (value) {
        try {
          const decoded = decodeURIComponent(value);
          console.log('[Cookie 解析] ✅ 找到 token，长度:', decoded.length);
          return decoded;
        } catch (e) {
          console.log('[Cookie 解析] ⚠️ token 解码失败:', e);
          // 如果解码失败，返回原始值
          return value;
        }
      } else {
        console.log('[Cookie 解析] ⚠️ 找到 token 但值为空');
      }
    }
  }
  
  console.log('[Cookie 解析] ❌ 未找到 token');
  return null;
}

/**
 * 检查 cookie 中是否有 token
 * 
 * @returns boolean 返回 true 表示 cookie 中有 token
 */
export function hasToken(): boolean {
  return getTokenFromCookie() !== null;
}

/**
 * 刷新 Access Token
 * 使用 Refresh Token（从 httpOnly cookie 中自动获取）刷新 Access Token
 * 
 * 注意：此函数使用原生 fetch，避免与 http 函数的循环依赖
 * 
 * @returns Promise<boolean> 返回 true 表示刷新成功，false 表示刷新失败
 */
export async function refreshToken(): Promise<boolean> {
  console.log('[Token 刷新] ========================================');
  console.log('[Token 刷新] 开始刷新 Access Token');
  
  try {
    // 使用原生 fetch 调用后端刷新接口，避免与 http 函数的循环依赖
    // Refresh Token 会自动从 httpOnly cookie 中发送到服务器
    const response = await fetch('/api/auth/refresh', {
      method: 'POST',
      credentials: 'include', // 确保发送 cookie
    });

    if (!response.ok) {
      if (response.status === 401) {
        console.log('[Token 刷新] ❌ Refresh Token 无效或已过期，需要重新登录');
      } else {
        console.log('[Token 刷新] ❌ Token 刷新失败，HTTP 状态:', response.status);
      }
      return false;
    }

    const data = await response.json() as {
      success: boolean;
      message: string;
      data: {
        token: string;
        expiresAt: number;
      } | null;
    };

    console.log('[Token 刷新] 接口响应:', {
      success: data.success,
      message: data.message,
      hasData: !!data.data,
    });

    if (data.success && data.data) {
      console.log('[Token 刷新] ✅ Token 刷新成功');
      // Token 已经通过 Set-Cookie 响应头自动更新到浏览器 cookie 中
      // 保存新的过期时间，用于定时刷新
      if (data.data.expiresAt) {
        tokenExpiresAt = data.data.expiresAt;
        console.log('[Token 刷新] 保存新的过期时间:', new Date(tokenExpiresAt).toLocaleString());
        // 重新计算并启动定时刷新
        scheduleTokenRefresh();
      }
      return true;
    } else {
      console.log('[Token 刷新] ❌ Token 刷新失败:', data.message);
      return false;
    }
  } catch (error: any) {
    console.log('[Token 刷新] ❌ Token 刷新异常:', {
      message: error?.message,
      error: error,
    });
    return false;
  }
}

/**
 * 计算并启动定时刷新
 * 根据 token 过期时间，在过期前 5 分钟自动刷新
 */
function scheduleTokenRefresh(): void {
  // 清除旧的定时器
  if (refreshTimer !== null) {
    clearTimeout(refreshTimer);
    refreshTimer = null;
  }

  // 如果没有过期时间，无法计算刷新时间
  if (!tokenExpiresAt) {
    console.log('[定时刷新] ⚠️ 没有 token 过期时间，无法启动定时刷新');
    return;
  }

  const now = Date.now();
  const timeUntilExpiry = tokenExpiresAt - now;

  // 如果已经过期，立即刷新
  if (timeUntilExpiry <= 0) {
    console.log('[定时刷新] ⚠️ Token 已过期，立即刷新');
    refreshToken().catch(err => {
      console.error('[定时刷新] 刷新失败:', err);
    });
    return;
  }

  // 计算刷新时间：优先在过期前 5 分钟刷新
  // 但如果这样会导致在 30 分钟内刷新（违反最小刷新间隔），则立即刷新
  const desiredRefreshTime = timeUntilExpiry - REFRESH_BEFORE_EXPIRY_MS;
  let refreshTime: number;
  if (desiredRefreshTime < MIN_REFRESH_INTERVAL_MS) {
    // 如果按过期前5分钟刷新会在30分钟内，则立即刷新（避免过期风险）
    refreshTime = 0;
  } else {
    // 距离过期时间足够长，在过期前 5 分钟刷新
    refreshTime = desiredRefreshTime;
  }

  console.log('[定时刷新] 已安排刷新:', {
    过期时间: new Date(tokenExpiresAt).toLocaleString(),
    距离过期: Math.round(timeUntilExpiry / 1000 / 60) + ' 分钟',
    刷新时间: new Date(now + refreshTime).toLocaleString(),
    距离刷新: Math.round(refreshTime / 1000 / 60) + ' 分钟',
  });

  refreshTimer = window.setTimeout(async () => {
    console.log('[定时刷新] ⏰ 定时刷新触发，开始刷新 Token');
    const refreshed = await refreshToken();
    if (!refreshed) {
      console.log('[定时刷新] ❌ 定时刷新失败，将在 30 分钟后重试');
      // 刷新失败，30 分钟后重试
      refreshTimer = window.setTimeout(() => {
        scheduleTokenRefresh();
      }, MIN_REFRESH_INTERVAL_MS);
    }
    // 如果刷新成功，refreshToken 函数内部会调用 scheduleTokenRefresh 重新安排
  }, refreshTime);
}

/**
 * 启动定时刷新服务
 * 应该在应用启动时调用，或者在登录成功后调用
 */
export function startTokenRefreshTimer(): void {
  if (isRefreshTimerStarted) {
    console.log('[定时刷新] ⚠️ 定时刷新服务已启动，跳过');
    return;
  }

  console.log('[定时刷新] 🚀 启动定时刷新服务');
  isRefreshTimerStarted = true;

  // 如果已经有过期时间，立即安排刷新
  if (tokenExpiresAt) {
    scheduleTokenRefresh();
  } else {
    // 否则，先检查认证状态
    checkAuthStatus().then(async isAuthenticated => {
      if (isAuthenticated) {
        // 如果已登录但没有过期时间，尝试刷新一次以获取过期时间
        // 这样可以确保定时刷新机制能够正常工作
        if (!tokenExpiresAt) {
          console.log('[定时刷新] 已登录但无过期时间，主动刷新一次以获取过期时间');
          await refreshToken();
        }
        // 如果现在有过期时间了，安排刷新
        if (tokenExpiresAt) {
          scheduleTokenRefresh();
        }
      }
    });
  }

  // 监听页面可见性变化，当页面重新可见时重新计算刷新时间
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && tokenExpiresAt) {
      console.log('[定时刷新] 📄 页面重新可见，重新计算刷新时间');
      scheduleTokenRefresh();
    }
  });
}

/**
 * 停止定时刷新服务
 * 应该在登出时调用
 */
export function stopTokenRefreshTimer(): void {
  console.log('[定时刷新] 🛑 停止定时刷新服务');
  if (refreshTimer !== null) {
    clearTimeout(refreshTimer);
    refreshTimer = null;
  }
  tokenExpiresAt = null;
  isRefreshTimerStarted = false;
}

/**
 * 设置 token 过期时间
 * 通常在登录成功或刷新成功后调用
 */
export function setTokenExpiresAt(expiresAt: number): void {
  tokenExpiresAt = expiresAt;
  console.log('[定时刷新] 设置 token 过期时间:', new Date(expiresAt).toLocaleString());
  if (isRefreshTimerStarted) {
    scheduleTokenRefresh();
  }
}

