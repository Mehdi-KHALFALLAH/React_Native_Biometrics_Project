/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState,useEffect} from 'react';
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
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TouchID from 'react-native-touch-id';




const App =  () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  useEffect (()=> {

  }) 
  const handleBiometrics = ()=> {
    TouchID.isSupported().then(biometryType => {
      if (biometryType === 'FaceID') {
        console.log('FaceID is supported.');
    } else {
        console.log('TouchID is supported.');
    }
  })
  .catch(error => {
    // Failure code
    console.log(error);
  }
  )
  }
 

  return (

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
    <View style = {styles.header}></View>
      <View style = {styles.authButton}>
          <TouchableOpacity>
          <Image style = {styles.authLogo} source = {require('./assets/logo-fingerprint.jpg')}></Image>
          </TouchableOpacity>
          <Text>Authenticate with your biometrics</Text>
      </View>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  
  sectionContainer: {
    marginTop: 32,
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
    marginTop : 100
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
    height : 50,
  width : '100%'
  }


});

export default App;
