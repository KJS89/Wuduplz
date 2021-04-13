import React from 'react';
import { Dimensions, Image } from 'react-native';
import { Circle, Rect } from "react-native-svg";
import ContentLoader from 'rn-content-loader';


export const deviceWidth = Dimensions.get('window').width;

const LoaderComponent = props => (
  <ContentLoader
    height={120}
    width={(deviceWidth - 70)}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#f3ffff"
    {...props}
  >
    <Rect x="70" y="15" rx="4" ry="4" width="117" height="6.4" />
    <Rect x="70" y="35" rx="3" ry="3" width="85" height="6.4" />
    <Rect x="0" y="80" rx="3" ry="3" width="250" height="6.4" />
    <Rect x="0" y="100" rx="3" ry="3" width="250" height="6.4" />
    <Rect x="0" y="120" rx="3" ry="3" width="250" height="6.4" />
    <Circle cx="30" cy="30" r="30" />
    <Image source={{uri:''}} />

  </ContentLoader>
)


export default LoaderComponent;