import 'react-native-gesture-handler';

import React, { Component } from 'react'
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Home from './src/screens/Home';
import Navigation from './src/navigation';

const App: () => React$Node = () => {
  return(
    <>
      <StatusBar barStyle="light-content"/>
      <SafeAreaView style={{flex:1, backgroundColor:'black'}}>
          <Navigation />
      </SafeAreaView>
    </>
  );
};

export default App;