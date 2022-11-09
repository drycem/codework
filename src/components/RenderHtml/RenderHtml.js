import React from 'react';
import {useWindowDimensions} from 'react-native';
import RenderHTML from 'react-native-render-html';

export default ({source}) => {
  const {width} = useWindowDimensions();
  return <RenderHTML contentWidth={width} source={source} />;
};
