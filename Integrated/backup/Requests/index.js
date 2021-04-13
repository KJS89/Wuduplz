import React, { useState } from 'react';
import {ScrollView, Text, Image, View, TouchableOpacity, StyleSheet,RefreshControl,Button } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useEffect } from 'react/cjs/react.development';

import { Container } from './styles';
import axios from 'axios'
import {inject,observer } from "mobx-react";
import request from '../../util/request'
import {SERVER_ADDRESS} from '../../../data/address'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Responses from "./Responses";
import Swipeout from 'react-native-swipeout';

const SideTab = createMaterialTopTabNavigator();

const Requests = ({route, navigation,RootStore}) => {
	const swipeoutBtns = [
        {
          text: 'Button'
        }
      ]


	const [refreshing, setRefreshing] = React.useState(false);
	const onRefresh = React.useCallback(async() => {
		setRefreshing(true);
		var result = await request.get(`/front-end/getRequest/${RootStore.UserId}`)
		setRequest(result)

		setRefreshing(false)
	  }, []);
	
	
	const Delete = async(requestid)=>{
		var deletere = await request.get(`/front-end/deleteRequest/${requestid}`)
		alert(deletere)
		var result = await axios.get(`${SERVER_ADDRESS}/front-end/getRequest/${RootStore.UserId}`)
		setRequest(result['data'])
	}
	const [requests,setRequest] = useState([])
	useEffect( ()=>{
		async function getRequest(){
			var result = await axios.get(`${SERVER_ADDRESS}/front-end/getRequest/${RootStore.UserId}`)
			setRequest(result['data'])
			console.log(result['data'][0])
		};
		getRequest();

	},[])
	/*const requests = [
		{
			request_id:'1',
			img: 'https://t1.ea.ltmcdn.com/en/images/1/7/1/20_white_cat_breeds_full_list_3171_orig.jpg',
			requestMessage: 'Record your white cat',
			responsesCount: '10 users have responded!',
		},
	];
	*/

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
					}} onPress={() => {navigation.navigate("Responses", {responses:request.responses})}} key={key}>
						
						<Image
							style={{
								width: 66,
								height: 66,
								borderRadius: 50,
								borderColor: '#333',
							}}
							source={{uri:SERVER_ADDRESS+request.img}} />
						<View style={{
							width: '50%'
						}}>
							<Text style={{ fontWeight: 'bold' }}>{request.requestMessage}</Text>
							<Text style={{ color: '#333' }}>{request.responseCount}</Text>
						</View>
						<TouchableOpacity
							style={{
								display: 'flex',
								width: 40,
					
						
							}}
						
							onPress={()=>{
								Delete(request.RequestId)
							}}
						>
							<Text>Delete</Text>
						</TouchableOpacity>
							<View style={{
								width: '23%',
								alignItems: 'center',
								justifyContent: 'center',
							}}>
								<FontAwesome5 name={'chevron-right'} size={20} color="#E5E5E5" />
							</View>
{/* 
							<TouchableOpacity
								style={{height: 40, paddingHorizontal: 5, alignItems: 'center', justifyContent: 'center'}}
								onPress={() => {props.closeModal()}}
							>
									<Text style={{color: 'red', fontWeight: 'bold', textAlign: 'center'}}>delete</Text>
							</TouchableOpacity> */}
					</TouchableOpacity>
				
				))}

			</ScrollView>
		</Container>
	)
}

export default inject('RootStore')(observer(Requests));