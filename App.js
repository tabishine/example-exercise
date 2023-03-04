import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { ConfirmButton } from './src/ConfirmButton';
import {WeightCarousel} from './src/WeightCarousel';
import ImageCarouselSquare from './src/ImageCarouselSquare';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.text}> ТРИСЕТ 
      1/3 НАКЛОНЫ НА ОДНОЙ НОГЕ</Text>
      <ConfirmButton/>
      <WeightCarousel />
      <ImageCarouselSquare/>
    </View>
  );

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center',
     
    },

    text: {
      color: 'white',
      fontSize: 35
    }
  });
}
