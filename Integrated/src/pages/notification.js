import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    ScrollView,
    FlatList,
    RefreshControl,
    Dimensions,
    Button,
    TextInput,
} from 'react-native';

let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;

export default class MainPage extends Component {

    state = {
        isRefresh: false,
    }

    _onRefresh() {
        console.log('onRefresh.');

        this.setState({isRefresh: true});
        setTimeout(() => this.setState({isRefresh: false}), 3000);
    }

    _onScroll() {
        console.log('onScroll.');
    }
    render() {
        return (
            <View style={styles.container}>
                <Button title="Notifaciton Message" onPress={() => _outScrollView.scrollToEnd({animated: false})}/>
                <ScrollView
                    ref={(scrollView) => {
                        _outScrollView = scrollView;
                    }}
                    contentContainerStyle={styles.outScrollView}
                    onScroll={this._onScroll} //回调
                    scrollEventThrottle={100} // ios : 控制scroll回调的频率,没秒触发多少次
                    showsVerticalScrollIndicator={false} //设置不显示垂直的滚动条
                    keyboardDismissMode={'on-drag'} // 'none'默认值，滑动时不隐藏软件盘，
                    // ‘on-drag'滑动时隐藏软件盘.interactive ：ios可用。上滑可以回复键盘
                    keyboardShouldPersistTaps={'always'} //'never'默认值，点击TextInput以外的组件，软键盘收起，
                    // 'always'不会收起，`handle` 当点击事件被子组件捕获时，
                    //键盘不会自动收起,但我用android测试了，发现没有效果
                    //我使用的版本：RectNative 0.45
                    refreshControl={
                        <RefreshControl refreshing={this.state.isRefresh}
                                        onRefresh={this._onRefresh.bind(this)}
                                        title={'load...'}
                                        tintColor={'#ff0000'}
                                        colors={['#ff0000', '#00ff00', '#0000ff']}
                                        progressBackgroundColor={'#ffff00'}
                        />
                    }
                >

                    <ScrollView horizontal={true} contentContainerStyle={styles.inScrollView}
                                showsHorizontalScrollIndicator={false} //不显示滑动条
                    >
                    <View>
                    <Text style={{fontSize:16,color:'black'}}> Alice's request looks forward your reply</Text>
                    <View  style={{backgroundColor:"#87cefa"}}>
                        <Text style={{fontSize:16,color:'royalblue'}}> Would you please show me a happy baby?</Text>
                        <View style={{width:120,marginLeft:232,marginTop:5}}>
                            <Button
                                onPress={() => navigation.navigate('Profile')}
                                title="Shoot Video"
                                color="dodgerblue"
                            />
                        </View>  
                    </View>
                    </View>
                    </ScrollView>

                    <ScrollView horizontal={true} contentContainerStyle={styles.inScrollView}>
                    <View>
                    <Text style={{fontSize:16,color:'black'}}> Bob's request looks forward your reply</Text>
                    <View  style={{backgroundColor:"#87cefa"}}>
                        <Text style={{fontSize:16,color:'royalblue'}}> Would you please show me a flower?</Text>
                        <View style={{width:120,marginLeft:232,marginTop:5}}>
                            <Button
                                onPress={() => navigation.navigate('Profile')}
                                title="Shoot Video"
                                color="dodgerblue"
                            />
                        </View>  
                    </View>
                    </View>
                    </ScrollView>
                    <ScrollView horizontal={true} contentContainerStyle={styles.inScrollView}>
                    <View>
                    <Text style={{fontSize:16,color:'black'}}> Celia responded to your request</Text>
                    <View  style={{backgroundColor:"#87cefa"}}>
                        <Text style={{fontSize:16,color:'royalblue'}}> Would you please show me a forest?</Text>
                        <View style={{width:120,marginLeft:232,marginTop:5}}>
                            <Button
                                onPress={() => navigation.navigate('Profile')}
                                title="Shoot Video"
                                color="dodgerblue"
                            />
                        </View>  
                    </View>
                    </View>
                    </ScrollView>


                    <ScrollView horizontal={false} contentContainerStyle={styles.inScrollView}>
                    <View>
                    <Text style={{fontSize:16,color:'black'}}> David's request looks forward your reply</Text>
                    <View  style={{backgroundColor:"#87cefa"}}>
                        <Text style={{fontSize:16,color:'royalblue'}}> Would you please show me a lovely cat?</Text>
                        <View style={{width:120,marginLeft:224,marginTop:5}}>
                            <Button
                                onPress={() => navigation.navigate('Profile')}
                                title="Shoot Video"
                                color="dodgerblue"
                            />
                        </View>  
                    </View>
                    </View>
                    </ScrollView>

                    <ScrollView horizontal={false} contentContainerStyle={styles.inScrollView}>
                    <View>
                    <Text style={{fontSize:16,color:'black'}}> Frank's responded to your request</Text>
                    <View  style={{backgroundColor:"#87cefa"}}>
                        <Text style={{fontSize:16,color:'royalblue'}}> Would you please show me a cute dog?</Text>
                        <View style={{width:120,marginLeft:224,marginTop:5}}>
                            <Button
                                onPress={() => navigation.navigate('Profile')}
                                title="Shoot Video"
                                color="dodgerblue"
                            />
                        </View>  
                    </View>
                    </View>
                    </ScrollView>

                    <ScrollView horizontal={false} contentContainerStyle={styles.inScrollView}>
                    <View>
                    <Text style={{fontSize:16,color:'black'}}> Helen's request looks forward your reply</Text>
                    <View  style={{backgroundColor:"#87cefa"}}>
                        <Text style={{fontSize:16,color:'royalblue'}}> Would you please show me a dinner?</Text>
                        <View style={{width:120,marginLeft:224,marginTop:5}}>
                            <Button
                                onPress={() => navigation.navigate('Profile')}
                                title="Shoot Video"
                                color="dodgerblue"
                            />
                        </View>  
                    </View>
                    </View>
                    </ScrollView>

                    <ScrollView horizontal={false} contentContainerStyle={styles.inScrollView}>
                    <View>
                    <Text style={{fontSize:16,color:'black'}}> Peter's request looks forward your reply</Text>
                    <View  style={{backgroundColor:"#87cefa"}}>
                        <Text style={{fontSize:16,color:'royalblue'}}> Would you please show me a hot dog?</Text>
                        <View style={{width:120,marginLeft:224,marginTop:5}}>
                            <Button
                                onPress={() => navigation.navigate('Profile')}
                                title="Shoot Video"
                                color="dodgerblue"
                            />
                        </View>  
                    </View>
                    </View>
                    </ScrollView>
                </ScrollView>
            </View>
        );
    }
}
var
    styles = StyleSheet.create({
        container: {
            flex: 1,
            height: '50%',
        },

        outScrollView: {
            // flex: 1,  这里指定flex的话，会出现不能上下滑动,原因在这样会把 "内容高度定死了",所以最好不要设置高度/flex，让内容的高度自适应
            justifyContent: 'center',
            borderColor:'black',
        },

        inScrollView: {
            padding: 20,
            borderColor:'black',
        }

    });
    AppRegistry
    .registerComponent(
        'Project08'
        , () =>
            MainPage
    )
;