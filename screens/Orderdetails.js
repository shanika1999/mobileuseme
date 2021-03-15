/*import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    Button,
    StatusBar,
  } from 'react-native';
  //import Swiper from 'react-native-swiper';
const Orderdetails = ({navigation}) => {
    return(
<View>
<Text>order</Text>
</View>
    );
};
export default Orderdetails;




*/
/*

import * as React from 'react';
import { View, StyleSheet,Alert , Dimensions ,Icon,Button,Text,CheckBox,isSelected,onRemove,setSelection,TextInput,value, SafeAreaView ,Image,TouchableOpacity} from 'react-native';
//import{Header} from '@components';
import { TabView, SceneMap } from 'react-native-tab-view';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
//import React, { Component } from 'react'
//import RNPickerSelect from 'react-native-picker-select';
//import RadioButtonRN from 'radio-buttons-react-native';
//import { RadioButton } from 'react-native-paper';

//import Icon from 'react-native-vector-icons/FontAwesome';
var radio_props = [
  {label: 'credit card', value: 0 },
  {label: 'debit card', value: 1 }
]

var radio_prop = [
  {label: 'master', value: 0 },
  {label: 'visa', value: 1 }
]
//<RadioForm
 // radio_props={radio_props}
 // initial={0}
 // formHorizontal={true}
///>;
 
//const data = [
 // {
 //   label: 'credit card'
 //  },
 //  {
 //   label: 'debit card'
 //  }
  //];
  
  
const FirstRoute = () => (
  
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]} >
 
  <View style={{flexDirection:'row'}}>
  <View style={styles.image}>
  <Image
                            source={require('../assets/forever5cleanupscrub.jpg')}
                            //resizeMode="cover"
                            style={styles.imon}
                        /> 
  </View>
  <View style={styles.image}><Text style={styles.cardTitle}>Venivel Clean Up</Text><Text style={styles.cardPrice}>LKR 450.00</Text></View>
  
   <View style={styles.green}><CheckBox
      //value={this.state.checked}
      onValueChange={() => this.setState({ checked: !this.state.checked })}
    /></View> 
        
      
   
  </View>





  <View style={{flex:1,flexDirection:'row'}}>
  <View style={styles.images}><Image
                            source={require('../assets/kids2.jpg')}
                            resizeMode="cover"
                            style={styles.imtw}
                        />
  </View>
  <View style={styles.images}><Text style={styles.cardTitle}>Striped Casual Shirt</Text>
  <Text style={styles.cardPrice}>LKR 2300.00</Text></View>
  <View style={styles.green}><CheckBox
      //value={this.state.checked}
      onValueChange={() => this.setState({ checked: !this.state.checked })}
    /></View>
  </View>
<View style={styles.total}>
<Text style={styles.totaltext}>TOTAL          LKR 2300.00</Text>

</View>

<View style={styles.checkout}>
<Text style={styles.totaltext}>Click on PAYMENT to checkout the order</Text>

</View>

      
  </View>
 
 
 





);
 
const SecondRoute = () => {
  const [value, onChangeText] = React.useState('');
  return(
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]}>
  <Button
        title="click here if you pay from cash"
        onPress={() => Alert.alert('Simple Button pressed')}
        
      />
    <View style={{ flexDirection: 'row',marginTop:20,marginBottom:10,marginLeft:10}}>
    <RadioForm
  radio_props={radio_props}
  initial={0}
  formHorizontal={true}
  onPress={(value) => {this.setState({value:value})}}
/>
</View>
<View style={styles.textinput}>
<Text style={styles.tee}>Card type</Text>
<View style={{ flexDirection: 'row',marginTop:20}}>
    <RadioForm
  radio_props={radio_prop}
  initial={0}
  formHorizontal={true}
  onPress={(value) => {this.setState({value:value})}}
/>
          
          
</View> 
</View>
<View style={styles.textinput}><Text style={styles.tee}>Card Number</Text>
<TextInput
      style={{ height: 30, borderColor: 'grey', borderWidth: 1 ,textDecorationColor:'blue',borderRadius:10}}
      //onChangeText={text => onChangeText(text)}
      value={value}
    />
</View>

<View  style={styles.textinput}><Text style={styles.tee}>Expiration Date</Text>
<View style={{ flexDirection: 'row'}}>
<TextInput
      style={{ height: 30, borderColor: 'grey', borderWidth: 1,width:40 ,borderRadius:10 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
<View style={{width:10}}></View>
    <TextInput
      style={{ height: 30,width:50, borderColor: 'grey', borderWidth: 1 ,borderRadius:10 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    /> 

</View>
</View>







<View  style={styles.textinput}>
<Text style={styles.tee}>CVN</Text>

<Text style={{color:"#0E0476"}}>This code is a three or four digit number printed on the back or front of  credit cards</Text>
<TextInput
      style={{ height: 30, borderColor: 'grey', borderWidth: 1,width:50 ,borderRadius:10}}
      //onChangeText={text => onChangeText(text)}
      value={value}
    />



<View><Text></Text></View>
</View>
<View style={{ flexDirection: 'row'}}>
<View>
<Button 
  
  // Some properties given to Button 
  title="cancel"
  onPress={() => Alert.alert( 
      'Its GeeksforGeeks !')} 
      style={{color:'#003399'}}
/>
</View>
<View style={{width:200,marginLeft:10}}></View>
<View style={styles.cancel}>
<Button 
  
  // Some properties given to Button 
  title="pay"
  onPress={() => Alert.alert( 
      'Its GeeksforGeeks !')} 
      style={styles.pay}
/>

<Button  
                    title="Go to Profile"  
                    onPress={() => this.props.navigation.navigate('Profile')}  
                />
</View>
  </View>
</View>




);
}





const initialLayout = { width: Dimensions.get('window').width };


export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'CART' },
    { key: 'second', title: 'PAYMENT' },
  ]);
 
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
 
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}











 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  tee:{fontSize: 15,fontWeight: 'bold',color:'#003399'},

  image:{
    width:124,height:121,borderRadius:20,alignItems: 'center',
    justifyContent: 'center',marginLeft:30,marginTop:30,
  },





  images:{
    width:124,height:121,borderRadius:20,alignItems: 'center'
    ,marginLeft:30,marginTop:40,
  },

  c:{marginTop:32},

  titleSelection:{




    marginLeft:16,
    backgroundColor:'#808080',
    marginRight:10,
  },




  imon: {
    width: 124,
    height:121,
  },
  imtw: {
    width: 124,
    height:121,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    
  },
  cardPrice: {
    fontSize: 15,
    color: '#444',
    fontWeight: 'bold',
  },


  green:{alignItems: 'center',marginTop:40,},
  total:{backgroundColor:'#0099FF',height:50,width:300,alignContent:'center',marginLeft:50,marginBottom:90,borderRadius:20,alignItems:'center'},
  totaltext:{fontSize:22,fontWeight:'bold'},
  checkout:{backgroundColor:'#0099FF',height:50,marginBottom:10},
  textinput:{marginLeft:10 , marginBottom:10 , marginTop:10},
  cancel:{marginLeft:10,width:100,color:'#003399'},
  pay:{marginLeft:10,width:100,marginRight:10,color:'#003399'}
  // pay:,
});
*/
 
/*

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function App({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Button
        title="Another Screen"
        onPress={() => navigation.navigate('Another')}
      />
    </View>
  );
}


*/


import React, { Component } from 'react';
import { StyleSheet, View,Text   ,Button,TouchableOpacity } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { 
  NavigationContainer
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Billscreen from './Billscreen'; 
//const Bill=()=>{
//  return(
//<View><Text>bill</Text></View>
//  );
//};

//const Billpay=()=>{
//  return(
//<View><Text>bill</Text></View>
 // );
//};

//const Stack=createStackNavigator();

export default class ExampleOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Product No', 'Product Name', 'Price', 'Count','Total'],
      tableData: [
        ['001', 'Striped Casual Shirt', '1200', '1','1200'],
        ['002', 'Venivel Facewash', '400', 'i','400'],
        ['003', 'Denim Trouser', '3570', '1','3570'],
        ['004', 'Cheese Pizza', '800', '2','1600'],

        ['005', 'Avacado Juice', '150', '2','300']
      ]
    }
  }
 
  render() {
    const state = this.state;
    return (

      
      
      <View style={styles.container}>
      <View style={{ marginTop:20,marginBottom:20,marginLeft:10}}><Text style={{ fontSize:25,fontWeight:'bold',color:'#03112E'}}>See Your Bill Information Here</Text></View>
        <Table borderStyle={{borderWidth: 2, borderColor: '#0033CC'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
        <View style={{ flexDirection: 'row',marginTop:45}}>
        
        
<View>
        <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Billscreen')}
                    style={styles.paycash}
                    >
                      <Text style={{ color:'#fff',marginTop:5,marginBottom:5,marginLeft:5,marginRight:5}}>cash payment</Text>
                    </TouchableOpacity>


                    </View>
         
<View style={{ marginLeft:120}}>
<TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Qrscreen')}
                    style={styles.payonline} >
                      <Text   style={{ color:'#fff',marginTop:5,marginBottom:5,marginLeft:5,marginRight:5}}>online payment</Text>
                    </TouchableOpacity>
</View> 
        </View>
        
      
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#85C1E9' },
  text: { margin: 6 },
  payonline:{borderWidth: 1,borderColor: '#2c3e50',backgroundColor:'#062157',marginRight:60},


  paycash:{borderWidth: 1,borderColor: '#2c3e50',backgroundColor:'#062157',marginLeft:30}
});








