import fire from '../../util/Firebase'
import {inject,observer } from "mobx-react";
import { NavigationContainer } from '@react-navigation/native';
import React, { Component,useState,useEffect } from 'react';
// import { Text, Button, withStyles, Avatar } from 'react-native-ui-kitten'
import { Dimensions } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import {
  AppRegistry,
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
AsyncStorage
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {SERVER_ADDRESS} from '../../../data/address'
import TopBar from './TopBar'

var {width,height,scale} =Dimensions.get('window');
var iWidth=width-30;


const Profile = ({RootStore ,navigation}) => {

	// state = {
	// 	NickName:this.props.RootStore.UserName,
	// 	Email:this.props.RootStore.Email,
	// 	Keyword1:this.props.RootStore.keywords[0],
	// 	Keyword2:this.props.RootStore.keywords[1],
	// 	Keyword3:this.props.RootStore.keywords[2],
	// 	City:this.props.RootStore.City,
	// 	Country:this.props.RootStore.Country,
	// 	image_uri:this.props.RootStore.Image
	//   }

	const [Head,setHead] = useState(SERVER_ADDRESS+RootStore.Image.split('|').join('//'))
	const [NickName,setNickName] = useState(RootStore.UserName)
	const [Email,setEmail] = useState(RootStore.Email)
	const [Keyword1,setKeyword1] = useState(RootStore.keywords[0].KeywordContent)
	const [Keyword2,setKeyword2] = useState(RootStore.keywords[1].KeywordContent)
	const [Keyword3,setKeyword3] = useState(RootStore.keywords[2].KeywordContent)
	const [City,setCity] = useState(RootStore.City)
	const [Country,setCountry] = useState(RootStore.Country)

	const setParameters = async()=>{
		setHead(SERVER_ADDRESS+RootStore.Image.split('|').join('//'))
		setNickName(RootStore.UserName),
		setEmail(RootStore.Email)
		setKeyword1(RootStore.keywords[0].KeywordContent)
		setKeyword2(RootStore.keywords[1].KeywordContent)
		setKeyword3(RootStore.keywords[2].KeywordContent)
		setCity(RootStore.City)
		setCountry(RootStore.Country)
	}

	useEffect(()=>{
		const unsubscribe = navigation.addListener('focus', () => {
			// do something
			setParameters()
			console.log('focuse')
		  });
	  
		  return unsubscribe;
    },[navigation])



	async function removeItemValue(key) {
		try {
			await AsyncStorage.removeItem(key);
			return true;
		}
		catch(exception) {
			return false;
		}
	}

	const logout = async ()=>{
		fire.deleteUser(RootStore.UserId)
		await removeItemValue('UserInfo')
		await navigation.navigate('Login')

		alert('lout out')
	}
	console.log('profile rootstore is ',RootStore)
	return (
	
		
		


       
    //   </View>
	<View style={themedStyle.root}>
		<View style={[themedStyle.header, themedStyle.bordered]} >
		<Image
			source={{uri:Head}}
			style={themedStyle.avatar }
      	/>
			<Text style={themedStyle.userName}>
				{NickName}
			</Text>
			<Text style={themedStyle.info}>{Email} </Text>
			<View style={themedStyle.location_container}>
				<Text style={themedStyle.info}>{City} </Text>
				<Text style={themedStyle.info}>{Country} </Text>
			</View>
			<View style={themedStyle.buttons}>
				
					<TouchableOpacity style={themedStyle.button} onPress={()=>navigation.navigate('Edit')}>
							<Text style={themedStyle.button_text}>Edit Profile</Text>
					</TouchableOpacity>
			
					<TouchableOpacity style={themedStyle.button}
							onPress={() => logout()}
						>
								<Text style={themedStyle.button_text}>Logout</Text>
					</TouchableOpacity>
				
			</View>
    </View>
	<View>
		<TopBar></TopBar>
	</View>
	

    {/* <View style={[themedStyle.userInfo, themedStyle.bordered]}>
      <View style={themedStyle.section}>
    
		<Entypo name={'heart'} size={24} color='grey' />
      </View>
      <View style={themedStyle.section}>
       
		<Entypo name={'heart'} size={24} color='grey' />
      </View>
      <View style={themedStyle.section}>
       
		<Entypo name={'lock'} size={24} color='grey' />
       
      </View>
    </View> */}
  
  	</View>



	)
}

  const themedStyle = StyleSheet.create({
	root: {
		backgroundColor: "white",
		marginTop: 0
	  },
	  header: {
		alignItems: 'center',
		paddingTop: 25,
		paddingBottom: 17
	  },
	  avatar: {
		width: 90,
		height: 90,
		borderRadius: 63,
		borderWidth: 4,
		borderColor: "white",
		marginBottom:0,
	  },
	  info:{
		fontSize:12,
		color:"#778899",
		fontWeight:'600'
	  },
	  title:{
		fontSize:18,
		color:"#000000",
		fontWeight:'bold'
	  },
	  userInfo: {
		flexDirection: 'row',
		paddingVertical: 20,
	  },
	  location_container:{
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		paddingBottom: 18
	  },
	  bordered: {
		borderBottomWidth: 1,
		borderColor:"#dde1eb"
	  },
	  section: {
		flex: 1,
		alignItems: 'center'
	  },
	  space: {
		paddingVertical:5,
		marginBottom: 4,
		color: "#1F1F1F"
	  },
	  separator: {
		backgroundColor: "#D4D4D4",
		alignSelf: 'center',
		flexDirection: 'row',
		flex: 0,
		width: 1,
		height: 42
	  },
	  buttons: {
		flexDirection: 'row',
		paddingVertical: 8

	  },
	  button: {
		flex: 1,
		fontSize:20,
		alignSelf: 'center',
		padding:10,
		borderColor:"#C0C0C0",
		borderWidth:1,
		margin:5
	  },
	  button_text:{
		fontSize:16,
		color:"#000000",
		fontWeight:'900',
		alignSelf: 'center',
	  },
	  text: {
		fontWeight:'bold',
		color: "#1F1F1F"
	  },
	  userName:{
		fontSize:20,
		color:"#000000",
		fontWeight:'bold'
	  }

  });

  const styles = StyleSheet.create({
	container: {
	  flex:1,
	  backgroundColor: '#738EF5',
	  alignItems:'center'
	},
	headStyle:{
	  width:80,
	  height:80,
	  borderWidth:3,
	  borderColor:'#fff',
	  borderRadius:80,
	  marginTop:height-700,
	  marginBottom:30,
	},
	textstyle:{
	  fontSize: 20,
	  color:'white',
	},
  
	inputStyle:{
	  width: '50%',
	  height:35,
	  marginLeft:15,
	  backgroundColor:'#fff',
	},
	subTextinStyle: {
	  width: '20%',
	  height:35,
	  marginLeft:15,
	  backgroundColor:'#fff',
	},
	EditBtn:{
	  width:iWidth - 120,
	  height:40,
	  backgroundColor:'white',
	  alignItems:'center',
	  justifyContent:'center',
	  marginBottom:15,
	  marginTop:15,
	  borderRadius:8
	},
	EditBtnText:{
	  color:'#738EF5',
	  fontSize: 20,
	  fontWeight:'bold',
	},
	
  });

  

export default inject('RootStore')(Profile);


{/* <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', fontWeight: 1000}}>



</View> */}