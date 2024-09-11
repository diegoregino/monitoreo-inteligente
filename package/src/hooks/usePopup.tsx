import { PopupType } from '../types/types';
import { usePopupStore } from '../store/popup.store';

export const usePopup = () => {
  const popups = usePopupStore((state) => state.popups);
  const setPopups = usePopupStore((state) => state.setPopups);

  const addPopup = (type: 'A' | 'B') => {
    const newPopup: PopupType = { id: popups.length, type };
    setPopups([...popups, newPopup]);
  };

  const deletePopup = (id: number) => {
    setPopups(popups.filter((popup: PopupType) => popup.id !== id));
  };

  const deleteAll = () => {
    setPopups([]);
  };

  return { popups, addPopup, deletePopup, deleteAll };
};
