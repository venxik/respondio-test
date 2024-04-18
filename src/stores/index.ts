import {create} from 'zustand';

type State = {
  favorites: Record<string, string>[];
};

type Actions = {
  addFavorite: (qty: Record<string, string>) => void;
  removeFavorite: (id: string) => void;
};

const useStore = create<State & Actions>((set) => ({
  favorites: [],
  addFavorite: (newBears) =>
    set((prev) => ({favorites: [...prev.favorites, newBears]})),
  removeFavorite: (id) =>
    set((prev) => {
      const tempData = prev.favorites;
      const index = prev.favorites.findIndex((item) => item.id === id);
      if (index !== -1) {
        tempData.slice(index, 1);
      }
      return {favorites: tempData};
    }),
}));
