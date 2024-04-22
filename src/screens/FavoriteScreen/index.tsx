import AnimeItemList from '@Components/AnimeItemList';
import FlatlistEmpty from '@Components/FlatlistEmpty';
import { AnimeItem } from '@Model/api';
import { useFavoriteStore } from '@Stores';
import React, { useCallback } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

const FavoriteScreen = () => {
  const { favorites } = useFavoriteStore();

  const renderItem = useCallback(({ item }: { item: AnimeItem }) => {
    return <AnimeItemList data={item} />;
  }, []);

  const renderSeparator = useCallback(() => {
    return <View style={{ height: 6 }} />;
  }, []);

  const renderEmpty = useCallback(() => {
    return <FlatlistEmpty />;
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item) => item.mal_id.toString()}
        style={styles.flatlistContainer}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlistContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 10,
  },
});

export default FavoriteScreen;
