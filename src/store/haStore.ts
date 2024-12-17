import { create } from 'zustand';
import { HAConfig, defaultConfig } from '../config/haConfig';

interface HAStore {
  config: HAConfig;
  setConfig: (config: Partial<HAConfig>) => void;
  isPinging: boolean;
  setIsPinging: (isPinging: boolean) => void;
  pingResult: string | null;
  setPingResult: (result: string | null) => void;
}

export const useHAStore = create<HAStore>((set) => ({
  config: defaultConfig,
  setConfig: (newConfig) =>
    set((state) => ({
      config: { ...state.config, ...newConfig },
    })),
  isPinging: false,
  setIsPinging: (isPinging) => set({ isPinging }),
  pingResult: null,
  setPingResult: (result) => set({ pingResult: result }),
}));