

  import React from 'react';
  import { 
      View, 
      Text, 
      TouchableOpacity, 
      TextInput,
      Platform,
      StyleSheet ,
      StatusBar,
      ScrollView,
      Alert
  } from 'react-native';
  import * as Animatable from 'react-native-animatable';
  import LinearGradient from 'react-native-linear-gradient';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import Feather from 'react-native-vector-icons/Feather';

  import ImagePicker from 'react-native-image-crop-picker';
  
  import { useTheme } from 'react-native-paper';
  
  import { AuthContext } from '../components/context';
  
  import Users from '../model/users';
  
  const DeliveryPersonregistrationScreen = ({navigation}) => {
  
      const [data, setData] = React.useState({
          username: '',
          password: '',
          confirm_password:'',
          check_textInputChange: false,
          secureTextEntry: true,
          confirm_secureTextEntry: true,
          isValidUser: true,
          isValidPassword: true,
      });
  
      const { colors } = useTheme();
  
      const { signIn } = React.useContext(AuthContext);
  
      const textInputChange = (val) => {
          if( val.trim().length >= 4 ) {
              setData({
                  ...data,
                  username: val,
                  check_textInputChange: true,
                  isValidUser: true
              });
          } else {
              setData({
                  ...data,
                  username: val,
                  check_textInputChange: false,
                  isValidUser: false
              });
          }
      }
  
      const handlePasswordChange = (val) => {
          if( val.trim().length >= 8 ) {
              setData({
                  ...data,
                  password: val,
                  isValidPassword: true
              });
          } else {
              setData({
                  ...data,
                  password: val,
                  isValidPassword: false
              });
          }
      }
  
      const handleConfirmPasswordChange = (val) => {
          if( val.trim().length >= 8 ) {
              setData({
                  ...data,
                  confirm_password: val,
                  isValidPassword: true
              });
          } else {
              setData({
                  ...data,
                  password: val,
                  isValidPassword: false
              });
          }
      }
  
      const updateConfirmSecureTextEntry = () => {
          setData({
              ...data,
              confirm_secureTextEntry: !data.confirm_secureTextEntry
          });
      }
  
      const updateSecureTextEntry = () => {
          setData({
              ...data,
              secureTextEntry: !data.secureTextEntry
          });
      }
  
      const handleValidUser = (val) => {
          if( val.trim().length >= 4 ) {
              setData({
                  ...data,
                  isValidUser: true
              });
          } else {
              setData({
                  ...data,
                  isValidUser: false
              });        }
      }
  
      const loginHandle = (userName, password) => {
  
          const foundUser = Users.filter( item => {
              return userName == item.username && password == item.password;
          } );
  
          if ( data.username.length == 0 || data.password.length == 0 ) {
              Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                  {text: 'Okay'}
              ]);
              return;
          }
  
          if ( foundUser.length == 0 ) {
              Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                  {text: 'Okay'}
              ]);
              return;
          }
          signIn(foundUser);
      }

      const choosePhotoFromLibrary = () => {
        console.log("================================");
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
          });
    }
  
      return (
        <View style={styles.container}>
            <StatusBar backgroundColor='black' barStyle="light-content"/>
          <View style={styles.header}>
              <Text style={styles.text_header}>Delivery Person Registration!</Text>
          </View>
          <Animatable.View 
              animation="fadeInUpBig"
              style={[styles.footer, {
                  backgroundColor: colors.background
              }]}
          >
              <ScrollView>
  
              <Text style={[styles.text_footer, {
                  color: colors.text
              }]}>Username</Text>
              <View style={styles.action}>
                  <FontAwesome 
                      name="user-o"
                      color={colors.text}
                      size={20}
                  />
                  <TextInput 
                      placeholder="Your Username"
                      placeholderTextColor="#666666"
                      style={[styles.textInput, {
                          color: colors.text
                      }]}
                      autoCapitalize="none"
                      onChangeText={(val) => textInputChange(val)}
                      onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                  />
                  {data.check_textInputChange ? 
                  <Animatable.View
                      animation="bounceIn"
                  >
                      <Feather 
                          name="check-circle"
                          color="green"
                          size={20}
                      />
                  </Animatable.View>
                  : null}
              </View>
              { data.isValidUser ? null : 
              <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
              </Animatable.View>
              }
              
  
              <Text style={[styles.text_footer, {
                  color: colors.text,
                  marginTop: 35
              }]}>Password</Text>
              <View style={styles.action}>
                  <Feather 
                      name="lock"
                      color={colors.text}
                      size={20}
                  />
                  <TextInput 
                      placeholder="Your Password"
                      placeholderTextColor="#666666"
                      secureTextEntry={data.secureTextEntry ? true : false}
                      style={[styles.textInput, {
                          color: colors.text
                      }]}
                      autoCapitalize="none"
                      onChangeText={(val) => handlePasswordChange(val)}
                  />
                  <TouchableOpacity
                      onPress={updateSecureTextEntry}
                  >
                      {data.secureTextEntry ? 
                      <Feather 
                          name="eye-off"
                          color="grey"
                          size={20}
                      />
                      :
                      <Feather 
                          name="eye"
                          color="grey"
                          size={20}
                      />
                      }
                  </TouchableOpacity>
              </View>
              { data.isValidPassword ? null : 
              <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
              </Animatable.View>
              }
  
              
              <Text style={[styles.text_footer, {
                  color: colors.text,
                  marginTop: 35
              }]}>Confirm Password</Text>
              <View style={styles.action}>
                  <Feather 
                      name="lock"
                      color={colors.text}
                      size={20}
                  />
                  <TextInput 
                      placeholder="Confirm Password"
                      placeholderTextColor="#666666"
                      secureTextEntry={data.confirm_secureTextEntry ? true : false}
                      style={[styles.textInput, {
                          color: colors.text
                      }]}
                      autoCapitalize="none"
                      onChangeText={(val) => handleConfirmPasswordChange(val)}
                  />
                  <TouchableOpacity
                      onPress={updateConfirmSecureTextEntry}
                  >
                      {data.secureTextEntry ? 
                      <Feather 
                          name="eye-off"
                          color="grey"
                          size={20}
                      />
                      :
                      <Feather 
                          name="eye"
                          color="grey"
                          size={20}
                      />
                      }
                  </TouchableOpacity>
              </View>
              { data.isValidPassword ? null : 
              <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
              </Animatable.View>
              }
              
              <Text style={[styles.text_footer, {
                  marginTop: 35
              }]}>Email Address</Text>
              <View style={styles.action}>
                  
                  <TextInput 
                      placeholder="Email Address"
                      style={styles.textInput}
                      autoCapitalize="none"
                      onChangeText={(val) => textInputChange(val)}
                  />
                  
              </View>
              <Text style={[styles.text_footer, {
                  marginTop: 35
              }]}>Home Address</Text>
              <View style={styles.action}>
                  
                  <TextInput 
                      placeholder="Home Address"
                      multiline
                      style={styles.textInput}
                      autoCapitalize="none"
                      onChangeText={(val) => textInputChange(val)}
                  />
                  
              </View>
              <Text style={[styles.text_footer, {
                  marginTop: 35
              }]}>Account Number</Text>
              <View style={styles.action}>
                  
                  <TextInput 
                      placeholder="Account Number"
                      keyboardType = 'numeric'
                      style={styles.textInput}
                      autoCapitalize="none"
                      onChangeText={(val) => textInputChange(val)}
                  />
                  
              </View>
              <Text style={[styles.text_footer, {
                  marginTop: 35
              }]}>Mobile Number</Text>
              <View style={styles.action}>
                  
                  <TextInput 
                      placeholder="Mobile Number"
                      keyboardType = 'numeric'
                      style={styles.textInput}
                      autoCapitalize="none"
                      onChangeText={(val) => textInputChange(val)}
                  />
                  
              </View>

              <Text style={[styles.text_footer, {
                  marginTop: 35
              }]}>Upload your Photo here..</Text>
              <TouchableOpacity
                     onPress={()=> choosePhotoFromLibrary()}
                      style={[styles.signIn, {
                          borderColor: '#2c3e50',
                          borderWidth: 1,
                          marginTop: 15
                      }]}
                  >
                      <Text style={[styles.textSign, {
                          color: '#2c3e50'
                      }]}>Choose Photo From Gallery</Text>
                  </TouchableOpacity>

                  <Text style={[styles.text_footer, {
                  marginTop: 35
              }]}>Upload your driving license here..</Text>
                  <TouchableOpacity
                      onPress={()=> choosePhotoFromLibrary()}
                      style={[styles.signIn, {
                          borderColor: '#2c3e50',
                          borderWidth: 1,
                          marginTop: 15
                      }]}
                  >
                      <Text style={[styles.textSign, {
                          color: '#2c3e50'
                      }]}>Choose Photo From Gallery</Text>
                  </TouchableOpacity>

                <View style={styles.textPrivate}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Terms')}
                    >
                        <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
                            Click here to see terms of the service
                        </Text>
                    </TouchableOpacity>
                </View>
  
                <View style={styles.textPrivate}>
                  <Text style={styles.color_textPrivate}>
                      By signing up you agree to our
                  </Text>
                  <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                  <Text style={styles.color_textPrivate}>{" "}and</Text>
                  <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
                </View>
              
                <View style={styles.button}>
                  <TouchableOpacity
                      style={styles.signIn}
                      onPress={() => {loginHandle( data.username, data.password )}}
                  >
                  <LinearGradient
                      colors={['#2c3e50', '#2c3e50']}
                      style={styles.signIn}
                  >
                      <Text style={[styles.textSign, {
                          color:'#fff'
                      }]}>Sign Up</Text>
                  </LinearGradient>
                  </TouchableOpacity>
  
                  <TouchableOpacity
                      onPress={() =>navigation.navigate('SignInScreen')}
                      style={[styles.signIn, {
                          borderColor: '#2c3e50',
                          borderWidth: 1,
                          marginTop: 15
                      }]}
                  >
                      <Text style={[styles.textSign, {
                          color: '#2c3e50'
                      }]}>Sign In</Text>
                  </TouchableOpacity>
  
                </View>
              </ScrollView>
          </Animatable.View>
        </View>
      );
  };
  
  export default DeliveryPersonregistrationScreen;
  
  const styles = StyleSheet.create({
      container: {
        flex: 1, 
        backgroundColor: '#34495e'
      },
      header: {
          flex: 1,
          justifyContent: 'flex-end',
          paddingHorizontal: 20,
          paddingBottom: 50
      },
      footer: {
          flex: 3,
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
      actionError: {
          flexDirection: 'row',
          marginTop: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#FF0000',
          paddingBottom: 5
      },
      textInput: {
          flex: 1,
          marginTop: Platform.OS === 'ios' ? 0 : -12,
          paddingLeft: 10,
          color: '#05375a',
      },
      errorMsg: {
          color: '#FF0000',
          fontSize: 14,
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
  
  