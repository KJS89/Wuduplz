import React, {useState} from 'react';
import {Image, Text, View, Dimensions, TouchableOpacity} from "react-native";
import SERVER_ADDRESS from '../../../data/address'
import request from '../../util/request'


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
            <TouchableOpacity
                style={{height: 40, paddingHorizontal: 5, alignItems: 'center', justifyContent: 'center'}}
                onPress={() => {props.deleteComment(props.comment_id)}}>
                    <Text style={{color: 'red', fontWeight: 'bold', textAlign: 'center'}}>delete</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Comment;