export interface HttpError extends Error {
  status: number;
  payload?: unknown;
}

async function parseResponse(response: Response): Promise<unknown> {
  const contentType = response.headers.get('content-type') ?? '';
  if (contentType.includes('application/json')) {
    return response.json();
  }
  return response.text();
}

async function executeRequest<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
  const response = await fetch(input, init);

  if (response.ok) {
    return (await parseResponse(response)) as T;
  }

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
