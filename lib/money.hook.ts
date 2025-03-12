import { create } from 'zustand';

interface MoneyStore {
  money: number;
  getMoney: () => number;
  addMoney: (amount: number) => void;
  spendMoney: (amount: number) => void;
}

const useMoney = create<MoneyStore>((set, get) => ({
  money: 0,
  getMoney: () => get().money,
  addMoney: (amount) => set((state) => ({ money: state.money + amount })),
  spendMoney: (amount) => set((state) => ({ money: state.money - amount })),
}));

export default useMoney;
