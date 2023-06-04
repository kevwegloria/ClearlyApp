import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from './styles'

const LoginButton = ({onLoginPress}) => {

  const navigation = useNavigation()

    // function to navigate to homescreen from login 
  const onHomePress= () => {
    navigation.navigate('HomeScreen')
  }

  // function to navigate to signup screen from login
  const onSignUpPress = () => {
    navigation.navigate('SignUp')
  }

  return (
    <View >
        <TouchableOpacity style={styles.container} onPress={() => {onLoginPress(); onHomePress()}}>
          <Text style={styles.text}>Log in</Text>
        </TouchableOpacity>


      <View style={{ flexDirection: 'row', marginTop: 30, justifyContent: 'center' }}>
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <TouchableOpacity onPress={onSignUpPress}>
          <Text style={[styles.signUpText, { paddingLeft: 8, fontWeight: '700' }]}>Sign up</Text>
        </TouchableOpacity>
      </View>

    </View>



  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: '#80CAFF',
    borderRadius: 5,
    marginTop: 40,
    paddingHorizontal: 120,
    paddingVertical: 10,
  },

  text: {
    fontSize: 22,
    fontWeight: '500',
    color: COLORS.white,
  },

  signUpText: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: '500'
  }
})

export default LoginButton