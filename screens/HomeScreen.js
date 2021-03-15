// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   StatusBar,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import {useTheme} from '@react-navigation/native';

// import Swiper from 'react-native-swiper';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Fontisto from 'react-native-vector-icons/Fontisto';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import StarRating from '../components/StarRating';

// const HomeScreen = ({navigation}) => {
//   const theme = useTheme();

//   return (
//     <ScrollView style={styles.container}>
//       <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
//       <View style={styles.sliderContainer}>
//         <Swiper
//           autoplay
//           horizontal={false}
//           height={200}
//           activeDotColor="#FF6347">
//           <View style={styles.slide}>
//             <Image
//               source={require('../assets/banners/food-banner1.jpg')}
//               resizeMode="cover"
//               style={styles.sliderImage}
//             />
//           </View>
//           <View style={styles.slide}>
//             <Image
//               source={require('../assets/banners/food-banner2.jpg')}
//               resizeMode="cover"
//               style={styles.sliderImage}
//             />
//           </View>
//           <View style={styles.slide}>
//             <Image
//               source={require('../assets/banners/food-banner3.jpg')}
//               resizeMode="cover"
//               style={styles.sliderImage}
//             />
//           </View>
//         </Swiper>
//       </View>

//       <View style={styles.categoryContainer}>
//         <TouchableOpacity
//           style={styles.categoryBtn}
//           onPress={() =>
//             navigation.navigate('CardListScreen', {title: 'Restaurant'})
//           }>
//           <View style={styles.categoryIcon}>
//             <Ionicons name="ios-restaurant" size={35} color="#FF6347" />
//           </View>
//           <Text style={styles.categoryBtnTxt}>Restaurant</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.categoryBtn}
//           onPress={() =>
//             navigation.navigate('CardListScreen', {title: 'Fastfood Center'})
//           }>
//           <View style={styles.categoryIcon}>
//             <MaterialCommunityIcons
//               name="food-fork-drink"
//               size={35}
//               color="#FF6347"
//             />
//           </View>
//           <Text style={styles.categoryBtnTxt}>Fastfood Center</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
//           <View style={styles.categoryIcon}>
//             <MaterialCommunityIcons name="food" size={35} color="#FF6347" />
//           </View>
//           <Text style={styles.categoryBtnTxt}>Snacks Corner</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={[styles.categoryContainer, {marginTop: 10}]}>
//         <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
//           <View style={styles.categoryIcon}>
//             <Fontisto name="hotel" size={35} color="#FF6347" />
//           </View>
//           <Text style={styles.categoryBtnTxt}>Hotels</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
//           <View style={styles.categoryIcon}>
//             <Ionicons name="md-restaurant" size={35} color="#FF6347" />
//           </View>
//           <Text style={styles.categoryBtnTxt}>Dineouts</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
//           <View style={styles.categoryIcon}>
//             <MaterialIcons name="expand-more" size={35} color="#FF6347" />
//           </View>
//           <Text style={styles.categoryBtnTxt}>Show More</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.cardsWrapper}>
//         <Text
//           style={{
//             alignSelf: 'center',
//             fontSize: 18,
//             fontWeight: 'bold',
//             color: '#333',
//           }}>
//           Recently Viewed
//         </Text>
//         <View style={styles.card}>
//           <View style={styles.cardImgWrapper}>
//             <Image
//               source={require('../assets/banners/food-banner2.jpg')}
//               resizeMode="cover"
//               style={styles.cardImg}
//             />
//           </View>
//           <View style={styles.cardInfo}>
//             <Text style={styles.cardTitle}>Amazing Food Place</Text>
//             <StarRating ratings={4} reviews={99} />
//             <Text style={styles.cardDetails}>
//               Amazing description for this amazing place
//             </Text>
//           </View>
//         </View>
//         <View style={styles.card}>
//           <View style={styles.cardImgWrapper}>
//             <Image
//               source={require('../assets/banners/food-banner3.jpg')}
//               resizeMode="cover"
//               style={styles.cardImg}
//             />
//           </View>
//           <View style={styles.cardInfo}>
//             <Text style={styles.cardTitle}>Amazing Food Place</Text>
//             <StarRating ratings={4} reviews={99} />
//             <Text style={styles.cardDetails}>
//               Amazing description for this amazing place
//             </Text>
//           </View>
//         </View>
//         <View style={styles.card}>
//           <View style={styles.cardImgWrapper}>
//             <Image
//               source={require('../assets/banners/food-banner4.jpg')}
//               resizeMode="cover"
//               style={styles.cardImg}
//             />
//           </View>
//           <View style={styles.cardInfo}>
//             <Text style={styles.cardTitle}>Amazing Food Place</Text>
//             <StarRating ratings={4} reviews={99} />
//             <Text style={styles.cardDetails}>
//               Amazing description for this amazing place
//             </Text>
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   sliderContainer: {
//     height: 200,
//     width: '90%',
//     marginTop: 10,
//     justifyContent: 'center',
//     alignSelf: 'center',
//     borderRadius: 8,
//   },

//   wrapper: {},

//   slide: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'transparent',
//     borderRadius: 8,
//   },
//   sliderImage: {
//     height: '100%',
//     width: '100%',
//     alignSelf: 'center',
//     borderRadius: 8,
//   },
//   categoryContainer: {
//     flexDirection: 'row',
//     width: '90%',
//     alignSelf: 'center',
//     marginTop: 25,
//     marginBottom: 10,
//   },
//   categoryBtn: {
//     flex: 1,
//     width: '30%',
//     marginHorizontal: 0,
//     alignSelf: 'center',
//   },
//   categoryIcon: {
//     borderWidth: 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     width: 70,
//     height: 70,
//     backgroundColor: '#fdeae7' /* '#FF6347' */,
//     borderRadius: 50,
//   },
//   categoryBtnTxt: {
//     alignSelf: 'center',
//     marginTop: 5,
//     color: '#de4f35',
//   },
//   cardsWrapper: {
//     marginTop: 20,
//     width: '90%',
//     alignSelf: 'center',
//   },
//   card: {
//     height: 100,
//     marginVertical: 10,
//     flexDirection: 'row',
//     shadowColor: '#999',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     elevation: 5,
//   },
//   cardImgWrapper: {
//     flex: 1,
//   },
//   cardImg: {
//     height: '100%',
//     width: '100%',
//     alignSelf: 'center',
//     borderRadius: 8,
//     borderBottomRightRadius: 0,
//     borderTopRightRadius: 0,
//   },
//   cardInfo: {
//     flex: 2,
//     padding: 10,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderLeftWidth: 0,
//     borderBottomRightRadius: 8,
//     borderTopRightRadius: 8,
//     backgroundColor: '#fff',
//   },
//   cardTitle: {
//     fontWeight: 'bold',
//   },
//   cardDetails: {
//     fontSize: 12,
//     color: '#444',
//   },
// });

import { useTheme } from '@react-navigation/native';
import React from 'react';
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
import { TouchableOpacity } from 'react-native-gesture-handler';
 // import {useTheme} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
  const HomeScreen = ({navigation}) => {

   // const {colors}= useTheme();

   // const theme = useTheme();

    return (
      
        <View style={styles.sliderContainer}>
          <Swiper autoplay  height={200}>
            <View style={styles.slide}>
                <Image
                    source={require('../assets/s1.jpg')}
                    style={styles.sliderImage}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.slide}>
                <Image
                    source={require('../assets/grosary.jpg')}
                    style={styles.sliderImage}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.slide}>
                <Image
                    source={require('../assets/s2.jpg')}
                    style={styles.sliderImage}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.slide}>
                <Image
                    source={require('../assets/s3.jpg')}
                    style={styles.sliderImage}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.slide}>
                <Image
                    source={require('../assets/s4.jpg')}
                    style={styles.sliderImage}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.slide}>
                <Image
                    source={require('../assets/s5.jpg')}
                    style={styles.sliderImage}
                    resizeMode="cover"
                />
            </View>

          </Swiper>

         

          <View style={{marginLeft:45,flexDirection:'row',marginTop: 5}}>
                  <Text style={styles.text_footer} >Fashion</Text>
            
                <View style={{marginLeft:100, flexDirection:'column'}}>
                        <Text style={styles.text_footer} >Grosary</Text>
                </View>
          </View>

             
              <View style={{flexDirection:'row',marginTop: 5}}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('FashionScreen')}
                    >
                            <Image
                                source={require('../assets/fashion.jpg')}
                                style={styles.LeftImageButton}  
                            />
                    </TouchableOpacity>

                  <View style={{marginLeft:15, flexDirection:'column'}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('GrossaryScreen')}
                    >
                            <Image
                                source={require('../assets/grosary.jpg')}
                                style={styles.LeftImageButton}
                            />
                </TouchableOpacity>
                  </View>
                  
              </View>

              <View style={{marginLeft:40,flexDirection:'row',marginTop: 5}}>
                  <Text style={styles.text_footer} >Stationary</Text>
                <View style={{marginLeft:80, flexDirection:'column'}}>
                        <Text style={styles.text_footer} >Cosmetics</Text>
                </View>
          </View>
      
              <View style={{flexDirection:'row',marginTop: 5}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('StaionaryScreen')}
                    >
                            <Image
                                source={require('../assets/stationary.jpg')}
                                style={styles.LeftImageButton}
                            />
                    </TouchableOpacity>
                    <View style={{marginLeft:15, flexDirection:'column'}}>
                 <TouchableOpacity
                    onPress={() => navigation.navigate('CosmeticScreen')}
                 >
                            <Image
                                source={require('../assets/cosmetics.jpg')}
                                style={styles.LeftImageButton}
                            />
                </TouchableOpacity>
                    </View>
              </View>

                <View style={{marginLeft:45,flexDirection:'row',marginTop: 5}}>
                  <Text style={styles.text_footer} >Foods</Text>
                    <View style={{marginLeft:100, flexDirection:'column'}}>
                            <Text style={styles.text_footer} >Electronics</Text>
                    </View>
                </View>


              <View style={{flexDirection:'row',marginTop: 5}}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('FoodScreen')}
                >
                            <Image
                                source={require('../assets/food.jpg')}
                                style={styles.LeftImageButton}
                            />
                </TouchableOpacity>
                    <View style={{marginLeft:15, flexDirection:'column'}}>
                    <TouchableOpacity
                       onPress={() => navigation.navigate('ElectronicScreen')}
                    >
                        <Image
                            source={require('../assets/electronic.jpg')}
                            style={styles.LeftImageButton}
                        />
                    </TouchableOpacity>
                    </View>
              </View>

       </View>
      
    );
  };

  export default HomeScreen;

  const styles = StyleSheet.create({
    
    sliderContainer: {
      height:550,
      width:340,
      marginTop:10,
      marginLeft:10,
      marginRight:50,
      borderRadius:8,
      
    },
    slide:{
      flex:1,
      justifyContent:'center',
      backgroundColor:'transparent',
      borderRadius:8
    },
    sliderImage:{
      height:'100%',
      width:'100%',
      alignSelf:'center',
      borderRadius:8
    },
    LeftImageButton:{
      height:100,
      width:160,
      borderRadius:8
    },text_footer: {
        color: '#05375a',
        fontSize: 18,
        fontWeight: 'bold'
    },
  });