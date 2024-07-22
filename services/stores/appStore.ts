import { create } from "zustand";

interface AppState {
  isLoading: boolean;
  language: string;
}

const initialState: AppState = {
  isLoading: true,
  language: "en",
};

export const useAppStore = create<AppState>((set, get) => ({
  ...initialState,
  changeLang: (payload: string) => set({ language: payload }),
}));
