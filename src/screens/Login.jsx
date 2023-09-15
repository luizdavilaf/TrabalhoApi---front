import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import {LoginContext} from "../contexts/LoginContext";


const LoginScreen = ({ goTo }) => {
  const { token, login } = useContext(LoginContext);
  
//console.log("nav:", navigation)
   const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        username,
        password,
      });
      const authtoken = response.data.token;

     await login(authtoken)
     
      goTo('TelaPrivada')
     
    } catch (error) {
      console.error('Erro ao fazer login:', error);      
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Login"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity onPress={ handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;