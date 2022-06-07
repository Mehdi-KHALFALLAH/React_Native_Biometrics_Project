import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators,createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import React, {useState,useEffect} from 'react';

const Stack = createStackNavigator();


function StackNav() {


    const navigationRef = React.useRef(); 

    return (
        <NavigationContainer ref={navigationRef}>
        
        <Stack.Navigator
        screenOptions = {{
            gestureEnabled : true,
            gestureDirection:'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
        >
            <Stack.Screen
              name = "home"
              component = {Home}
              options = {{headerShown : false}}/>
        
        
        </Stack.Navigator>
        </NavigationContainer>
        )
        
}






export default StackNav