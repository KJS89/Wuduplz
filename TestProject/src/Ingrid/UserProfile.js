import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

//var Dimensions = require('Dimensions');
var {width,height,scale} =Dimensions.get('window');
var iWidth=width-30;
//const {width,height,scale} = Dimensions.get('windows')

class loginView extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* photo  */}
        <Image roundAsCircle={true} resizeMode={'stretch'} style={styles.headStyle} source={{uri:'Picture'}} />

        <Text>  </Text>
        <View style={{flexDirection:'row', alignItems:'baseline',}}> 
        <Text style={styles.textstyle}> Nickname: </Text>
        <TextInput style={styles.inputStyle} placeholder={'Nickname shows here'} underlineColorAndroid={'transparent'} keyboardType={'numeric'} />
        </View>

        <Text>  </Text>
        <View style={{flexDirection:'row', alignItems:'baseline',}}> 
        <Text style={styles.textstyle}> Email: </Text>
        <TextInput style={styles.inputStyle} placeholder={'Email shows here'} underlineColorAndroid={'transparent'} keyboardType={'numeric'} />
        </View>

        <Text>  </Text>
        <View style={{flexDirection:'row', alignItems:'baseline',}}> 
        <Text style={styles.textstyle}> Keywords: </Text>
        <TextInput style={styles.subTextinStyle} placeholder={'Keyword 1'} underlineColorAndroid={'transparent'} keyboardType={'numeric'} />
        <TextInput style={styles.subTextinStyle} placeholder={'Keyword 2'} underlineColorAndroid={'transparent'} keyboardType={'numeric'} />
        <TextInput style={styles.subTextinStyle} placeholder={'Keyword 3'} underlineColorAndroid={'transparent'} keyboardType={'numeric'} />
        </View>


        <Text>  </Text>
        <View style={{flexDirection:'row', alignItems:'baseline',}}> 
        <Text style={styles.textstyle}> Location: </Text>
        <TextInput style={styles.subTextinStyle} placeholder={'City'} underlineColorAndroid={'transparent'} keyboardType={'numeric'} />
        <TextInput style={styles.subTextinStyle} placeholder={'Province'} underlineColorAndroid={'transparent'} keyboardType={'numeric'} />
        <TextInput style={styles.subTextinStyle} placeholder={'Country'} underlineColorAndroid={'transparent'} keyboardType={'numeric'} />
        </View>

        <Text>  </Text>
        <View style={{flexDirection:'row', alignItems:'baseline',}}> 
        <Text style={styles.textstyle}> Membership level: </Text>
        <TextInput style={styles.inputStyle} placeholder={'Free/Golden/Diamond'} underlineColorAndroid={'transparent'} keyboardType={'numeric'} />
        </View>

        <Text>  </Text>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.EditBtn}>
            <Text style={styles.EditBtnText}>Edit my profile</Text>
          </View>
        </TouchableOpacity>



        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#738EF5',
    alignItems:'center'
  },
  headStyle:{
    width:80,
    height:80,
    borderWidth:3,
    borderColor:'#fff',
    borderRadius:80,
    marginTop:height-700,
    marginBottom:30,
  },
  textstyle:{
    fontSize: 20,
    color:'white',
  },

  inputStyle:{
    width: '50%',
    height:35,
    marginLeft:15,
    backgroundColor:'#fff',
  },
  subTextinStyle: {
    width: '20%',
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
  
});

module.exports=loginView;