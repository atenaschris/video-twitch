import { create } from "zustand";
interface SidebarStoreState {
  collapsed: boolean;
}

interface SidebarStoreActions {
  onExpand: () => void;
  onCollapse: () => void;
}

export const useSidebarStore = create<SidebarStoreState & SidebarStoreActions>(
  (set) => ({
    collapsed: false,
    onExpand: () => set(() => ({ collapsed: false })),
    onCollapse: () => set(() => ({ collapsed: true })),
  })
);
