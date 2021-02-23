import React, { useState } from 'react';
import {View, FlatList, Dimensions, ScrollView} from 'react-native';

import Post from '../../components/Post';
import posts from '../../../data/posts';


const Home = ({route, navigation}) => {
	const [post, setPost] = useState(route.params.itemId);
	console.log(route.params.itemId);
	console.log(route.params.otherParams);

	return (
		<View>
			<FlatList
				data={posts}
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