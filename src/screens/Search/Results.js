import React, {useState} from 'react';
import {Dimensions,ImageBackground, Text, View, FlatList, ScrollView, TextInput, StyleSheet, TouchableHighlight, Image} from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import randomize from "../../functions/randomize";
import {Container} from "./styles";

const Results = ({route, navigation}) => {
    const [search, setSearch] = useState(route.params.query);
    console.log(route.params.query);

    const videos = [
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: require('../../../data/hockey/139hockey.gif'),
            username: 'senatorFan',
            likes: 132,
            date: '2020-03-04',
            keywords: '#puck #hockey #sports',
            posts: [
                {
                    id: '8',
                    videoUri: require('../../../data/hockey/139hockey.mp4'),
                    user: {
                        id: 'u1',
                        username: '@senatorFan',
                        imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fiG7mazKTfIruTehelV_rm79xY6bSXVR8Q&usqp=CAU',
                    },
                    description: 'Puck in the net',
                    requestedBy: 'vincecarter',
                    likes: 343,
                    comments: 9,
                    shares: 1410,
                    private: true,
                    requestId: 1,
                },
            ]
        },
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: require('../../../data/basketball/127manbasketball.gif'),
            username: 'basketKing',
            likes: 304,
            date: '2019-09-22',
            keywords: '#basketball #sports #hoop',
            posts: [
                {
                    id: '8',
                    videoUri: require('../../../data/basketball/127manbasketball.mp4'),
                    user: {
                        id: 'u1',
                        username: '@basketKing',
                        imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fiG7mazKTfIruTehelV_rm79xY6bSXVR8Q&usqp=CAU',
                    },
                    description: 'How to spin a basket',
                    requestedBy: 'vincecarter',
                    likes: 343,
                    comments: 9,
                    shares: 1410,
                    private: true,
                    requestId: 1,
                },
            ]
        },
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: require('../../../data/basketball/133basketball.gif'),
            username: 'basketKing',
            likes: 49,
            date: '2021-03-04',
            keywords: '#basketball #spin #sports',
            posts: [
                {
                    id: '8',
                    videoUri: require('../../../data/basketball/133basketball.mp4'),
                    user: {
                        id: 'u1',
                        username: '@basketKing',
                        imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fiG7mazKTfIruTehelV_rm79xY6bSXVR8Q&usqp=CAU',
                    },
                    description: 'Playing 1 on 1',
                    requestedBy: 'vincecarter',
                    likes: 343,
                    comments: 9,
                    shares: 1410,
                    private: true,
                    requestId: 1,
                },
            ]
        },
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: require('../../../data/boxing/126womanjumprope.gif'),
            username: 'sportsManiac',
            likes: 25,
            date: '2018-03-04',
            keywords: '#jumping #fitness #sports',
            posts: [
                {
                    id: '8',
                    videoUri: require('../../../data/boxing/126womanjumprope.mp4'),
                    user: {
                        id: 'u1',
                        username: '@sportsManiac',
                        imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fiG7mazKTfIruTehelV_rm79xY6bSXVR8Q&usqp=CAU',
                    },
                    description: 'How to spin a basket',
                    requestedBy: 'vincecarter',
                    likes: 343,
                    comments: 9,
                    shares: 1410,
                    private: true,
                    requestId: 1,
                },
            ]
        },
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: require('../../../data/hockey/143goalie.gif'),
            username: 'ericcarlson',
            likes: 110,
            date: '2020-03-04',
            keywords: '#puck #goalie #sports',
            posts: [
                {
                    id: '8',
                    videoUri: require('../../../data/hockey/143goalie.mp4'),
                    user: {
                        id: 'u1',
                        username: '@ericcarlson',
                        imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fiG7mazKTfIruTehelV_rm79xY6bSXVR8Q&usqp=CAU',
                    },
                    description: 'How to spin a basket',
                    requestedBy: 'vincecarter',
                    likes: 343,
                    comments: 9,
                    shares: 1410,
                    private: true,
                    requestId: 1,
                },
            ]
        },
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: require('../../../data/basketball/136basketball.gif'),
            username: 'hooperExpert',
            likes: 140,
            date: '2020-03-04',
            keywords: '#sports #streetball #dribble',
            posts: [
                {
                    id: '8',
                    videoUri: require('../../../data/basketball/136basketball.mp4'),
                    user: {
                        id: 'u1',
                        username: '@hooperExpert',
                        imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fiG7mazKTfIruTehelV_rm79xY6bSXVR8Q&usqp=CAU',
                    },
                    description: 'How to spin a basket',
                    requestedBy: 'vincecarter',
                    likes: 343,
                    comments: 9,
                    shares: 1410,
                    private: true,
                    requestId: 1,
                },
            ]
        },
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: require('../../../data/hockey/141hockeygame.gif'),
            username: 'senatorFan',
            likes: 190,
            date: '2020-03-04',
            keywords: '#puck #hockey #sports',
            posts: [
                {
                    id: '8',
                    videoUri: require('../../../data/hockey/141hockeygame.mp4'),
                    user: {
                        id: 'u1',
                        username: '@senatorFan',
                        imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fiG7mazKTfIruTehelV_rm79xY6bSXVR8Q&usqp=CAU',
                    },
                    description: 'How to spin a basket',
                    requestedBy: 'vincecarter',
                    likes: 343,
                    comments: 9,
                    shares: 1410,
                    private: true,
                    requestId: 1,
                },
            ]
        },
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: require('../../../data/boxing/146womanbox.gif'),
            username: 'lightweight',
            likes: 330,
            date: '2020-03-04',
            keywords: '#shadowboxing #lightdivision #sports',
            posts: [
                {
                    id: '8',
                    videoUri: require('../../../data/boxing/146womanbox.mp4'),
                    user: {
                        id: 'u1',
                        username: '@lightweight',
                        imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fiG7mazKTfIruTehelV_rm79xY6bSXVR8Q&usqp=CAU',
                    },
                    description: 'How to spin a basket',
                    requestedBy: 'vincecarter',
                    likes: 343,
                    comments: 9,
                    shares: 1410,
                    private: true,
                    requestId: 1,
                },
            ]
        },
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: require('../../../data/basketball/137manspinbasketb.gif'),
            username: 'mrspin',
            likes: 2030,
            date: '2020-03-04',
            keywords: '#spinbasket #basketball #sports',
            posts: [
                {
                    id: '8',
                    videoUri: require('../../../data/basketball/137manspinbasketb.mp4'),
                    user: {
                        id: 'u1',
                        username: '@mrspin',
                        imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fiG7mazKTfIruTehelV_rm79xY6bSXVR8Q&usqp=CAU',
                    },
                    description: 'How to spin a basket',
                    requestedBy: 'vincecarter',
                    likes: 343,
                    comments: 9,
                    shares: 1410,
                    private: true,
                    requestId: 1,
                },
            ]
        },
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: require('../../../data/boxing/147womanboxing.gif'),
            username: 'lorraine',
            likes: 303,
            date: '2020-03-04',
            keywords: '#womanboxing #gloves #sports',
            posts: [
                {
                    id: '8',
                    videoUri: require('../../../data/boxing/147womanboxing.mp4'),
                    user: {
                        id: 'u1',
                        username: '@lorraine',
                        imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fiG7mazKTfIruTehelV_rm79xY6bSXVR8Q&usqp=CAU',
                    },
                    description: 'How to spin a basket',
                    requestedBy: 'vincecarter',
                    likes: 343,
                    comments: 9,
                    shares: 1410,
                    private: true,
                    requestId: 1,
                },
            ]
        },
    ]

    return (
        <Container>
            <ScrollView style={{paddingHorizontal: 15}}>
                <TextInput
                    placeholder={search}
                    value={search}
                    placeHolderTextColor="#333"
                    style={{
                        //flex: 1,
                        marginTop: 10,
                        marginBottom: 5,
                        paddingHorizontal: 15,
                        alignSelf: 'stretch',
                        width: StyleSheet.hairLineWidth,
                        backgroundColor: '#F5F5F5'
                    }}
                    onChangeText={(text) => setSearch(text)}
                    onSubmitEditing={() => {
                        // request search api again
                    }}
                />
                    <View  style={{
                        paddingVertical: 15,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        borderBottomColor: '#E5E5E5',
                    }}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: 10
                        }}>
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                                borderColor: '#333',
                                borderWidth: StyleSheet.hairlineWidth
                            }}>
                                <FontAwesome name={'question'} size={20} color="#E5E5E5" />
                            </View>
                            <View style={{
                                width: '50%'
                            }}>
                                <Text style={{fontWeight: 'bold'}}>Results</Text>
                                <Text style={{color: '#333'}}>{search}</Text>
                            </View>
                            <View style={{
                                width: '25%',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <FontAwesome name={'arrow-right'} size={20} color="#E5E5E5" />
                            </View>
                        </View>
                        <View style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <ScrollView>
                                {/*<View style={{marginTop: 5, marginLeft: 5, marginBottom: 5,  borderBottom: 3, flexDirection:'row', alignItems:'center', justifyContent: 'center'}}>*/}
                                {/*    <FontAwesome style={{paddingRight: 5}} name={'arrow-right'} size={12} color={'grey'} />*/}
                                {/*    <View style={{width: '90%'}}>*/}
                                {/*        <Text style={{fontSize: 13}}>Query for $placeholder</Text>*/}
                                {/*    </View>*/}
                                {/*</View>*/}

                                <View style={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                }}>
                                    {randomize(videos).map((video, key) => (
                                        <TouchableHighlight key={key} onPress={() => {
                                            navigation.navigate("Root", {screen: "Video", params: {
                                                    itemId: 'from Results',
                                                    otherParams: key,
                                                    posts: video.posts,
                                                }}
                                            )
                                        }}>
                                            <ImageBackground
                                                key={key}
                                                source={video.image}
                                                style={{
                                                    width: (Dimensions.get('window').width / 2) - 18,
                                                    height: 250,
                                                    marginHorizontal: 1,
                                                    marginBottom: 1
                                                }}>
                                                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                                                    <Text style={{position: 'absolute', bottom: 60, left: 5, color:'white', fontSize: 12, backgroundColor:'grey'}}>{video.date}</Text>
                                                    <Text style={{position: 'absolute', bottom: 5, left: 2, color:'white', fontSize: 12}}>@{video.username}</Text>
                                                    <Text style={{position: 'absolute', bottom: 25, left: 5, color:'white', fontSize: 14}}>{video.keywords}</Text>
                                                    <FontAwesome style={{position:'absolute', bottom:6, right: 3}} name={'heart'} size={16} color={'white'}/>
                                                    <Text style={{position: 'absolute', bottom: 6, right: 24, color:'white', fontSize: 12}}>{video.likes}</Text>
                                                </View>
                                            </ImageBackground>
                                        </TouchableHighlight>
                                    ))}
                                </View>
                        </ScrollView>
                        </View>
                    </View>
            </ScrollView>
        </Container>
    )
}

export default Results;