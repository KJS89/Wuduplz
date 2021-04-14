import React, { Component } from 'react';
import { Dimensions,AsyncStorage  } from 'react-native';
import {inject,observer } from "mobx-react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import path from 'react-native-path'
import request from '../util/request'
import ImagePicker from 'react-native-image-crop-picker';
import DefaultImage from '../../data/cover.jpg'
import {SERVER_ADDRESS} from '../../data/address'
import { SvgCssUri } from 'react-native-svg';
var {width,height,scale} =Dimensions.get('window');
var iWidth=width-30;
//const {width,height,scale} = Dimensions.get('windows')

const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri.split('?')[0];
console.log(DEFAULT_IMAGE)
@inject('RootStore')
@observer
class loginView extends Component {

  state = {
    Img:this.props.RootStore.Image==""?DEFAULT_IMAGE:SERVER_ADDRESS+this.props.RootStore.Image.split('|').join('//'),
    NickName:this.props.RootStore.UserName,
    Email:this.props.RootStore.Email,
    Keyword1:this.props.RootStore.keywords[0].KeywordContent,
    Keyword2:this.props.RootStore.keywords[1].KeywordContent,
    Keyword3:this.props.RootStore.keywords[2].KeywordContent,
    City:this.props.RootStore.City,
    Country:this.props.RootStore.Country,
    Province:this.props.RootStore.Province,
    //image_uri:this.props.RootStore.Image,
    formData:{},
    image_name:undefined
  }

  updateState = ()=>{
    this.setState({
      Img:this.props.RootStore.Image==""?DEFAULT_IMAGE:SERVER_ADDRESS+this.props.RootStore.Image.split('|').join('//'),
      NickName:this.props.RootStore.UserName,
      Email:this.props.RootStore.Email,
      Keyword1:this.props.RootStore.keywords[0].KeywordContent,
      Keyword2:this.props.RootStore.keywords[1].KeywordContent,
      Keyword3:this.props.RootStore.keywords[2].KeywordContent,
      City:this.props.RootStore.City,
      Country:this.props.RootStore.Country,
      image_uri:this.props.RootStore.Image,
      Province:this.props.RootStore.Province
    })
  }

  AlterRoot = (data)=>{
    if(data.Email)
      this.props.RootStore.setEmail(data.Email)
    if(data.UserName){
      console.log('UserName exist')
      this.props.RootStore.setUserName(data.UserName)
    }
    if(data.City)
      this.props.RootStore.setCity(data.City)
    if(data.Country)
      this.props.RootStore.setCountry(data.Country)
    if(data.Province)
      this.props.RootStore.setProvince(data.Province)
    if(data.keywords){
      this.props.RootStore.clearKeywords()
      for(var i=0;i<10;i++)
        this.props.RootStore.pushKeyword(data.keywords[i])

    }
    if(data.PhotoPath){
      var uri =data.PhotoPath
      this.props.RootStore.setImage(uri)
    }


  }

  edit = async()=>{
    var uri=""
    console.log(this.props.RootStore.Image)
    if(this.state.image_name){
      uri= '|images|'+this.state.image_name
      await request.post('/front-end/upload', this.state.formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
    }else
     uri=this.props.RootStore.Image
    var data = {
      'NickName':this.state.NickName,
      'Email':this.state.Email,
  
      'keywords':[{'KeywordContent':this.state.Keyword1,'KeywordId':this.props.RootStore.keywords[0].KeywordId},
                  {'KeywordContent':this.state.Keyword2,'KeywordId':this.props.RootStore.keywords[1].KeywordId},
                  {'KeywordContent':this.state.Keyword3,'KeywordId':this.props.RootStore.keywords[2].KeywordId}],
      'City':this.state.City,
      'Country':this.state.Country,
      'UserId':this.props.RootStore.UserId,
      'PhotoPath':uri,
      'Province':this.state.Province
    }

    console.log('data is ',data)
    console.log('RootStore is ',this.props.RootStore)
   
    await request.post('/front-end/editUser',data)
    var user_information = await request.post('/front-end/getUser',{'Email':this.state.Email})
    this.AlterRoot(user_information)
    this.updateState()

  }

  

  NickNameChange = (param)=>{
    this.setState({NickName:param})
  }

 EmailChange = (Email)=>{
    this.setState({Email})
  }

  Keyword1Change = (Keyword1)=>{
    this.setState({Keyword1})
  }

  Keyword2Change = (Keyword2)=>{
    this.setState({Keyword2})
  }

  Keyword3Change = (Keyword3)=>{
    this.setState({Keyword3})
  }

  CityChange = (City) =>{
    this.setState({City})
  }

  ProvinceChange = (Province)=>{
    this.setState({Province})
  }

  CountryChange = (Country) =>{
    this.setState({Country})
  }

  ImagePick = async()=>{
    const image = await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    });
    //console.log('image is ',image)

    

    let formData = new FormData();
    formData.append("headPhoto", {
      // local address
      uri: image.path,
      // image type
      type: image.mime,
      // image name
      name: image.path.split("/").pop(),


    });

    console.log('format is ',formData._parts)
    this.setState({formData:formData})
    // var result = await request.post('/front-end/upload', formData, {
    //   headers: {
    //     "Content-Type": "multipart/form-data"
    //   }
    // })

    console.log(image.path)
    this.setState({Img:image.path})
    //this.setState({image_uri:result.path})
    this.setState({image_name:image.path.split("/").pop()})
    console.log('state ',this.state)
      
}

  render() {
    const{NickName,Email,Keyword1,Keyword2,Keyword3,City,Country,Img,image_name,Province} = this.state
    console.log('Img is',Img)
    console.log('Img_name is',image_name)

    return (
      <View style={styles.container}>
        {/* photo  */}
        <TouchableOpacity onPress={()=>this.ImagePick()}>
          <Image roundAsCircle={true} resizeMode={'stretch'} style={styles.headStyle} source={{uri:Img}}/>
        </TouchableOpacity>
        <Text>  </Text>
        <TextInput style={styles.inputStyle} placeholder={'Edite your Nickname'} underlineColorAndroid={'transparent'}
         keyboardType={'numeric'} value={NickName} onChangeText={this.NickNameChange}/>


        <Text>  </Text>
        <View style={{flexDirection:'row', alignItems:'baseline',width:'80%'}}> 
        <Text style={{fontSize:16}}>Email Address   {Email} </Text>
        {/* <TextInput style={styles.emailStyle} placeholder={'Email'} 
        underlineColorAndroid={'transparent'} keyboardType={'numeric'} value={Email} onChangeText={this.EmailChange}/> */}
        </View>


        <Text>  </Text>

        <View style={{flexDirection:'column'}}>
          <View style={{flexDirection:'row', alignItems:'baseline',}}> 
              <TextInput style={styles.subTextinStyle} placeholder={'Edit Keyword 1'} 
              underlineColorAndroid={'transparent'} keyboardType={'numeric'} value={Keyword1} onChangeText={this.Keyword1Change}/>
              <TextInput style={styles.subTextinStyle} placeholder={'Edit Keyword 2'} 
              underlineColorAndroid={'transparent'} keyboardType={'numeric'} value={Keyword2} onChangeText={this.Keyword2Change}/>
              <TextInput style={styles.subTextinStyle} placeholder={'Edit Keyword 3'} 
              underlineColorAndroid={'transparent'} keyboardType={'numeric'} value={Keyword3} onChangeText={this.Keyword3Change}/>
          </View>
          <View style={styles.keyButton}>
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.props.navigation.navigate('Keyword')}}>
              <View >
                <Text style={styles.keyButtonTxt}>Add More Keywords</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

    


        <Text>  </Text>
        <View style={{flexDirection:'row', alignItems:'baseline',}}> 
        <TextInput style={styles.subTextinStyle} placeholder={'Change City'}
         underlineColorAndroid={'transparent'} keyboardType={'numeric'} value={City} onChangeText={this.CityChange}/>

        <TextInput style={styles.subTextinStyle} placeholder={'Change Province'}
         underlineColorAndroid={'transparent'} keyboardType={'numeric'} value={Province} onChangeText={this.ProvinceChange}/>
      
        <TextInput style={styles.subTextinStyle} placeholder={'Change Country'} 
        underlineColorAndroid={'transparent'} keyboardType={'numeric'} value={Country} onChangeText={this.CountryChange}/>
        </View>

        <Text>  </Text>
        <View style={{flexDirection:'row', alignItems:'baseline',}}> 
        <Text style={styles.textstyle}> Membership level: </Text>
        <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.props.navigation.navigate('Membership')}}>
          <View style={styles.memberChangeBtm}>
            <Text style={styles.memberChangeTxt}>Click to Change</Text>
          </View>
        </TouchableOpacity>
        </View>

        <Text>  </Text>
        <TouchableOpacity activeOpacity={0.5} onPress={()=>this.edit()}>
          <View style={styles.EditBtn}>
            <Text style={styles.EditBtnText}>Save</Text>
          </View>
        </TouchableOpacity>



        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ecedf1',
    alignItems:'center'
  },
  headStyle:{
    width:80,
    height:80,
    borderWidth:3,
    borderColor:'#fff',
    borderRadius:80,
    marginTop:height-650,
    marginBottom:30,
    paddingTop:30
  },
  textstyle:{
    fontSize: 15,
    color:'#738EF5',
  },

  inputStyle:{
    width: '80%',
    height:35,
    marginLeft:15,
    backgroundColor:'#fff',
  },
  emailStyle:{
    width: '40%',
    height:35,
    marginLeft:15,
    backgroundColor:'#fff',
  },

  subTextinStyle: {
    width: '25%',
    height:35,
    marginLeft:15,
    backgroundColor:'#fff',
  },
  EditBtn:{
    width:iWidth - 120,
    height:40,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:15,
    marginTop:15,
    borderRadius:8
  },
  EditBtnText:{
    color:'#738EF5',
    fontSize: 20,
    fontWeight:'bold',
  },
  memberChangeBtm:{
    width:'85%',
    height: 30,
    backgroundColor:'#5858FA',
    marginHorizontal:10
  },
  memberChangeTxt:{
    color:'white',
    alignSelf:'center', 
    fontSize: 14,
    padding:5,
  },
  keyButton:{
    width:'60%',
    height: 30,
    backgroundColor:'#5858FA',
    marginTop:20,
    alignSelf:'center'
  },
  keyButtonTxt:{
    color:'white',
    alignSelf:'center', 
    fontSize: 14,
    padding:5,
  }
  
});

module.exports=loginView;