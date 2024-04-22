import AnimeItemList from '@Components/AnimeItemList';
import FlatlistEmpty from '@Components/FlatlistEmpty';
import FlatlistError from '@Components/FlatlistError';
import FlatlistLoading from '@Components/FlatlistLoading';
import { AnimeItem } from '@Model/api';
import { useGetAnime } from '@Queries/useGetAnime';
import { debounce } from '@Utils/debounce';
import React, { useCallback, useMemo, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';

const UpcomingScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [queryValue, setQueryValue] = useState('');

  const {
    data,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading: isLoadingQuery,
  } = useGetAnime({ status: 'upcoming', q: queryValue });

  const animeData = useMemo(
    () => data?.pages.flatMap((page) => page.data),
    [data],
  );

  const loadMoreData = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, fetchNextPage]);

  const renderItem = useCallback(({ item }: { item: AnimeItem }) => {
    return <AnimeItemList data={item} />;
  }, []);

  const debouncedSearch = debounce(setQueryValue, 2000);

  const handleSearch = (text: string) => {
    setSearchValue(text);
    debouncedSearch(text);
  };

  const renderHeaderComponent = useCallback(() => {
    return (
      <Searchbar
        value={searchValue}
        placeholder={'Search Anime'}
        onChangeText={handleSearch}
        style={styles.searchContainer}
      />
    );
  }, [searchValue]);

  const renderSeparator = useCallback(() => {
    return <View style={{ height: 6 }} />;
  }, []);

  const renderIsFetchingMore = useCallback(() => {
    if (isFetchingNextPage) {
      return renderLoadingIndicator();
    } else return null;
  }, [isFetchingNextPage]);

  const renderLoadingIndicator = useCallback(() => {
    return <FlatlistLoading />;
  }, []);

  const renderEmpty = useCallback(() => {
    if (isLoadingQuery) {
      return renderLoadingIndicator();
    }
    return <FlatlistEmpty />;
  }, [isLoadingQuery]);

  const renderError = useCallback(() => {
    return <FlatlistError message={error?.message} />;
  }, []);

  return (
    <View style={styles.container}>
      {!animeData && error && renderError()}
      <View style={{ flex: 1, width: '100%', height: '100%' }}>
        {renderHeaderComponent()}
        <FlatList
          data={animeData}
          renderItem={renderItem}
          keyExtractor={(item) => item.mal_id.toString()}
          style={styles.flatlistContainer}
          contentContainerStyle={{ paddingBottom: 20 }}
          ListEmptyComponent={renderEmpty}
          ListFooterComponent={renderIsFetchingMore}
          ItemSeparatorComponent={renderSeparator}
          onEndReached={loadMoreData}
          scrollEventThrottle={16}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatlistContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 10,
  },
  searchContainer: { margin: 10 },
});

export default UpcomingScreen;
