import { create } from "zustand";

export interface WalletState {
  balance: number;
  pendingBalance: number;
  activeStreams: number;
  addFunds: (amount: number) => void;
  reserveFunds: (amount: number) => boolean;
  completeStream: () => void;
  startStream: () => void;
}

export const useAppStore = create<WalletState>((set, get) => ({
  balance: 1248.5,
  pendingBalance: 0,
  activeStreams: 0,
  addFunds: (amount) => set((state) => ({ balance: state.balance + amount })),
  reserveFunds: (amount) => {
    if (get().balance < amount) return false;
    set((state) => ({ balance: state.balance - amount, pendingBalance: state.pendingBalance + amount }));
    return true;
  },
  startStream: () => set((state) => ({ activeStreams: state.activeStreams + 1 })),
  completeStream: () => set((state) => ({ activeStreams: Math.max(0, state.activeStreams - 1) })),
}));
