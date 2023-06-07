import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import OnboardingScreen from '../screens/Onboarding1';
import LogIn from '../screens/LogIn';
import SignUpScreen from '../screens/SignUp';
import HomeScreen from '../screens/HomeScreen';
import ForgotPassword from '../screens/ForgotPassword';
import OTPScreen from '../screens/PasswordRecoveryOTPScreen';
import Settings from '../screens/Settings';
import ContactsScreen from '../screens/Contacts';
import ChatListScreen from '../screens/ChatList';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ScreenStack = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

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
  }, []);

  if (isAppFirstLaunched === null) {
    return null; //insert loading indicator
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAppFirstLaunched ? (
        <Stack.Screen name="Onboarding" component={OnboardingStack} />
      ) : (
        <Stack.Screen name='Main' component={MainStack} />
      )}
    </Stack.Navigator>
  );
};

//contains authentication screens: onboarding, login, signup, forgot password etc
const OnboardingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="HomeScreen" component={MainStack} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="PasswordRecoveryOTPScreen" component={OTPScreen} />
    </Stack.Navigator>
  );
};

//contains other screens in the app as well as the bottom tabs
const MainStack = () => {
  return (
    // Bottom tabs
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
      <Tab.Screen name="ChatListScreen" component={ChatListScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default ScreenStack;