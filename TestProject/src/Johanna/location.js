import React from 'react';
import {
	View, 
	Text, 
	Button, 
	TextInput,
	Dimensions,
} from 'react-native';


const AddRequest = ({ navigation }) => {
	const [value, onChangeText] = React.useState('');


	return (
   

	<View> 
        <View>
            <Text>     </Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
            <Text onPress={() => navigation.navigate('Profile')}>SKIP       </Text>
        </View>
        <View>
            <Text style={{fontSize:25,color:'#000080'}}>    Determine your location</Text>
            <Text>   </Text>
            <Text style={{fontSize:15,color:'black'}}>     Automatic Positioning</Text>
            <View  style={{width:60, height:28,borderColor:'royalblue',borderWidth:1,marginTop:10, marginLeft:15, marginBottom:10}}>
                <Text style={{color:'royalblue'}}>  Ottawa</Text>
            </View>
            
            <Text style={{fontSize:15,color:'black'}}>     Popular Cities</Text>
            <View style={{flexDirection:'row'}}>
                <View  style={{width:60, height:28,borderColor:'royalblue',borderWidth:1,marginTop:10, marginLeft:15}}>
                    <Text style={{color:'royalblue'}}>  Ottawa</Text>
                </View>
                <View  style={{width:60, height:28,borderColor:'royalblue',borderWidth:1,marginTop:10, marginLeft:15}}>
                    <Text style={{color:'royalblue'}}>Montreal</Text>
                </View>
                <View  style={{width:60, height:28,borderColor:'royalblue',borderWidth:1,marginTop:10, marginLeft:15}}>
                    <Text style={{color:'royalblue'}}>  Toronto</Text>
                </View>
                <View  style={{width:60, height:28,borderColor:'royalblue',borderWidth:1,marginTop:10, marginLeft:15}}>
                    <Text style={{color:'royalblue'}}>   Albert</Text>
                </View>
                <View  style={{width:60, height:28,borderColor:'royalblue',borderWidth:1,marginTop:10, marginLeft:15}}>
                    <Text style={{color:'royalblue'}}> Chicago</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',marginBottom:10}}>
                <View  style={{width:60, height:28,borderColor:'royalblue',borderWidth:1,marginTop:10, marginLeft:15}}>
                    <Text style={{color:'royalblue'}}>  Boston</Text>
                </View>
                <View  style={{width:60, height:28,borderColor:'royalblue',borderWidth:1,marginTop:10, marginLeft:15}}>
                    <Text style={{color:'royalblue'}}> London</Text>
                </View>
                <View  style={{width:60, height:28,borderColor:'royalblue',borderWidth:1,marginTop:10, marginLeft:15}}>
                    <Text style={{color:'royalblue'}}>    Paris</Text>
                </View>
                <View  style={{width:60, height:28,borderColor:'royalblue',borderWidth:1,marginTop:10, marginLeft:15}}>
                    <Text style={{color:'royalblue'}}>  Bei Jing</Text>
                </View>
                <View  style={{width:60, height:28,borderColor:'royalblue',borderWidth:1,marginTop:10, marginLeft:15}}>
                    <Text style={{color:'royalblue'}}> Sydney</Text>
                </View>
            </View>
            <Text style={{fontSize:15,color:'black'}}>     Enter Your Contry</Text>
            <TextInput
                style={{ height: 35, borderColor: 'dodgerblue', borderWidth: 1, marginLeft: 15, width: 250,marginTop:10, marginBottom:10 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
            <Text style={{fontSize:15,color:'black'}}>     Enter Your City</Text>
            <TextInput
                style={{ height: 35, borderColor: 'dodgerblue', borderWidth: 1, marginLeft: 15, marginTop:10,width: 250, marginBottom:124}}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
            <Button
                onPress={() => navigation.navigate('Profile')}
                title="Next"
                color="#87cefa"
             />
             


            
        </View>

	</View>
	)
}

export default AddRequest;