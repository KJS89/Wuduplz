import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

class App extends Component{

    constructor(){
        super()
        this.state = {
            text: ''
        }
        this.onSelect = this.onSelect.bind(this)
    }

    onSelect(index, value){
        this.setState({
        text: `Selected index: ${index} , value: ${value}`
        })
    }

    render(){
        return(
            <View style={{flex: 1,justifyContent: 'center',alignSelf: 'stretch',}}>
            <Text style={styles.title}> Please select a membership level </Text>
            <Text>  </Text>
              
                
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value)}
                >
                    <RadioButton value={'item1'} style={{justifyContent: 'center'}} >
                        <Text style={styles.option}>Diamond  $20/month</Text>
                        <Text style={styles.explain}>With unlimitied request per month</Text>
                        <Text>  </Text>
                    </RadioButton>

                    <RadioButton value={'item2'} style={{justifyContent: 'center'}}>
                        <Text style={styles.option}>Golden  $10/month</Text>
                        <Text style={styles.explain}>With 200 request per month</Text>
                        <Text>  </Text>
                    </RadioButton>

                    <RadioButton value={'item3'} style={{justifyContent: 'center'}}>
                        <Text style={styles.option}>Free  $0/month</Text>
                        <Text style={styles.explain}>With 100 request per month</Text>
                        <Text>  </Text>
                    </RadioButton>

                </RadioGroup>

                <Text style={styles.text}>{this.state.text}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  title:{
    color:'#2B49C1',
    fontSize:26,
    fontWeight:'bold',
    textShadowColor:'#C0C0C0',
    textShadowRadius:2,
    textShadowOffset:{width:2,height:2},
  },
  option:{
    fontSize:20,
    color: '#2B49C1'
  },
  explain:{
    fontSize:16,
  }
})

module.exports = App