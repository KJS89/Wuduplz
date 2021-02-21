import React,{ useState,useEffect, } from 'react';
import {ScrollView, Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Container } from './styles';

import axios from 'axios'

const Inbox = () => {
	const [requests,setRequest] = useState([])
	useEffect(()=>{
	async function getRequest(){
	var result = await	axios.create({
		baseURL:'http://192.168.2.94:3000/'
	}).get('/front-end/getRequest')
	// .then((result)=>{
	// 	//console.log(result['data'][0])
	// 	setRequest(result['data'])
	//}
	setRequest(result['data'])
}
	getRequest()
	},[]
	)

	console.log(requests)

	return (
		<Container>
			<ScrollView style={{paddingHorizontal: 10}}>
				<View style={{marginTop: 15, marginBottom: 5}}>
					<Text style={{color: 'black', fontSize: 15, fontWeight: 'bold', marginLeft: 7}}>Requests</Text>
				</View>

				{requests.map((request, key) => (
					<TouchableOpacity style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						marginVertical: 10
					}} key={key}>
						<Image
							resizeMode="contain"
							style={{
								width: 66,
								height: 66,
								borderRadius: 3,
								borderColor: '#333',
								borderWidth: StyleSheet.hairlineWidth
							}}
							source={{ uri: request.img }} />
						<View style={{
							width: '50%'
						}}>
							<Text style={{ fontWeight: 'bold' }}>{request.user}</Text>
							<Text style={{ color: '#333' }}>{request.message}</Text>
						</View>
						{request.live ? (
							<View style={{
								width: '23%',
								alignItems: 'center',
								justifyContent: 'center',
							}}>
								<FontAwesome5 name={'chevron-right'} size={20} color="#E5E5E5" />
							</View>
						) : (
							<View style={{
								width: '25%',
								padding: 5,
								alignItems: 'center',
								justifyContent: 'center',
								borderWidth: 1,
								borderColor: '#E5E5E5'
							}}>
								<Text style={{ color: '#010101' }}>Friends</Text>
							</View>
						)}
					</TouchableOpacity>
				))}

			</ScrollView>
		</Container>
	)
}

export default Inbox;