import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage
  } from "react-native";

  import Swiper from 'react-native-swiper';
  import StarRating from '../screens/StarRating';
  import { useState } from 'react';
const CosmeticScreen = ({navigation}) => {

  const [num,setNum] = useState(0);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);
    const [num4, setNum4] = useState(0);
    const [num5, setNum5] = useState(0);
    const [num6, setNum6] = useState(0);
    const [num7, setNum7] = useState(0);
    const [num8, setNum8] = useState(0);
    const [num9, setNum9] = useState(0);
    const [num10, setNum10] = useState(0);
    const [num11, setNum11] = useState(0);
   
  const incNum = () => {
    setNum(num+1);
  };

  const incNum1 = () => {
    setNum1(num1 + 1);
};

const incNum2 = () => {
  setNum2(num2 + 1);
};

const incNum3 = () => {
  setNum3(num3 + 1);
};

const incNum4 = () => {
  setNum4(num4 + 1);
};

const incNum5 = () => {
  setNum5(num5 + 1);
};
  
const incNum6 = () => {
  setNum6(num6 + 1);
};

const incNum7 = () => {
  setNum7(num7 + 1);
};

const incNum8 = () => {
  setNum8(num8 + 1);
};

const incNum9 = () => {
  setNum9(num9 + 1);
};

const incNum10 = () => {
  setNum10(num10 + 1);
};

const incNum11 = () => {
  setNum11(num11 + 1);
};
  const decNum = () => {
    setNum(num-1);
  };

  const decNum1 = () => {
    setNum1(num1 - 1);
};

const decNum2 = () => {
  setNum2(num2 - 1);
};

const decNum3 = () => {
  setNum3(num3 - 1);
};

const decNum4 = () => {
  setNum4(num4 - 1);
};
const decNum5 = () => {
  setNum5(num5 - 1);
};
const decNum6 = () => {
  setNum6(num6 - 1);
};

const decNum7 = () => {
  setNum7(num7 - 1);
};
const decNum8 = () => {
  setNum8(num8 - 1);
};
const decNum9 = () => {
  setNum9(num9 - 1);
}; 
const decNum10 = () => {
  setNum10(num10 - 1);
}; 
const decNum11 = () => {
  setNum11(num11 - 1);
}; 
    return (
      <View style={styles.sliderContainer}>
        <ScrollView>
      <Swiper autoplay  height={200}>
        
        <View style={styles.slide}>
            <Image
                source={require('../assets/cslide1.jpg')}
                style={styles.sliderImage}
                resizeMode="cover"
            />
        </View>
        <View style={styles.slide}>
            <Image
                source={require('../assets/cslide2.jpg')}
                style={styles.sliderImage}
                resizeMode="cover"
            />
        </View>
        <View style={styles.slide}>
            <Image
                source={require('../assets/cslide3.jpg')}
                style={styles.sliderImage}
                resizeMode="cover"
            />
        </View>
        

      </Swiper>

      <View style={styles.cardImgWrapper}>
            <Text style={styles.SubCatecory}>Skin Care</Text>
            <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assets/CleannClear.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>

                    <View style={styles.cardInfo}>
                      <Text style={styles.cardTitle}>Clean & Clear face wash</Text>
                      <StarRating ratings={3} reviews={345}/>
                      <Text style={styles.cardDetails}>Saweena - Piliyandala</Text>
                    <Text style={styles.cardPrice}>LKR 165.00</Text>
                     <View style={{flexDirection:'row',marginTop: 3}}> 
                                 <TouchableOpacity
                                        onPress={() => {incNum()}}
                                        style={[styles.button, {
                                        borderColor: 'black',
                                        borderWidth: 1,
                                       // backgroundColor:'black'
                                            }]}
                                    >
                                    <Text style={[styles.textSign, {
                                        color: 'black'
                                    }]}>+</Text>
                                </TouchableOpacity>
                            
                                    <View style={{marginLeft:20,marginTop:-2, flexDirection:'column'}}>
                                                <Text >{num}</Text>
                                            
                                    </View> 
                                <View style={{marginLeft:20,marginTop: 0, flexDirection:'column'}}>
                           <TouchableOpacity
                                  onPress={() => {decNum()}}
                                  style={[styles.button, {
                                  borderColor: 'black',
                                  borderWidth: 1,
                                 // backgroundColor:'black'
                                      }]}
                              >
                              <Text style={[styles.textSign, {
                                  color: 'black'
                              }]}>-</Text>
                          </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                                  //onPress={() => navigation.navigate('SignUpScreen')}
                                  style={[styles.signIn, {
                                  borderColor: '#FFC300',
                                  borderWidth: 1,
                                  backgroundColor:'#FFC300'
                                      }]}
                              >
                              <Text style={[styles.textSign, {
                                  color: 'black'
                              }]}>Add to cart </Text>
                          </TouchableOpacity> 
                      </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assets/toner.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>

                    <View style={styles.cardInfo}>
                      <Text style={styles.cardTitle}>Rose Water Toner</Text>
                      <StarRating ratings={5} reviews={500}/>
                      <Text style={styles.cardDetails}>Asariya Fancy - Moratuwa</Text>
                    <Text style={styles.cardPrice}>LKR 230.00</Text>
                     <View style={{flexDirection:'row',marginTop: 3}}> 
                                 <TouchableOpacity
                                        onPress={() => {incNum1()}}
                                        style={[styles.button, {
                                        borderColor: 'black',
                                        borderWidth: 1,
                                       // backgroundColor:'black'
                                            }]}
                                    >
                                    <Text style={[styles.textSign, {
                                        color: 'black'
                                    }]}>+</Text>
                                </TouchableOpacity>
                            
                                    <View style={{marginLeft:20,marginTop:-2, flexDirection:'column'}}>
                                                <Text >{num1}</Text>
                                            
                                    </View> 
                                <View style={{marginLeft:20,marginTop: 0, flexDirection:'column'}}>
                           <TouchableOpacity
                                  onPress={() => {decNum1()}}
                                  style={[styles.button, {
                                  borderColor: 'black',
                                  borderWidth: 1,
                                 // backgroundColor:'black'
                                      }]}
                              >
                              <Text style={[styles.textSign, {
                                  color: 'black'
                              }]}>-</Text>
                          </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                                  //onPress={() => navigation.navigate('SignUpScreen')}
                                  style={[styles.signIn, {
                                  borderColor: '#FFC300',
                                  borderWidth: 1,
                                  backgroundColor:'#FFC300'
                                      }]}
                              >
                              <Text style={[styles.textSign, {
                                  color: 'black'
                              }]}>Add to cart </Text>
                          </TouchableOpacity> 
                      </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assets/chandanaleepa.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>

                    <View style={styles.cardInfo}>
                      <Text style={styles.cardTitle}>Chandanaleepa</Text>
                      <StarRating ratings={4} reviews={321}/>
                      <Text style={styles.cardDetails}>Shop In - Mount Lavinia</Text>
                    <Text style={styles.cardPrice}>LKR 200.00</Text>
                     <View style={{flexDirection:'row',marginTop: 3}}> 
                                 <TouchableOpacity
                                        onPress={() => {incNum2()}}
                                        style={[styles.button, {
                                        borderColor: 'black',
                                        borderWidth: 1,
                                       // backgroundColor:'black'
                                            }]}
                                    >
                                    <Text style={[styles.textSign, {
                                        color: 'black'
                                    }]}>+</Text>
                                </TouchableOpacity>
                            
                                    <View style={{marginLeft:20,marginTop:-2, flexDirection:'column'}}>
                                                <Text >{num2}</Text>
                                            
                                    </View> 
                                <View style={{marginLeft:20,marginTop: 0, flexDirection:'column'}}>
                           <TouchableOpacity
                                  onPress={() => {decNum2()}}
                                  style={[styles.button, {
                                  borderColor: 'black',
                                  borderWidth: 1,
                                 // backgroundColor:'black'
                                      }]}
                              >
                              <Text style={[styles.textSign, {
                                  color: 'black'
                              }]}>-</Text>
                          </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                                  //onPress={() => navigation.navigate('SignUpScreen')}
                                  style={[styles.signIn, {
                                  borderColor: '#FFC300',
                                  borderWidth: 1,
                                  backgroundColor:'#FFC300'
                                      }]}
                              >
                              <Text style={[styles.textSign, {
                                  color: 'black'
                              }]}>Add to cart </Text>
                          </TouchableOpacity> 
                      </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assets/forever5cleanupscrub.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>

                    <View style={styles.cardInfo}>
                      <Text style={styles.cardTitle}>Venivel Clean Up</Text>
                      <StarRating ratings={4} reviews={430}/>
                      <Text style={styles.cardDetails}>Asariya Fancy - Moratuwa</Text>
                    <Text style={styles.cardPrice}>LKR 450.00</Text>
                     <View style={{flexDirection:'row',marginTop: 3}}> 
                                 <TouchableOpacity
                                        onPress={() => {incNum3()}}
                                        style={[styles.button, {
                                        borderColor: 'black',
                                        borderWidth: 1,
                                       // backgroundColor:'black'
                                            }]}
                                    >
                                    <Text style={[styles.textSign, {
                                        color: 'black'
                                    }]}>+</Text>
                                </TouchableOpacity>
                            
                                    <View style={{marginLeft:20,marginTop:-2, flexDirection:'column'}}>
                                                <Text >{num3}</Text>
                                            
                                    </View> 
                                <View style={{marginLeft:20,marginTop: 0, flexDirection:'column'}}>
                           <TouchableOpacity
                                  onPress={() => {decNum3()}}
                                  style={[styles.button, {
                                  borderColor: 'black',
                                  borderWidth: 1,
                                 // backgroundColor:'black'
                                      }]}
                              >
                              <Text style={[styles.textSign, {
                                  color: 'black'
                              }]}>-</Text>
                          </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                                  //onPress={() => navigation.navigate('SignUpScreen')}
                                  style={[styles.signIn, {
                                  borderColor: '#FFC300',
                                  borderWidth: 1,
                                  backgroundColor:'#FFC300'
                                      }]}
                              >
                              <Text style={[styles.textSign, {
                                  color: 'black'
                              }]}>Add to cart </Text>
                          </TouchableOpacity> 
                      </View>
                    </View>
                </View>
        </View>

        
        <View style={styles.cardImgWrapper}>
            <Text style={styles.SubCatecory}>Hair Care</Text>
            <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assets/lorealtotalrepairshampoo.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>

                    <View style={styles.cardInfo}>
                      <Text style={styles.cardTitle}>Loreal Hair Shampoo</Text>
                      <StarRating ratings={5} reviews={100}/>
                      <Text style={styles.cardDetails}>Fancy Paradise - Dehiwala</Text>
                    <Text style={styles.cardPrice}>LKR 1350.00</Text>
                     <View style={{flexDirection:'row',marginTop: 3}}> 
                                 <TouchableOpacity
                                        onPress={() => {incNum4()}}
                                        style={[styles.button, {
                                        borderColor: 'black',
                                        borderWidth: 1,
                                       // backgroundColor:'black'
                                            }]}
                                    >
                                    <Text style={[styles.textSign, {
                                        color: 'black'
                                    }]}>+</Text>
                                </TouchableOpacity>
                            
                                    <View style={{marginLeft:20,marginTop:-2, flexDirection:'column'}}>
                                                <Text >{num4}</Text>
                                            
                                    </View> 
                                <View style={{marginLeft:20,marginTop: 0, flexDirection:'column'}}>
                           <TouchableOpacity
                                  onPress={() => {decNum4()}}
                                  style={[styles.button, {
                                  borderColor: 'black',
                                  borderWidth: 1,
                                 // backgroundColor:'black'
                                      }]}
                              >
                              <Text style={[styles.textSign, {
                                  color: 'black'
                              }]}>-</Text>
                          </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                                  //onPress={() => navigation.navigate('SignUpScreen')}
                                  style={[styles.signIn, {
                                  borderColor: '#FFC300',
                                  borderWidth: 1,
                                  backgroundColor:'#FFC300'
                                      }]}
                              >
                              <Text style={[styles.textSign, {
                                  color: 'black'
                              }]}>Add to cart </Text>
                          </TouchableOpacity> 
                      </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assets/kumarikahairoil.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>

                    <View style={styles.cardInfo}>
                      <Text style={styles.cardTitle}>Kumarika Hair Oil</Text>
                      <StarRating ratings={3} reviews={250}/>
                      <Text style={styles.cardDetails}>Shop In  - Mount Lavinia</Text>
                    <Text style={styles.cardPrice}>LKR 150.00</Text>
                     <View style={{flexDirection:'row',marginTop: 3}}> 
                                 <TouchableOpacity
                                        onPress={() => {incNum5()}}
                                        style={[styles.button, {
                                        borderColor: 'black',
                                        borderWidth: 1,
                                       // backgroundColor:'black'
                                            }]}
                                    >
                                    <Text style={[styles.textSign, {
                                        color: 'black'
                                    }]}>+</Text>
                                </TouchableOpacity>
                            
                                    <View style={{marginLeft:20,marginTop:-2, flexDirection:'column'}}>
                                                <Text >{num5}</Text>
                                            
                                    </View> 
                                <View style={{marginLeft:20,marginTop: 0, flexDirection:'column'}}>
                           <TouchableOpacity
                                  onPress={() => {decNum5()}}
                                  style={[styles.button, {
                                  borderColor: 'black',
                                  borderWidth: 1,
                                 // backgroundColor:'black'
                                      }]}
                              >
                              <Text style={[styles.textSign, {
                                  color: 'black'
                              }]}>-</Text>
                          </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                                  //onPress={() => navigation.navigate('SignUpScreen')}
                                  style={[styles.signIn, {
                                  borderColor: '#FFC300',
                                  borderWidth: 1,
                                  backgroundColor:'#FFC300'
                                      }]}
                              >
                              <Text style={[styles.textSign, {
                                  color: 'black'
                              }]}>Add to cart </Text>
                          </TouchableOpacity> 
                      </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assets/dove.jpeg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>

                    <View style={styles.cardInfo}>
                      <Text style={styles.cardTitle}>Dove Shampoo</Text>
                      <StarRating ratings={5} reviews={300}/>
                      <Text style={styles.cardDetails}>Saweena - Piliyandala</Text>
                    <Text style={styles.cardPrice}>LKR 370.00</Text>
                     <View style={{flexDirection:'row',marginTop: 3}}> 
                                 <TouchableOpacity
                                        onPress={() => {incNum6()}}
                                        style={[styles.button, {
                                        borderColor: 'black',
                                        borderWidth: 1,
                                       // backgroundColor:'black'
                                            }]}
                                    >
                                    <Text style={[styles.textSign, {
                                        color: 'black'
                                    }]}>+</Text>
                                </TouchableOpacity>
                            
                                    <View style={{marginLeft:20,marginTop:-2, flexDirection:'column'}}>
                                                <Text >{num6}</Text>
                                            
                                    </View> 
                                <View style={{marginLeft:20,marginTop: 0, flexDirection:'column'}}>
                           <TouchableOpacity
                                  onPress={() => {decNum6()}}
                                  style={[styles.button, {
                                  borderColor: 'black',
                                  borderWidth: 1,
                                 // backgroundColor:'black'
                                      }]}
                              >
                              <Text style={[styles.textSign, {
                                  color: 'black'
                              }]}>-</Text>
                          </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                                  //onPress={() => navigation.navigate('SignUpScreen')}
                                  style={[styles.signIn, {
                                  borderColor: '#FFC300',
                                  borderWidth: 1,
                                  backgroundColor:'#FFC300'
                                      }]}
                              >
                              <Text style={[styles.textSign, {
                                  color: 'black'
                              }]}>Add to cart </Text>
                          </TouchableOpacity> 
                      </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assets/Revlonhaircolor.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>

                    <View style={styles.cardInfo}>
                      <Text style={styles.cardTitle}>Revlon Black hair color</Text>
                      <StarRating ratings={2} reviews={99}/>
                      <Text style={styles.cardDetails}>Angels - Moratuwa</Text>
                    <Text style={styles.cardPrice}>LKR 1500.00</Text>
                     <View style={{flexDirection:'row',marginTop: 3}}> 
                                 <TouchableOpacity
                                        onPress={() => {incNum7()}}
                                        style={[styles.button, {
                                        borderColor: 'black',
                                        borderWidth: 1,
                                       // backgroundColor:'black'
                                            }]}
                                    >
                                    <Text style={[styles.textSign, {
                                        color: 'black'
                                    }]}>+</Text>
                                </TouchableOpacity>
                            
                                    <View style={{marginLeft:20,marginTop:-2, flexDirection:'column'}}>
                                                <Text >{num7}</Text>
                                            
                                    </View> 
                                <View style={{marginLeft:20,marginTop: 0, flexDirection:'column'}}>
                           <TouchableOpacity
                                  onPress={() => {decNum7()}}
                                  style={[styles.button, {
                                  borderColor: 'black',
                                  borderWidth: 1,
                                 // backgroundColor:'black'
                                      }]}
                              >
                              <Text style={[styles.textSign, {
                                  color: 'black'
                              }]}>-</Text>
                          </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                                  //onPress={() => navigation.navigate('SignUpScreen')}
                                  style={[styles.signIn, {
                                  borderColor: '#FFC300',
                                  borderWidth: 1,
                                  backgroundColor:'#FFC300'
                                      }]}
                              >
                              <Text style={[styles.textSign, {
                                  color: 'black'
                              }]}>Add to cart </Text>
                          </TouchableOpacity> 
                      </View>
                    </View>
                </View>
        </View>

        
        <View style={styles.cardImgWrapper}>
            <Text style={styles.SubCatecory}>Makup</Text>
            <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assets/KumadoriLipstick.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>

                    <View style={styles.cardInfo}>
                      <Text style={styles.cardTitle}>Kumodori Lipstick</Text>
                      <StarRating ratings={4} reviews={443}/>
                      <Text style={styles.cardDetails}>Saweena - Piliyandala</Text>
                    <Text style={styles.cardPrice}>LKR 450.00</Text>
                     <View style={{flexDirection:'row',marginTop: 3}}> 
                                 <TouchableOpacity
                                        onPress={() => {incNum8()}}
                                        style={[styles.button, {
                                        borderColor: 'black',
                                        borderWidth: 1,
                                       // backgroundColor:'black'
                                            }]}
                                    >
                                    <Text style={[styles.textSign, {
                                        color: 'black'
                                    }]}>+</Text>
                                </TouchableOpacity>
                            
                                    <View style={{marginLeft:20,marginTop:-2, flexDirection:'column'}}>
                                                <Text >{num8}</Text>
                                            
                                    </View> 
                                <View style={{marginLeft:20,marginTop: 0, flexDirection:'column'}}>
                           <TouchableOpacity
                                  onPress={() => {decNum8()}}
                                  style={[styles.button, {
                                  borderColor: 'black',
                                  borderWidth: 1,
                                 // backgroundColor:'black'
                                      }]}
                              >
                              <Text style={[styles.textSign, {
                                  color: 'black'
                              }]}>-</Text>
                          </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                                  //onPress={() => navigation.navigate('SignUpScreen')}
                                  style={[styles.signIn, {
                                  borderColor: '#FFC300',
                                  borderWidth: 1,
                                  backgroundColor:'#FFC300'
                                      }]}
                              >
                              <Text style={[styles.textSign, {
                                  color: 'black'
                              }]}>Add to cart </Text>
                          </TouchableOpacity> 
                      </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assets/PerfectMatEyeliner.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>

                    <View style={styles.cardInfo}>
                      <Text style={styles.cardTitle}>Perfect Matte Eyeliner</Text>
                      <StarRating ratings={4} reviews={234}/>
                      <Text style={styles.cardDetails}>K-Zone  - Katubedda</Text>
                    <Text style={styles.cardPrice}>LKR 650.00</Text>
                     <View style={{flexDirection:'row',marginTop: 3}}> 
                                 <TouchableOpacity
                                        onPress={() => {incNum9()}}
                                        style={[styles.button, {
                                        borderColor: 'black',
                                        borderWidth: 1,
                                       // backgroundColor:'black'
                                            }]}
                                    >
                                    <Text style={[styles.textSign, {
                                        color: 'black'
                                    }]}>+</Text>
                                </TouchableOpacity>
                            
                                    <View style={{marginLeft:20,marginTop:-2, flexDirection:'column'}}>
                                                <Text >{num9}</Text>
                                            
                                    </View> 
                                <View style={{marginLeft:20,marginTop: 0, flexDirection:'column'}}>
                           <TouchableOpacity
                                  onPress={() => {decNum9()}}
                                  style={[styles.button, {
                                  borderColor: 'black',
                                  borderWidth: 1,
                                 // backgroundColor:'black'
                                      }]}
                              >
                              <Text style={[styles.textSign, {
                                  color: 'black'
                              }]}>-</Text>
                          </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                                  //onPress={() => navigation.navigate('SignUpScreen')}
                                  style={[styles.signIn, {
                                  borderColor: '#FFC300',
                                  borderWidth: 1,
                                  backgroundColor:'#FFC300'
                                      }]}
                              >
                              <Text style={[styles.textSign, {
                                  color: 'black'
                              }]}>Add to cart </Text>
                          </TouchableOpacity> 
                      </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assets/VianaMoisturizingCompactPowder.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>

                    <View style={styles.cardInfo}>
                      <Text style={styles.cardTitle}>Viana Compact Powder</Text>
                      <StarRating ratings={3} reviews={353}/>
                      <Text style={styles.cardDetails}>Fancy Corner - Piliyandala</Text>
                    <Text style={styles.cardPrice}>LKR 720.00</Text>
                     <View style={{flexDirection:'row',marginTop: 3}}> 
                                 <TouchableOpacity
                                        onPress={() => {incNum10()}}
                                        style={[styles.button, {
                                        borderColor: 'black',
                                        borderWidth: 1,
                                       // backgroundColor:'black'
                                            }]}
                                    >
                                    <Text style={[styles.textSign, {
                                        color: 'black'
                                    }]}>+</Text>
                                </TouchableOpacity>
                            
                                    <View style={{marginLeft:20,marginTop:-2, flexDirection:'column'}}>
                                                <Text >{num10}</Text>
                                            
                                    </View> 
                                <View style={{marginLeft:20,marginTop: 0, flexDirection:'column'}}>
                           <TouchableOpacity
                                  onPress={() => {decNum10()}}
                                  style={[styles.button, {
                                  borderColor: 'black',
                                  borderWidth: 1,
                                 // backgroundColor:'black'
                                      }]}
                              >
                              <Text style={[styles.textSign, {
                                  color: 'black'
                              }]}>-</Text>
                          </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                                  //onPress={() => navigation.navigate('SignUpScreen')}
                                  style={[styles.signIn, {
                                  borderColor: '#FFC300',
                                  borderWidth: 1,
                                  backgroundColor:'#FFC300'
                                      }]}
                              >
                              <Text style={[styles.textSign, {
                                  color: 'black'
                              }]}>Add to cart </Text>
                          </TouchableOpacity> 
                      </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assets/VianaPowderBrush.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>

                    <View style={styles.cardInfo}>
                      <Text style={styles.cardTitle}>Viana Powder Brush</Text>
                      <StarRating ratings={5} reviews={578}/>
                      <Text style={styles.cardDetails}>Angels - Moratuwa</Text>
                    <Text style={styles.cardPrice}>LKR 1220.00</Text>
                     <View style={{flexDirection:'row',marginTop: 3}}> 
                                 <TouchableOpacity
                                        onPress={() => {incNum11()}}
                                        style={[styles.button, {
                                        borderColor: 'black',
                                        borderWidth: 1,
                                       // backgroundColor:'black'
                                            }]}
                                    >
                                    <Text style={[styles.textSign, {
                                        color: 'black'
                                    }]}>+</Text>
                                </TouchableOpacity>
                            
                                    <View style={{marginLeft:20,marginTop:-2, flexDirection:'column'}}>
                                                <Text >{num11}</Text>
                                            
                                    </View> 
                                <View style={{marginLeft:20,marginTop: 0, flexDirection:'column'}}>
                           <TouchableOpacity
                                  onPress={() => {decNum11()}}
                                  style={[styles.button, {
                                  borderColor: 'black',
                                  borderWidth: 1,
                                 // backgroundColor:'black'
                                      }]}
                              >
                              <Text style={[styles.textSign, {
                                  color: 'black'
                              }]}>-</Text>
                          </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                                  //onPress={() => navigation.navigate('SignUpScreen')}
                                  style={[styles.signIn, {
                                  borderColor: '#FFC300',
                                  borderWidth: 1,
                                  backgroundColor:'#FFC300'
                                      }]}
                              >
                              <Text style={[styles.textSign, {
                                  color: 'black'
                              }]}>Add to cart </Text>
                          </TouchableOpacity> 
                      </View>
                    </View>
                </View>
        </View>

        </ScrollView>   
         
   </View>
    );
};

export default CosmeticScreen;

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
      },
      text_footer: {
        color: '#05375a',
        fontSize: 18,
        fontWeight: 'bold'
    },signIn: {
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
    cardsWrapper: {
      marginTop: 20,
      width: '90%',
      alignSelf: 'center',
    },
    card: {
      height: 115,
      marginVertical: 10,
      flexDirection: 'row',
      shadowColor: '#999',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    cardImgWrapper: {
      flex: 1,
    },
    cardImg: {
      height: '100%',
      width: '100%',
      alignSelf: 'center',
      borderRadius: 8,
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
    },
    cardInfo: {
      flex: 2,
      padding: 10,
      borderColor: 'black',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderBottomRightRadius: 8,
      borderTopRightRadius: 8,
      backgroundColor: '#fff',
    },
    cardTitle: {
      fontWeight: 'bold',
      fontSize: 17,
      
    },
    cardDetails: {
      fontSize: 12,
      color: '#444',
    },
    cardPrice: {
      fontSize: 15,
      color: '#444',
      fontWeight: 'bold',
    },
    signIn: {
      width: 80,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row',
      marginLeft:40,
      marginTop: -4
  },
  textSign: {
      color: 'black',
      fontWeight: 'bold'
  },
  SubCatecory: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 20,
},
button: {
    width: 20,
    height: 15,
    justifyContent: 'center',
   alignItems: 'center',
   // borderRadius: 50,
    flexDirection: 'row'
},  
  });
