import { ref, type Ref } from 'vue';

export interface TeamSpreadsheetState {
  containerRef: Ref<HTMLDivElement | null>;
  activeDocumentId: Ref<number | null>;
  initializing: Ref<boolean>;
  autoSaving: Ref<boolean>;
  lastSavedAt: Ref<Date | null>;
  currentDocumentTitle: Ref<string | null>;
}

let instance: TeamSpreadsheetState | null = null;

export const useTeamSpreadsheetState = (): TeamSpreadsheetState => {
  if (!instance) {
    instance = {
      containerRef: ref<HTMLDivElement | null>(null),
      activeDocumentId: ref<number | null>(null),
      initializing: ref(false),
      autoSaving: ref(false),
      lastSavedAt: ref<Date | null>(null),
      currentDocumentTitle: ref<string | null>(null),
    };
  }
  return instance;
};

