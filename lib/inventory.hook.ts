import { create } from 'zustand';

interface AddInventoryStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useAddInventory = create<AddInventoryStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAddInventory;
