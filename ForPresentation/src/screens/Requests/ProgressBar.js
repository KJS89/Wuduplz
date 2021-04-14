import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View, ProgressBarAndroid,Animated} from 'react-native';  
import FFmpeg from '../../util/ffmpeg'
import { ProgressBar, Colors } from 'react-native-paper';
var RNFS = require('react-native-fs');
  
export default class App extends Component {  
    state={  
        progressStatus: 20, 
        time:0 
    }  

    fileUri = {
      gif_uri:'file:///storage/emulated/0/Android/data/com.wuduplz/files/1.gif',
      mp4_uri:'file:///storage/emulated/0/Android/data/com.wuduplz/files/compressed2.mp4',
      jpg_uri:'file:///storage/emulated/0/Android/data/com.wuduplz/files/output.jpg'
  }
    
deleteFile = async(uri)=>{
  RNFS.unlink(uri)
  .then(() => {
      console.log('FILE DELETED');
  })
  // `unlink` will throw an error, if the item to unlink does not exist
  .catch((err) => {
      console.log(err.message);
});
}

upload = async(uri,fileType)=>{
  let formData = new FormData();
  formData.append("video",{
      uri:uri,
      name: uri.split('/').pop(),
      type: fileType
  })

 var result = await request.post('/front-end/upload', formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })

  return result.path
}

setTime = (param)=>{
  this.setState({time:param})
}

    videoProcessing = async()=>{

      if(RNFS.exists(this.props.route.params.compressed_uri))
          await this.deleteFile(this.props.route.params.compressed_uri)
      if(RNFS.exists(this.fileUri.jpg_uri))
        await this.deleteFile(this.fileUri.jpg_uri)
      let command_compress = '-i ' +this.props.route.params.video_uri + 
      ' -c:v mpeg4 \'file:///storage/emulated/0/Android/data/com.wuduplz/files/compressed2.mp4';
  
      await FFmpeg.Execute(command_compress,this.setTime)
      await this.deleteFile(this.props.route.params.video_uri)
  
      let gif_uri='file:///storage/emulated/0/Android/data/com.wuduplz/files/1.gif'


      let command_gif = '-t 1 -ss 00:00:00 -i ' + this.props.route.params.compressed_uri +
      ' file:///storage/emulated/0/Android/data/com.wuduplz/files/1.gif';
  
      let command_jpg =`-i ${this.props.route.params.compressed_uri} -ss 00:00:00 -vframes 1 ${this.fileUri.jpg_uri}`
  
  
      await FFmpeg.Execute(command_jpg)
  
      var jpg_server_path = await this.upload(this.fileUri.jpg_uri,'image/jpg')
      await this.deleteFile(fileUri.jpg_uri)
  
      var video_server_path = await this.upload(this.fileUri.mp4_uri,'video/mp4')
      await this.deleteFile(this.fileUri.mp4_uri)
  
  
      return [jpg_server_path,video_server_path]
  }


    anim = new Animated.Value(0);  
    componentDidMount(){  
        //console.log(this.anim)
       this.videoProcessing()
        //this.onAnimate();  
    }  
    onAnimate = () =>{  
        this.anim.addListener(({value})=> {  
            console.log(value)
            this.setState({progressStatus: parseInt(value,10)});  
        });  
        Animated.timing(this.anim,{  
             toValue: 100,  
             duration:5000,
             useNativeDriver:true
        }).start();  
    }  
  render() {  
    return (  

                <ProgressBar progress={this.state.time/this.props.route.params.video_duration} color={Colors.red800} />
             
    );  
  }  
}  
const styles = StyleSheet.create({  
    container: {  
    width: "100%",  
    height: 40,  
    padding: 3,  
    borderColor: "#FAA",  
    borderWidth: 3,  
    borderRadius: 30,  
    marginTop: 200,  
    justifyContent: "center",  
  },  
  inner:{  
    width: "100%",  
    height: 30,  
    borderRadius: 15,  
    backgroundColor:"green",  
  },  
  label:{  
    fontSize:23,  
    color: "black",  
    position: "absolute",  
    zIndex: 1,  
    alignSelf: "center",  
  }  
});  