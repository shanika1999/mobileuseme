import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

//import { 
//  NavigationContainer
//} from '@react-navigation/native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
//import{createStackNavigator} from '@react-navigation/stack';
//import Billscreen from './screens/Billscreen';
//import Orderdetails from './screens/Orderdetails';

//const Stack = createStackNavigator();

const SupportScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Support Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
      
    );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
