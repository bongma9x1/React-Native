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
  }
  clickME(){
    console.log('you click me')
  }
  render(){
    return(
      <View>
        <TouchableOpacity onPress = {()=>{this.clickME()}}> // ham cua phim buton
          <View style = {{backgroundClolor:'green',width:100,height:20,marginTop:100,marginLeft:20}}>
          </View>
        </TouchableOpacity>
      </View>
      );
  }
}
AppRegistry.registerComponent('DoanReact', () => DoanReact);
