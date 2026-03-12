const isBrowser = typeof window !== 'undefined'

export const copyTextToClipboard = async (text) => {
  if (!text || !isBrowser) return
  if (window.navigator?.clipboard?.writeText) {
    try {
      await window.navigator.clipboard.writeText(text)
      return
    } catch (error) {
      console.error('复制到剪贴板失败', error)
    }
  }

  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'absolute'
  textarea.style.left = '-9999px'
  document.body.appendChild(textarea)
  textarea.select()
  try {
    document.execCommand('copy')
  } catch (error) {
    console.error('复制到剪贴板失败', error)
  } finally {
    document.body.removeChild(textarea)
  }
}

export const applySuggestedPersonalTitle = (resume, aiResult) => {
  const title = aiResult?.inferredJobTitle
  if (!title) return
  resume.personalInfo.title = title
}

export const applySuggestedExperience = (resume, aiResult) => {
  const experience = aiResult?.experienceRange
  if (!experience) return
  resume.personalInfo.experience = experience
}

export const applySuggestedTechStack = (resume, aiResult, mergeUnique) => {
  const techStack = aiResult?.techStack
  if (!Array.isArray(techStack) || !techStack.length) return
  mergeUnique(resume.personalInfo.coreSkills, techStack)
}

export const applySuggestedEssentialStrengths = (resume, aiResult, mergeUnique) => {
  const strengths = aiResult?.essentialStrengths
  if (!Array.isArray(strengths) || !strengths.length) return
  mergeUnique(resume.strengths, strengths)
}

export const applySuggestedRelatedDomains = (resume, aiResult, mergeUnique) => {
  const domains = aiResult?.relatedDomains
  if (!Array.isArray(domains) || !domains.length) return
  mergeUnique(resume.strengths, domains)
}

export const applySuggestedDesiredRoleTitle = (resume, aiResult) => {
  const title = aiResult?.inferredJobTitle
  if (!title) return
  resume.desiredRole.title = title
}

export const applySuggestedHotIndustries = (resume, aiResult, mergeUnique) => {
  const industries = aiResult?.hotIndustries
  if (!Array.isArray(industries) || !industries.length) return
  mergeUnique(resume.desiredRole.industries, industries)
}
