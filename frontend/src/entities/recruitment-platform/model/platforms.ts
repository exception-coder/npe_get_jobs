export interface RecruitmentPlatform {
  id: string;
  title: string;
  icon: string;
}

export type PlatformCode = 'boss' | 'zhilian' | 'job51' | 'liepin';

interface PlatformDescriptorResponse {
  id: string;
  displayName: string;
  icon: string;
}

export interface BrowserHealth {
  available: boolean;
  engine: string;
  version: string;
}

export const builtInPlatforms: RecruitmentPlatform[] = [
  { id: 'boss', title: 'BOSS直聘', icon: 'mdi mdi-briefcase-account' },
  { id: 'zhilian', title: '智联招聘', icon: 'mdi mdi-city' },
  { id: 'job51', title: '前程无忧', icon: 'mdi mdi-account-tie' },
  { id: 'liepin', title: '猎聘', icon: 'mdi mdi-target-account' },
];

export async function loadRecruitmentPlatforms(): Promise<RecruitmentPlatform[]> {
  const response = await fetch('/api/recruitment/platforms');
  if (!response.ok) throw new Error(`加载招聘平台失败: ${response.status}`);
  const descriptors = await response.json() as PlatformDescriptorResponse[];
  return descriptors.map(({ id, displayName, icon }) => ({
    id,
    title: displayName,
    icon: icon.startsWith('mdi ') ? icon : `mdi ${icon}`,
  }));
}

export async function loadBrowserHealth(): Promise<BrowserHealth> {
  const response = await fetch('/api/recruitment/browser/health');
  if (!response.ok) throw new Error(`浏览器服务不可用: ${response.status}`);
  return response.json() as Promise<BrowserHealth>;
}
