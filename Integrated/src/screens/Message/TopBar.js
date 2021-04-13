import React from 'react';
import {ScrollView, Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Message from "./index";
import Like from "./like";

const SideTab = createMaterialTopTabNavigator();

const TabBar = ({route, navigation}) => {
    return (
        <SideTab.Navigator>
            <SideTab.Screen name="Message" component={Message} options={{ tabBarLabel: 'Messages' }} />
           
        </SideTab.Navigator>
    )
};

export default TabBar;