import React, {useState} from 'react';
import {
    ScrollView,
    Image,
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight, ImageBackground, Dimensions,
} from 'react-native';
import {Container} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import randomize from '../../functions/randomize';

const Search = ({ route, navigation }) => {
    const [search, setSearch] = useState(route.params.query);

    // const videos = [
    //     {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
    //     image: 'https://s4.gifyu.com/images/52wf8y.gif',
    //     likes: 310.2},
    //     {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
    //     image: 'https://s4.gifyu.com/images/52wexo.gif',
    //     likes: 43.3},
    //     {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
    //     image: 'https://s4.gifyu.com/images/52wf2h.gif',
    //     likes: 12.2},
    //     {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
    //     image: 'https://s4.gifyu.com/images/52wfp3.gif',
    //     likes: 100.5},
    // ]

    const categories = [
        {name: "fruits", description: "Profile", videos: [
                {
                    url: 'okayy',
                    image: require('../../../data/fruits/111cutstrawberries.gif'),
                    likes: 310.2,
                    username: 'chefHobbyist',
                    date: '2020-03-03',
                    posts: [
                        {
                            id: '1',
                            videoUri: require('../../../data/fruits/111cutstrawberries.mp4'),
                            user: {
                                id: 'u1',
                                username: '@chefHobbyist',
                                imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTYT_cEyR5jKdn59JPSPRUKGtpLLeVuglC4A&usqp=CAU',
                            },
                            description: 'Cutting strawberries like a pro',
                            requestedBy: 'jamisonjeffrey',
                            likes: 11,
                            comments: 4,
                            shares: 31,
                            private: true,
                            requestId: 1,
                        },
                        {
                            id: '2',
                            videoUri: require('../../../data/fruits/109cutlime.mp4'),
                            user: {
                                id: 'u1',
                                username: '@cutlimeexpert',
                                imageUri: 'https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2018/11/09/4189f666-e0cb-11e8-829d-1199cf0acfc4_1280x720_104300.JPG?itok=KRkKPHhD',
                            },
                            description: 'Cutting limes like a pro',
                            requestedBy: 'foodLover',
                            likes: 43,
                            comments: 3,
                            shares: 21,
                            private: true,
                            requestId: 1,
                        },
                        {
                            id: '3',
                            videoUri: require('../../../data/fruits/110cutpear.mp4'),
                            user: {
                                id: 'u1',
                                username: '@cutlimeexpert',
                                imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdjUjM7JudkhxEvQ4qLf1CG31-7cvhDSMArg&usqp=CAU',
                            },
                            description: 'Cutting pears like a pro',
                            requestedBy: 'justyna',
                            likes: 23,
                            comments: 3,
                            shares: 31,
                            private: false,
                            requestId: 1,
                        },
                        {
                            id: '4',
                            videoUri: require('../../../data/fruits/108cutgrapefruit.mp4'),
                            user: {
                                id: 'u1',
                                username: '@cutgrapeexpert',
                                imageUri: 'https://assets3.thrillist.com/v1/image/832785/1000x666.6666666666666/flatten;crop;jpeg_quality=70',
                            },
                            description: 'Cutting grapefruits for you',
                            requestedBy: 'johncena',
                            likes: 144,
                            comments: 4,
                            shares: 31,
                            private: false,
                            requestId: 1,
                        },
                    ]
                },
                {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
                    image: require('../../../data/fruits/109cutlime.gif'),
                    likes: 43.3,
                    username: 'cutlimeexpert',
                    date: '2019-04-05',
                    posts: [
                        {
                            id: '2',
                            videoUri: require('../../../data/fruits/109cutlime.mp4'),
                            user: {
                                id: 'u1',
                                username: '@cutlimeexpert',
                                imageUri: 'https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2018/11/09/4189f666-e0cb-11e8-829d-1199cf0acfc4_1280x720_104300.JPG?itok=KRkKPHhD',
                            },
                            description: 'Cutting limes like a pro',
                            requestedBy: 'foodLover',
                            likes: 43,
                            comments: 3,
                            shares: 21,
                            private: true,
                            requestId: 1,
                        },
                        {
                            id: '3',
                            videoUri: require('../../../data/fruits/110cutpear.mp4'),
                            user: {
                                id: 'u1',
                                username: '@cutlimeexpert',
                                imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdjUjM7JudkhxEvQ4qLf1CG31-7cvhDSMArg&usqp=CAU',
                            },
                            description: 'Cutting pears like a pro',
                            requestedBy: 'justyna',
                            likes: 23,
                            comments: 3,
                            shares: 31,
                            private: false,
                            requestId: 1,
                        },
                        {
                            id: '4',
                            videoUri: require('../../../data/fruits/108cutgrapefruit.mp4'),
                            user: {
                                id: 'u1',
                                username: '@cutgrapeexpert',
                                imageUri: 'https://assets3.thrillist.com/v1/image/832785/1000x666.6666666666666/flatten;crop;jpeg_quality=70',
                            },
                            description: 'Cutting grapefruits for you',
                            requestedBy: 'johncena',
                            likes: 144,
                            comments: 4,
                            shares: 31,
                            private: false,
                            requestId: 1,
                        },
                        {
                            id: '1',
                            videoUri: require('../../../data/fruits/111cutstrawberries.mp4'),
                            user: {
                                id: 'u1',
                                username: '@chefHobbyist',
                                imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTYT_cEyR5jKdn59JPSPRUKGtpLLeVuglC4A&usqp=CAU',
                            },
                            description: 'Cutting strawberries like a pro',
                            requestedBy: 'jamisonjeffrey',
                            likes: 310,
                            comments: 3,
                            shares: 31,
                            private: true,
                            requestId: 1,
                        }
                    ]
                },
                {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
                    image: require('../../../data/fruits/110cutpear.gif'),
                    likes: 12.2,
                    username: 'chefmaster',
                    date: '2019-01-01',
                    posts: [
                        {
                            id: '3',
                            videoUri: require('../../../data/fruits/110cutpear.mp4'),
                            user: {
                                id: 'u1',
                                username: '@cutlimeexpert',
                                imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdjUjM7JudkhxEvQ4qLf1CG31-7cvhDSMArg&usqp=CAU',
                            },
                            description: 'Cutting pears like a pro',
                            requestedBy: 'justyna',
                            likes: 23,
                            comments: 3,
                            shares: 31,
                            private: false,
                            requestId: 1,
                        },
                        {
                            id: '4',
                            videoUri: require('../../../data/fruits/108cutgrapefruit.mp4'),
                            user: {
                                id: 'u1',
                                username: '@cutgrapeexpert',
                                imageUri: 'https://assets3.thrillist.com/v1/image/832785/1000x666.6666666666666/flatten;crop;jpeg_quality=70',
                            },
                            description: 'Cutting grapefruits for you',
                            requestedBy: 'johncena',
                            likes: 144,
                            comments: 4,
                            shares: 31,
                            private: false,
                            requestId: 1,
                        },
                        {
                            id: '2',
                            videoUri: require('../../../data/fruits/109cutlime.mp4'),
                            user: {
                                id: 'u1',
                                username: '@cutlimeexpert',
                                imageUri: 'https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2018/11/09/4189f666-e0cb-11e8-829d-1199cf0acfc4_1280x720_104300.JPG?itok=KRkKPHhD',
                            },
                            description: 'Cutting limes like a pro',
                            requestedBy: 'foodLover',
                            likes: 43,
                            comments: 3,
                            shares: 21,
                            private: true,
                            requestId: 1,
                        },
                        {
                            id: '1',
                            videoUri: require('../../../data/fruits/111cutstrawberries.mp4'),
                            user: {
                                id: 'u1',
                                username: '@chefHobbyist',
                                imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTYT_cEyR5jKdn59JPSPRUKGtpLLeVuglC4A&usqp=CAU',
                            },
                            description: 'Cutting strawberries like a pro',
                            requestedBy: 'jamisonjeffrey',
                            likes: 310,
                            comments: 3,
                            shares: 31,
                            private: true,
                            requestId: 1,
                        }
                    ]
                },
                {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
                    image: require('../../../data/fruits/108cutgrapefruit.gif'),
                    likes: 100.5,
                    username: 'halloffamer',
                    date: '2017-09-21',
                    posts: [
                        {
                            id: '4',
                            videoUri: require('../../../data/fruits/108cutgrapefruit.mp4'),
                            user: {
                                id: 'u1',
                                username: '@cutgrapeexpert',
                                imageUri: 'https://assets3.thrillist.com/v1/image/832785/1000x666.6666666666666/flatten;crop;jpeg_quality=70',
                            },
                            description: 'Cutting grapefruits for you',
                            requestedBy: 'johncena',
                            likes: 144,
                            comments: 4,
                            shares: 31,
                            private: false,
                            requestId: 1,
                        },
                        {
                            id: '3',
                            videoUri: require('../../../data/fruits/110cutpear.mp4'),
                            user: {
                                id: 'u1',
                                username: '@cutlimeexpert',
                                imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdjUjM7JudkhxEvQ4qLf1CG31-7cvhDSMArg&usqp=CAU',
                            },
                            description: 'Cutting pears like a pro',
                            requestedBy: 'justyna',
                            likes: 23,
                            comments: 3,
                            shares: 31,
                            private: false,
                            requestId: 1,
                        },
                        {
                            id: '2',
                            videoUri: require('../../../data/fruits/109cutlime.mp4'),
                            user: {
                                id: 'u1',
                                username: '@cutlimeexpert',
                                imageUri: 'https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2018/11/09/4189f666-e0cb-11e8-829d-1199cf0acfc4_1280x720_104300.JPG?itok=KRkKPHhD',
                            },
                            description: 'Cutting limes like a pro',
                            requestedBy: 'foodLover',
                            likes: 43,
                            comments: 3,
                            shares: 21,
                            private: true,
                            requestId: 1,
                        },
                        {
                            id: '1',
                            videoUri: require('../../../data/fruits/111cutstrawberries.mp4'),
                            user: {
                                id: 'u1',
                                username: '@chefHobbyist',
                                imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTYT_cEyR5jKdn59JPSPRUKGtpLLeVuglC4A&usqp=CAU',
                            },
                            description: 'Cutting strawberries like a pro',
                            requestedBy: 'jamisonjeffrey',
                            likes: 310,
                            comments: 3,
                            shares: 31,
                            private: true,
                            requestId: 1,
                        }
                    ]
                },
        ]},
        {name: "basketball", description: "Profile", videos: [
                {
                    url: 'okayy',
                    image: require('../../../data/basketball/127manbasketball.gif'),
                    likes: 11.2,
                    username: 'dribbleking',
                    date: '2020-09-21',
                    posts: [
                        {
                            id: '5',
                            videoUri: require('../../../data/basketball/127manbasketball.mp4'),
                            user: {
                                id: 'u1',
                                username: '@dribbleking',
                                imageUri: 'https://cdn.nba.com/manage/2020/06/USATSI_14092063.jpg',
                            },
                            description: 'Showing a 2 pointer shot',
                            requestedBy: 'michaeljordan',
                            likes: 124,
                            comments: 40,
                            shares: 31,
                            private: true,
                            requestId: 1,
                        },
                        {
                            id: '6',
                            videoUri: require('../../../data/basketball/133basketball.mp4'),
                            user: {
                                id: 'u1',
                                username: '@basketexpert',
                                imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fiG7mazKTfIruTehelV_rm79xY6bSXVR8Q&usqp=CAU',
                            },
                            description: 'Dribble in and out',
                            requestedBy: 'derricklewis',
                            likes: 2043,
                            comments: 89,
                            shares: 31410,
                            private: true,
                            requestId: 1,
                        },
                        {
                            id: '7',
                            videoUri: require('../../../data/basketball/136basketball.mp4'),
                            user: {
                                id: 'u1',
                                username: '@hooper',
                                imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fiG7mazKTfIruTehelV_rm79xY6bSXVR8Q&usqp=CAU',
                            },
                            description: 'Show me a crossover',
                            requestedBy: 'derricklewis',
                            likes: 343,
                            comments: 9,
                            shares: 1410,
                            private: true,
                            requestId: 1,
                        },
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
                {
                    url: 'okayy',
                    image: require('../../../data/basketball/133basketball.gif'),
                    likes: 10.2,
                    username: 'basketexpert',
                    date: '2021-09-21',
                    posts: [
                        {
                            id: '7',
                            videoUri: require('../../../data/basketball/133basketball.mp4'),
                            user: {
                                id: 'u1',
                                username: '@basketexpert',
                                imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fiG7mazKTfIruTehelV_rm79xY6bSXVR8Q&usqp=CAU',
                            },
                            description: 'Dribble in and out',
                            requestedBy: 'derricklewis',
                            likes: 2043,
                            comments: 89,
                            shares: 31410,
                            private: true,
                            requestId: 1,
                        },
                    ]

                },
                {
                    url: 'okayy',
                    image: require('../../../data/basketball/136basketball.gif'),
                    likes: 89.3,
                    username: 'hooper',
                    date: '2015-05-21',
                    posts: [
                        {
                            id: '8',
                            videoUri: require('../../../data/basketball/136basketball.mp4'),
                            user: {
                                id: 'u1',
                                username: '@hooper',
                                imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fiG7mazKTfIruTehelV_rm79xY6bSXVR8Q&usqp=CAU',
                            },
                            description: 'Show me a crossover',
                            requestedBy: 'derricklewis',
                            likes: 343,
                            comments: 9,
                            shares: 1410,
                            private: true,
                            requestId: 1,
                        },
                    ]

                },
                {
                    url: 'okayy',
                    image: require('../../../data/basketball/137manspinbasketb.gif'),
                    likes: 2.2,
                    username: 'mrspin',
                    date: '2017-09-21',
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
            ]},
        {name: "pottery", description: "Profile", videos: [
                {
                    url: 'okayy',
                    image: require('../../../data/pottery/160pottery.gif'),
                    likes: 11.2,
                    username: 'greekLegend',
                    date: '2019-03-21'

                },
                {
                    url: 'okayy',
                    image: require('../../../data/pottery/161potteryman.gif'),
                    likes: 10.2,
                    username: 'potteryExpert',
                    date: '2021-01-21'

                },
                {
                    url: 'okayy',
                    image: require('../../../data/pottery/162pottery.gif'),
                    likes: 89.3,
                    username: 'clayMaster',
                    date: '2017-09-21'

                },
                {
                    url: 'okayy',
                    image: require('../../../data/pottery/163pottery.gif'),
                    likes: 2.2,
                    username: 'potteryForOne',
                    date: '2016-06-26'

                },
            ]},
        {name: "boxing", description: "Trending", videos: [
                {
                    url: 'okayy',
                    image: require('../../../data/boxing/145womanbox.gif'),
                    likes: 2.2,
                    username: 'lightweight',
                    date: '2016-06-26'
                },
                {
                    url: 'okayy',
                    image: require('../../../data/boxing/146womanbox.gif'),
                    likes: 3.2,
                    username: 'champHeavy',
                    date: '2014-06-26'

                },
                {
                    url: 'okayy',
                    image: require('../../../data/boxing/147womanboxing.gif'),
                    likes: 4.2,
                    username: 'lorraine',
                    date: '2014-04-24'

                },
                {
                    url: 'okayy',
                    image: require('../../../data/boxing/126womanjumprope.gif'),
                    likes: 52.2,
                    username: 'allRound',
                    date: '2019-06-26'

                },
            ]},
        {name: "hockey", description: "Recently Searched", videos: [
                {
                    url: 'okayy',
                    image: require('../../../data/hockey/139hockey.gif'),
                    likes: 2.2,
                    username: 'senatorFan',
                    date: '2019-01-26'


                },
                {
                    url: 'okayy',
                    image: require('../../../data/hockey/141hockeygame.gif'),
                    likes: 3.2,
                    username: 'LeafsFan',
                    date: '2019-03-26'

                },
                {
                    url: 'okayy',
                    image: require('../../../data/hockey/142hockeyman.gif'),
                    likes: 4.2,
                    username: 'puckChecker',
                    date: '2019-05-26'

                },
                {
                    url: 'okayy',
                    image: require('../../../data/hockey/143goalie.gif'),
                    likes: 52.2,
                    username: 'stevenSmith',
                    date: '2020-06-26'

                },
            ]},
    ]

    return (
        <Container>
            <ScrollView style={{paddingHorizontal: 15}}>
                <TextInput
                    placeholder="Search"
                    placeHolderTextColor="#333"
                    value={search}
                    style={{
                        flex: 1,
                        marginTop: 10,
                        marginBottom: 5,
                        paddingHorizontal: 15,
                        alignSelf: 'stretch',
                        width: StyleSheet.hairLineWidth,
                        backgroundColor: '#F5F5F5'
                    }}
                    onChangeText={(text) => setSearch(text)}
                    onSubmitEditing={() => {
                        navigation.navigate("Root", {screen: 'Results', params: {query: search}});
                    }}
                />
                {categories.map((categorie, k) => (
                    <View key={k} style={{
                        paddingVertical: 15,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        borderBottomColor: '#E5E5E5',
                    }}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginVertical: 10
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
                                <FontAwesome name={'hashtag'} size={20} color="#E5E5E5" />
                            </View>
                            <View style={{
                                width: '50%'
                            }}>
                                <Text style={{fontWeight: 'bold'}}>{categorie.name}</Text>
                                <Text style={{color: '#333'}}>{categorie.description}</Text>
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
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {(categorie.videos).map((video, key) => (
                                    <TouchableHighlight key={key} onPress={() => {
                                        navigation.navigate("Video",
                                            {"posts": video.posts
                                        })
                                    }}>
                                        <ImageBackground
                                            key={key}
                                            source={video.image}
                                            style={{
                                                width: 133,
                                                height: 180,
                                                marginHorizontal: 1,
                                                marginBottom: 1
                                            }}>
                                            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                                                <Text style={{position: 'absolute', bottom: 5, left: 5, color:'white', fontSize: 11, backgroundColor:'grey', opacity: 0.8}}>{video.date}</Text>
                                                <Text style={{position: 'absolute', top: 1, left: 5, color:'white', fontSize: 11, opacity: 0.8, fontWeight: 'bold'}}>@{video.username}</Text>
                                                <FontAwesome style={{position:'absolute', bottom:18, right: 12, opacity: 0.8}} name={'heart'} size={12} color={'white'}/>
                                                <Text style={{position: 'absolute', bottom: 3, right: 3, color:'white', fontSize: 10, fontWeight: 'bold', opacity: 0.8}}>{video.likes} K</Text>
                                            </View>
                                        </ImageBackground>
                                    </TouchableHighlight>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </Container>
    )
};

export default Search;