async function postProjectOptimization(url, payload) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const errorText = await safeReadError(response)
    throw new Error(errorText || `AI 接口调用失败（${response.status}）`)
  }

  return response.json()
}

export async function optimizeProjectDescription(payload) {
  return postProjectOptimization('/api/ai/project/description/optimize', payload)
}

export async function optimizeProjectAchievement(payload) {
  return postProjectOptimization('/api/ai/project/achievement/optimize', payload)
}

async function safeReadError(response) {
  try {
    const data = await response.json()
    if (data?.message) {
      return data.message
    }
    if (data?.error) {
      return data.error
    }
    return JSON.stringify(data)
  } catch (_) {
    try {
      return await response.text()
    } catch (error) {
      console.error('读取 AI 接口错误信息失败', error)
      return ''
    }
  }
}


