import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const FlatlistEmpty = () => {
  return (
    <View style={styles.emptyContainer} testID="flatlist-empty">
      <Ionicons name="folder-open-sharp" size={50} color="black" />
      <Text>No Anime Available!</Text>
    </View>
  );
};
export default FlatlistEmpty;

const styles = StyleSheet.create({
  emptyContainer: { alignItems: 'center', marginTop: 40 },
});
