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
		    <Text style={{fontSize:25,color:'#000080'}}>    Anything else of interest?</Text>
            <Text style={{fontSize:15}}>     Please write down the other 7 areas of interest.</Text>
        </View>
        
        <View>
            <TextInput
                style={{ height: 42, borderColor: 'dodgerblue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
            <TextInput
                style={{ height: 42, borderColor: 'dodgerblue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
            <TextInput
                style={{ height: 42, borderColor: 'dodgerblue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
            <TextInput
                style={{ height: 42, borderColor: 'dodgerblue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
            <TextInput
                style={{ height: 42, borderColor: 'dodgerblue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
            <TextInput
                style={{ height: 42, borderColor: 'dodgerblue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
            <TextInput
                style={{ height: 42, borderColor: 'dodgerblue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />   
            
            <Button
                onPress={() => navigation.navigate('Profile')}
                title="Next"
                color="#87cefa"
             />
        </View>
        <View style={{marginTop:29}}>
             
        </View>
	</View>
	)
}

export default AddRequest;