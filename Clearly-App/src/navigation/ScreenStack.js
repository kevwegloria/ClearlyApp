import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';


import OnboardingScreen from '../screens/Onboarding1';
import SignUpScreen from '../screens/SignUp';
import LogIn from '../screens/LogIn';


const Stack = createNativeStackNavigator();

const ScreenStack = () => {

    const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null)
    
    useEffect(() => {
        const checkAppLaunched = async () => {
            const appData = await AsyncStorage.getItem('isAppFirstLaunched');
            if (appData == null) {
                setIsAppFirstLaunched(true);
                AsyncStorage.setItem('isAppFirstLaunched', 'false');
            } else {
                setIsAppFirstLaunched(false);
            }
        };

        checkAppLaunched();

    }, [])
    return (
        isAppFirstLaunched != null && (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {isAppFirstLaunched &&
                    <Stack.Screen name='Onboarding' component={OnboardingScreen} />
                }
                <Stack.Screen name='SignUp' component={SignUpScreen} />
                <Stack.Screen name='LogIn' component={LogIn} />
            </Stack.Navigator>
        )
    );
}

export default ScreenStack 