import React, {useState} from 'react';
import {Image, Text, View, Dimensions} from "react-native";


const Like = (props) => {
    const {width, height, scale} = Dimensions.get("window");

    return (
        <View style={{flexDirection: 'row'}}>
            <View style={{alignItems: 'center', marginLeft: 5, paddingTop: 10, width: 40}}>
                <Image
                    style={{borderWidth: 1, borderColor: '#EEE', borderRadius: 20, width: 36, height: 36}}
                    source={{uri: props.image}}
                />
            </View>
            <View style={{flex: 1, borderBottomWidth: 1, borderColor: '#EEE', padding: 5}}>
                <Text>
                    <Text style={{fontWeight: 'bold', color: '#000', fontSize: 15}}>
                        @{props.username}
                    </Text>
                </Text>
            </View>
        </View>
    )
}
export default Like;