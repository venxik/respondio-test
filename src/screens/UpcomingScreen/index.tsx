import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const UpcomingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>UpcomingScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UpcomingScreen;
