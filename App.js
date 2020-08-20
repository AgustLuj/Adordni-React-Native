import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,Alert } from 'react-native';
import Button from './components/buttons';
import Imput from'./components/imput';
import styles from './styles';

class app extends Component {
  constructor(props){
    super(props);
    this.state= {
      name:'Hola'
    }
    this.user;
    this.pass;
  }
  changeText(n,text){
    if(n == 1){
      this.user=text;
    }else if(n==2){
      this.pass = text;
    }
  }
  sendData(){
    if(null != this.user &&null != this.pass){
      console.log(this.user, this.pass);
      Alert.alert('Variables', `${this.user,this.pass} y ${this.pass}`);
    }
  }

  render(){
    const {name}= this.state
    return (
      <View style = {styles.container}>
        <Text style = {styles.ttitle}>{name}</Text>
        <Imput nStyles={styles.nImput} action ={text => this.changeText(1,text)}/>
        <Imput nStyles={styles.nImput}  action ={text => this.changeText(2,text)}/>
        <Button nStyles = {styles.tButton} label='Login' nStyleText={styles.text} action={text => this.sendData()}/>
      </View>
    );
  }
}

export default app;