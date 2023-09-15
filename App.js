
//import { createStackNavigation } from '@react-navigation/stack';
import LoginScreen from './src/screens/Login';
import TelaPublica from './src/screens/TelaPublica';
import TelaPrivada from './src/screens/TelaPrivada';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card from './src/components/Card';
import Button from './src/components/Button';
import { useState } from 'react';
import LoginContext, { LoginProvider } from './src/contexts/LoginContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//const Stack = createStackNavigation();

const App = () => {

  const [activeScreen, setActiveScreen] = useState('LoginScreen')
  const goTo = (screenName) => {
    setActiveScreen(screenName);
  };
  return (
    <LoginProvider>
      <View style={styles.container}>

        {activeScreen === 'LoginScreen' && (
          <LoginScreen goTo={goTo} />
        )}

        {activeScreen === 'TelaPublica' &&
          <View>
            <TelaPublica goTo={goTo} />            
            <Button
              title="Voltar"
              onPress={() => setActiveScreen('LoginScreen')}
            />
          </View>
        }

        {activeScreen === 'TelaPrivada' &&
          <View>
            <TelaPrivada goTo={goTo} />
            <Button
              title="Voltar"
              onPress={() => setActiveScreen('LoginScreen')}
            />
          </View>
        }

      </View>
    </LoginProvider>
  );
};

export default App;