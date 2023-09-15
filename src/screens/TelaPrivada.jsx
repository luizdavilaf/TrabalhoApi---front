import React, { useEffect, useContext, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import {LoginContext} from "../contexts/LoginContext";

const TelaPrivada = ({ navigation }) => {
  const { token, login } = useContext(LoginContext);
  const [privateData, setPrivateData] = useState(null);

  const fetchData = async () => {
    try {
      // Faça uma solicitação à API para buscar dados privados
      console.log(token)
      const response = await axios.get('http://localhost:3000/auth/recurso-protegido', {
        headers: {
          Authorization: token,
        },
      });
      setPrivateData(response.data)
      console.log(response.data)

    } catch (error) {
      console.error('Erro ao buscar dados privados:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text>Tela Privada</Text>
      

      {privateData ? (
        <View>
          {/* Renderize os dados privados aqui */}
          <Text>Dados Privados: {JSON.stringify(privateData)}</Text>
        </View>
      ) : (
        <Text>Carregando dados privados...</Text>
      )}

      <TouchableOpacity onPress={() => goTo('TelaPublica')}>
        <Text>Ir para Tela Pública</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TelaPrivada;
