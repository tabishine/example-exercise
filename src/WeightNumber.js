import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const WeightNumber = ({ value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.unit}>lbs</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  value: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  unit: {
    fontSize: 20,
  },
});

//export default WeightNumber;
