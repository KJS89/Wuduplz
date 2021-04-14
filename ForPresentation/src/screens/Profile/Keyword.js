import React from 'react';
import {
	View, 
	Text, 
	Button, 
	TextInput,
	Dimensions,
} from 'react-native';
import {inject,observer } from "mobx-react";
import axios from 'axios'
import {SERVER_ADDRESS} from '../../../data/address'


const AddRequest = ({ navigation,RootStore }) => {
	const [value, onChangeText] = React.useState(RootStore.keywords[3].KeywordContent==null?'empty':RootStore.keywords[3].KeywordContent);
    const [value2, onChangeText2] = React.useState(RootStore.keywords[4].KeywordContent==null?'empty':RootStore.keywords[4].KeywordContent);
    const [value3, onChangeText3] = React.useState(RootStore.keywords[5].KeywordContent==null?'empty':RootStore.keywords[5].KeywordContent);
    const [value4, onChangeText4] = React.useState(RootStore.keywords[6].KeywordContent==null?'empty':RootStore.keywords[6].KeywordContent);
    const [value5, onChangeText5] = React.useState(RootStore.keywords[7].KeywordContent==null?'empty':RootStore.keywords[7].KeywordContent);
    const [value6, onChangeText6] = React.useState(RootStore.keywords[8].KeywordContent==null?'empty':RootStore.keywords[8].KeywordContent);
    const [value7, onChangeText7] = React.useState(RootStore.keywords[9].KeywordContent==null?'empty':RootStore.keywords[9].KeywordContent);


    const uploadChanges = async()=>{
        var arr = [value,value2,value3,value4,value5,value6,value7]
        for(var i=0;i<7;i++){
            if(arr[i]=='empty')
                arr[i]=null
        }
        for(var i=3;i<10;i++){
            RootStore.updateOneKeyword(i,arr[i-3])
        }

        var keywords=[]

        for(var i=0;i<RootStore.keywords.length;i++)
            keywords.push(RootStore.keywords[i])
        
        await axios.post(`${SERVER_ADDRESS}/front-end/editUser`,{'keywords':keywords})
    }
    


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
                onPress={() => {
                    uploadChanges();
                    navigation.navigate('Edit')
                }}
                title="Next"
                color="#87cefa"
             />
        </View>
        <View style={{marginTop:29}}>
             
        </View>
	</View>
	)
}

export default inject('RootStore')(AddRequest);