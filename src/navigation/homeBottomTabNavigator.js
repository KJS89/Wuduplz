import React from 'react';
import { Image, Text } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import Inbox from '../screens/Inbox';
import AddRequest from '../screens/Upload';

import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'

import plusIcon from '../assets/images/plus-icon.png'

const Tab = createBottomTabNavigator();




const HomeBottomTabNavigator = () => {
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
		}}>
			<Tab.Screen 
				name={'Home'} 
				component={Home} 
				options={{
					tabBarIcon: ({color}) => (
						<Entypo name={'home'} size={24} color={color} />
					)
				}}
			/>
			<Tab.Screen 
				name='Explore' 
				component={Search} 
				options={{
					tabBarIcon: ({color}) => (
						<AntDesign name={'search1'} size={24} color={color} />
					),
					tabBarHeader: () => <TextInput
						placeholder="Search"
						placeHolderTextColor="#333"
						style={{
							flex: 1,
							marginBottom: 5,
							paddingHorizontal: 15,
							alignSelf: 'stretch',
							width: Dimensions.get("window").width - 50,
							backgroundColor: '#F5F5F5'
						}} />,
					tabLeft: () => null,
					tabRight: () => null,
				}} />
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
				component={Inbox} 
				options={{
					tabBarIcon: ({color}) => (
						<Entypo name={'message'} size={24} color={color} />
					)
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
		</Tab.Navigator>
	);
}

export default HomeBottomTabNavigator;