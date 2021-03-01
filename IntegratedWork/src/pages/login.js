import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
import {inject,observer } from "mobx-react";
import {SERVER_ADDRESS} from '../../data/address'
//var Dimensions = require('Dimensions');
var {width,height,scale} =Dimensions.get('window');
var iWidth=width-30;
//const {width,height,scale} = Dimensions.get('windows')
@inject('RootStore')
@observer
class loginView extends Component {

  state = {
    // 
    username: "18665711978",
    // 手机号码是否合法
    Password: 'Yujian',
    
    Email:'1234567@qq.com',
    // 是否显示登录页面 
    showLogin: false,
    // 验证码输入框的值
    
  }


  LoginButton = async ()=>{
      // if(this.state.Password=='' || this.state.Email==''){

      // }
      //make request to the server
      //console.log(this.props)
      var url = `${SERVER_ADDRESS}/front-end/login/validate`
      var result = await axios.post(url,{Email:this.state.Email,Password:this.state.Password})
      console.log(result.data)
      if(result.data.status=='success'){
        this.props.RootStore.setEmail(this.state.Email)
        this.props.RootStore.setPassWord(this.state.PassWord)
        this.props.RootStore.setStatus(true)
        this.props.RootStore.setUserId(result.data.userid)
        this.props.navigation.navigate("Root")
      }
 
      // ,{UserName:this.state.Email,PassWord:this.state.Password}
      
  }

  EmailChangeText = (Email)=>{
    this.setState({Email})
    
  }

  PasswordChangeText = (Password)=>{
    this.setState({Password})
   
  }


  render() {
    const{Email, Password} = this.state;
    return (
      <View style={styles.container}>
        {/* 头像  */}
        <Image style={styles.headStyle} source={{uri:'head'}} />
        {/*  登录表单  */}
        <View style={styles.inputView}>
          <TextInput style={styles.inputStyle} placeholder={'Please type your email'} 
          underlineColorAndroid={'transparent'} keyboardType={'numeric'} 
          value={Email}
          onChangeText={this.EmailChangeText}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput style={styles.inputStyle} placeholder={'password'} secureTextEntry={true}
          value={Password}
          onChangeText={this.PasswordChangeText} />
        </View>
        {/*  触摸透明反馈  */}
        <TouchableOpacity activeOpacity={0.5} onPress={this.LoginButton}>
          <View style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>Log in</Text>
          </View>
        </TouchableOpacity>
        
        {/* <View style={styles.fuwutiaokuanView}>
          <Text style={styles.tongyi}>我已阅读并同意</Text>
          <TouchableOpacity activeOpacity={0.5}>
            <View>
              <Text style={styles.fuwutiaokuan}>服务条款</Text>
            </View>
          </TouchableOpacity>
        </View> */}
        <View style={styles.bottomBtn}>
          {/* <TouchableOpacity activeOpacity={0.5}>
            <Text style={styles.bottomBtnText}>Cannot log in?</Text>
          </TouchableOpacity> */}
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={styles.bottomBtnText}>New User Sign Up</Text>
          </TouchableOpacity>
        </View>
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
    width:88,
    height:88,
    borderWidth:3,
    borderColor:'#fff',
    borderRadius:88,
    marginTop:200,
    marginBottom:20
  },
  inputView:{
    width:width,
    height:44,
    backgroundColor:'#fff',
    marginBottom:10
  },
  inputStyle:{
    width:width-30,
    height:44,
    marginLeft:15,
    backgroundColor:'#fff',
  },
  loginBtn:{
    width:iWidth,
    height:40,
    backgroundColor:'#1fbaf3',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:15,
    marginTop:15,
    borderRadius:8
  },
  loginBtnText:{
    color:'#ffffff'
  },
  // fuwutiaokuanView:{
  //   width:iWidth,
  //   marginLeft:15,
  //   flexWrap:'wrap',
  //   flexDirection:'row',
  //   justifyContent:'flex-start',
  // },
  // fuwutiaokuan:{
  //   color:'#1fbaf3'
  // },
  // tongyi:{
  //   alignSelf:'flex-start'
  // },
  // bottomBtn:{
  //   width:iWidth,
  //   position:'absolute',
  //   bottom:15,
  //   marginLeft:15,
  //   flexDirection:'row',
  //   justifyContent:'space-between'
  // },
  bottomBtnText:{
    color:'#1fbaf3'
  }
 
});

module.exports=loginView;