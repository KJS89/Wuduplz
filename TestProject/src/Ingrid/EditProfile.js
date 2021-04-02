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
        <TextInput style={styles.inputStyle} placeholder={'Edite your Nickname'} underlineColorAndroid={'transparent'} keyboardType={'numeric'} />


        <Text>  </Text>
        <View style={{flexDirection:'row', alignItems:'baseline',}}> 
        <Text style={styles.textstyle}> Email cannot be changed </Text>
        <TextInput style={styles.emailStyle} placeholder={'Email'} underlineColorAndroid={'transparent'} keyboardType={'numeric'} />
        </View>


        <Text>  </Text>
        <View style={{flexDirection:'row', alignItems:'baseline',}}> 
        <TextInput style={styles.subTextinStyle} placeholder={'Edit Keyword 1'} underlineColorAndroid={'transparent'} keyboardType={'numeric'} />
        <TextInput style={styles.subTextinStyle} placeholder={'Edit Keyword 2'} underlineColorAndroid={'transparent'} keyboardType={'numeric'} />
        <TextInput style={styles.subTextinStyle} placeholder={'Edit Keyword 3'} underlineColorAndroid={'transparent'} keyboardType={'numeric'} />
        </View>


        <Text>  </Text>
        <View style={{flexDirection:'row', alignItems:'baseline',}}> 
        <TextInput style={styles.subTextinStyle} placeholder={'Change City'} underlineColorAndroid={'transparent'} keyboardType={'numeric'} />
        <TextInput style={styles.subTextinStyle} placeholder={'Change Province'} underlineColorAndroid={'transparent'} keyboardType={'numeric'} />
        <TextInput style={styles.subTextinStyle} placeholder={'Change Country'} underlineColorAndroid={'transparent'} keyboardType={'numeric'} />
        </View>

        <Text>  </Text>
        <View style={{flexDirection:'row', alignItems:'baseline',}}> 
        <Text style={styles.textstyle}> Membership level: </Text>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.memberChangeBtm}>
            <Text style={styles.memberChangeTxt}>Click to Change</Text>
          </View>
    </TouchableOpacity>
        </View>

        <Text>  </Text>
        <TouchableOpacity activeOpacity={0.5}>
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
    marginTop:height-700,
    marginBottom:30,
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
    fontSize: 18,
    padding:5,
  }
  
});

module.exports=loginView;