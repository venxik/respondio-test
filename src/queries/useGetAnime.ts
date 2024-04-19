import { AnimeItem, ApiResponse } from '@Model/api';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

type GetAnimeParam = {
  status: 'airing' | 'complete' | 'upcoming';
  page?: number;
  q: string;
};

const fetchAnime = async (
  params: GetAnimeParam,
): Promise<ApiResponse<AnimeItem[]>> => {
  const { data } = await axios.get('https://api.jikan.moe/v4/anime', {
    params,
  });
  return data;
};

export const useGetAnime = (params: GetAnimeParam) => {
  return useInfiniteQuery<ApiResponse<AnimeItem[]>, Error>({
    queryKey: ['anime', params.status, params.q],
    queryFn: ({ pageParam }) =>
      fetchAnime({ ...params, page: pageParam as number }),
    initialPageParam: 1,
    getNextPageParam: ({ pagination }) => {
      if (pagination.has_next_page) {
        return pagination.current_page + 1;
      } else {
        return undefined;
      }
    },
  });
};
