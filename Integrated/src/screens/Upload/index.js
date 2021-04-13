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
import Toast from 'react-native-toast-message';

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



	const test = async()=>{
		Toast.show({
			text1: 'Hello',
			text2: 'This is some something 👋'
		  });

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


	</View>
	)
}

export default inject('RootStore')(AddRequest);