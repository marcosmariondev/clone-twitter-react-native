import React, {Component} from 'react';

import {View, Text, 
  KeyboardAvoidingView, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {
  state = {
    username: ''
  }

  async componentDidMount() {
    const username = await AsyncStorage.getItem("@GoTwitter:username")
    if(username)
     this.props.navigation.navigate("App");
  }

  handleInputChange = username => this.setState({ username });

  handleLogin = async () => {
    const {username} = this.state;
    if (!username.length) return;

    await AsyncStorage.setItem('@GoTwitter:username', username);

    this.props.navigation.navigate("App");
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <View style={styles.content}>
          <View>
            <Icon name="twitter" size={63} color="#4BB0EE" />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Nome de usuário"
            value={this.state.username}
            onChangeText={this.handleInputChange}
            returnKeyType="send"
            onSubmitEditing={this.handleLogin}
          />

          <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop:30
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    marginTop:30
  },

  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    height: 44,
    paddingHorizontal: 15,
    alignSelf: 'stretch',
    marginTop: 30
  },

  button: {
    height: 44,
    alignSelf: 'stretch',
    marginTop: 10,
    backgroundColor: '#4BB0EE',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
