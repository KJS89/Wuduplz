import React, { useState } from 'react';
import {View, FlatList, Dimensions, ScrollView} from 'react-native';
import { useEffect } from 'react/cjs/react.development';

import Post from '../../components/Post';
import posts1 from '../../../data/posts';
import axios from 'axios';
import {SERVER_ADDRESS} from '../../../data/address'

const Home = ({route, navigation}) => {

	const [post, setPost] = useState(route.params.itemId);

	// const [posts,setPosts] = useState([])
	// useEffect(()=>{
	// 	async function getData(){
	// 		console.log('home effect executed!!!',`${SERVER_ADDRESS}/front-end/home/1`)
	// 		let result = await axios.get(`${SERVER_ADDRESS}/front-end/home/1`)
	// 		console.log('home result is ',result['data'])
	// 		setPosts([result['data']])
	//
	// 	};
	// 	getData();
	// },[route.params.videoId])
	console.log(route.params.posts);
	console.log(posts1);

	return (
		<View>
			<FlatList
				data={route.params.posts}
				renderItem={({item}) => <Post post={item}/>}
				showsVerticalScrollIndicator={false}
				snapToInterval={Dimensions.get('window').height - 72 } // scale the image according to screen height
				snapToAlignment={"start"}
				decelerationRate={"fast"}
			/>
		</View>

	)
}

export default Home;