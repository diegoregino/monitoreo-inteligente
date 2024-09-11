import { create, StateCreator } from 'zustand';
import { PopupType } from '../types/types';
import { persist } from 'zustand/middleware';

type PopupState = {
  popups: PopupType[];
  setPopups: (popup: PopupType[]) => void;
};

const storePopup: StateCreator<PopupState> = (set) => ({
  popups: [],
  setPopups: (popups: PopupType[]) => set({ popups }),
});

export const usePopupStore = create<PopupState>()(
  persist(storePopup, { name: 'popup-list' })
);
