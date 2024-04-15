const { create } = require('zustand');

export const counterStore = create((set) => ({
  num: 0,
  setIncreseNum: () => set((state) => ({ num: state.num + 1 })),
  setDecreseNum: () => set((state) => ({ num: state.num - 1 })),
}));
