import React from 'react';
import {ScrollView, Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'

import Favourite from './Favourite'
import Private from './Private'
import Create from './Create'

const SideTab = createMaterialTopTabNavigator();

const TabBar = ({route, navigation}) => {
    return (
        <SideTab.Navigator tabBarOptions={{
            showIcon: true,
            showLabel:false
        }}>
            <SideTab.Screen name="Favourite" component={Favourite} options={{ tabBarIcon: ({color}) => (
						<AntDesign name={'heart'} size={18} color={color} />
					),	tabLeft: () => null,
					tabRight: () => null, }} />
            {/* <SideTab.Screen name="Private" component={Private} options={{ tabBarIcon: ({color}) => (
						<AntDesign name={'search1'} size={18} color={color} />
					) }} /> */}
            <SideTab.Screen name="Create" component={Create} options={{ tabBarIcon: ({color}) => (
						<AntDesign name={'search1'} size={18} color={color} />
					) }} />
        </SideTab.Navigator>
    )
};

export default TabBar;