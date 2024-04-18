import AnimeItemList from '@Components/AnimeItemList';
import {AnimeItem} from '@Model/api';
import {useGetAnime} from 'queries/useGetAnime';
import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {ActivityIndicator, Searchbar} from 'react-native-paper';

const CompleteScreen = () => {
  const [searchValue, setsearchValue] = useState('');

  const {data, error} = useGetAnime({status: 'complete'});

  const renderItem = useCallback(({item}: {item: AnimeItem}) => {
    return <AnimeItemList data={item} />;
  }, []);

  const renderHeaderComponent = useCallback(() => {
    return (
      <View>
        <Searchbar
          value={searchValue}
          placeholder={'Search Anime'}
          onChangeText={setsearchValue}
          style={styles.searchContainer}
          // onIconPress={() => fetchData(true)}
          // onSubmitEditing={() => fetchData(true)}
        />
      </View>
    );
  }, [searchValue]);

  const renderSeparator = useCallback(() => {
    return <View style={{height: 6}} />;
  }, []);

  const renderLoadingIndicator = useCallback(() => {
    return (
      <View style={styles.loadingIndicator}>
        <ActivityIndicator size={30} />
      </View>
    );
  }, []);

  const renderEmpty = useCallback(() => {
    return (
      <View style={styles.emptyContainer}>
        <Text>No Anime Available!</Text>
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      {data?.data && (
        <FlatList
          data={data?.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.mal_id.toString()}
          style={styles.flatlistContainer}
          ListHeaderComponent={renderHeaderComponent}
          ListEmptyComponent={renderEmpty}
          ListFooterComponent={renderLoadingIndicator}
          ItemSeparatorComponent={renderSeparator}
        />
      )}
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
    width: '100%',
    height: '100%',
    paddingHorizontal: 10,
  },
  searchContainer: {marginVertical: 10},
  emptyContainer: {alignItems: 'center', marginTop: 40},
  loadingIndicator: {paddingVertical: 10, justifyContent: 'center'},
});

export default CompleteScreen;
