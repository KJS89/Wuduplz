'use strict';
import React, { PureComponent, useState } from 'react';
import {StyleSheet, Text, TouchableOpacity,View,TextInput,
        Dimensions,
        Button,
        ActivityIndicator,
        AppRegistry,
        Image,
        AsyncStorage,
        Animated } from 'react-native';

import { NavigationActions } from 'react-navigation';
import { RNCamera } from 'react-native-camera';
import { LogLevel, RNFFmpeg } from 'react-native-ffmpeg';
import { format } from 'react-native-path';
import FFmpeg from '../../util/ffmpeg'
import FireBase from '../../util/Firebase'
import request from '../../util/request'
import DefaultImage from '../../../data/cover.jpg'
import { SERVER_ADDRESS } from '../../../data/address';
import { set } from 'mobx';
import Toast from '../../util/Toast'
import {inject,observer } from "mobx-react";
import { ProgressBar, Colors} from 'react-native-paper';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
var RNFS = require('react-native-fs');

var {width,height,scale} =Dimensions.get('window');
var iWidth=width-30;
const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri.split('?')[0];

const Upload = ({route,navigation,RootStore})=> {
   
    const fileUri = {
        gif_uri:'file:///storage/emulated/0/Android/data/com.wuduplz/files/1.gif',
        mp4_uri:'file:///storage/emulated/0/Android/data/com.wuduplz/files/compressed2.mp4',
        jpg_uri:'file:///storage/emulated/0/Android/data/com.wuduplz/files/output.jpg'
    }

const [head,setHead] = useState(DEFAULT_IMAGE)
const [name,setName] = useState('1')
const [short,setShort] = useState('1')
const [long,setLong] = useState('1')
const [key1,setKey1] = useState('1')
const [key2,setKey2] = useState('1')
const [key3,setKey3] = useState('1')
const [time,setTime] = useState(0)
const [privat,setPrivat] = useState(1)


async function deleteFile(uri){
    RNFS.unlink(uri)
    .then(() => {
        console.log('FILE DELETED');
    })
    // `unlink` will throw an error, if the item to unlink does not exist
    .catch((err) => {
        console.log(err.message);
});
}


const videoProcessing = async()=>{

  var jpg_uri =route.params.root_uri + '1.jpg'
  let date = new Date()

   if(RNFS.exists(route.params.compressed_uri))
          await deleteFile(route.params.compressed_uri)
   if(RNFS.exists(jpg_uri))
        await deleteFile(jpg_uri)
     
  
    let command_compress = '-i ' +route.params.video_uri + 
    ' -c:v mpeg4 \''+route.params.compressed_uri;

    await FFmpeg.Execute(command_compress,setTime)
    await deleteFile(route.params.video_uri)

    setTime(route.params.duration)

    let command_jpg =`-i ${route.params.compressed_uri} -ss 00:00:00 -vframes 1 ${jpg_uri}`


    await FFmpeg.Execute(command_jpg)

    
    var jpg_name = RootStore.UserId + Math.floor(date.getTime() + date.getSeconds() / 2)+'.jpg'
    await upload(jpg_uri,'image/jpg',jpg_name,'videoImage')
    await deleteFile(jpg_uri)

    var mp4_name = RootStore.UserId + Math.floor(date.getTime() + date.getSeconds() / 2)+'.mp4'
    await upload(route.params.compressed_uri,'video/mp4',mp4_name,'video')
    await deleteFile(route.params.compressed_uri)

    var jpg_server_path = '|videoImages|'+ jpg_name

    var video_server_path = '|videos|'+mp4_name

    setHead(SERVER_ADDRESS+jpg_server_path.split('|').join('/'))

    return [jpg_server_path,video_server_path]
}



async function upload(uri,fileType,name,option){
    let formData = new FormData();
    formData.append(option,{
        uri:uri,
        name: name,
        type: fileType
    })

   await request.post('/front-end/upload', formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })

}

const count = async()=>{
  setInterval(()=>{
      setTime(time+1)
  },1000)
}

return (

//     <View style={styles.container}>
//     {/* photo  */}
//     <Image roundAsCircle={true} resizeMode={'stretch'} style={styles.headStyle} source={{uri:head}} />

//     <Text>  </Text>
//     <View style={{flexDirection:'row'}}> 
//     <Text style={[styles.textstyle,{marginLeft:15}]}> VideoName: </Text>
//     <TextInput style={[styles.inputStyle,{marginLeft:40}]} placeholder={'VideoName'} underlineColorAndroid={'transparent'} keyboardType={'numeric'} onChangeText={text=>{setName(text)}}/>
//     </View>

//     <Text>  </Text>
//     <View style={{flexDirection:'row'}}> 
//     <Text style={[styles.textstyle]}> ShortDescription </Text>
//     <TextInput style={styles.inputStyle} placeholder={'ShortDescription'}
//      underlineColorAndroid={'transparent'} keyboardType={'numeric'} onChangeText={text=>{setShort(text)}}/>
//     </View>


//     <Text>  </Text>
//     <View style={{flexDirection:'row'}}> 
//     <Text style={[styles.textstyle]}> LongDescription </Text>
//     <TextInput style={styles.inputStyle} placeholder={'LongDescription'}
//      underlineColorAndroid={'transparent'} keyboardType={'numeric'} onChangeText={text=>{setLong(text)}}/>
//     </View>

//     <Text>  </Text>
//     <View style={{flexDirection:'row'}}> 
//     <Text style={[styles.textstyle,{borderWidth:0}]}> Keywords: </Text>
//     <TextInput style={styles.subTextinStyle} placeholder={'Keyword 1'} underlineColorAndroid={'transparent'} keyboardType={'numeric'} onChangeText={text=>{setKey1(text)}}/>
//     <TextInput style={styles.subTextinStyle} placeholder={'Keyword 2'} underlineColorAndroid={'transparent'} keyboardType={'numeric'} onChangeText={text=>{setKey2(text)}}/>
//     <TextInput style={styles.subTextinStyle} placeholder={'Keyword 3'} underlineColorAndroid={'transparent'} keyboardType={'numeric'} onChangeText={text=>{setKey3(text)}}/>
//     </View>

//     <Text>  </Text>
//     <View style={{flexDirection:'row',alignItems:'flex-start',width:'95%'}}> 
//     <Text style={[styles.textstyle]}> Permissions: </Text>
//       <RadioGroup onSelect = {(index, value) => setPrivat(index)} style={{flexDirection:'row'}}>
//           <RadioButton value={'item1'} style={{justifyContent: 'center',alignSelf:'flex-start'}} >
//             <Text>Private</Text>
//           </RadioButton>
//           <RadioButton value={'item2'} style={{justifyContent: 'center',alignSelf:'flex-start'}} >
//             <Text>Public</Text>
//           </RadioButton>        
//       </RadioGroup>
//     </View>




//     <Text>  </Text> 
//     <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Record')}>
//       <View style={styles.EditBtn}>
//         <Text style={styles.EditBtnText}>Recording</Text>
//       </View>
//     </TouchableOpacity>

//     <TouchableOpacity activeOpacity={0.5} onPress={async()=>{
//          /*
//     to upload video
//     video params:{
//         VideoName,
//         VideoShortDescription,
//         VideoLongDescription,
//         VideoPath,
//         VideoCreatorId,
//         VideoImagePath,
//         VideoRequestorId,
//         Keywords []
//     }
// */
//         var data = {
//             video_name:name,
//             short_description:short,
//             long_description:long,
//             keywords:[key1,key2,key3],
//             creator_id:RootStore.UserId,
//             response_id:route.params.response_id     
//         }
       
//         if(data.video_name==""&&data.short_description==""&&data.keyword1==""&&data.keyword2==""&&data.keyword2==""&&data.keyword3==""){
//             Toast.sad('no empty',2000,"center")
//         }else if(!route.params.video_uri ||route.params.video_uri==""){
//             Toast.sad('please record the video',2000,"center")
//         }else{
//             var file_uri = await videoProcessing()
//             var jpg_server_path = file_uri[0]
//             var mp4_server_path = file_uri[1]
//             console.log(jpg_server_path,mp4_server_path)
//             data.video_path=mp4_server_path
//             data.video_image_path=jpg_server_path

//             data.private = privat

//             var result = await request.post('/front-end/addVideo',data)
//             setTime(0)
//         }
//             //video_path:video_server_path,
//            // video_image_path:jpg_server_path,
//             //await deleteFile(route.params.compressed_uri)
//     }}>
//       <View style={styles.EditBtn}>
//         <Text style={styles.EditBtnText}>Upload</Text>
//       </View>
//       <ProgressBar progress={time/route.params.duration} color={Colors.red800} />
//     </TouchableOpacity>

   
   

      
 // </View>
 <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',alignSelf: 'stretch'}}> 

 <Text style={styles.title}> Set Video Permissions </Text>
 <Text style={styles.title}>   </Text>
 <Text style={styles.title}>   </Text>
 



 <View style={{flexDirection:'row', alignItems:'baseline'}}> 
 <TouchableOpacity activeOpacity={0.5} onPress={()=>setPrivat(1)}>
       <View style={styles.publicBott}>
         <Text style={styles.setBottTxt}>As Public</Text>
       </View>
 </TouchableOpacity>
 <Text style={styles.title}>   </Text>
 <Text style={styles.title}>   </Text>
 <Text style={styles.title}>   </Text>
 <TouchableOpacity activeOpacity={0.5}  onPress={()=>setPrivat(0)}>
       <View style={styles.privateBott}>
         <Text style={styles.setBottTxt}>As Private</Text>
       </View>
 </TouchableOpacity>
 </View>

 <Text>   </Text>
 <Text>   </Text>

 <View style={{flexDirection:'row', alignItems:'baseline'}}> 
 <Text style={styles.explainTxt}>Post to library and everyone can see your post</Text>
 <Text style={styles.explainTxt}>Only paying users can watch and download</Text>
 </View>


 <Text style={styles.title}>   </Text>
 <Text>   </Text>


 <Text style={styles.notice}>Notice: once you set, this cannot be changed.</Text>


 <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Record')}>
       <View style={styles.continueBottom}>
         <Text style={styles.continueTxt} >Recording</Text>
       </View>
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5} onPress={async()=>{
         /*
    to upload video
    video params:{
        VideoName,
        VideoShortDescription,
        VideoLongDescription,
        VideoPath,
        VideoCreatorId,
        VideoImagePath,
        VideoRequestorId,
        Keywords []
    }
*/
        var data = {
            video_name:name,
            short_description:short,
            long_description:long,
            keywords:[key1,key2,key3],
            creator_id:RootStore.UserId,
            response_id:route.params.response_id     
        }
       
        if(data.video_name==""&&data.short_description==""&&data.keyword1==""&&data.keyword2==""&&data.keyword2==""&&data.keyword3==""){
            Toast.sad('no empty',2000,"center")
        }else if(!route.params.video_uri ||route.params.video_uri==""){
            Toast.sad('please record the video',2000,"center")
        }else{
            var file_uri = await videoProcessing()
            var jpg_server_path = file_uri[0]
            var mp4_server_path = file_uri[1]
            console.log(jpg_server_path,mp4_server_path)
            data.video_path=mp4_server_path
            data.video_image_path=jpg_server_path

            data.private = privat

            var result = await request.post('/front-end/addVideo',data)
            setTime(0)
        }
            
    }}>
       <View style={styles.continueBottom}>
         <Text style={styles.continueTxt}>Upload</Text>
       </View>
 </TouchableOpacity>





</View>


	)

}


const styles = StyleSheet.create({
  title:{
    color:'#2B49C1',
    fontSize:35,
  },
  subtiteleBackGround:{
    height:30, 
    width:95, 
    backgroundColor:'#2B49C1', 
    borderRadius:5
  },
  subtiteleTxt:{
    flex:1,
    textAlign:'center',
    backgroundColor:'transparent',
    fontSize:20, 
    color: 'white'
  },
  explainBackground:{
    height:45, 
    width:200, 
    backgroundColor:'black', 
    borderRadius:5,
  },
  explainTxt:{
    flex:1,
    textAlign:'center',
    backgroundColor:'transparent',
    fontSize:15, 
    color: '#2B49C1'
  },
  publicBott:{
    width:'90%',
    height: 40,
    backgroundColor:'#58ACFA',
    marginHorizontal:10
  },

  privateBott:{
    width:'90%',
    height: 40,
    backgroundColor:'#58ACFA',
    marginHorizontal:10,
  },
  setBottTxt:{
    color:'white',
    alignSelf:'center', 
    fontSize: 25,
    padding:5,
  },
  notice:{
    color:'red',
    fontSize:12,
  },
  continueBottom:{
    width:120,
    height:50,
    backgroundColor:'#2B49C1',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:15,
    marginTop:15,
    borderRadius:8
  },
  continueTxt:{
    color:'white',
    alignItems:'center',
    fontSize:25,
  },
  
});

export default inject('RootStore')(observer(Upload));

