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

const Favourite = ({route, navigation,RootStore}) => {

	const [videos,setVideos] = useState([])
	const [time,setTime] = useState(Date.now())

	useEffect(()=>{
	navigation.addListener('focus', async() => {
			// do something
			var result = await axios.get(SERVER_ADDRESS+`/front-end/getLikedVideo/${RootStore.UserId}`)
			setVideos(result['data'])		
			/*
				[
					{
					video_id:,
					video_image:|videoImages|videoname
					},
					......
			]
			*/
		  });
		
    },[navigation])

    navigation.addListener('blur', async() => {
        setVideos([])
    }
    ,[navigation])

    const convertViews = (param)=>{
        if(param>1000)
            return (param/1000).toFixed(1)+'k'
        else
            return param
    }

	
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
                                                videoId: video.video_id,
                                                otherParams: key,
                                                }
                                            )
                                        }}>
                                            <ImageBackground
                                                key={key}
                                                source={{uri:SERVER_ADDRESS+video.video_image, method: 'POST',
												headers: {
												  Pragma: 'no-cache',
												},}}
                                                style={{
                                                    width: ((Dimensions.get('window').width-10) / 3),
                                                    height: ((Dimensions.get('window').width) / 3)*1.3,
                                                    marginHorizontal: 1,
                                                    marginBottom: 1
                                                }}>
                                               <View style={{position: 'absolute', top: 0,right: 3, bottom: 6,  alignItems: 'flex-end',flexDirection:'row'}}>
                                                   
                                                   <FontAwesome  style={{right:3}} name={'heart'} size={16} color={'white'}/>
                                                   <Text style={{color:'white', fontSize: 12}}>{convertViews(video.likes)}</Text>
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

export default inject('RootStore')(observer(Favourite));