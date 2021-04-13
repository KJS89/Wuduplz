'use strict';
import React, { PureComponent, useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { RNCamera } from 'react-native-camera';

class Record extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            recording: false,
            processing: false,
        }
    }

    async startRecording() {
        this.setState({recording: true});
        const {uri, codec = "mp4"} = await this.camera.recordAsync();

        this.setState({recording: false, processing: true});

        console.log(uri);
        console.log(codec);
        // upload video to database here

        this.setState({processing: false});
    }

    stopRecording() {
        this.camera.stopRecording();
    }

    render() {
        const {recording, processing}  = this.state;

        let button = (
            <TouchableOpacity
                onPress={this.startRecording.bind(this)}
                styles={styles.capture}
            >
                <Text style={{...styles.capture, backgroundColor: 'lightgreen', color: 'black'}}> RECORD </Text>
            </TouchableOpacity>
        )

        if (recording) {
            button = (
                <TouchableOpacity
                    onPress={this.stopRecording.bind(this)}
                    style={{...styles.capture, backgroundColor: 'lightpink'}}
                >
                    <Text style={{backgroundColor: 'lightpink', color:'black'}}> STOP </Text>
                </TouchableOpacity>
            )
        }

        if (processing) {
            button = (
                <View style={styles.capture}>
                    <ActivityIndicator animating size={18} />
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    faceDetectionMode={RNCamera.Constants.FaceDetection.Mode.accurate}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                />
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                    {button}
                </View>
            </View>
        );
    };
}
export default Record;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});