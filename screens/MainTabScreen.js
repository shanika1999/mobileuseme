import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import Orderdetails from './Orderdetails';
//import Billscreen from './Billscreen'
//import Cartscreen from './Cartscreen';


import FashionScreen from './FashionScreen';
import FoodScreen from './FoodScreen';
import GrossaryScreen from './GrossaryScreen';
import ElectronicScreen from './ElectronicScreen';
import CosmeticScreen from './CosmeticScreen';
import StaionaryScreen from './StaionaryScreen';
import CustomerRegistrationScreen from './CustomerRegistrationScreen';


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
//const OrderStack = createStackNavigator();
//const Stack = createStackNavigator();
//const Navigation =StackNavigator();
//const Orderdetails =createStackNavigator();

const MainTabScreen = () =>(
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      //style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#251C23',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarColor: '#251C23',
          tabBarIcon: ({ color }) => (
            <Icon name="notifications-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#251C23',
          tabBarIcon: ({ color }) => (
            <Icon name="person-circle-outline" color={color} size={26} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#251C23',
          tabBarIcon: ({ color }) => (
            <Icon name="globe-outline" color={color} size={26} />
          ),
        }}
      />
<Tab.Screen
        name="pay"
        component={Orderdetails}
        options={{
          tabBarLabel: 'pay',
          tabBarColor: '#251C23',
          tabBarIcon: ({ color }) => (
            <Icon name="cart" color={color} size={26} />
             //<Image
              //style={styles.bottomTabIcon}
             // source={{}                  
            //  }/>
          ),
        }}
      />
      

    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  
    <HomeStack.Navigator
        screenOptions={{
        headerStyle:{
        backgroundColor: '#251C23',
      },
        headerTintColor:'white',
        headerTitleStyle:{
        fontWeight:'bold'
      }
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Search Here',
        headerLeft:()=>(
          <Icon.Button name='md-menu'
            size={25} 
            backgroundColor='#251C23' 
            onPress={() => navigation.openDrawer()}>
          </Icon.Button>
        ),
        headerRight:()=>(
          <Icon.Button name='search-outline'
            size={25} 
            backgroundColor='#251C23' 
            onPress={() => navigation.openDrawer()}>
          </Icon.Button>
        )
      }} />
       
       
      <HomeStack.Screen
        name = 'FashionScreen'
        component = {FashionScreen}
        options={{
          
          headerRight:()=>(
            <Icon.Button name='search-outline'
              size={25} 
              backgroundColor='#251C23' 
              onPress={() => navigation.openDrawer()}>
            </Icon.Button>
          )
        }}
      />




      <HomeStack.Screen
        name = 'GrossaryScreen'
        component = {GrossaryScreen}
        options={{
          
          headerRight:()=>(
            <Icon.Button name='search-outline'
              size={25} 
              backgroundColor='#251C23' 
              onPress={() => navigation.openDrawer()}>
            </Icon.Button>
          )
        }}
      />
       <HomeStack.Screen
        name = 'StaionaryScreen'
        component = {StaionaryScreen}
        options={{
          
          headerRight:()=>(
            <Icon.Button name='search-outline'
              size={25} 
              backgroundColor='#251C23' 
              onPress={() => navigation.openDrawer()}>
            </Icon.Button>
          )
        }}
      />
      <HomeStack.Screen
        name = 'CosmeticScreen'
        component = {CosmeticScreen}
        options={{
          
          headerRight:()=>(
            <Icon.Button name='search-outline'
              size={25} 
              backgroundColor='#251C23' 
              onPress={() => navigation.openDrawer()}>
            </Icon.Button>
          )
        }}
      />
       <HomeStack.Screen
        name = 'FoodScreen'
        component = {FoodScreen}
        options={{
          
          headerRight:()=>(
            <Icon.Button name='search-outline'
              size={25} 
              backgroundColor='#251C23' 
              onPress={() => navigation.openDrawer()}>
            </Icon.Button>
          )
        }}
      />
      <HomeStack.Screen
        name = 'ElectronicScreen'
        component = {ElectronicScreen}
        options={{
          
          headerRight:()=>(
            <Icon.Button name='search-outline'
              size={25} 
              backgroundColor='#251C23' 
              onPress={() => navigation.openDrawer()}>
            </Icon.Button>
          )
        }}
      />
           
      
    </HomeStack.Navigator>
  );

  


 



 /* const Orderdetails = ({navigation}) => (
<Orderdetails.Navigator>

<Orderdetails.Screen
        name = 'Cartscreen'
        component = {Cartscreen}
        options={{
          
          headerRight:()=>(
            <Icon.Button name='pay'
              size={25} 
              backgroundColor='#251C23' 
              onPress={() => navigation.openDrawer()}>
            </Icon.Button>
          )
        }}
      />
</Orderdetails.Navigator>

  );

*/


  const DetailsStackScreen = ({navigation}) => (
  
    <DetailsStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: '#251C23',
      },
      headerTintColor:'white',
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}>
      <DetailsStack.Screen name="Notifications" component={DetailsScreen} 
      options={{
        headerLeft:()=>(
          <Icon.Button name='reorder-three-outline'
            size={25} 
            backgroundColor='#251C23' 
            onPress={() => navigation.openDrawer()}>
          </Icon.Button>
        )
      }} />
      
    </DetailsStack.Navigator>
  );

  /*const Navigation =StackNavigator({
    ProfileScreen:{
        screen : Orderdetails,
    } , 
    Orderdetails : {
        screen : ProfileScreen,
    }

    <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
})
*/

//const Stack = createStackNavigator();

//const Stack = ({navigation}) =>(
 // const App = () =>{
   // return(

      /*const App = () =>(

<NavigationContainer>
 <Stack.Navigator >


 <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
 <Stack.Screen name="Orderdetails" component={Orderdetails} />
 
 

 </Stack.Navigator>
</NavigationContainer>




);*/
    




//export default Navigation ;
 