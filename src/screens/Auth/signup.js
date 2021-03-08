import React from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    scaleSizeH,
    scaleSizeW,
} from 'react-native';

const SignUp = ({ navigation }) => {
    const [value, onChangeText] = React.useState('');

    return (

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',alignSelf: 'stretch'}}>
            <Text style={styles.title}> You will find a better world </Text>

            <Text style={styles.step}> Step 1 </Text>
            <TextInput
                style={{ height: 40, borderColor: 'blue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
                onChangeText={text => onChangeText(text)}
                placeholder={'Your email'}
                value={value}
            />

            <Text style={styles.step}> Step 2 </Text>
            <TextInput
                style={{ height: 40, borderColor: 'blue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
                onChangeText={text => onChangeText(text)}
                placeholder={'Set your password'}
                value={value}
            />


            <Text style={styles.step}> Step 3 </Text>
            <TextInput
                style={{ height: 40, borderColor: 'blue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
                onChangeText={text => onChangeText(text)}
                placeholder={'User name'}
                value={value}
            />



            <Text style={styles.step}> Step 4 </Text>
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
            <TextInput
                style={{ height: 40, borderColor: 'blue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
                onChangeText={text => onChangeText(text)}
                placeholder={'Your city and country'}
                value={value}
            />

            <Text style={styles.step}> Step 5 </Text>
            <Text style={styles.text}> Are you 18 years old </Text>

            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.AgeBottom}>
                    <Text style={styles.AgeBottomTxt}>Yes</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity activeOpacity={0.5}>
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
        fontSize:20,
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
        width:'80%',
        height: 30,
        backgroundColor:'#5858FA',
        marginHorizontal:10
    },
    GPSbottonOFF:{
        width:'80%',
        height: 30,
        backgroundColor:'#5858FA',
        marginHorizontal:10,
    },
    GPSbottonTxt:{
        color:'white',
        alignSelf:'center',
        fontSize: 18,
        padding:5,
    },
    AgeBottom:{
        width:60,
        height: 40,
        backgroundColor:'#5858FA',
        marginHorizontal:10
    },
    AgeBottomTxt:{
        color:'white',
        alignSelf:'center',
        fontSize:28
    },


    startBottom:{
        width:200,
        height:50,
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
});



export default SignUp;


