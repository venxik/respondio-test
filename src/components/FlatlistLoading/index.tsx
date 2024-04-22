import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const FlatlistLoading = () => {
  return (
    <View style={styles.loadingIndicator} testID="flatlist-loading">
      <ActivityIndicator size={30} />
    </View>
  );
};
export default FlatlistLoading;

const styles = StyleSheet.create({
  loadingIndicator: { paddingVertical: 10, justifyContent: 'center' },
});
