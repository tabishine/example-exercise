import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import {WeightCarousel} from './src/WeightCarousel';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.text}> ТРИСЕТ 
      1/3 НАКЛОНЫ НА ОДНОЙ НОГЕ</Text>
      <WeightCarousel />
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
