import React, {useState} from 'react';
import {
	View,
	Text,
	TouchableWithoutFeedback, 
	Image,
	TouchableOpacity,
} from 'react-native';

import Video from 'react-native-video';
import styles from './styles';

import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'


const Post = (props) => {
	// state used to represent the pause/play feature
	const [paused, setPaused] = useState(false);  
	const onPlayPausePress = () => {
		setPaused(!paused);
	};

	// data of the post
	const [post, setPost] = useState(props.post);

	// data to represent the like state
	const [isLiked, setIsLiked] = useState(false);
	const onLikePress = () => {
		const likesToAdd = isLiked ? -1 : 1;
		setPost({
			...post,
			likes: post.likes + likesToAdd
		})
		setIsLiked(!isLiked)
	};

	// data to represent the comment state
	const [isCommented, setIsCommented] = useState(false);
	const onCommentPress = () => {
		const commentsToAdd = isCommented ? -1 : 1;
		setPost({
			...post,
			comments: post.comments + commentsToAdd
		})
		setIsCommented(!isCommented)
	}

	// data to represent the share state
	const [isShared, setIsShared] = useState(false);
	const onSharePress = () => {
		const sharesToAdd = isShared ? -1 : 1;
		setPost({
			...post,
			shares: post.shares + sharesToAdd
		})
		setIsShared(!isShared)
	}

	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={onPlayPausePress}>
				<View>
					<Video 
						 source={{uri: post.videoUri}}
						 style = {styles.video}
						 onError={(e) => console.log(e)}
						 resizeMode={'cover'}
						 repeat={true}
						 paused={paused}
					 />

				<View style={styles.uiContainer}>
					<View style={styles.rightContainer}>
						<View style={styles.profilePictureContainer}>
							<Image style={styles.profilePicture} 
								   source={{uri: post.user.imageUri}}		
							/>	
						</View>

						<TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
							<AntDesign name={'heart'} size={25} color={isLiked ? 'red' : 'white'} />
							<Text style={styles.statsLabel}>{post.likes}</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.iconContainer} onPress={onCommentPress}>
							<FontAwesome name={'commenting'} size={25} color={isCommented ? 'cyan' : 'white'} />
							<Text style={styles.statsLabel}>{post.comments}</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.iconContainer} onPress={onSharePress}>
							<Fontisto name={'share-a'} size={25} color={isShared ? 'lime' : 'white'} />
							<Text style={styles.statsLabel}>{post.shares}</Text>
						</TouchableOpacity>

					</View>

					<View style={styles.bottomContainer}> 
						<View>
							<Text style={styles.handle}>{post.user.username}</Text>
							<Text style={styles.description}>{post.description}</Text>



							<View style={styles.songRow}>
								<Entypo name={'note'} size={20} color='white'/>
								<Text style={styles.songName}>{post.song}</Text>
							</View>
						</View>

							<Image style={styles.songImage} 
								   source={{uri: post.songImage}}
								/>	


					</View>
				</View>

				 </View>
			</TouchableWithoutFeedback>
		</View>
	);
}

export default Post;