import React, { Component } from 'react';
import {
	Button,
	Keyboard,
	StyleSheet,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	ActivityIndicator
} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default class Upload extends React.Component {
	constructor(props) {
		super(props);

		this.state = { name: '', submit: false, sentMessage: 'Sending', sendIndicator: true, receivingMessage: 'Receiving', receivingIndicator: true, respondingIndicator: true, respondingMessage: 'Responding' }

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async componentDidMount() {

	}

	handleNameChange(name) {
		this.setState({ name: name, submit: false });
	}

	handleSubmit() {
		// reset the states
		this.setState({disabledButton: true, name: '', submit: false, sentMessage: 'Sending', sendIndicator: true, receivingMessage: 'Receiving', receivingIndicator: true, respondingIndicator: true, respondingMessage: 'Responding'});
		// start the process
		this.setState({name: '', submit: true});
		setTimeout(() => {this.setState({sentMessage: 'Sent', sendIndicator: false}) }, 2000);
		setTimeout( () => {this.setState({receivingMessage: 'Received by 4', receivingIndicator: false})}, 5000)
		setTimeout( () => {this.setState({respondingMessage: 'Responded by 3', respondingIndicator: false})}, 9000)

	}

	render() {
		return (
			<View style={styles.container}>
				<View>
					<Text style={styles.header}>Wuduplz</Text>
				</View>
				{/*<View style={{margin: 10}}>*/}
				{/*	<Text style={{fontSize: 15, margin: 10, paddingLeft: 25, alignItems:'center', paddingRight: 15}}>*/}
				{/*		Ex. Show me streets of New York Times Square*/}
				{/*	</Text>*/}
				{/*</View>*/}
				<ScrollView>
					<View style={styles.inputContainer}>
						<TextInput
							style={styles.textInput}
							placeholder="Show me Byward Market..."
							maxLength={100}
							onBlur={Keyboard.dismiss}
							value={this.state.name}
							onChangeText={this.handleNameChange}
						/>
					</View>
					<View style={styles.inputContainer}>
						<TouchableOpacity
							style={{...styles.saveButton}}
							onPress={this.handleSubmit}
						>
							<Text style={styles.saveButtonText}>Create Request</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.inputContainer}>
						<TouchableOpacity
						>
							<View style={{flexDirection: 'row', justifyContent: 'center', display: this.state.submit ? 'flex' : 'none'}}>

								{this.state.sendIndicator ? <ActivityIndicator size="small" color="green" /> : <AntDesign style={{marginTop: 2, marginRight: 3}} name={'checkcircleo'} size={15} color={'green'} />}
								<Text style={{
									fontSize: 13,
									textAlign: 'center',
									marginRight: 5
								}}>{this.state.sentMessage}</Text>

								{this.state.sentMessage !== 'Sending' && <View style={{flexDirection: 'row', justifyContent: 'center'}}>
									{this.state.receivingIndicator ? <ActivityIndicator size="small" color="blue" /> : <AntDesign style={{marginTop: 2, marginRight: 3}} name={'checkcircleo'} size={15} color={'blue'} />}
									<Text style={{
										fontSize: 13,
										textAlign: 'center',
										marginRight: 5
									}}>{this.state.receivingMessage}</Text>
								</View>}

								{this.state.receivingMessage !== 'Receiving' && <View style={{flexDirection: 'row', justifyContent: 'center'}}>
									{this.state.respondingIndicator ? <ActivityIndicator size="small" color="purple" /> : <AntDesign style={{marginTop: 2, marginRight: 3}} name={'checkcircleo'} size={15} color={'purple'} />}
									<Text style={{
										fontSize: 13,
										textAlign: 'center',
										marginRight: 5
									}}>{this.state.respondingMessage}</Text>
								</View>}


							</View>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 45,
		backgroundColor: '#F5FCFF',
	},
	header: {
		fontSize: 35,
		textAlign: 'center',
		margin: 10,
		fontWeight: 'bold',
		paddingTop: 140,
	},
	inputContainer: {
		paddingTop: 15
	},
	textInput: {
		borderColor: '#CCCCCC',
		borderTopWidth: 1,
		borderBottomWidth: 1,
		height: 50,
		fontSize: 20,
		paddingLeft: 20,
		paddingRight: 20
	},
	saveButton: {
		borderWidth: 1,
		borderColor: '#007BFF',
		backgroundColor: '#007BFF',
		padding: 15,
		margin: 5,
	},
	saveButtonText: {
		color: '#FFFFFF',
		fontSize: 20,
		textAlign: 'center'
	}
});