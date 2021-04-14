import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch'
  }
});

class DisplayAnImageWithStyle extends Component {
  render() {
    return (
      <View>
        <Image
          style={styles.stretch}
          source={require('../../../data/cover.jpg')}
        />
      </View>
    );
  }
}

export default DisplayAnImageWithStyle;