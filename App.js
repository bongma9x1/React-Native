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
  }
  render(){
    return(
      <View>
        <StatusBar hindden = "true"/>
        <Text style = {{Backgr}}>Doan aaaaaaafasfasaaa </Text>
      </View>
      );
  }
}
AppRegistry.registerComponent('DoanReact', () => DoanReact);
