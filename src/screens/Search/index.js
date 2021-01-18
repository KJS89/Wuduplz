import React, { useState } from 'react';
import { 
  ScrollView, 
  Image, 
  View, 
  TextAnimated, 
  SafeAreaView, 
  StatusBar,
  StyleSheet,
  Text,
  TextInput, 
  Dimensions,
} from 'react-native';
import { Container } from './styles';

// import BottomTabNavigator from '../../navigation/homeBottomTabNavigator';


import randomize from '../../functions/randomize';

// import LoaderComponent from './loaderComponent';
// import SearchComponent from './searchComponent';

// console.disableYellowBox = true;

const Search = ({ navigation }) => {

    const videos = [
        { url: "https://i.pinimg.com/564x/27/b4/5c/27b45cfadb28dbd857ebd662fe3cc1fe.jpg" },
        { url: "https://i.pinimg.com/236x/61/69/67/61696742e1b2d8b0d3ed70efaa1b0f89.jpg" },
        { url: "https://cdn.mensagenscomamor.com/content/images/m000518052.jpg?v=1&w=600&h=941" },
        { url: "https://66.media.tumblr.com/2170b24c045a368996ed3d0b84e74c4e/tumblr_pjn69mp52s1tbym8o_1280.jpg" },
        { url: "https://i.pinimg.com/564x/27/b4/5c/27b45cfadb28dbd857ebd662fe3cc1fe.jpg" },
    ]

    const categories = [
        { name: "selfcomemoji", description: "Trending" },
        { name: "amoréamor", description: "Trending" },
        { name: "athomewith", description: "Trending" },
        { name: "errodeportugues", description: "Trending" },
        { name: "horadopenalti", description: "Trending" },
    ]

    return (
        <Container>
            <ScrollView style={{ paddingHorizontal: 15 }}>
                      <TextInput
              placeholder="Search"
              placeHolderTextColor="#333"
              style={{
                flex: 1,
                marginTop: 10,
                marginBottom: 5,
                paddingHorizontal: 15,
                alignSelf: 'stretch',
                width: Dimensions.get("window").width - 50,
                backgroundColor: '#F5F5F5'
              }} />
                {categories.map((categorie, k) => (
                    <View key={k} style={{
                        paddingVertical: 15,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        borderBottomColor: '#E5E5E5',
                    }}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginVertical: 10
                        }}>
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                                borderColor: '#333',
                                borderWidth: StyleSheet.hairlineWidth
                            }}>
                            </View>
                            <View style={{
                                width: '50%'
                            }}>
                                <Text style={{ fontWeight: 'bold' }}>{categorie.name}</Text>
                                <Text style={{ color: '#333' }}>{categorie.description}</Text>
                            </View>
                            <View style={{
                                width: '25%',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            </View>
                        </View>
                        <View style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {randomize(videos).map((video, key) => (
                                    <Image
                                        key={key}
                                        source={{ uri: video.url }}
                                        style={{
                                            width: 150,
                                            height: 200,
                                            marginHorizontal: 2
                                        }} />
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </Container>
    )
  // const [scrollYValue, setScrollYValue] = useState(new Animated.Value(0));
  // const clampedScroll = Animated.diffClamp(
  //   Animated.add(
  //     scrollYValue.interpolate({
  //       inputRange: [0, 1],
  //       outputRange: [0, 1],
  //       extrapolateLeft: 'clamp',
  //     }),
  //     new Animated.Value(0),
  //   ),
  //   0,
  //   50,
  // )

  // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // return (
  //   <Animated.View>
  //     <StatusBar barStyle="dark-content" />
  //     <SafeAreaView>
  //       <SearchComponent clampedScroll={clampedScroll} />
  //       <Animated.ScrollView
  //         showsVerticalScrollIndicator={false}
  //         style={{
  //           margin: 10,
  //           backgroundColor: 'white',
  //           paddingTop: 80
  //         }}
  //         contentContainerStyle={{
  //           display: 'flex',
  //           flexDirection: 'row',
  //           flexWrap: 'wrap',
  //           justifyContent: 'space-around'
  //         }}
  //         onScroll={Animated.event(
  //           [{ nativeEvent: { contentOffset: { y: scrollYValue } } }],
  //           // { useNativeDriver: true },
  //           () => { },          // Optional async listener
  //         )}
  //         contentInsetAdjustmentBehavior="automatic">
  //         {array.map(item => <LoaderComponent />)}
  //       </Animated.ScrollView>
  //     </SafeAreaView>
  //   </Animated.View>
  // );
};

export default Search;