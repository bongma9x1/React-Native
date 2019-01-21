/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StatusBar, StyleSheet, Text, View, AppRegistry,TouchableOpacity} from 'react-native';

class DoanReact extends Component{
  constructor(props){
    super(props);
    this.state = {somaynam:999}
  }
  clickMe(){
    console.log('CLICK ME')
    this.setState({
      somaynam:this.state.somaynam + 1
      });
  }
  clickMe1(){
    console.log('CLICK ME')
    this.setState({
      somaynam:this.state.somaynam -1
      });
  }
  render(){
    return(
      <View>
        <Text style = {{fontSize:100}}>{this.state.somaynam} </Text>
        <TouchableOpacity onPress = {()=>{this.clickMe()}}>
          <View style = {{width:100, height:50, backgroundColor: 'red'}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress = {()=>{this.clickMe1()}}>
          <View style = {{width:100, height:50, backgroundColor: 'blue'}}/>
        </TouchableOpacity>   
      </View>
      );
  }
}
AppRegistry.registerComponent('DoanReact', () => DoanReact);
