import React, {useState} from 'react';
import {KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View} from "react-native";

const LikeInput = (props) => {
    return (
        <KeyboardAvoidingView behaviour={'position'}>
            <View style={{
                backgroundColor: '#FFF',
                flexDirection: 'row',
                borderTopWidth: 1,
                borderColor: '#EEE',
                alignItems: 'center',
                paddingLeft: 15,
            }}>
                <TouchableOpacity
                    style={{height: 40, paddingHorizontal: 5, alignItems: 'center', width: '95%', justifyContent: 'center'}}
                    onPress={() => {props.closeModal()}}
                >
                    <Text style={{color: 'red', fontWeight: 'bold'}}>Close</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}
export default LikeInput;
