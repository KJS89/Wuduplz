import React,{useState,useEffect} from 'react';
import {ScrollView, Text, Image, View, TouchableOpacity, StyleSheet,Alert } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Container } from './styles';
import Responses from "./Responses";
import {SERVER_ADDRESS} from '../../../data/address'
import {inject,observer } from "mobx-react";
import axios from 'axios';
import messaging from '@react-native-firebase/messaging';


const RequestsForYou = ({route, navigation,RootStore }) => {

    const[requests,setRequest] = useState([])

    
    useEffect(()=>{
        async function getData(){
            
            var result = await axios.get(`${SERVER_ADDRESS}/front-end/getResponses/${RootStore.UserId}`)
            console.log('RequestsForYou.js data is ',result['data'])
            setRequest(result['data'])
        };

        getData()

    },[])
    
	useEffect(() => {
		const unsubscribe = messaging().onMessage(async remoteMessage => {
		    //Alert.alert('Request For you!', JSON.stringify(remoteMessage));
            var result = await axios.get(`${SERVER_ADDRESS}/front-end/getResponses/${RootStore.UserId}`)
            setRequest(result['data'])
        
		})

		return unsubscribe

	  }, []);


    // const requests = [
    //     {
    //         img: 'https://static.wikia.nocookie.net/progressivepartyofnoobs/images/0/07/NA_icon_292x225-584x450.jpg/revision/latest?cb=20180204041337',
    //         requestMessage: 'a cute baby',
    //         responsesCount: 'No response so far...',
    //     },
    //     {
    //         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4M9yEyd8PPmRAIUdTuFO0yqYJyTFHSOVorA&usqp=CAU',
    //         requestMessage: 'how to cook eggs under 20 seconds',
    //         responsesCount: '1 user has responded!',
    //     },
    //     {
    //         img: 'https://t1.ea.ltmcdn.com/en/images/1/7/1/20_white_cat_breeds_full_list_3171_orig.jpg',
    //         requestMessage: 'Record your white cat',
    //         responsesCount: '10 users have responded!',
    //     },
    //     {
    //         img: 'https://www.tekportal.net/wp-content/uploads/2019/02/bench-press-8371.jpg',
    //         requestMessage: 'Take a video of your bench press',
    //         responsesCount: '3 users have responded!',
    //     },
    //     {
    //         img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/300px-New_york_times_square-terabass.jpg',
    //         requestMessage: 'Show me new york city mainstreet',
    //         responsesCount: '4 users have responded!',
    //     },
    //     {
    //         img: 'https://t1.ea.ltmcdn.com/en/images/1/7/1/20_white_cat_breeds_full_list_3171_orig.jpg',
    //         requestMessage: 'Record your white cat',
    //         responsesCount: '10 users have responded!',

    //     },
    //     {
    //         img: 'https://www.tekportal.net/wp-content/uploads/2019/02/bench-press-8371.jpg',
    //         requestMessage: 'Take a video of your bench press',
    //         responsesCount: '3 users have responded!',
    //     },
    //     {
    //         img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/300px-New_york_times_square-terabass.jpg',
    //         requestMessage: 'Show me new york city mainstreet',
    //         responsesCount: '4 users have responded!',
    //     },
    //     {
    //         img: 'https://ncc-website-2.s3.amazonaws.com/images/gatineauparkplan.jpg?mtime=20190207184314&focal=none',
    //         requestMessage: 'Gatineau park hills',
    //         responsesCount: '1 user has responded!',
    //     },
    // ];

    return (
        <Container>
            <ScrollView style={{paddingHorizontal: 10, margin: 5}}>
                {/*<View style={{marginTop: 15, marginBottom: 5}}>*/}
                {/*    <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold', marginLeft: 7}}>Requests for you!</Text>*/}
                {/*</View>*/}

                {requests.map((request, key) => (
                    <TouchableOpacity style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginVertical: 12,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        borderBottomColor: '#E5E5E5',
                    }} onPress={() => {navigation.push('Record')}} key={key}>
                        {/*<Image*/}
                        {/*    style={{*/}
                        {/*        width: 66,*/}
                        {/*        height: 66,*/}
                        {/*        borderRadius: 50,*/}
                        {/*        borderColor: '#333',*/}
                        {/*    }}*/}
                        {/*    source={{ uri: request.img }} />*/}
                        <View style={{
                            width: '80%',
                        }}>
                            <Text style={{ fontWeight: 'bold' }}>{request.requestMessage}</Text>
                            {/*<Text style={{ color: '#333' }}>{request.responsesCount}</Text>*/}
                        </View>
                        <View style={{
                            width: '23%',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <FontAwesome5 name={'video'} size={20} color="pink" />
                            <Text>
                                Respond
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}

            </ScrollView>
        </Container>
    )
}

export default inject('RootStore')(observer(RequestsForYou));