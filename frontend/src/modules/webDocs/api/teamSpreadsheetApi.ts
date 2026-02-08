import { http, httpJson } from '@/api/http';

const BASE_URL = '/api/webdocs/team-spreadsheets';

export interface TeamSpreadsheetDocumentPayload {
  title: string;
  description?: string;
  content: string;
  remark?: string;
}

export interface TeamSpreadsheetDocumentResponse {
  id: number;
  title: string;
  description?: string | null;
  content: string;
  remark?: string | null;
  createdAt: string;
  updatedAt?: string | null;
}

export interface TeamSpreadsheetTableResponse {
  documentId: number;
  documentTitle: string;
  sheetId: string;
  sheetName: string;
  headers: string[];
  rows: string[][];
}

export const listTeamSpreadsheetDocuments = async (): Promise<TeamSpreadsheetDocumentResponse[]> => {
  return http<TeamSpreadsheetDocumentResponse[]>(BASE_URL);
};

export const fetchTeamSpreadsheetDocument = async (
  documentId: number,
): Promise<TeamSpreadsheetDocumentResponse> => {
  return http<TeamSpreadsheetDocumentResponse>(`${BASE_URL}/${documentId}`);
};

export const fetchTeamSpreadsheetTable = async (
  documentId: number,
): Promise<TeamSpreadsheetTableResponse> => {
  return http<TeamSpreadsheetTableResponse>(`${BASE_URL}/${documentId}/table`);
};

export const createTeamSpreadsheetDocument = async (
  payload: TeamSpreadsheetDocumentPayload,
): Promise<TeamSpreadsheetDocumentResponse> => {
  return httpJson<TeamSpreadsheetDocumentResponse>(BASE_URL, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
};

export const updateTeamSpreadsheetDocument = async (
  documentId: number,
  payload: TeamSpreadsheetDocumentPayload,
): Promise<TeamSpreadsheetDocumentResponse> => {
  return httpJson<TeamSpreadsheetDocumentResponse>(`${BASE_URL}/${documentId}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  });
};

export const deleteTeamSpreadsheetDocument = async (
  documentId: number,
  title?: string,
): Promise<void> => {
  const query = title ? `?${new URLSearchParams({ title }).toString()}` : '';
  await httpJson<void>(`${BASE_URL}/${documentId}${query}`, {
    method: 'DELETE',
  });
};

export const importTeamSpreadsheetDocument = async (
  formData: FormData,
): Promise<TeamSpreadsheetDocumentResponse> => {
  return http<TeamSpreadsheetDocumentResponse>(`${BASE_URL}/import`, {
    method: 'POST',
    body: formData,
  });
};

