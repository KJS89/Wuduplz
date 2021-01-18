import React, {useState} from 'react';
import {
    ScrollView,
    Image,
    View,
    StyleSheet,
    Text,
    TextInput,
    Dimensions,
} from 'react-native';
import Video from 'react-native-video';
import {Container} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// import BottomTabNavigator from '../../navigation/homeBottomTabNavigator';

import randomize from '../../functions/randomize';

const Search = ({ navigation }) => {

    const videos = [
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
        image: 'https://i.pinimg.com/564x/27/b4/5c/27b45cfadb28dbd857ebd662fe3cc1fe.jpg'},
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
        image: 'https://66.media.tumblr.com/2170b24c045a368996ed3d0b84e74c4e/tumblr_pjn69mp52s1tbym8o_1280.jpg'},
        {url: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
        image: 'https://cdn.mensagenscomamor.com/content/images/m000518052.jpg?v=1&w=600&h=941'},
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
                    placeholder="Search"
                    placeHolderTextColor="#333"
                    style={{
                        flex: 1,
                        marginTop: 10,
                        marginBottom: 5,
                        paddingHorizontal: 15,
                        alignSelf: 'stretch',
                        width: StyleSheet.hairLineWidth,
                        backgroundColor: '#F5F5F5'
                    }}/>
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
                                {randomize(videos).map((video, key) => (
                                    <Image
                                        key={key}
                                        source={{uri:video.image}}
                                        style={{
                                            width: 150,
                                            height: 200,
                                            marginHorizontal: 2,
                                        }}
                                    />
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