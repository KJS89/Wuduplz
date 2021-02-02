import React, {useState} from 'react';
import {
	View,
	Text,
	TouchableWithoutFeedback, 
	Image,
	TouchableOpacity,
    Modal,
	TouchableHighlight,
	KeyboardAvoidingView,
	TextInput
} from 'react-native';

import Video from 'react-native-video';
import styles from './styles';

import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'


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
							{/*comment section start*/}
							<View style={{flexDirection: 'row', marginBottom: 5}}>
								<View style={{alignItems: 'center', marginLeft: 5, paddingTop: 10, width: 40}}>
									<Image
										resizeMode={'contain'}
										style={{borderWidth: 1, borderColor: '#EEE', borderRadius: 10, width: 26, height: 26}}
										source={{uri: 'https://influencermarketinghub.com/wiki/wp-content/uploads/2020/08/1657369265111046_c5_720x720.jpeg'}}
									/>
								</View>
								<View style={{flex: 1, borderBottomWidth: 1, borderColor: '#EEE', padding: 3}}>
									<Text>
										<Text style={{fontWeight: 'bold', color: '#000', fontSize: 15}}>
											@daviddobrik
										</Text>
										{' '}
										<Text style={{fontSize: 15}}>wow what a nice video!</Text>
									</Text>
								</View>
							</View>
							{/*comment section end*/}

							<View style={{flex: 1, justifyContent: 'flex-end'}}>
								{/*keyboard input start*/}
								<KeyboardAvoidingView behaviour={'position'}>
									<View style={{
										backgroundColor: '#FFF',
										flexDirection: 'row',
										// borderTopWidth: 1,
										borderColor: '#EEE',
										alignItems: 'center',
										paddingLeft: 15,
										flex: 1,
										//marginTop: 300,
										// /justifyContent: 'flex-end'
									}}>
										<TextInput
											placeholder={'Add a comment...'}
											keyboardType={'twitter'}
											autoFocus={false}
											//style={{flex: 1, height: 40, fontSize: 15}}
										/>
										<TouchableOpacity
											style={{height: 40, paddingHorizontal: 20, alignItems: 'center', justifyContent: 'center'}}
										>
											<View style={{flexDirection: 'row'}}>
												<Text style={{color: '#3F51B5', fontWeight: 'bold', textAlign: 'center'}}>Post</Text>
											</View>
										</TouchableOpacity>

										<TouchableOpacity
											style={{height: 40, paddingHorizontal: 1, alignItems: 'center', justifyContent: 'center'}}
											onPress={() => {setModalVisible(false)}}
										>
											<View style={{flexDirection: 'row'}}>
												<Text style={{color: '#3F51B5', fontWeight: 'bold', textAlign: 'center'}}>Close</Text>
											</View>
										</TouchableOpacity>
									</View>
								</KeyboardAvoidingView>
							</View>

							{/*close button section*/}
							{/*<View style={{flexDirection: 'row' }}>*/}
							{/*	<TouchableHighlight*/}
							{/*		style={{...styles.openButton, backgroundColor: "#2196F3"}}*/}
							{/*		onPress={setModalVisible}*/}
							{/*	>*/}
							{/*		<Text style={styles.textStyle}>Close</Text>*/}
							{/*	</TouchableHighlight>*/}
							{/*</View>*/}
						</View>
					</View>
				</Modal>
			</View>

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