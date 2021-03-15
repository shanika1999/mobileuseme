import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Orderdetails from '../screens/Orderdetails';
import Billscreen from '../screens/Billscreen';
import Qrscreen from '../screens/Qrscreen';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Orderdetails" component={Orderdetails} />
        <Stack.Screen name="Billscreen" component={Billscreen} />
        <Stack.Screen name="Qrscreen" component={Qrscreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;