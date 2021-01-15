import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';

import Post from '../../components/Post';
import posts from '../../../data/posts';

const Home = () => {
	return (
		<View>
		  <FlatList 
		  	data={posts} 
		  	renderItem={({item}) => <Post post={item}/>}
		  	showsVerticalScrollIndicator={false}
		  	snapToInterval={Dimensions.get('window').height - 73} // scale the image according to screen height
		  	snapToAlignment={"start"}
		  	decelerationRate={"fast"}
		  />
		</View>
	)
}

export default Home;