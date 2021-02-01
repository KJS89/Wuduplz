import React from 'react';

import { NavigationContainer, StatusBar } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import Upload from '../screens/Upload';
import Inbox from '../screens/Inbox'
import Results from '../screens/Search/Results'
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator();

const RootNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{
				headerShown: false,
			}}>
				<Stack.Screen name="Root" component={BottomTabNavigator} />
				<Stack.Screen name="Results" component={Results} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default RootNavigation; 