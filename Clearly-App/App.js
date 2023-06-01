import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import ScreenStack from './src/navigation/ScreenStack';

export default function App() {

  return (
      <NavigationContainer>
        <StatusBar style='auto' />
        <ScreenStack />
      </NavigationContainer>
    )

}
