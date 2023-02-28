import React from "react";
import {View, StyleSheet, Button} from 'react-native';

export const ConfirmButton = props => {
    return(
        <View style = {styles.button}>
            <Button title = " ПОДТВЕРДИТЬ (1 ИЗ 3) "/>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 35,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black'
    },
});