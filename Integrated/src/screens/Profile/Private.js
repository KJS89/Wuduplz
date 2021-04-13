import React, { useState } from 'react';
import {ScrollView, Text, Image, View, TouchableOpacity, StyleSheet,RefreshControl,TouchableHighlight,Button,ImageBackground,Dimensions } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useEffect } from 'react/cjs/react.development';

import axios from 'axios'
import {inject,observer } from "mobx-react";
import request from '../../util/request'
import {SERVER_ADDRESS} from '../../../data/address'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Swipeout from 'react-native-swipeout';
import {Container} from "./styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const SideTab = createMaterialTopTabNavigator();

const Private = ({route, navigation,RootStore}) => {
	const videos = [
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: 'https://i.pinimg.com/564x/27/b4/5c/27b45cfadb28dbd857ebd662fe3cc1fe.jpg'},
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: 'https://66.media.tumblr.com/2170b24c045a368996ed3d0b84e74c4e/tumblr_pjn69mp52s1tbym8o_1280.jpg'},
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: 'https://cdn.mensagenscomamor.com/content/images/m000518052.jpg?v=1&w=600&h=941'},
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: 'https://i.pinimg.com/236x/61/69/67/61696742e1b2d8b0d3ed70efaa1b0f89.jpg'},
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: 'https://i.pinimg.com/236x/61/69/67/61696742e1b2d8b0d3ed70efaa1b0f89.jpg'},
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: 'https://i.pinimg.com/236x/61/69/67/61696742e1b2d8b0d3ed70efaa1b0f89.jpg'},
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: 'https://i.pinimg.com/236x/61/69/67/61696742e1b2d8b0d3ed70efaa1b0f89.jpg'},
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: 'https://i.pinimg.com/236x/61/69/67/61696742e1b2d8b0d3ed70efaa1b0f89.jpg'},
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: 'https://i.pinimg.com/236x/61/69/67/61696742e1b2d8b0d3ed70efaa1b0f89.jpg'},
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: 'https://i.pinimg.com/236x/61/69/67/61696742e1b2d8b0d3ed70efaa1b0f89.jpg'},
    ]


	
	return (
		<Container>
            <ScrollView style={{paddingHorizontal: 0}}>
                    <View  style={{
                        paddingVertical: 15,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        borderBottomColor: '#E5E5E5',
                    }}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: 0
                        }}>
                           
                            <View style={{
                                width: '50%'
                            }}>
                                
                            </View>
                        
                        </View>
                        <View style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <ScrollView>
                              

                                <View style={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                }}>
                                    {videos.map((video, key) => (
                                        <TouchableHighlight key={key} onPress={() => {
                                            navigation.navigate("Video", {
                                                    itemId: 'from Results',
                                                    otherParams: key,
                                                }
                                            )
                                        }}>
                                            <ImageBackground
                                                key={key}
                                                source={{uri:video.image}}
                                                style={{
                                                    width: ((Dimensions.get('window').width-10) / 3),
                                                    height: ((Dimensions.get('window').width) / 3)*1.3,
                                                    marginHorizontal: 1,
                                                    marginBottom: 1
                                                }}>
                                                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                                                    <Text style={{position: 'absolute', bottom: 60, left: 5, color:'white', fontSize: 12, backgroundColor:'grey'}}>2020-03-04</Text>
                                                    <Text style={{position: 'absolute', bottom: 5, left: 2, color:'white', fontSize: 12}}>@daviddobrik</Text>
                                                    <Text style={{position: 'absolute', bottom: 25, left: 5, color:'white', fontSize: 14}}>#skiing #adventure #palmtrees</Text>
                                                    <FontAwesome style={{position:'absolute', bottom:6, right: 45}} name={'heart'} size={16} color={'white'}/>
                                                    <Text style={{position: 'absolute', bottom: 6, right: 3, color:'white', fontSize: 12}}>302.4K</Text>
                                                </View>
                                            </ImageBackground>
                                        </TouchableHighlight>
                                    ))}
                                </View>
                        </ScrollView>
                        </View>
                    </View>
            </ScrollView>
        </Container>
	)
}

export default inject('RootStore')(observer(Private));