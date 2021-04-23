import React, {useState} from 'react';
import {ScrollView, Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Container } from './styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Responses from "./Responses";

const SideTab = createMaterialTopTabNavigator();

const Requests = ({route, navigation}) => {
	const [requests, setRequest] = useState([
		{
			id: 1,
			img: require('../../../data/fruits/111cutstrawberries.gif'),
			requestMessage: 'Show me how you cut fruits',
			responsesCount: '4 users have responded!',
			hidden: false,
			posts: [
				{
					id: '1',
					videoUri: require('../../../data/fruits/111cutstrawberries.mp4'),
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
					gifImage: require('../../../data/fruits/111cutstrawberries.gif')
				},
				{
					id: '2',
					videoUri: require('../../../data/fruits/109cutlime.mp4'),
					user: {
						id: 'u1',
						username: '@cutlimeexpert',
						imageUri: 'https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2018/11/09/4189f666-e0cb-11e8-829d-1199cf0acfc4_1280x720_104300.JPG?itok=KRkKPHhD',
					},
					description: 'Cutting limes like a pro',
					requestedBy: 'foodLover',
					likes: 43,
					comments: 3,
					shares: 21,
					private: true,
					requestId: 1,
					gifImage: require('../../../data/fruits/109cutlime.gif')

				},
				{
					id: '3',
					videoUri: require('../../../data/fruits/110cutpear.mp4'),
					user: {
						id: 'u1',
						username: '@cutlimeexpert',
						imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdjUjM7JudkhxEvQ4qLf1CG31-7cvhDSMArg&usqp=CAU',
					},
					description: 'Cutting pears like a pro',
					requestedBy: 'justyna',
					likes: 23,
					comments: 3,
					shares: 31,
					private: false,
					requestId: 1,
					gifImage: require('../../../data/fruits/110cutpear.gif')

				},
				{
					id: '4',
					videoUri: require('../../../data/fruits/108cutgrapefruit.mp4'),
					user: {
						id: 'u1',
						username: '@cutgrapeexpert',
						imageUri: 'https://assets3.thrillist.com/v1/image/832785/1000x666.6666666666666/flatten;crop;jpeg_quality=70',
					},
					description: 'Cutting grapefruits for you',
					requestedBy: 'johncena',
					likes: 144,
					comments: 4,
					shares: 31,
					private: false,
					requestId: 1,
					gifImage: require('../../../data/fruits/108cutgrapefruit.gif')
				},
			]
		},
		{
			id: 2,
			img: require('../../../data/basketball/137manspinbasketb.gif'),
			requestMessage: 'How to spin a basketball',
			responsesCount: '1 users has responded!',
			hidden: false,
			posts: [                        {
				id: '8',
				videoUri: require('../../../data/basketball/137manspinbasketb.mp4'),
				user: {
					id: 'u1',
					username: '@mrspin',
					imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fiG7mazKTfIruTehelV_rm79xY6bSXVR8Q&usqp=CAU',
				},
				description: 'How to spin a basket',
				requestedBy: 'vincecarter',
				likes: 343,
				comments: 9,
				shares: 1410,
				private: true,
				requestId: 1,
				gifImage: require('../../../data/basketball/137manspinbasketb.gif')
			},]
		},
		{
			id: 3,
			img: require('../../../data/boxing/126womanjumprope.gif'),
			requestMessage: 'How to jump rope',
			responsesCount: '1 user has responded!',
			hidden: false,
			posts: []

		},
		{
			id: 5,
			img: require('../../../data/n-a.png'),
			requestMessage: 'a cute baby',
			responsesCount: 'No responses so far...',
			hidden: false,
			posts: []

		},
		{
			id: 6,
			img: require('../../../data/pottery/162pottery.gif'),
			requestMessage: 'Making a clay pottery pot',
			responsesCount: '2 users have responded!',
			hidden: false,
			posts: []

		},
		{
			id: 7,
			img: require('../../../data/hockey/143goalie.gif'),
			requestMessage: 'Defend the net in hockey',
			responsesCount: '2 users have responded!',
			hidden: false,
			posts: []

		},
		{
			id: 8,
			img: require('../../../data/boxing/145womanbox.gif'),
			requestMessage: 'Hitting the bag',
			responsesCount: '2 users have responded!',
			hidden: false,
			posts: []

		},
	]);

	const toggle = (id) => {
		const list = requests.map(item => {
			if (item.id === id) {
				item.hidden = true;
			}
			return item;
		})
		setRequest(list);
	};

	return (
		<Container>
			<ScrollView style={{paddingHorizontal: 10, margin: 5}}>
				{/*<View style={{marginTop: 15, marginBottom: 5}}>*/}
				{/*	<Text style={{color: 'black', fontSize: 15, fontWeight: 'bold', marginLeft: 7}}>Requests from you!</Text>*/}
				{/*</View>*/}

				{requests.map((request, key) => (
					<View style={{
						display: request.hidden ? 'none' : 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						marginVertical: 10,
						marginBottom: 5,
						borderBottomWidth: StyleSheet.hairlineWidth,
						borderBottomColor: '#E5E5E5',
					}} key={key}>
						<Image
							style={{
								width: 66,
								height: 88,
								//borderRadius: 50,
								borderColor: '#333',
							}}
							source={request.img} />
						<View style={{
							width: '50%'
						}}>
							<TouchableOpacity onPress={() => {navigation.navigate("Responses", {"respondText": request.requestMessage,"posts": request.posts})}} key={key}>
								<Text style={{ fontWeight: 'bold' }}>{request.requestMessage}</Text>
								<Text style={{ color: '#333' }}>{request.responsesCount}</Text>
							</TouchableOpacity>
						</View>
							<View style={{
								width: '18%',
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}>
								<TouchableOpacity onPress={() => {navigation.navigate("Responses", {'id': 1})}}>
									<FontAwesome5 name={'chevron-right'} size={22} color="lightgrey" />
								</TouchableOpacity>
								<TouchableOpacity style={{paddingRight:9}} onPress={() => {toggle(request.id)}} >
									<FontAwesome5 name={'trash-alt'} size={22} color="pink" />
								</TouchableOpacity>
							</View>
					</View>
				))}

			</ScrollView>
		</Container>
	)
}

export default Requests;