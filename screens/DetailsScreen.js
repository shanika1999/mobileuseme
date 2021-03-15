import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    StatusBar,
    TouchableOpacity
  } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

  const DetailsScreen = ({navigation}) => {
    return (
      <View style = {{ flex:1,alignItems:'center',justifyContent:'center'}}>
        {/* <Text>Details Screen</Text>
       

        <Button
          title='Customer Registartion..'
          onPress={() => navigation.push('Details')}
        />
        <Button
          title='Go to Home screen'
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title='Go Back'
          onPress={() => navigation.goBack()}
        />
        
         */}
         <Text>Welcome to notifications screen</Text>
      </View>
    );
  };

  export default DetailsScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#FFC300'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });
  /*
   <TouchableOpacity
                  onPress={() => navigation.navigate('CustomerRegistrationScreen')}
                  style={[styles.signIn, {
                  borderColor: '#FFC300',
                  borderWidth: 1,
                  marginTop: 15
              }]}
        >
                    <Text style={[styles.textSign, {
                        color: 'black'
                    }]}>Customer Regsitrations</Text>
        </TouchableOpacity>*/
        