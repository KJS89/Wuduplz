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
    const [value2, onChangeText2] = React.useState('');
    const [value3, onChangeText3] = React.useState('');
    const [value4, onChangeText4] = React.useState('');
    const [value5, onChangeText5] = React.useState('');
    const [value6, onChangeText6] = React.useState('');
    const [value7, onChangeText7] = React.useState('');
    


	return (
   

	<View> 
        <View>
        <Text>     </Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
            <Text onPress={() => navigation.navigate('Profile')}>SKIP       </Text>
        </View>
        <View>
		    <Text style={{fontSize:25,color:'#000080'}}>    Please write down the other 7 keywords.</Text>
            <Text style={{fontSize:15}}>        to push you videos that are more suitable for you.</Text>
        </View>
        
        <View>
            <TextInput
                style={{ height: 42, borderColor: 'dodgerblue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
                onChangeText={text => onChangeText(text)}
                placeholder="First" 
                value={value}
            />
            <TextInput
                style={{ height: 42, borderColor: 'dodgerblue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
                onChangeText={text => onChangeText2(text)}
                placeholder="Second" 
                value={value2}
            />
            <TextInput
                style={{ height: 42, borderColor: 'dodgerblue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
                onChangeText={text => onChangeText3(text)}
                placeholder="Third" 
                value={value3}
            />
            <TextInput
                style={{ height: 42, borderColor: 'dodgerblue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
                onChangeText={text => onChangeText4(text)}
                placeholder="Fourth" 
                value={value4}
            />
            <TextInput
                style={{ height: 42, borderColor: 'dodgerblue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
                onChangeText={text => onChangeText5(text)}
                placeholder="Fifth" 
                value={value5}
            />
            <TextInput
                style={{ height: 42, borderColor: 'dodgerblue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
                onChangeText={text => onChangeText6(text)}
                placeholder="Sixth" 
                value={value6}
            />
            <TextInput
                style={{ height: 42, borderColor: 'dodgerblue', borderWidth: 1, margin: 10, width: Dimensions.get('window').width - 30 }}
                onChangeText={text => onChangeText7(text)}
                placeholder="Seventh" 
                value={value7}
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
