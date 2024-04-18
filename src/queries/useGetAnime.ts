import {AnimeItem, ApiResponse} from '@Model/api';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

type GetAnimeParam = {
  status: 'airing' | 'complete' | 'upcoming';
};

const fetchAnime = async (
  params: GetAnimeParam,
): Promise<ApiResponse<AnimeItem[]>> => {
  const {data} = await axios.get('https://api.jikan.moe/v4/anime', {
    params: params,
  });
  return data;
};

export const useGetAnime = (params: GetAnimeParam) => {
  return useQuery<ApiResponse<AnimeItem[]>, Error>({
    queryKey: ['anime', params.status],
    queryFn: () => fetchAnime(params),
  });
};
