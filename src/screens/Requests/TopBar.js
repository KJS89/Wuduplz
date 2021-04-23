import React from 'react';
import {ScrollView, Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Requests from "./index";
import RequestsForYou from "./RequestsForYou";
import Search from "./Search";

const SideTab = createMaterialTopTabNavigator();

const TabBar = ({route, navigation}) => {
    return (
        <SideTab.Navigator>
            <SideTab.Screen name="Home" component={Requests} options={{ tabBarLabel: 'Requests from you' }} />
            <SideTab.Screen name={"Search"} component={Search} options={{tabBarLabel: 'Search Requests'}} />
            <SideTab.Screen name="Settings" component={RequestsForYou} options={{ tabBarLabel: 'Requests for you' }} />
        </SideTab.Navigator>
    )
};

export default TabBar;