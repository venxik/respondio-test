import { AnimeItem } from '@Model/api';
import { create } from 'zustand';

type State = {
  favorites: AnimeItem[];
};

type Actions = {
  addFavorite: (anime: AnimeItem) => void;
  removeFavorite: (id: number) => void;
};

export const useFavoriteStore = create<State & Actions>((set) => ({
  favorites: [],
  addFavorite: (anime) =>
    set((prev) => ({ favorites: [...prev.favorites, anime] })),
  removeFavorite: (id) =>
    set((prev) => {
      const tempData = prev.favorites;
      const index = prev.favorites.findIndex((item) => item.mal_id === id);

      if (index !== -1) {
        tempData.splice(index, 1);
      }

      return { favorites: [...tempData] };
    }),
}));
