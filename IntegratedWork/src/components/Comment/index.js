import React, {useState} from 'react';
import {Image, Text, View, Dimensions} from "react-native";
import SERVER_ADDRESS from '../../../data/address'


const Comment = (props) => {
    const {width, height, scale} = Dimensions.get("window");


    return (
        <View style={{flexDirection: 'row'}}>
            <View style={{alignItems: 'center', marginLeft: 5, paddingTop: 10, width: 40}}>
                <Image
                    resizeMode={'contain'}
                    style={{borderWidth: 1, borderColor: '#EEE', borderRadius: 10, width: 26, height: 26}}
                    source={{uri:props.uri}}
                />
            </View>
            <View style={{flex: 1, borderBottomWidth: 1, borderColor: '#EEE', padding: 5}}>
                <Text>
                    <Text style={{fontWeight: 'bold', color: '#000', fontSize: 15}}>
                        @{props.username}
                    </Text>
                    {' '}
                    <Text style={{fontSize: 14}}>{props.content}</Text>
                </Text>
            </View>
        </View>
    )
}
export default Comment;