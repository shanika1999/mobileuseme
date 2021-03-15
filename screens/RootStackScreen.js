import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
//new
//import Orderdetails from './Orderdetails';
import CustomerRegistrationScreen from './CustomerRegistrationScreen';
import Terms from './Terms';
import ShopRegistrationScreen from './ShopRegistrationScreen';
import DeliveryPersonregistrationScreen from './DeliveryPersonregistrationScreen';
// import FoodScreen from './FoodScreen';
// import GrossaryScreen from './GrossaryScreen';
// import FashionScreen from './FashionScreen';
// import StaionaryScreen from './StaionaryScreen';
// import CosmeticScreen from './CosmeticScreen';
// import ElectronicScreen from './ElectronicScreen';

const RootStack = createStackNavigator();
//<RootStack.Screen name="Orderdetails" component={Orderdetails}/>
const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        
        
        <RootStack.Screen name="CustomerRegistrationScreen" component={CustomerRegistrationScreen}/>
        <RootStack.Screen name="Terms" component={Terms}/>
        <RootStack.Screen name="ShopRegistrationScreen" component={ShopRegistrationScreen}/>
        <RootStack.Screen name="DeliveryPersonregistrationScreen" component={DeliveryPersonregistrationScreen}/>
        {/* <RootStack.Screen name="FoodScreen" component={FoodScreen}/>
        <RootStack.Screen name=" GrossaryScreen" component={GrossaryScreen}/>
        <RootStack.Screen name="FashionScreen" component={FashionScreen}/>
        <RootStack.Screen name="CosmeticScreen " component={CosmeticScreen }/>
        <RootStack.Screen name="ElectronicScreen" component={ElectronicScreen}/>
        <RootStack.Screen name="StaionaryScreen" component={StaionaryScreen}/>  */}
    
    
    </RootStack.Navigator>
);

export default RootStackScreen;