import React, {useEffect}from 'react';
import {
	View, 
	Text, 
	Button, 
	TextInput,
	Dimensions,
	Alert
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import request from '../../util/request'
import {inject,observer } from "mobx-react";
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';
import fire from '../../util/Firebase'

const AddRequest = ({ navigation,RootStore }) => {

	useEffect(() => {
		const unsubscribe = messaging().onMessage(async remoteMessage => {
		if(remoteMessage['data']["test"])
			Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage['data']));
		})

		return unsubscribe

	  }, []);

	const [value, onChangeText] = React.useState('');
	const [value1, onChangeText1] = React.useState('');
	const [value2, onChangeText2] = React.useState('');
	const [value3, onChangeText3] = React.useState('');

	const sendRequest = async ()=>{
		console.log(value)
		var result = await request.post('/front-end/sendRequest',{
			'requestContent':value,
			'requestorId':RootStore.UserId

		})
		console.log(result)
	}

	const sendVideo = async()=>{
		if(value1!=''||value2!=''||value3!=''){
			var url ='http://34.68.41.157//api/v1.0/video-recommendation'
			var parameter=''
			if(value1!='')
				parameter = parameter +'&videoTagList='+value1
			if(value2!='')
				parameter = parameter +'&videoTagList='+value2
			if(value3!='')
				parameter = parameter +'&videoTagList='+value3
			
			parameter=parameter.replace('&','?')
			url = url + parameter
			
			var result = await request.get(url)
			alert('recommended video is '+result['videoRecommendationList'])
		}
	}
	const sendUser = async()=>{
		if(value1!=''||value2!=''||value3!=''){
			var url ='http://34.68.41.157//api/v1.0/user-recommendation'
			var parameter=''
			if(value1!='')
				parameter = parameter +'&userTagList='+value1
			if(value2!='')
				parameter = parameter +'&userTagList='+value2
			if(value3!='')
				parameter = parameter +'&userTagList='+value3
			
			parameter=parameter.replace('&','?')
			url = url + parameter
			
			var result = await request.get(url)
			alert('recommended user is '+result['userRecommendationList'])
		}
	
	
	}
	const sendSentence = async()=>{
		var parameter=value1
		var url ='http://34.68.41.157:8080/get_request_keywords/'
		url = url+value1
		var result = await request.get(url)
		alert('key words are:--- '+result['result keywords'])
	}


	const test = async()=>{
		console.log(await fire.checkUser(value1))
	}




	return (

	<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', fontWeight: 1000}}> 
		<Text>Would you please...</Text>

	    <TextInput
	      style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
	      onChangeText={text => onChangeText(text)}
	      placeholder={'Make your request...'}
	      value={value}
	    />

		<Button
		  onPress={sendRequest}
		  title="Create"
		  color="#841584"
		  accessibilityLabel="Learn more about this purple button"
		/>


		<Text>test area for python script...</Text>
		<TextInput
	      style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 60 }}
	      onChangeText={text => onChangeText1(text)}
	      placeholder={'type words...'}
	      value={value1}
	    />
		<TextInput
	      style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 60 }}
	      onChangeText={text => onChangeText2(text)}
	      placeholder={'type words...'}
	      value={value2}
	    />
		<TextInput
	      style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 60 }}
	      onChangeText={text => onChangeText3(text)}
	      placeholder={'type words...'}
	      value={value3}
	    />
		<View style={{flexDirection: 'row'}}>
		<View style={{flex:1 , marginRight:5}} >
		<Button
		  onPress={sendVideo}
		  title="video"
		  color="#841584"
		  accessibilityLabel="Learn more about this purple button"
		/>
		</View>
		<View style={{flex:1 , marginRight:5}} >
		<Button
		  onPress={test}
		  title="user"
		  color="#841584"
		  accessibilityLabel="Learn more about this purple button"
		/>
		</View>
		<View style={{flex:1 , marginRight:5}} >
		<Button
		  onPress={sendSentence}
		  title="sentence"
		  color="#841584"
		  accessibilityLabel="Learn more about this purple button"
		/>
		</View>
		</View>
	</View>
	)
}

export default inject('RootStore')(AddRequest);