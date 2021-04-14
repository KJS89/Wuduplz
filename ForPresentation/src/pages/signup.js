import React from 'react';
import {
  View, 
  Text, 
  TextInput,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {inject,observer } from "mobx-react";
import request from '../util/request'
import Toast from '../util/Toast'

const AddRequest = ({ navigation,RootStore }) => {

  const [email, onChangeEmail] = React.useState('');

  const [country,onChangeCountry] = React.useState('');

  const [city,onChangeCity] = React.useState('');

  const [province,onChangeProvince] = React.useState('');



  const [password, onChangePassword] = React.useState('');

  const [username, onChangeUserName] = React.useState('');

  const [age, setAge] = React.useState(false);

  const [birthday,onChangeBirthDay] = React.useState(false);

  const [keyword1,onChange1] = React.useState('');
  const [keyword2,onChange2] = React.useState('');
  const [keyword3,onChange3] = React.useState('');



  const Start = async ()=>{
    var birth = birthday
    var data = {
      'Email':email,
      'Password':password,
      'UserName':username,
      'City':city,
      'Province':province,
      'Country':country,
      'Age':new Date().getFullYear() - birthday,
      'Province':province,
      'Keywords':[keyword1,keyword2,keyword3]
      
    }
    if(data['Email']==''||data['Password']=='' || data['UserName']==''){
        Toast.info('no blank input')
    }else{
      let result = await request.post('/front-end/addUser',data)
      console.log(result)
      if(!result.status){
        Toast.fail(result.message)
      }else{
      Toast.smile('succes!')
      navigation.navigate('Login')
      }
    }
   
  }

  return (

  // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',alignSelf: 'stretch'}}> 

  //   <Text style={styles.step}> Email </Text>
  //     <TextInput
  //       style={{ height: 40, borderColor: 'blue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
  //       onChangeText={text => onChangeEmail(text)}
  //       placeholder={'Your email'}
  //       value={email}
  //     />

  //   <Text style={styles.step}> Password </Text>
  //     <TextInput
  //       style={{ height: 40, borderColor: 'blue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
  //       onChangeText={text => onChangePassword(text)}
  //       placeholder={'Set your password'}
  //       value={password}
  //     />  
    

  //   <Text style={styles.step}> User Name </Text>
  //     <TextInput
  //       style={{ height: 40, borderColor: 'blue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
  //       onChangeText={text => onChangeUserName(text)}
  //       placeholder={'User name'}
  //       value={username}
  //     /> 



  //   <Text style={styles.step}> GPS </Text>
  //   <Text style={styles.text}> Would you like to turn on your GPS </Text>
  //   <View style={{flexDirection:'row', alignItems:'baseline',}}> 

  //   <TouchableOpacity activeOpacity={0.5}>
  //         <View style={styles.GPSbottonON}>
  //           <Text style={styles.GPSbottonTxt}>ON</Text>
  //         </View>
  //   </TouchableOpacity>
  //   <TouchableOpacity activeOpacity={0.5}>
  //         <View style={styles.GPSbottonOFF}>
  //           <Text style={styles.GPSbottonTxt}>OFF</Text>
  //         </View>
  //   </TouchableOpacity>
  //   </View>
  //   <Text style={styles.text}> Or you can type your city and country </Text> 
  //   <TextInput
  //       style={{ height: 40, borderColor: 'blue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
  //       onChangeText={text => onChangeCity(text)}
  //       placeholder={'Your city'}
 
  //     />

  // <TextInput
  //       style={{ height: 40, borderColor: 'blue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
  //       onChangeText={text => onChangeCountry(text)}
  //       placeholder={'Your country'}

  //     />

  //   <Text style={styles.step}> Age </Text>
  //   <Text style={styles.text}> Are you 18 years old </Text>

  //   <TouchableOpacity activeOpacity={0.5}>
  //         <View style={styles.AgeBottom}>
  //           <Text style={styles.AgeBottomTxt}>Yes</Text>
  //         </View>
  //   </TouchableOpacity>
  //   <TextInput
  //       style={{ height: 40, borderColor: 'blue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
  //       onChangeText={text => onChangeBirthDay(text)}
  //       placeholder={'Your year of birth'}
  //       value={birthday}
  //     />


  //   <TouchableOpacity activeOpacity={0.5} onPress={Start}>
  //         <View style={styles.startBottom}>
  //           <Text style={styles.startText}>Let's get start!</Text>
  //         </View>
  //   </TouchableOpacity>
  // </View>

  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',alignSelf: 'stretch'}}> 

  <Text style={styles.step}> Email </Text>
    <TextInput
      style={{ height: 30, borderColor: 'blue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
      onChangeText={text => onChangeEmail(text)}
      placeholder={'Your email'}
      value={email}
    />

  <Text style={styles.step}> Password </Text>
    <TextInput
      style={{ height: 30, borderColor: 'blue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
      onChangeText={text => onChangePassword(text)}
      placeholder={'Set your password'}
      value={password}
    /> 
    <TextInput
      style={{ height: 30, borderColor: 'blue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
      
      placeholder={'Password confirm'}
      value={'value'}
    /> 
  

  <Text style={styles.step}> User Name </Text>
    <TextInput
      style={{ height: 30, borderColor: 'blue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
      onChangeText={text => onChangeUserName(text)}
      placeholder={'User name'}
      value={username}
    /> 

  <Text style={styles.step}> GPS </Text>
  <Text style={styles.text}> Would you like to turn on your GPS </Text>
  <View style={{flexDirection:'row', alignItems:'baseline',}}> 

  <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.GPSbottonON}>
          <Text style={styles.GPSbottonTxt}>ON</Text>
        </View>
  </TouchableOpacity>
  <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.GPSbottonOFF}>
          <Text style={styles.GPSbottonTxt}>OFF</Text>
        </View>
  </TouchableOpacity>
  </View>
  <Text style={styles.text}> Or you can type your city and country </Text> 


  <View style={{flexDirection:'row', alignItems:'baseline',}}> 
      <TextInput style={styles.subTextinStyle} placeholder={'City'} underlineColorAndroid={'transparent'} keyboardType={'numeric'} onChangeText={text => onChangeCity(text)} value={city}/>
      <TextInput style={styles.subTextinStyle} placeholder={'Province'} underlineColorAndroid={'transparent'} keyboardType={'numeric'} onChangeText={text => onChangeProvince(text)} value={province}/>
      <TextInput style={styles.subTextinStyle} placeholder={'Country'} underlineColorAndroid={'transparent'} keyboardType={'numeric'} onChangeText={text => onChangeCountry(text)} value={country}/>
      </View>

  <Text style={styles.step}> Age </Text>


  <Text style={styles.text}> Are you 18 years old </Text>
  <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.AgeBottom}>
          <Text style={styles.AgeBottomTxt}>Yes</Text>
        </View>
  </TouchableOpacity>

  <TextInput
      style={{ height: 30, borderColor: 'blue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
      onChangeText={text => onChangeBirthDay(text)}
      placeholder={'Your year of birth'}
      value={birthday}
    />

    <Text style={styles.step}> Please type 3 keywords </Text>
      <View style={{flexDirection:'row', alignItems:'baseline',}}> 
      <TextInput style={styles.subTextinStyle} placeholder={'Keyword 1'} underlineColorAndroid={'transparent'} keyboardType={'numeric'} onChangeText={text => onChange1(text)} value={keyword1}/>
      <TextInput style={styles.subTextinStyle} placeholder={'Keyword 2'} underlineColorAndroid={'transparent'} keyboardType={'numeric'} onChangeText={text => onChange2(text)} value={keyword2}/>
      <TextInput style={styles.subTextinStyle} placeholder={'Keyword 3'} underlineColorAndroid={'transparent'} keyboardType={'numeric'} onChangeText={text => onChange3(text)} value={keyword3}/>
      </View>
    

  <TouchableOpacity activeOpacity={0.5} onPress={Start}>
        <View style={styles.startBottom}>
          <Text style={styles.startText}>Let's get start!</Text>
        </View>
  </TouchableOpacity>
</View>
  )
}


const styles = StyleSheet.create({
  title:{
    color:'#2B49C1',
    fontSize:30,
    fontWeight:'bold',
    textShadowColor:'#C0C0C0',
    textShadowRadius:2,
    textShadowOffset:{width:2,height:2},
  },

  step:{
    color:'#2B49C1',
    fontSize:18,
  },

  text:{
    color:'#2B49C1'
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  
  GPSbottonON:{
    width:'70%',
    height: 25,
    backgroundColor:'#5858FA',
    marginHorizontal:10
  },
  GPSbottonOFF:{
    width:'70%',
    height: 25,
    backgroundColor:'#5858FA',
    marginHorizontal:10,
  },
  GPSbottonTxt:{
    color:'white',
    alignSelf:'center', 
    fontSize: 15,
    padding:5,
  },
  AgeBottom:{
    width:'70%', 
    height: 25,
    backgroundColor:'#5858FA',
    marginHorizontal:10
  },
  AgeBottomTxt:{
    color:'white',
    alignSelf:'center', 
    fontSize:20,
  },


  startBottom:{
    width:200,
    height:40,
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:15,
    marginTop:15,
    borderRadius:8
  },

  startText:{
    color:'#ffffff',
    alignItems:'center',
    fontSize:20,
  },
  subTextinStyle: {
    width: '20%',
    height:30,
    marginLeft:15,
    borderColor: 'blue',
    borderWidth: 1, 
    margin: 10, 
  },
  keywordBtn:{
    width:'100%',
    height: 25,
    backgroundColor:'#5858FA',
    marginHorizontal:10,
  }
  
});



export default inject('RootStore')(observer(AddRequest));