import React, { useState } from 'react';
import {
    ScrollView,
    Text,
    Image,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import Swipeout from 'react-native-swipeout';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Container } from './styles';
import { useEffect } from 'react/cjs/react.development';
import BottomTabNavigator from "../../navigation/BottomTabNavigator";
import {SERVER_ADDRESS} from "../../../data/address"


const Responses = ({route, navigation}) => {
    const swipeoutBtns = [
        {
          text: 'Button'
        }
      ]
     const [responses,setResponse] = useState([])
     useEffect( ()=>{
         console.log('Response.js response is ',route.params.responses)
         setResponse(route.params.responses)

     },[route.params.responses])
    // const responses = [
    //     {
    //         userImage: 'https://t1.ea.ltmcdn.com/en/images/1/7/1/20_white_cat_breeds_full_list_3171_orig.jpg',
    //         username: '@daviddobrik',
    //         videoId: '1',
    //         videoDescription: 'here is my white cat!'
    //     },
    //     {
    //         userImage: 'https://t1.ea.ltmcdn.com/en/images/1/7/1/20_white_cat_breeds_full_list_3171_orig.jpg',
    //         username: '@leroyluigi',
    //         videoId: '1',
    //         videoDescription: 'black cat!'
    //     },
    //     {
    //         userImage: 'https://t1.ea.ltmcdn.com/en/images/1/7/1/20_white_cat_breeds_full_list_3171_orig.jpg',
    //         username: '@georgefree',
    //         videoId: '1',
    //         videoDescription: 'my cat has white spots'
    //     },
    // ];

    return (
        <Container>
            <ScrollView style={{paddingHorizontal: 10, margin: 5}}>
                <View style={{marginTop: 15, marginBottom: 5}}>
                    <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold', marginLeft: 7}}>Responses to "record your white cat"</Text>
                </View>
                {responses.map((request, key) => (
                    <Swipeout right={swipeoutBtns}>
                    <TouchableOpacity style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginVertical: 10
                    }} onPress={() => {navigation.navigate("Video",{videoId:request.videoId})}} key={key}>
                        <Image
                            style={{
                                width: 66,
                                height: 66,
                                borderRadius: 50,
                                borderColor: '#333',
                                //borderWidth: StyleSheet.hairlineWidth
                            }}
                            source={{ uri: SERVER_ADDRESS+request.userImage }} />
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
                    </Swipeout>
                ))}
            </ScrollView>
        </Container>
    )
}

export default Responses;