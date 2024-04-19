import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FlatlistEmpty = () => {
  return (
    <View style={styles.emptyContainer}>
      <Text>No Anime Available!</Text>
    </View>
  );
};
export default FlatlistEmpty;

const styles = StyleSheet.create({
  emptyContainer: {alignItems: 'center', marginTop: 40},
});
