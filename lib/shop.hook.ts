import { create } from 'zustand';

interface ShopStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useShop = create<ShopStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useShop;
