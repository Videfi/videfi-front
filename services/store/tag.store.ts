import { create } from "zustand";

interface TagStore {
  id: string;
  name: string;
  setTag: ({ id, name }: { id: string; name: string }) => void;
}

export const useTagStore = create<TagStore>((set) => ({
  id: "all",
  name: "All",
  setTag: ({ id, name }) => set(() => ({ id, name })),
}));
