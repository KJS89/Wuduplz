import React from 'react';

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

import LoginView from '../screens/Auth/login';
import SignUp from '../screens/Auth/signup';

const Stack = createStackNavigator();

const RootNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{
				headerShown: false,
			}} initialRouteName={'Login'}>
				<Stack.Screen name="Root" component={BottomTabNavigator} />
				<Stack.Screen name="Record" component={Record} />
				<Stack.Screen name="Login" component={LoginView} />
				<Stack.Screen name="SignUp" component={SignUp} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default RootNavigation; 