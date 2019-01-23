import React, {Component} from 'react';
import {Button,StatusBar, StyleSheet, Text, View, AppRegistry,TouchableOpacity,TextInput} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Nguyen Van Doan' };
  }
  render() {
    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />
        <Text>{this.state.text}</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details',{
              itemId: 86,
              otherParam: 'anything you want here',
            })}
        />
      </View>
    );
  }
}
class DetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      <Button
          title="Go to DetailsScreen again"
          onPress={() => this.props.navigation.push('Details')}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);