'use strict';
import React, { PureComponent, useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator,
    ProgressBarAndroid,
    Animated,
} from 'react-native';

import { RNCamera } from 'react-native-camera';
import { LogLevel, RNFFmpeg } from 'react-native-ffmpeg';

const VIDEO_DURATION = 25; // seconds

class Record extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            recording: false,
            processing: false,
            progressStatus: 0.01,
        }
    }
    // anim = new Animated.Value(0.05);
    //
    // onAnimate = () => {
    //     this.anim.addListener(({value}) => {
    //         this.setState({progressStatus:parseInt(value, 0.01)})
    //     });
    //     Animated.timing(this.anim, {
    //         toValue: 1.0,
    //         duration: 100,
    //         useNativeDriver: true,
    //     }).start();
    // }

    async startRecording() {
        this.setState({recording: true});

        //this.onAnimate();
        let intervalID = setInterval( () => {
           let progress = (this.state.progressStatus + 0.01) % 1
           this.setState({progressStatus: progress})
        }, 287);
        const {uri, codec = "mp4"} = await this.camera.recordAsync({maxDuration: VIDEO_DURATION});

        this.setState({recording: false, processing: true, progressStatus: 0.01});
        // stop progress interval
        clearInterval(intervalID);

        console.log(uri);
        console.log(codec);
        // upload video to database here
        // compress the video first
        let command = '-i ' + uri + ' -c:v mpeg4 \'file:///data/user/0/com.wuduplz/cache/Camera/compressed2.mp4';
        RNFFmpeg.executeAsync(command, completedExecution => {
            if (completedExecution.returnCode === 0) {
                console.log("FFmpeg process completed successfully");
            } else {
                console.log(`FFmpeg process failed with rc=${completedExecution.returnCode}.`);
            }
        }).then(executionId => console.log(`Async FFmpeg process started with executionId ${executionId}.`));

        // reset progress bar and button
        this.setState({processing: false, progressStatus: 0.01});
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
                    <ProgressBarAndroid
                        style={{width:'100%', color:'red'}}
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={this.state.progressStatus}
                    >
                    </ProgressBarAndroid>
                </View>
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