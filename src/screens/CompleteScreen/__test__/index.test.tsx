import React from 'react';
import {
  render,
  waitFor,
  screen,
  renderHook,
} from '@testing-library/react-native';
import CompleteScreen from '..';
import { wrapper } from '../../../../__mocks__/wrapper';
import nock from 'nock';
import { useGetAnime } from '@Queries/useGetAnime';

const mockData = {
  data: [
    {
      mal_id: 1,
      url: 'string',
      images: {
        jpg: {
          image_url: 'www.goggle.com',
          small_image_url: 'string',
          large_image_url: 'string',
        },
        webp: {
          image_url: 'string',
          small_image_url: 'string',
          large_image_url: 'string',
        },
      },
      title: 'string',
      title_english: 'string',
      title_japanese: 'string',
      title_synonyms: ['string'],
      type: 'TV',
      source: 'string',
      episodes: 0,
      status: 'Finished Airing',
      airing: true,
      duration: 'string',
      rating: 'G - All Ages',
      score: 0,
      scored_by: 0,
      rank: 0,
      popularity: 0,
      members: 0,
      favorites: 0,
      synopsis: 'string',
      background: 'string',
      season: 'summer',
      year: 0,
    },
  ],
  pagination: {
    last_visible_page: 1,
    has_next_page: false,
    items: {
      count: 0,
      total: 0,
      per_page: 0,
    },
  },
};

describe('CompleteScreen', () => {
  it('can show 1 data', async () => {
    nock('https://api.jikan.moe/v4')
      .get('/anime')
      .query({ status: 'complete', page: 1, q: '' })
      .reply(200, mockData);

    const { result } = renderHook(
      () => useGetAnime({ status: 'complete', q: '' }),
      { wrapper },
    );

    render(wrapper({ children: <CompleteScreen /> }));

    expect(screen.getByTestId('flatlist-loading')).toBeDefined();

    await waitFor(() => {
      expect(screen.getByTestId('anime-item')).toBeDefined();
    });
  });

  it('can show empty data', async () => {
    nock('https://api.jikan.moe/v4')
      .get('/anime')
      .query({ status: 'complete', page: 1, q: '' })
      .reply(200, { data: [], pagination: { has_next_page: false } });

    const { result } = renderHook(
      () => useGetAnime({ status: 'complete', q: '' }),
      { wrapper },
    );

    render(wrapper({ children: <CompleteScreen /> }));

    await waitFor(() => {
      expect(screen.getByTestId('flatlist-empty')).toBeDefined();
    });
  });
});
