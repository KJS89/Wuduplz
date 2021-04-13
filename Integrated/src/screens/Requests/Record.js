'use strict';
import React, { PureComponent, useState } from 'react';
import {  StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator,
    ProgressBarAndroid,
    Animated, } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { LogLevel, RNFFmpeg } from 'react-native-ffmpeg';
var RNFS = require('react-native-fs');

const VIDEO_DURATION = 25; // seconds
class Record extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            recording: false,
            processing: false,
            progressStatus: 0.01,
            startTime:0,
            endTime:0,
            duration:0
        }
    }

    async deleteFile(uri) {
        RNFS.unlink(uri)
            .then(() => {
                console.log('FILE DELETED');
            })
            // `unlink` will throw an error, if the item to unlink does not exist
            .catch((err) => {
                console.log(err.message);
  });
    }

    async startRecording() {
        this.setState({recording: true});
        this.setState({startTime:Date.now()})
        let intervalID = setInterval( () => {
            
            let progress = (this.state.progressStatus + 0.01) % 1
            
            this.setState({progressStatus: progress})
         }, 287);
        
        const {uri, codec = "mp4"} = await this.camera.recordAsync({maxDuration: VIDEO_DURATION});
        
        this.setState({recording: false, processing: true, progressStatus: 0.01});

        clearInterval(intervalID);
  
         console.log(uri)
        //var destPath ='file:///storage/emulated/0/Android/data/com.wuduplz/files/'+uri.split('/').pop()
        // await RNFS.moveFile(uri, destPath)
        //     .then((success) => {
        //     console.log('file moved!');
        //     })
        //     .catch((err) => {
        //     console.log("Error: " + err.message);
        //     });
            //file:///data/user/0/com.wuduplz/cache/Camera/compressed2.mp4
    




        // upload video to database here
        this.setState({processing: false, progressStatus: 0.01});
        var root_uri =''
        if(uri.split('/').length !=1){
            root_uri = uri.split('/').slice(0,-1).join('/')+'/'
        }else{
            root_uri = uri.split('\\').slice(0,-1).join('\\')+'\\'
        }
        console.log(root_uri)
        this.props.navigation.navigate('VideoUpload',{
            'video_uri':uri,
            'compressed_uri':root_uri+'1.mp4',
            'duration':this.state.endTime-this.state.startTime-1100,
            'root_uri':root_uri
        })
    }

    stopRecording() {
        this.setState({endTime:Date.now()})
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