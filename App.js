import 'react-native-gesture-handler';

import React, { Component } from 'react'
import {
    SafeAreaView,
    StatusBar,
} from 'react-native';
import { Provider } from "mobx-react";
import RootStore from './src/mobx'
import Navigation from './src/navigation';

const App: () => React$Node = () => {
    console.log(RootStore)
    return(
        <>
            <StatusBar barStyle="light-content"/>
            <SafeAreaView style={{flex:1, backgroundColor:'black'}}>
                <Provider RootStore={RootStore}>
                    <Navigation />
                </Provider>
            </SafeAreaView>
        </>
    );
};

export default App;