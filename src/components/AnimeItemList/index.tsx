import { Image } from 'expo-image';
import React from 'react';
import { AnimeItemListProps } from './model';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const AnimeItemList = ({ data }: AnimeItemListProps) => {
  const navigation = useNavigation();
  return (
    <Card
      onPress={() => navigation.navigate('Details', { id: data.mal_id })}
      testID="anime-item">
      <Card.Content style={styles.container}>
        <Image
          source={data.images.jpg.small_image_url}
          style={{ width: 60, height: 60, borderRadius: 60 }}
          placeholder={blurhash}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.titleText}>{data.title ?? '-'}</Text>
          <Text style={styles.ratingText}>{data.rating ?? '-'}</Text>
          <Text>Score: {data.score ?? '-'}</Text>
          <Text style={styles.yearText}>{data.year ?? '-'}</Text>
        </View>
      </Card.Content>
    </Card>
  );
};
export default AnimeItemList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    padding: 20,
    alignItems: 'center',
  },
  rightContainer: {
    marginLeft: 10,
    width: '100%',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    width: '80%',
  },
  ratingText: {
    fontSize: 14,
    marginBottom: 4,
  },
  yearText: {
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 2,
  },
});
