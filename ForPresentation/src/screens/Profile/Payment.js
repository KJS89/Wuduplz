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
    const [value8, onChangeText8] = React.useState('');
    const [value9, onChangeText9] = React.useState('');
    const [value0, onChangeText0] = React.useState('');
    


	return (
   

	<View> 
        <View>
        <Text>     </Text>
        </View>
        <View>
		    <Text style={{textAlign: 'center', fontSize:24,color:'#000080'}}>Payment</Text>
        </View>
        
        <View>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:15, marginTop:13}}>    Card Nunmber</Text>
            <TextInput
                style={{ height: 35, borderColor: 'dodgerblue', borderWidth: 1, margin: 5, width:245 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
            </View>

            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:15, marginTop:13}}>    Expiration Date</Text>
            <TextInput
                style={{ height: 35, borderColor: 'dodgerblue', borderWidth: 1, margin:5, width:70 }}
                onChangeText={text => onChangeText2(text)}
                placeholder="YYMM"
                value={value2}
            />
            <Text style={{fontSize:15, marginTop:13}}>    Security Code</Text>
            <TextInput
                style={{ height: 35, borderColor: 'dodgerblue', borderWidth: 1, margin:5, width:55 }}
                onChangeText={text => onChangeText3(text)}
                value={value3}
            />
            </View>
  
            <Text style={{textAlign: 'center',fontSize:18,color:'#000080', margin:5}}>Billing Address </Text>
            
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:15, marginTop:13}}>    First Name</Text>
            <TextInput
                style={{ height: 35, borderColor: 'dodgerblue', borderWidth: 1, margin:5, width:90 }}
                onChangeText={text => onChangeText4(text)}
                value={value4}
            />
            <Text style={{fontSize:15, marginTop:13}}>   Last Name</Text>
            <TextInput
                style={{ height: 35, borderColor: 'dodgerblue', borderWidth: 1, margin: 5, width:90 }}
                onChangeText={text => onChangeText5(text)}
                value={value5}
            />
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:15, marginTop:13}}>    Address</Text>
            <TextInput
                style={{ height: 35, borderColor: 'dodgerblue', borderWidth: 1, margin: 5, width:290 }}
                onChangeText={text => onChangeText6(text)}
                value={value6}
            />
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:15, marginTop:13}}>    City</Text>
            <TextInput
                style={{ height: 35, borderColor: 'dodgerblue', borderWidth: 1, margin: 5, width:110 }}
                onChangeText={text => onChangeText7(text)}
                value={value7}
            />
            <Text style={{fontSize:15, marginTop:13}}>         Province</Text>
            <TextInput
                style={{ height: 35, borderColor: 'dodgerblue', borderWidth: 1, margin: 5, width:110 }}
                onChangeText={text => onChangeText8(text)}
                value={value8}
            />
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:15, marginTop:13}}>    Postal Code</Text>
            <TextInput
                style={{ height: 35, borderColor: 'dodgerblue', borderWidth: 1, margin: 5, width:270 }}
                onChangeText={text => onChangeText9(text)}
                value={value9}
            />
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:15, marginTop:13}}>    Phone Number</Text>
            <TextInput
                style={{ height: 35, borderColor: 'dodgerblue', borderWidth: 1, margin: 5, width:250 }}
                onChangeText={text => onChangeText0(text)}
                value={value0}
            />
            </View>
            <Text style={{textAlign: 'center', color:'#000080', fontSize: 18, marginBottom: 5}}>Review Order</Text>
                <Text style={{textAlign: 'center', color: '#333333', fontSize: 15, marginBottom: 5}}>Your item                   $9.99</Text>
                <Text style={{textAlign: 'center', color: '#333333', fontSize: 15, marginBottom: 5}}>Estimated tax               $0.13</Text>
                <Text style={{textAlign: 'center', color: '#333333', fontSize: 15, marginBottom: 5}}>Estimated total             $10.12</Text>

                <Text style={{textAlign: 'center', color: 'red', fontSize: 15, marginBottom: 5}}>place order and pay now</Text>
                <View style={{width: '80%', height: 35, marginLeft: 35,  marginRight: 35, borderRadius: 100}}>
                    <Button title='PLACE ORDER' color="orange"/>
                </View>
            
        </View>
        <View style={{marginTop:29}}>
             
        </View>
	</View>
	)
}

export default AddRequest;