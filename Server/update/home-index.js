import React, { useState,useEffect, } from 'react';
import {View, FlatList, Dimensions, ScrollView} from 'react-native';
import axios from 'axios'

import Post from '../../components/Post';
//import posts from '../../../data/posts';


const Home = (props) => {
	const [post, setPost] = useState(props.route.params);
	//console.log(post.itemId);
	const [posts, setPosts] = useState([])
	useEffect( ()=>{

		async function fetchData(){
		var result = await axios.get('http://192.168.2.94:3000/front-end/home/58f5ffcf-716b-11eb-a09f-f0795907d9ec')
			// .then((data)=>{
			// 	//console.log(json)
			// 	data.videoUri = 'http://192.168.2.94:3000/' + data.videoUri
			// 	setPosts([data])
			// 	//console.log(data.videoUri)
			//) }
			console.log(result['data'])
			setPosts([result['data']])
		};
		fetchData()
			},[]
	)
	console.log(posts)
		

	return (
		<View>
			<FlatList
				data={posts}
				keyExtractor={item=>item.videoUri}
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