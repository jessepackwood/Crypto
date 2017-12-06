import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './SignIn'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  userSignIn() {
    console.log('Hello')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={textStyles.title}>Got Crypto?</Text>
        <SignIn userSignIn={this.userSignIn} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A3866',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const textStyles = StyleSheet.create({
  title: { 
    fontSize: 50,
    fontWeight: 'bold',
    color: '#C2C6D3',
    margin: 10
  }
});
