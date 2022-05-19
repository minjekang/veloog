import create from "zustand";

export const loginStore = create((set) => ({
  signUp: false,
  setSignUp: () => set((state) => ({ signUp: !state.signUp })),
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
