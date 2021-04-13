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
            image: 'https://i.pinimg.com/564x/27/b4/5c/27b45cfadb28dbd857ebd662fe3cc1fe.jpg'},
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: 'https://66.media.tumblr.com/2170b24c045a368996ed3d0b84e74c4e/tumblr_pjn69mp52s1tbym8o_1280.jpg'},
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: 'https://cdn.mensagenscomamor.com/content/images/m000518052.jpg?v=1&w=600&h=941'},
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: 'https://i.pinimg.com/236x/61/69/67/61696742e1b2d8b0d3ed70efaa1b0f89.jpg'},
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: 'https://i.pinimg.com/236x/61/69/67/61696742e1b2d8b0d3ed70efaa1b0f89.jpg'},
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: 'https://i.pinimg.com/236x/61/69/67/61696742e1b2d8b0d3ed70efaa1b0f89.jpg'},
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: 'https://i.pinimg.com/236x/61/69/67/61696742e1b2d8b0d3ed70efaa1b0f89.jpg'},
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: 'https://i.pinimg.com/236x/61/69/67/61696742e1b2d8b0d3ed70efaa1b0f89.jpg'},
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: 'https://i.pinimg.com/236x/61/69/67/61696742e1b2d8b0d3ed70efaa1b0f89.jpg'},
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
            image: 'https://i.pinimg.com/236x/61/69/67/61696742e1b2d8b0d3ed70efaa1b0f89.jpg'},
    ]

    const categories = [
        {name: "interest_1", description: "Preferences"},
        {name: "interest_2", description: "Trending"},
        {name: "keywords_1", description: "Hot"},
        {name: "keywords_2", description: "Trending"},
        {name: "keywords_3", description: "Trending"},
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
                                            navigation.navigate("Video", {
                                                    itemId: 'from Results',
                                                    otherParams: key,
                                                }
                                            )
                                        }}>
                                            <ImageBackground
                                                key={key}
                                                source={{uri:video.image}}
                                                style={{
                                                    width: (Dimensions.get('window').width / 2) - 18,
                                                    height: 250,
                                                    marginHorizontal: 1,
                                                    marginBottom: 1
                                                }}>
                                                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                                                    <Text style={{position: 'absolute', bottom: 60, left: 5, color:'white', fontSize: 12, backgroundColor:'grey'}}>2020-03-04</Text>
                                                    <Text style={{position: 'absolute', bottom: 5, left: 2, color:'white', fontSize: 12}}>@daviddobrik</Text>
                                                    <Text style={{position: 'absolute', bottom: 25, left: 5, color:'white', fontSize: 14}}>#skiing #adventure #palmtrees</Text>
                                                    <FontAwesome style={{position:'absolute', bottom:6, right: 45}} name={'heart'} size={16} color={'white'}/>
                                                    <Text style={{position: 'absolute', bottom: 6, right: 3, color:'white', fontSize: 12}}>302.4K</Text>
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