import React, {useState} from 'react';
import {
	View,
	Text,
	TouchableWithoutFeedback, 
	Image,
	TouchableOpacity,
    Modal,
	ScrollView,
} from 'react-native';

import Video from 'react-native-video';
import styles from './styles';

import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Comment from "../Comment";
import Input from "../Comment/input";


const Post = (props) => {
	// state used to represent the pause/play feature
	const [paused, setPaused] = useState(true);
	const onPlayPausePress = () => {
		setPaused(!paused);
	};

	// data of the post
	const [post, setPost] = useState(props.post);

	const [modal, setModal] = useState(false);
	const setModalVisible = () => {
		setModal(!modal);
	};

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
		setModalVisible(!modal);
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
			{/*comment modal start*/}
			<View style={styles.centeredView}>
				<Modal
					animationType={"slide"}
					transparent={true}
					visible={modal}
				>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<Text style={{fontWeight: 'bold', padding: 5, fontSize: 20}}>Comments</Text>
							<View style={{flex: 1, backgroundColor: '#FFF'}}>
								<ScrollView
								>
									<Comment username={'daviddobrik'} content={'nice video'} />
									<Comment username={'stevenseagull'} content={'meh i could lift more'}/>
									<Comment username={'bradpitt'} content={'its alright but bad music'}/>
									<Comment username={'johnatthan'} content={'this is not what i asked for !'}/>
								</ScrollView>

								{/*keyboard input start*/}
								<Input closeModal={setModalVisible}/>
								{/*keyboard input end */}
							</View>
						</View>
					</View>
				</Modal>
			</View>
			{/*comment modal end*/}

			<TouchableWithoutFeedback onPress={onPlayPausePress}>
				<View>
					{paused && <FontAwesome style={{
						zIndex: 999,
						opacity: 1.0,
						position: 'absolute',
						alignSelf: 'center',
						top:'43%',
						left:'43%'
					}} name={'play'} size={100} color="white" />}
					<Video
						 source={{uri: post.videoUri}}
						 style = {styles.video}
						 onError={(e) => console.log("from video: ", e)}
						 resizeMode={'cover'}
						 repeat={true}
						 paused={paused}
						 controls={false}
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
								<Entypo name={'users'} size={20} color='white'/>
								<Text style={styles.requestedBy}>Requested by <Text style={{textDecorationLine:'underline'}}>{post.requestedBy}</Text></Text>
							</View>
						</View>

						<View style={styles.downloadRow}>
							{post.private ? <Image style={styles.downloadImage} source={{ uri: 'https://freeiconshop.com/wp-content/uploads/edd/download-flat.png' }}/> : <Image style={styles.downloadImage} source={{ uri: 'https://www.clipartmax.com/png/middle/156-1566079_red-lock-icon-png.png'}}/>}
						</View>


					</View>
				</View>

				 </View>
			</TouchableWithoutFeedback>
		</View>
	);
}

export default Post;