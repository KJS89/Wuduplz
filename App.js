import React, {Component} from 'react';
//组件的引入
import {StyleSheet, Text, View, Switch, Button} from 'react-native';


type Props = {};
export default class App extends Component<Props> {

    //参数的设置
    constructor(props) {
        super(props);
        this.params = {
            userId: '',
            password: '',
            keepPwd: 'no',
            autoLogin: 'no'
        }
        this.state = {
            userId: '',
            password: '',
            keepPwd: false,
            autoLogin: false,
            loginText: '登录'
        }
    }


    //在这里写入所有的组件
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Payment</Text>
                <View style={styles.container}>
                  <Text style={styles.textStyle}>card nunmber</Text>
                  <Text style={styles.textStyle}>expiration date{this.props.logNmae}</Text>
                  <Text style={styles.textStyle}>security code{this.props.logPwd}</Text>
                </View>
                <Text style={styles.instructions}>Billing Address</Text>
                <View style={styles.container}>
                  <Text style={styles.textStyle}>first name</Text>
                  <Text style={styles.textStyle}>last name{this.props.logNmae}</Text>
                  <Text style={styles.textStyle}>address{this.props.logPwd}</Text>
                  <Text style={styles.textStyle}>city{this.props.logPwd}</Text>
                  <Text style={styles.textStyle}>province{this.props.logPwd}</Text>
                  <Text style={styles.textStyle}>zip code{this.props.logPwd}</Text>
                  <Text style={styles.textStyle}>phone number{this.props.logPwd}</Text>
                </View>
                <Text style={styles.instructions}>Review Order</Text>
                <Text style={styles.instructions}>Your item                   $9.99</Text>
                <Text style={styles.instructions}>Estimated tax               $0.13</Text>
                <Text style={styles.instructions}>Estimated total             $10.12</Text>

                <Text style={styles.instructions}>place order and pay now</Text>
                <View style={styles.loginBtn}>
                    <Button title='PLACE ORDER' color="#808080"/>
                </View>
            </View>
        );
    }


}

//设置需要的样式
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        fontSize: 10,
        marginBottom: 5,
    },

    switches: {
        width: '80%',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    switch: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    switchText: {
        marginLeft: 5,
    },

    loginBtn: {
        width: '80%',
        height: 40,
        marginLeft: 35,
        marginRight: 35,
        borderRadius: 100,
        marginTop: 20,
    },

});