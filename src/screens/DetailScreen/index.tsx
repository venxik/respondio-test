import FlatlistError from '@Components/FlatlistError';
import FlatlistLoading from '@Components/FlatlistLoading';
import { RootStackScreenProps } from '@Model/navigation';
import { useGetAnimeDetails } from '@Queries/useGetAnimeDetails';
import { useFavoriteStore } from '@Stores';
import { Image } from 'expo-image';
import React, { useCallback, useMemo } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Button, Divider, Surface, Text } from 'react-native-paper';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const DetailScreen = ({ route }: RootStackScreenProps<'Details'>) => {
  const { id } = route.params;
  const { data, error, isLoading } = useGetAnimeDetails(id);
  const addFavorite = useFavoriteStore((state) => state.addFavorite);
  const favorites = useFavoriteStore((state) => state.favorites);
  const removeFavorite = useFavoriteStore((state) => state.removeFavorite);

  const animeData = data?.data;

  const isFavorite = useMemo(() => {
    const index = favorites.findIndex(
      (item) => item.mal_id === animeData?.mal_id,
    );

    if (index !== -1) return true;
    return false;
  }, [favorites]);

  const onFavoriteButtonPressed = () => {
    if (animeData) {
      if (!isFavorite) {
        addFavorite(animeData);
        return;
      }
      removeFavorite(animeData.mal_id);
    }
  };

  const buttonText = () => {
    if (isFavorite) return 'Remove from Favorite';
    return 'Add to Favorite 🤍';
  };

  return (
    <ScrollView style={styles.container}>
      {error && <FlatlistError message={error.message} />}
      {isLoading && <FlatlistLoading />}
      {animeData && (
        <Surface style={{ padding: 20, margin: 10, borderRadius: 10 }}>
          <Image
            contentFit="contain"
            source={animeData.images.jpg.image_url}
            style={{ width: '100%', height: 400 }}
            placeholder={blurhash}
          />
          <Divider style={styles.divider} />
          <Button
            mode="contained"
            onPress={onFavoriteButtonPressed}
            labelStyle={{ width: '100%' }}>
            {buttonText()}
          </Button>
          <Divider style={styles.divider} />
          <Text variant="headlineSmall">Title</Text>
          <Text variant="bodyLarge">{animeData.title}</Text>
          <Divider style={styles.divider} />
          <Text variant="headlineSmall">Rating</Text>
          <Text variant="bodyLarge">{animeData.rating ?? '-'}</Text>
          <Divider style={styles.divider} />
          <Text variant="headlineSmall">Score</Text>
          <Text variant="bodyLarge">{animeData.score ?? '-'}</Text>
          <Divider style={styles.divider} />
          <Text variant="headlineSmall">Year</Text>
          <Text variant="bodyLarge">{animeData.year ?? '-'}</Text>
          <Divider style={styles.divider} />
          <Text variant="headlineSmall">Synopsis</Text>
          <Text variant="bodyLarge">{animeData.synopsis}</Text>
        </Surface>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  divider: { marginVertical: 10 },
});

export default DetailScreen;
