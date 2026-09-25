import { create } from "zustand";
interface TrailerModalState {
  isOpen: boolean;
  videoId: string | null;
  title?: string;
  openTrailer: (videoId: string, title?: string) => void;
  closeTrailer: () => void;
}
export const useTrailerModal = create<TrailerModalState>((set) => ({
  isOpen: false,
  videoId: null,
  title: undefined,
  openTrailer: (videoId, title) => set({ isOpen: true, videoId, title }),
  closeTrailer: () => set({ isOpen: false, videoId: null, title: undefined }),
}));