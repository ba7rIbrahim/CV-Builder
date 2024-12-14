import { create } from "zustand";

interface UIState {
  currentLanguage: 'english' | 'arabic';
  toggleLanguage: () => void
  componentVisible: 'welcomePage' | 'formPage';
  toggleComponent: () => void
}


export const useUIStore = create<UIState>((set) => ({
  currentLanguage: 'english',
  toggleLanguage: () =>
    set((state) => ({
      currentLanguage: state.currentLanguage === "english" ? "arabic" : "english"
    })),
  componentVisible: 'welcomePage',
  toggleComponent: () =>
    set((state) => ({
      componentVisible: state.componentVisible === 'welcomePage' ? 'formPage' : 'welcomePage'
    }))
}))