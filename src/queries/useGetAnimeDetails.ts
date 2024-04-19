import { AnimeItem, ApiResponse } from '@Model/api';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchAnimeDetails = async (
  id: number,
): Promise<ApiResponse<AnimeItem[]>> => {
  const { data } = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
  return data;
};

export const useGetAnimeDetails = (id: number) => {
  return useQuery<ApiResponse<AnimeItem[]>, Error>({
    queryKey: ['animeDetail', id],
    queryFn: () => fetchAnimeDetails(id),
  });
};
