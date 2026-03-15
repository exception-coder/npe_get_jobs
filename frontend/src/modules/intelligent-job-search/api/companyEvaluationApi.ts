import { http, httpJson } from '@/api/http';

/** 风险标识（与后端 RiskFlags 一致） */
export interface RiskFlags {
  is_outsourcing?: boolean;
  is_training_company?: boolean;
  is_shell_company?: boolean;
  is_recruitment_agency?: boolean;
  is_fake_headhunter_job?: boolean;
  is_project_based_company?: boolean;
  is_high_turnover_company?: boolean;
  is_startup_high_risk?: boolean;
  is_financial_risk_company?: boolean;
  is_grey_industry?: boolean;
  is_overwork_company?: boolean;
  is_job_scam?: boolean;
}

/** 维度得分（与后端 DimensionScores 一致） */
export interface DimensionScores {
  company_stability?: number;
  shareholder_background?: number;
  industry_outlook?: number;
  business_stability?: number;
  company_reputation?: number;
  work_system?: number;
  salary_benefits?: number;
  career_stability?: number;
}

/** 单条评估结果（与后端 CompanyEvaluationResult 一致） */
export interface CompanyEvaluationResult {
  company_name?: string;
  /** 欠薪风险结论 */
  pay_risk?: string;
  company_type?: string;
  /** 综合风险评分 0-10，越高越靠谱 */
  risk_score?: number;
  /** 判断依据简述 */
  reason?: string;
  evaluation_time?: string;
  safe_to_apply?: boolean;
  risk_flags?: RiskFlags;
  dimension_scores?: DimensionScores;
  total_score?: number;
  recommendation_level?: string;
  recommendation_code?: string;
  main_advantages?: string[];
  main_risks?: string[];
  delivery_advice?: string;
  summary?: string;
  raw_company_info?: string;
}

/** 分页列表项 */
export interface CompanyEvaluationListItem {
  id: number;
  company_info: string;
  result: CompanyEvaluationResult | null;
  created_at: string;
}

/** 分页响应 */
export interface CompanyEvaluationPageResponse {
  content: CompanyEvaluationListItem[];
  total_elements: number;
  total_pages: number;
  number: number;
  size: number;
}

/** 评估接口响应：含入库记录 ID 与评估结果 */
export interface CompanyEvaluationEvaluateResponse {
  record_id?: number | null;
  result: CompanyEvaluationResult;
}

/** 发起评估（可选传入本次使用的平台和模型），结果会入库并返回 record_id */
export async function evaluateCompany(
  companyName: string,
  platform?: string | null,
  model?: string | null
): Promise<CompanyEvaluationEvaluateResponse> {
  const body: { companyName: string; platform?: string; model?: string } = {
    companyName: companyName.trim(),
  };
  if (platform?.trim()) {
    body.platform = platform.trim();
  }
  if (model?.trim()) {
    body.model = model.trim();
  }
  const res = await httpJson<CompanyEvaluationEvaluateResponse>('/api/ai/company/evaluate', {
    method: 'POST',
    body: JSON.stringify(body),
  });
  return res;
}

/** 分页查询评估记录 */
export async function fetchCompanyEvaluationPage(
  page: number,
  size: number
): Promise<CompanyEvaluationPageResponse> {
  const url = `/api/ai/company/list?page=${page}&size=${size}`;
  return http<CompanyEvaluationPageResponse>(url);
}

/** 删除结果 */
export interface CompanyEvaluationDeleteResponse {
  deleted: number;
}

/** 按 ID 列表删除（勾选删除） */
export async function deleteCompanyEvaluationsByIds(ids: number[]): Promise<CompanyEvaluationDeleteResponse> {
  if (!ids.length) return { deleted: 0 };
  const params = new URLSearchParams();
  ids.forEach((id) => params.append('ids', String(id)));
  return http<CompanyEvaluationDeleteResponse>(`/api/ai/company/records?${params.toString()}`, {
    method: 'DELETE',
  });
}

/** 全部删除 */
export async function deleteAllCompanyEvaluations(): Promise<CompanyEvaluationDeleteResponse> {
  return http<CompanyEvaluationDeleteResponse>('/api/ai/company/records/all', {
    method: 'DELETE',
  });
}
