import React,{useState,useEffect} from 'react';

import { NavigationContainer, StatusBar } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import Upload from '../screens/Upload';
import Requests from '../screens/Requests'
import Responses from "../screens/Requests/Responses";
import Results from '../screens/Search/Results'
import BottomTabNavigator from "./BottomTabNavigator";
import Record from "../screens/Requests/Record";
import Video from "../screens/Home"
import LoginView from '../pages/login'
import SignUp from '../pages/signup'
import Cover from '../components/Cover'
import Mess from '../pages/message'
import Notif from '../pages/notification'
import Edit from '../pages/edit'
import {inject,observer } from "mobx-react";
import VideoUpload from '../screens/Requests/VideoUpload'
import Progress from '../screens/Requests/ProgressBar'
import Test from '../test/test'
import Membership from '../screens/Profile/Membership'
import Payment from '../screens/Profile/Payment'
import Keyword from '../screens/Profile/Keyword'

const Stack = createStackNavigator();

const RootNavigation = (RootStore) => {
	const[state, setState] = useState(false)

	const[initialRouteName,setInitialRoute] = useState('Login')

	useEffect(()=>{
		var route = RootStore.RootStore.status?"Root":"Login"
		setInitialRoute(route)
		setState(true)
	},[])
	return (

		state?<NavigationContainer>
					<Stack.Navigator screenOptions={{
						headerShown: false,//initialRouteName
					}} initialRouteName={initialRouteName}>
						<Stack.Screen name="Root" component={BottomTabNavigator} />
						<Stack.Screen name="Record" component={Record} />
						<Stack.Screen name="Login" component={LoginView} />
						<Stack.Screen name="SignUp" component={SignUp} />
						<Stack.Screen name="Video" component={Video} />
						<Stack.Screen name="Mess" component={Mess} />
						<Stack.Screen name="Notif" component={Notif} />
						<Stack.Screen name="Edit" component={Edit} />
						<Stack.Screen name="VideoUpload" component={VideoUpload} />
						<Stack.Screen name="Progress" component={Progress} />
						<Stack.Screen name="Membership" component={Membership} />
						<Stack.Screen name="Payment" component={Payment} />
						<Stack.Screen name="Keyword" component={Keyword} />
						<Stack.Screen name="Test" component={Test} />
					</Stack.Navigator>
				</NavigationContainer> : <Cover/>
	)
}

export default inject('RootStore')(observer(RootNavigation)); 