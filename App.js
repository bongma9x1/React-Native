/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StatusBar, StyleSheet, Text, View, AppRegistry,Navigator} from 'react-native';

class DoanReact extends Component{
  renderScene(route,navigator){
    switch(route.name){
      case "do":return(<ManHinhDo/>);
      case "vang":return(<ManHinhVang/>);
    }
  }
  render(){
    return(
      <Navigator initialRoute={{name:"do"}}
      renderScene={this.renderScene}
      />
      );
  }
}

export default class ManHinhDo extends Component{
  render(){
    return(
      <View style = {{backgroundColor:'red', flex:1}}>
      </View>
      );
  }
}
export default class ManHinhVang extends Component{
  render(){
    return(
      <View style = {{backgroundColor:'yellow', flex:1}}>
      </View>
      );
  }
}
AppRegistry.registerComponent('DoanReact', () => DoanReact);
