import React, {useState,useEffect,useMemo} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TouchID from 'react-native-touch-id';
import * as Animatable from 'react-native-animatable'; 
import Animated, { call, useCode } from 'react-native-reanimated';
import { Screen } from 'react-native-screens';
import {SCREEN, colorSchema } from "../utilities/constants";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import SplashScreen from 'react-native-splash-screen'
const Home =({navigation})=> {

  const {
    Clock,
    Value,
    set,
    block,
    interpolateNode,
    spring
  } = Animated;

  const { clock, animatedValue } = useMemo(() => ({
    clock: new Clock(),
    animatedValue: new Value(0),
  }), []);
  const translateY = interpolateNode(openSignUp, {
    inputRange: [0, 1],
    outputRange: [SCREEN.height + StatusBar.currentHeight, SCREEN.height - 300],
  });

   const [openSignUp] = useState(new Animated.Value(0));

    const isDarkMode = useColorScheme() === 'dark';
    const [isAuth, setIsAuth] = useState(false);
    

    const renderIntro = () => {
        return (  
        <Animated.View style={{ ...styles.splashContainer, height: translateY }}>
          
             {renderIntroLogo()}
           
        </Animated.View>
               
               )
        }
        

renderIntroLogo= ()=> {
    return (
      <TouchableOpacity onPress={bioAuth}> 
        <Animatable.Image style = {styles.logoContainer} source={require('../assets/logo-fingerprint.jpg')}
          animation = "fadeInUp"
          duration = {3000}
          easing ="ease-in-out"> 
        </Animatable.Image>
        </TouchableOpacity>
    )
}
       

    
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
   
    
    const optionalConfigObject = {
      title: 'Authentication Mehdi Kh', // Android
      imageColor: '#e00606', // Android
      imageErrorColor: '#ff0000', // Android
      sensorDescription: 'Touch sensor', // Android
      sensorErrorDescription: 'Failed', // Android
      cancelText: 'Cancel', // Android
      fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
      unifiedErrors: false, // use unified error messages (default false)
      passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
    };
    
    
    const bioAuth =() => {
      
      TouchID.authenticate('Access your account with your biometrics', optionalConfigObject)
      .then(success => {
        Alert.alert('Authenticated Successfully');
        setIsAuth(true)
        console.log(isAuth)
      })
      .catch(error => {
        Alert.alert('Authentication Failed');
      });
    }
    
const AuthId = ()=> {
   
    return(
    <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    style={backgroundStyle}>

  <View style = {styles.authButton}>
      <TouchableOpacity onPress={bioAuth}>
      <Image style = {styles.authLogo} source = {require("../assets/logo-fingerprint.jpg")}></Image>
      </TouchableOpacity>
      <Text>Authenticate with your biometrics</Text>
  </View>
  </ScrollView>
  
    )
}


return (
    <View style = {styles.container}>
      
   {renderIntro()}
   
   <View style={styles.header}>
  <TouchableOpacity style={styles.backIcon} onPress={() =>navigation.replace('home')}><Icon name="angle-left" color="#333" size={30} /></TouchableOpacity>
  </View>
    </View>
   
    

   
)}
const styles = StyleSheet.create({
  container : {
      width:'100%',
      justifyContent : 'flex-start',
      alignItems: 'center',
      backgroundColor : "#FFF"
},
    sectionContainer: {
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    }, 
    authButton : {
      
      flexDirection : "column",
      justifyContent : 'center',
      alignItems : 'center',
      marginTop : 40
    },
    authLogo: {
      flexDirection : 'row',
      justifyContent : 'center',
      alignItems : 'center',
      width : 100,
      height: 100,
      borderRadius : 15
  
    },
    header : {
      height : 80,
    width : '100%',
    backgroundColor : '#CCC'
    },
    logoContainer : {
      width : 100,
      height: 100,
      flexDirection : 'row',
      justifyContent : 'center',
      alignItems : 'center'

    },
    splashContainer: {
      width: '100%',
      height: SCREEN.height + StatusBar.currentHeight,
      justifyContent: 'center',
      alignItems: 'center',
    },
  header: {
    position: 'absolute',
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    elevation: 2,
    top: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20
  },
backIcon: {
    width: 50,
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  
  });

export default Home