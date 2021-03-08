import React, {useState, useEffect} from 'react';
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
import axios from 'axios';
import {SERVER_ADDRESS} from '../../../data/address';


const Post = (props) => {
	const [comment,setComment]= useState([]);
	const [text,setText] = useState('')
	// state used to represent the pause/play feature
	const [paused, setPaused] = useState(true);
	const onPlayPausePress = () => {
		setPaused(!paused);
	};

	// data of the post
	const [post, setPost] = useState(props.post);
	// data of the post
	useEffect(() => {
		console.log(props.post)
		setPost({
			...props.post
		})
	},[props])

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
	const onCommentPress = async() => {
		const commentsToAdd = isCommented ? -1 : 1;
		setPost({
			...post,
			comments: post.comments + commentsToAdd
		})
		setIsCommented(!isCommented)
		console.log('comment url is ',SERVER_ADDRESS+`/front-end/getComment/${post.VideoId}`)
		let result = await axios.get(SERVER_ADDRESS+`/front-end/getComment/${post.VideoId}`)
		setComment(result['data'])
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

	const textChange = (text) => {
		setText(text)
	}

	const postComments = async() => {
		await fetch(SERVER_ADDRESS+'/front-end/comment', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				CommentContent: text,
				CommentatorId:'cbdef4d4-7168-11eb-a09f-f0795907d9ec',
				CommentDate:null,
				ThumberNumber:3,
				videoId:post.video_id
			})
		})

		let result = await axios.create({
			baseURL:SERVER_ADDRESS
		}).get('/front-end/getComment/'+post.video_id)
		setComment(result.data)
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
								<Input closeModal={setModalVisible} textChange={textChange} postComments={postComments}/>
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
					}} name={'play'} size={75} color="white" />}
					<Video
						source={{uri:SERVER_ADDRESS+post.videoLocation}}
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

						<TouchableOpacity style={styles.iconContainer}>
							<FontAwesome name={'eye'} size={25} color={'white'} />
							<Text style={styles.statsLabel}>{post.shares}</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.iconContainer}>
							<Fontisto name={post.private ? 'download' : 'locked' } size={25} color={post.private ? 'white' : 'pink'} />
							<Text style={styles.statsLabel}></Text>
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

					</View>
				</View>

				 </View>
			</TouchableWithoutFeedback>
		</View>
	);
}

export default Post;