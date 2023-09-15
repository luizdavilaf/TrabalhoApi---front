import React, { useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { CounterContext } from '../contexts/CounterContext';

const TelaPublica = ({ navigation }) => {
  const { increment } = useContext(CounterContext);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/recurso-desprotegida');
      console.log('Dados públicos:', response.data);
      
    } catch (error) {
      console.error('Erro ao buscar dados públicos:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text>Tela Pública</Text>
      <TouchableOpacity onPress={() => navigation.navigate('TelaPrivada')}>
        <Text>Ir para Tela Privada</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TelaPublica;