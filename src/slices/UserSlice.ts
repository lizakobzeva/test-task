import { create } from "zustand";

interface UserDataType {
  username: string;
  email: string;
  setUserData: (username: string, email: string) => void;
  removeUser: () => void;
}

const useUserData = create<UserDataType>()((set) => ({
  username: "",
  email: "",
  setUserData: (username: string, email: string) =>
    set(() => ({ username: username, email: email })),
  removeUser: () => set({ username: "", email: "" }),
}));

export default useUserData;
