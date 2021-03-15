
/*
import React, { Component } from 'react'

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  
} from 'react-native';

import QRCode from 'react-native-qrcode-svg';

export default class App extends Component {   
  //const [inputText, setInputText] = useState('');
  //const [qrvalue, setQrvalue] = useState('');

  //const [state, setState] = useState();
  state = {
    text: '5555',
  };

  render(){
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          see your QR Code here
        </Text>
        <QRCode
          //QR code value
          
          //value={qrvalue ? qrvalue : 'NA'}
          onChangeText={(text) => this.setState({text: text})}
          value={this.state.text}
          //size of QR Code
          size={250}
          //Color of the QR Code (Optional)
          color="black"
          //Background Color of the QR Code (Optional)
          backgroundColor="white"
          //Logo of in the center of QR Code (Optional)
          logo={{
            url:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png',
          }}
          //Center Logo size  (Optional)
          logoSize={30}
          //Center Logo margin (Optional)
          logoMargin={2}
          //Center Logo radius (Optional)
          logoBorderRadius={15}
          //Center Logo background (Optional)
          logoBackgroundColor="yellow"
        />
        




        
      </View>
    </SafeAreaView>
  );
};
}
//export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textStyle: {
    textAlign: 'center',
    margin: 10,
  },
  textInputStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#51D8C7',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#51D8C7',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 30,
    padding: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});





*/

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
//import { createStackNavigator, createAppContainer } from 'react-navigation';
//import { createStackNavigator } from '@react-navigation/stack';

export default class Qrscreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
        <Text>About Screen</Text>
      </View>
    )
  }
}