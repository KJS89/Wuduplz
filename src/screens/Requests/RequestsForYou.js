import React, {useState} from 'react';
import {ScrollView, Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Container } from './styles';
import Responses from "./Responses";

const RequestsForYou = ({route, navigation}) => {
    const [requests, setRequest] = useState([
        {
            id: 1,
            img: 'https://static.wikia.nocookie.net/progressivepartyofnoobs/images/0/07/NA_icon_292x225-584x450.jpg/revision/latest?cb=20180204041337',
            requestMessage: 'a cute baby',
            responsesCount: 'No response so far...',
            username: 'daviddobrik',
            hidden: true,
        },
        {
            id: 2,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4M9yEyd8PPmRAIUdTuFO0yqYJyTFHSOVorA&usqp=CAU',
            requestMessage: 'how to cook eggs under 20 seconds',
            responsesCount: '1 user has responded!',
            username: 'robert',
            hidden: false,


        },
        {
            id: 3,
            img: 'https://t1.ea.ltmcdn.com/en/images/1/7/1/20_white_cat_breeds_full_list_3171_orig.jpg',
            requestMessage: 'Record your white cat',
            responsesCount: '10 users have responded!',
            username: 'cassidy',
            hidden: false,


        },
        {
            id: 4,
            img: 'https://www.tekportal.net/wp-content/uploads/2019/02/bench-press-8371.jpg',
            requestMessage: 'Take a video of your bench press',
            responsesCount: '3 users have responded!',
            username: 'caesar',
            hidden: false,


        },
        {
            id: 5,
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/300px-New_york_times_square-terabass.jpg',
            requestMessage: 'Show me new york city mainstreet',
            responsesCount: '4 users have responded!',
            username: 'looneytunes',
            hidden: false,


        },
        {
            id: 6,
            img: 'https://t1.ea.ltmcdn.com/en/images/1/7/1/20_white_cat_breeds_full_list_3171_orig.jpg',
            requestMessage: 'Record your white cat',
            responsesCount: '10 users have responded!',
            username: 'drake',
            hidden: false,

        },
        {
            id: 7,
            img: 'https://www.tekportal.net/wp-content/uploads/2019/02/bench-press-8371.jpg',
            requestMessage: 'Take a video of your bench press',
            responsesCount: '3 users have responded!',
            username: 'shroud',
            hidden: false,
        },
        {
            id: 8,
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/300px-New_york_times_square-terabass.jpg',
            requestMessage: 'Show me new york city mainstreet',
            responsesCount: '4 users have responded!',
            username: 'mrgrey',
            hidden: false,
        },
        {
            id: 9,
            img: 'https://ncc-website-2.s3.amazonaws.com/images/gatineauparkplan.jpg?mtime=20190207184314&focal=none',
            requestMessage: 'Gatineau park hills',
            responsesCount: '1 user has responded!',
            username: 'panner',
            hidden: false,
        },
    ]);

    const toggle = (id) => {
        const list = requests.map(item => {
            if (item.id === id) {
                item.hidden = true;
            }
            return item;
        })
        setRequest(list);
    };

    return (
        <Container>
            <ScrollView style={{paddingHorizontal: 10, margin: 5}}>
                {/*<View style={{marginTop: 15, marginBottom: 5}}>*/}
                {/*    <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold', marginLeft: 7}}>Requests for you!</Text>*/}
                {/*</View>*/}

                {requests.map((request, key) => (
                    <View style={{
                        display: request.hidden ? 'none' : 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginVertical: 10,
                        paddingBottom: 10,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        borderBottomColor: '#E5E5E5',
                    }} key={key}>
                        {/*<Image*/}
                        {/*    style={{*/}
                        {/*        width: 66,*/}
                        {/*        height: 66,*/}
                        {/*        borderRadius: 50,*/}
                        {/*        borderColor: '#333',*/}
                        {/*    }}*/}
                        {/*    source={{ uri: request.img }} />*/}
                        <View style={{
                            width: '75%',
                            paddingLeft: 5,
                        }}>
                            <Text style={{}}>@{request.username}</Text>
                            <Text style={{ paddingLeft: 5, fontWeight: 'bold' }}>{request.requestMessage}</Text>
                            {/*<Text style={{ color: '#333' }}>{request.responsesCount}</Text>*/}
                        </View>
                        <View style={{
                            width: '19%',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                            <TouchableOpacity style={{
                            }} onPress={() => {navigation.push("Record")}} >
                                <FontAwesome5 name={'video'} size={25} color="pink" />
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                            }} onPress={() => {toggle(request.id)}} >
                                <FontAwesome5 name={'ban'} size={22} color="grey" />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}

            </ScrollView>
        </Container>
    )
}

export default RequestsForYou;