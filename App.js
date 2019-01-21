/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StatusBar, StyleSheet, Text, View, AppRegistry} from 'react-native';

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
  render(){
    return(
      <View>
        <Text style = {{fontSize:100}}>{this.state.somaynam} </Text>
          <TouchableOpacity onPress = {()=>{this.clickMe()}}>
            <View stye = {{with:100, height:200, backgroundColor: 'red'}}>
            </View>
          </TouchableOpacity>
      </View>
      );
  }
}
AppRegistry.registerComponent('DoanReact', () => DoanReact);
