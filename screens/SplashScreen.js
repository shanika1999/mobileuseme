import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='black' barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>
        <Animatable.View 
            style={[styles.footer, {
                backgroundColor: '#2c3e50',
            }]}
            animation="fadeInUpBig"
        >
            <Text style={[styles.title, {
                color: '#fff',
            }]}>Ultimate Shopping Expierience</Text>
            <Text style={styles.text}>Sign In | Sign Up</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                <LinearGradient
                    colors={['#c0392b', '#c0392b']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Get Started</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                </LinearGradient>
            </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'yellow'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#2c3e50',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#fff',
      fontSize: 35,
      fontWeight: 'bold'
  },
  text: {
      color: '#c0392b',
      marginTop:5,
      fontSize:20,
      fontWeight: 'bold'
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30,
      
      
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});



// import React, {Component} from 'react';
// import {
//   View,
//   Image,
//   StyleSheet,
//   Animated,
//   ActivityIndicator,
// } from 'react-native';

// import {Actions} from 'react-native-router-flux';
// import logo from '../assets/logo.png';

// const switchToAuth = () => {
//   Actions.replace('SignUpScreen')
// };

// class SplashScreen extends Component {
//   state = {
//     LogoAnime: new Animated.Value(0),
//     loadingSpinner: false,
//   };

//   componentDidMount() {
//     const {LogoAnime} = this.state;
//     Animated.parallel([
//       Animated.spring(LogoAnime,{
//         toValue: 1,
//         tension: 10,
//         friction: 2,
//         duration: 1000,
//         useNativeDriver: true
//       }).start(),

     
//     ]).start(() => {
//       this.setState({
//         loadingSpinner: true,
        
//       });

//       setTimeout(switchToAuth, 2000);
//     });
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Animated.View
//           style={{
//             opacity: this.state.LogoAnime,
//             // top: this.state.LogoAnime.interpolate({
//             //   inputRange: [0, 1],
//             //   outputRange: [80, 0],
//             // }),
//           }}>
//           <Image source={logo} style={styles.image}/>

//           {this.state.loadingSpinner ? (
//             <ActivityIndicator
//               style={{
//                 position: 'absolute',
//                 left: 0,
//                 right: 0,
//                 top: 0,
//                 bottom: 0,
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}
//               size="large"
//               color="#5257f2"
//             />
//           ) : null}
//         </Animated.View>
    
//       </View>
//     );
//   }
// }

// export default SplashScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "yellow",
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

 
//   image: {
//      width:150,
//      height:150,
//   },
// });

