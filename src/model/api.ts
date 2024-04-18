export type ApiResponse<T> = {
  data: T;
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };
};

export type Nullable<T> = {
  status: T | null;
};

export type AnimeItem = {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  trailer: Record<any, any>;
  approved: boolean;
  titles: any[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: any[];
  type: 'TV';
  source: string;
  episodes: number;
  status: 'Finished Airing';
  airing: boolean;
  aired: Record<any, any>;
  duration: string;
  rating: 'G - All Ages';
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: 'summer';
  year: number;
  broadcast: Record<any, any>;
  producers: any[];
  licensors: any[];
  studios: any[];
  genres: any[];
  explicit_genres: any[];
  themes: any[];
  demographics: any[];
};
