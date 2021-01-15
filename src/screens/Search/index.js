import React, { useState } from 'react';
import { Animated, SafeAreaView, StatusBar } from 'react-native';
import LoaderComponent from './loaderComponent';
import SearchComponent from './searchComponent';

console.disableYellowBox = true;

const Search = () => {
  const [scrollYValue, setScrollYValue] = useState(new Animated.Value(0));
  const clampedScroll = Animated.diffClamp(
    Animated.add(
      scrollYValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolateLeft: 'clamp',
      }),
      new Animated.Value(0),
    ),
    0,
    50,
  )

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Animated.View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <SearchComponent clampedScroll={clampedScroll} />
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            margin: 10,
            backgroundColor: 'white',
            paddingTop: 80
          }}
          contentContainerStyle={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollYValue } } }],
            // { useNativeDriver: true },
            () => { },          // Optional async listener
          )}
          contentInsetAdjustmentBehavior="automatic">
          {array.map(item => <LoaderComponent />)}
        </Animated.ScrollView>
      </SafeAreaView>
    </Animated.View>
  );
};

export default Search ;