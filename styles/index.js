import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    ttitle:{
      color:'black',
      fontSize:hp('6%'),
      //marginTop:hp('2%'),
      marginBottom:hp('3%')
      //textShadowColor: "red",
    },
    text:{
      color:'black',
      fontSize:hp('4%'),
      //textShadowColor: "red",
    },
    textFooter:{
      color:'black',
      fontSize:30,
      margin:7
    },
    tReset:{
      flex: 1,
      backgroundColor: '#bdc3c7',
      alignItems:'center'
    },
    tButton:{
      height:hp('10%'),
      width:wp('50%'),
      margin:hp('2%'),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#74b9ff'
    },
    nImput:{
        width: 100,
        height:40,
        marginBottom:hp('2%'),
        borderColor: '#81ecec', 
        borderWidth: 1,
    }
  });
export default styles;