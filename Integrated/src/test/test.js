import React from 'react';
import {
  View, 
  Text, 
  TextInput,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const AddRequest = ({ navigation }) => {
  const [value, onChangeText] = React.useState('');

  return (

  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',alignSelf: 'stretch'}}> 

    <Text style={styles.title}> Set Video Permissions </Text>
    <Text style={styles.title}>   </Text>
    <Text style={styles.title}>   </Text>
    
    
    {/* <View style={styles.subtiteleBackGround}>
    <Text style={styles.subtiteleTxt}>As Public</Text>
    </View>
    <Text style={styles.title}>   </Text>
    <View style={styles.explainBackground}>
    <Text style={styles.explainTxt}>Post to library and everyone can see your post</Text>
    </View>
    
    <Text style={styles.title}>   </Text>
    <Text style={styles.title}>   </Text>
    <View style={styles.subtiteleBackGround}>
    <Text style={styles.subtiteleTxt}>As Private</Text>
    </View> */}


    <View style={{flexDirection:'row', alignItems:'baseline'}}> 
    <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.publicBott}>
            <Text style={styles.setBottTxt}>As Public</Text>
          </View>
    </TouchableOpacity>
    <Text style={styles.title}>   </Text>
    <Text style={styles.title}>   </Text>
    <Text style={styles.title}>   </Text>
    <TouchableOpacity activeOpacity={0.5}>
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


    <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.continueBottom}>
            <Text style={styles.continueTxt}>Continue</Text>
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



export default AddRequest;