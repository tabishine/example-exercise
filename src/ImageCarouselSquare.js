import React from 'react';
import {View, ScrollView, Image, Dimensions} from 'react-native';
import Svg, {React} from 'react-native-svg';
import {LinearGradient} from 'expo-linear-gradient';

const ImageCarouselSquare = ({images}) => {
    const windowWidth = Dimensions.get('window').width;
    const imageSize = windowWidth/2-15;
     return (
        <View>
            <ScrollView horizontal = {true}>
                {images.map((image, index) => (
                    <Image key = {index} source = {{ uri: image }} style = {{width: imageSize, height: imageSize, margin: 5}} />  
                ))}
            </ScrollView>
            <Svg height={imageSize + 10} width={windowWidth} viewBox={`0 0 ${windowWidth} ${imageSize + 10}`}>
        <Rect x="5" y="5" width={imageSize + 5} height={imageSize + 5} stroke="url(#borderGradient)" strokeWidth="10" fill="none" />
        <LinearGradient id="borderGradient" colors={['#FFAB64', '#FC6D27']} start={[0, 0]} end={[1, 1]} />
      </Svg>
    </View>
  );
}
export default ImageCarouselSquare;