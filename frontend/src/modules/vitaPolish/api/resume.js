const API_BASE_URL = '/api/resume'

/**
 * 安全读取错误信息
 */
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
      console.error('读取接口错误信息失败', error)
      return ''
    }
  }
}

/**
 * 保存简历
 */
export const saveResume = async (resumeData) => {
  const response = await fetch(`${API_BASE_URL}/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(resumeData),
  })

  if (!response.ok) {
    const errorText = await safeReadError(response)
    throw new Error(errorText || `保存简历失败（${response.status}）`)
  }

  return response.json()
}

/**
 * 根据ID查询简历
 */
export const getResumeById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    const errorText = await safeReadError(response)
    throw new Error(errorText || `查询简历失败（${response.status}）`)
  }

  return response.json()
}

/**
 * 查询所有简历
 */
export const getAllResumes = async () => {
  const response = await fetch(`${API_BASE_URL}/list`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    const errorText = await safeReadError(response)
    throw new Error(errorText || `查询简历列表失败（${response.status}）`)
  }

  return response.json()
}

/**
 * 根据姓名搜索简历
 */
export const searchResumes = async (name) => {
  const response = await fetch(`${API_BASE_URL}/search?name=${encodeURIComponent(name)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    const errorText = await safeReadError(response)
    throw new Error(errorText || `搜索简历失败（${response.status}）`)
  }

  return response.json()
}

/**
 * 删除简历
 */
export const deleteResume = async (id) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    const errorText = await safeReadError(response)
    throw new Error(errorText || `删除简历失败（${response.status}）`)
  }

  return response.json()
}

