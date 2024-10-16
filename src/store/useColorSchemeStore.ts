import { create } from 'zustand';
import { ColorSet, ColorMode } from '../lib/colorSchemes';

type ColorSchemeStore = {
  currentSet: ColorSet;
  currentMode: ColorMode;
  setColorSet: (set: ColorSet) => void;
  setColorMode: (mode: ColorMode) => void;
};

export const useColorSchemeStore = create<ColorSchemeStore>((set) => ({
  currentSet: 'slate',
  currentMode: 'light',
  setColorSet: (newSet) => set({ currentSet: newSet }),
  setColorMode: (newMode) => set({ currentMode: newMode }),
}));
