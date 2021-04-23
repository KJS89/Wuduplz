import React, { Component } from 'react';
import {
	Button,
	Keyboard,
	StyleSheet,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native';

export default class Upload extends React.Component {
	constructor(props) {
		super(props);

		this.state = { name: '' }

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async componentDidMount() {

	}

	handleNameChange(name) {
		this.setState({ name });
	}

	handleSubmit() {
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
							style={styles.saveButton}
							onPress={this.handleSubmit}
						>
							<Text style={styles.saveButtonText}>Create Request</Text>
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