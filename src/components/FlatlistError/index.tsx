import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FlatlistError = ({message}: {message?: string}) => {
  return (
    <View style={styles.emptyContainer}>
      <Text>Error: {message}</Text>
    </View>
  );
};
export default FlatlistError;

const styles = StyleSheet.create({
  emptyContainer: {alignItems: 'center', marginTop: 40},
});
