import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router/Router';
// import TabNavigator from './router/TabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Router />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;