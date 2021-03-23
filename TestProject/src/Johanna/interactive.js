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
    Image,
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
                <Button title="Interactive Message" onPress={() => _outScrollView.scrollToEnd({animated: false})}/>
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
                    <View style={{backgroundColor:'#87cefa',width:310}}>
                    <Text style={{fontSize:16,color:'black'}}> Alice likes your video</Text>
                    <Text style={{fontSize:13,color:'royalblue'}}>    25 minutes ago</Text>
                    </View>
                    <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}style={{width: 40, height: 40}} />
                    </ScrollView>

                    <ScrollView horizontal={true} contentContainerStyle={styles.inScrollView}>
                    <View style={{backgroundColor:'#87cefa',width:310}}>
                    <Text style={{fontSize:16,color:'black'}}> Alice likes your video</Text>
                    <Text style={{fontSize:13,color:'royalblue'}}>    30 minutes ago</Text>
                    </View>
                    <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}style={{width: 40, height: 40}} />
                    </ScrollView>
                    <ScrollView horizontal={true} contentContainerStyle={styles.inScrollView}>
                    <View style={{backgroundColor:'#87cefa',width:310}}>
                    <Text style={{fontSize:16,color:'black'}}> Amy likes your video</Text>
                    <Text style={{fontSize:13,color:'royalblue'}}>    45 minutes ago</Text>
                    </View>
                    <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}style={{width: 40, height: 40}} />
                    </ScrollView>


                    <ScrollView horizontal={true} contentContainerStyle={styles.inScrollView}>
                    <View style={{backgroundColor:'#87cefa',width:310}}>
                    <Text style={{fontSize:16,color:'black'}}> Mike likes your video</Text>
                    <Text style={{fontSize:13,color:'royalblue'}}>    1 hour ago</Text>
                    </View>
                    <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}style={{width: 40, height: 40}} />
                    </ScrollView>

                    <ScrollView horizontal={true} contentContainerStyle={styles.inScrollView}>
                    <View style={{backgroundColor:'#87cefa',width:310}}>
                    <Text style={{fontSize:16,color:'black'}}> John likes your video</Text>
                    <Text style={{fontSize:13,color:'royalblue'}}>    2 hours ago</Text>
                    </View>
                    <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}style={{width: 40, height: 40}} />
                    </ScrollView>

                    <ScrollView horizontal={true} contentContainerStyle={styles.inScrollView}>
                    <View style={{backgroundColor:'#87cefa',width:310}}>
                    <Text style={{fontSize:16,color:'black'}}> Allen likes your video</Text>
                    <Text style={{fontSize:13,color:'royalblue'}}>    3 hours ago</Text>
                    </View>
                    <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}style={{width: 40, height: 40}} />
                    </ScrollView>

                    <ScrollView horizontal={true} contentContainerStyle={styles.inScrollView}>
                    <View style={{backgroundColor:'#87cefa',width:310}}>
                    <Text style={{fontSize:16,color:'black'}}> David likes your video</Text>
                    <Text style={{fontSize:13,color:'royalblue'}}>    3 hours ago</Text>
                    </View>
                    <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}style={{width: 40, height: 40}} />
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
            marginLeft:10,
            padding: 5,
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