export async function analyzeJobSkill(payload) {
  const response = await fetch('/api/ai/job-skill/analyze', {
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

async function safeReadError(response) {
  try {
    const data = await response.json()
    if (data?.message) {
      return data.message
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

