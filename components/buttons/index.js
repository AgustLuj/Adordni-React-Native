import React, { Component } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

class Button extends Component{
    render(){
        const {label,nStyles,nStyleText,action} = this.props;
        return (
            <TouchableOpacity style={nStyles} onPress={action}>
                <View>
                    <Text style={nStyleText}>{label}</Text>
                </View>
            </TouchableOpacity>
        )
            
    }
}
export default Button