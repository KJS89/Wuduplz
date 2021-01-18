import React from 'react';
import {
	View, 
	Text, 
	Button, 
	TextInput,
	Dimensions,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AddRequest = ({ navigation }) => {
	const [value, onChangeText] = React.useState('');


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
		  onPress={() => navigation.navigate('Profile')}
		  title="Create"
		  color="#841584"
		  accessibilityLabel="Learn more about this purple button"
		/>
	</View>
	)
}

export default AddRequest;