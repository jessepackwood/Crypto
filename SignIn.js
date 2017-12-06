import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const SignIn = ({userSignIn}) => {
  return (
    <View>
      <TextInput style={inputStyle.input} placeholder='Email' />
      <TextInput style={inputStyle.input} placeholder='Password' />
      <Button title='Sign In' onPress={userSignIn} />
    </View>
    )
}

const inputStyle = StyleSheet.create ({
  input: {
    backgroundColor: '#fff',
    fontSize: 38,
    margin: 10,
    height: 40,
    width: 250
  }
})
export default SignIn