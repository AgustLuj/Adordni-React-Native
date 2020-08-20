import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const inicio =()=>{
        return(
            <View style = {styles.container}>
                <Text>Hello word</Text>
            </View>
        );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
export default inicio