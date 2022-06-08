import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import NewPostScreen from './src/screens/NewPostScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import ReelScreen from './src/screens/ReelScreen';
import SettingScreen from './src/screens/SettingScreen';
import AccountScreen from './src/screens/AccountScreen';

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
    headerBackTitleVisible: false,
}

const SignedInStack = (props) => (
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName="LoginScreen"
            screenOptions={screenOptions}
        >   
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
            <Stack.Screen name="ReelScreen" component={ReelScreen} />
            <Stack.Screen name='SettingScreen' component={SettingScreen} />
            <Stack.Screen name="AccountScreen" component={AccountScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default SignedInStack;