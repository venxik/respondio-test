import {Image} from 'expo-image';
import React from 'react';
import {AnimeItemListProps} from './model';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-paper';

const AnimeItemList = ({data}: AnimeItemListProps) => {
  return (
    <Card>
      <Card.Content style={styles.container}>
        <Image
          source={data.images.jpg.small_image_url}
          style={{width: 60, height: 60, borderRadius: 60}}
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
