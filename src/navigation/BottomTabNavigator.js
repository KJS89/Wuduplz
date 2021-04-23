import React from 'react';
import { Image, TextInput, Button, Title, Text } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Home from '../screens/Home';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import Requests from '../screens/Requests';
import AddRequest from '../screens/Upload';

import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'

import plusIcon from '../assets/images/blue-plus-icon.webp'
import Responses from "../screens/Requests/Responses";
import Results from "../screens/Search/Results";
import TabBar from "../screens/Requests/TopBar";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator tabBarOptions={{
			tabStyle: {
				backgroundColor:'#000',
				borderTopWidth: 0,
			},
			style: {
				borderTopWidth: 0,
			},
			activeTintColor: 'white',
			keyboardHidesTabBar: true,
			animationEnabled: true,
		}}>
			<Tab.Screen
				name={'Video'}
				component={Home}
				options={{
					tabBarIcon: ({color}) => (
						<Entypo name={'video'} size={24} color={color} />
					)
				}}
				initialParams={{"posts": [
						{
							id: '1',
							videoUri: require('../../data/fruits/111cutstrawberries.mp4'),
							user: {
								id: 'u1',
								username: '@chefHobbyist',
								imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTYT_cEyR5jKdn59JPSPRUKGtpLLeVuglC4A&usqp=CAU',
							},
							description: 'Cutting strawberries like a pro',
							requestedBy: 'jamisonjeffrey',
							likes: 11,
							comments: 4,
							shares: 31,
							private: true,
							requestId: 1,
						}
					]}}
			/>
			<Tab.Screen
				name='Explore'
				component={Search}
				options={{
					tabBarIcon: ({color}) => (
						<AntDesign name={'search1'} size={24} color={color} />
					),
					tabLeft: () => null,
					tabRight: () => null,
				}}
				initialParams={{query: ''}}
			/>
			<Tab.Screen
				name='Upload'
				component={AddRequest}
				options={{
					tabBarIcon: ({}) => (
						<Image
							source={plusIcon}
							style={{height: 35, resizeMode: 'contain'}}
						/>
					),
				tabBarLabel : () => null,
				}}
			/>
			<Tab.Screen
				name='Requests'
				component={TabBar}
				options={{
					tabBarIcon: ({color}) => (
						<Entypo name={'message'} size={24} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={Profile}
				options={{
					tabBarIcon: ({color}) => (
						<AntDesign name={'profile'} size={24} color={color} />
					)
				}}
				/>
			<Tab.Screen
				name='Responses'
				component={Responses}
				options={{
					tabBarButton: () => null
				}}
			/>
			<Tab.Screen
				name='Results'
				component={Results}
				options={{
					tabBarButton: () => null
				}}
				initialParams={{query: ''}}
			/>
		</Tab.Navigator>
	);
}

export default BottomTabNavigator;