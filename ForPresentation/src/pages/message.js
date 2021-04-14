  
import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    FlatList,
    RefreshControl,
    ActivityIndicator,
} from 'react-native';


type Props = {};
const CITY_NAMES = ['XXX', 'XXX', 'XXX','XXX', 'XXX'];
export default class FlatListDemo extends Component<Props> {
    static navigationOptions = {
        title: 'FlatListDemo',
    };
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,//初始化的状态，此时加载状态为不加载
            dataArray: CITY_NAMES//初始数据
        }
    }

    

    _renderItem= (data)=> {//自定义的渲染组件
        return <View style={styles.item}>
            <Text syle={styles.text}>{data.item}</Text>
        </View>
    };


    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    //1:数据的获取和渲染
                    data={this.state.dataArray}
                    renderItem={(data) => this._renderItem(data)}//将List中的renderRow中的内容抽出来单独放成一个组件来渲染
                    // refreshing={this.state.isLoading}
                    // onRefresh={() => {
                    //     this.loadData();
                    // }}
                    //2:自定义的下拉刷新
                    refreshControl={        //为控制listView下拉刷新的属性  用于自定义下拉图标设置
                        <RefreshControl         //这一组件可以用在ScrollView或ListView内部，为其添加下拉刷新的功能。
                            title={'Loading'}
                            colors={['red']}//android的刷新图标颜色
                            tintColor={'orange'}//ios的刷新图标颜色
                            titleColor={'red'}//标题的颜色
                            refreshing={this.state.isLoading}//判断是否正在刷新
                            onRefresh={() => {                  //触动刷新的方法
                                this.loadData(true)//加载数据(带参数)
                            }}
                        />
                    }

                    //3:自定义的上拉加载数据
                    
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#c5ecff',
        height: 80,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation:5,//漂浮的效果
        borderRadius:5,//圆角
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    indicatorContainer: {
        alignItems: 'center'
    },
    indicator: {
        color: 'red',
        margin: 10
    }
})