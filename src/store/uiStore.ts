import { create } from "zustand";

interface UIState {
  currentLanguage: 'english' | 'arabic';
  toggleLanguage: () => void
  componentVisible: 'welcomePage' | 'formPage';
  toggleComponent: () => void
  dateRange: [Date | null, Date | null],
  setDatesRange: (dates: [Date | null, Date | null]) => void
  collegeDate: [Date | null, Date | null],
  setCollegeDate: (dates: [Date | null, Date | null]) => void
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
    })),
  dateRange: [null, null],
  setDatesRange: (dates) => set({ dateRange: dates }),
  collegeDate: [null, null],
  setCollegeDate: (dates) => set({ collegeDate: dates })
}))