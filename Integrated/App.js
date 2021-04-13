import 'react-native-gesture-handler';

import React, { Component,useEffect,useState } from 'react'
import {
    SafeAreaView,
    StatusBar,
    AsyncStorage
} from 'react-native';
import { Provider } from "mobx-react";
import RootStore from './src/mobx'
import Navigation from './src/navigation';
import auth from '@react-native-firebase/auth';
import Cover from './src/components/Cover'
import {inject,observer } from "mobx-react";
import {SERVER_ADDRESS} from './data/address'
import request from './src/util/request'
import Toast from 'react-native-toast-message';



console.disableYellowBox = true

const App: () => React$Node = () => {
   const[state,setState] = useState(false)

   useEffect(()=>{
       async function run(){
            const struserInfo =  await AsyncStorage.getItem('UserInfo');
            const userinfo = struserInfo?JSON.parse(struserInfo):{};
            
            console.log('userinfo is ',userinfo)
            if(userinfo.Status){    
                const data = await request.post('/front-end/getUser',{Email:userinfo.Email})  
                RootStore.setStatus(true)
                RootStore.setRoute('Root')
                RootStore.updateRoot(data)

            }else{
                console.log('this is userinfo.status==false ')
                RootStore.setStatus(false)
            }
            setState(true)
        }
        run();

    },[])

   
    console.log('app data is ',RootStore)
    return(
        <>
            <StatusBar barStyle="light-content"/>
            <SafeAreaView style={{flex:1, backgroundColor:'black'}}>
                <Provider RootStore={RootStore}>
                {state ? <Navigation /> : <Cover/>}
                </Provider>
            </SafeAreaView>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </>
    );
};

export default App;