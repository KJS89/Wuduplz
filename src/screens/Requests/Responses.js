import React from 'react';
import {
    ScrollView,
    Text,
    Image,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Container } from './styles';

import BottomTabNavigator from "../../navigation/BottomTabNavigator";

const Responses = ({route, navigation}) => {
    const responses = [
        {
            userImage: 'https://s4.gifyu.com/images/52wf2h.gif',
            username: '@daviddobrik',
            videoId: '1',
            videoDescription: 'here is my white cat!'
        },
        {
            userImage: 'https://t1.ea.ltmcdn.com/en/images/1/7/1/20_white_cat_breeds_full_list_3171_orig.jpg',
            username: '@leroyluigi',
            videoId: '1',
            videoDescription: 'black cat!'
        },
        {
            userImage: 'https://t1.ea.ltmcdn.com/en/images/1/7/1/20_white_cat_breeds_full_list_3171_orig.jpg',
            username: '@georgefree',
            videoId: '1',
            videoDescription: 'my cat has white spots'
        },
    ];

    return (
        <Container>
            <ScrollView style={{paddingHorizontal: 10, margin: 5}}>
                <View style={{marginTop: 15, marginBottom: 5}}>
                    <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold', marginLeft: 7}}>Responses to "record your white cat"</Text>
                </View>
                {responses.map((request, key) => (
                    <TouchableOpacity style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginVertical: 10,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        borderBottomColor: '#E5E5E5',
                    }} onPress={() => {navigation.navigate("Video")}} key={key}>
                        <Image
                            style={{
                                width: 66,
                                height: 88,
                                // borderRadius: 50,
                                borderColor: '#333',
                                //borderWidth: StyleSheet.hairlineWidth
                            }}
                            source={{ uri: request.userImage }} />
                        <View style={{
                            width: '50%'
                        }}>
                            <Text style={{ fontWeight: 'bold' }}>{request.username}</Text>
                            <Text style={{ color: '#333' }}>{request.videoDescription}</Text>
                        </View>
                        <View style={{
                            width: '23%',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <FontAwesome5 name={'play'} size={20} color="#E5E5E5" />
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </Container>
    )
}

export default Responses;