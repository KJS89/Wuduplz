import React, { useState } from 'react';
import {ScrollView, Text, Image, View, TouchableOpacity, StyleSheet,RefreshControl,Button,Alert } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useEffect } from 'react/cjs/react.development';

import { Container } from './styles';
import axios from 'axios'
//import {SERVER_ADDRESS} from '../../../data/address'
import {inject,observer } from "mobx-react";
import request from '../../util/request'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Swipeout from 'react-native-swipeout';
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';
import fire from '../../util/Firebase'
import Time from '../../util/Time'


const SideTab = createMaterialTopTabNavigator();


 const Messages = ({route, navigation,RootStore}) => {

	const SERVER_ADDRESS = RootStore.server;
	const [refreshing, setRefreshing] = React.useState(false);
	const onRefresh = React.useCallback(async() => {
		 setRefreshing(true);
		var result = await request.get(`/front-end/likeMessage/${RootStore.UserId}`)
		setRequest(result)
  
		setRefreshing(false)

	  }, []);


	  useEffect(()=>{
		const unsubscribe = navigation.addListener('focus', () => {
			// do something
			onRefresh()
		  });
	  
		  return unsubscribe;
    },[navigation])
	
	
	// const Delete = async(comment_id)=>{
	// 	var deletere = await request.get(`/front-end/readComment/${comment_id}`)
	// 	// alert(deletere)
	// 	var result = await request.get(`/front-end/commentMessage/${RootStore.UserId}`)
	// 	setRequest(result)
	// }
	const [requests,setRequest] = useState([])
	useEffect( ()=>{
		async function getRequest(){
			var result = await axios.get(`${SERVER_ADDRESS}/front-end/likeMessage/${RootStore.UserId}`)
			setRequest(result['data'])
		};
        async function message(){
            const unsubscribe = messaging().onMessage(async remoteMessage => {
                
                if(remoteMessage["data"]["Like"]){
                    //Alert.alert('Message For you!', JSON.stringify(remoteMessage['data']));
                    var result = await axios.get(`${SERVER_ADDRESS}/front-end/likeMessage/${RootStore.UserId}`)
                    

                    setRequest(result['data'])
            
                }
            });
            return unsubscribe;
        };
        message();
      
		getRequest();

	},[])


    // useEffect( ()=>{
  
    //     },[])
	// const requests = [
    //         {
    //             request_id:'1',
    //             img: 'https://t1.ea.ltmcdn.com/en/images/1/7/1/20_white_cat_breeds_full_list_3171_orig.jpg',
    //             commentator: 'Jack',
    //             dat: '2021-03-23'
    //     	},
    //         {
    //             request_id:'1',
    //             img: 'https://t1.ea.ltmcdn.com/en/images/1/7/1/20_white_cat_breeds_full_list_3171_orig.jpg',
    //             commentator: 'Jack',
    //             dat: '2021-03-23'
    //     	},
    //         {
    //             request_id:'1',
    //             img: 'https://t1.ea.ltmcdn.com/en/images/1/7/1/20_white_cat_breeds_full_list_3171_orig.jpg',
    //             commentator: 'Jack',
    //             dat: '2021-03-23'
    //     	},
 

	// ];
	

	return (
		<Container>
			<ScrollView style={{paddingHorizontal: 10, margin: 5}}
			refreshControl={
				<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
			  }>
				<View style={{marginTop: 15, marginBottom: 5}}>
					<Text style={{color: 'black', fontSize: 15, fontWeight: 'bold', marginLeft: 7}}>Requests from you!</Text>
				</View>

				{requests.map((request, key) => (
					
					<TouchableOpacity style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						marginVertical: 10
					}} onPress={() => {alert('message')}} key={key}>
						
						<Image
							style={{
								width: 66,
								height: 66,
								borderRadius: 50,
								borderColor: '#333',
							}}
							source={require('../../../icon/heart.png')} />
						<View style={{
							width: '50%'
						}}>
							<Text style={{ fontWeight: 'bold' }}>{request.username+' liked'}</Text>
							<Text style={{ color: '#333' }}>{'liked '+Time.convertTime(request.dat,Date.now()/1000)}</Text>
						</View>
						<TouchableOpacity
							style={{
								display: 'flex',
								width: 40,
					
						
							}}
						
							onPress={()=>{
								alert('delete')
							}}
						>
							<Text>Delete</Text>
						</TouchableOpacity>
							<View style={{
								width: '23%',
								alignItems: 'center',
								justifyContent: 'center',
							}}>
								
							</View>

					</TouchableOpacity>
				
				))}

			</ScrollView>
		</Container>
	)
}

export default inject('RootStore')(observer(Messages));