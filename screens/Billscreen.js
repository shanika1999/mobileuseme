import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
//import { createStackNavigator, createAppContainer } from 'react-navigation';
//import { createStackNavigator } from '@react-navigation/stack';

export default class Billscreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
          title="Go to About"
          onPress={() => this.props.navigation.navigate('Qrscreen')}
/>
        <Text>About Screen</Text>
      </View>
    )
  }
}
