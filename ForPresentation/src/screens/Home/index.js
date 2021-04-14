import React, { useState } from 'react';
import {View, FlatList, Dimensions, ScrollView} from 'react-native';
import { useEffect } from 'react/cjs/react.development';

import Post from '../../components/Post';
import posts1 from '../../../data/posts';
import axios from 'axios';
import {SERVER_ADDRESS} from '../../../data/address'
import {inject,observer } from "mobx-react";


const Home = ({route, navigation,RootStore}) => {

	const [post, setPost] = useState(route.params.itemId);
    const [posts,setPosts] = useState([])
	useEffect(()=>{
		async function getData(){

		var result = await axios.get(`${SERVER_ADDRESS}/front-end/home/${route.params.videoId}/${RootStore.UserId}`)
		if(result['data']){
			await axios.post(`${SERVER_ADDRESS}/front-end/deleteHistory`,{video_id:route.params.videoId,user_id:RootStore.UserId})
			await axios.post(`${SERVER_ADDRESS}/front-end/addHistory`,{video_id:route.params.videoId,user_id:RootStore.UserId})
		}else{
			await axios.post(`${SERVER_ADDRESS}/front-end/deleteHistory`,{video_id:route.params.videoId,user_id:RootStore.UserId})
		}
		console.log('home result is ',result['data'])
		if(result['data']==undefined){
			setPosts([
				{
					VideoId:'',
					likes:0,
					videoLocation:'',
					comments:0,
					shares:0,
					description:'',
					creator:{
						imageUri:'',
						username:'',
						
					}
				}
			])
			navigation.navigate('Search')
		}else{
		setPosts([result['data']])
		}
		
	};
	getData();

},[route.params.videoId])


	return (
		<View>
			<FlatList
				data={posts}
				
				renderItem={({item}) =><Post post={item}/>}
				showsVerticalScrollIndicator={false}
				snapToInterval={Dimensions.get('window').height - 72 } // scale the image according to screen height
				snapToAlignment={"start"}
				decelerationRate={"fast"}
			/>
		</View>

)
}

export default inject('RootStore')(observer(Home));