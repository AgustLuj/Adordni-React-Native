import React, { Component } from 'react';
import {View,Text,TouchableOpacity,TextInput} from 'react-native';

class Imput extends Component{
    render(){
        const {nStyles,action} = this.props;
        return (
            <TextInput
                style={nStyles}
                backgroundColor='#81ecec'
                onChangeText={action}
            />
        )
            
    }
}
export default Imput