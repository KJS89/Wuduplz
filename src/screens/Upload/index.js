import React from 'react';
import {View, Text, Button} from 'react-native';

const Upload = () => {
	return (
	<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', fontWeight: 1000}}> 
		<Text>Please upload your response for the requestor</Text>
		<Button
		  //onPress={}
		  title="Upload your video"
		  color="#841584"
		  accessibilityLabel="Learn more about this purple button"
		/>
	</View>
	)
}

export default Upload;