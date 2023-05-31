import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from '../screens/Onboarding1';
import SignUpScreen from '../screens/SignUp';
import LogIn from '../screens/LogIn';


const Stack = createNativeStackNavigator();

const ScreenStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Onboarding' component={OnboardingScreen} />
            <Stack.Screen name='SignUp' component={SignUpScreen} />
            <Stack.Screen name='LogIn' component={LogIn} />
        </Stack.Navigator>
    );
}

export default ScreenStack 