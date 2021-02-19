import React from 'react';
import {ScrollView, Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Container } from './styles';

const Inbox = () => {
	const requests = [
		{
			img: 'https://t1.ea.ltmcdn.com/en/images/1/7/1/20_white_cat_breeds_full_list_3171_orig.jpg',
			user: 'Record your white cat',
			message: '10 users have responded!',
			live: true
		},
		{
			img: 'https://www.tekportal.net/wp-content/uploads/2019/02/bench-press-8371.jpg',
			user: 'Take a video of your bench press',
			message: '3 users have responded!',
			live: true
		},
		{
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/300px-New_york_times_square-terabass.jpg',
			user: 'Show me new york city mainstreet',
			message: '4 users have responded!',
			live: true
		},
		{
			img: 'https://ncc-website-2.s3.amazonaws.com/images/gatineauparkplan.jpg?mtime=20190207184314&focal=none',
			user: 'Gatineau park hills',
			message: '1 user has responded!',
			live: true
		},
		{
			img: 'https://static.wikia.nocookie.net/progressivepartyofnoobs/images/0/07/NA_icon_292x225-584x450.jpg/revision/latest?cb=20180204041337',
			user: 'a cute baby',
			message: 'No response so far...',
			live: true
		},
		{
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4M9yEyd8PPmRAIUdTuFO0yqYJyTFHSOVorA&usqp=CAU',
			user: 'how to cook eggs under 20 seconds',
			message: '1 user has responded!',
			live: true
		},
		{
			img: 'https://t1.ea.ltmcdn.com/en/images/1/7/1/20_white_cat_breeds_full_list_3171_orig.jpg',
			user: 'Record your white cat',
			message: '10 users have responded!',
			live: true
		},
		{
			img: 'https://www.tekportal.net/wp-content/uploads/2019/02/bench-press-8371.jpg',
			user: 'Take a video of your bench press',
			message: '3 users have responded!',
			live: true
		},
		{
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/300px-New_york_times_square-terabass.jpg',
			user: 'Show me new york city mainstreet',
			message: '4 users have responded!',
			live: true
		},
	];

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