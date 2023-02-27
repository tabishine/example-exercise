import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import WeightNumber from './src/WeightNumber';

const WeightCarousel = () => {
  const weightNumbers = [];
  for (let i = 0; i <= 20; i++) {
    weightNumbers.push(<WeightNumber key={i} value={i} />);
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {weightNumbers}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WeightCarousel;
